import { useSelector } from "react-redux";

function Protected({children}){
    const user=useSelector(selectLoggedInUser)
}