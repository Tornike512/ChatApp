import axios from "axios";
import { useState, useEffect } from "react";

interface TAllUsers {
  username: string;
}

export const ReceiveAllUsers = () => {
  const [allUsernames, setAllUsernames] = useState<TAllUsers[]>([]);
  const getAllUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/all-users");
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
