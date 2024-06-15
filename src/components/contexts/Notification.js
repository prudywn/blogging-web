// NotificationContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const NotificationContext = createContext();

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const [lastNotified, setLastNotified] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      const response = await axios.get('/api/notifications');
      setNotifications(response.data);
      
      if (lastNotified) {
        const newNotifications = response.data.filter(
          notification => new Date(notification.createdAt) > new Date(lastNotified)
        );
        newNotifications.forEach(notification => {
          alertNotification(notification);
        });
      }
      
      if (response.data.length > 0) {
        setLastNotified(response.data[0].createdAt);
      }
    };

    fetchNotifications();
    const interval = setInterval(fetchNotifications, 5000); // Poll every 5 seconds

    return () => clearInterval(interval);
  }, [lastNotified]);

  const alertNotification = (notification) => {
    if (notification.type === 'like') {
      alert('Someone liked your post');
    } else if (notification.type === 'comment') {
      alert('Someone commented on your post');
    } else if (notification.type === 'follow') {
      alert('Someone followed you');
    }
  };

  return (
    <NotificationContext.Provider value={{ notifications, setNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
};
