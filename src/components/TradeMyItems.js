import React from "react";
import { Layout, Button, Divider } from "antd";

const { Header, Content } = Layout;

function TradeMyItems() {
  return (
    <div>
      <Layout style={{ backgroundColor: "white", margin: "0px 120px " }}>
        <Header
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 50,
            backgroundColor: "white",
          }}
        >
          <div className="h1">Trade My Items</div>
        </Header>
        <Content>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <ItemsSummary />
          </div>
          <div>
            <MyUploadedItems />
          </div>
        </Content>
      </Layout>
    </div>
  );
}

function ItemsSummary() {
  return (
    <div
      style={{
        padding: "20px 100px",
        backgroundColor: "#3A00E524",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "60%",
        height: 200,
        marginBottom: 80,
      }}
    >
      <div style={{ textAlign: "left" }}>
        <div style={{ fontSize: 20, fontWeight: 600 }}>
          Hi, user123@gmail.com!
        </div>
        <div style={{ fontSize: 24 }}>
          You have uploaded 5 Items for trade in the past!
        </div>
        <div style={{ fontSize: 16 }}>
          2 Items Traded, 2 Items on Sale, 1 Items in Stock
        </div>
      </div>
      <Button
        type="primary"
        className="buttonBlue"
        style={{ fontSize: 20, width: 231, height: 50 }}
      >
        Sell a new Item!
      </Button>
    </div>
  );
}

function MyUploadedItems() {
  return (
    <div>
      <div className="h1">My Uploaded Items(5)</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <div>
          <Button
            className="buttonTab"
            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
          >
            On Sale
          </Button>
          <Button className="buttonTab" style={{ borderRadius: 0 }}>
            In Stock
          </Button>
          <Button
            className="buttonTab"
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          >
            Traded
          </Button>
        </div>
        <div>
          <Button
            type="primary"
            className="buttonBlue"
            style={{ fontSize: 14, width: 130 }}
          >
            Edit All
          </Button>
          <Button
            danger
            style={{ fontSize: 14, width: 130, borderRadius: "10px" }}
          >
            Delete All
          </Button>
        </div>
      </div>
      <ItemsDisplay />
    </div>
  );
}

function ItemsDisplay() {
  return (
    <div>
      <div>
        <Button className="buttonWithoutBorder" style={{ color: "#1479FB" }}>
          Select all Items
        </Button>
        <Button className="buttonWithoutBorder" style={{ color: "#d10000" }}>
          Delete all Items
        </Button>
      </div>
      <Divider style={{ marginTop: 0 }} />
      <div style={{ display: "flex", fontSize: "16px", fontWeight: 500 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "20%",
          }}
        >
          Image
        </div>
        <div style={{ width: "12%" }}>Item Name</div>
        <div style={{ width: "12%" }}>Status</div>
        <div style={{ width: "12%" }}>Category</div>
        <div style={{ width: "12%" }}>Description</div>
        <div style={{ width: "12%" }}>Price</div>
        <div style={{ width: "20%" }}>Actions</div>
      </div>
    </div>
  );
}

export default TradeMyItems;
