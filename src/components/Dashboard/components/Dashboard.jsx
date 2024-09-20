
// import React, { useState, useEffect } from 'react';
// import { FaShoppingCart, FaUser, FaMapMarkerAlt, FaSignOutAlt, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
// import { Outlet, useNavigate, useLocation } from 'react-router-dom';
// // import {Mdkeyboardarrowright} from 'react-icons'
// import profile from "../assets/Images/profile.png"

// const Dashboard = () => {
//   const [isSidebarVisible, setSidebarVisible] = useState(true); 
//   const [selectedMenuItem, setSelectedMenuItem] = useState('orders'); 
//   const navigate = useNavigate(); 
//   const location = useLocation(); 

  
//   const [currentPageName, setCurrentPageName] = useState('Orders');

//   useEffect(() => {
    
//     switch (location.pathname) {
//       case '/account/orders':
//         setCurrentPageName('Orders');
//         break;
//       case '/account/profile':
//         setCurrentPageName('Profile');
//         break;
//       case '/account/addresses':
//         setCurrentPageName('Addresses');
//         break;
//       default:
//         setCurrentPageName('');
//         break;
//     }
//   }, [location.pathname]);

//   const handleMenuClick = (path, menuItem) => {
//     navigate(path); 
//     setSelectedMenuItem(menuItem); // Set the selected menu item
//     if (window.innerWidth < 1024) {
//       setSidebarVisible(false); // Hide sidebar for small screens
//     }
//   };

//   const isSelected = (menuItem) => selectedMenuItem === menuItem;

//   return (
//     <div className="flex min-h-screen mt-16 lg:mt-40 bg-gray-100">
//       {/* Sidebar */}
//       <div
//         className={`w-full lg:w-1/4 bg-white p-6 shadow-lg lg:block ${isSidebarVisible ? 'block' : 'hidden'}`}
//       >
      
//         <div className="flex flex-col items-center space-x-4">
//           <img
//             src={profile} 
//             alt="Profile"
//             className="bg-gray-200 rounded-full w-24 h-24 object-cover"
//           />
//           <div className="flex flex-col items-start">
//             <h2 className="text-xl mt-4 font-bold text-center">Welcome, Name</h2>
//             <p className="text-gray-600 text-center">+91 9999999999</p>
//           </div>
//         </div>


//         {/* Menu Options */}
//         <div className="mt-6 border-gray-300">
//           <div
//             className={`menu-item p-3  cursor-pointer flex justify-between border-2 border-gray-300 bg-gray-100 items-center ${isSelected('orders') ? 'bg-orange-400 text-white' : ''}`}
//             onClick={() => handleMenuClick('/account/orders', 'orders')}
//           >
//             <span className="flex items-center ">
//               <FaShoppingCart className="mr-2" />
//               Orders
//             </span>
//             <FaArrowRight />
//           </div>
//           <div
//             className={`menu-item p-3  cursor-pointer flex justify-between items-center border-gray-300 bg-gray-100 ${isSelected('profile') ? 'bg-orange-400 text-white' : ''}`}
//             onClick={() => handleMenuClick('/account/profile', 'profile')}
//           >
//             <span className="flex items-center">
//               <FaUser className="mr-2" />
//               Profile
//             </span>
//             <FaArrowRight />
//           </div>
//           <div
//             className={`menu-item p-3  cursor-pointer flex justify-between items-center border-gray-300 bg-gray-100 ${isSelected('addresses') ? 'bg-orange-400 text-white' : ''}`}
//             onClick={() => handleMenuClick('/account/addresses', 'addresses')}
//           >
//             <span className="flex items-center">
//               <FaMapMarkerAlt className="mr-2" />
//               Addresses
//             </span>
//             <FaArrowRight />
//           </div>
//           <div
//             className="menu-item p-3 cursor-pointer flex justify-between items-center border-gray-300 bg-gray-100"
//             onClick={() => navigate('/logout')}
//           >
//             <span className="flex items-center">
//               <FaSignOutAlt className="mr-2" />
//               Log Out
//             </span>
//             <FaArrowRight />
//           </div>
//         </div>
//       </div>

     
//       <div
//         className={`w-full lg:w-3/4 bg-white p-8 overflow-y-auto ${isSidebarVisible ? 'hidden lg:block' : 'block'}`}
//       >
//         {/*  small screens only */}
//         <div className="lg:hidden mb-4 flex items-center bg-orange-400 p-3 rounded-lg text-white">
//           <FaArrowLeft className="mr-2" onClick={() => setSidebarVisible(true)} />
//           {currentPageName} 
//         </div>

//         {/* Render the nested route content */}
//         <Outlet /> {/* This is where the nested routes (Orders, Profile, Addresses) will render */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaUser, FaMapMarkerAlt, FaSignOutAlt, FaArrowLeft } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md'; // Import MdKeyboardArrowRight
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import profile from "../assets/Images/profile.png";

const Dashboard = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true); 
  const [selectedMenuItem, setSelectedMenuItem] = useState('orders'); 
  const navigate = useNavigate(); 
  const location = useLocation(); 

  const [currentPageName, setCurrentPageName] = useState('Orders');

  useEffect(() => {
    switch (location.pathname) {
      case '/account/orders':
        setCurrentPageName('Orders');
        break;
      case '/account/profile':
        setCurrentPageName('Profile');
        break;
      case '/account/addresses':
        setCurrentPageName('Addresses');
        break;
      default:
        setCurrentPageName('');
        break;
    }
  }, [location.pathname]);

  const handleMenuClick = (path, menuItem) => {
    navigate(path); 
    setSelectedMenuItem(menuItem); 
    if (window.innerWidth < 1024) {
      setSidebarVisible(false); 
    }
  };

  const isSelected = (menuItem) => selectedMenuItem === menuItem;

  return (
    <div className="flex min-h-screen mt-16 lg:mt-40 bg-gray-100">
      {/* Sidebar */}
      <div
        className={`w-full lg:w-1/4 bg-white p-6 shadow-lg lg:block ${isSidebarVisible ? 'block' : 'hidden'}`}
      >
        <div className="flex flex-col items-center space-x-4">
          <img
            src={profile} 
            alt="Profile"
            className="bg-gray-200 rounded-full w-24 h-24 object-cover"
          />
          <div className="flex flex-col items-start">
            <h2 className="text-xl mt-4 font-bold text-center">Welcome, Name</h2>
            <p className="text-gray-600 text-center">+91 9999999999</p>
          </div>
        </div>

        {/* Menu Options */}
        <div className="mt-6 border-gray-300">
          <div
            className={`menu-item p-3 cursor-pointer flex justify-between border-2 border-gray-300 bg-gray-100 items-center ${isSelected('orders') ? 'bg-orange-400 text-white' : ''}`}
            onClick={() => handleMenuClick('/account/orders', 'orders')}
          >
            <span className="flex items-center">
              <FaShoppingCart className="mr-2" />
              Orders
            </span>
            <MdKeyboardArrowRight />
          </div>
          <div
            className={`menu-item p-3 cursor-pointer flex justify-between items-center border-2 border-gray-300 bg-gray-100 ${isSelected('profile') ? 'bg-orange-400 text-white' : ''}`}
            onClick={() => handleMenuClick('/account/profile', 'profile')}
          >
            <span className="flex items-center">
              <FaUser className="mr-2" />
              Profile
            </span>
            <MdKeyboardArrowRight />
          </div>
          <div
            className={`menu-item p-3 cursor-pointer flex justify-between items-center border-2 border-gray-300 bg-gray-100 ${isSelected('addresses') ? 'bg-orange-400 text-white' : ''}`}
            onClick={() => handleMenuClick('/account/addresses', 'addresses')}
          >
            <span className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              Addresses
            </span>
            <MdKeyboardArrowRight />
          </div>
          <div
            className="menu-item p-3 cursor-pointer flex justify-between items-center border-2 border-gray-300 bg-gray-100"
            onClick={() => navigate('/logout')}
          >
            <span className="flex items-center">
              <FaSignOutAlt className="mr-2" />
              Log Out
            </span>
            <MdKeyboardArrowRight />
          </div>
        </div>
      </div>

      <div
        className={`w-full lg:w-3/4 bg-white p-8 overflow-y-auto ${isSidebarVisible ? 'hidden lg:block' : 'block'}`}
      >
        {/*  small screens only */}
        <div className="lg:hidden mb-4 flex items-center bg-orange-400 p-3 rounded-lg text-white">
          <FaArrowLeft className="mr-2" onClick={() => setSidebarVisible(true)} />
          {currentPageName} 
        </div>

        {/* Render the nested route content */}
        <Outlet /> {/* This is where the nested routes (Orders, Profile, Addresses) will render */}
      </div>
    </div>
  );
};

export default Dashboard;
