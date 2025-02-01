import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

// Create Context
export const WebinarContext = createContext();

// Provider Component
export const WebinarProvider = ({ children }) => {
  const [webinarData, setWebinarData] = useState({
    invest: null,
    investing: null,
    webinar_date_time: null,
    hindi_webinar_date_time: null,
  });

  // Fetch Webinar Data from API
  const fetchWebinarData = async () => {
    try {
      const response = await axios.get(
        "https://api.stockwiz.in/api/v2/auth/getWebinarData"
      );

      if (response?.status === 200) {
        const data = response?.data?.data;
        setWebinarData({
          invest: data?.invest || null,
          investing: data?.investing || null,
          webinar_date_time: data?.webinar_date_time || null,
          hindi_webinar_date_time: data?.hindi_webinar_date_time || null,
        });
      } else {
        console.error("Unexpected response format:", response);
      }
    } catch (error) {
      console.error("Error fetching webinar data:", error);
    }
  };

  useEffect(() => {
    fetchWebinarData();
  }, []);

  return (
    <WebinarContext.Provider value={{ webinarData, fetchWebinarData }}>
      {children}
    </WebinarContext.Provider>
  );
};

// Custom Hook (Directly Inside This File)
export const useWebinarData = () => useContext(WebinarContext);
