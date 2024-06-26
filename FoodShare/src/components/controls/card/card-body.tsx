import { ReactNode } from "react";
import "./card-body.css"

const CardBody = ({children} : {children:ReactNode}) => {
    return (
        <>
        <div className="card-body">
            {children}
        </div>
        </>
    )
}
export default CardBody