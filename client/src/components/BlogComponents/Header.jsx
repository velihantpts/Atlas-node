import React from 'react'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <svg className="fill-current h-8 w-8 mr-2" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M48.292 38.156c-.015.035-.045.063-.062.098l-8.01 14.244c-.563.989-1.944 1.406-3.054.938l-15.852-7.794-9.338 7.106 11.61 16.576c.705 1.008.373 2.443-.69 3.15l-7.406 5.19c-.585.41-1.324.41-1.91 0l-7.406-5.19c-1.063-.707-1.395-2.142-.69-3.15l11.61-16.576-9.338-7.106-15.852 7.794c-1.11.468-2.49.051-3.054-.938l-8.01-14.244c-.016-.035-.046-.063-.062-.098l-.974-2.178c-.572-1.28.163-2.775 1.58-3.05l17.03-3.35 6.19-15.406c.296-.74 1.04-1.258 1.847-1.258h16.122c.808 0 1.552.518 1.847 1.258l6.19 15.406 17.03 3.35c1.417.276 2.153 1.77 1.58 3.05l-.974 2.178zM27 40.25c4.738 0 8.603-3.865 8.603-8.603s-3.865-8.603-8.603-8.603-8.603 3.865-8.603 8.603 3.865 8.603 8.603 8.603zm0-15.01c3.287 0 5.958 2.671 5.958 5.958s-2.671 5.958-5.958 5.958-5.958-2.671-5.958-5.958 2.671-5.958 5.958-5.958z" /></svg>
      <span className="font-semibold text-xl tracking-tight">My Blog</span>
    </div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<title>Menu</title>
<path d="M0 3h20v2h-20v-2zm0 6h20v2h-20v-2zm0 6h20v2h-20v-2z"/>
</svg>
      </button>
</div>
<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
  <div className="text-sm lg:flex-grow">
    <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
      Home
    </Link>
    <Link to="/categories" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4">
      Categories
    </Link>
    <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white">
      About
    </Link>
  </div>
</div>
</nav>
  )
}

export default Header