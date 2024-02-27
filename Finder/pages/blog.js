import RealEstatePageLayout from '../components/partials/RealEstatePageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import BlogCard from '../components/BlogCard'
import Pagination from 'react-bootstrap/Pagination'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { API } from '../service/api'
import { useState,useEffect } from 'react'



const BlogPage = () => {

  const [posts,setPosts]=useState([]);
 

  // Posts array
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await API.getAllPosts();
            if (response.isSuccess) {
                setPosts(response.data);
            } else {
                console.error("Error fetching data:", response.error);
            }
        } catch (error) {
            console.error("An error occurred while fetching data:", error);
        }
    };

    fetchData();
  }, []);

///Pagination
  const postsPerPage = 6; // Adjust based on your preference
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const pageCount = Math.ceil(posts.length / postsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Correctly slice the posts for the current page
  const indexOfFirstPost = (currentPage - 1) * postsPerPage;
  const indexOfLastPost = currentPage * postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Render pagination items dynamically
  let items = [];
  for (let number = 1; number <= pageCount; number++) {
    items.push(
      <Pagination.Item key={number} active={number === currentPage} onClick={() => handlePageChange(number)}>
        {number}
      </Pagination.Item>
    );
  }

  

  return (
    <RealEstatePageLayout
      pageTitle='Blog'
      activeNav='Pages'
    >
      <Container className='mt-5 mb-md-4 py-5'>

        {/* Breadcrumbs + page title */}
        <Breadcrumb className='mb-3 pt-md-3'>
          <Breadcrumb.Item linkAs={Link} href='/'>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Blog</Breadcrumb.Item>
        </Breadcrumb>
      

        {/* Articles grid */}
        <Row xs={1} md={2} className='gy-md-4 gy-3 mb-lg-4 mb-2'>
          {currentPosts.map((post, indx) => (
            <Col key={indx} className='pb-2'>
              <BlogCard
                size='lg'
                href={`/blog-single/${post._id}`}
                img={{
                  src: post.image,
                  size: [744, 350],
                  alt: 'Image'
                }}
                category={post.category}
                title={post.title}
                text={post.descripton}
               // author={post.author}
                date={post.createdDate}
                //comments={post.comments}
                // badges={post.badges}
              />
            </Col>
          ))}
        </Row>


        {/* Pagination */}
       
         <nav className='d-flex pt-4 pb-2 border-top' aria-label='Blog pagination'>
        <Pagination className='mb-2'>
          {currentPage > 1 && (
            <Pagination.Item onClick={() => handlePageChange(currentPage - 1)}>
              <i className='fi-chevron-left'></i> {/* Assuming you have an icon or just use '<' */}
            </Pagination.Item>
          )}
          {items}
          {currentPage < pageCount && (
            <Pagination.Item onClick={() => handlePageChange(currentPage + 1)}>
              <i className='fi-chevron-right'></i> {/* Assuming you have an icon or just use '>' */}
            </Pagination.Item>
          )}
        </Pagination>
      </nav>
      </Container>
    </RealEstatePageLayout>
  )
}

export default BlogPage
