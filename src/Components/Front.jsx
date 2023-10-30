import React from 'react';
import { motion } from "framer-motion";
import {Link } from "react-router-dom"
export const Front = () => {
  return (
    <div>
      <div className='flex justify-center items-center mt-10 m-5 text-4xl font-extrabold '>
        <div className=''>Tired with lengthy text? Let<span className='text-blue-500'> AI</span> simplify it.</div>
      </div>

    

      <div className='bg-[#374151] w-[50rem] flex justify-center items-center mx-auto m-5 rounded'>
        <div className="grid grid-cols-3p-2 gap-2">
          {/* Content Column 1 */}
          <div class="block p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 hover-bg-gray-100">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-500 ">Long Paragraph ...</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.</p>
          </div>

          {/* <!-- "Converted To" Column --> */}

          <Link to='/login'>
          <div className='flex items-center justify-center'>
            <div class=" bg-blue-600 hover:bg-green-600 text-white p-2 rounded-lg  text-center w-[20rem]  text-xl flex justify-center gap-2">
            <div>Get Started</div>
            <div className='mt-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
            </div>
            </div>
          </div>
          </Link>


          {/* <!-- Content Column 2 --> */}
          <div class="block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover-bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-green-500 ">Concise Paragraph ...</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">Generating random paragraphs can be an excellent way for writers to get their creative flow going. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

//  {/* <div className='bg-green-100 flex justify-center items-center '>
//       <div className="grid md:grid-cols-3 md:grid-rows-3 grid-cols-1 ">
//         {/* Content Column 1 (Long Paragraph) */}
//         <div class="md:row-start-1 md:row-end-4 block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover-bg-gray-700">
//           <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Long Paragraph</h5>
//           <p class="font-normal text-gray-700 dark:text-gray-400">Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.</p>
//         </div>

//         {/* "Converted To" Column */}
//         <div className='ConvertTo md:row-start-2 md:row-end-3 text-center '>
//         <div class="bg-black text-white p-2">converted to</div>
//         </div>

//         {/* Content Column 2 (Concise Paragraph) */}
//         <div class="md:row-start-1 md:row-end-4 block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover-bg-gray-700">
//           <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Concise Paragraph</h5>
//           <p class="font-normal text-gray-700 dark:text-gray-400">Generating random paragraphs can be an excellent way for writers to get their creative flow going. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges.</p>
//         </div>
//       </div>
//     </div> */}
