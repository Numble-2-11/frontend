import styled from "styled-components";
import Title from "./styled-component/Title.jsx";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Head = styled.div`
  display: flex;
  align-items: center;
`;

export default function Header({ children }) {
  const navigate = useNavigate();

  return (
    <Head>
      <IoIosArrowBack
        size="2.4rem"
        onClick={() => navigate(-1)}
        style={{ cursor: "pointer" }}
      />
      <Title children={children} />
    </Head>
  );
}
