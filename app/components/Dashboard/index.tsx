// import {
//   CalendarOutlined,
//   HomeOutlined,
//   MailOutlined,
//   TeamOutlined,
//   UserOutlined,
//   UserSwitchOutlined,
// } from "@ant-design/icons";
// import { useState } from "react";
// import Calendar from "../Calander";
// import NavigationMenu from "../NavigationMenu";
// import Chart from "../Chart";

// const SideNav = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   const menuItems = [
//     { icon: <HomeOutlined className="text-xl" />, label: "Home" },
//     { icon: <CalendarOutlined className="text-xl" />, label: "Listings" },
//     { icon: <UserOutlined className="text-xl" />, label: "Operations" },
//     { icon: <MailOutlined className="text-xl" />, label: "Back Office" },
//     { icon: <TeamOutlined className="text-xl" />, label: "Admin" },
//     { icon: <UserSwitchOutlined className="text-xl" />, label: "Super Admin" },
//   ];

//   return (
//     <div className="min-h-screen flex">
//       {/* Sidebar */}
//       <div
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         className={`fixed left-0 h-screen text-black   bg-white
//           z-[999999]
//           transition-all duration-300 ease-in-out 
//           ${isHovered ? "w-52" : "w-16"}`}
//       >
//         {/* Logo */}
//         <div className="h-16 flex items-center justify-center">
//           <span className="text-xl font-bold">CH</span>
//         </div>

//         {/* Nav Items */}
//         <nav className="mt-6">
//           {menuItems.map((item, index) => (
//             <div
//               key={index}
//               className={`
//                 flex items-center mt-5 px-4 py-3 cursor-pointer
//                 transition-all duration-300 ease-in-out
//                 hover:bg-gray-700 group
//                 ${isHovered ? "justify-start space-x-4" : "justify-center"}
//               `}
//             >
//               <div
//                 className={`
//                 flex-shrink-0 
//                 transition-transform duration-300 
//                 group-hover:scale-110
//               `}
//               >
//                 {item.icon}
//               </div>
//               <span
//                 className={`
//                   whitespace-nowrap
//                   transition-all duration-300
//                   ${isHovered ? "opacity-100 ml-3" : "opacity-0 w-0"}
//                 `}
//               >
//                 {item.label}
//               </span>
//             </div>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content  ai class diyee ami hober korle main contant oo poriborton korchi*/}
//       <div
//         className={`
//           flex-1 pl-16 bg-gray-100
//         `}
//       >
//         <div className="p-8">
//           <h1 className="text-2xl font-bold text-gray-800">
//             Welcome to Dashboard
//           </h1>
//           <NavigationMenu/>
//           <Calendar/>
//           <Chart/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideNav;




import {
  CalendarOutlined,
  HomeOutlined,
  MailOutlined,
  TeamOutlined,
  UserOutlined,
  UserSwitchOutlined,
  CaretDownOutlined,
  CaretUpOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import Calendar from "../Calander";
import NavigationMenu from "../NavigationMenu";
import Chart from "../Chart";
import Header from "../Header";

const SideNav = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState(new Set(["listings"]));

  const toggleMenu = (menuKey : string) => {
    setExpandedMenus(prev => {
      const newSet = new Set(prev);
      if (newSet.has(menuKey)) {
        newSet.delete(menuKey);
      } else {
        newSet.add(menuKey);
      }
      return newSet;
    });
  };

  const menuItems = [
    {
      key: "home",
      icon: <HomeOutlined className="text-xl" />,
      label: "Home"
    },
    {
      key: "listings",
      icon: <CalendarOutlined className="text-xl" />,
      label: "Listings",
      submenu: [
        { label: "Stays", key: "stays" },
        { label: "Guests", key: "guests" },
        { label: "Properties", key: "properties" }
      ]
    },
    {
      key: "operations",
      icon: <UserOutlined className="text-xl" />,
      label: "Operations"
    },
    {
      key: "backoffice",
      icon: <MailOutlined className="text-xl" />,
      label: "Back Office"
    },
    {
      key: "admin",
      icon: <TeamOutlined className="text-xl" />,
      label: "Admin"
    },
    {
      key: "superadmin",
      icon: <UserSwitchOutlined className="text-xl" />,
      label: "Super Admin"
    }
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          fixed left-0 h-screen bg-white shadow-lg z-[999999]
          transition-all duration-300 ease-in-out
          ${isHovered ? "w-64" : "w-16"}
        `}
      >
        {/* Logo */}
        <div className={`
          h-16 flex items-center
          ${isHovered ? "justify-center" : " justify-center opacity-0 "}
        `}>
          <span className="text-3xl font-bold text-rose-500">CH</span>
        </div>

        {/* Nav Items */}
        <nav className="mt-3">
          {menuItems.map((item) => (
            <div key={item.key}>
              <div
                onClick={() => item.submenu && toggleMenu(item.key)}
                className={`
                  flex items-center cursor-pointer mt-2
                  hover:bg-gray-50 transition-colors duration-200
                  ${isHovered ? "px-6" : "justify-center"}
                  py-3
                  ${expandedMenus.has(item.key) ? 'text-rose-500' : 'text-gray-700'}
                `}
              >
                <span className={`${isHovered ? "w-6" : "text-xl"}`}>{item.icon}</span>
                <span className={`
                  whitespace-nowrap transition-all duration-300
                  ${isHovered ? "ml-4  opacity-100" : "w-0 opacity-0"}
                `}>
                  {item.label}
                </span>
                {item.submenu && isHovered && (
                  <span className="ml-auto mt-10">
                    {expandedMenus.has(item.key) ? (
                      <CaretUpOutlined className="text-xs" />
                    ) : (
                      <CaretDownOutlined className="text-xs" />
                    )}
                  </span>
                )}
              </div>

              {/* Submenu - only show when sidebar is expanded */}
              {item.submenu && expandedMenus.has(item.key) && isHovered && (
                <div className="bg-white">
                  {item.submenu.map((subItem) => (
                    <div
                      key={subItem.key}
                      className="pl-16 py-2 cursor-pointer text-gray-600 hover:text-rose-500 transition-colors duration-200"
                    >
                      {subItem.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      
      <div className={`
        flex-1 pl-16 bg-gray-100
        transition-all duration-300 ease-in-out
      `}>
        <Header/>
        <div className="p-8">
          {/* <h1 className="text-2xl font-bold text-gray-800">
            Welcome to Dashboard
          </h1> */}
          <NavigationMenu />
          <Calendar />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default SideNav;