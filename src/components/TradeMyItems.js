import React from "react";
import { Layout, Button, Divider } from "antd";
import ItemsDisplay from "./ItemsDisplay";

const { Header, Content } = Layout;

function TradeMyItems() {
  return (
    <div>
      <Layout style={{ margin: "0px 120px " }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="h1">Trade My Items</div>
        </div>
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
        padding: "2% 5%",
        backgroundColor: "#3A00E524",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        maxWidth: "1400px",
        marginBottom: "5%",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <div style={{ textAlign: "left", marginBottom: "20px" }}>
        <div style={{ fontSize: "1vw", fontWeight: "bold" }}>
          Hi, user123@gmail.com!
        </div>
        <div style={{ fontSize: "1.5vw" }}>
          You have uploaded 5 Items for trade in the past!
        </div>
        <div style={{ fontSize: "1vw" }}>
          2 Items Traded, 2 Items on Sale, 1 Items in Stock
        </div>
      </div>
      <Button
        type="primary"
        className="buttonBlue"
        style={{
          fontSize: "1vw",
          width: "50%",
          maxWidth: "230px",
          minWidth: "10px",
          height: "auto",
        }}
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
          <Button
            className="buttonTab"
            style={{ borderRadius: 0, borderLeft: 0, borderRight: 0 }}
          >
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

export default TradeMyItems;
