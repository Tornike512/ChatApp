import axios from "axios";
import { useState, useEffect } from "react";

interface TAllUsers {
  username: string;
  userImage: string;
}

export const ReceiveAllUsers = () => {
  const [allUsernames, setAllUsernames] = useState<TAllUsers[]>([]);

  const getAllUsers = async () => {
    try {
      const response = await axios.get(
        "https://chatapp-backend-3-uo3h.onrender.com/all-users"
      );

      setAllUsernames(response.data);
    } catch (error) {
      console.log("Error receiving all users", error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return { allUsernames };
};
