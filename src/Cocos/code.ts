//扁平化数组
function flatDeep(data: any): Array<unknown> {
    const result = [];
    if (Array.isArray(data)) {
        for (const item of data) {
            result.push(...flatDeep(item));
        }
    } else {
        result.push(data);
    }
    return result;
}

//Proxy 数据劫持
function onWatch<T>(obj: any): T {
    return new Proxy(obj, {
        get(target, name, receiver) {
            console.log(target, name, receiver);
            return Reflect.get(target, name, receiver);
        },
        set(target, name, value, receiver) {
            console.log(target, name, value, receiver);
            return Reflect.set(target, name, value, receiver);
        },
    });
}

const p = onWatch<{ a: number }>({ a: 1 });
p.a = 4;
p.a;

//new的过程
function objectFactory(...options: any): any {
    const constructor = Array.prototype.shift.call(options);
    if (!constructor) return;
    const newObj = Object.create(constructor.prototype);
    const result = constructor.apply(newObj, options);
    if (result && (typeof result === 'function' || typeof result === 'object'))
        return result;
    return newObj;
}

console.log(
    objectFactory(function (name: string) {
        return { name };
    }, 'test')
);

//原型继承
