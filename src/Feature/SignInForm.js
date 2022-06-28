import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useInput from "../hooks/useInput";
import { isEmailValid, isPasswordValid } from "./validate";

export default function SignInForm() {
  const { signIn } = useAuth(false)[1];
  const navigate = useNavigate();
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
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
    signIn();
    navigate("/", { replace: true });
  };
  return (
    <div className="container shadow-sm p-3 mt-5 bg-body rounded">
      <form className="row gy-2" onSubmit={handleSubmit}>
        <section>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="form-control"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlureHandler}
          />
          {emailHasError && (
            <p className="form-text text-danger">Provide a valid email.</p>
          )}
        </section>
        <section>
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={passwordValue}
            required
            className="form-control"
            onChange={passwordChangeHandler}
            onBlur={passwordBlureHandler}
          />
          {passwordHasError && (
            <p className="form-text text-danger">
              Password should be atleast 8 character combination of capital and
              small alphabates, numbers, special characters(#!%$@).
            </p>
          )}
        </section>
        <section className="d-flex ">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!formValid}
          >
            Submit
          </button>
          <Link className="nav-link " to="/signup">
            SignUp
          </Link>
        </section>
      </form>
    </div>
  );
}
