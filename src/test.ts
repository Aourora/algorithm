function main(width: number, height: number): void {
    if (width > 1024) {
        height = Math.round((1024 * height) / width);
        width = 1024;
    }
    console.log(
        getContentSize({ width, height }, { width: 1024, height: 768 })
    );
}

function getContentSize(
    originSize: { width: number; height: number },
    assetSize: { width: number; height: number }
): [number, number] {
    const originWidth = originSize.width;
    const originHeight = originSize.height;

    const assetWidth = assetSize.width;
    const assetHeight = assetSize.height;

    const originScale = originHeight / originWidth;
    const assetScale = assetHeight / assetWidth;

    if (originScale >= assetScale) {
        return [
            originWidth,
            Math.round((originWidth / assetWidth) * assetHeight),
        ];
    }

    return [
        Math.round((originHeight / assetHeight) * assetWidth),
        originHeight,
    ];
}

main(2048, 1536);

main(2560, 1536);
