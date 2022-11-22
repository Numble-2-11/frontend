import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import xIcon from "../images/xIcon.svg";
import arrow_left from "../images/arrow_left.svg";
import Title from "./styled-component/Title";

const Head = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0")};
`;

export default function Header({ children, marginBottom }) {
  const navigate = useNavigate();

  return (
    <Head marginBottom={marginBottom}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "2rem 0",
          width: "100%",
        }}
      >
        <img
          src={arrow_left}
          onClick={() => navigate(-1)}
          style={{
            width: "2.2rem",
            height: "1.8rem",
            cursor: "pointer",
            marginRight: "1rem",
          }}
        />
        <Title children={children} />
      </div>
      <Link to="/">
        <img
          src={xIcon}
          style={{ cursor: "pointer", width: "1.6rem", height: "1.6rem" }}
        />
      </Link>
    </Head>
  );
}
