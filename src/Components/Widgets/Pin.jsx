import { Link } from "react-router-dom"

export const Pin = ({onClick}) => {
    
    return (
        <div className='absolute right-4'> 
            <Link to=""><i className="fas fa-thumbtack text-1xl" onClick={onClick}></i></Link>
        </div>
    )
}
