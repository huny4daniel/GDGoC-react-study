/**
 * JavaScript 기본 문법 정리 (스터디용)
 *
 * 사용 방법:
 * 1. index.html에 <script src="../scripts/js-basics.js"></script> 추가 후 브라우저 Console(F12) 확인
 * 2. 또는 이 파일 내용을 복사해 Console에 붙여넣어 실행
 */

console.log("=== JavaScript 기본 문법 시작 ===");

// ============================================
// 1. 변수 (let, const, var)
// ============================================
// let   : 값을 다시 바꿀 수 있음
// const : 값을 다시 바꿀 수 없음 (상수) — 가능하면 const 우선 사용
// var   : 예전 방식 (지금은 let/const 권장)

let age = 20;
age = 21; // OK

const name = "홍길동";
// name = '김철수'; // Error! const는 재할당 불가

console.log("변수:", name, age);

// 2. 자료형 (Data Types)
const stringType = "문자열";
const numberType = 42;
const booleanType = true;
const nullType = null; // 값이 없음을 의도적으로 표현
let undefinedType; // 선언만 하고 값 없음 → undefined
const arrayType = [1, 2, 3];
const objectType = { key: "value" };

console.log(
    "자료형:",
    typeof stringType,
    typeof numberType,
    typeof booleanType,
);

// 3. 연산자
const a = 10;
const b = 3;

console.log("산술:", a + b, a - b, a * b, a / b, a % b); // % = 나머지
console.log("비교:", a > b, a === 10, a !== b); // === : 값과 타입 모두 비교
console.log("논리:", true && false, true || false, !true);

// 4. 문자열
const greeting = "안녕";
const message = greeting + "하세요"; // 문자열 연결
const template = `이름: ${name}, 나이: ${age}`; // 템플릿 리터럴 (백틱 ` 사용)

console.log("문자열:", message, template);
console.log("문자열 메서드:", "hello".toUpperCase(), "  trim  ".trim());

// 5. 조건문 (if / else if / else)
const score = 85;

if (score >= 90) {
    console.log("조건문: A");
} 
else if (score >= 80) {
    console.log("조건문: B");
} 
else {
    console.log("조건문: C");
}

// 삼항 연산자: 조건 ? 참일 때 : 거짓일 때
const pass = score >= 60 ? "합격" : "불합격";
console.log("삼항 연산자:", pass);

// switch
const fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("switch: 사과");
        break;
    case "banana":
        console.log("switch: 바나나");
        break;
    default:
        console.log("switch: 기타");
}

// 6. 반복문 (for, while)
console.log("for 반복:");
for (let i = 0; i < 3; i++) {
    console.log("  i =", i);
}

console.log("for...of (배열):");
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log("  color =", color);
}

let count = 0;
while (count < 2) {
    console.log("while:", count);
    count++;
}

// 7. 배열 (Array)
const numbers = [1, 2, 3, 4, 5];

console.log("배열 접근:", numbers[0], numbers.length);
numbers.push(6); // 끝에 추가
numbers.pop(); // 끝 요소 제거

// 자주 쓰는 배열 메서드
const doubled = numbers.map((n) => n * 2); // 각 요소 변환
const evens = numbers.filter((n) => n % 2 === 0); // 조건에 맞는 요소만
const sum = numbers.reduce((acc, n) => acc + n, 0); // 누적 계산

numbers.forEach((n) => console.log("forEach:", n));

console.log("배열 메서드:", doubled, evens, sum);

// 8. 객체 (Object)
const user = {
    name: "김리액트",
    age: 22,
    isStudent: true,
    hobbies: ["코딩", "운동"],
};

console.log("객체 접근:", user.name, user["age"]);
user.email = "react@example.com"; // 속성 추가
delete user.isStudent; // 속성 삭제

// 구조 분해 할당
const { name: userName, age: userAge } = user;
console.log("구조 분해:", userName, userAge);

// 9. 함수 (Function)

// 함수 선언
function add(x, y) {
    return x + y;
}

// 함수 표현식
const multiply = function (x, y) {
    return x * y;
};

// 화살표 함수 (React에서 자주 사용)
const divide = (x, y) => x / y;

// 기본 매개변수
function greet(name = "게스트") {
    return `안녕, ${name}!`;
}

console.log("함수:", add(2, 3), multiply(2, 3), divide(10, 2), greet("홍승원"));

// 10. Truthy / Falsy
// Falsy: false, 0, '', null, undefined, NaN
// 그 외는 Truthy

const emptyName = "";
const user_Name = "홍승원";
const itemCount = 0;
const scoreNumber = 85;

if (emptyName) {
    console.log("이름:", emptyName);
} 
else {
    console.log("Falsy: emptyName은 빈 문자열이라 조건이 false");
}

if (user_Name) {
    console.log("Truthy: userName은 값이 있어서 조건이 true →", user_Name);
}

if (itemCount) {
    console.log("장바구니에 상품 있음");
} 
else {
    console.log("Falsy: itemCount가 0이라 조건이 false");
}

if (scoreNumber) {
    console.log("Truthy: score는 0이 아니라서 조건이 true →", scoreNumber);
}

// 11. 스프레드 / 나머지 (... 연산자)
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // 배열 복사 + 추가
console.log("스프레드:", arr2);

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // 객체 복사 + 추가
console.log("객체 스프레드:", obj2);

function sumAll(...args) {
    return args.reduce((acc, n) => acc + n, 0);
}
console.log("나머지 매개변수:", sumAll(1, 2, 3, 4));

// 12. JSON
const data = { id: 1, title: "스터디", done: false };

console.log(data["title"]);