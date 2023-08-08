import React, {useLayoutEffect, useEffect, useRef} from 'react'

const LayoutEffectTutorials = () => {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.value = "Hello";
    }, [])
    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);
    return (
        <div>
            <input ref={inputRef} value="Pedro" style={{width: 400, height: 50}}/>
        </div>
    )
}

export default LayoutEffectTutorials
