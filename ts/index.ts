// 타입스크립트는 값에 타입을 지정하는 언어
// 값 -> 기본 자료형과, 참조 자료형
// 기본 자료형 : number, string, boolean, null, undefined, symbol
// let/const 변수명:타입 = 값;
let uname: string = "홍길동";
let num: number = 10;
let isTrue: boolean = true;
let nul: null = null;
let und: undefined = undefined;
let sym: symbol = Symbol("key");
console.log(uname);

// 참조 자료형 : object, array, function
let user: {
    name: string;
    age: number;
    isTrue: boolean;
} = {
    name: "sucoding",
    age: 30,
    isTrue: true
};

let animal: { 
    name: string; 
    age: number; 
    isLive: boolean; 
    nul: null; 
    und: undefined; 
    sym: Symbol;
} = {
    name: "pubby",
    age: 3,
    isLive: true,
    nul: null,
    und: undefined,
    sym: Symbol("key")
}

let obj1: {name: string; numberArr: number[]; add: (a:number, b:number) => number;} = {
    name: "sucoding",
    numberArr: [1,2,3],
    add : (a,b) => a+b
}
// 배열
let arr: number[] = [1,2,3];
arr.push(10);
// arr.push("A");

let arr2 : string[] = ["a", "b", "c"];
arr2.push("d");
// arr2.push(10);

let arr3: boolean[] = [true, false];
let arr4: null[] = [null, null];
let arr5: {name: string; age: number}[] = [
    {name: "영희", age: 20},
    {name: "철수", age: 30}
];

// 튜플(tuple)
let arr6: [number, string, boolean, null, {name: string; age: number}] = [
    1,
    "a",
    true,
    null,
    {name: "영희", age: 20}
]

let arr7: [number, string] = [1, "a"];
// arr7.push(true);

// 함수 타입
// 매개변수 + 반환 값에 타입을 지정해주는 것
// function(n: 매개변수타입) : 반환타입 {}

// 함수 표현식
// 타입 2가지
// 1. 함수 선언문처럼 매개변수와 반환값의 타입을 지정하는 법
// 2. 변수에 타입을 지정하는 법
const add = (n1: number,n2: number) : number => {
    return n1 + n2;
}
add(10, 20);

// 함수 선언문
function printHello():void {
    console.log("Hello");
}

const printHell = (): void => {
    console.log("Hello");
} 

const arr11 : {name: string; age?: number}[] = [
    {name: "John"},
    {name: "Doe", age: 30}
];

// function add(n1: number, n2?: number): number {
//     return n1 + n2;
// }
