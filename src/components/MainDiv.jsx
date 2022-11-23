import styled from 'styled-components';

const StyledDiv = styled.div`
	background-color: #272a33;
	display: flex;
	flex-wrap: wrap;
	padding: 0.5rem 2rem;
	width: 100%;
	border-radius: 0.5rem;
	justify-content: space-between;
	align-items: center;
	a {
		width: 7rem;
		display: flex;
		margin: 0.7rem 0;
		flex-direction: column;
		img {
			margin: auto;
			width: 3.5rem;
			margin-bottom: 0.2rem;
		}
		div {
		}
	}
`;

export default function MainDiv({ children, marginBottom }) {
	return <StyledDiv children={children}></StyledDiv>;
}
