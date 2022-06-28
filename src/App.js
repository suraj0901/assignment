import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequiredAuth from "./Component/RequiredAuth";

import DashBoard from "./Feature/DashBoard";
import SignInForm from "./Feature/SignInForm";
import SignUpForm from "./Feature/SignUpForm";
import UserProfile from "./Feature/UserProfile";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "./Component/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Layout />
            </RequiredAuth>
          }
        >
          <Route path="/" element={<DashBoard />} />
          <Route path="/userProfile/:userId" element={<UserProfile />} />
        </Route>
        <Route path="signIn" element={<SignInForm />} />
        <Route path="signUp" element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
