// 1.함수 표현식
function funcA() {
    // console.log("funcA");
}

let varA = funcA;
varA();

let varB = function() { // 함수 이름이 없으면 익명함수라고 한다
    
}

varB();

// 2. 화살표 함수
let varC = (value) => {
    console.log(value);
    return value + 1
};


console.log(varC(10));