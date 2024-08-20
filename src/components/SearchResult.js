import React, { useState, useEffect } from "react";
import { Layout, List, Divider } from "antd";
import { ItemCard } from "./ItemCard";
import dummyItems from "./dummyItems"; // Import dummy items
// import fetchDataBaseOnSearch from "../utils"; // Placeholder for backend communication

const { Content, Sider } = Layout;

const SearchResult = () => {
  const [items, setItems] = useState([]); // State to store search results
  const [filters, setFilters] = useState({}); // State to store filter options

  // Fetch search results and set state
  useEffect(() => {
    // Example: utils.getSearchResults(searchQuery).then(data => setItems(data));

    const fetchData = async () => {
      // Implement fetch logic here and update the items state
      setItems(dummyItems);
    };
    fetchData();
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    // Update search results based on filters
  };

  return (
    <Layout>
      {/* search result filter on the left, fixed when scrolling */}
      <Sider
        width={200}
        theme="light"
        style={{
          background: "#f0f2f5",
          position: "fixed",
          height: "60vh",
          overflow: "auto",
          borderRight: "1px solid #E0E0E0",
        }}
      >
        {/* Add filter options here */}
        <div>Filter Options</div>
        {/* Filters can be added here */}
      </Sider>

      {/* Vertical Divider Line separate Filter and Scrollable Search Result */}
      <Divider
        type="vertical"
        style={{
          //   marginTop: "114px",
          position: "fixed",
          left: "248px",
          height: "100vh",
          backgroundColor: "#E0E0E0",
          width: "1.5px",
        }}
      />

      <Content
        style={{ marginLeft: "220px", padding: "0 24px", minHeight: 280 }}
      >
        {/* scrollable List of Search Result, 4 items in a row */}
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={items}
          renderItem={(item) => (
            <List.Item>
              <ItemCard
                key={item.id}
                itemId={item.id}
                layout="vertical" // Specify the layout here
                imgSrc={item.imgSrc}
                title={item.title}
                price={item.price}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
};

export default SearchResult;
