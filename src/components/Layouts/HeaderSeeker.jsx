
import React,{useState} from 'react';
import "../../styles/HeaderStyleSeeker.css";
import { Navbar, Nav, Container,Row,Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logo from "../Code/Images/backimage2.png";
import Burger from "../../assets/menu/ten.png";


function HeaderSeeker() {

  const [nav,SetNav]=useState(false);
  //Scroll navbar
  const changeValueOnScroll=()=>{
    const scrollValue=document?.documentElement?.scrollTop;
    scrollValue>100? SetNav(true) : SetNav(false);
  };

  window.addEventListener("scroll",changeValueOnScroll);





  return (
<header>
<Navbar collapseOnSelect expand="lg"  className={`${nav === true ? "sticky" : ""}`} >
  <Container>
    <Navbar.Brand href="home" >
     <Link to="/SDashboard" className='logo' >
     <img src={Logo} alt="Logo" className='img-fluid' />
     </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" >
    <Nav className="ms-auto" >
    {/* <Nav.Link as={Link} to="/" >Home</Nav.Link> */}
    <Nav.Link as={Link} to="/applyjob">Apply For Job</Nav.Link>
    {/* <Nav.Link as={Link} to="/viewjob">View Jobs</Nav.Link> */}
    <Nav.Link as={Link} to="/viewjob">View Job Details</Nav.Link>
    {/* <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
    <Nav.Link as={Link} to="/contact">Contact</Nav.Link> */}
    <Nav.Link as={Link} to="/">Logout</Nav.Link> 
    <Nav.Link as={Link} to="/profile">
      <div className='cart' >
      <i class="bi bi-person-plus-fill fa-lg"></i>
       {/* <i class="bi bi-bag fs-5" ></i> */}
       {/* <em className='roundpoint'>2</em> */}
      </div>
      </Nav.Link>  
      {/* <Nav.Link as={Link} to="/">Logout</Nav.Link>                     */}
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>




<section className='hero_section'  >
     <Container>
        <Row>
            <Col lg={7} className='mb-5 mb-lg-0' >
                <div className='position:relative' >
                   <img src={Burger} className='fluid' alt="Hero" />
                   {/* <div className='price_badge' >
                    <div className='badge_text' >
                    <h4 className='h4_xs' >Only</h4>
                    <h4 className='h3_lg' >$6.99</h4>
                    </div>
                   </div> */}
                </div>
            </Col>


            <Col lg={5} >
            <div className='hero_text text-center' >
              <h1 className='text-white' >Find Your</h1>
              <h2 className='text-white' >Right career</h2>
              <p className='text-white pt-2 pb-4' ></p>
            {/* <Link to="/" className='btn order_now' >
            Order Now
            </Link> */}
            </div>
            </Col>

        </Row>
     </Container>
    </section>
</header>     


  );
}

export default HeaderSeeker;

{/* <Navbar collapseOnSelect expand="lg" >
  <Container>
    <Navbar.Brand  href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto" >
    <Nav.Link href="home"  >Home</Nav.Link>
    <Nav.Link href="features"  >Features</Nav.Link>
    <Nav.Link href="pricing"  >Pricing</Nav.Link>
    </Nav>
  </Container>
   </Navbar> */}









