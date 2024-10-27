import axios from "axios";
import { useState, useEffect } from "react";
import { User } from "@app/Types/Types";

export const ReceiveUserByName = (username: string) => {
  const [user, setUser] = useState<User>({ username: "", userImage: "" });

  const getUser = async () => {
    try {
      const response = await axios.get(
        `https://chatapp-backend-dgge.onrender.com/user?username=${username}`
      );

      setUser(response.data);
    } catch (error) {
      console.log("Error Receiving User By Name", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return { user };
};
