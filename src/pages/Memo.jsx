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
    axios.get(`${process.env.REACT_APP_APIURL}/memo/m1`,{
      headers:{"Context-Type":"application/json"}
      // 베르셀 배포 과정에서 타입정의를 안하면 막는다는 에러에 headers를 추가해야함
      // axios.get(,config) : config는 중괄호 형태로 넣어야함
    })
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