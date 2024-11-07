import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const useSocket = (url = "http://localhost:5000") => {
  const [socket, setSocket] = useState<string>("");

  useEffect(() => {
    const socketConnection: any = io(url);
    setSocket(socketConnection);

    return () => {
      socketConnection.disconnect();
    };
  }, [url]);

  return socket;
};

export default useSocket;
