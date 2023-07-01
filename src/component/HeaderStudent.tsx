import {FC} from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const HeaderStudent: FC = () => {
    return<>
    <div className="bg-[#27374D] text-[#DDE6ED] w-screen fixed top-0  flex flex-row items-center gap-1 p-1 px-5  xl:gap-5 xl:p-1 xl:px-10  ">
        <div className="2xl:text-3xl font-bold border-2 rounded-sm p-1 px-2 ">Student Leave</div>
        <Link to="/teacher/statistics" className="2xl:text-2xl border border-[#27374D] hover:bg-[#DDE6ED] hover:text-[#27374D] p-2 rounded-md hover:cursor-pointer">Teacher Page</Link>
        <Link to="/admin/userlist" className="2xl:text-2xl border border-[#27374D] hover:bg-[#DDE6ED] hover:text-[#27374D] p-2 rounded-md hover:cursor-pointer">Admin Page</Link>
        <Link to="/student/leavePage" className="2xl:text-2xl ml-auto border border-[#27374D] hover:bg-[#DDE6ED] hover:text-[#27374D] p-2 rounded-md hover:cursor-pointer">Leave Form</Link>
        <div className="2xl:text-2xl hover:cursor-pointer rounded-md hover:text-[#DDE6ED] " > <UserCircleIcon className="w-10 h-10 hover:text-[#9DB2BF] " />  </div>
    </div>
    </>
}
export {HeaderStudent};