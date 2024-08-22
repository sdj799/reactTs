// ES6
// 1. let and const and var
// 재할당이 필요하면 let
// 재할당이 필요없으면 const

// 2. 화살표 함수
// 2.1 함수 선언문
// function printHello() {
//     console.log("Hello");   
// }

// 2.2 함수 표현식
// 기명함수 권장 -> 디버깅이 쉬움
// 익명 함수 ->
const printHello = function printHello() {
    console.log("Hello");
}
printHello();

// 2.3 화살표 함수
const printHello2 = () => {
    console.log("Hello");
}
printHello2();

// 3. 비구조화 할당
const [a,b,c] = ["apple", "banana", "cherry"];

console.log(a); // apple
console.log(b); // banana
console.log(c); // cherry

const { age, gender} = {
    name: "철수",
    age : 20,
    gender: "male"
}
console.log(age);
console.log(gender);