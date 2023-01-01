import { toast } from "react-hot-toast";

/** validate login page username */
export async function usernameValidate(values) {
  const errors = usernameVarify({}, values);
  return errors;
}

/** validate username */
function usernameVarify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username Required");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username");
  }
  return error;
}
