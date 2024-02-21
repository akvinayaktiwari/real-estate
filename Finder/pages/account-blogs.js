import { useState ,useEffect} from 'react'
import { useRouter } from 'next/router'
import RealEstatePageLayout from '../components/partials/RealEstatePageLayout'
import RealEstateAccountLayout from '../components/partials/RealEstateAccountLayout'
import Link from 'next/link'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import PropertyCard from '../components/PropertyCard'

import { API } from './service/api'


const AccountPropertiesPage = () => {

  const router=useRouter();

  // // Properties array
  // const initialProperties = [
  //   {
  //     href: '/real-estate/single-v1',
  //     images: [['/images/real-estate/catalog/08.jpg', 'Image']],
  //     category: 'For rent',
  //     title: 'Greenpoint Rentals | 85 sq.m',
  //     location: '1510 Castle Hill Ave Bronx, NY 10462',
  //     price: '$1,330',
  //     badges: [['info', 'New']],
  //     amenities: [1, 1, 1]
  //   },
  //   {
  //     href: '/real-estate/single-v1',
  //     images: [['/images/real-estate/catalog/10.jpg', 'Image']],
  //     category: 'For rent',
  //     title: 'O’Farrell Rooms | 40 sq.m',
  //     location: '460 E Fordham Rd Bronx, NY 10458',
  //     price: 'From $550',
  //     badges: [['success', 'Verified']],
  //     amenities: [2, 1, 1]
  //   },
  //   {
  //     href: '/real-estate/single-v1',
  //     images: [['/images/real-estate/catalog/22.jpg', 'Image']],
  //     category: 'For sale',
  //     title: 'Cottage | 120 sq.m',
  //     location: '42 Broadway New York, NY 10004',
  //     price: '$184,000',
  //     badges: [['success', 'Verified']],
  //     amenities: [4, 2, 1]
  //   }
  // ]

  const [properties, setProperties] = useState([])
  const [blogs, setBlogs] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await API.getAllPosts();
            if (response.isSuccess) {
              
                setProperties(response.data);
            } else {
                console.error("Error fetching data:", response.error);
            }
        } catch (error) {
            console.error("An error occurred while fetching data:", error);
        }
    };

    fetchData();
}, [blogs]);

  const deleteBlog = async (id) => {  
        const response=await API.deletePost(id);
        if(response.isSuccess){
            router.push('/account-blogs')
        }
        

    }

  return (
    <RealEstatePageLayout
      pageTitle='Account My Blog'
      activeNav='Account'
      userLoggedIn
    >
    {/* <Button as={Link} href='/real-estate/add-blog' size='lg' className='w-100 mb-3'>
              <i className='fi-plus me-2'></i>
              Add property
            </Button> */}
      <RealEstateAccountLayout accountPageTitle='Blogs'>
        <div className='d-flex align-items-center w-100 justify-content-between mb-3'>
          <h1 className='h2 mb-0'>My Blogs</h1>
          <a href='/real-estate/add-blog' className='fw-bold text-decoration-none' >
            <i className='fi-plus me-2'></i>
            Add Blog
          </a>
        </div>
        <p className='pt-1 mb-4'>Here you can see your blog offers and edit them easily.</p>

        

        {/* List of properties or empty state */}
        {properties.length ? properties.map((property, indx) => (
          <PropertyCard
            key={indx}
            href={property.href}
            images={[[property.image,'Images']]}
           
            title={property.title}
            category={property.category}
            price={property.price}
           
            dropdown={[
              {
                // href: '#', // Optionally pass href prop to convert dropdown item to Next link
                icon: 'fi-edit',
                label: 'Edit',
                props: {onClick: () => router.push(`/update/${property._id}`)}
              },
             
              {
                icon: 'fi-trash',
                label: 'Delete',
                props: {
                  'data-index': indx,
                   onClick: async (indx) => {  
                    const response=await API.deletePost(property._id);
                    const updatedBlogs = [...blogs];
                    updatedBlogs.splice(indx, 1);
                    setBlogs(updatedBlogs);
                 }
                }
              }
            ]}
            horizontal
            className={indx === properties.length - 1 ? '' : 'mb-4' }
          />
        )) : <div className='text-center pt-2 pt-md-4 pt-lg-5 pb-2 pb-md-0'>
          <i className='fi-home display-6 text-muted mb-4'></i>
          <h2 className='h5 mb-4'>You don&apos;t have any blog!</h2>
          <Button as={Link} href='/add-blog' variant='primary'>
            <i className='fi-plus fs-sm me-2'></i>
            Add A Blog
          </Button>
        </div>}
      </RealEstateAccountLayout>
    </RealEstatePageLayout>
  )
}

export default AccountPropertiesPage