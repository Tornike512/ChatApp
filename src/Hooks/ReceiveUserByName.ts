import axios from "axios";
import { useState, useEffect } from "react";

interface User {
  username: string;
  userImage: string;
}

export const ReceiveUserByName = (username: string) => {
  const [user, setUser] = useState<User>({ username: "", userImage: "" });

  const getUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/user?username=${username}`
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
