import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import {
  AiFillCheckCircle,
  AiFillInfoCircle,
  AiFillExclamationCircle,
} from "react-icons/ai";
import "../../styles/Alert.css";

const Alert = ({ message, type = "info", onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      if (onClose) onClose();
    }, 4000);
  };

  if (!isVisible) return null;

  const getIcon = () => {
    switch (type) {
      case "success":
        return (
          <AiFillCheckCircle
            className="text-success"
            style={{ fontSize: "1.2rem", color: "#10b981" }}
          />
        );
      case "error":
        return (
          <AiFillExclamationCircle
            className="text-danger"
            style={{ fontSize: "1.2rem", color: "#ef4444" }}
          />
        );
      default:
        return (
          <AiFillInfoCircle
            className="text-info"
            style={{ fontSize: "1.2rem", color: "#5d5dff" }}
          />
        );
    }
  };

  return (
    <div className="alert-wrapper">
      <div className={`alert-premium alert-${type}`}>
        <div className="alert-content">
          {getIcon()}
          <span>{message}</span>
        </div>
        <button className="alert-close" onClick={handleClose}>
          <IoCloseOutline />
        </button>
        <div className="alert-progress-bar"></div>
      </div>
    </div>
  );
};

export default Alert;
