import AdminProduct from "../features/admin/components/Adminproduct";
import Navbar from "../features/navbar/Navbar";


function AdminHome(){
    return (
        <Navbar>
            <AdminProduct/>
        </Navbar>
    )
}

export default AdminHome