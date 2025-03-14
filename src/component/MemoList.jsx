import React from 'react'


function MemoList({data}) {

  return (
    <div>
      <div className='list'>
          {
            data.map((c)=>
              <div>
                <div key={c.id}>{c.date}</div>
                <b>{c.subject}</b>
                <p>{c.content}</p>
              </div>
            )
          }
        </div>
    </div>
  )
}

export default MemoList