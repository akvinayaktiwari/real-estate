import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import RealEstatePageLayout from '../../components/partials/RealEstatePageLayout'
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
import ImageLoader from '../../components/ImageLoader'
import PropertyCard from '../../components/PropertyCard'
import SimpleBar from 'simplebar-react'
import ReactSlider from 'react-slider'
import 'simplebar/dist/simplebar.min.css'

const MapContainer = dynamic(() => 
  import('react-leaflet').then(mod => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(() => 
  import('react-leaflet').then(mod => mod.TileLayer),
  { ssr: false }
)
const CustomMarker = dynamic(() => 
  import('../../components/partials/CustomMarker'),
  { ssr: false }
)
const Popup = dynamic(() => 
  import('react-leaflet').then(mod => mod.Popup),
  { ssr: false }
)
import 'leaflet/dist/leaflet.css'




const PropertyList = () => {
    const properties = [
    {
      href: '/real-estate/single-v1',
      images: [
        ['/images/real-estate/catalog/06.jpg', 504, 230, 'Image'],
        ['/images/real-estate/catalog/06.jpg', 504, 230, 'Image']
      ],
      title: '3-bed Apartment | 67 sq.m',
      location: '3811 Ditmars Blvd Astoria, NY 11105',
      price: '$1,650',
      badges: [['success', 'Verified'], ['info', 'New']],
      amenities: [3, 2, 1]
    },
    {
      href: '/real-estate/single-v1',
      images: [
        ['/images/real-estate/catalog/07.jpg', 504, 230, 'Image'],
        ['/images/real-estate/catalog/07.jpg', 504, 230, 'Image']
      ],
      title: 'Pine Apartments | 56 sq.m',
      location: '7865 Ditmars Blvd Astoria, NY 11105',
      price: '$2,000',
      badges: [['info', 'New']],
      amenities: [4, 2, 2]
    },
    {
      href: '/real-estate/single-v1',
      images: [
        ['/images/real-estate/catalog/08.jpg', 504, 230, 'Image'],
        ['/images/real-estate/catalog/08.jpg', 504, 230, 'Image']
      ],
      title: 'Greenpoint Rentals | 85 sq.m',
      location: '1510 Castle Hill Ave Bronx, NY 10462',
      price: '$1,350',
      badges: [['info', 'New']],
      amenities: [2, 1, 0]
    },
    {
      href: '/real-estate/single-v1',
      images: [
        ['/images/real-estate/catalog/09.jpg', 504, 230, 'Image'],
        ['/images/real-estate/catalog/09.jpg', 504, 230, 'Image']
      ],
      title: 'Terra Nova Apartments | 85 sq.m',
      location: '21 India St Brooklyn, NY 11222',
      price: '$2,400',
      badges: [['success', 'Verified']],
      amenities: [5, 2, 2]
    },
    {
      href: '/real-estate/single-v1',
      images: [
        ['/images/real-estate/catalog/10.jpg', 504, 230, 'Image'],
        ['/images/real-estate/catalog/10.jpg', 504, 230, 'Image']
      ],
      title: 'O’Farrell Rooms | 40 sq.m',
      location: '460 E Fordham Rd Bronx, NY 10458',
      price: 'From $550',
      badges: [['success', 'Verified'], ['danger', 'Featured']],
      amenities: [2, 1, 0]
    },
    {
      href: '/real-estate/single-v1',
      images: [
        ['/images/real-estate/catalog/11.jpg', 504, 230, 'Image'],
        ['/images/real-estate/catalog/11.jpg', 504, 230, 'Image']
      ],
      title: 'Studio | 32 sq.m',
      location: '140-60 Beech Ave Flushing, NY 11355',
      price: '$680',
      badges: [['info', 'New']],
      amenities: [1, 1, 1]
    },
    {
      href: '/real-estate/single-v1',
      images: [
        ['/images/real-estate/catalog/12.jpg', 504, 230, 'Image'],
        ['/images/real-estate/catalog/12.jpg', 504, 230, 'Image']
      ],
      title: 'Mason House | 150 sq.m',
      location: '557 Grand Concourse Bronx, NY 10451',
      price: 'From $4,000',
      badges: [['danger', 'Featured']],
      amenities: [3, 2, 2]
    },
    {
      href: '/real-estate/single-v1',
      images: [
        ['/images/real-estate/catalog/13.jpg', 504, 230, 'Image'],
        ['/images/real-estate/catalog/13.jpg', 504, 230, 'Image']
      ],
      title: 'Office | 320 sq.m',
      location: '159 20th Street Brooklyn, NY 11232',
      price: '$8,000',
      badges: [['success', 'Verified']],
      amenities: [2, 1, 8]
    },
    {
      href: '/real-estate/single-v1',
      images: [
        ['/images/real-estate/catalog/14.jpg', 504, 230, 'Image'],
        ['/images/real-estate/catalog/14.jpg', 504, 230, 'Image']
      ],
      title: 'Lakewood Rentals | 90 sq.m',
      location: '5 Brewster Street Glen Cove, NY 11542',
      price: '$1,200',
      badges: [],
      amenities: [2, 1, 0]
    },
    {
      href: '/real-estate/single-v1',
      images: [
        ['/images/real-estate/catalog/15.jpg', 504, 230, 'Image'],
        ['/images/real-estate/catalog/15.jpg', 504, 230, 'Image']
      ],
      title: 'Crystal Apartment| 60 sq.m',
      location: '495 Henry St Brooklyn, NY 11231',
      price: '$1,350',
      badges: [],
      amenities: [2, 1, 1]
    },
    {
      href: '/real-estate/single-v1',
      images: [
        ['/images/real-estate/catalog/16.jpg', 504, 230, 'Image'],
        ['/images/real-estate/catalog/16.jpg', 504, 230, 'Image']
      ],
      title: 'Family Home | 120 sq.m',
      location: '67-04 Myrtle Ave Glendale, NY 11385',
      price: 'From $4,500',
      badges: [['danger', 'Featured']],
      amenities: [4, 2, 2]
    },
    {
      href: '/real-estate/single-v1',
      images: [
        ['/images/real-estate/catalog/17.jpg', 504, 230, 'Image'],
        ['/images/real-estate/catalog/17.jpg', 504, 230, 'Image']
      ],
      title: 'Tiffany Studio | 35 sq.m',
      location: '3979 Albany Post Road Hyde Park, NY 12538',
      price: '$700',
      badges: [],
      amenities: [1, 1, 1]
    }
  ]

  const [categoryParam, setCategoryParam] = useState('all');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [minBedrooms, setMinBedrooms] = useState(0);
  const [minBathrooms, setMinBathrooms] = useState(0);

  // Initialize filteredProperties with all properties
  const [filteredProperties, setFilteredProperties] = useState(properties);

  useEffect(() => {
    // Filter properties based on the selected filters
    const filtered = properties.filter(property => {
      const meetsCategory = categoryParam === 'all' || property.category === categoryParam;
      const meetsPriceRange = property.price >= minPrice && property.price <= maxPrice;
      const meetsBedrooms = property.amenities[0] >= minBedrooms;
      const meetsBathrooms = property.amenities[1] >= minBathrooms;

      return meetsCategory && meetsPriceRange && meetsBedrooms && meetsBathrooms;
    });

    setFilteredProperties(filtered);
  }, [categoryParam, minPrice, maxPrice, minBedrooms, minBathrooms, properties]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'category':
        setCategoryParam(value);
        break;
      case 'minPrice':
        setMinPrice(value);
        break;
      case 'maxPrice':
        setMaxPrice(value);
        break;
      case 'minBedrooms':
        setMinBedrooms(value);
        break;
      case 'minBathrooms':
        setMinBathrooms(value);
        break;
      default:
        break;
    }
  };

  const handleSliderChange = (sliderVal) => {
    const sliderMinVal = sliderVal[0];
    const sliderMaxVal = sliderVal[1];
    setMinPrice(sliderMinVal);
    setMaxPrice(sliderMaxVal);
  };

  return (
    <div>
      {/* Filters */}
      <div>
        {/* Category filter */}
        <Form.Select name="category" value={categoryParam} onChange={handleInputChange}>
          <option value="all">All Categories</option>
          <option value="sale">For Sale</option>
          {/* Add more categories as needed */}
        </Form.Select>

        {/* Price range filter */}
        <ReactSlider
          className='range-slider'
          thumbClassName='range-slider-handle'
          trackClassName='range-slider-track'
          min={0}
          max={5000}
          value={[minPrice, maxPrice]}
          onChange={handleSliderChange}
        />

        {/* Bedrooms filter */}
        <InputGroup>
          <Form.Control
            type="number"
            name="minBedrooms"
            value={minBedrooms}
            onChange={handleInputChange}
          />
          <InputGroup.Text> Bedrooms</InputGroup.Text>
        </InputGroup>

        {/* Bathrooms filter */}
        <InputGroup>
          <Form.Control
            type="number"
            name="minBathrooms"
            value={minBathrooms}
            onChange={handleInputChange}
          />
          <InputGroup.Text> Bathrooms</InputGroup.Text>
        </InputGroup>
      </div>

      {/* Display filtered properties */}
      <div>
        {filteredProperties.map((property, index) => (
          <div key={index}>
            {/* Display property details */}
            <p>{property.title}</p>
            <p>Price: {property.price}</p>
            <p>Bedrooms: {property.amenities[0]}</p>
            <p>Bathrooms: {property.amenities[1]}</p>
            {/* Add more property details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;






