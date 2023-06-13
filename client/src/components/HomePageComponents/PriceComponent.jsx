import React from 'react'

function PriceComponent() {

  return (
    <div class="bg-white">
    <div class="container px-0 py-8 mx-auto">
        <div class="xl:items-center xl:-mx-8 xl:flex">
            <div class="flex flex-col items-center xl:items-start xl:mx-8">
                <h1 class="text-2xl font-medium text-gray-800 capitalize lg:text-3xl">Fiyatlarımız</h1>

                <div class="mt-4">
                    <span class="inline-block w-40 h-1 bg-sky-500 rounded-full"></span>
                    <span class="inline-block w-3 h-1 mx-1 bg-sky-500 rounded-full"></span>
                    <span class="inline-block w-1 h-1 bg-sky-500 rounded-full"></span>
                </div>

                <p class="mt-4 font-medium text-gray-500 dark:text-gray-400">
                    Size uygun planı seçerek işletmenizi bir adım öne çıkarın
                </p>

                <a href="#" class="flex items-center mt-4 -mx-1 text-sm text-gray-700 capitalize dark:text-blue-400 hover:underline hover:text-blue-500 dark:hover:text-blue-500">
                    <span class="mx-1">daha fazlası</span>
                    <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>

            <div class="flex-1 xl:mx-8">
                <div class="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0">
                    <div class="max-w-m  border rounded-lg md:mx-4 dark:border-gray-300 mr-5">
                        <div class="p-6">
                            <h1 class="text-xl font-medium text-gray-700 capitalize lg:text-2xl ">Temel Plan</h1>
                            <p class="mt-4 text-gray-500 dark:text-gray-600">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                            </p>
                            <h2 class="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl dark:text-gray-600">₺000.00 <span class="text-base font-medium">/ Lorem.</span></h2>
                            <p class="mt-1 text-gray-500 dark:text-gray-600">
                                Yearly payment
                            </p>
                            <button class="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-sky-500 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
    <a href="/checkout" class="inline-block w-full h-full">
        Başla
    </a>
</button>
                        </div>
                        <hr className=" border-gray-200  dark:border-gray-300" />

                        <div class="p-6">
                            <h1 class="text-lg font-medium text-gray-700 capitalize lg:text-xl ">İçerdikleri:</h1>

                            <div class="mt-8 space-y-4">
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-sky-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-700 dark:text-gray-500">Lorem, ipsum dolor.</span>
                                </div>

                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-sky-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-700 dark:text-gray-500">Lorem, ipsum dolor.</span>
                                </div>

                             

                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-700 dark:text-gray-500">Lorem, ipsum dolor.</span>
                                </div>

                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-700 dark:text-gray-500">Lorem, ipsum dolor.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="max-w-m mx-auto border rounded-lg md:mx-4 dark:border-gray-300">
                        <div class="p-6">
                            <h1 class="text-xl font-medium text-gray-700 capitalize lg:text-2xl ">Gelişmiş Plan</h1>

                            <p class="mt-4 text-gray-500 dark:text-gray-600">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                            </p>

                            <h2 class="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl dark:text-gray-600">₺000.00 <span class="text-base font-medium">/ Lorem, ipsum.</span></h2>

                            <p class="mt-1 text-gray-500 dark:text-gray-500">
                                Lorem, ipsum dolor.
                            </p>

                            <button class="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-sky-500 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
    <a href="/checkout" class="inline-block w-full h-full">
        Başla
    </a>
</button>
                        </div>

                        <hr className=" border-gray-200  dark:border-gray-300" />

                        <div class="p-6">
                            <h1 class="text-lg font-medium text-gray-700 capitalize lg:text-xl ">İçerdikleri:</h1>

                            <div class="mt-8 space-y-4">
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-sky-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-700 dark:text-gray-500">Lorem, ipsum dolor.</span>
                                </div>

                             

                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-sky-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-700 dark:text-gray-500">Lorem, ipsum dolor.</span>
                                </div>

                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-sky-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-700 dark:text-gray-500">Lorem, ipsum dolor.</span>
                                </div>

                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-sky-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span class="mx-4 text-gray-700 dark:text-gray-500">Lorem, ipsum dolor.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default PriceComponent