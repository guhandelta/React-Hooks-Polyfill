import { useEffect, useRef, useState } from 'react'

const UseThrottle = (value, delay) => {

    const [ throttledValue, setThrottledValue ] = useState(value)

    // Last executed time
    const lastRan = useRef(Date.now());

    // Throttling logic
    useEffect(() => {
        // Calculate the remaining time until the next execution
        const remainingTime = delay - (Date.now() - lastRan.current);
        
        // Timer to handle the throttling
        const handler = setTimeout(() => {
        
            // Get the current time
            const now = Date.now();
        
            // Get the time elapsed since the last execution
            const timeElapsed = now - lastRan.current;
        
            // If the time elapsed is greater than the delay provided, then update the throttled value and set the lastRan time to now
            if(timeElapsed >= delay){
                setThrottledValue(value);
                lastRan.current = now;
            }
        // Set the timer to run after the remaining time
        }, remainingTime);

        // Cleanup
        return () => {
            clearTimeout(handler);
        }
        // These are the only 2 things that the whole useThrottle is dependent on
    }, [value, delay]);

    return throttledValue;

};

export default UseThrottle;