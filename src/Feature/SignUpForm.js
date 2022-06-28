import { Link, useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import {
  isContactValid,
  isEmailValid,
  isGenderValid,
  isNameValid,
  isPasswordValid,
} from "./validate";

export default function SignUpForm() {
  const {
    value: nameValue,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlureHandler,
    hasError: nameHasError,
    reset: resetName,
  } = useInput(isNameValid);
  const {
    value: emailValue,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlureHandler,
    hasError: emailHasError,
    reset: resetEmail,
  } = useInput(isEmailValid);
  const {
    value: numberValue,
    isValid: numberIsValid,
    valueChangeHandler: numberChangeHandler,
    inputBlurHandler: numberBlureHandler,
    hasError: numberHasError,
    reset: resetNumber,
  } = useInput(isContactValid);
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlureHandler,
    hasError: passwordHasError,
    reset: resetPassword,
  } = useInput(isPasswordValid);
  const {
    value: genderValue,
    isValid: genderIsValid,
    valueChangeHandler: genderChangeHandler,
    hasError: genderHasError,
    reset: resetGender,
  } = useInput(isGenderValid);

  const resetAll = () => {
    resetGender();
    resetPassword();
    resetName();
    resetNumber();
    resetEmail();
  };

  const formValid =
    nameIsValid &&
    passwordIsValid &&
    emailIsValid &&
    numberIsValid &&
    genderIsValid;
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValid) return;
    resetAll();
    navigate("/signin", { replace: true });
  };
  return (
    <form onSubmit={handleSubmit}>
      <section>
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          id="name"
          required
          value={nameValue}
          onInput={nameChangeHandler}
          onBlur={nameBlureHandler}
        />
        {nameHasError && <p>Name should include only alphabates and spaces</p>}
      </section>
      <section>
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          id="email"
          required
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlureHandler}
        />
      </section>
      <section>
        <label htmlFor="contact">Contact Number : </label>
        <input
          type="number"
          id="contact"
          value={numberValue}
          required
          onChange={numberChangeHandler}
          onBlur={numberBlureHandler}
        />
        {numberHasError && <p>Contanct number should be 10 digits</p>}
      </section>
      <section>
        <label>Gender : </label>
        <section>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            onChange={genderChangeHandler}
          />
          <label htmlFor="male">Male</label>
        </section>
        <section>
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            onChange={genderChangeHandler}
          />
          <label htmlFor="female">Female</label>
        </section>
        {genderHasError && <p>Select a gender</p>}
      </section>
      <section>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={passwordValue}
          required
          onChange={passwordChangeHandler}
          onBlur={passwordBlureHandler}
        />
        {passwordHasError && (
          <p>
            Password should be atleast 8 character combination of capital and
            small alphabates, numbers, special characters(#!%$@)
          </p>
        )}
      </section>
      <section>
        <button type="submit" disabled={!formValid}>
          Submit
        </button>
      </section>
      <Link to="/signin">SignIn</Link>
    </form>
  );
}
