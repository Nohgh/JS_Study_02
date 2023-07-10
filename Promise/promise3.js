//피자 만드는 과정을 세분화 하여 함수로 선언하고 then을 통해 순서대로 처리 (then이 이루어 질려면 실행이 참이 되어 resolve가 실행되어야 한다.)

const pizza =()=>{
    return new Promise((resolve,reject)=>{
        resolve("피자를 주문합니다.");
    });
};

const step1=(message)=>{
    console.log(message);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("피자 도우 준비");
        },3000);
    });
};

const step2=(message)=>{
    console.log(message);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("토핑 완료")
        },1000)
    })
};

const step3=(message)=>{
    console.log(message);
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("굽기 완료");
        },2000);
    });
};

pizza() //피자함수 실행-> 참 -> then실행 실행결과(result)인 메세지를 다음 then으로 전달
.then(result => step1(result))//result에는 pizza의 리턴값이 담겨있음 이를 step1함수로 전달 
.then(result=>step2(result))
.then(step3)//이런 식으로 result를 생략할 수 있음
.then(result=>console.log(result))
.then(()=>{
    console.log("피자가 준비되었습니다.");
});
