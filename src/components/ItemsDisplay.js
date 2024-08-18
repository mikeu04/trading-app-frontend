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
    </div>
  );
}

export default ItemsDisplay;
