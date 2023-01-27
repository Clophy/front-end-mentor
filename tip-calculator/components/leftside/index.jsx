
import React from 'react'
import {BiDollar} from 'react-icons/bi'


function LeftSide({active,setActive,setTip,setPerson,setCash}) {

 
  
  return (
    <>

    <div className='left-side'>
    <header>
    <p>Bill</p>
     <div className='input'><BiDollar/><input onBlur={(e)=> setCash(Number(e.target.value))}></input></div>
    </header>
    <div className='main'>
    <p>Select Tip %</p>
        <div className='box'>
            <div className={`boxes ${active ===0 && "active"}`} onClick={()=> {setActive(0); setTip(5)}}>5%</div>
            <div className={`boxes ${active ===1 && "active"}`} onClick={()=> {setActive(1); setTip(10)}}>10%</div>
            <div className={`boxes ${active ===2 && "active"}`} onClick={()=> {setActive(2); setTip(15)}}>15%</div>
            <div className={`boxes ${active ===3 && "active"}`} onClick={()=> {setActive(3); setTip(25)}}>25%</div>
            <div className={`boxes ${active ===4 && "active"}`} onClick={()=> {setActive(4); setTip(50)}}>50%</div>
            <input placeholder='Custom' type="number" onFocus={()=> setTip("")} onBlur={(e)=> {setTip(Number(e.target.value))}} className='boxes input'></input>
        </div>
    </div>
    <footer>
        <p>Number of People</p>
        <div className='input'><BiDollar/><input onBlur={(e)=> setPerson(Number(e.target.value))}></input></div>
    </footer>
    </div>

    </>
  )
}

export default LeftSide