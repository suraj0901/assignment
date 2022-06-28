// const validEmail =
export const isEmailValid = (email) =>
  /(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
    email
  );

// const validPassword =
//  ;
export const isPasswordValid = (password) =>
  /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$#!%*?&]{8,}$/.test(
    password
  );

export const isNameValid = (name) => name.trim() !== "";

export const isGenderValid = (gender) => ["male", "female"].includes(gender);
export const isContactValid = (number) => /\d{10}$/.test(number);
