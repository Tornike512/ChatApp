import axios from "axios";
import { useState, useEffect } from "react";
import { UserType } from "@app/Types/Types";

export const ReceiveUserByName = (username: string) => {
  const [user, setUser] = useState<UserType>({ username: "", userImage: "" });

  const getUser = async () => {
    try {
      const response = await axios.get(
        `https://new-peuc.onrender.com/user?username=${username}`
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
