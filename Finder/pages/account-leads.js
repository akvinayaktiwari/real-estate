import RealEstatePageLayout from '../components/partials/RealEstatePageLayout'
import RealEstateAccountLayout from '../components/partials/RealEstateAccountLayout'
import Tab from 'react-bootstrap/Tab'
import Fade from 'react-bootstrap/Fade'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import { API } from '../service/api'
import { useState, useEffect } from 'react'

const AccountReviewsPage = () => {

  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await API.getAllLeads();
            console.log(response)
            if (response.isSuccess) {
                setLeads(response.data);
            } else {
                console.error("Error fetching data:", response.error);
            }
        } catch (error) {
            console.error("An error occurred while fetching data:", error);
        }
    };

    fetchData();
  }, []);


  return (
    <RealEstatePageLayout
      pageTitle='Account Leads'
      activeNav='Account'
      userLoggedIn
    >
      <RealEstateAccountLayout accountPageTitle='Leads'>
      <h1 className='h2'>Leads</h1>
        <p className='pt-1 mb-4'>Leads you&apos;ve received will be visible here.</p>
        <Tab.Container defaultActiveKey='leads' transition={Fade}>

          {/* Nav tabs */}
          <Nav variant='tabs' className='flex-column flex-sm-row align-items-stretch align-items-sm-start border-bottom mb-4'>
            
            <Nav.Item className='mb-3'>
              <Nav.Link eventKey='leads'>Leads Generated</Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Tabs content (panes) */}
          <Tab.Content>

           


            {/* Reviews by you tab */}
            <Tab.Pane eventKey='leads'>

              {/* Total + sorting */}
              <div className='d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch justify-content-between pb-4 mb-2 mb-md-3'>
                <h3 className='h4 mb-sm-0'>{leads.length} Leads</h3>
                <Form.Group controlId='sortby2' className='d-flex align-items-center ms-sm-4'>
                  <Form.Label className='fs-sm text-body fw-normal text-nowrap mb-0 me-2 pe-1'>
                    <i className='fi-arrows-sort opacity-60 mt-n1 me-2'></i>
                    Sort by:
                  </Form.Label>
                  <Form.Select size='sm'>
                    <option value='Newest'>Newest</option>
                    <option value='Oldest'>Oldest</option>
                    <option value='Popular'>Popular</option>
                    <option value='Hight rating'>Hight rating</option>
                    <option value='Low rating'>Low rating</option>
                  </Form.Select>
                </Form.Group>
              </div>

              {/* Reviews list */}
              {leads.reverse().map((lead, indx) => (
                <div key={indx} className={indx === leads.length - 1 ? 'mb-2' : 'border-bottom mb-4 pb-4'}>
                  <div className='d-flex justify-content-between mb-3'>
                    <div className='pe-2'>
                      <h6 className='mb-1'>
                        <span className='fw-normal opacity-70 me-1'>For:</span>
                        {lead.title !== undefined ? lead.title : "All Properties"}
                      </h6>
                      {/* <StarRating rating={lead.rating} /> */}
                    </div>
                    <span className='fs-sm text-muted'>{lead.date.substring(0,10)}</span>
                  </div>
                  <p> Name: {lead.name}</p>
                  <p> Mobile Number: {lead.number}</p>
                  <p> Email Address: {lead.email}</p>
                </div>
              ))}
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </RealEstateAccountLayout>
    </RealEstatePageLayout>
  )
}

export default AccountReviewsPage