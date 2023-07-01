import {FC} from "react";
import { HeaderStudent } from "./HeaderStudent";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
const LayoutStudent:FC =() => {
    return <>
    <HeaderStudent />
    <div className="mt-20 mb-10"><Outlet /></div> 
    <Footer />
    
    </>
}
export {LayoutStudent} ;