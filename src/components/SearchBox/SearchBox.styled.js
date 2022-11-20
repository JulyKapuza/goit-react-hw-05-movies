import styled from 'styled-components';


export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
  padding: 10px;
`;
export const Form = styled.form`
  display: flex;
  
`;
export const Input = styled.input`
  padding: 8px;

  font: inherit;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  color: white;
  padding: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-image: linear-gradient(
    to right,
    #ff1493 0%,
    #ffc0cb 51%,
    #c71585 100%
  );
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: 0.5s;

  :hover,
  :focus {
    background-position: right center;
  }
`;
