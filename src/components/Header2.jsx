import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import searchIcon from "../images/search.svg";
import arrow_left from "../images/arrow_left.svg";
import Title from "./styled-component/Title";
import GrayButton from "./posting/GrayButton.jsx";

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5rem 0 2.5rem 0;
  flex: 1;
`;

export default function Header2({ children, search, marginBottom, store }) {
  const navigate = useNavigate();

  return (
    <Head marginBottom={marginBottom}>
      <img
        src={arrow_left}
        onClick={() => navigate(-1)}
        style={{
          width: "2.2rem",
          marginRight: store ? "2.1rem" : "0",
          height: "1.8rem",
          cursor: "pointer",
        }}
      />
      <Title children={children} />
      {search ? (
        <img
          src={searchIcon}
          style={{ width: "2.2rem", height: "2.2rem", cursor: "pointer" }}
        />
      ) : (
        ""
      )}
      {store ? <GrayButton children={"저장"} margin={"0"} /> : ""}
      {!search && !store ? (
        <div style={{ width: "2.2rem", height: "2.2rem" }} />
      ) : (
        ""
      )}
    </Head>
  );
}
