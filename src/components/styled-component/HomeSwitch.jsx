import styled from 'styled-components';

const StyledSwitch = styled.div`
	display: flex;
  position fixed;
	margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 2rem;
	width: 15rem;
  align-items: center;
  justify-content: space-between;
	height: 4rem;
	border-radius: 2rem;
	background-color: #272a33;
  padding: 0.6rem;
  div {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      ${(props) =>
				props.direction == 'left' ? 'margin-left: 1rem' : 'margin-right: 1rem'};
    }
  }
`;

export default function HomeSwitch({ children, direction }) {
	return (
		<StyledSwitch children={children} direction={direction}></StyledSwitch>
	);
}
