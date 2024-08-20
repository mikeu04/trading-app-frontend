import React, { useState, useEffect } from "react";
import { Layout, List, Divider } from "antd";
import { createVerticalItemCard } from "./ItemCard";
// import fetchDataBaseOnSearch from "../utils"; // Placeholder for backend communication

const { Content, Sider } = Layout;

// list of dummy items
const dummyItems = [
  {
    imgSrc: "https://via.placeholder.com/225x166",
    title: "Pot",
    price: "$25",
    description:
      "Poshmark connects you to people and closets filled with unique styles, hard-to-find pieces, and endless items to discover.",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1556911820-1238441ed1a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvdHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Pot",
    price: "$25",
    description:
      "Poshmark connects you to people and closets filled with unique styles, hard-to-find pieces, and endless items to discover.",
  },
  {
    imgSrc:
      "https://media.istockphoto.com/id/1089021764/photo/close-up-of-kitchen-items-wall-on-background.webp?b=1&s=612x612&w=0&k=20&c=jRsczR8fEUUCqVvhmEg83D6ctuf3ed7nfd4wVsJFho0=",
    title: "Utensil Set",
    price: "$25",
    description:
      "Poshmark connects you to people and closets filled with unique styles, hard-to-find pieces, and endless items to discover.",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1640003145136-f998284e11de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hdHRyZXNzfGVufDB8fDB8fHww",
    title: "Mattress",
    price: "$236",
    description:
      "Poshmark connects you to people and closets filled with unique styles, hard-to-find pieces, and endless items to discover.",
  },
  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1672419800149-d04c372c5113?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFufGVufDB8fDB8fHww",
    title: "Pan",
    price: "$25",
    description:
      "Poshmark connects you to people and closets filled with unique styles, hard-to-find pieces, and endless items to discover.",
  },
  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1672192166833-c8ae84e5e127?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWlyJTIwZnJ5ZXJ8ZW58MHx8MHx8fDA%3D",
    title: "Air Fryer",
    price: "$80",
    description:
      "Poshmark connects you to people and closets filled with unique styles, hard-to-find pieces, and endless items to discover.",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1640003145136-f998284e11de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hdHRyZXNzfGVufDB8fDB8fHww",
    title: "Mattress",
    price: "$236",
    description:
      "Poshmark connects you to people and closets filled with unique styles, hard-to-find pieces, and endless items to discover.",
  },
  {
    imgSrc: "https://via.placeholder.com/225x166",
    title: "Utensil Set",
    price: "$25",
    description:
      "Poshmark connects you to people and closets filled with unique styles, hard-to-find pieces, and endless items to discover.",
  },
  {
    imgSrc: "https://via.placeholder.com/225x166",
    title: "Utensil Set",
    price: "$25",
    description:
      "Poshmark connects you to people and closets filled with unique styles, hard-to-find pieces, and endless items to discover.",
  },
  {
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1670963025006-3b650025442c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFufGVufDB8fDB8fHww",
    title: "Pan",
    price: "$25",
    description:
      "Poshmark connects you to people and closets filled with unique styles, hard-to-find pieces, and endless items to discover.",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1640003145136-f998284e11de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hdHRyZXNzfGVufDB8fDB8fHww",
    title: "Mattress",
    price: "$236",
    description:
      "Poshmark connects you to people and closets filled with unique styles, hard-to-find pieces, and endless items to discover.",
  },
];

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
            <List.Item key={item.id}>
              {createVerticalItemCard(
                item.imgSrc,
                item.title,
                item.price,
                item.description
              )}
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
};

export default SearchResult;
