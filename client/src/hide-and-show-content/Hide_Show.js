import React, { useState } from 'react'
import Child from './Child'

export default function Hide_Show() {
    const [show, setShow] = useState(false)

    // const handleShowContent =()=>{
    //     setShow(!show)
    // }

    return (
        <div>
            <h1>Hide_Show componet</h1>
            <h3>click on the button to show the content</h3>
            <div>{show && <i>hi, now you are able to see the content !</i>}</div>
            <button onClick={()=>setShow(!show)}>show</button>

            {/* if you want to show the content fron child component then use this */}
            {/* <Child handleShowContent={handleShowContent}/> */}
        </div>
    )
}
