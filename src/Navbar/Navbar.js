import { useState } from 'react';
import '../all.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';

function Navbar() {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className={`nav ${toggle ? 'show' : ''}`}>
            <div className='logo'>LSP</div>
            <ul>
            <li>
                <Link to="/">HOME</Link>
                    
                    </li>
                <li>
                <Link to="/aboutus">ABOUT US</Link>    
                    </li>
                <li>
                <Link to="/contactus">CONTACT US</Link> 
                    </li>
                <li>
                <Link to="/hotel">HOTEL</Link>
                    
                    </li>
                 
            </ul>
            <RxHamburgerMenu className='Menu' onClick={() => setToggle(!toggle)} />
        </nav>
    );
}

export default Navbar;
