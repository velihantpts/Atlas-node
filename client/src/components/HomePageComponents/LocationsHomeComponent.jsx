import React from 'react'
import './places_comp.css'
function LocationsHomeComponent() {
  return (
    <div class="relative w-full flex items-center">
           <div class="relative z-10 justify-between  w-1/3 flex">
               <div class="family">
                   <img src="https://yudiz.com/codepen/real-estate/property-img-one.png" alt="img" class=" first:mt-0  max-w-full h-auto w-full object-cover mt-12 block"></img>
                   <img src="https://yudiz.com/codepen/real-estate/property-img-two.png" alt="img" class="max-w-full h-auto"></img>
                   <div class="banner-right-inner">
                       <h2>Isparta</h2>
                       <span>Kafeler </span>
              
                   </div>
                   <img src="https://yudiz.com/codepen/real-estate/property-img-three.png" alt="img" class="max-w-full h-auto"></img>
                   <img src="https://yudiz.com/codepen/real-estate/property-img-four.png" alt="img" class="max-w-full h-auto"></img>
               </div>
               <div class="sale">
                   <img src="https://yudiz.com/codepen/real-estate/property-img-five.png" alt="img" class="max-w-full h-auto"></img>
                   <img src="https://yudiz.com/codepen/real-estate/property-img-six.png" alt="img" class="max-w-full h-auto"></img>
                   <div class="banner-right-inner">
                       <h2 className='text-lg'>Isparta</h2>
                       <span>Restoranlar</span>
               
                   </div>
                   <img src="https://yudiz.com/codepen/real-estate/property-img-seven.png" alt="img" class="max-w-full h-auto"></img>
                   <img src="https://yudiz.com/codepen/real-estate/property-img-eight.png" alt="img" class="max-w-full h-auto"></img>
               </div>
           </div>
       </div>

  )
}

export default LocationsHomeComponent