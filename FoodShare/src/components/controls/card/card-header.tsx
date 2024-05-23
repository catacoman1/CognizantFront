import { ReactNode } from "react";
import "./card-header.css"
const CardHeader = ({children} : {children:ReactNode}) => {
    return (
        <>
        <div className="card-header">
            {children}
        </div>
        </>
    )
}
export default CardHeader