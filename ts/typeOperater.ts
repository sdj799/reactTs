// 유니언 타입 (Union Type)
// or ||
// 피연산자 중에서 하나만 참이면 참을 반환한다.
let strAndNum: number | string = 10;
strAndNum = "Hello";

let user3: {name: string; money: number | null;} = {
    name: "Neo",
    money: null
}

const getElements = (arr: number[] | string[]) => {
    return arr[0];
}

console.log(getElements([1,2,3]));
console.log(getElements(["a", "b", "c"]));

// And &&
// 인터섹션 타입 (Intersection Type) &
// 피연산자 모두 참이어야 참을 반환한다.
const user2: {name:string} & {age: number} = {
    name: "Neo",
    age: 10
}
