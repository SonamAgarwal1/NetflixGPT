import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import lang from "../utils/languageConstants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const langKey = useSelector((store) => store.config?.lang);
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);

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

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e?.target?.value));
  };
  return (
    <>
      <div className="w-full absolute py-2 px-8 bg-gradient-to-b from-black z-50 flex justify-between flex-col md:flex-row">
        <img
          className="w-32 md:w-44 z-20 mx-auto md:mx-0"
          src={LOGO}
          alt="Logo"
        />
        {user && (
          <div className="p-2 z-10 flex right-0 justify-between">
            <select
              className="p-2 mt-2 mb-4 mx-2 rounded-lg opacity-50 md:text-lg text-sm"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE?.map((lang) => (
                <option key={lang?.identifier} value={lang?.identifier}>
                  {lang?.name}
                </option>
              ))}
            </select>
            <button
              className="bg-white text-black text-sm md:text-lg rounded-lg mb-4 mt-2 px-2"
              onClick={handleGPTSearchClick}
            >
              {showGptSearch
                ? lang[langKey]?.homePage
                : lang[langKey]?.gptSearch}
            </button>
            <img
              className="w-0 h-0 px-2 md:p-2 md:visible md:w-12 md:h-12 "
              src={user?.photoURL}
              alt="userImage"
            />
            <button
              className="font-bold text-white text-sm md:text-lg"
              onClick={handleSignOut}
            >
              {lang[langKey]?.signOut}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
