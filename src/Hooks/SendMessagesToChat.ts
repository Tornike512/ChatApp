import axios from "axios";
import { useState, useEffect } from "react";

export const SendMessagesToChat = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/messages`);

      setMessages(response.data);
    } catch (error) {
      console.log("Error Sending Message To The Chat", error);
    }
  };

  useEffect(() => {
    sendMessage();
  }, []);

  return { messages };
};
