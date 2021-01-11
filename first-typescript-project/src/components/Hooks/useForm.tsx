import { useState } from "react";

export const useForm: <T>(
  x: T
) => [
  T,
  (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void
] = (initialvalues) => {
  const [values, setValues] = useState(initialvalues);
  return [
    values,
    (e) => setValues({ ...values, [e.target.name]: e.target.value }),
  ];
};
