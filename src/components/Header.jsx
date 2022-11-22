import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, Link } from "react-router-dom";
import xIcon from "../images/xIcon.svg";
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
      <div style={{ display: "flex", margin: "2rem 0", width: "100%" }}>
        <IoIosArrowBack
          size="2.4rem"
          onClick={() => navigate(-1)}
          style={{ cursor: "pointer", marginRight: "1rem" }}
        />
        <Title children={children} />
      </div>
      <Link to="/">
        <img src={xIcon} style={{ cursor: "pointer" }} />
      </Link>
    </Head>
  );
}
