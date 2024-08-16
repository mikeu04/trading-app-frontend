import { Button, Modal, message } from 'antd';
import React, { useState } from 'react';

function Logout({ onLogout }) {
  const [displayModal, setDisplayModal] = useState(false);

  const handleCancel = () => {
    setDisplayModal(false);
  };

  const logoutOnClick = () => {
    setDisplayModal(true);
  };

  const handleLogout = () => {
    // Perform logout actions like clearing tokens, etc.
    message.success("You have been logged out");
    onLogout(); // Notify parent component about the logout
    setDisplayModal(false);
  };

  return (
    <>
      <Button shape="round" onClick={logoutOnClick} type="primary">
        Log Out
      </Button>
      <Modal
        title="Log Out"
        visible={displayModal}
        onCancel={handleCancel}
        footer={null}
        destroyOnClose={true}
      >
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <p>Are you sure you want to log out?</p>
          <Button type="primary" onClick={handleLogout}>
            Yes, Log Out
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default Logout;
