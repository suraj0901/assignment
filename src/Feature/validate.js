const validEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export const isEmailValid = (email) => validEmail.test(email);

const validPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const isPasswordValid = (password) => validPassword.test(password);

export const isNameValid = (name) => name.trim() !== "";

export const isGenderValid = (gender) => ["male", "female"].includes(gender);
export const isContactValid = (number) => /\d{10}$/.test(number);
