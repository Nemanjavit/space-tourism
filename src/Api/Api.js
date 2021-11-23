import axios from "axios";

export const getData = async () => {
  const data = await axios.get(
    "https://raw.githubusercontent.com/Nemanjavit/crud/main/data.json"
  );

  return data;
};
