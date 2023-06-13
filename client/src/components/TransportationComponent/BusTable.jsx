import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const BusTable = ({ anadurak_clock_1, unidurak_clock_1 })  => {


  return (
    <div className=''>
   
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 ">
        <tbody>
            <tr class="bg-white border-b   hover:bg-gray-50 ">
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
            </tr>
    
        </tbody>
    </table>
</div>

    </div>
  )
}

export default BusTable