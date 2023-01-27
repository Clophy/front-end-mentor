import Image from 'next/image'
import React from 'react'

function Person({tab, setTab}) {
  return (
    <>
    <div className="mainBox">
        <div className="topBox">
        <div className="logo">
            <Image src="/image-jeremy.png" fill alt="sa"/>
        </div>
        <div className="littleTitle"><p>Report for</p></div>
        <div className="name"><p>Jeremy Robson</p></div>
        </div>
        <div className="botBox">

        {tab === 0 && <>
          <p className='active' onClick={()=> setTab(0)}>Daily</p>
        <p onClick={()=> setTab(1)}>Weekly</p>
        <p  onClick={()=> setTab(2)}>Monthly</p>
        </>
        }
        {tab === 1 && <>
          <p onClick={()=> setTab(0)}>Daily</p>
        <p  className='active' onClick={()=> setTab(1)}>Weekly</p>
        <p  onClick={()=> setTab(2)}>Monthly</p>
        </>
        }
        {tab === 2 && <>
        <p onClick={()=> setTab(0)}>Daily</p>
        <p onClick={()=> setTab(1)}>Weekly</p>
        <p className='active' onClick={()=> setTab(2)}>Monthly</p>
        </>
        }

        </div>
    </div>

    </>
  )
}

export default Person