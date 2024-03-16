import { useState, useEffect } from 'react'
import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import Dropdown from 'react-bootstrap/Dropdown'
import Badge from 'react-bootstrap/Badge'
import Collapse from 'react-bootstrap/Collapse'
import Card from 'react-bootstrap/Card'
import ImageLoader from '../../components/ImageLoader'
import StarRating from '../../components/StarRating'
import SocialButton from '../../components/SocialButton'
import PropertyCard from '../../components/PropertyCard'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRouter } from 'next/router'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const SinglePropertyAltPage = () => {

  const router = useRouter()
  const { id } = router.query
  console.log(id);
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    // console.log("object")
    setShowComponent(true);
  }, []);

  // Gallery component (Swiper slider with custom thumbnails and slides count)  
  const SwiperGallery = () => {
    const [thumbnails, setThumbnails ] = useState([]);
    const [thumbnailsReady, setThumbnailsReady] = useState(false);
  
  
    const getThumbnails = async (e) => {
        try {
            let response = await axios.get(`/api/property/getProperty/${id}`, {
                  headers: {
                    // Add any required headers here
                    'Content-Type': 'application/json',
                  },
                });
            const resp=response.data
            setThumbnailsReady(true);
            console.log(resp)
            setThumbnails(resp.images);
            console.log(thumbnails);
            
        }
        catch(error) {
            console.log(error);
        }
   
  }
  
  
  
    useEffect(() => {
        if(id){
        getThumbnails();
        }
        // getAmenities();
    }, [id])
    console.log("Hello")
    console.log(thumbnails)

    const [currentSlide, setCurrentSlide] = useState()
    const [totalSlides, setTotalSlides] = useState()
  
    // console.log(property)
    // const thumbnails = [
    //   '/images/real-estate/single/th09.jpg',
    //   '/images/real-estate/single/th10.jpg',
    //   '/images/real-estate/single/th11.jpg',
    //   '/images/real-estate/single/th12.jpg'
    // ] 
  
    const SlidesCount = () => (
      <div className='swiper-slides-count text-light'>
        <i className='fi-image fs-lg me-2'></i>
        <div className='fs-5 fw-bold ps-1'>
          <span>{currentSlide}</span>
          <span>/</span>
          <span>{totalSlides}</span>
        </div>
      </div>
    )
  
    return (
      <>
       {thumbnailsReady ? <Swiper
          modules={[Navigation, Pagination]}
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.realIndex + 1)
          }}
          onInit={(swiper) => {
            setCurrentSlide(swiper.realIndex + 1)
            setTotalSlides(swiper.slides.length - 2)
          }}
          pagination={{
            el: '.swiper-thumbnails',
            clickable: true,
            renderBullet: (index, className) => {
                if(thumbnailsReady){

                    console.log(index)
                    console.log(thumbnails[index])
                    
                     
                    return `<li class='swiper-thumbnail ${className}'>
                    <img src='${thumbnails[index]}' alt='Thumbnail'>
                    </li>`
                    console.log(thumbnails)
                
                }
                else{
                    console.log(thumbnailsReady)
                }
                }
          }}
          navigation
          spaceBetween={12}
          loop
          grabCursor
          className='swiper-nav-onhover rounded-3'
        >
          {thumbnails.map((thumbnail, index) =>  (
          <SwiperSlide key={index} className='d-flex'>
            <ImageLoader className='rounded-3' src={thumbnail} width={967} height={545} alt={`Image ${index + 1}`} />
          </SwiperSlide>
        ))}
          {/* <SwiperSlide>
            <div className='ratio ratio-16x9'>
              <iframe src='https://www.youtube.com/embed/dofyR9p8e7w' className='rounded-3' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </SwiperSlide> */}
          <SlidesCount />
        </Swiper>  : "" }
        <ul className='swiper-thumbnails'></ul>
  
      </>

    )
  }


  const [property, setProperty] = useState([]);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price,setPrice]= useState(0);
  const [bathroom, setBathroom] = useState(0);
  const [bedroom, setBedroom] = useState(0);
  const [parking, setParking] = useState(0);
  let [amenities, setAmenities] = useState([]);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');

    const getProperty = async (e) => {
        try {
           let response = await axios.get(`/api/property/getProperty/${id}`, {
                  headers: {
                    // Add any required headers here
                    'Content-Type': 'application/json',
                  },
                });
           
            const resp=response.data
            // console.log(resp[0].thumbnails);
            // setThumbnailsReady(true);
            
            setProperty(resp);
            setBedroom(resp.footer[0]);
            setBathroom(resp.footer[1]);
            setParking(resp.footer[2]);
            setPrice(resp.price)
            setDescription(resp.description)
            setCategory(resp.category)
            //console.log(resp.amenities)
            setAmenities(resp.amenities);
            // console.log(thumbnails);
            setAddress(resp.address);
            setCity(resp.city);
            setZipCode(resp.zipCode);
            
        }
        catch(error) {
            console.log(error);
        }
   
}
const [properties, setProperties] = useState([])
const fetchData = async () => {
        try {
            let response = await axios.get('/api/property/properties');
            if (response.data) {
              
                setProperties(response.data);
            } else {
                console.error("Error fetching data:", response.error);
            }
        } catch (error) {
            console.error("An error occurred while fetching data:", error);
        }
    };
useEffect(() => {
  getProperty();
  fetchData();

}, [id])
console.log(amenities[0]);




  // Amenities collapse state
  const [amenitiesOpen, setAmenitiesOpen] = useState(false)



  return (
    <>
     { showComponent && property && <RealEstatePageLayout
      pageTitle='Single Property'
      activeNav='Catalog'
    >

      {/* Post content */}
      <Container as='section' className='mt-5 mb-lg-5 mb-4 pt-5 pb-lg-5'>

        {/* Breadcrumb */}
        <Breadcrumb className='mb-3 pt-md-3'>
          <Breadcrumb.Item linkAs={Link} href='/'>Home</Breadcrumb.Item>
          <Breadcrumb.Item linkAs={Link} href='/catalog?category=rent'>Property for rent</Breadcrumb.Item>
          <Breadcrumb.Item active>Pine Apartments</Breadcrumb.Item>
        </Breadcrumb>

        <Row>
          <Col lg={7} className='pt-lg-2 mb-5 mb-lg-0'>
            <div className='d-flex flex-column'>

              {/* Gallery */}
              <div className='order-lg-1 order-2'>
                <SwiperGallery />
              </div>

              {/* Page title + Amenities */}
              <div className='order-lg-2 order-1 pt-lg-2'>
                <h1 className='h2 mb-2'>{property.title}</h1>
                <p className='mb-2 pb-1 fs-lg'>{property.address + ', ' + property.city + ', ' + property.zipCode}  </p>
                <ul className='d-flex mb-4 pb-lg-2 list-unstyled'>
                  <li className='me-3 pe-3 border-end'>
                    <b className='me-1'>{bedroom}</b>
                    <i className='fi-bed mt-n1 lead align-middle text-muted'></i>
                  </li>
                  <li className='me-3 pe-3 border-end'>
                    <b className='me-1'>{bathroom}</b>
                    <i className='fi-bath mt-n1 lead align-middle text-muted'></i>
                  </li>
                  <li className='me-3 pe-3 border-end'>
                    <b className='me-1'>{parking}</b>
                    <i className='fi-car mt-n1 lead align-middle text-muted'></i>
                  </li>
                  <li>
                    <b>{property.area} </b>
                    sq.m
                  </li>
                </ul>
              </div>
            </div>

            {/* Overview */}
            <h2 className='h5'>Overview</h2>
            <p className='mb-4 pb-2'>{description}</p>

            {/* Agent card */}
            {/* <h2 className='h5'>Rental agent</h2>
            <Card className='card-horizontal'>
              <div className='card-img-top bg-size-cover bg-position-center-x' style={{backgroundImage: 'url(/images/real-estate/agents/01.jpg)'}}></div>
              <Card.Body as='blockquote' className='blockquote'>
                <p>Amet libero morbi venenatis ut est. Iaculis leo ultricies nunc id ante adipiscing. Vel metus odio at faucibus ac. Neque id placerat et id ut. Enim aliquam sit in porttitor sed gravida a.</p>
                <footer className='d-flex justify-content-between'>
                  <div className='pe3'>
                    <h6 className='mb-0'>Kristin Watson</h6>
                    <div className='text-muted fw-normal fs-sm mb-3'>Imperial Property Group Agent</div>
                    <SocialButton href='#' variant='solid' brand='facebook' roundedCircle className='mb-2 me-2' />
                    <SocialButton href='#' variant='solid' brand='twitter' roundedCircle className='mb-2 me-2' />
                    <SocialButton href='#' variant='solid' brand='linkedin' roundedCircle className='mb-2' />
                  </div>
                  <div>
                    <StarRating rating='4.8' />
                    <div className='text-muted fs-sm mt-1'>24 reviews</div>
                  </div>
                </footer>
              </Card.Body>
            </Card> */}
          </Col>


          {/* Sidebar with details */}
          <Col as='aside' lg={5}>
            <div className='ps-lg-5'>
              <div className='d-flex align-items-center justify-content-between mb-3'>
                <div>
                  <Badge bg='success' className='me-2 mb-2'>Verified</Badge>
                  <Badge bg='info' className='me-2 mb-2'>New</Badge>
                </div>

                {/* Wishlist + Sharing */}
                <div className='text-nowrap'>
                  <OverlayTrigger
                    placement='top'
                    overlay={<Tooltip>Add to Wishlist</Tooltip>}
                  >
                    <Button size='xs' variant='icon btn-light-primary shadow-sm rounded-circle ms-2 mb-2'>
                      <i className='fi-heart'></i>
                    </Button>
                  </OverlayTrigger>
                  <Dropdown className='d-inline-block'>
                    <OverlayTrigger
                      placement='top'
                      overlay={<Tooltip>Share</Tooltip>}
                    >
                      <Dropdown.Toggle variant='icon btn-light-primary btn-xs shadow-sm rounded-circle ms-2 mb-2'>
                        <i className='fi-share'></i>
                      </Dropdown.Toggle>
                    </OverlayTrigger>
                    <Dropdown.Menu align='end' className='my-1'>
                      <Dropdown.Item as='button'>
                        <i className='fi-facebook fs-base opacity-75 me-2'></i>
                        Facebook
                      </Dropdown.Item>
                      <Dropdown.Item as='button'>
                        <i className='fi-twitter fs-base opacity-75 me-2'></i>
                        Twitter
                      </Dropdown.Item>
                      <Dropdown.Item as='button'>
                        <i className='fi-instagram fs-base opacity-75 me-2'></i>
                        Instagram
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>

              {/* Price */}
              <h3 className='h5 mb-2'>{ category === 'rent' ? "Monthly rent:" :"Total cost:" } </h3>
              <h2 className='h3 mb-4 pb-2'>
                ₹ {price} { category === 'rent' ?
                 <span className='d-inline-block ms-1 fs-base fw-normal text-body'>/month</span>
               : "" } 
                
              </h2>

              {/* Property details card */}
              <Card className='border-0 bg-secondary mb-4'>
                <Card.Body>
                  <h5 className='mb-0 pb-3'>Property Details</h5>
                  <ul className='list-unstyled mt-n2 mb-0'>
                    <li className='mt-2 mb-0'><b>Type: </b>apartment</li>
                    <li className='mt-2 mb-0'><b>Apartment area: </b>{property.area} sq.m</li>
                    {/* <li className='mt-2 mb-0'><b>Built: </b>2015</li> */}
                    <li className='mt-2 mb-0'><b>Bedrooms: </b>{bedroom}</li>
                    <li className='mt-2 mb-0'><b>Bathrooms: </b>{bathroom}</li>
                    <li className='mt-2 mb-0'><b>Parking places: </b>{parking}</li>
                    {/* <li className='mt-2 mb-0'><b>Pets allowed: </b>cats only</li> */}
                  </ul>
                </Card.Body>
              </Card>

              <Link href={{
                pathname: '/contacts',
                query: { id: id, title: property.title, address: property.address + ', ' + property.city + ', ' + property.zipCode }
              }}>
                
                  <Button size='lg' className='w-100 mb-3'>Book a viewing</Button>
              
              </Link>


             

              {/* Amenities card */}
              <Card className='border-0 bg-secondary mb-4'>
                <Card.Body>
                  <h5>Amenities</h5>
                  <Row as='ul' xs={1} md={2} className='list-unstyled gy-2 mb-0 text-nowrap'>
                  {amenities.length ? (amenities[0] = amenities.filter(amenity => amenity.checked===true) , amenities[0].map(({icon, value}, indx) => (
                    <Col key={indx} as='li'>
                      <i className={`${icon} mt-n1 me-2 fs-lg align-middle`}></i>
                      {value}
                    </Col>
                  ))) : (console.log("object"), null)}
                                    </Row>
                  {/* <Collapse in={amenitiesOpen}>
                    <div id='moreAmenities'>
                      <Row as='ul' md={2} xs={1} className='list-unstyled pt-2 gy-2 mb-0 text-nowrap'>
                        {amenities[1].map(({icon, title}, indx) => (
                          <Col key={indx} as='li'>
                            <i className={`${icon} mt-n1 me-2 fs-lg align-middle`}></i>
                            {title}
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </Collapse> */}
                  {/* <a
                    href='#'
                    onClick={(e) => {
                      e.preventDefault()
                      setAmenitiesOpen(!amenitiesOpen)
                    }}
                    aria-controls='moreAmenities'
                    aria-expanded={amenitiesOpen}
                    className={`collapse-label d-inline-block mt-3${amenitiesOpen ? '' : ' collapsed'}`}
                  >
                    {amenitiesOpen ? 'Show less' : 'Show more'}
                  </a> */}
                </Card.Body>
              </Card>

              {/* Not included amenities card */}
              {/* <Card className='border-0 bg-secondary mb-4'>
                <Card.Body>
                  <h5>Not included in rent</h5>
                  <Row as='ul' xs={1} md={2} className='list-unstyled gy-2 mb-0 text-nowrap'>
                    {amenities[2].map(({icon, title}, indx) => (
                      <Col key={indx} as='li'>
                        <i className={`${icon} mt-n1 me-2 fs-lg align-middle`}></i>
                        {title}
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card> */}

              {/* Post meta */}
              {/* <ul className='d-flex mb-4 list-unstyled fs-sm'>
                <li className='me-3 pe-3 border-end'>Published: <b>Dec 9, 2021</b></li>
                <li className='me-3 pe-3 border-end'>Ad number: <b>681013232</b></li>
                <li className='me-3 pe-3'>Views: <b>48</b></li>
              </ul> */}
            </div>
          </Col>
        </Row>
      </Container>


      {/* Recently viewed properties (carousel) */}
      <Container as='section' className='mb-5 pb-2 pb-lg-4'>
        <div className='d-flex align-items-center justify-content-between mb-3'>
          <h2 className='h3 mb-0'>Recently viewed</h2>
          <Button as={Link} href='/catalog?category=rent' variant='link fw-normal p-0'>
            View all
            <i className='fi-arrow-long-right ms-2'></i>
          </Button>
        </div>   

        {/* Swiper slider */}
        <div className='position-relative'>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: '#prevProperties',
              nextEl: '#nextProperties'
            }}
            pagination={{
              el: '#paginationProperties',
              clickable: true
            }}
            loop
            spaceBetween={8}
            breakpoints={{
              0: { slidesPerView: 1 },
              500: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 }
            }}
            className='pt-3 pb-4 mx-n2'
          >
            {properties.map((property, indx) => indx<5 && (
              <SwiperSlide key={indx} className='h-auto'>
                <PropertyCard
                  href={`/single/${property._id}`}
                  images={[[property.images[0], 467, 305,'Image']]}
                  title={property.title}
                  category={property.category}
                  location={property.location}
                  price={property.price}
                  badges={property.badges}
                  wishlistButton={{
                    tooltip: 'Add to Wishlist',
                    props: {
                      onClick: () => console.log('Property added to your Wishlist!')
                    }
                  }}
                  footer={[
                    ['fi-bed', property.footer[0]],
                    ['fi-bath', property.footer[1]],
                    ['fi-car', property.footer[2]]
                  ]}
                  className='h-100 mx-2'
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* External Prev/Next buttons */}
          <Button id='prevProperties' variant='prev' className='d-none d-xxl-block mt-n5 ms-n5' />
          <Button id='nextProperties' variant='next' className='d-none d-xxl-block mt-n5 me-n5' />
        </div>

        {/* External pagination (bullets) buttons */}
        <div id='paginationProperties' className='swiper-pagination position-relative bottom-0 py-2 mt-1'></div>
      </Container>
    </RealEstatePageLayout>
    }
    </>
  )
  }


export default SinglePropertyAltPage
