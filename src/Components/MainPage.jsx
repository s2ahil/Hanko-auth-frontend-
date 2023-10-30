import React, { useEffect, useState } from 'react';
import { Profile } from './Profile';
import { Logout } from './Logout';
import axios from 'axios';
import { TypeAnimation } from 'react-type-animation';
import { Hanko } from "@teamhanko/hanko-elements";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {


    const navigate = useNavigate();
    const [text, setText] = useState('');
    const [showMainPage, setShowMainPage] = useState(false);
    const [response, setResponse] = useState('');
    const [error, setError] = useState(null); // State variable for error message
    const [loading, setLoading] = useState(false);
    const hanko = new Hanko(import.meta.env.REACT_APP_HANKO_API);
    const send = () => {
        setLoading(true);
        setError(null); // Clear previous error message, if any

        axios.post("https://hanko-auth-backend.onrender.com/summarize", { text_to_summarize: text }, { withCredentials: true })
            .then(res => {
                console.log('response', JSON.stringify(res.data));
                setResponse(res.data);
            })
            .catch(error => {
                console.error('Error:', error);
                setError("An error occurred. Please try again."); // Set the error message
            })
            .finally(() => {
                setLoading(false);
            });
    }


    useEffect(()=>{
            if (hanko.session.isValid() === false) {
        navigate('/login')
      }
    })

    return (
        <div className="p-8 bg-gray-100">
            <div className='relative space-x-10'>
                <Profile />
                <Logout />
            </div>

            <center><div className='m-4 mb-8 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-black'>AI TEXT SUMMARIZER</div></center>

            <div>
                <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
                    <div className='flex flex-col'>
                        <textarea
                            className="mt-5 p-2 border border-gray-300 rounded min-h-[20rem] w-full"
                            placeholder="Enter text to summarize"
                            onChange={(e) => setText(e.target.value)}
                            value={text}
                        />
                        <div className='max-w-[20rem] mx-auto'>
                            <button
                                className={`px-5 py-3 mt-2 w-full bg-blue-500 text-white rounded-full hover:bg-green-600 ${loading ? 'cursor-not-allowed' : ''}`}
                                onClick={send}
                                disabled={loading}
                            >
                                {loading ? 'Loading...' : 'Send'}
                            </button>
                        </div>
                    </div>
                    <div>
                        {error ? ( // Check for error message
                            <div className="mt-4 text-red-800">
                                <strong>Error:</strong>
                                <p>{error}</p>
                            </div>
                        ) : response === '' ? (
                            <div className='mt-5'>
                                <div className='flex flex-col'>
                                    <p className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-black">
                                        {loading ? 'Loading...' : <> <TypeAnimation
                                            sequence={[
                                                // Same substring at the start will only be typed out once, initially
                                                'Try typing something to see the summarized text',
                                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                                'Our AI can summarize anything',
                                                2000,
                                              
                                            ]}
                                            wrapper="span"
                                            speed={50}
                                        
                                            repeat={Infinity}
                                        /></> }
                                    </p>
                                    {loading ? (
                                        <div className="w-20 h-20 mx-auto">
                                            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                                        </div>
                                    ) : (
                                        <div className=''>
                                        <iframe
                                            height="250"
                                            width="250"
                                            src="https://giphy.com/embed/26AHONQ79FdWZhAI0"
                                            className="giphy-embed "
                                        ></iframe>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="mt-4 text-gray-800">
                                <strong>Summary:</strong>
                                <p>{response}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
