import Image from 'next/image'
import React from 'react'

function HeadBar() {
  return (
    <>
        <div className='headBar'>
            <div className='headBar-left'>
            <h1>My balance</h1>
            <p>$921.48</p>
            </div>
            <div className='headBar-rigth'>
            <Image src="/logo.svg" width={50} height={50} alt="sa"/>
            </div>
        </div>
    </>
  )
}

export default HeadBar