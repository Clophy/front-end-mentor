import React from 'react'

function RigthSide({tip,setTip,person,setPerson,cash,setCash}) {
  return (
    <>

    <div className='rigth-side'>
        <div className='top'>
            <p>Tip Amount</p>
             {cash && tip && person ? <p>${((((cash + ((cash * tip) / 100)) - cash)) / person).toFixed(2)}</p> : <p>$0.00</p>}
            
            <span>/ person</span>
        </div>
        <div className='mid'>
            <p>Total</p>
            
            {cash && tip && person ? <p>${(((cash + ((cash * tip) / 100)) / person)).toFixed(2)}</p> : <p>$0.00</p>}
            <span>/ person</span>
        </div>
        <div className='bottom'>
            <button onClick={()=> {setTip("");setPerson("");setCash("")}}>RESET</button>
        </div>
    </div>
    
    </>
  )
}

export default RigthSide