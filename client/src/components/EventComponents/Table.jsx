import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Table = ({ eventName, eventType, imageURL, eventDate, contact, eventAmount, eventDescription, address, linkUrl  })  => {


  return (
    <div className=''>
   
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 ">
        <tbody>
            <tr class="bg-white border-b   hover:bg-gray-50 ">
                <td class="w-32 p-4">
                    <img src={imageURL} alt="Apple Watch"/>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 ">
                {eventName}
                </td>
                <td class="px-6 py-4">
                <td class="px-6 py-4 font-semibold text-gray-900 ">
                {eventType}
                </td>
                </td>
                <td class="px-6 py-4 font-semibold text-gray-900 ">
                {eventDate}
                </td>
                <td class="px-6 py-4">
                <Link to={linkUrl} className='inline-block text-blue-500 underline hover:text-blue-400'> Detay</Link>
                </td>
            </tr>
    
        </tbody>
    </table>
</div>

    </div>
  )
}

export default Table