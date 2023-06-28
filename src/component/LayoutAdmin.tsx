import {FC} from "react";
import { HeaderAdmin } from "./HeaderAdmin";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
const LayoutAdmin:FC =() => {
    return (<>
    <HeaderAdmin />
    <div className="mt-20"><Outlet /></div>
    <Footer />
    
    </>)
}
export {LayoutAdmin} ;