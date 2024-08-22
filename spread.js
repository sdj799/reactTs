// spread 연산자
//...

// 복사한 배열이 원본 배열과 같이 변경되는 형태로 복사되는 것을 얕은 복사라고 한다.
// shallow copy(얕은 복사) <-> 깊은 복사
const arr1 = [1,2,3];
// const arr2 = arr1; (얕은 복사)
const arr2 = [...arr1];

arr1.push(4);

console.log(arr1);
console.log(arr2);
console.log(arr1 === arr2); //false (얕은 복사는 true)

const numbers1 = [1,2];
const numbers2 = [3,4];
const combined1 = [numbers1[0], numbers1[1], numbers2[0], numbers2[1]];
const combined2 = [...numbers1, ...numbers2];
console.log(combined1);
console.log(combined2);

// 객체 -> 깊은 복사
const user1 = {name: "철수"};
const user2 = {...user1};

user1.name = "영희";
console.log(user2);

// 병합 (같은 속성 병합시 뒤에 속성 덮어씀)
const obj1 = {name: "철수"};
const obj2 = {age: 20};

const combineds2 = {...obj1, ...obj2};

console.log(combineds2);

function add (...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
}
const res1 = add(1,2,3,4,5,6,7,8,9,10);
console.log(res1); //55
