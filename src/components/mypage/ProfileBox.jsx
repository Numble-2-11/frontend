import React from "react";
import styled from "styled-components";
import editBtn from "../../images/editBtn.png";

const StyledBox = styled.div`
  width: 100%;
  background-color: #272a33;
  border-radius: 1.6rem;
  padding: 1.4rem;
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 1.6rem;
`;

const StyledProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: 0.7;
`;

const StyledProfileContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  padding: 2rem 0 3rem 0;
`;

export default function ProfileBox({ profileTitle, children }) {
  return (
    <StyledBox>
      <StyledProfileHeader>
        <div>{profileTitle} </div>
        <img src={editBtn} />
      </StyledProfileHeader>
      <StyledProfileContent>{children}</StyledProfileContent>
    </StyledBox>
  );
}
