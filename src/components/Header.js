import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <>
      <div className="w-full absolute py-2 px-8 bg-gradient-to-b from-black z-10 flex justify-between">
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Logo"
        />
        <div className="p-2 z-10 flex right-0">
          <img
            className="w-12 h-12"
            src="https://lh3.googleusercontent.com/a/ACg8ocLGpU8UuJ2LoUYHCCYljZ4RVTSnhsRnGO0AcB9Rs98T31B5=s432-c-no"
            alt="userImage"
          />
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
