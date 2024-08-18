// import React, { useState } from "react";
// import { Layout, Menu } from "antd";
// import {
//   UserOutlined,
//   LoginOutlined,
//   AppstoreAddOutlined,
//   HomeOutlined,
//   ShoppingCartOutlined,
//   SwapOutlined,
//   ShoppingOutlined,
// } from "@ant-design/icons";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Logout from "./components/Logout";
// import Homepage from "./components/Homepage";

// const { Header, Content } = Layout;

// function App() {
//   const [selectedMenu, setSelectedMenu] = useState("home");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLoginSuccess = () => {
//     setIsLoggedIn(true);
//     setSelectedMenu("home");
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setSelectedMenu("home");
//   };

//   const renderContent = () => {
//     switch (selectedMenu) {
//       case "home":
//         return <Homepage isLoggedIn={isLoggedIn} onLogout={handleLogout} />;
//       case "login":
//         return <Login onSuccess={handleLoginSuccess} />;
//       case "register":
//         return <Register />;
//       default:
//         return <div>Welcome to the Home Page!</div>;
//     }
//   };

//   return (
//     <Layout>
//       <Header>
//         <Menu
//           theme="dark"
//           mode="horizontal"
//           selectedKeys={[selectedMenu]}
//           onClick={(e) => setSelectedMenu(e.key)}
//         >
//           <Menu.Item key="home" icon={<HomeOutlined />}>
//             Home
//           </Menu.Item>
//           <Menu.Item key="buy" icon={<ShoppingOutlined />}>
//             Buy
//           </Menu.Item>
//           <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
//             My Cart
//           </Menu.Item>
//           <Menu.Item key="trade" icon={<SwapOutlined />}>
//             Trade My Items
//           </Menu.Item>
//           {!isLoggedIn && (
//             <>
//               <Menu.Item key="login" icon={<LoginOutlined />}>
//                 Login
//               </Menu.Item>
//               <Menu.Item key="register" icon={<AppstoreAddOutlined />}>
//                 Register
//               </Menu.Item>
//             </>
//           )}
//           {isLoggedIn && (
//             <Menu.Item key="logout" icon={<UserOutlined />}>
//               <Logout onLogout={handleLogout} />
//             </Menu.Item>
//           )}
//         </Menu>
//       </Header>
//       <Layout style={{ padding: "24px" }}>
//         <Content
//           className="site-layout-background"
//           style={{
//             padding: 24,
//             margin: 0,
//             height: 800,
//             overflow: "auto",
//           }}
//         >
//           {renderContent()}
//         </Content>
//       </Layout>
//     </Layout>
//   );
// }

// export default App;
// import React, { useState, useEffect } from "react";
// import Cookies from "js-cookie";
// import { Layout, Menu } from "antd";
// import {
//   UserOutlined,
//   LoginOutlined,
//   AppstoreAddOutlined,
//   HomeOutlined,
//   ShoppingCartOutlined,
//   SwapOutlined,
//   ShoppingOutlined,
// } from "@ant-design/icons";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Logout from "./components/Logout";
// import Homepage from "./components/Homepage";

// const { Header, Content } = Layout;

// function App() {
//   const [selectedMenu, setSelectedMenu] = useState("home");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Check session on page load
//   useEffect(() => {
//     const session = Cookies.get("sessionToken"); // Assuming the token is stored under "sessionToken"
//     if (session) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const handleLoginSuccess = (sessionToken) => {
//     Cookies.set("sessionToken", sessionToken); // Store session token in cookies
//     setIsLoggedIn(true);
//     setSelectedMenu("home"); // Redirect to home after login
//   };

//   const handleLogout = () => {
//     Cookies.remove("sessionToken"); // Remove session token from cookies
//     setIsLoggedIn(false);
//     setSelectedMenu("home"); // Redirect to home after logout
//   };

//   const renderContent = () => {
//     switch (selectedMenu) {
//       case "home":
//         return <Homepage isLoggedIn={isLoggedIn} onLogout={handleLogout} />;
//       case "login":
//         return <Login onSuccess={handleLoginSuccess} />;
//       case "register":
//         return <Register />;
//       default:
//         return <div>Welcome to the Home Page!</div>;
//     }
//   };

//   return (
//     <Layout>
//       <Header>
//         <Menu
//           theme="dark"
//           mode="horizontal"
//           selectedKeys={[selectedMenu]}
//           onClick={(e) => setSelectedMenu(e.key)}
//         >
//           <Menu.Item key="home" icon={<HomeOutlined />}>
//             Home
//           </Menu.Item>
//           <Menu.Item key="buy" icon={<ShoppingOutlined />}>
//              Buy
//            </Menu.Item>
//            <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
//              My Cart
//           </Menu.Item>
//            <Menu.Item key="trade" icon={<SwapOutlined />}>
//              Trade My Items
//            </Menu.Item>
//           {!isLoggedIn && (
//             <>
//               <Menu.Item key="login" icon={<LoginOutlined />}>
//                 Login
//               </Menu.Item>
//               <Menu.Item key="register" icon={<AppstoreAddOutlined />}>
//                 Register
//               </Menu.Item>
//             </>
//           )}
//           {isLoggedIn && (
//             <Menu.Item key="logout" icon={<UserOutlined />}>
//               <Logout onLogout={handleLogout} />
//             </Menu.Item>
//           )}
//         </Menu>
//       </Header>
//       <Layout style={{ padding: "24px" }}>
//         <Content
//           className="site-layout-background"
//           style={{
//             padding: 24,
//             margin: 0,
//             height: 800,
//             overflow: "auto",
//           }}
//         >
//           {renderContent()}
//         </Content>
//       </Layout>
//     </Layout>
//   );
// }

// export default App;
// import React, { useState, useEffect } from "react";
// import Cookies from "js-cookie";
// import { Layout, Menu, Typography } from "antd";
// import {
//   UserOutlined,
//   LoginOutlined,
//   AppstoreAddOutlined,
//   HomeOutlined,
//   ShoppingCartOutlined,
//   SwapOutlined,
//   ShoppingOutlined,
// } from "@ant-design/icons";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Logout from "./components/Logout";
// import Homepage from "./components/Homepage";

// const { Header, Content } = Layout;
// const {Title} = Typography

// function App() {
//   const [selectedMenu, setSelectedMenu] = useState("home");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Check session on page load
//   useEffect(() => {
//     const session = Cookies.get("sessionToken");
//     if (session) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const handleLoginSuccess = (sessionToken) => {
//     Cookies.set("sessionToken", sessionToken);
//     setIsLoggedIn(true);
//     setSelectedMenu("home");
//   };

//   const handleLogout = () => {
//     Cookies.remove("sessionToken");
//     setIsLoggedIn(false);
//     setSelectedMenu("home");
//   };

//   const renderContent = () => {
//     switch (selectedMenu) {
//       case "home":
//         return <Homepage isLoggedIn={isLoggedIn} onLogout={handleLogout} />;
//       case "login":
//         return <Login onSuccess={handleLoginSuccess} />;
//       case "register":
//         return <Register />;
//       default:
//         return <div>Welcome to the Home Page!</div>;
//     }
//   };

//   return (
//     <Layout>
//       <Header>
//         <Title
//             level={2}
//             style={{ color: "white", lineHeight: "inherit", marginBottom: 0 }}
//           >
//             Second-Hand Trading
//         </Title>

//         <Menu
//           theme="dark"
//           mode="horizontal"
//           selectedKeys={[selectedMenu]}
//           onClick={(e) => setSelectedMenu(e.key)}
//         >
//           <Menu.Item key="home" icon={<HomeOutlined />}>
//             Home
//           </Menu.Item>
//           <Menu.Item key="buy" icon={<ShoppingOutlined />}>
//             Buy
//           </Menu.Item>
//           <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
//             My Cart
//           </Menu.Item>
//           <Menu.Item key="trade" icon={<SwapOutlined />}>
//             Trade My Items
//           </Menu.Item>
//           {!isLoggedIn && (
//             <>
//               <Menu.Item key="login" icon={<LoginOutlined />}>
//                 Login
//               </Menu.Item>
//               <Menu.Item key="register" icon={<AppstoreAddOutlined />}>
//                 Register
//               </Menu.Item>
//             </>
//           )}
//           {isLoggedIn && (
//             <Menu.Item key="logout" icon={<UserOutlined />}>
//               <Logout onLogout={handleLogout} />
//             </Menu.Item>
//           )}
//         </Menu>
//       </Header>
//       <Layout style={{ padding: "24px" }}>
//         <Content
//           className="site-layout-background"
//           style={{
//             padding: 24,
//             margin: 0,
//             height: 800,
//             overflow: "auto",
//           }}
//         >
//           {renderContent()}
//         </Content>
//       </Layout>
//     </Layout>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Button, Layout, Menu, Typography } from "antd";
import {
  UserOutlined,
  LoginOutlined,
  AppstoreAddOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  SwapOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Homepage from "./components/Homepage";
import TradeMyItems from "./components/TradeMyItems";
import Search from "antd/lib/input/Search";
import MyOrderedItems from "./components/MyOrderedItemPage";

const { Header, Content } = Layout;
const HOME_PAGE_STATE = "home";

function App() {
  const [selectedMenu, setSelectedMenu] = useState(HOME_PAGE_STATE);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check session on page load
  useEffect(() => {
    const session = Cookies.get("sessionToken");
    if (session) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginSuccess = (sessionToken) => {
    Cookies.set("sessionToken", sessionToken);
    setIsLoggedIn(true);
    setSelectedMenu(HOME_PAGE_STATE);
  };

  const handleLogout = () => {
    Cookies.remove("sessionToken");
    setIsLoggedIn(false);
    setSelectedMenu(HOME_PAGE_STATE);
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case HOME_PAGE_STATE:
        return <Homepage isLoggedIn={isLoggedIn} onLogout={handleLogout} />;
      case "loginAndRegister":
        return <Login onSuccess={handleLoginSuccess} />;
      case "trade":
        return isLoggedIn ? (
          <TradeMyItems />
        ) : (
          <Login onSuccess={handleLoginSuccess} />
        );
      case "cart":
        return isLoggedIn ? (
          <MyOrderedItems />
        ) : (
          <Login onSuccess={handleLoginSuccess} />
        );
      default:
        return <div>Welcome to the Home Page!</div>;
    }
  };

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#3a00e5",
        }}
      >
        <Menu
          className="navBar"
          mode="horizontal"
          selectedKeys={[selectedMenu]}
          onClick={(e) => setSelectedMenu(e.key)}
          style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Menu.Item
            key={HOME_PAGE_STATE}
            style={{ fontSize: "25px", marginLeft: 0 }}
          >
            Second-Hand Trading
          </Menu.Item>
          <Search
            // style={{ width: "30%" }}
            placeholder="search"
            allowClear
            // onSearch={onSearch}
          />

          <Menu.Item key="buy" icon={<ShoppingOutlined />}>
            Buy
          </Menu.Item>
          <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
            My Perchased
          </Menu.Item>
          <Menu.Item key="trade" icon={<SwapOutlined />}>
            Trade My Items
          </Menu.Item>
          {!isLoggedIn && (
            <Menu.Item key="loginAndRegister">
              <Button className="loginButton">Login / Register</Button>
            </Menu.Item>
          )}
          {isLoggedIn && (
            <Menu.Item key="logout">
              <Logout onLogout={handleLogout} />
            </Menu.Item>
          )}
        </Menu>
      </Header>
      <Layout style={{ padding: "24px" }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            height: 800,
            overflow: "auto",
          }}
        >
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
