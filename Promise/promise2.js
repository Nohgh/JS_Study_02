//프로미스를 반환하는 then()메소드 확인
const pizza=()=>{
    return new Promise((resolve,reject)=>{
        resolve("피자를 주문합니다.");
    });
};
//console.log(pizza()); //pizza()함수 실행시 프로미스 만들어짐 //프로미스 생성

const step1 =(message)=>{
    console.log(message);
};
//프로미스 소비
pizza().then(result => step1(result));//pizza함수 실행, resolve함수로 주는 문자열이 result에 들어간다-> result를 이용해 step1함수 실행
//then의 결과 또한 다시 Promise