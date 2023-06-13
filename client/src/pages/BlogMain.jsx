import React from 'react'
import ContentBlogComponent from '../components/BlogComponents/ContentBlogComponent'
import CustomNavbar from '../components/CustomNavbar'
import FooterComponent from '../components/FooterComponent'
function BlogMain() {
  return (
    <div>
        <CustomNavbar />
        <ContentBlogComponent />
        <FooterComponent />
    </div>
  )
}

export default BlogMain