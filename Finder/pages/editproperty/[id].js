import { useState, useEffect } from 'react'
import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
import dynamic from 'next/dynamic'
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
import ImageLoader from '../../components/ImageLoader'
import ScrollLink from '../../components/ScrollLink'
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'
import axios from 'axios';
import { useRouter } from 'next/router'
import NumberFormat from 'react-number-format'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import { API } from '../service/api'

const MapContainer = dynamic(() => 
  import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(() => 
  import('react-leaflet').then(mod => mod.TileLayer),
  { ssr: false }
)
const Popup = dynamic(() => 
  import('react-leaflet').then(mod => mod.Popup),
  { ssr: false }
)
const CustomMarker = dynamic(() => 
  import('../../components/partials/CustomMarker'),
  { ssr: false }
)
import 'leaflet/dist/leaflet.css'


const AddPropertyPage = () => {

    const router = useRouter()
    const { id } = router.query
    console.log(id);

  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    // console.log("object")
    setShowComponent(true);
  }, []);

  // Preview modal
  const [previewShow, setPreviewShow] = useState(false)
  const handlePreviewClose = () => setPreviewShow(false)
 

  // Overview collapse state
  const [overviewOpen, setOverviewOpen] = useState(false)

  // Amenities collapse state
  const [amenitiesOpen, setAmenitiesOpen] = useState(false)

  // Amenities array
  const amenitiesPreview = [
    [
      { icon: 'fi-wifi', title: 'Free WiFi' },
      { icon: 'fi-thermometer', title: 'Heating' },
      { icon: 'fi-dish', title: 'Dishwasher' },
      { icon: 'fi-parking', title: 'Parking place' },
      { icon: 'fi-snowflake', title: 'Air conditioning' },
      { icon: 'fi-iron', title: 'Iron' },
      { icon: 'fi-tv', title: 'TV' },
      { icon: 'fi-laundry', title: 'Laundry' },
      { icon: 'fi-cctv', title: 'Security cameras' }
    ],
    [
      { icon: 'fi-no-smoke', title: 'No smocking' },
      { icon: 'fi-pet', title: 'Cats' },
      { icon: 'fi-swimming-pool', title: 'Swimming pool' },
      { icon: 'fi-double-bed', title: 'Double bed' },
      { icon: 'fi-bed', title: 'Single bed' }
    ]
  ]

  // Anchor lnks
  const anchors = [
    {to: 'basic-info', label: 'Basic info', completed: true},
    {to: 'location', label: 'Location', completed: true},
    {to: 'details', label: 'Property details', completed: true},
    {to: 'price', label: 'Price range', completed: false},
    {to: 'photos', label: 'Photos / video', completed: false},
    {to: 'contacts', label: 'Contacts', completed: true}
  ]

  // Number of bedrooms radios buttons
  const [bedroomsValue, setBedroomsValue] = useState('1')
  const bedrooms = [
    {name: 'Studio', value: 'studio'},
    {name: '1', value: '1'},
    {name: '2', value: '2'},
    {name: '3', value: '3'},
    {name: '4', value: '4'},
    {name: '5+', value: '5+'}
  ]

  // Number of bathrooms radios buttons
  const [bathroomsValue, setBathroomsValue] = useState('2')
  const bathrooms = [
    {name: '1', value: '1'},
    {name: '2', value: '2'},
    {name: '3', value: '3'},
    {name: '4', value: '4'}
  ]

  // Number of bathrooms radios buttons
  const [parkingsValue, setParkingsValue] = useState('3')
  const parkings = [
    {name: '1', value: '1'},
    {name: '2', value: '2'},
    {name: '3', value: '3'},
    {name: '4', value: '4'}
  ]

  // Amenities (checkboxes)
  let [amenities, setAmenities] = useState([
    {value: 'WiFi', checked: false, icon: 'fi-wifi'},
    {value: 'Pets-friendly', checked: false, icon: 'fi-pet'},
    {value: 'Dishwasher', checked: false, icon: 'fi-dish'},
    {value: 'Air conditioning', checked: false, icon: 'fi-snowflake'},
    {value: 'Pool', checked: false, icon: 'fi-swimming-pool'},
    {value: 'Iron', checked: false, icon: 'fi-iron'},
    {value: 'Balcony', checked: false, icon: 'fi-house-chosen'},
    {value: 'Bar', checked: false, icon: 'fi-cocktail'},
    {value: 'Garage', checked: false, icon:'fi-car'},
    {value: 'Laundry', checked: false, icon:'fi-laundry'},
    {value: 'TV', checked: false, icon:'fi-tv'},
    {value: 'Gym', checked: false, icon:'fi-dumbell'},
    {value: 'Free parking', checked: false, icon:'fi-parking'},
    {value: 'Heater', checked: false, icon: 'fi-thermometer'},
    {value: 'Security cameras', checked: false, icon:'fi-cctv'},
    {value: 'Single-bed', checked: false, icon:'fi-bed'},
    {value: 'Double-bed', checked: false, icon:'fi-double-bed'},
    {value: 'Spa-Lounge', checked: false, icon:'fi-spa'},
    {value: 'Restaurant', checked: false, icon:'fi-cafe'}
  ]);

  // Pets (checkboxes)
  const pets = [
    {value: 'Cats allowed', checked: false},
    {value: 'Dogs allowed', checked: false}
  ]

  // Register Filepond plugins
  registerPlugin(
    FilePondPluginFileValidateType,
    FilePondPluginFileValidateSize,
    FilePondPluginImagePreview,
    FilePondPluginImageCrop,
    FilePondPluginImageResize,
    FilePondPluginImageTransform
  )
  
  // Gallery state
  const [gallery, setGallery] = useState([])

  const [title, setTitle] = useState('');

  const handleInputChange = (e) => {
    const title = e.target.value;
    // setCredentials(prevState => ({
    //     ...prevState,
    //     [name]: value
    // }));
    // setTitle(prev => ({
    //   ...prev, title
    // }));
    setTitle(title);
    console.log(title);
  }

  const [category, setCategory] = useState('');

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setCategory(category);
    console.log(category);
  }

  const [propertyType, setPropertyType] = useState('');

  const handlePropertyTypeChange = (e) => {
    const propertyType = e.target.value;
    setPropertyType(propertyType);
    console.log(propertyType);
  }

  const [country, setCountry] = useState('US');

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setCountry(country);
    console.log(country);
  }

  const [city, setCity] = useState('');

  const handleCityChange = (e) => {
    const city = e.target.value;
    setCity(city);
    console.log(city);
  }

  const [zipCode, setZipCode] = useState('');

  const handleZipCodeChange = (e) => {
    const zip = e.target.value;
    setZipCode(zip);
    console.log(zip);
  }

  const [address, setAddress] = useState('');

  const handleAddressChange = (e) => {
    const address = e.target.value;
    setAddress(address);
    console.log(address);
  }



  const [area, setArea] = useState('');

  const handleAreaChange = (e) => {
      const area = e.target.value;
      setArea(area);
    console.log(area);
}

const [description, setDescription] = useState('');

const handleDescriptionChange = (e) => {
    const description = e.target.value;
    setDescription(description);
    console.log(description);
  }

  const [price, setPrice] = useState(0);
  const [data, setData] = useState({});
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    amenities = amenities.filter(amenity => amenity.checked === true);
    let footer = [];
    footer.push(bedroomsValue, bathroomsValue, parkingsValue);

    let amenitiesValue = [];
    for (let amenity of amenities) {
      amenitiesValue.push(amenity.value);
    }
    
    const headers = {
        "Content-Type": "application/json",
        // Authorization: apiKey,
    };
    setData({
      _id:id,
      amenities: amenitiesValue,
      href: '/real-estate/single-v2',
      title: title,
      area: parseInt(area),
      category: category,
      // type: propertyType,
      // address: address,
      // city: city,
      // zipCode: zipCode,
      price: parseInt(price),
      description: description,
      footer: footer
    })
    console.log('hello')
    console.log(data);
    try{
      await API.updatePost(data)
      router.push('../account-properties')
    }
    catch(error){
      console.error("An error occurred while fetching data:", error);
    }
    
    
    
} 

const [previewAmenities, setPreviewAmenities] = useState([]);

const handlePreviewShow = () => {
    setPreviewShow(true)
    amenities = amenities[0].filter(amenity => amenity.checked === true);
    console.log(amenities)
    let amenitiesValue = [];
    for (let amenity of amenities) {
        amenitiesValue.push(amenity);
    }
    setPreviewAmenities(amenitiesValue);
} 


  // const loadProperties = async () => {
  //   try {
  //       let response = await axios.get("http://localhost:8000/properties");
  //       // console.log(response.json())
  //       console.log(response)
  //       let resp = await response.data;
  //       resp = resp.filter(res =>{
  //           console.log(res._id === id);
  //          return res._id === id
  //       } 
  //       )
  //       console.log(resp);
  //       console.log(resp.title)
  //       // console.log(resp[0].thumbnails);
  //       // setThumbnailsReady(true);
        
  //       // setProperty(resp[0]);
  //       setTitle(resp[0].title)
  //       setArea(resp[0].area);
  //       setAddress(resp[0].address);
  //       setCategory(resp[0].category.substring(4));
  //       setCity(resp[0].city);
  //       setZipCode(resp[0].zipCode);
  //       setAmenities(resp[0].amenities);
  //       // // setCity(resp[0].city);
  //       setPrice(resp[0].price);
  //       setBedroomsValue( resp[0].footer[0].toString());
  //       setBathroomsValue(resp[0].footer[1].toString());
  //       setParkingsValue(resp[0].footer[2].toString());
  //       // console.log(thumbnails);
  //       console.log("JSON RESPONSE:::::", response.status)
  //   }
  //   catch(error) {
  //       console.log(error);
  //   }
  // }


  const [property,setProperty]= useState({})
 useEffect(() => {
            const fetchData = async () => {
                let response = await API.getPropertyById(id);
                console.log(response)
                
                if (response.isSuccess) {
                    const resp=response.data
                    

                    
                    setProperty(resp.data);
                    
                    setTitle(resp.title)
                    setArea(resp.area);
                    setAddress(resp.address);
                    setCategory(resp.category.substring(4));
                    setCity(resp.city);
                    setZipCode(resp.zipCode);
                    setAmenities(resp.amenities);
                    // // setCity(resp[0].city);
                    setPrice(resp.price);
                    setBedroomsValue( resp.footer[0].toString());
                    setBathroomsValue(resp.footer[1].toString());
                    setParkingsValue(resp.footer[2].toString());
                    console.log(title)
                }
            }
            fetchData();
            
        }, []);

  
  const getCategory = () => {
      console.log(category)
      return category;
    }


  return (
    <>
     { showComponent && <RealEstatePageLayout
      pageTitle='Add Property'
      activeNav='Vendor'
      userLoggedIn
    >
      {/* Preview modal */}
      <Modal
        fullscreen
        show={previewShow}
        onHide={handlePreviewClose}
      >
        <Modal.Header closeButton>
          <h3 className='h5 text-muted fw-normal modal-title d-none d-sm-block text-nowrap'>Property preview</h3>
          <div className='d-flex align-items-center justify-content-sm-end w-100 ms-sm-auto'>
            <Button as={Link} href='/real-estate/property-promotion' size='sm' className='me-4'>Save and continue</Button>
            <span className='fs-xs text-muted ms-auto ms-sm-0 me-2'>[ESC]</span>
          </div>
        </Modal.Header>
        <Modal.Body className='p-0'>
          <Container className='mt-2 mt-sm-0 py-4 py-sm-5'>

            {/* Title */}
            <h1 className='h2 mb-2'>{title}</h1>
            <p className='mb-2 pb-1 fs-lg'>{address + ', ' + city + ' ' + zipCode}</p>
            <ul className='d-flex mb-4 list-unstyled'>
              <li className='me-3 pe-3 border-end'>
                <b className='me-1'>{bathroomsValue}</b>
                <i className='fi-bed mt-n1 lead align-middle text-muted'></i>
              </li>
              <li className='me-3 pe-3 border-end'>
                <b className='me-1'>{bedroomsValue}</b>
                <i className='fi-bath mt-n1 lead align-middle text-muted'></i>
              </li>
              <li className='me-3 pe-3 border-end'>
                <b className='me-1'>{parkingsValue}</b>
                <i className='fi-car mt-n1 lead align-middle text-muted'></i>
              </li>
              <li>
                <b>{area} </b>
                sq.m
              </li>
            </ul>

            {/* Gallery preview */}
           <div className='overflow-auto pb-3 px-2 mx-n2 mb-4'>
              <Row className='row g-2 g-md-3' style={{minWidth: '30rem'}}>
                <Col xs={8} className='d-flex'>
                  <ImageLoader
                    src={gallery?gallery[0]:'/images/real-estate/single/01.jpg'}
                    width={859}
                    height={606}
                    alt='Gallery thumbnail'
                    className='rounded rounded-md-3'
                  />
                </Col>
                <Col xs={4}>
                  <div className='d-flex mb-2 mb-md-3'>
                    <ImageLoader
                      src={gallery?gallery[1]:'/images/real-estate/single/01.jpg'}
                      width={421}
                      height={296}
                      alt='Gallery thumbnail'
                      className='rounded rounded-md-3'
                    />
                  </div>
                  <div className='d-flex'>
                    <ImageLoader
                      src={gallery?gallery[2]:'/images/real-estate/single/01.jpg'}
                      width={421}
                      height={296}
                      alt='Gallery thumbnail'
                      className='rounded rounded-md-3'
                    />
                  </div>
                </Col>
              </Row>
            </div>
            <Row>

              {/* Content */}
              <Col md={7} className='mb-md-0 mb-4'>
                <Badge bg='success' className='me-2 mb-3'>Verified</Badge>
                <Badge bg='info' className='me-2 mb-3'>New</Badge>

                {/* Price */}
                <h2 className='h3 mb-4 pb-4 border-bottom'>
                  {'$' + price}
                  <span className='d-inline-block ms-1 fs-base fw-normal text-body'>/month</span>
                </h2>

                {/* Overview */}
                <div className='mb-4 pb-md-3'>
                  <h3 className='h4'>Overview</h3>
                  <p className='mb-1'>Lorem tincidunt lectus vitae id vulputate diam quam. Imperdiet non scelerisque turpis sed etiam ultrices. Blandit mollis dignissim egestas consectetur porttitor. Vulputate dolor pretium, dignissim eu augue sit ut convallis. Lectus est, magna urna feugiat sed ultricies sed in lacinia. Fusce potenti sit id pharetra vel ornare. Vestibulum sed tellus ullamcorper arcu.</p>
                  <Collapse in={overviewOpen}>
                    <div id='moreOverview'>
                      <p className='mb-1'>Asperiores eos molestias, aspernatur assumenda vel corporis ex, magni excepturi totam exercitationem quia inventore quod amet labore impedit quae distinctio? Officiis blanditiis consequatur alias, atque, sed est incidunt accusamus repudiandae tempora repellendus obcaecati delectus ducimus inventore tempore harum numquam autem eligendi culpa.</p>
                    </div>
                  </Collapse>
                  <a
                    href='#'
                    onClick={(e) => {
                      e.preventDefault()
                      setOverviewOpen(!overviewOpen)
                    }}
                    aria-controls='moreOverview'
                    aria-expanded={overviewOpen}
                    className={`collapse-label${overviewOpen ? '' : ' collapsed'}`}
                  >
                    {overviewOpen ? 'Show less' : 'Show more'}
                  </a>
                </div>

                {/* Property details list */}
                <div className='mb-4 pb-md-3'>
                  <h3 className='h4'>Property Details</h3>
                  <ul className='list-unstyled mb-0'>
                    <li><b>Type: </b>apartment</li>
                    <li><b>Apartment area: </b>{area} sq.m</li>
                    {/* <li><b>Built: </b>2015</li> */}
                    <li><b>Bedrooms: </b>{bedroomsValue}</li>
                    <li><b>Bathrooms: </b>{bathroomsValue}</li>
                    <li><b>Parking places: </b>{parkingsValue}</li>
                    {/* <li><b>Pets allowed: </b>cats only</li> */}
                  </ul>
                </div>

                {/* Amenities */}
                <div className='mb-sm-3'>
                  <h3 className='h4'>Amenities</h3>
                  <Row as='ul' xs={1} md={2} lg={3} className='list-unstyled gy-1 mb-1 text-nowrap'>
                    {console.log(previewAmenities)}
                    {previewAmenities.map(({icon, value}, indx) => (
                      <Col key={indx} as='li'>
                        <i className={`${icon} mt-n1 me-2 fs-lg align-middle`}></i>
                        {value}
                      </Col>
                    ))}
                  </Row>
                  {/* <Collapse in={amenitiesOpen}>
                    <div id='moreAmenities'>
                      <Row as='ul' xs={1} md={2} lg={3} className='list-unstyled gy-1 mb-1 text-nowrap'>
                        {amenitiesPreview[1].map(({icon, title}, indx) => (
                          <Col key={indx} as='li'>
                            <i className={`${icon} mt-n1 me-2 fs-lg align-middle`}></i>
                            {title}
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </Collapse>
                  <a
                    href='#'
                    onClick={(e) => {
                      e.preventDefault()
                      setAmenitiesOpen(!amenitiesOpen)
                    }}
                    aria-controls='moreAmenities'
                    aria-expanded={amenitiesOpen}
                    className={`collapse-label${amenitiesOpen ? '' : ' collapsed'}`}
                  >
                    {amenitiesOpen ? 'Show less' : 'Show more'}
                  </a> */}
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>

      
      {/* Page container */}
      <Container className='mt-5 mb-md-4 py-5'>
        <Row>

          {/* Page content */}
          {/* <Col lg={8}> */}

            {/* Breadcrumb */}
            <Breadcrumb className='mb-3 pt-md-3'>
              <Breadcrumb.Item linkAs={Link} href='/'>Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Edit Property</Breadcrumb.Item>
            </Breadcrumb>

            {/* Title */}
            {/* <div className='mb-4'>
              <h1 className='h2 mb-0'>Add property</h1>
              <div className='d-lg-none pt-3 mb-2'>65% content filled</div>
              <ProgressBar variant='warning' now={65} style={{height: '.25rem'}} className='d-lg-none mb-4' />
            </div> */}


            {/* Basic info */}
            <section id='basic-info' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-info-circle text-primary fs-5 mt-n1 me-2'></i>
                Basic info
              </h2>
              <Form.Group controlId='ap-title' className='mb-3'>
                <Form.Label>Title <span className='text-danger'>*</span></Form.Label>
                <Form.Control  defaultValue={title} onChange={handleInputChange} placeholder='Title of your property' required></Form.Control>
                <Form.Text>48 characters left</Form.Text>
              </Form.Group>
              <Row>
                <Form.Group as={Col} md={6} controlId='ab-category' className='mb-3'>
                  <Form.Label>Category <span className='text-danger'>*</span></Form.Label>
                  <Form.Select value = {getCategory()} onChange={handleCategoryChange} required>
                    <option value='' disabled>Choose category</option>
                    <option value='rent'>For rent</option>
                    <option value='sale'>For sale</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md={6} controlId='ab-property-type' className='mb-3'>
                  <Form.Label>Property type <span className='text-danger'>*</span></Form.Label>
                  <Form.Select defaultValue='rent' onChange={handlePropertyTypeChange} required>
                    <option value='' disabled>Choose property type</option>
                    <option value='Apartment'>Apartment</option>
                    <option value='House'>House</option>
                    <option value='Commercial'>Commercial</option>
                    <option value='Daily'>Daily rental</option>
                    <option value='New Building'>New building</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <div className='form-label fw-bold pt-3 pb-2'>Are you listing on Finder as part of a company?</div>
              <Form.Check
                type='radio'
                name='businessType'
                id='business'
                value='Business'
                label='I am a registered business'
              />
              <Form.Check
                type='radio'
                name='businessType'
                id='private'
                value='Private seller'
                label='I am a private seller'
                defaultChecked
              />
            </section>


            {/* Location */}
           


            {/* Property details */}
            <section id='details' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-edit text-primary fs-5 mt-n1 me-2'></i>
                Property details
              </h2>
              <Form.Group controlId='ap-area' className='mb-4' style={{maxWidth: '25rem'}}>
                <Form.Label>Total area, sq.m</Form.Label>
                <Form.Control type='number' defaultValue={area} min={20} onChange={handleAreaChange} placeholder='Enter your area' />
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
                    console.log(bathroomsValue),
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
                  {console.log(amenities[0])}
                  {console.log(Array.isArray(amenities[0]))}
                  {Array.isArray(amenities[0]) && amenities[0].map((amenity, indx) => (
                    <Col key={indx}>
                      <Form.Check
                        type='checkbox'
                        id={`amenities-${indx}`}
                        value={amenity.value}
                        label={amenity.value}
                        onChange={() => amenity.checked = !amenity.checked }
                        defaultChecked={amenity.checked}
                      />
                    </Col>
                  ))}
                </Row>
              </Form.Group>
              {/* <Form.Group className='mb-4'>
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
              </Form.Group> */}
              <Form.Group controlId='ap-description'>
                <Form.Label>Description</Form.Label>
                <Form.Control as='textarea' rows={5} placeholder='Describe your property' value = {description} onChange={handleDescriptionChange}/>
                <Form.Text>1500 characters left</Form.Text>
              </Form.Group>
            </section>


            {/* Price */}
            <section id='price' className='card card-body border-0 shadow-sm p-4 mb-4'>
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
                  defaultValue={price}
                  onChange={(e) => setPrice(e.currentTarget.value)}
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
            </section>


            {/* Photos / video */}
            <section id='photos' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-image text-primary fs-5 mt-n1 me-2'></i>
                Photos / video
              </h2>
              <Alert variant='info' className='d-flex mb-4'>
                <i className='fi-alert-circle me-2 me-sm-3'></i>
                <p className='fs-sm mb-1'>The maximum photo size is 8 MB. Formats: jpeg, jpg, png. Put the main picture first.<br />
                The maximum video size is 10 MB. Formats: mp4, mov.</p>
              </Alert>
              <FilePond
                files={gallery}
                onupdatefiles={setGallery}
                // server='/api' {/* Configure your server here. See plugin docs */}
                name='gallery'
                labelIdle='<div class="btn btn-primary mb-3"><i class="fi-cloud-upload me-1"></i>Upload photos / video</div><div>or drag them in</div>'
                acceptedFileTypes={['image/png', 'image/jpeg', 'video/mp4', 'video/mov']}
                allowMultiple={true}
                maxFiles={4}
                maxFileSize='2MB'
                className='file-uploader file-uploader-grid'
              />
            </section>

            
            {/* Contacts */}
            <section id='contacts' className='card card-body border-0 shadow-sm p-4 mb-4'>
              <h2 className='h4 mb-4'>
                <i className='fi-phone text-primary fs-5 mt-n1 me-2'></i>
                Contacts
              </h2>
              <Row>
                <Form.Group as={Col} sm={6} controlId='ab-fn' className='mb-3'>
                  <Form.Label>First name <span className='text-danger'>*</span></Form.Label>
                  <Form.Control defaultValue='Annette' placeholder='Enter your first name' required />
                </Form.Group>
                <Form.Group as={Col} sm={6} controlId='ab-sn' className='mb-3'>
                  <Form.Label>Second name <span className='text-danger'>*</span></Form.Label>
                  <Form.Control defaultValue='Black' placeholder='Enter your second name' required />
                </Form.Group>
                <Form.Group as={Col} sm={6} controlId='ab-email' className='mb-3'>
                  <Form.Label>Email <span className='text-danger'>*</span></Form.Label>
                  <Form.Control type='email' defaultValue='annette_black@email.com' placeholder='Enter your email address' required />
                </Form.Group>
                <Form.Group as={Col} sm={6} controlId='ab-phone' className='mb-3'>
                  <Form.Label>Phone number <span className='text-danger'>*</span></Form.Label>
                  <Form.Control
                    as={NumberFormat}
                    format='+1(##) ###-####'
                    defaultValue='+1(39) 555-0107'
                    placeholder='+1(00) 000-0000'
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} xs={12} controlId='ab-company' className='mb-3'>
                  <Form.Label>Company</Form.Label>
                  <Form.Control placeholder='Enter company name' />
                </Form.Group>
              </Row>
            </section>


            {/* Action buttons */}
            <section className='d-sm-flex justify-content-between pt-2'>
              <Button size='lg' variant='outline-primary d-block w-100 w-sm-auto mb-3 mb-sm-2' onClick={handlePreviewShow}>
                <i className='fi-eye-on ms-n1 me-2'></i>
                Preview
              </Button>
              <Link href='/real-estate/property-promotion' passHref>
                <Button size='lg' variant='primary d-block w-100 w-sm-auto mb-2' onClick={handleSubmit}>Save and continue</Button>
              </Link>
            </section>
          {/* </Col> */}


          {/* Sidebar (Progress of completion)
          <Col lg={{span: 3, offset: 1}} className='d-none d-lg-block'>
            <div className='sticky-top pt-5'>
              <h6 className='pt-5 mt-3 mb-2'>65% content filled</h6>
              <ProgressBar variant='warning' now={65} style={{height: '.25rem'}} className='mb-4' />
              <ul className='list-unstyled'>
                {anchors.map((anchor, indx) => (
                  <li key={indx} className='d-flex align-items-center'>
                    <i className={`fi-check text-${anchor.completed ? 'primary' : 'muted'} me-2`}></i>
                    <ScrollLink to={anchor.to} smooth='easeInOutQuart' duration={600} offset={-95} className='nav-link fw-normal ps-1 p-0'>
                      {anchor.label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </div>
          </Col> */}
        </Row>
      </Container>
    </RealEstatePageLayout> }
  </>
  )
}

export default AddPropertyPage