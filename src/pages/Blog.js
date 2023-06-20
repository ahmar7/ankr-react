import React from 'react';
import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer';
import TopHeader from '../components/Blog/Header/TopHeader';
import MainBlog from '../components/Blog/MainBlog/MainBlog';
import ExploreContent from '../components/Blog/ExploreContent/ExploreContent';
import OtherBlogs from '../components/Blog/OtherBlogs/OtherBlogs';

const Blog = () => {
    return (
      <div>
        <Header/>
        <div className="jss6 jss7 desk-cl ">
         <TopHeader/>
         <MainBlog/>
         <ExploreContent/>
         <OtherBlogs/>
        </div>
        <Footer />
      </div>
    );
}

export default Blog;
