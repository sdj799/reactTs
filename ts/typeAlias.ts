// type alias
// type 키워드를 나만의 타입으로 정의하는 것
// 1. type alias는 병합이 안됨
type TUser = {
    name: string;
    age: number;
}

// 2. 상속이 안됨
type TuserAndJob = TUser & {job: string};

const user4: TUser = {
    name: "Neo",
    age: 85
}

// 열거형 (enum)은
// 숫자형 열거
// 문자형 열거

enum Role {
    Admin = "admin", // 기본값 0
    User = "user", // 1
    Guest = "guest" // 2
}
interface IUser2 {
    name: string;
    role: Role;
}

const user5: IUser2 = {
    name: "neo",
    role: Role.Admin
}

console.log(user5);