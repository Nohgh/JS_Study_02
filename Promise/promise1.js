//Promise : 비동기를 처리하기 위해 사용한 콜백에서 콜백지옥을 해결하고자 사용하는 객체 
//실행의 참과 거짓 유무로 다른 함수를 실행한다.

/*프로미스 : 처리에 성공했을 떄 실행할 콜백 함수와 ㅓㅇ공하지 않았을때 실행할 콜백 함수를 미리 약속하는 것 
성공했을땨 실행할 resolve() 콜백함수와 실패했을 떄 실행할 reject()콜백함수를 매개변수로 사용한다. 
*/

const order=new Promise((resolve,reject)=>{     //프로미스 객체 생성 , 성공or실패 시 실행할 함수인 resolve,reject함수를 인자로 전달
    //promise객체가 하는 일 : 실행 결과에 따라 resolve,reject함수로 연결한다. 즉 실제 이용을 하지않음 (제작 코드)

    let coffee=prompt("어떤 커피를 주문하시겠습니까?","아메리카노");    //아메리카노를 기본을 세팅하고 coffee변수로 입력을 받음
    if(coffee != null && coffee!=""){   //입력한 값이 취소와 공백이 아닐때 실행
        document.querySelector(".start").innerText=`${coffee}_주문접수`; //주문을 받고
        setTimeout(()=>{
            resolve(coffee); //3초뒤 resolve함수 실행 then을 통해 프로미스를 소비해야 실행됨 
        },3000);    
    }
    else{
        reject("커피를 주문하지 않습니다.");
    }
});
//여기 까지 과정이 프로미스 생성 , 다음으로는 프로미스 소비해야함 

function display(result){
    document.querySelector(".end").innerText=`${result} 준비완료 `;
    document.querySelector(".end").classList.add("active");
    document.querySelector(".start").classList.add("done");
}
function showErr(err){
    console.log(err);
}
order.then(display).catch(showErr);