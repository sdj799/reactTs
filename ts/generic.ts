function getSize<T>(arr: T[]) {
    return arr.length;
}
console.log(getSize<number>([1,2,3]));

function getReturnValue<T>(arr: T[]): T[] {
    return arr;
}
console.log(getReturnValue<number>([1,2,3]));

type TApiResponse<T> = {
    data : T;
    status : number;
};

const userResponse: TApiResponse<{id: number; name: string;}> = {
    data : { id: 1, name : "John"},
    status : 200
}

const todoResponse: TApiResponse<{id:number; text:string; completed: boolean;}> = {
    data : { id: 1, text: "아침먹기", completed : false},
    status : 200
}

function filterArray<T>(arr: T[], condition: (item: T) => boolean) : T[] {
    return arr.filter((item) => condition(item));
}

const numberArray = [1,2,3,4,5];
const isEven = (num : number) => num % 2 === 0;
const evenNumbers = filterArray(numberArray, isEven);
console.log(evenNumbers);

// 유용 타입 중 하나인 any 타입
// 리액트 -> 타입, 리액트에서 사용하는 타입을 공부하는 것과 같다.
let an: any = 10;
an = "10";
an = true;
an = {};
an = () => {};

const add4 = (n1: number, n2?: number) => {
    // 타입 가드
    // 일관 문법을 말하는 게 아니고, 방식을 말한는 것
    if (typeof n2 !== "undefined") return n1+ n2;
    else return n1;
};

const getReturnValue2 = (n: number | string) => {
    if (typeof n === "number") return n.toFixed(1);
    return n;
}
console.log(getReturnValue2(1));
