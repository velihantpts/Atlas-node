import React from 'react'

function FooterComponent() {
  return (

<footer class="bg-white">
    <div class="container px-6 py-12 mx-auto">
     
        
        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-300" />

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:px-10 mb-3">
            <div>
                <p class="font-semibold text-gray-800 ">Sayfalar</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <a href="/" class="text-gray-800 transition-colors duration-300 dark:text-gray-700 dark:hover:text-blue-500 hover:underline hover:text-blue-500">Ana Sayfa</a>
                    <a href="/blog-main" class="text-gray-800 transition-colors duration-300 dark:text-gray-700 dark:hover:text-blue-500 hover:underline hover:text-blue-500">Blog</a>
                    <a href="/event" class="text-gray-800 transition-colors duration-300 dark:text-gray-700 dark:hover:text-blue-500 hover:underline hover:text-blue-500">Etkinlikler</a>
                    <a href="/locations" class="text-gray-800 transition-colors duration-300 dark:text-gray-700 dark:hover:text-blue-500 hover:underline hover:text-blue-500">Mekanlar</a>
                    <a href="/transportation" class="text-gray-800 transition-colors duration-300 dark:text-gray-700 dark:hover:text-blue-500 hover:underline hover:text-blue-500">Ulasım</a>
                    {/* <a href="#" class="text-gray-800 transition-colors duration-300 dark:text-gray-700 dark:hover:text-blue-500 hover:underline hover:text-blue-500">Who We Are</a> */}
                    {/* <a href="#" class="text-gray-800 transition-colors duration-300 dark:text-gray-700 dark:hover:text-blue-500 hover:underline hover:text-blue-500">Our Philosophy</a> */}
                </div>
            </div>

            {/* <div>
                <p class="font-semibold text-gray-800 ">Industries</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-700 dark:hover:text-blue-500 hover:underline hover:text-blue-500">Retail & E-Commerce</a>
                    <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-700 dark:hover:text-blue-500 hover:underline hover:text-blue-500">Information Technology</a>
                    <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-700 dark:hover:text-blue-500 hover:underline hover:text-blue-500">Finance & Insurance</a>
                </div>
            </div> */}

            <div>
                <p class="font-semibold text-gray-800 ">Hizmetler</p>

                {/* <div class="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-700 dark:hover:text-blue-500 hover:underline hover:text-blue-500">Translation</a>
                    <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-700 dark:hover:text-blue-500 hover:underline hover:text-blue-500">Proofreading & Editing</a>
                    <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-700 dark:hover:text-blue-500 hover:underline hover:text-blue-500">Content Creation</a>
                </div> */}
            </div>

            <div>
                <p class="font-semibold text-gray-800 ">İletisim</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-700 dark:hover:text-blue-500 hover:underline hover:text-blue-500">+90 543 540 2313</a>
                    <a href="#" class="text-gray-600 transition-colors duration-300 dark:text-gray-700 dark:hover:text-blue-500 hover:underline hover:text-blue-500">info@atlas.com</a>
                </div>
            </div>
        </div>
        
        {/* <hr class="my-6 border-gray-200 md:my-10 dark:border-gray-700"> */}
        
        <div class="flex flex-col items-center justify-between sm:flex-row">
            <a href="#">
                {/* Social media links || mark links */}
                {/* <img class="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt=""> */}
            </a>

            <p class="mt-7 text-sm text-gray-500  dark:text-gray-300 ">© Copyright 2023. All Rights Reserved.</p>
        </div>
    </div>
</footer>
    
  )
}


export default FooterComponent