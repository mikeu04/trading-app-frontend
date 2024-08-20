import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemInformation() {
  const { itemId } = useParams(); // Get the itemId from the URL
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Fetch item details based on itemId
    const fetchItemDetails = async () => {
      try {
        // Replace with your actual API call
        const response = await fetch(`/api/items/${itemId}`);
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error("Error fetching item details:", error);
      }
    };

    fetchItemDetails();
  }, [itemId]); // Fetch item details when itemId changes

  if (!item) return <div>Loading...</div>;

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.imageUrl} alt={item.title} />
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default ItemInformation;
