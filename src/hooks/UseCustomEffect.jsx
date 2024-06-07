import { useRef } from "react"

const UseCustomEffect = (effect, deps) => {

    // Using useRef to check if it is the initial render, because useRef holds the value between renders, while useState does not
    const isInitialRender = useRef(true);

    // Ref to check if the dependencies have changed or if there is no dependency array
    const prevDeps = useRef([]);
    
    // Initial render

    //-- Check if it is the initial render
    if(isInitialRender.current) {
        isInitialRender.current = false
        effect();
        return
    }

    // Dependency changes and No Dependency Array
    const depsChanged = deps ? 
                                JSON.stringify(deps) !== JSON.stringify(prevDeps.current)  
                            : 
                                true; // If there is no dependency array, then it is always true, and component will always re-render
    if(depsChanged) {
        // The effect will be called if the dependencies have changed or if there is no dependency array
        effect();
    }

    prevDeps.current = deps || []; // Update the previous dependencies with the current dependencies, to hold it across renders

    // Cleanup
}

export default UseCustomEffect