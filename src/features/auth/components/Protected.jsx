import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectedLoggedInUser } from "../authSlice";


function Protected({children}){
    const user=useSelector(selectedLoggedInUser)
    if(!user){
        return <Navigate to="/login" replace={true}></Navigate>
    }
    return children;
}

export default Protected;