import React  from 'react';
import styled from 'styled-components';

  function CasingToggle() {
    const {
      upperCase,
      handleToggle,
      resetCasing
    } = useCaseChange();
    
    return (
      <>
        <Wrapper>
          <Card>
            <Message>{upperCase ? "HELLO WORLD" : "hello world"}</Message>
            <ButtonsContainer>
              <Button onClick={handleToggle}>Change Casing</Button>
              <Button onClick={resetCasing}>Reset</Button>
            </ButtonsContainer>
          </Card>
        </Wrapper>
      </>
    )
  }

  function useCaseChange() {
    const [upperCase, setUpperCase] = React.useState(false);

    const handleToggle = () => {
    setUpperCase(!upperCase);
    }

    const resetCasing = () => {
      setUpperCase(false);
    }

    return {
      upperCase,
      handleToggle,
      resetCasing
    }
  }

  const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
  `;


  const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
  `;

  const Card = styled.div`
  display: flex;
  height: 500px;
  width: 400px;
  background: hsl(0deg 0% 100%);;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 15px 0px hsl(0deg 0% 83%), -5px -5px 15px 0px hsl(0deg 0% 83%);
`;

  const Button = styled.button`
	background: hsl(45deg 100% 50%);
	color: hsl(0deg 0% 0%);
	padding: 20px 20px;
	border-radius: 8px;
	border: none;
	font-size: 1.5rem;
    font-weight: 900;
	cursor: pointer;

    &:hover {
        background: hsl(0deg 0% 0%);
        color: hsl(0deg 0% 100%);
    }
`;

  const Message = styled.p`
    font-size: 2rem;
    font-weight: 600;
  `; 

export default CasingToggle;