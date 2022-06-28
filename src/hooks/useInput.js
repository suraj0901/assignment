import { useState } from "react";

export default (validateValue = () => true) => {
  const [enteredValue, setEneteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValueValid = validateValue(enteredValue);
  const hasError = !isValueValid && isTouched;

  const valueChangeHandler = (e) => setEneteredValue(e.target.value);
  const inputBlurHandler = (e) => setIsTouched(true);

  const reset = () => {
    setEneteredValue("");
    setIsTouched(false);
  };
  return {
    value: enteredValue,
    isValid: isValueValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
