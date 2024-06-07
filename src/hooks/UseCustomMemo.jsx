import { useEffect, useRef } from "react"

function equalityCheck(oldDeps, newDeps){

    // Check if the old dependencies are null, these dependencies are unequal, so return false
    if(oldDeps === null){
        return false;
    }

    // Check if the length of the old dependencies is not equal to the length of the new dependencies
    if(oldDeps.length !== newDeps.length){
        return true;
    }
    // Iterate over the deeps and check if the old dependencies are not equal to the new dependencies
    for(let i = 0; i < oldDeps.length; i++){
        if(oldDeps[i] !== newDeps[i]){
            return true;
        }
    }
    return false;

}

const UseCustomMemo = (cb, deps) => {

    // 1. Variable or state to store the previous/cached value
    // Using useRef to check if it is the initial render, because useRef holds the value between renders, while useState does not
    const memoizedRef = useRef(null);

    // 2. Compare the previous value with the current value (i.e.) changes in dependencies)
    //-- Check if there is no memoized value, if it is empty, it is the initial render, || If it's not the initial render, then check if the dependencies have changed
    if(!memoizedRef.current || !equalityCheck(memoizedRef.current.deps, deps)){ 
        memoizedRef.current = {
            value: cb(),
            deps
        };
    }

    // 3. Cleanup logic
    useEffect(() => {
        // Return a cleanup function to clear the memoized value, when the component is unmounted
        return () => {
            memoizedRef.current = null;
        }
    }, [])
    
    // 4. Return the memoized value, if any
    return memoizedRef.current.value;

}

export default UseCustomMemo