import { Link, useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import {
  isContactValid,
  isEmailValid,
  isGenderValid,
  isNameValid,
  isPasswordValid,
} from "../Component/validate";

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
    <div className="container shadow-sm p-3 mt-5 bg-body rounded">
      <form className="row gy-2" onSubmit={handleSubmit}>
        <section>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            className="form-control"
            value={nameValue}
            onInput={nameChangeHandler}
            onBlur={nameBlureHandler}
          />
          {nameHasError && (
            <p className="form-text text-danger">
              Provide a valid name (should include only alphabates and spaces).
            </p>
          )}
        </section>
        <section>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            required
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlureHandler}
          />
          {emailHasError && (
            <p className="form-text text-danger">Provide a valid email.</p>
          )}
        </section>
        <section>
          <label htmlFor="contact" className="form-label">
            Contact Number
          </label>
          <input
            type="number"
            id="contact"
            className="form-control"
            value={numberValue}
            required
            onChange={numberChangeHandler}
            onBlur={numberBlureHandler}
          />
          {numberHasError && (
            <p className="form-text text-danger">
              Contanct number should be 10 digits
            </p>
          )}
        </section>
        <section>
          <label className="form-label">Gender : </label>
          <section className="form-check">
            <input
              type="radio"
              name="gender"
              id="male"
              className="form-check-input"
              value="male"
              onChange={genderChangeHandler}
            />
            <label htmlFor="male" className="form-label">
              Male
            </label>
          </section>
          <section className="form-check">
            <input
              type="radio"
              name="gender"
              id="female"
              className="form-check-input"
              value="female"
              onChange={genderChangeHandler}
            />
            <label htmlFor="female" className="form-label">
              Female
            </label>
          </section>
          {genderHasError && (
            <p className="form-text text-danger">Select a gender</p>
          )}
        </section>
        <section>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={passwordValue}
            required
            onChange={passwordChangeHandler}
            onBlur={passwordBlureHandler}
          />
          {passwordHasError && (
            <p className="form-text text-danger">
              Password should be atleast 8 character combination of capital and
              small alphabates, numbers, special characters(#!%$@)
            </p>
          )}
        </section>
        <section className="d-flex">
          <button
            type="submit"
            className={`btn ${formValid ? "btn-primary" : "btn-secondary"} `}
            disabled={!formValid}
          >
            Submit
          </button>
          <Link to="/signin" className="nav-link">
            SignIn
          </Link>
        </section>
      </form>
    </div>
  );
}
