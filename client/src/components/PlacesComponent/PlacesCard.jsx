import React from 'react'

function PlacesCard() {
  return (
    <div>
    <div class="flex flex-col justify-center items-center cursor-pointer">
    <div class="!z-5 relative  rounded-[20px] max-w-[300px] sm:max-w-[500px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] undefined">
        <div class="h-full w-full">
            <div class="relative w-full">
                <img src="https://dr.savee-cdn.com/things/6/3/ff5bfafd0adce098bf464a.webp" class="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt=""/>
                <button class="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
                    <div class="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                    </div>
                </button>
            </div>
            <div class="mb-3 flex items-center justify-between px-1 md:items-start  ">
                <div class="mb-2 w-full">
                    <p class="text-lg font-bold text-gray-700"> Antre Gurme </p>
                    <p class="text-sm font-bold text-gray-300 mb-2"> Güzel restoranımızda lezzetli mutfağından yemekler eşliğinde güzel ve hoş bir akşam geçirmeye ne dersiniz? “ANTRE GURME CAFE KITHCHEN” restoranımıza hoş geldiniz. </p>
                    <div className='text-start'>
                    <a class="mt-1 text-sm font-medium md:mt-2 flex-end ">Detay</a>
                    </div>

                </div>
                
            </div>
        
        </div>
    </div>
    
</div>  
</div>
  )
}

export default PlacesCard