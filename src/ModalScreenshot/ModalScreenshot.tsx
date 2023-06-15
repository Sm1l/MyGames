import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import { SImage, SImgContainer, SModalOverlay } from "./StylesModalScreenshot";
import { modalScreenshotVariants } from "./animationModalScreenshot";

interface ModalScreenshotProps {
  modalIsActive: boolean;
  setModalIsActive: (value: boolean) => void;
  singleScreenshot: string;
}

const ModalScreenshot: React.FC<ModalScreenshotProps> = ({ modalIsActive, setModalIsActive, singleScreenshot }) => {
  const overlayHandleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setModalIsActive(false);
  };

  //*close modal "Escape"

  useEffect(() => {
    const escCloseModal = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        console.log("listener");
        setModalIsActive(false);
      }
    };
    if (modalIsActive) {
      window.addEventListener("keydown", escCloseModal);
    }

    return () => {
      window.removeEventListener("keydown", escCloseModal);
    };
  }, [modalIsActive]);

  //! ,,??
  // useEffect(() => {
  //   modalIsActive && (document.body.style.overflow = "hidden");
  //   return () => (document.body.style.overflow = "unset");
  // }, [modalIsActive]);

  useEffect(() => {
    if (modalIsActive) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalIsActive]);

  return (
    <AnimatePresence>
      {modalIsActive && (
        <SModalOverlay
          onClick={overlayHandleClick}
          // animate={"visible"}
          // exit={"hidden"}
          // variants={modalScreenshotVariants}
          // transition={{ duration: 0.5 }}
        >
          <SImgContainer
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            variants={modalScreenshotVariants}
            transition={{ duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <SImage src={singleScreenshot} />
          </SImgContainer>
        </SModalOverlay>
      )}
    </AnimatePresence>
  );
};

export { ModalScreenshot };
