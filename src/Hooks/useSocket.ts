import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const useSocket = (url, options = {}) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketConnection = io(url, options);
    setSocket(socketConnection);

    return () => {
      socketConnection.disconnect();
    };
  }, [url, options]);

  return socket;
};

export default useSocket;
