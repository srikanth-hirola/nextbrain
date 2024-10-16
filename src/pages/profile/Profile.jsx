/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined, MenuOutlined } from '@ant-design/icons';
import ProfileData from '../../componnets/profile/ProfileData';
import RecentOrderCard from '../../componnets/profile/RecentOrderCard';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [current, setCurrent] = useState('profile');
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const handleMenuClick = (e) => {
    setCurrent(e.key);
    setIsMobileMenuVisible(false); // Close the drawer when an item is clicked
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <div className="profile-main">
      <div className="container">
        <div className="profile-page">
          {/* Burger menu for mobile */}
          <div className="mobile-menu-button">
           <Link to='/'>
           
           <img src="/assets/logo.svg" alt="" /></Link>
            <Button
              type="primary"
              icon={<MenuOutlined />}
              onClick={toggleMobileMenu}
            />
          </div>

          {/* Sidebar for desktop */}
          <div className="sidebar">
            <Menu
              mode="inline"
              selectedKeys={[current]}
              onClick={handleMenuClick}
            >
              <Menu.Item key="home" icon={<HomeOutlined />}>
                Home
              </Menu.Item>
              <Menu.Item key="profile" icon={<UserOutlined />}>
                Profile
              </Menu.Item>
              <Menu.Item key="recent-orders" icon={<SettingOutlined />}>
                Recent Orders
              </Menu.Item>
            </Menu>
          </div>

          {/* Mobile Drawer */}
          <Drawer
            title="Menu"
            placement="left"
            closable={true}
            onClose={toggleMobileMenu}
            visible={isMobileMenuVisible}
          >
            <Menu
              mode="vertical"
              selectedKeys={[current]}
              onClick={handleMenuClick}
            >
              <Menu.Item key="home" icon={<HomeOutlined />}>
                Home
              </Menu.Item>
              <Menu.Item key="profile" icon={<UserOutlined />}>
                Profile
              </Menu.Item>
              <Menu.Item key="recent-orders" icon={<SettingOutlined />}>
                Recent Orders
              </Menu.Item>
            </Menu>
          </Drawer>

          {/* Content */}
          <div className="content">
            {current === 'home' && <h2>Home Content</h2>}
            {current === 'profile' && <ProfileData />}
            {current === 'recent-orders' && <RecentOrderCard />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

// /* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import { Menu } from 'antd';
// import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
// import ProfileData from '../../componnets/profile/ProfileData';
// import RecentOrderCard from '../../componnets/profile/RecentOrderCard';

// const Profile = () => {
//   const [current, setCurrent] = useState('profile');
//   const [isMobile, setIsMobile] = useState(false);

//   const handleMenuClick = (e) => {
//     setCurrent(e.key);
//   };

//   const handleToggleMobileMenu = () => {
//     setIsMobile(!isMobile);
//   };

//   return (
//  <div className="profile-main">
//     <div className="container">
//     <div className={`profile-page ${isMobile ? 'mobile' : ''}`}>
//       <div className={`sidebar ${isMobile ? 'mobile-sidebar' : ''}`}>
//         <div className="toggle-button" onClick={handleToggleMobileMenu}>
//           {isMobile ? 'Close' : 'Menu'}
//         </div>
//         <Menu
//           mode={isMobile ? 'vertical' : 'inline'}
//           selectedKeys={[current]}
//           onClick={handleMenuClick}
//         >
//            <Menu.Item key="home" icon={<HomeOutlined />}>
//             Home
//           </Menu.Item>
//           <Menu.Item key="profile" icon={<UserOutlined />}>
//             Profile
//           </Menu.Item>
//           <Menu.Item key="recent-orders" icon={<SettingOutlined />}>
//             Recent Orders 
//           </Menu.Item>
         
//         </Menu>
//       </div>
//       <div className="content">
//         {current === 'home' && <h2>Home Content</h2>}
//         {current === 'profile' && <ProfileData />}
//         {current === 'recent-orders' && <RecentOrderCard/>}
//       </div>
//     </div>
//     </div>
//  </div>
//   );
// };

// export default Profile;
