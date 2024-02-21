import api from "./";

export const getNotes = async () => {
  const response = await api.get("/");
  if (response.status !== 200) {
    throw new Error("An error occurred while fetching notes");
  }

  return response.data;
};
