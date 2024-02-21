import { useState ,useEffect} from 'react'
import { useRouter } from 'next/router';
import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'

import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Form from 'react-bootstrap/Form'
import Collapse from 'react-bootstrap/Collapse'
import Alert from 'react-bootstrap/Alert'
import Modal from 'react-bootstrap/Modal'
import Badge from 'react-bootstrap/Badge'

import { FilePond, registerPlugin } from 'react-filepond'

import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

import { API } from "../service/api.js";

import 'leaflet/dist/leaflet.css'



const initialBlog = {
    title: '',
    description: '',
    image: '',
    createdDate: ''
}


const UpdatePropertyPage = () => {

    const router=useRouter()
    const {id} = router.query
 
  
    const [post, setPost] = useState({});

    useEffect(() => {
            const fetchData = async () => {
                let response = await API.getPostById(id);
                if (response.isSuccess) {
                    setPost(response.data);
                }
            }
            fetchData();
        }, []);

    



    
  const handlePhotoUpload = (files) => {
    // Assuming you only want to upload one file (main picture)
    const file = files[0];
    const localUrl = URL.createObjectURL(file.file);

    // Set the local URL of the uploaded photo
    setMainPicture(localUrl);
  };

    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getPostById(id);
            if (response.isSuccess) {
                setPost(response.data);
            }
        }
        fetchData();
    }, []);

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    
    }

  const handleSubmit = async () => {
        await API.updatePost(post);
        router.push('/account-blogs')
    }



  return (
    <RealEstatePageLayout
      pageTitle='Add Blog'
      activeNav='Vendor'
      userLoggedIn
    >
      {/* Preview modal */}
      

      
      {/* Page container */}
      <Container className='mt-5 mb-md-4 py-5 justify-content-center'>
        <Row>

          {/* Page content */}
          {/* <Col lg={8}> */}

            {/* Breadcrumb */}
            <Breadcrumb className='mb-3 pt-2 pt-lg-3'>
              
                <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>
              
              <Breadcrumb.Item active>Edit blog</Breadcrumb.Item>
              </Breadcrumb>
              

            {/* Title */}
            <div className='mb-4'>
              <h1 className='h2 mb-0'>Edit Blog</h1>
              
              <ProgressBar variant='warning' now={65} style={{height: '.25rem'}} className='d-lg-none mb-4' />
            </div>


            {/* Basic info */}
            <section id='basic-info' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-info-circle text-primary fs-5 mt-n1 me-2'></i>
                Basic info
              </h2>
              <Form.Group controlId='ap-title' className='mb-3'>
                <Form.Label htmlFor='ap-title'>Title <span className='text-danger'>*</span></Form.Label>
                <Form.Control
                    defaultValue='Pine Apartments'
                    placeholder='Title of your blog'
                    type="text"
                    id="ap-title"
                    name="title"  // Make sure to set the name attribute to match your handleChange function
                    onChange={(e) => handleChange(e)}
                    value={post.title}
                    required
                />
               </Form.Group>

              <Row>
                <Form.Group as={Col} md={6} controlId='ab-property-type' className='mb-3'>
                    <Form.Label>Category <span className='text-danger'>*</span></Form.Label>
                    <Form.Select
                        defaultValue={post.category}
                        onChange={(e) => handleChange(e)}
                        id='ab-property-type'  // Set the id attribute to match controlId
                        name='category'  // Set the name attribute to match your handleChange function
                    >
                        <option value=''>Choose Category</option>
                        <option value='Inspiration'>Inspiration</option>
                        <option value='Home improvement'>Home improvement</option>
                        <option value='Tips & Advice'>Tips & Advice</option>
                        <option value='Property Market Analysis'>Property Market Analysis</option>
                        <option value='Industry Views'>Industry Views</option>
                    </Form.Select>
                </Form.Group>

              </Row>
              <Row>
              <Form.Group controlId='ap-description'>
                <Form.Label htmlFor='ap-description'>Description</Form.Label>
                <Form.Control
                    as='textarea'
                    rows={5}
                    id='ap-description'  // Make sure this id matches the controlId in Form.Group
                    name='description'
                    onChange={(e) => handleChange(e)}
                    value={post.description}
                    placeholder='Write your content'
                />
                </Form.Group>


                
                
              </Row>
              
            </section>

            {/* Photos */}
            <section id='photos' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-image text-primary fs-5 mt-n1 me-2'></i>
                Photos 
              </h2>
              <Alert variant='info' className='d-flex mb-4'>
                <i className='fi-alert-circle me-2 me-sm-3'></i>
                <p className='fs-sm mb-1'>The maximum photo size is 8 MB. Formats: jpeg, jpg, png. Put the main picture first.</p>
              </Alert>
              <FilePond
                
                onupdatefiles={handlePhotoUpload}
                // server='/api' {/* Configure your server here. See plugin docs */}
                name='gallery'
                labelIdle='<div class="btn btn-primary mb-3"><i class="fi-cloud-upload me-1"></i>Upload photo</div><div>or drag them in</div>'
                acceptedFileTypes={['image/png', 'image/jpeg']}
                allowMultiple={false}
                maxFiles={1}
                maxFileSize='2MB'
                className='file-uploader file-uploader-grid'
              />
            </section>

            
          


            {/* Action buttons */}
            <section className='d-sm-flex justify-content-center pt-2'>
            
              <Link href='/account-blogs' onSubmit={handleSubmit} passHref>
                <Button size='lg' variant='primary d-block w-100 w-sm-auto mb-2' onClick={handleSubmit}>Save and continue</Button>
              </Link>
            </section>
          {/* </Col> */}


        
        </Row>
      </Container>
    </RealEstatePageLayout>
  )
}



export default UpdatePropertyPage
