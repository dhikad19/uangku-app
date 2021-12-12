import React, {useState} from 'react';
import Pricing from '../components/PricingComponent';
import Navbar from '../components/NavbarComponent'
import Sidebar from '../components/SidebarComponent'

const PricingPage = () => {
	const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
	return(
	<>
	<Sidebar isOpen={isOpen} toggle={toggle}/>
	<Navbar toggle={toggle}/> 
	<Pricing />;
	</>
	)
};

export default PricingPage;
