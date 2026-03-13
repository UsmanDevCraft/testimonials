import { createContext, useContext, useState, useCallback } from "react";
import Alert from "../components/shared/Alert";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alertData, setAlertData] = useState(null);

  const showAlert = useCallback((message, type = "info") => {
    setAlertData({ message, type });
  }, []);

  const hideAlert = useCallback(() => {
    setAlertData(null);
  }, []);

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alertData && (
        <Alert
          message={alertData.message}
          type={alertData.type}
          onClose={hideAlert}
        />
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
