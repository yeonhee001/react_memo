import React, { useEffect, useState } from 'react'
import axios from 'axios'


function MemoInsert({setData,data}) {

  const [state,setState] = useState(false)

  

    function insert(e){
        e.preventDefault();
        // ㄴform 태그에 action이 들어가있어서 다음으로 넘어가서 멈추라고 적은거임
    
        // console.log(e.target.subject.value);
        // console.log(e.target.content.value);
    
        let date = new Date();
          date = date.toISOString().split('T')[0];
        // console.log(
        //   date.getFullYear(),
        //   date.getMonth()+1,
        //   date.getDate(),
        //   ["일","월","화","수","목","금","토"][date.getDay()],
    
        //   date.getHours(),
        //   date.getMinutes(),
        //   date.getSeconds(),
    
        //   String(date.getMonth()+1).padStart(2,'0'),
        //   date.toISOString().split('T')[0]
        // );
        
        const formdata = new FormData(e.target);
        // FormData : 사용자가 입력한 데이터 값을 가지고 와야함
        formdata.append('id',Date.now());
        formdata.append('date',date);
        // append 내용을 추가하는 애(글을 쓰는데 날짜는 안쓰니까 날짜 같은 것들 추가하면 됨)
    
        const entries = Object.fromEntries(formdata)
        // 이렇게 작성하면 위에서 append로 추가한 날짜와, 아래 subject, content를 한번에 불러올 수 있음 = Object.fromEntries()
        // console.log(formdata.get('date'));
        // data = [{},{},{},{}]
        // [...data,entries] 점3개 찍으면 data 안에 있는 값을 꺼내올 수 있다
        
        
        axios({
          url : `${process.env.REACT_APP_APIURL}/memo/m2`,
          method : "post",
          data : JSON.stringify(entries),
          headers : {"Content-Type":"application/json"}
        })
        .then(()=>{
          setData([...data,entries]);
        })
        console.log("15616985");
        // setData([...data,entries]);
        // ...data 예전에 작성한거, entries 방금 작성한 내용들
        e.target.reset();
        e.target.subject.focus();
        setState(false)
        // e.target가 form이니까 reset을 해야 저장눌렀을 때 작성 내용이 사라짐
        // focus 하게되면 저장눌렀을 때 subject 부분으로 커서가 옮겨짐
        // 글쓰기 버튼을 누를때 true가 발생되어 active클래스가 발동되는데 저장 버튼 누르면 안보이게 만들기 위해서 setState(false) 사용
      }

      
  return (
    <>
      <button onClick={()=>{setState(true)}}>글쓰기</button>
      <div className={`insert ${state ? 'active' : ''}`} >
        <form onSubmit={insert}>
          <input type="text" name='subject'/>
          <textarea name='content'></textarea>
          <input type="submit" value="저장" />
        </form>
      </div>
    </>
  )
}

export default MemoInsert