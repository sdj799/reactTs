// 변수 타입 선언
// 다음 변수들을 선언하고, 타입을 지정해 보세요.
let name1: string; // 문자열 타입
let age: number; // 숫자 타입
let isStudent: boolean; // 불리언 타입
let hobbies: string[]; // 문자열 배열 타입
let user1: { name: string; age: string }; // 객체 타입 (name과 age를 포함)

// 배열 타입 정의
// 다음 배열의 타입을 지정해주세요.
const qarr: number[] = [1, 2, 3];
const qarr2: [number, number[], number] = [1, [2, 3], 4];
const qarr3: [number[], number[], string[]][] = [
  [
    [1, 2],
    [3, 4],
    ["a", "b"],
  ],
  [
    [5, 6],
    [7, 8],
    ["c", "d"],
  ],
];

// 함수 타입 정의
// 다음 함수들을 타입스크립트로 작성하고 타입을 정의해 보세요.
// - 두 숫자를 더하고 결과를 반환하는 함수
// - 문자열을 받아서 문자열을 반환하는 함수
// - 불리언 값을 인자로 받아서 아무것도 반환하지 않는 함수 (void 반환)
// - 문자열에서 가장 긴 단어를 반환하는 함수 (string , 배열아님)
const add2 = (a: number, b: number): number => {
  return a + b;
};

const getReturnValue1 = (a: string): string => a;

const func = (a: boolean): void => {};

const longStr = (str: string): string => {
  const conStr = str.split(" ").sort((a, b) => b.length - a.length)[0];
  return conStr;
};
console.log(longStr("hello world!"));

/*
[연습문제 - 암스트롱 수 구하기]
난이도 ★★★★★

100부터 999까지 암스트롱 수를 구하세요

&암스트롱 수란?

암스트롱의 수는 세 자리의 정수 중에서 각 자리의 수를 세 제곱한 수의 합과 자신이 같은 수를 말합니다. 
예를 들어 153 = 1 + 125 + 27 입니다. 
이와 같은 수를 암스트롱의 수라고 말합니다.
*/
const armstrong = (): number[] => {
  const arms: number[] = [];
  for (let i = 100; i < 1000; i++) {
    let a = i % 10;
    let b = Math.floor(i / 10) % 10;
    let c = Math.floor(i / 100);
    if (a * a * a + b * b * b + c * c * c === i) {
      arms.push(i);
      console.log(i);
    }
  }
  console.log(arms);

  return arms;
};

// 강사님 풀이법
const isArmstrongNumber = (num: number): boolean => {
  const digits = num.toString().split("").map(Number); //문자로 바꾼 후 배열로 쪼개서 숫자로 변경
  const sumOfCubedDigits = digits.reduce(
    (acc, digit) => acc + Math.pow(digit, 3),
    0
  );

  return sumOfCubedDigits === num;
};

const printArmstrongNumbers = (): void => {
  for (let i = 100; i < 1000; i++) {
    if (isArmstrongNumber(i)) {
      console.log(i);
    }
  }
};

armstrong();
printArmstrongNumbers();
