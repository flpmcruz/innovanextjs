import * as yup from "yup";
import { phone as phoneValidator } from "phone";

export const schemaContact = yup
  .object({
    name: yup
      .string()
      .min(3, "Name too Short!")
      .max(50, "Name too Long!")
      .required("Name is Required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    phone: yup
      .string()
      .required("Phone is required")
      .test("custom", "Phone is not valid", (value, ctx) => {
        if (phoneValidator(`${value}`).isValid) return true;
        else return false;
      }),
    message: yup
      .string()
      .min(10, "Message too Short!")
      .max(500, "Message too Long!")
      .required("Message is Required"),
  })
  .required();
