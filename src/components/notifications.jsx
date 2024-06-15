import React from 'react';
import { useNotifications } from './contexts/Notification';

const NotificationList = () => {
  const { notifications } = useNotifications();

  return (
    <div className="notification-list">
      {notifications.map((notification) => (
        <div key={notification._id} className="notification-item">
          {notification.type === 'like' && <p>Someone liked your post</p>}
          {notification.type === 'comment' && <p>Someone commented on your post</p>}
          {notification.type === 'follow' && <p>Someone followed you</p>}
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
