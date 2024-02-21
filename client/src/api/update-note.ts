import api from "./";

import { NoteType } from "@/App";

export const updateNote = async (noteFormData: NoteType) => {
  const response = await api.put(`/${noteFormData.id}`, {
    title: noteFormData.title,
    content: noteFormData.content,
    priority: noteFormData.priority,
  });
  if (response.status !== 200) {
    throw new Error("An error occurred while updating your note");
  }

  return response.data;
};
