import { Button, Divider } from "antd";
import React from "react";

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
      <ItemRow />
    </div>
  );
}

function ItemRow() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "16px",
        fontWeight: 500,
        height: 166,
      }}
    >
      <image style={{ width: "20%", height: 166 }}></image>
      <div style={{ width: "12%" }}>Item Name</div>
      <div style={{ width: "12%" }}>Status</div>
      <div style={{ width: "12%", fontWeight: 400 }}>Category</div>
      <div style={{ width: "12%", fontWeight: 400 }}>Description</div>
      <div style={{ width: "12%" }}>Price</div>
      <div style={{ width: "20%" }}>
        <Button className="buttonSmall">Edit</Button>
        <Button
          danger
          style={{ borderRadius: 20, margin: 5, height: 38, width: 90 }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ItemsDisplay;
