import { customStore } from "./useStore";

let authState = localStorage.getItem("auth");

if (!authState) {
  authState = false;
  localStorage.setItem("auth", authState);
} else {
  authState = authState === "true";
}

export default customStore(
  { authState },
  {
    signIn(state) {
      state.authState = true;
      localStorage.setItem("auth", true);
    },
    signOut(state) {
      state.authState = false;
      localStorage.setItem("auth", false);
    },
  }
);
