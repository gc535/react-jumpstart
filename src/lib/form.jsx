import { useState } from "react";

const useForm = (initialState) => {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    (event) => setValues({...fields, [event.target.id]: event.target.value})
  ]
}
export default useForm;