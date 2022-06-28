import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequiredAuth from "./Component/RequiredAuth";

import DashBoard from "./Feature/DashBoard";
import SignInForm from "./Feature/SignInForm";
import SignUpForm from "./Feature/SignUpForm";
import UserProfile from "./Feature/UserProfile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <DashBoard />
            </RequiredAuth>
          }
        />
        <Route
          path="/user"
          element={
            <RequiredAuth>
              <UserProfile />
            </RequiredAuth>
          }
        />
        <Route path="signIn" element={<SignInForm />} />
        <Route path="signUp" element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
