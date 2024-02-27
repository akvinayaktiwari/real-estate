import { useContext, useEffect, useState } from 'react'
import { AppContext, AppProvider, useProductContext } from '../context/productContext.js'
import { useFilterContext } from '../context/filter_context.js'
import { useMediaQuery } from 'react-responsive'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import RealEstatePageLayout from '../components/partials/RealEstatePageLayout'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Pagination from 'react-bootstrap/Pagination'
import ImageLoader from '../components/ImageLoader'
import PropertyCard from '../components/PropertyCard'
import SimpleBar from 'simplebar-react'
import ReactSlider from 'react-slider'
import 'simplebar/dist/simplebar.min.css'
import FormatPrice from '../helpers/FormatPrice.js'
import 'leaflet/dist/leaflet.css'


const CatalogPage = () => {

  const {filter_products,
         sorting,
        filters: {text,propertyType,area,city,mxPrice,mnPrice,price},
        all_products,
        updateFilterValue
      }=useFilterContext();

  const {products}=useProductContext();

  const getUniqueData=(data,property)=>{
    let newVal=data.map((curElem)=>{
      return curElem[property]
      //console.log("unique",newVal)
    })
    return (newVal=["All",... new Set(newVal)])
    
  }
  const prop_for_rent=filter_products.filter((curElem)=>{
    return curElem.category==='rent';
  })
  const prop_for_sale=filter_products.filter((curElem)=>{
    return curElem.category==='sale';
  })
  console.log('hello')
  console.log(prop_for_rent)
  console.log(prop_for_sale)
  
  const categoryOnlyData=getUniqueData(all_products,"propertyType");
  const cityData=getUniqueData(all_products,"city");

  const areaData=getUniqueData(all_products,"area");


  // Add extra class to body
  useEffect(() => {
    const body = document.querySelector('body')
    document.body.classList.add('fixed-bottom-btn')
    return () => body.classList.remove('fixed-bottom-btn')
  })

 
  // Query param (Switch between Rent and Sale category)
  const router = useRouter(),
        categoryParam = router.query.category === 'sale' ? 'sale' : 'rent'

        // Media query for displaying Offcanvas on screens larger than 991px
  const isDesktop = useMediaQuery({ query: '(min-width: 992px)' })

  // Offcanvas show/hide
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // Bedrooms number
  const [bedroomsValue, setBedroomsValue] = useState('')
  const bedrooms = [
    {name: 'Studio', value: 'studio'},
    {name: '1', value: '1'},
    {name: '2', value: '2'},
    {name: '3', value: '3'},
    {name: '4+', value: '4+'}
  ]

  // Bathrooms number
  const [bathroomsValue, setBathroomsValue] = useState('')
  const bathrooms = [
    {name: '1', value: '1'},
    {name: '2', value: '2'},
    {name: '3', value: '3'},
    {name: '4', value: '4'}
  ]

  // Amenities checkboxes
  const amenities = [
    {value: 'Air conditioning', checked: true},
    {value: 'Balcony', checked: false},
    {value: 'Garage', checked: true},
    {value: 'Gym', checked: false},
    {value: 'Parking', checked: false},
    {value: 'Pool', checked: false},
    {value: 'Security cameras', checked: false},
    {value: 'WiFi', checked: true},
    {value: 'Laundry', checked: false},
    {value: 'Dishwasher', checked: false}
  ]

  // Pets checkboxes
  const pets = [
    {value: 'Cats allowed', checked: false},
    {value: 'Dogs allowed', checked: false}
  ]

  // Additional options checkboxes
  const options = [
    {value: 'Verified', checked: false},
    {value: 'Featured', checked: false}
  ]


  // Properties for rent array
 

  return (
    <RealEstatePageLayout
      pageTitle={`Property for ${categoryParam === 'sale' ? 'Sale' : 'Rent'}`}
      activeNav='Catalog'
    >

      {/* Page container */}
      <Container fluid className='mt-5 pt-5 p-0'>
        <Row className='g-0 mt-n3'>


          {/* Filters sidebar (Offcanvas on screens < 992px) */}
          <Col
            as='aside'
            lg={4}
            xl={3}
            className='border-top-lg border-end-lg shadow-sm px-3 px-xl-4 px-xxl-5 pt-lg-2'
          >
            <Offcanvas
              show={show}
              onHide={handleClose}
              responsive='lg'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title as='h5'>Filters</Offcanvas.Title>
              </Offcanvas.Header>

              {/* Nav (switch between Rent / Sale) */}
              <Offcanvas.Header className='d-block border-bottom pt-0 pt-lg-4 px-lg-0'>
                <Nav variant='tabs' className='mb-0'>
                  <Nav.Item>
                    <Nav.Link as={Link} href='/catalog?category=rent' active={categoryParam === 'rent' ? true : false}>
                      <i className='fi-rent fs-base me-2'></i>
                      For rent
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} href='/catalog?category=sale' active={categoryParam === 'sale' ? true : false}>
                      <i className='fi-home fs-base me-2'></i>
                      For Sale
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Offcanvas.Header>

              {/* Offcanvas body */}
              <Offcanvas.Body className='py-lg-4'>
                <div className='pb-4 mb-2'>
                  <h3 className='h6'>Location</h3>
                  <Form.Select  className='mb-2' name="city" id="city" onClick={updateFilterValue}>
                    {
                      cityData.map((curElem,index)=>{
                        return (
                          <option key={index} value={curElem} name="city">{curElem}</option>
                        )
                      })
                    }
                  </Form.Select>
                  <Form.Select  name='area' id="area" onClick={updateFilterValue}>
                    {
                      areaData.map((curElem,index)=>{
                        return (
                          <option key={index} value={curElem} name="area">{curElem}</option>
                        )
                      })
                    }
                  </Form.Select>
                </div>
                <div className='pb-4 mb-2'>
                  <h3 className='h6'>Property type</h3>
                  <SimpleBar autoHide={false} className='simplebar-no-autohide' style={{maxHeight: '11rem'}}>
                    {categoryOnlyData.map((curElem,index) => (
                      <Form.Check
                        key={index}
                        id={`type-${index}`}
                        value={curElem}
                        name="propertyType"
                        type="radio"
                        onClick={updateFilterValue}
                        label={<><span className='fs-sm'>{curElem}</span></>}  
                      />
                    ))}
                  </SimpleBar>
                </div>
                <div className='pb-4 mb-2'>
                  <h3 className='h6'>Price</h3>
                  <p>
                    Max Price:  <FormatPrice price={price} />
                  </p>
                  <input type='range' name="price" min={mnPrice} max={mxPrice} value={price} onChange={updateFilterValue} 
                   className="form-range custom-range"
                  />
                  {/* <PriceRange /> */}
                </div>
                <div className='pb-4 mb-2'>
                  <h3 className='h6 pt-1'>Beds &amp; baths</h3>
                  <label className='d-block fs-sm mb-1'>Bedrooms</label>
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
                  <label className='d-block fs-sm pt-2 my-1'>Bathrooms</label>
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
                </div>
                <div className='pb-4 mb-2'>
                  <h3 className='h6 pt-1'>Square metres</h3>
                  <div className='d-flex align-items-center'>
                    <Form.Control type='number' min={20} max={500} step={10} placeholder='Min' className='w-100' />
                    <div className='mx-2'>&mdash;</div>
                    <Form.Control type='number' min={20} max={500} step={10} placeholder='Max' className='w-100' />
                  </div> 
                </div>
                <div className='pb-4 mb-2'>
                  <h3 className='h6'>Amenities</h3>
                  <SimpleBar autoHide={false} className='simplebar-no-autohide' style={{maxHeight: '11rem'}}>
                    {amenities.map(({value, checked}, indx) => (
                      <Form.Check
                        key={indx}
                        id={`amenity-${indx}`}
                        value={value}
                        defaultChecked={checked}
                        label={<><span className='fs-sm'>{value}</span></>}  
                      />
                    ))}
                  </SimpleBar>
                </div>
                <div className='pb-4 mb-2'>
                  <h3 className='h6'>Pets</h3>
                  {pets.map(({value, checked}, indx) => (
                    <Form.Check
                      key={indx}
                      id={`pets-${indx}`}
                      value={value}
                      defaultChecked={checked}
                      label={<><span className='fs-sm'>{value}</span></>}  
                    />
                  ))}
                </div>
                <div className='pb-4 mb-2'>
                  <h3 className='h6'>Additional options</h3>
                  {options.map(({value, checked}, indx) => (
                    <Form.Check
                      key={indx}
                      id={`options-${indx}`}
                      value={value}
                      defaultChecked={checked}
                      label={<><span className='fs-sm'>{value}</span></>}  
                    />
                  ))}
                </div>
                <div className='border-top py-4'>
                  <Button variant='outline-primary'>
                    <i className='fi-rotate-right me-2'></i>
                    Reset filters
                  </Button>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>


          {/* Content */}
          <Col lg={8} xl={9} className='position-relative overflow-hidden pb-5 pt-4 px-3 px-xl-4 px-xxl-5'>


            {/* Breadcrumb */}
            <Breadcrumb className='mb-3 pt-md-2'>
              <Breadcrumb.Item linkAs={Link} href='/real-estate'>Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Property for {categoryParam === 'sale' ? 'sale' : 'rent'}</Breadcrumb.Item>
            </Breadcrumb>

            {/* Title + Map toggle */}
            <div className='d-sm-flex align-items-center justify-content-between pb-3 pb-sm-4'>
              <h1 className='h2 mb-sm-0'>Property for {categoryParam === 'sale' ? 'sale' : 'rent'}</h1>
              
            </div>

            {/* Sorting */}
            <div className='d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch my-2'>
              <Form.Group controlId='sortby' className='d-flex align-items-center flex-shrink-0'>
                <Form.Label className='text-body fs-sm me-2 mb-0 pe-1 text-nowrap'>
                  <i className='fi-arrows-sort text-muted mt-n1 me-2'></i>
                  Sort by:
                </Form.Label>
                <Form.Select size='sm'  name='sort' id='sort' onClick={sorting}>
                  <option value='Newest'>Newest</option>
                  <option value='Popularity'>Popularity</option>
                  <option value='Low - High Price'>Low - High Price</option>
                  <option value='High - Low Price'>High - Low Price</option>
                </Form.Select>
              </Form.Group>
              <hr className='d-none d-sm-block w-100 mx-4' />
              <div className='d-none d-sm-flex align-items-center flex-shrink-0 text-muted'>
               
              </div>
            </div>

            {/* Catalog grid */}
            <Row xs={1} sm={2} xl={3} className='g-4 py-4'>
              {categoryParam === 'sale' ?  prop_for_sale.map((product,indx) => (
                <Col key={indx}>
                  <PropertyCard
                    href={`/single/${product._id}`}
                    images={[[product.images[0],504,230,'Image']]}
                    title={product.title}
                    category={product.category}
                    location={product.location}
                    price={product.price}
                    //badges={product.badges}
                    wishlistButton={{
                      tooltip: 'Add to Wishlist',
                      props: {
                        onClick: () => console.log('Property added to your Wishlist!')
                      }
                    }}
                    // footer={[
                    //   ['fi-bed', products.amenities[0]],
                    //   ['fi-bath', products.amenities[1]],
                    //   ['fi-car', products.amenities[2]]
                    // ]}
                    className='h-100'
                  />
                </Col>
              )) : prop_for_rent.map((property, indx) => (
                <Col key={indx}>
                  <PropertyCard
                    href={`/single/${property._id}`}
                    images={[[property.images[0],504,230,'Image']]}
                    title={property.title}
                    category={property.category}
                    location={property.location}
                    price={property.price}
                    
                    wishlistButton={{
                      tooltip: 'Add to Wishlist',
                      props: {
                        onClick: () => console.log('Property added to your Wishlist!')
                      }
                    }}
                    // footer={[
                    //   ['fi-bed', property.amenities[0]],
                    //   ['fi-bath', property.amenities[1]],
                    //   ['fi-car', property.amenities[2]]
                    // ]}
                    className='h-100'
                  />
                </Col>
              ))}
            </Row>

            {/* Pagination */}
            <nav className='border-top pb-md-4 pt-4' aria-label='Pagination'>
              <Pagination className='mb-1'>
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Ellipsis />
                <Pagination.Item>{8}</Pagination.Item>
                <Pagination.Item>
                  <i className='fi-chevron-right'></i>
                </Pagination.Item>
              </Pagination>
            </nav>
          </Col>
        </Row>
      </Container>

      {/* Filters sidebar toggle button (visible < 991px) */}
      <Button size='sm' className='w-100 rounded-0 fixed-bottom d-lg-none' onClick={handleShow}>
        <i className='fi-filter me-2'></i>
        Filters
      </Button>
    </RealEstatePageLayout>
  )
}

export default CatalogPage
