/* eslint-disable react/prop-types */

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const Changelog = ({ isOpen, onClose }) => {
    const OverlayTwo = () => (
      <ModalOverlay
        bg="none"
        backdropFilter="auto"
        backdropInvert="80%"
        backdropBlur="2px"
      />
    );

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"xs"} isCentered>
      <OverlayTwo />
      <ModalContent className="bg-white">
        <ModalHeader className="bg-white">Changelog</ModalHeader>
        <ModalCloseButton />
        <ModalBody className="bg-white">
          {/* Your changelog content goes here */}
          <p>Changelog Loading...</p>
        </ModalBody>

        <ModalFooter className="bg-white">
          <button onClick={onClose}>Close</button>
          {/* Add secondary action button if needed */}
          {/* <button>Secondary Action</button> */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Changelog;
