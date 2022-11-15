import styled from "styled-components";
import Title from "./styled-component/Title.jsx";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Head = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "0")};
`;

export default function Header({ children, marginBottom }) {
  const navigate = useNavigate();

  return (
    <Head marginBottom={marginBottom}>
      <IoIosArrowBack
        size="2.4rem"
        onClick={() => navigate(-1)}
        style={{ cursor: "pointer" }}
      />
      <Title children={children} />
    </Head>
  );
}
