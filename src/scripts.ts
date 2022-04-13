const uniteArrays = (a:Array, b:Array):Array => {
    const arr = [...a, ...b];
    return arr;
};

console.log(uniteArrays([1, 2], [3, 4, 5, 6]));

const joinArrStr = (a:Array, b:string):Array => {
    const arr = [...a, b];
    return arr;
};

console.log(joinArrStr(['Apple', 'Orange', 'Banana'], 'Kiwi'));

const joinStrArr = (a:string, b:Array):Array => {
    const arr = [b, ...a];
    return arr;
};

console.log(joinStrArr(['Apple', 'Orange', 'Banana'], 'Kiwi'));

const joinObj = (a:object, b:object):object => {
    const obj = {...a, ...b};
    return obj;
};

console.log(joinObj({ a:1, b:2 }, { c:3, d:4, e:5, f:6 }));

const joinObjStr = (a:object, b:string):object => {
    const obj = {...a};
    obj.favoriteMovie = b
    return obj;
};

console.log(joinObjStr({ eyeColor: 'blue', age: 15 }, 'Twilight'));