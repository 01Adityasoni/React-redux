import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';




const Navbar = () => {
  return (
    <div className='bg-blue-500'>
      <div className="flex flex-row justify-between" >
        <NavLink to="/">
          <div>
            <img src="https://www.google.com/imgres?q=code%20logo&imgurl=https%3A%2F%2Fwebweb.ams3.cdn.digitaloceanspaces.com%2Fdata%2Fmodern-college-of-eng-pune.webweb.ai.in%2FLogo.png&imgrefurl=https%3A%2F%2Fmoderncoe.edu.in%2Fcode-club-new&docid=_bkn5Zoih0fGOM&tbnid=RP1v37RWRsXYsM&vet=12ahUKEwjr7fP3q8eSAxU_R2wGHThLCJA4ChCc8A56BAg7EAE..i&w=997&h=962&hcb=2&ved=2ahUKEwjr7fP3q8eSAxU_R2wGHThLCJA4ChCc8A56BAg7EAE" />
          </div>
        </NavLink>
        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div>
              <FaShoppingCart size={30} />
            </div>
          </NavLink>


        </div>

      </div>
    </div>
  )
};

export default Navbar;
