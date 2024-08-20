import React from "react";

// Function to create a vertical item card
export function createVerticalItemCard(imgSrc, title, price, description) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "20px",
        display: "inline-flex",
        margin: "10px",
      }}
    >
      <img
        style={{
          width: 225, // Fixed width
          height: 166, // Fixed height
          position: "relative",
          background: "linear-gradient(0deg, #E0E0E0 0%, #E0E0E0 100%)", // empty image background
          objectFit: "cover", // Ensures the image covers the area without distortion
          borderRadius: 10, // Adds rounded corners
        }}
        src={imgSrc}
        alt={title}
      />

      <div
        style={{
          alignSelf: "stretch",
          color: "black",
          fontSize: 20,
          fontFamily: "Arial",
          fontWeight: "bold",
          wordWrap: "break-word",
        }}
      >
        {title}
      </div>

      <div
        style={{
          width: 225,
          color: "#7A7A7A",
          fontSize: 16,
          fontFamily: "Inter",
          fontWeight: "400",
          letterSpacing: 0.16,
          wordWrap: "break-word",
        }}
      >
        {description}
      </div>

      <div
        style={{
          alignSelf: "stretch",
          color: "black",
          fontSize: 20,
          fontFamily: "Arial",
          fontWeight: "bold",
          wordWrap: "break-word",
        }}
      >
        {price}
      </div>

      <div
        style={{
          // checkout button style
          height: 40,
          padding: "10px 25px", // top/bottom: 9px, left/right: 30px
          background: "#3A00E5",
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center", // Center text vertically
          display: "flex",
        }}
        onClick={() => {
          // Dummy code for redirecting to Stripe payment page
          // window.location.href = 'https://your-stripe-payment-page-url.com';
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 16,
            fontFamily: "Arial",
            letterSpacing: 0.14,
            wordWrap: "break-word",
          }}
        >
          Checkout
        </div>
      </div>
    </div>
  );
}
