import { useEffect, useState } from 'react'
import { UseThrottle } from '../hooks';

const ThrottleResize = () => {

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const handleResize = () => setWindowSize({  
        width: window.innerWidth,
        height: window.innerHeight
    });

    const throttledResize = UseThrottle(handleResize, 500);

    useEffect(() => {
        window.addEventListener('resize', throttledResize);
        return () => {
            window.removeEventListener('resize', throttledResize);
        }
    },[]);

    return (
        <div>
            <h1 className='text-center font-bold text-2xl'>Window Size : {windowSize.width} x {windowSize.height}</h1>
        </div>
    )
}

export default ThrottleResize