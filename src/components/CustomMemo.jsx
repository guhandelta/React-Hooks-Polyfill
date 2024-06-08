import { useState } from "react";
import PropTypes from 'prop-types';

const CustomButton = ({ cb, type }) => {
    return (
        <button className={`h-[2em] w-[6em] mx-[47%] my-[4em] ${ type === 'increment' ? 'bg-teal-500' : 'bg-orange-600'}`} onClick={cb}>
            {type=='increment' ? "Increment" : "Decrement" }
        </button>
    )
}

const CustomMemo = () => {
    const [count, setCount] = useState(0);

    const squaredValue = () => count * count;

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1 className='text-center font-bold text-2xl my-6'>Use Custom Memo</h1>
            <p className='text-center text-lg my-6'>Count: {count}</p>
            <p className='text-center text-lg text-orange-400 underline'>Squared Value: {squaredValue()}</p>
            <CustomButton cb={increment} type='increment' />
        </div>
    )
}

CustomButton.propTypes = {
    cb: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
};

export default CustomMemo;