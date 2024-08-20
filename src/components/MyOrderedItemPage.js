import { Button, Input } from "antd";
import React from "react";
import ItemsDisplay from "./ItemsDisplay";
import { SearchOutlined } from "@ant-design/icons";

function MyOrderedItems() {
  return (
    <div>
      <div className="h1">My Ordered Items(5)</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search..."
          // onPressEnter={onSearch}
          style={{ width: 300, height: 40, borderRadius: 10, margin: 10 }}
        />

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
            Clear History
          </Button>
        </div>
      </div>
      <ItemsDisplay />
    </div>
  );
}

export default MyOrderedItems;
