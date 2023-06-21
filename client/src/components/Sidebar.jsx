import React, { useState } from 'react';

function SideMenu() {
  const [activeDropdown, setActiveDropdown] = useState('');

  const toggleDropdown = (menuId) => {
    setActiveDropdown((prevMenuId) => (prevMenuId === menuId ? '' : menuId));
  };

  return (
    <div className=''>
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
      </button>

      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          activeDropdown ? '' : '-translate-x-full sm:translate-x-0'
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-5 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 pt-10">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => toggleDropdown('menu2')}
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/> <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/> </svg>
                <span className="ml-2">Mekanlar</span>
              </a>
              {activeDropdown === 'menu2' && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li>
                    <a
                      href="/product-page"
                      className="block p-2 text-gray-700 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Sinemaları Görüntüle 
                    </a>
                  </li>
                  <li>
                    <a
                      href="/product-page"
                      className="block p-2 text-gray-700 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Pubları Görüntüle
                    </a>
                  </li>
                  <li>
                    <a
                      href="/product-page"
                      className="block p-2 text-gray-700 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Restoranları Görüntüle
                    </a>
                  </li>
                  <li>
                    <a
                      href="/product-page"
                      className="block p-2 text-gray-700 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Kafeleri Görüntüle
                    </a>
                  </li>
                  <li>
                    <a
                      href="/product-list"
                      className="block p-2 text-gray-700 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                       Sinema Ekle
                    </a>
                  </li>
                  <li>
                    <a
                      href="/product-list"
                      className="block p-2 text-gray-700 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                       Pub Ekle
                    </a>
                  </li>
                  <li>
                    <a
                      href="/product-list"
                      className="block p-2 text-gray-700 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                       Restoran Ekle
                    </a>
                  </li>
                  <li>
                    <a
                      href="/product-list"
                      className="block p-2 text-gray-700 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                       Kafe Ekle
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => toggleDropdown('menu6')}
              >
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16"> <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z"/> <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z"/> </svg>
                <span className="ml-2">Blog</span>
              </a>
              {activeDropdown === 'menu6' && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li>
                    <a
                      href="/person-page"
                      className="block p-2 text-gray-700 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Blog Ekle
                    </a>
                  </li>
                  <li>
                    <a
                      href="/person-list"
                      className="block p-2 text-gray-700 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Blogları Görüntüle
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => toggleDropdown('menu3')}
              >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-event" viewBox="0 0 16 16"> <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/> <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/> <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/> </svg>
                <span className="ml-2">Etkinlik</span>
              </a>
              {activeDropdown === 'menu3' && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li>
                    <a
                      href="/client-page"
                      className="block p-2 text-gray-700 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Etkinlik Oluştur
                    </a>
                  </li>
                  <li>
                    <a
                      href="/client-list"
                      className="block p-2 text-gray-700 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Etkinlikleri Görüntüle
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => toggleDropdown('menu4')}
              >
              <svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4 6C4 4.89543 4.89543 4 6 4H42C43.1046 4 44 4.89543 44 6V38C44 39.1046 43.1046 40 42 40H6C4.89543 40 4 39.1046 4 38V6Z" fill="none" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><rect x="8" y="40" width="8" height="4" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><rect x="32" y="40" width="8" height="4" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 16H27" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 34H12" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 34H29" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 25H44" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 10H44" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M36 34H38" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 6V14" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 6V14" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 21V29" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/><path d="M44 21V29" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span className="ml-2">Ulaşım</span>
              </a>
              {activeDropdown === 'menu4' && (
                <ul className="pl-4 mt-2 space-y-2">
                  <li>
                    <a
                      href="/operations"
                      className="block p-2 text-gray-700 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                    Ulaşım Ekle
                    </a>
                  </li>
                  <li>
                    <a
                      href="/operation-list"
                      className="block p-2 text-gray-700 rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Ulaşımı Görüntüle
                    </a>
                  </li>
                </ul>
              )}
            </li>

    
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Çıkış yap</span>
            </a>
         </li>
          </ul>
          </div>
        </aside>
      </div>
  );
}

export default SideMenu;


{/* <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
 <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg> */}