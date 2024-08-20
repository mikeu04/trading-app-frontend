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
import SearchResult from "./components/SearchResult";

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
      case "myOrdered":
        return isLoggedIn ? (
          <MyOrderedItems />
        ) : (
          <Login onSuccess={handleLoginSuccess} />
        );

      case "buy":
      case "search":
        return <SearchResult />;

      default:
        return <div>Welcome to the Home Page!</div>;
    }
  };

  return (
    <Layout>
      <Header
        style={{
          position: "fixed", // Make the header fixed
          zIndex: 1, // Ensure it stays on top
          width: "100%", // Full width of the window
          backgroundColor: "#3a00e5",
          paddingLeft: 80,
          paddingRight: 80,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
            <Menu
              mode="horizontal"
              selectedKeys={[selectedMenu]}
              onClick={(e) => setSelectedMenu(e.key)}
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "transparent",
                borderBottom: "none",
              }}
            >
              <Menu.Item
                key={HOME_PAGE_STATE}
                style={{
                  fontSize: "25px",
                  marginLeft: 0,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Second-Hand Trading
              </Menu.Item>

              <Search
                style={{ width: "30%" }}
                placeholder="Search..."
                allowClear
                onSearch={() => setSelectedMenu("search")}
              />

              <Menu.Item
                key="buy"
                icon={<ShoppingOutlined />}
                style={{ color: "white" }}
              >
                Buy
              </Menu.Item>

              <Menu.Item
                key="myOrdered"
                icon={<ShoppingCartOutlined />}
                style={{ color: "white" }}
              >
                My Purchased
              </Menu.Item>

              <Menu.Item
                key="trade"
                icon={<SwapOutlined />}
                style={{ color: "white" }}
              >
                Trade My Items
              </Menu.Item>

              {!isLoggedIn && (
                <Menu.Item key="loginAndRegister">
                  <Button
                    className="loginButton"
                    style={{
                      backgroundColor: "#FFE100",
                      borderRadius: "10px",
                      color: "black",
                    }}
                  >
                    Login / Register
                  </Button>
                </Menu.Item>
              )}
              {isLoggedIn && (
                <Menu.Item key="logout">
                  <Logout onLogout={handleLogout} />
                </Menu.Item>
              )}
            </Menu>
          </div>
        </div>
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
