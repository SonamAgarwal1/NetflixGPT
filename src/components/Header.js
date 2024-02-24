import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in or sign up
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGPTSearchClick = () => {};
  return (
    <>
      <div className="w-full absolute py-2 px-8 bg-gradient-to-b from-black z-50 flex justify-between">
        <img className="w-44 z-20" src={LOGO} alt="Logo" />
        {user && (
          <div className="p-2 z-10 flex right-0">
            <button
              className="bg-white text-black text-lg rounded-lg mb-4 mt-2 px-2"
              onClick={handleGPTSearchClick}
            >
              GPT Search
            </button>
            <img
              className="w-12 h-12 p-2"
              src={user?.photoURL}
              alt="userImage"
            />
            <button className="font-bold text-white" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
