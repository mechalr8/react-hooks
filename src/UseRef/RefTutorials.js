import React, {useEffect, useRef, useState} from 'react'

const RefTutorials = () =>  {
    const [text, setText] = useState("")
    // const count = useRef(0)
    const inputRef = useRef()
    const focus = () => {
        // inputRef.current.value = ""
        // console.log(inputRef.current);
        inputRef.current.focus()
    }
    // useEffect(() => {
    //     count.current += 1
    // })

    return (
        <div>
            <h1>Pedro</h1>
            <input placeholder='Ex...' type='text' onChange={(e) => setText(e.target.value)} ref = {inputRef}/>
            <div>My name is {text}</div>
            {/* <div>Component is rendered {count.current} times</div> */}
            <button onClick={focus}>Clear Input</button>
        </div>
    )
}

export default RefTutorials
