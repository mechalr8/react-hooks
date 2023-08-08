import React, { useMemo, useState } from 'react'

const MemoTutorials = () => {
    const [num, setNum] = useState(0)
    const [clicked, setClicked] = useState(false)

    const clickHandler = () => {
        setNum(num+1);
    }

    const myNum = (num) => {
        console.log("this is inside myNum ", num);
        for(var i=0; i<1000000000; i++){}
        return num;
    }

    const onChangeHandler = () => {
        setClicked(!clicked)
    }

    // const number = myNum(num);
    const number = useMemo(() => {return myNum(num)}, [num])
    return (
        <div>
            <button onClick={clickHandler}>Increase Count</button>
            <div>{number}</div>
            <button onClick={onChangeHandler}>{clicked ? "I'm Clicked" : "Click Me"}</button>
        </div>
    )
}

export default MemoTutorials
