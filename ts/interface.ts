// interface
// 나만의 타입 룰을 만들 때 사용한다.
// 병합 -> 똑같은 식별자의 인터페이스를 하나로 합쳐주는 것을 말함
interface IUser {
    readonly name: string;
    age?: number;
}

const user: IUser = {
    name: "John",
    age: 30
}
// user.name = "Ahn" 오류 readonly는 못바꿈

interface iAdd {
    (n1: number, n2: number): number;
}

const add: iAdd = (n1, n2) => n1 + n2;

// 인덱스 시그니쳐
interface ICar {
    [key: string]: string;
}

const cacr = {
    name: "Bez",
    color: "black"
}

// 상속
interface IJob extends IUser {
    jobName: string;
}

const userIJob: IJob = {
    name: "neo",
    jobName: "developver"
}

// 타입 추론
// 할당된 값을 보고 타입을 자동으로 추론해주는 특징
let num = 10;
num = 20;

function printHello() {
    console.log("Hello");
    return 10;
}

function add3(n1: number, n2: number) {}
