import React, { useEffect } from "react";
import { ReactComponent as CheckConfirm } from "../../assets/images/icons/check-confirm.svg";
import { Container } from "./styles";

interface IPropsDTO {
  isOpen: boolean;
  message: string;
  onClose: any;
}

const Notification = ({ isOpen, message, onClose }: IPropsDTO) => {
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        onClose(false);
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <Container data-testid="notification-component">
          <CheckConfirm />
          <label>{message}</label>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
};

export default Notification;
