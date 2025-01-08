import styled from "styled-components";

// Styled components
const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: gray;
  border: 1px solid #d3dce6;
  border-radius: 10px;
  text-align: center;
`;

const Title = styled.h1`
  color: #333;
  font-size: 1.8rem;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 90%;
  padding: 10px;
  font-size: 1rem;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const RangeContainer = styled.div`
  margin: 20px 0;
`;

const RangeLabel = styled.label`
  margin-left: 10px;
  font-size: 1rem;
  color: white;
`;

const CheckboxContainer = styled.div`
  margin: 15px 0;
`;

const CheckboxLabel = styled.label`
  margin-left: 8px;
  font-size: 1rem;
  color: white;
`;

const StyledCheckbox = styled.input`
  accent-color: #007bff;
`;

const StyledRange = styled.input`
  width: 80%;
  margin-top: 10px;
`;

const StyledButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export {Container,Title,InputField,RangeContainer,RangeLabel,CheckboxContainer,StyledCheckbox,StyledRange,StyledButton , CheckboxLabel}