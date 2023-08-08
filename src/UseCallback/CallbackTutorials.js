import React, { useState, useCallback } from 'react'
import List from './List';

const CallbackTutorials = () => {
    const [num, setNum] = useState(0);
    const [clicked, setClicked] = useState(false);
    const getItems = useCallback(() => {
        return [num, num+1, num+2];
    }, [num])
  return (
    <div>
      <input type='number' onChange={e => setNum(parseInt(e.target.value))}/>
      <button onClick={() => setClicked(!clicked)}>{clicked ? "I'm Clicked": "Click Me"}</button>
      <List getItems={getItems}/>
    </div>
  )
}

export default CallbackTutorials
