import axios from "axios";

export const CreateNewUser = async (username: string, userImage: string) => {
  const user = {
    name: username,
    image: userImage,
  };

  try {
    const response = await axios.post("http://localhost:5000/user", user);
    console.log(response.data);
  } catch (error) {
    console.log("Error Creating a New User", error);
  }
};
