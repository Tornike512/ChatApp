import axios from "axios";

export const CreateNewUser = async (username: string, userImage: string) => {
  const user = {
    name: username,
    image: userImage,
  };

  try {
    const response = await axios.post(
      "https://chatapp-backend-3-uo3h.onrender.com/user",
      user
    );
    console.log(response.data);
  } catch (error) {
    console.log("Error Creating a New User", error);
  }
};
