import {FC} from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";


const HeaderAdmin: FC = () => {
    return<>
    <div className="bg-[#27374D] text-[#DDE6ED] w-screen fixed top-0  flex flex-row items-center gap-1 p-1 px-5  xl:gap-5 xl:p-1 xl:px-10  ">
        <div className="2xl:text-3xl font-bold border-2 rounded-sm p-1 px-2 ">Student Leave</div>
        <div className="2xl:text-2xl ml-auto border border-[#27374D] hover:bg-[#DDE6ED] hover:text-[#27374D] p-2 rounded-md hover:cursor-pointer" >User</div>
        <div className="2xl:text-2xl hover:cursor-pointer rounded-md hover:text-[#DDE6ED] " > <UserCircleIcon className="w-10 h-10 hover:text-[#9DB2BF] " />  </div>

    </div>
    </>
}
export {HeaderAdmin};