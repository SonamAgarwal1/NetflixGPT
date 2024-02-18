import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>
      <form className="w-4/12 absolute px-12 bg-black my-28 mx-auto right-0 left-0  text-white bg-opacity-80 rounded-md">
        <h1 className="text-3xl font-bold py-4 px-2 rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-lg"
            style={{ backgroundColor: "rgb(51,51,51)" }}
          />
        )}
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-4 my-4 w-full rounded-lg"
          style={{ backgroundColor: "rgb(51,51,51)" }}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-lg"
          style={{ backgroundColor: "rgb(51,51,51)" }}
        />
        <button className="p-4 my-4 bg-red-500 text-white w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignUpForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up now."
            : "Already registered? Sign In now."}
        </p>
      </form>
    </>
  );
};

export default Login;
