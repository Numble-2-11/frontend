import React from "react";
import styled from "styled-components";

const DialogBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DialogBox = styled.div`
  background: #fff;
  border-radius: 0.6rem;
`;

const Title = styled.div`
  color: black;
  font-size: 1.3rem;
  padding: 2rem 5.5rem;
  border-bottom: 1px solid #cfcfcf;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.div`
  color: black;
  width: 50%;
  height: 100%;
  font-size: 1.1rem;
  padding: 1.2rem 0;
  cursor: pointer;
`;

export default function Dialog({ title, setIsWithdraw, setIsLogout }) {
  const handleClick = () => {
    if (setIsWithdraw) {
      setIsWithdraw(false);
    }
    if (setIsLogout) {
      setIsLogout(false);
    }
  };

  return (
    <DialogBackground>
      <DialogBox>
        <Title>{title}</Title>
        <ButtonGroup>
          <Button
            style={{ borderRight: "1px solid #CFCFCF" }}
            onClick={handleClick}
          >
            아니오
          </Button>
          <Button>예</Button>
        </ButtonGroup>
      </DialogBox>
    </DialogBackground>
  );
}
