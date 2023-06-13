import React from 'react'

import PlacesInnerRestaurantComponent from './PlacesInnerRestaurantComponent'
import PlacesInnerCinemaComponent from './PlacesInnerCinemaComponent'
import PlacesInnerCafeComponent from './PlacesInnerCafeComponent'
import PlacesInnerPubComponent from './PlacesInnerPubComponent'



function PlaceContent() {
  return (
    // Mobile Kötü 
    <div className=''>
    <PlacesInnerRestaurantComponent />
    <hr class="h-px my-8 bg-gray-400 border-0 "></hr>
    <PlacesInnerCafeComponent />
    <hr class="h-px my-8 bg-gray-400 border-0 "></hr>
    <PlacesInnerPubComponent />
    <hr class="h-px my-8 bg-gray-400 border-0 "></hr>
    <PlacesInnerCinemaComponent />
    
    </div>
    
  )
}

export default PlaceContent