// 함수선언

function greeting() {
    console.log("안녕하세요.");
}

console.log("호출 전");
greeting();;
console.log("호출 후");


let area1 = getArea(10, 20);
console.log(area1);
getArea(30, 20);
getArea(120, 200);

// 호이스팅
// -> 끌어올리다 라는 뜻

function getArea(width , height) {

    let area = width * height;

    return area;
}