import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const CreateNewUser = async (username: string, userImage: string) => {
  const user = {
    name: username,
    image: userImage,
    id: uuidv4(),
  };

  try {
    const response = await axios.post(
      "https://chatapp-backend-dgge.onrender.com/user",
      user
    );
    console.log(response.data);
  } catch (error) {
    console.log("Error Creating a New User", error);
  }
};
