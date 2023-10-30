import React from 'react'
import { register, Hanko } from "@teamhanko/hanko-elements";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useCallback } from 'react';


const hankoApi = import.meta.env.REACT_APP_HANKO_API
console.log(hankoApi)


export const Login = () => {
  const navigate = useNavigate();
  const hanko = useMemo(() => new Hanko(hankoApi), []);

  const redirectAfterLogin = useCallback(() => {
    navigate("/MainPage");
  }, [navigate]);

  useEffect(
    () =>
      hanko.onAuthFlowCompleted(() => {
        redirectAfterLogin();
      }),
    [hanko, redirectAfterLogin]
  );

  useEffect(() => {
    register(hankoApi).catch((error) => {
      console.log(error)
      // handle error
    });


    if (hanko.session.isValid() === true) {
      navigate('/MainPage')
    }
  }, []);


  return (
    <div className='flex min-h-screen justify-center items-center'>
      <div className='w-[400px] p-10 border rounded-xl shadow-md '>
        <hanko-auth />
      </div>

      {/* <hanko-auth api={hankoApi} /> */}
    </div>
  )
}
