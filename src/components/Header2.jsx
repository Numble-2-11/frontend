import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import searchIcon from "../images/search.svg";
import arrow_left from "../images/arrow_left.svg";
import Title from "./styled-component/Title";

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5rem 0 2.5rem 0;
`;

export default function Header2({ children, search, marginBottom }) {
  const navigate = useNavigate();

  return (
    <Head marginBottom={marginBottom}>
      <img
        src={arrow_left}
        onClick={() => navigate(-1)}
        style={{ width: "2.2rem", height: "1.8rem", cursor: "pointer" }}
      />
      <Title children={children} />
      {search ? (
        <img
          src={searchIcon}
          style={{ width: "2.2rem", height: "2.2rem", cursor: "pointer" }}
        />
      ) : (
        <div style={{ width: "2.2rem", height: "2.2rem" }} />
      )}
    </Head>
  );
}
