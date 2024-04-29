import Loader from "../components/Loader";
import Main from "../components/Main/Main";
import Sidebar from "../components/Sidebar/Sidebar";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Prompt = () => {
  const [user, loading] = useAuthState(auth);

  if (!user && !loading) {
    window.location.href = "/";
  }

  if (loading) {
    return (
      <Loader />
    );
  }

  if (user) {
    console.log(user);
    // console.log(user.displayName);
    // console.log(user.photoURL);

    return (
      <>
        <Sidebar />
        <Main user={user} />
      </>
    );
  }
};

export default Prompt;
