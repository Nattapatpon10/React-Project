import {FC, useState} from "react";
import { z } from "zod";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserPlus, faCircleUser } from "@fortawesome/free-solid-svg-icons";



const RegisterPage: FC = () => {
 /**
    * define calidate object
    */
 const memberForm = z
 .object({
     email: z.string().email(),
     name: z.string().nonempty(),
     password: z.string().min(4),
     rePassword: z.string().min(4),
     group:z.string(),
     role:z.string(),
     age: z.string().min(1).max(2).refine((value) => {
        const parsedValue = Number(value);
        return !isNaN(parsedValue);
      }),
 })
 .refine((data) => data.password === data.rePassword, {
     message: "Password don't match",
     path: ["rePassword"]
 })
 type Member = z.infer<typeof memberForm>;
 const [frm ,setForm] = useState<Member>({
     email:"",
     name: "",
     password: "",
     rePassword: "",
     group: "",
     role:"student",
     age: "", 

 });

 /**
  * on save api
  */

 const createMember = async () => {
     const resp = await fetch("https://script.google.com/macros/s/AKfycbz5NLFpEcv7r1KRq_zXPMHRkKRzOaFOo7e2d9R7e2QDCVPRYNxp6t2KEhZJbDQ8oVCajA/exec?action=addUser", {
         method: "POST",
         body: JSON.stringify(frm),
     });
     if(resp.status === 200){
         // TODO: close dialog

     }else{
         //TODO: popup error alert
         console.log(resp.statusText);
     }
 };

 /**
  * call get by id
  */

//  const getMemberById = async () =>{
//      const resp = await fetch("https://script.google.com/macros/s/AKfycbz5NLFpEcv7r1KRq_zXPMHRkKRzOaFOo7e2d9R7e2QDCVPRYNxp6t2KEhZJbDQ8oVCajA/exec?action=getUsers", {
//          method: "GET",
//          headers: {
//              "Content-Type":"application/json"
//          },
//      });
//      if(resp.status === 200){
//          const data = await resp.json();
//          setForm({...data, rePassword: data["password"]})
//      }

//  };

/**
     * on save click
     */
const onSaveClick = () => {
    const member = memberForm.safeParse(frm);
    if (member.success){
           createMember();
        }
    else{
        //TODO: popup error alert box
        console.log(member.error.message);
    }
}



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
                    <input type="text" 
                    id="name" 
                    placeholder="FULL NAME" 
                    className="input-log"
                    value={frm.name}
                    onChange={(e) => setForm({...frm, name: e.target.value})} />
                </div>
                <div > 
                    <label htmlFor="email">Email</label>
                    <input type="text" 
                    id="email" 
                    placeholder="EMAIL" 
                    className="input-log"
                    value={frm.email}
                    onChange={(e) => setForm({...frm, email: e.target.value})} />
                </div>
                <div >
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                    id="password" 
                    placeholder="PASSWORD" 
                    className="input-log"
                    value={frm.password}
                    onChange={(e) => setForm({...frm, password: e.target.value})} />
                </div>
                <div >
                    <label htmlFor="rePassword">Re-Password</label>
                    <input type="password" 
                    id="rePassword" 
                    placeholder="PASSWORD" 
                    className="input-log"
                    value={frm.rePassword}
                    onChange={(e) => setForm({...frm, rePassword: e.target.value})} />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="number" 
                    id="age" 
                    placeholder="AGE" 
                    className="input-log"
                    value={frm.age}
                    onChange={(e) => setForm({...frm, age: e.target.value})} />
                </div>
                <div >
                    <label htmlFor="group">Group</label>
                    <input type="text" id="group"
                    placeholder="xx/xx"
                    className="input-log"
                    value={frm.group}
                    onChange={(e) => setForm({...frm, group: e.target.value})} />
                </div>
                <div className="flex flex-row justify-center gap-3 ">
                    <button className="btn" onClick={onSaveClick}> <FontAwesomeIcon icon={faUserPlus} /> Register</button>
                </div>

        </div>
        


    </div>

    </>)
}
export {RegisterPage};