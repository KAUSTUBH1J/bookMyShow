import React, { useState, useEffect } from "react";

const Notification = ({ type, text, onRemove }) => {
  const alerts = {
    info: {
      icon: (
        <svg
          className="w-6 h-6 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "bg-blue-500",
    },
    error: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "bg-red-500",
    },
    warning: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
      color: "bg-yellow-500",
    },
    success: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      color: "bg-green-500",
    },
  };

  return (
    <div
      className={`relative flex items-center ${alerts[type].color} text-white text-sm font-bold px-4 py-3 rounded-md opacity-0 transform transition-all duration-500 mb-1`}
      style={{ animation: "fadeInOut 5.7s forwards" }}
    >
      asdfsadf
      {alerts[type].icon}
      <p>{text}</p>
      <button
        onClick={onRemove}
        className="ml-auto bg-transparent text-white hover:text-gray-200"
      >
        ✖
      </button>
    </div>
  );
};

const Notifications = ({ addNotification }) => {
  const [notifications, setNotifications] = useState([]);

  const sendNotification = (type, text) => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, type, text }]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 5700);
  };

  useEffect(() => {
    if (addNotification) {
      addNotification(sendNotification);
    }
  }, [addNotification]);

  return (
    <div className="notification-box fixed w-full z-50 p-3">
      {notifications.map((n) => (
        <Notification
          key={n.id}
          type={n.type}
          text={n.text}
          onRemove={() =>
            setNotifications((prev) => prev.filter((notif) => notif.id !== n.id))
          }
        />
      ))}
    </div>
  );
};

export default Notifications;
