import {FC, useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserMinus, faPenToSquare } from "@fortawesome/free-solid-svg-icons";


interface User {
    name: string;
    age: number;
    group: string;
    role: string;
    id: number;
}

interface RowUserProps{
    user: User;
}

const UserRow:FC<RowUserProps> = ({user}) =>{

    return(<>
    <tr key={user.id} className="hover:bg-gray-200 h-8 text-sm xl:text-xl 2xl:text-xl" >
    <td  className="text-center border-y-2  border-gray-300 w-20 "> <FontAwesomeIcon icon={faPenToSquare}/> </td>
    <td  className="text-center border-y-2 border-x-2 border-gray-300"> {user.id} </td>
        <td className="px-1 w-[35%] border-y-2 border-x-2 border-gray-300"> {user.name} </td>
        <td  className="text-center border-y-2 border-x-2 border-gray-300">{user.age}</td>
        <td  className="text-center border-y-2 border-x-2 border-gray-300">{user.group}</td>
        <td  className="text-center border-y-2 border-x-2 border-gray-300"> {user.role} </td>
        <td  className="text-center border-y-2 border-gray-300 w-32 "> <FontAwesomeIcon icon={faUserMinus} /> </td>
    </tr>
    </>)
}


    const UserList: FC = () => {

    const [user, setUser] = useState([]);

    //temporary for delete member

    //temporary for edit member


    useEffect( () => {
        fetchUser();
    },[])

    /**
     *  Fetch data from user api
     */
    const fetchUser = async() => {
        const resp = await fetch("https://script.google.com/macros/s/AKfycbz5NLFpEcv7r1KRq_zXPMHRkKRzOaFOo7e2d9R7e2QDCVPRYNxp6t2KEhZJbDQ8oVCajA/exec?action=getUsers",
        {
            method: "GET"
        });
        if(resp.status === 200 ) {
            const data = await resp.json();
            setUser(data);
        }
    
    };


    /**
     * template
     */
    return<>
    <div className="bg-slate-50 rounded-md w-[98%] m-auto shadow-md border-2 border-[#27374D] p-3">
    <table className="w-full text-sm xl:text-xl 2xl:text-xl">
        <thead className="h-12">
            <tr>
                <th>Edit</th>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Group</th>
                <th>Role</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody className="">
                            {user.map((u:User)=>(
                                <UserRow 
                                    user={u} 
                                    key={u.id} 
                                />
                            ))}
                        </tbody>
    </table>

    </div>
    </>
}
export {UserList};