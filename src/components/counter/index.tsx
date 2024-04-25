import React, {useState} from 'react';
import * as classes from './styles.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    console.log("class", classes.btn)
    return (
        <div className={classes.btn}>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
        </div>
    );
};

export default Counter;