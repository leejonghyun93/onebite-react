// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드

async function getDate() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "jong",
                id: "winterlood",
            });
        }, 1500);
    });
}

console.log(getDate());

// await
// async 함수 내부에서만 사용이 가능 한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printDate() {
    const date = await getDate();
    console.log(date);
}

printDate();