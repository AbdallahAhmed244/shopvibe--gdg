import React, { useEffect } from "react";

const Toast = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      backgroundColor: "#333",
      color: "white",
      padding: "12px 20px",
      borderRadius: "6px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
      zIndex: 1000,
    }}>
      {message}
    </div>
  );
};

export default Toast;
