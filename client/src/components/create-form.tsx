import { FC } from "react";

interface CreateFormProps {}

const CreateForm: FC<CreateFormProps> = () => {
  return (
    <form className="note-form">
      <input placeholder="Title" required></input>
      <textarea placeholder="Content" rows={10} required></textarea>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default CreateForm;
