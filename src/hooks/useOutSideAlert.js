import {useEffect,useState} from 'react'

export const useOutSideAlert=(ref)=>{
    const [isShow,setIsShow] = useState(true)
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        const handleClickOutside=(event)=> {
            if (ref.current && !ref.current.contains(event.target)) {
                // alert("You clicked outside of me!");
                setIsShow(true)
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
    return {isShow,setIsShow}
}

