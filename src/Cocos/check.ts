import Path from 'path';
import fs from 'fs';

export interface CheckResult {
    // allSize: number; //所有资源文件大小
    imageSize: number; //图片资源文件大小
    spineSize: number; //spine动画资源文件大小
    audioSize: number; //音频资源文件大小
    fntSize: number; //字体资源文件大小
    // referenceAllSize: number; //所有已引用资源文件大小
    referenceImageSize: number; //已引用图片资源文件大小
    referenceSpineSize: number; //已引用spine动画资源文件大小
    referenceAudioSize: number; //已引用音频资源文件大小
    referenceFntSize: number; //已引用字体资源文件大小
    noReferceUrl: Record<string, Array<string>>; //未引用资源url
}

interface BaseMeta {
    uuid: string;
}

interface ImageMeta extends BaseMeta {
    subMetas: Record<
        string,
        { uuid: string; rawWidth: number; rawHeight: number }
    >;
}

interface SpineMeta extends BaseMeta {
    textures: Array<string>;
}

interface FntMeta extends BaseMeta {
    textureUuid: string;
}

type dataType =
    | 'Number'
    | 'Boolean'
    | 'String'
    | 'Array'
    | 'Function'
    | 'Object'
    | 'Undefined'
    | 'Null';

const findSizeOf2 = (num: number): number => {
    let temp = num - 1;
    temp |= temp >> 1;
    temp |= temp >> 2;
    temp |= temp >> 4;
    temp |= temp >> 8;
    temp |= temp >> 16;
    return temp < 0 ? 1 : temp + 1;
};

const getPictureMemory = (width: number, height: number): number => {
    const nearWidth = findSizeOf2(width);
    const nearHeight = findSizeOf2(height);
    return nearWidth * nearHeight * 4;
};

const logicSize = (size: number): number => {
    return Math.round((size / 1024) * 100) / 100;
};

const checkType = (source: unknown): dataType => {
    return Object.prototype.toString
        .call(source)
        .replace(/.*\s|\]/g, '') as dataType;
};

export function deleteAsset(files: Array<string>): void {
    files.forEach((url) => fs.unlinkSync(url));
}

export function deleteAssets(files: Record<string, Array<string>>): void {
    Object.keys(files).forEach((key) => deleteAsset(files[key]));
}

//检测 image spine audio fnt
export function check(assetPath: string): CheckResult {
    const prefabs: Array<unknown> = [];

    const result: CheckResult = {
        imageSize: 0,
        spineSize: 0,
        audioSize: 0,
        fntSize: 0,
        referenceImageSize: 0,
        referenceSpineSize: 0,
        referenceAudioSize: 0,
        referenceFntSize: 0,
        noReferceUrl: Object.create(null),
    };

    const assetsMap: Map<
        string,
        {
            type: 'image' | 'spine' | 'audio' | 'fnt';
            size: number;
            path: string;
        }
    > = new Map();

    const uuidMap: Map<string, Array<string>> = new Map();

    //存放spine fnt资源uuid
    const cache: Array<string> = [];

    const search = (path: string): void => {
        const stats = fs.statSync(path);
        if (stats.isDirectory()) {
            //递归搜索文件夹
            fs.readdirSync(path).forEach((p) => search(Path.resolve(path, p)));
        } else if (/\.(png|jpg).meta$/.test(path)) {
            //处理图片
            const meta = JSON.parse(
                fs.readFileSync(path, 'utf-8')
            ) as ImageMeta;
            const { subMetas, uuid } = meta;
            let size = 0;
            Object.keys(subMetas).forEach((key) => {
                const { uuid, rawWidth, rawHeight } = subMetas[key];
                size = getPictureMemory(rawWidth, rawHeight);
                uuidMap.set(uuid, [meta.uuid]);
            });
            assetsMap.set(uuid, { type: 'image', size, path });
            result.imageSize += size;
        } else if (/\.json.meta$/.test(path)) {
            //处理动画
            const { uuid, textures } = JSON.parse(
                fs.readFileSync(path, 'utf-8')
            ) as SpineMeta;
            uuidMap.set(uuid, textures);
            //计算大小
            let size = 0;
            size += fs.statSync(path.replace(/.meta$/, '')).size;
            size += fs.statSync(path.replace(/.json.meta$/, '.atlas')).size;
            assetsMap.set(uuid, { type: 'spine', path, size });
            result.spineSize += size;
            cache.push(uuid);
        } else if (/\.mp3.meta$/.test(path)) {
            //处理音频
            const { uuid } = JSON.parse(
                fs.readFileSync(path, 'utf-8')
            ) as BaseMeta;
            const size = fs.statSync(path.replace(/.meta$/, '')).size;
            result.audioSize += size;
            assetsMap.set(uuid, { type: 'audio', path, size });
        } else if (/\.fnt.meta$/.test(path)) {
            //处理字体
            const { uuid, textureUuid } = JSON.parse(
                fs.readFileSync(path, 'utf-8')
            ) as FntMeta;
            uuidMap.set(uuid, [textureUuid]);
            //计算大小
            const size = fs.statSync(path.replace(/.meta$/, '')).size;
            result.fntSize += size;
            assetsMap.set(uuid, { type: 'fnt', path, size });
            cache.push(uuid);
        } else if (/\.prefab$/.test(path)) {
            //处理预制体
            prefabs.push(...JSON.parse(fs.readFileSync(path, 'utf-8')));
        }
    };

    //搜索路径下的所有资源建立map
    search(assetPath);

    cache.forEach((uuid) => {
        uuidMap.get(uuid)?.forEach((u) => {
            const { size } = assetsMap.get(u)!;
            const { type } = assetsMap.get(uuid)!;
            if (type === 'spine') {
                result.spineSize += size;
            } else if (type === 'fnt') {
                result.fntSize += size;
            }
            assetsMap.get(uuid)!.size += size;
            result.imageSize -= size;
        });
    });

    const logic = (source: any): void => {
        if (!source) {
            return;
        }
        Object.keys(source).forEach((key) => {
            if (checkType(source[key]) === 'Object') {
                logic(source[key]);
            } else if (checkType(source[key]) === 'Array') {
                source[key].forEach((o: any) => logic(o));
            } else if (key === '__uuid__') {
                const uuid = source[key];
                if (assetsMap.has(uuid)) {
                    const { type, size } = assetsMap.get(uuid)!;
                    const cache: Array<string> = [uuid];
                    if (type === 'image') {
                        result.referenceImageSize += size;
                    } else if (type === 'audio') {
                        result.referenceAudioSize += size;
                    } else if (type === 'spine') {
                        result.referenceSpineSize += size;
                        cache.push(...uuidMap.get(uuid)!);
                    } else {
                        result.referenceFntSize += size;
                        cache.push(...uuidMap.get(uuid)!);
                    }
                    cache.forEach((uuid) => assetsMap.delete(uuid));
                    uuidMap.delete(uuid);
                } else if (uuidMap.has(uuid)) {
                    uuidMap.get(uuid)?.forEach((u) => {
                        const { size } = assetsMap.get(u)!;
                        result.referenceImageSize += size;
                        assetsMap.delete(u);
                    });
                    uuidMap.delete(uuid);
                }
            }
        });
    };

    for (const source of prefabs) {
        logic(source);
    }

    // result.allSize =
    //     result.imageSize + result.audioSize + result.spineSize + result.fntSize;

    // result.referenceAllSize =
    //     result.referenceImageSize +
    //     result.referenceAudioSize +
    //     result.referenceSpineSize +
    //     result.referenceFntSize;
    assetsMap.forEach(({ type, path }, uuid) => {
        const url = [path, path.replace(/.meta$/, '')];
        if (type === 'spine') {
            url.push(path.replace(/.json.meta$/, '.atlas'));
            url.push(path.replace(/.json.meta$/, '.atlas.meta'));
            uuidMap.get(uuid)?.forEach((u) => {
                if (assetsMap.has(u)) {
                    url.push(
                        assetsMap.get(u)!.path,
                        assetsMap.get(u)!.path.replace(/.meta$/, '')
                    );
                    assetsMap.delete(u);
                }
            });
        } else if (type === 'fnt') {
            uuidMap.get(uuid)?.forEach((u) => {
                if (assetsMap.has(u)) {
                    url.push(
                        assetsMap.get(u)!.path,
                        assetsMap.get(u)!.path.replace(/.meta$/, '')
                    );
                    assetsMap.delete(u);
                }
            });
        }
        result.noReferceUrl[path] = url;
    });

    Object.keys(result).forEach((key) => {
        if (checkType((result as any)[key]) === 'Number') {
            (result as any)[key] = logicSize((result as any)[key]);
        }
    });

    return result;
}
