import styled from "styled-components";

export const Container = styled.div`


  display: inline-block;
  margin-right: 6px;

  width: 64px;
  height: 24px;

  font-size: 12px;
  font-weight: 400;
  border-radius: 5px;

 
  text-align: center;
  
  
  

  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${({ theme }) => theme.COLORS.ORANGE};

`;