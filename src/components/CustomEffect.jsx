import { useState } from 'react'
import PropTypes from 'prop-types';
import { UseCustomEffect } from '../hooks';

const CustomButton = ({ cb, type }) => {
    return (
        <button className={`h-[2em] w-[6em] mx-8 ${ type === 'increment' ? 'bg-teal-500' : 'bg-orange-600'}`} onClick={cb}>
            {type=='increment' ? "Increment" : "Decrement" }
        </button>
    )
}

const CustomEffect = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    UseCustomEffect(() => {
        console.log("Count changed")
    }, [count])

    return (
        <div className="p-[4em]">
            <h1 className="text-center font-bold text-2xl hover:underline">UseCustomEffect</h1>

            <h3 className="text-center mb-4">{count}</h3>
            <div className="flex justify-center gap-6">
                <CustomButton cb={increment} type='increment'/>
                <CustomButton cb={decrement} type='decrement'/>
            </div>
        </div>
    )
}

CustomButton.propTypes = {
    cb: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
};

export default CustomEffect