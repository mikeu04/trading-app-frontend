import { Button } from "antd";
import Search from "antd/lib/transfer/search";
import React from "react";
import ItemsDisplay from "./ItemsDisplay";

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
        <div style={{ width: "300px" }}>
          <Search
            placeholder="search"

            // onSearch={onSearch}
          />
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
            Clear History
          </Button>
        </div>
      </div>
      <ItemsDisplay />
    </div>
  );
}

export default MyOrderedItems;
