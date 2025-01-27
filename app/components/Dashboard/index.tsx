import {
  CalendarOutlined,
  CaretDownOutlined,
  CaretUpOutlined,
  HomeOutlined,
  MailOutlined,
  TeamOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import Calendar from "../Calander";
import Chart from "../Chart";
import Header from "../Header";
import NavigationMenu from "../NavigationMenu";

const SideNav = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState(new Set(["listings"]));

  const toggleMenu = (menuKey: string) => {
    setExpandedMenus((prev) => {
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
      label: "Home",
    },
    {
      key: "listings",
      icon: <CalendarOutlined className="text-xl" />,
      label: "Listings",
      submenu: [
        { label: "Stays", key: "stays" },
        { label: "Guests", key: "guests" },
        { label: "Properties", key: "properties" },
      ],
    },
    {
      key: "operations",
      icon: <UserOutlined className="text-xl" />,
      label: "Operations",
    },
    {
      key: "backoffice",
      icon: <MailOutlined className="text-xl" />,
      label: "Back Office",
    },
    {
      key: "admin",
      icon: <TeamOutlined className="text-xl" />,
      label: "Admin",
    },
    {
      key: "superadmin",
      icon: <UserSwitchOutlined className="text-xl" />,
      label: "Super Admin",
    },
  ];

  return (
    <div className="min-h-screen flex">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          fixed left-0 h-screen bg-white shadow-lg z-[999999]
          transition-all duration-300 ease-in-out
          ${isHovered ? "w-64" : "w-16"}
        `}
      >
        <div
          className={`
          h-16 flex items-center
          ${isHovered ? "justify-center" : " justify-center opacity-0 "}
        `}
        >
          <span className="text-3xl font-bold text-rose-500">CH</span>
        </div>
        <nav className="mt-3">
          {menuItems.map((item) => (
            <div key={item.key}>
              <div
                onClick={() => item.submenu && toggleMenu(item.key)}
                className={`
    flex items-center cursor-pointer
    hover:bg-gray-50 transition-colors duration-200
    ${isHovered ? "px-6" : "justify-center"}
    py-4
    ${expandedMenus.has(item.key) ? "text-rose-500" : "text-gray-700"}
  `}
              >
                <span className={`text-xl ${isHovered ? "w-6" : ""}`}>
                  {item.icon}
                </span>
                <span
                  className={`
    whitespace-nowrap transition-all duration-300
    ${isHovered ? "ml-4 opacity-100" : "w-0 opacity-0"}
  `}
                >
                  {item.label}
                </span>
                {item.submenu && isHovered && (
                  <span className="ml-auto">
                    {expandedMenus.has(item.key) ? (
                      <CaretUpOutlined className="text-xs" />
                    ) : (
                      <CaretDownOutlined className="text-xs" />
                    )}
                  </span>
                )}
              </div>
              {item.submenu && isHovered && expandedMenus.has(item.key) && (
                <div className="bg-gray-50 py-2">
                  {item.submenu.map((subItem) => (
                    <div
                      key={subItem.key}
                      className="px-12 py-2 text-sm text-gray-600 hover:text-rose-500 cursor-pointer"
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
      <div
        className={`
        flex-1  
        transition-all duration-300 ml-16 border border-red-500
      `}
      >
        <Header />
        <div className="">
          <NavigationMenu />
          <Calendar />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
