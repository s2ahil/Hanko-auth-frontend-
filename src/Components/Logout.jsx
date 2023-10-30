import React,{  useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { Hanko } from "@teamhanko/hanko-elements";

const hankoApi = import.meta.env.REACT_APP_HANKO_API

export const Logout = () => {
   
    const navigate = useNavigate();
    const [hanko, setHanko] = useState(null)
  
    useEffect(() => {
        import("@teamhanko/hanko-elements").then(({ Hanko }) =>
            setHanko(new Hanko(hankoApi ?? ""))
        );
    }, []);

    const logout = async () => {
        try {
            await hanko?.user.logout();
            navigate("/");
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return (<>
        

        <button  className=" px-4 py-2 mt-2 bg-blue-500 text-white rounded hover:bg-green-600" onClick={async()=>await logout()}>logout</button>
    </>
    )
}

