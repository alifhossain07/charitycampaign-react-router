import { NavLink } from "react-router-dom";
const Header = () => {

    const links = 
    <>
    <li className="text-base mb-2 mr-4"><NavLink  to="/" >Home</NavLink></li>
    <li className="text-base mb-2 mr-4"><NavLink>Donation</NavLink></li> 
    <li className="text-base mr-4"><NavLink>Statistics</NavLink></li>


    </>
    return (
        <div>
           <div className="navbar bg-base-100">
  <div className="navbar-start">

  {/* Dropdown Option */}
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow ">
        {links}
      </ul>
    </div>
    <div className=" ">
    <img className=" md:w-48 w-28" src="/asset/images/logo.png" alt="" />
  </div>
    <a className=" font-bold text-lg md:text-2xl"><span className="text-red-600">Charity</span>Campaign</a>
  </div>
  <div className="navbar-end md:hidden">
    <img className=" md:w-36 w-28" src="/asset/images/logo.png" alt="" />
  </div>
  <div className="navbar-end hidden  lg:flex">
    <ul className="mr-10 menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  
</div>
        </div>

    );
};

export default Header;
