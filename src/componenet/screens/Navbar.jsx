import { FiShoppingCart } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import '../style/Navbar.css';
const Navbar = () => {


  return (
    <>
        <div className="header">
            <div className="nav">
              <div className="company_name">
            <h6 id="nav-brick-links">PAk Shop</h6>
            </div>
           
            <ul className="nav-item">
              
                <li className="nav-list"><Link to='/'>Home</Link></li>
                <li className="nav-list"><Link to='/signup'>Signup</Link></li>
                <li className="nav-list"><Link to='/login'>Login</Link></li>
                <li className="nav-list">
                  <a href=''>
                      <FiShoppingCart/>
                      <span>0</span>
                  </a>
                  
                 </li> 
              
                </ul>
          

            </div>
        </div>
        
    </>
  )
}
export default Navbar