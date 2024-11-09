import { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";

const useSocket = (url = "https://new-peuc.onrender.com") => {
  const [socket, setSocket] = useState<Socket | null>(null);

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
