import React,{ useState,useCallback,useEffect } from 'react'
import { useRouter } from 'next/router';
import RealEstatePageLayout from '../components/partials/RealEstatePageLayout'
import axios from 'axios';
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'

import Form from 'react-bootstrap/Form'

import Alert from 'react-bootstrap/Alert'



import { FilePond, registerPlugin } from 'react-filepond'

import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

import { API } from "./service/api.js";

import 'leaflet/dist/leaflet.css'


// Initialize FilePond plugins

// FilePond.registerPlugin(FilePondPluginFileEncode);




const initialBlog = {
    title: '',
    description: '',

    image: '',
    createdDate: new Date()
}



const AddPropertyPage = () => {
   const router = useRouter();

  
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [mainPicture, setMainPicture] = useState('');
  const [file,setFile]=useState(null);

  // const handlePhotoUpload = (files) => {
  //   // Assuming you only want to upload one file (main picture)

  //   const file = files[0];
  //   const localUrl = URL.createObjectURL(file.file);

  //   // Set the local URL of the uploaded photo
  //   setMainPicture(localUrl);
  // };

//   const handlePhotoUpload = async (files) => {
//   // Assuming you only want to upload one file (main picture)
 

  // const handlePhotoUpload = (files) => {
          
  //   //     const data = new FileReader()
  //   //     data.addEventListener('load',()=>{
  //   //         setImgs(data.result)
  //   //     })
  //   //     data.readAsDataURL(files[0])
    

  //   // console.log(imgs)
  
  // };

 

 




  // Handle file upload
  // const handlePhotoUpload =  useCallback ((fileItems) => {
  //   if (fileItems.length === 0) {
  //     // No files uploaded, handle this scenario
  //     console.log('No files uploaded.');
  //     return;
  //   }

  //   const file = fileItems[0].file;

  //   // Read the file as a data URL
  //   const reader = new FileReader();
  //   reader.onload = (event) => {
  //     const base64String = event.target.result;

  //     // Encrypt the image into Base64 format
  //     const encryptedBase64 = encryptBase64(base64String);

  //     // Save the encrypted Base64 string into your component's state or perform any other action as needed
  //     setMainPicture(encryptedBase64)
  //   };
  //   reader.readAsDataURL(file);
    

  // }, []);

  useEffect(() => {

            
    if(file){
     
    const temp=file[0]
    const files=temp.file
    const data = new FormData();
    console.log(files)
    data.append("name", files.name);
    data.append("file", files);
    
    fetch('http://localhost:8000/upload', {
        method: 'POST',
        body: data,
    })
    .then(response => response.json())
    .then(data => setMainPicture(data.imageUrl))
    .catch(error => console.error('Error:', error));
    
    //setMainPicture(response.data);
  }
    
        
    }, [file])

  // const handlePhotoUpload=async()=>{
  //   // if (files && files.length > 0) {
  //   //     const file = files[0]; // Directly accessing the first file
  //   //     console.log(file);

  //   //     const data = new FormData();
  //   //     data.append("name", file.name); // Adjusted to directly access file name
  //   //     data.append("file", file); // Adjusted to directly access the file

  //   //     try {
  //   //         // Assuming your API endpoint for file upload is /upload
  //   //         const response = await API.uploadFile(data)
  //   //         const picture = response.data;
  //   //         setMainPicture(picture); // Assuming setMainPicture is a state setter function you have defined elsewhere
  //   //     } catch (error) {
  //   //         console.error('Error:', error);
  //   //         // Handle error appropriately
  //   //     }
  //   // }
  //   if(file) {
  //               const data = new FormData();
  //               data.append("name", file.name);
  //               data.append("file", file);                
  //               const response = await API.uploadFile(data);
  //               setMainPicture(response.data);
  //           }
  // }

  










  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString();
      const response=await API.createBlog({title,category,
        description,
        image: mainPicture,
        createdDate: formattedDate});

      console.log('Response:', response.data);
      router.push('/account-blogs')
    } catch (error) {
      console.error('Error:', error);
    }

    // Reset the form after submission
    setTitle('');
    setDescription('');
    setMainPicture('');
    setCategory('');
  };

  

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
              
                <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
              
              <Breadcrumb.Item active>Add blog</Breadcrumb.Item>
              </Breadcrumb>
              

            {/* Title */}
            <div className='mb-4'>
              <h1 className='h2 mb-0'>Add Blog</h1>
              
              <ProgressBar variant='warning' now={65} style={{height: '.25rem'}} className='d-lg-none mb-4' />
            </div>


            {/* Basic info */}
            <section id='basic-info' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-info-circle text-primary fs-5 mt-n1 me-2'></i>
                Basic info
              </h2>
              <Form.Group controlId='ap-title' className='mb-3'>
                <Form.Label>Title <span className='text-danger'>*</span></Form.Label>
                <Form.Control defaultValue='Pine Apartments' 
                              placeholder='Title of your blog'
                              type="text"
                              id="title"
                              value={title}
                              onChange={(e) => setTitle(e.target.value)} 
                              required />
                {/* <Form.Text>48 characters left</Form.Text> */}
              </Form.Group>
              <Row>
                <Form.Group as={Col} md={6} controlId='ab-property-type' className='mb-3'>
                  <Form.Label>Category <span className='text-danger'>*</span></Form.Label>
                  <Form.Select defaultValue='' onChange={(e) => setCategory(e.target.value)} required>
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
                <Form.Label>Description</Form.Label>
                <Form.Control as='textarea' 
                              rows={5} 
                              id="description"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              placeholder='Write your content'/>
                {/* <Form.Text>1500 characters left</Form.Text> */}
              </Form.Group>

                
                
              </Row>
              
            </section>


            {/* Location */}
            {/* <section id='location' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-map-pin text-primary fs-5 mt-n1 me-2'></i>
                Location
              </h2>
              <Row>
                <Form.Group as={Col} sm={6} controlId='ap-country' className='mb-3'>
                  <Form.Label>Country / region <span className='text-danger'>*</span></Form.Label>
                  <Form.Select defaultValue='US' required>
                    <option value='' disabled>Choose country</option>
                    <option value='Australia'>Australia</option>
                    <option value='Belgium'>Belgium</option>
                    <option value='Germany'>Germany</option>
                    <option value='Canada'>Canada</option>
                    <option value='US'>United States</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} sm={6} controlId='ap-city' className='mb-3'>
                  <Form.Label>City <span className='text-danger'>*</span></Form.Label>
                  <Form.Select defaultValue='New York' required>
                    <option value='' disabled>Choose city</option>
                    <option value='Chicago'>Chicago</option>
                    <option value='Dallas'>Dallas</option>
                    <option value='Los Angeles'>Los Angeles</option>
                    <option value='New York' >New York</option>
                    <option value='San Diego'>San Diego</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} sm={8} controlId='ap-district' className='mb-3'>
                  <Form.Label>District <span className='text-danger'>*</span></Form.Label>
                  <Form.Select defaultValue='Queens' required>
                    <option value='' disabled>Choose district</option>
                    <option value='Brooklyn'>Brooklyn</option>
                    <option value='Manhattan'>Manhattan</option>
                    <option value='Staten Island'>Staten Island</option>
                    <option value='The Bronx'>The Bronx</option>
                    <option value='Queens'>Queens</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} sm={4} controlId='ap-zip' className='mb-3'>
                  <Form.Label>Zip code <span className='text-danger'>*</span></Form.Label>
                  <Form.Control defaultValue='67234' placeholder='Enter Zip code' required />
                </Form.Group>
                <Form.Group as={Col} sm={12} controlId='ap-address' className='mb-3'>
                  <Form.Label>Street address <span className='text-danger'>*</span></Form.Label>
                  <Form.Control defaultValue='28 Jackson Avenue' required />
                </Form.Group>
              </Row>
              <Form.Label className='fw-bold pt-3 pb-2'>Display on the map</Form.Label>
              <MapContainer
                center={[40.7447, -73.9485]}
                zoom={13}
                scrollWheelZoom={false}
                style={{height: '250px'}}
              >
                <TileLayer
                  url='https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=BO4zZpr0fIIoydRTOLSx'
                  tileSize={512}
                  zoomOffset={-1}
                  minZoom={1}
                  attribution={'\u003ca href=\'https://www.maptiler.com/copyright/\' target=\'_blank\'\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\'https://www.openstreetmap.org/copyright\' target=\'_blank\'\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'}
                />
                <CustomMarker position={[40.7447, -73.9485]} icon='dot'>
                  <Popup>
                    <div className='p-3'>
                      <h6>Pine Apartments</h6>
                      <p className='fs-xs text-muted pt-1 mt-n3 mb-0'>28 Jackson Ave Long Island City, NY</p>
                    </div>
                  </Popup>
                </CustomMarker>
              </MapContainer>
            </section> */}


            {/* Property details */}
            {/* <section id='details' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-edit text-primary fs-5 mt-n1 me-2'></i>
                Property details
              </h2>
              <Form.Group controlId='ap-area' className='mb-4' style={{maxWidth: '25rem'}}>
                <Form.Label>Total area, sq.m</Form.Label>
                <Form.Control type='number' defaultValue={56} min={20} placeholder='Enter your area' />
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label className='d-block fw-bold mb-2 pb-1'>Bedrooms</Form.Label>
                <ButtonGroup size='sm'>
                  {bedrooms.map((bedroom, indx) => (
                    <ToggleButton
                      key={indx}
                      type='radio'
                      id={`bedrooms-${indx}`}
                      name='bedrooms'
                      value={bedroom.value}
                      checked={bedroomsValue === bedroom.value}
                      onChange={(e) => setBedroomsValue(e.currentTarget.value)}
                      variant='outline-secondary fw-normal'
                    >{bedroom.name}</ToggleButton>
                  ))}
                </ButtonGroup>
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label className='d-block fw-bold mb-2 pb-1'>Bathrooms</Form.Label>
                <ButtonGroup size='sm'>
                  {bathrooms.map((bathroom, indx) => (
                    <ToggleButton
                      key={indx}
                      type='radio'
                      id={`bathrooms-${indx}`}
                      name='bathrooms'
                      value={bathroom.value}
                      checked={bathroomsValue === bathroom.value}
                      onChange={(e) => setBathroomsValue(e.currentTarget.value)}
                      variant='outline-secondary fw-normal'
                    >{bathroom.name}</ToggleButton>
                  ))}
                </ButtonGroup>
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label className='d-block fw-bold mb-2 pb-1'>Parking spots</Form.Label>
                <ButtonGroup size='sm'>
                  {parkings.map((parking, indx) => (
                    <ToggleButton
                      key={indx}
                      type='radio'
                      id={`parkings-${indx}`}
                      name='parkings'
                      value={parking.value}
                      checked={parkingsValue === parking.value}
                      onChange={(e) => setParkingsValue(e.currentTarget.value)}
                      variant='outline-secondary fw-normal'
                    >{parking.name}</ToggleButton>
                  ))}
                </ButtonGroup>
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label className='d-block fw-bold mb-2 pb-1'>Amenities</Form.Label>
                <Row xs={1} sm={3}>
                  {amenities.map((amenity, indx) => (
                    <Col key={indx}>
                      <Form.Check
                        type='checkbox'
                        id={`amenities-${indx}`}
                        value={amenity.value}
                        label={amenity.value}
                        defaultChecked={amenity.checked}
                      />
                    </Col>
                  ))}
                </Row>
              </Form.Group>
              <Form.Group className='mb-4'>
                <Form.Label className='d-block fw-bold mb-2 pb-1'>Pets</Form.Label>
                <Row xs={1} sm={3}>
                  <Col>
                    {pets.map((pet, indx) => (
                      <Form.Check
                        key={indx}
                        type='checkbox'
                        id={`pets-${indx}`}
                        value={pet.value}
                        label={pet.value}
                        defaultChecked={pet.checked}
                      />
                      ))}
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group controlId='ap-description'>
                <Form.Label>Description</Form.Label>
                <Form.Control as='textarea' rows={5} placeholder='Describe your property'/>
                <Form.Text>1500 characters left</Form.Text>
              </Form.Group>
            </section> */}


            {/* Price */}
            {/* <section id='price' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-cash text-primary fs-5 mt-n1 me-2'></i>
                Price
              </h2>
              <Form.Label htmlFor='ap-price'>
                Price <span className='text-danger'>*</span>
              </Form.Label>
              <div className='d-sm-flex'>
                <Form.Select className='w-25 me-2 mb-2'>
                  <option value='usd'>$</option>
                  <option value='eur'>€</option>
                  <option value='gbp'>£</option>
                  <option value='jpy'>¥</option>
                </Form.Select>
                <Form.Control
                  id='ap-price'
                  type='number'
                  min={200}
                  step={50}
                  className='w-100 me-2 mb-2'
                  required
                />
                <Form.Select defaultValue='month' className='w-50 mb-2'>
                  <option value='day'>per day</option>
                  <option value='week'>per week</option>
                  <option value='month'>per month</option>
                  <option value='year'>per year</option>
                </Form.Select>
              </div>
            </section> */}


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
                files={file}
                onupdatefiles={setFile}
                // server='/api' {/* Configure your server here. See plugin docs */}
                name='file'
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
              {/* <Button size='lg' variant='outline-primary d-block w-100 w-sm-auto mb-3 mb-sm-2' onClick={handlePreviewShow}>
                <i className='fi-eye-on ms-n1 me-2'></i>
                Preview
              </Button> */}
              <Link href='/account-blog' onSubmit={handleSubmit} passHref>
                <Button size='lg' variant='primary d-block w-100 w-sm-auto mb-2' onClick={handleSubmit}>Save and continue</Button>
              </Link>
            </section>
          {/* </Col> */}


        
        </Row>
      </Container>
    </RealEstatePageLayout>
  )
}

export default AddPropertyPage
