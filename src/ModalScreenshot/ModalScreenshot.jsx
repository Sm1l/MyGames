import React, { useEffect } from "react";

import { SImage, SImgContainer, SModalOverlay } from "./StylesModalScreenshot";

interface ModalScreenshotProps {
  modalIsActive: boolean;
  setModalIsActive: (value: boolean) => void;
  singleScreenshot: string;
}

const ModalScreenshot: React.FC<ModalScreenshotProps> = ({ modalIsActive, setModalIsActive, singleScreenshot }) => {
  const overlayHandleClick = (e: any) => {
    e.stopPropagation();
    setModalIsActive(false);
  };

  //*close modal "Escape"

  useEffect(() => {
    const escCloseModal = (e: any) => {
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

  //! useEffect with return??
  useEffect(() => {
    modalIsActive && (document.body.style.overflow = "hidden");
    return () => (document.body.style.overflow = "unset");
  }, [modalIsActive]);

  return (
    <SModalOverlay onClick={overlayHandleClick}>
      <SImgContainer onClick={(e) => e.stopPropagation()}>
        <SImage src={singleScreenshot} />
      </SImgContainer>
    </SModalOverlay>
  );
};

export { ModalScreenshot };
