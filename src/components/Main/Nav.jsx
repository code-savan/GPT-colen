/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Tooltip,
  DrawerFooter,
} from "@chakra-ui/react";
import { useContext, useState } from "react";

import { CloseIcon, EditIcon } from "@chakra-ui/icons";
import { Context } from "../../context/Context";
import { assets } from "../../assets/assets";
import Changelog from "./Changelog"; 

import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";



const Nav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, loading] = useAuthState(auth);

      const {
        newChat,
    } = useContext(Context);
    const [showChangelog, setShowChangelog] = useState(false); 
    
     
    

  return (
    <nav className="nav">
      <div className="menu" onClick={onOpen}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Tooltip
        hasArrow
        label="Click to view changelog"
        bg="gray.200"
        borderRadius={"6px"}
        color="black"
        closeDelay={300}
      >
        <p onClick={() => setShowChangelog(true)} className="cursor-pointer">
          Conversio 1.1
        </p>
      </Tooltip>
      <Changelog
        isOpen={showChangelog}
        onClose={() => setShowChangelog(false)}
      />
      <img src={user ? user.photoURL : assets.user_icon} alt="" />
      <Drawer
        placement={"left"}
        size={"xs"}
        onClick={onOpen}
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader className="flex justify-end">
            <CloseIcon onClick={onClose} boxSize={4} className="mt-3" />
          </DrawerHeader>
          <DrawerBody className="px-0 p-0 m-0 drawer">
            <div
              onClick={() => {
                newChat();
                onClose();
              }}
              className="new-chat"
            >
              <div>
                <img src={assets.plus_icon} alt="" />
                <p> New Chat</p>
              </div>
              <EditIcon boxSize={5} />
            </div>

            <p className="recent">Recent</p>
          </DrawerBody>
          <DrawerFooter>
            <div className="logout" onClick={() => auth.signOut()}>
              <img src={assets.question_icon} alt="" />
              <p>Logout</p>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default Nav;
