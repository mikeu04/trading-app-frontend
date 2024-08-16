// import React, { useState } from "react";
// import { Button, Layout, Row, Col, Input, Typography } from "antd";

// const { Content } = Layout;
// const { Title } = Typography;
// const { Search } = Input;

// const Homepage = ({ isLoggedIn, onLogout }) => {
//   return (
//     <Layout>
//       <Content
//         style={{
//           padding: 24,
//           margin: 0,
//           height: "100vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           backgroundColor: "#f0f2f5",
//         }}
//       >
//         <div style={{ maxWidth: "1200px", margin: "auto" }}>
//           {/* Header and Search Bar */}
//           <Row style={{ padding: "20px 0", textAlign: "center" }}>
//             <Col span={24}>
//               <Search
//                 placeholder="Search..."
//                 enterButton
//                 style={{ maxWidth: "600px", margin: "auto" }}
//               />
//             </Col>
//           </Row>

//           {/* Promo Section */}
//           <Row style={{ padding: "20px 0", textAlign: "center" }}>
//             <Col span={24}>
//               <Title level={2}>Limited Deal Offer!</Title>
//               <Button type="primary" size="large">
//                 Shop Now
//               </Button>
//             </Col>
//           </Row>

//           {/* Lightning Deal Section */}
//           <Row gutter={[16, 16]} style={{ padding: "20px 0" }}>
//             <Col span={24}>
//               <Title level={3}>Lightning Deal</Title>
//             </Col>
//             <Col span={8}>
//               <div style={{ border: "1px solid #ddd", padding: "20px" }}>
//                 Product Image
//               </div>
//             </Col>
//             <Col span={8}>
//               <div style={{ border: "1px solid #ddd", padding: "20px" }}>
//                 Product Image
//               </div>
//             </Col>
//             <Col span={8}>
//               <div style={{ border: "1px solid #ddd", padding: "20px" }}>
//                 Product Image
//               </div>
//             </Col>
//           </Row>

//           {/* Buy What You Want Section */}
//           <Row gutter={[16, 16]} style={{ padding: "20px 0" }}>
//             <Col span={24}>
//               <Title level={3}>Buy What You Want</Title>
//             </Col>
//             <Col span={8}>
//               <div style={{ border: "1px solid #ddd", padding: "20px" }}>
//                 Category
//               </div>
//             </Col>
//             <Col span={8}>
//               <div style={{ border: "1px solid #ddd", padding: "20px" }}>
//                 Category
//               </div>
//             </Col>
//             <Col span={8}>
//               <div style={{ border: "1px solid #ddd", padding: "20px" }}>
//                 Category
//               </div>
//             </Col>
//           </Row>
//         </div>
//       </Content>
//     </Layout>
//   );
// };

// export default Homepage;
import React from "react";
import { Layout, Row, Col, Input, Typography, Button } from "antd";

const { Content } = Layout;
const { Title } = Typography;
const { Search } = Input;

const Homepage = () => {
  return (
    <Layout>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: "100vh",
          backgroundColor: "#f0f2f5",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "auto" }}>
          {/* Header and Search Bar */}
          <Row style={{ padding: "20px 0", textAlign: "center" }}>
            <Col span={24}>
              <Search
                placeholder="Search..."
                enterButton
                style={{ maxWidth: "600px", margin: "auto" }}
              />
            </Col>
          </Row>

          {/* Promo Section */}
          <Row style={{ padding: "20px 0", textAlign: "center" }}>
            <Col span={24}>
              <Title level={2}>Limited Deal Offer!</Title>
              <Button type="primary" size="large">
                Shop Now
              </Button>
            </Col>
          </Row>

          {/* Lightning Deal Section */}
          <Row gutter={[16, 16]} style={{ padding: "20px 0" }}>
            <Col span={24}>
              <Title level={3}>Lightning Deal</Title>
            </Col>
            <Col span={8}>
              <div style={{ border: "1px solid #ddd", padding: "20px" }}>
                Product Image
              </div>
            </Col>
            <Col span={8}>
              <div style={{ border: "1px solid #ddd", padding: "20px" }}>
                Product Image
              </div>
            </Col>
            <Col span={8}>
              <div style={{ border: "1px solid #ddd", padding: "20px" }}>
                Product Image
              </div>
            </Col>
          </Row>

          {/* Buy What You Want Section */}
          <Row gutter={[16, 16]} style={{ padding: "20px 0" }}>
            <Col span={24}>
              <Title level={3}>Buy What You Want</Title>
            </Col>
            <Col span={8}>
              <div style={{ border: "1px solid #ddd", padding: "20px" }}>
                Category
              </div>
            </Col>
            <Col span={8}>
              <div style={{ border: "1px solid #ddd", padding: "20px" }}>
                Category
              </div>
            </Col>
            <Col span={8}>
              <div style={{ border: "1px solid #ddd", padding: "20px" }}>
                Category
              </div>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default Homepage;
