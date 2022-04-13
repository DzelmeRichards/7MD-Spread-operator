const uniteArrays = (a: number[], b: number[]): number[] => [...a, ...b];

console.log(uniteArrays([1, 2], [3, 4, 5, 6]));

const joinArrStr = (a: string[], b: string): string[] => [...a, b];

console.log(joinArrStr(['Apple', 'Orange', 'Banana'], 'Kiwi'));

const joinStrArr = (a: string, b: string[]): string[] => [b, ...a];

console.log(joinStrArr(['Apple', 'Orange', 'Banana'], 'Kiwi'));

const joinObj = (a: object, b: object): object => ({ ...a, ...b });

console.log(joinObj({ a: 1, b: 2 }, { c: 3, d: 4, e: 5, f: 6 }));

const joinObjStr = (a: object, b: string): object => ({ ...a, favoriteMovie: b });

console.log(joinObjStr({ eyeColor: 'blue', age: 15 }, 'Twilight'));