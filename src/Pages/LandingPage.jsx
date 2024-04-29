/* eslint-disable no-unused-vars */
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const LandingPage = () => {
    const [user, setUser] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    
    

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);
    
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 600);
      };

      // Add event listener for window resize
      window.addEventListener("resize", handleResize);

      // Call handleResize once initially to set the initial state
      handleResize();

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  const googleProvider = new GoogleAuthProvider();

  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
      setUser(result.user);
      window.location.href = "/prompt";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-green-200  to-blue-200 land">
      <nav className="md:py-8 md:px-16 py-3 px-6 justify-between w-full items-center hidden md:flex">
        <Link to="/">
          <img src={assets.logo} alt="logo" className="size-12" />
        </Link>

        <div className="">
          <button className="cta" onClick={GoogleLogin}>
            <span>Get Started</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </div>
      </nav>

      <div className="w-full text-center">
        <img
          src={assets.logo}
          alt="logo"
          className="w-28 mx-auto md:hidden mt-24"
        />
        <p className=" font-poppins font-bold text-slate-800 leading-snug text-[23px] md:text-[50px] md:mt-24 mt-10">
          Welcome to
          <span className="intro-highlight"> Conversio</span>
          <br />
          Empowering Conversations <br className="md:hidden" /> with AI
        </p>
        <div className="w-[120px] border border-solid border-slate-900 h-[2px] bg-slate-900 mx-auto my-2 md:my-6 rounded-full hidden md:block" />
        <p className=" text-slate-600 font-poppins font-normal text-[18px] mt-4 w-[60%] mx-auto hidden md:block">
          Redefining the Landscape of Conversational AI with Cutting-Edge
          Technology, Building on the Foundation of Gemini&apos;s Unrivaled
          Expertise in Natural Language Processing and Dialogue Generation. Join
          us as we revolutionize communication through AI Innovations.
        </p>
        <p className="md:hidden text-slate-600 font-poppins font-normal text-[15px] mt-4">
          Transforming Conversational AI with Gemini&apos;s Expertise.
          Revolutionizing communication through innovation. Join us in
          pioneering the future.
        </p>
      </div>
      <div className="w-full md:flex justify-center mt-8 md:space-x-10">
        <button
          className="flex space-x-2 items-center py-3 md:py-2 px-6 rounded-lg font-poppins font-medium bg-transparent shadow-lg backdrop-blur-md hover:scale-105 transition mx-auto md:mx-0 mb-3 md:mb-0"
          onClick={GoogleLogin}
        >
          <img src={assets.google} className="size-[25px]" alt="google" />
          <p>Sign in with your Google account</p>
        </button>

        <button
          className="flex space-x-2 items-center py-3 md:py-2 px-6 rounded-lg font-poppins font-medium bg-transparent shadow-lg backdrop-blur-md hover:scale-105 transition mx-auto md:mx-0"
          onClick={GoogleLogin}
        >
          {isMobile ? (
              <img src={assets.mobile_mail} className="size-[25px]" alt="mail" />
            ) : (
              <img src={assets.mail} className="size-[25px]" alt="mail" />
          )}
          <p>Sign in with Email</p>
        </button>
      </div>
      <br />
    </div>
  );
};

export default LandingPage;
