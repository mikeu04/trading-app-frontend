import React, { useState, useEffect } from "react";
import { Layout, Menu, Button, List, Card } from "antd";
import {
  ShoppingCartOutlined,
  SwapOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import Search from "antd/lib/input/Search";
import Logout from "./Logout";
// import utils from "../utils"; // Placeholder for backend communication

const { Header, Content, Sider } = Layout;

const SearchResult = () => {
  const [items, setItems] = useState([]); // State to store search results
  const [filters, setFilters] = useState({}); // State to store filter options

  // Fetch search results and set state
  useEffect(() => {
    // Example: utils.getSearchResults(searchQuery).then(data => setItems(data));
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // Update search results based on filters
  };

  return (
    <Layout>
      <Layout style={{ marginTop: 64 }}>
        <Sider
          width={200}
          style={{
            position: "fixed",
            height: "100vh",
            backgroundColor: "#f0f2f5",
            padding: "20px",
          }}
        >
          {/* Filters go here */}
          <div>Filter Options</div>
        </Sider>

        <Layout style={{ marginLeft: 200 }}>
          <Content
            style={{
              padding: "20px",
              margin: 0,
              overflowY: "scroll",
              height: "calc(100vh - 64px)",
            }}
          >
            <List
              grid={{ gutter: 16, column: 4 }}
              dataSource={items}
              renderItem={(item) => (
                <List.Item>
                  <Card title={item.title}>{/* Item details */}</Card>
                </List.Item>
              )}
            />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default SearchResult;
