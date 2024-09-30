/* eslint-disable no-unused-vars */
import React from 'react'
import BlogBanner from '../../componnets/blog/Blogbanner'
import BlogSection from './BlogsSection'
import Footer from '../../componnets/common/Footer'
import Header from '../../componnets/common/Header'
import ScrollToTopButton from '../../componnets/common/ScrollToTopButton'
const BlogMain = () => {
  return (
    <div>
        <ScrollToTopButton />

      <Header/>
      <BlogBanner/>
      <BlogSection/>
      <Footer/>
    </div>
  )
}

export default BlogMain
