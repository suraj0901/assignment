import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import useInput from "../hooks/useInput";
import { isEmailValid, isPasswordValid } from "./validate";

export default function SignInForm() {
  const setIsAuthenticated = useAuthContext(false)[1];
  const navigate = useNavigate();
  const {
    value: emailValue,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlureHandler,
    reset: resetEmail,
  } = useInput(isEmailValid);
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    valueChangeHandler: passwordChangeHandler,
    hasError: passwordHasError,
    inputBlurHandler: passwordBlureHandler,
    reset: resetPassword,
  } = useInput(isPasswordValid);

  const resetAll = () => {
    resetPassword();
    resetEmail();
  };

  const formValid = passwordIsValid && emailIsValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValid) return;
    resetAll();
    setIsAuthenticated(1);
    navigate("/", { replace: true });
  };
  return (
    <form onSubmit={handleSubmit}>
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
            small alphabates, numbers, special characters(#!%$@).
          </p>
        )}
      </section>
      <section>
        <button type="submit" disabled={!formValid}>
          Submit
        </button>
      </section>
      <Link to="/signup">SignUp</Link>
    </form>
  );
}
