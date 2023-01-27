import React from 'react'
import Data from '@/mock/data.json'
import Image from 'next/image';

function Stats({tab, setTab}) {
const data = Data;

  return (
    <div>
        
        <div className='stats'>


        {tab === 0 && data.map((e,i) => (
                <div key={i}>
                <div className='statsBox'>
             <div className={`imgg ${e.title.toLowerCase()}`}><Image src={`/icon-${e.title}.svg`} width={40} height={40} alt="asd"/></div> 
            <div className='statsMain'>
                <div className='statsName'>
                <p>{e.title}</p>
                <span><Image src={"/icon-ellipsis.svg"} width={14} height={14} alt="sa" /></span>
                </div>
                <div className='statsTime'>{e.timeframes.daily.current}hrs</div>
                <p className='statsLast'>last week - {e.timeframes.daily.previous}hrs</p>
            </div>
        </div>
                </div>
        ))}


        {tab === 1 && data.map((e,i) => (
                <div key={i}>
                <div className='statsBox'>
             <div className={`imgg ${e.title.toLowerCase()}`}><Image src={`/icon-${e.title}.svg`} width={40} height={40} alt="asd"/></div> 
            <div className='statsMain'>
                <div className='statsName'>
                <p>{e.title}</p>
                <span><Image src={"/icon-ellipsis.svg"} width={14} height={14} alt="sa" /></span>
                </div>
                <div className='statsTime'>{e.timeframes.weekly.current}hrs</div>
                <p className='statsLast'>last week - {e.timeframes.weekly.previous}hrs</p>
            </div>
        </div>
                </div>
        ))}
        {tab === 2 && data.map((e,i) => (
                <div key={i}>
                <div className='statsBox'>
             <div className={`imgg ${e.title.toLowerCase()}`}><Image src={`/icon-${e.title}.svg`} width={40} height={40} alt="asd"/></div> 
            <div className='statsMain'>
                <div className='statsName'>
                <p>{e.title}</p>
                <span><Image src={"/icon-ellipsis.svg"} width={14} height={14} alt="sa" /></span>
                </div>
                <div className='statsTime'>{e.timeframes.monthly.current}hrs</div>
                <p className='statsLast'>last week - {e.timeframes.monthly.previous}hrs</p>
            </div>
        </div>
                </div>
        ))}
        
        </div>
        



    </div>
  )
}

export default Stats