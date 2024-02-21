import api from "./";

export const deleteNote = async (noteFormData: any) => {
  const response = await api.delete(`/${noteFormData.id}`);
  if (response.status !== 204) {
    throw new Error("An error occurred while deleting note");
  }

  return response.data;
};
