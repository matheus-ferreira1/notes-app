import api from "./";

export const createNote = async (noteFormData: any) => {
  const response = await api.post("/", noteFormData);
  if (response.status !== 201) {
    throw new Error("An error occurred while fetching notes");
  }
  console.log(response);

  return response.data;
};
