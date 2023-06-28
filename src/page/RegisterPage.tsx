import {FC} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserPlus, faCircleUser } from "@fortawesome/free-solid-svg-icons";

const RegisterPage: FC = () => {
    return(<>
       <div className="flex flex-col h-screen w-screen justify-center items-center content-center text-[#DDE6ED]
     bg-[url('http://pgm.npru.ac.th/npruds/data/images/23660346_1569675309776077_584564522_o.jpg')] ">
    <div className="text-[#1b3353]  text-[8rem] -mt-[5.2rem] -mb-[5.2rem] z-10">
        <FontAwesomeIcon icon={faCircleUser} />
    </div>
        <div className="sm:w-3/5 md:w-3/5 lg:w-3/5 xl:w-3/5 2xl:w-1/4 bg-[rgb(39,55,77,0.8)]  rounded-md shadow-md p-3 pt-11  px-2 flex flex-col gap-3 text-xl z-1 ">
        
            <div  className="text-center text-4xl"><label>Login</label></div>
            <div >
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="FULL NAME" className="input-log" />
                </div>
                <div > 
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="EMAIL" className="input-log" />
                </div>
                <div >
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="PASSWORD" className="input-log" />
                </div>
                <div >
                    <label htmlFor="rePassword">Re-Password</label>
                    <input type="password" id="rePassword" placeholder="PASSWORD" className="input-log" />
                </div>
                <div >
                    <label htmlFor="group">Group</label>
                    <input type="password" id="group" placeholder="xx/xx" className="input-log" />
                </div>
                <div className="flex flex-row justify-center gap-3 ">
                    <button className="btn"> <FontAwesomeIcon icon={faUserPlus} /> Register</button>
                </div>

        </div>
        


    </div>

    </>)
}
export {RegisterPage};