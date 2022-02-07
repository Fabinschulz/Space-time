import styled from 'styled-components';

const LoginContainerStyled = styled.main`
	position: relative;
	height: 100%;
	min-height: 100vh;
	padding: 50px 15px;
	overflow-y: auto;

	> .main-content {
		height: auto;
	}
`;

//background-color: ${window.__RUNTIME_CONFIG__.REACT_APP_MAIN_COLOR};
 
const LoginContentStyled = styled.div`
	position: relative;
	display: block;
	width: 100%;
	max-width: 600px;
	margin: auto;
	padding: 30px;
	border-radius: 3px;
	background-color: white;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);


  .spinner i{
    animation: rotate 2s linear infinite;
  }


	&::after {
		content: '';
		clear: both;
		display: block;
	}

	.wt-register-logo {
		display: block;
		max-width: 200px;
		margin-bottom: 20px;
		margin: 0 auto;		
	}

	.main-content {
		overflow: initial;
		padding: 0;
	}
`;

export {
	LoginContainerStyled,
	LoginContentStyled
};