//AJAX 비동기 기법 중 하나인 XML HTTP REQUEST 사용
//AJAX: 페이지 전체를 다시 가져오지 않고도 사용자의 이벤트에 따라 언제든지 웹페이지의 일부만 최신 내용으로 표시 할 수 있는 비동기 방식 
//비동기: 동시에 일어나지 않는다. 자료를 나누어 요청하고 요청한 자료가 도착하는 동안 다른 작업을 하는것을 말한다.
let xhr=new XMLHttpRequest(); //xhr객체를 만들어 사용

xhr.open("GET","student.json");//open으로 자료를 요청(http요청방식 지정, 자료위치 ,비동기여부-> 따로 지정하지 않으면 자동으로 비동기 )
xhr.send();//서버로 해당 요청을 요청 //post방식이라면 넘길 내용을 매개변수로 넘겨줌

//json안의 정보가 하나일때 
xhr.onreadystatechange=function(){ //readystatechange이벤트 : readystate가 변경할때 마다 발생하는 이벤트 
    if(xhr.readyState==4 && xhr.status==200){//readystate프로퍼티 값이 4이면서 state프로퍼티 값이 200일 경우에만 서버에서 제대로 자료를 가져온 상태
        let students=JSON.parse(xhr.responseText)//responseText: 요청에 대한 응답이 문자열 형태로 저장 //parse: 문자열-> 객체 
        readerHTML(students);//서버에서 받은 데이터를 html에 붙이는 함수  밑에서 구현 
    }
}

function readerHTML(contents){//student, 즉 서버에서 받은 데이터를 가지고 옴 (json문자열에서 parse를 통해 배열로 변환된 상태)
    let output="";
    for(let content of contents){
        output+=`
        <h2>${content.name}</h2>
        <ul>
            <li>전공: ${content.major}</li>
            <li>학년: ${content.grade}</li>
        </ul>
        <hr>
        `;
    }
    document.getElementById("result").innerHTML=output;
}