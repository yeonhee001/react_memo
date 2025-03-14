import React, { useEffect, useState } from 'react'
import MemoInsert from '../component/MemoInsert'
import MemoList from '../component/MemoList'
import axios from 'axios'


function Memo() {

  const[data,setData] = useState([]);
  // 변경된 내용들을 화면에 재출력을 해야한다면 useState를 사용함
  // 초기의 상태값은 useState([])의 대괄호 안에 적음
  // 값을 수정한다고 하면 대부분 set이라는 단어를 붙임 = setData
  // console.log(data);

  useEffect(()=>{
    axios.get('http://localhost:3000/memo/m1')
    .then((res)=>{
      setData(res.data);
    })
  },[])
  
  return (
    <div>
        <MemoInsert setData={setData} data={data}/>
        <MemoList data={data}/>
    </div>
  )
}

export default Memo