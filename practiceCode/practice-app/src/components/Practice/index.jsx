import React,{useEffect,useState} from 'react'

export default function Practice() {
    
    const [counter, setCounter] = useState(0);
    const onAlertButtonClick = () => {
        setTimeout(() => {
          alert("Value"  + counter);
        }, 3000);
    };

    return (
        <div>
        <p>You clicked {counter} times.</p>
        <button onClick={() => setCounter(counter + 1)}>Click me</button>
        <button onClick={onAlertButtonClick}>
            Show me the value in 3 seconds
            </button>
        </div>
    );
}
