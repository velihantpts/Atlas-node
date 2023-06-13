import { useState, React } from 'react';

function FaqComponent() {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [isExpanded4, setIsExpanded4] = useState(false);
  const [isExpanded5, setIsExpanded5] = useState(false);
  

  return (
    <div>
      <section className="bg-white text-black">
        <div className="container max-w-4xl px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl ">
            Frequently asked questions
          </h1>
          <div className="mt-12 space-y-8">
            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
              <button
                className="flex items-center justify-between w-full p-8"
                onClick={() => setIsExpanded1(!isExpanded1)}
              >
                <h1 className="font-semibold text-gray-700 ">
                  Is the cost of the appointment covered by private health insurance?
                </h1>
                <span className="text-white bg-blue-500 rounded-full">
                {isExpanded1 ? <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
            </svg>}          
          </span>             
              </button>
              {isExpanded1 && (
                <>
                  <hr className="border-gray-200 dark:border-gray-700" />
                  <p className="p-8 text-sm text-gray-500 ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                  </p>
                </>
              )}
            </div>
            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
              <button
                className="flex items-center justify-between w-full p-8"
                onClick={() => setIsExpanded2(!isExpanded2)}
              >
                <h1 className="font-semibold text-gray-700 ">
                  Is the cost of the appointment covered by private health insurance?
                </h1>
                <span className="text-white bg-blue-500 rounded-full">
                {isExpanded2 ? <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
            </svg>}          
          </span>             
              </button>
              {isExpanded2 && (
                <>
                  <hr className="border-gray-200 dark:border-gray-700" />
                  <p className="p-8 text-sm text-gray-500 ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                  </p>
                </>
              )}
            </div>
            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
              <button
                className="flex items-center justify-between w-full p-8"
                onClick={() => setIsExpanded3(!isExpanded3)}
              >
                <h1 className="font-semibold text-gray-700 ">
                  Is the cost of the appointment covered by private health insurance?
                </h1>
                <span className="text-white bg-blue-500 rounded-full">
                {isExpanded3 ? <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
            </svg>}          
          </span>             
              </button>
              {isExpanded3 && (
                <>
                  <hr className="border-gray-200 dark:border-gray-700" />
                  <p className="p-8 text-sm text-gray-500 ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                  </p>
                </>
              )}
            </div>
            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
              <button
                className="flex items-center justify-between w-full p-8"
                onClick={() => setIsExpanded4(!isExpanded4)}
              >
                <h1 className="font-semibold text-gray-700 ">
                  Is the cost of the appointment covered by private health insurance?
                </h1>
                <span className="text-white bg-blue-500 rounded-full">
                {isExpanded4 ? <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
            </svg>}          
          </span>             
              </button>
              {isExpanded4 && (
                <>
                  <hr className="border-gray-200 dark:border-gray-700" />
                  <p className="p-8 text-sm text-gray-500 ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                  </p>
                </>
              )}
            </div>
            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
              <button
                className="flex items-center justify-between w-full p-8"
                onClick={() => setIsExpanded5(!isExpanded5)}
              >
                <h1 className="font-semibold text-gray-700 ">
                  Is the cost of the appointment covered by private health insurance?
                </h1>
                <span className="text-white bg-blue-500 rounded-full">
                {isExpanded5 ? <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
            </svg>}          
          </span>             
              </button>
              {isExpanded5 && (
                <>
                  <hr className="border-gray-200 dark:border-gray-700" />
                  <p className="p-8 text-sm text-gray-500 ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FaqComponent;