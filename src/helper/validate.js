import { toast } from "react-hot-toast";

/** validate login page username */
export async function usernameValidate(values) {
  const errors = usernameVarify({}, values);
  return errors;
}

/** validate password */
export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);
  return errors;
}

/** verify password */
function passwordVerify(errors = {}, values) {
  const specialChars = /[`!@#$%^&*()_+-=\[\]{}; ':"\\|,.<>\/?~]/;

  if (!values.password) {
    errors.password = toast.error("Password Required");
  } else if (values.password.includes(" ")) {
    errors.password = toast.error("Wrong Password");
  } else if (values.password.length < 4) {
    errors.password = toast.error(
      "Password must be more then 4 characters long"
    );
  } else if (!specialChars.test(values.password)) {
    errors.password = toast.error("Password must have special characters");
  }
  return errors;
}

/** validate reset password */
export async function resetPasswordValidation(values) {
  const errors = passwordVerify({}, values);

  if (values.password !== values.confirm_password) {
    errors.exist = toast.error("Password not match");
  }

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
