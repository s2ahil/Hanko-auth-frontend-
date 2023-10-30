import React, { useEffect, useState } from 'react';
import { register } from "@teamhanko/hanko-elements";
import { useNavigate } from "react-router-dom";
import { Hanko } from "@teamhanko/hanko-elements";


const hankoApi = import.meta.env.REACT_APP_HANKO_API;
const hanko = new Hanko(import.meta.env.REACT_APP_HANKO_API);

export const Profile = () => {
  const navigate = useNavigate();
  const [showProfilePage, setShowProfile] = useState(false);

  useEffect(() => {
    async function fetchData() {

      await register(hankoApi);






    }

    fetchData();
  }, []);

  return (<>


    <button
      className="px-4 py-2 mb-2 bg-blue-500 text-white rounded hover:bg-green-600"
      onClick={() => setShowProfile(!showProfilePage)}
    >
      Profile Setting
    </button>

    {
      showProfilePage && (
        <div className='w-[400px] p-3 border rounded-xl shadow-md bg-[#FFFFFF] '>


          <hanko-profile />
        </div>

      )
    }

  </>);
}



