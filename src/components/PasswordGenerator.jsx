import {
  Container, Title, InputField, RangeContainer, RangeLabel, CheckboxContainer, StyledCheckbox, StyledRange, StyledButton, CheckboxLabel,
} from "./PasswordGenerator.styles.js";

import React, { useEffect, useReducer } from "react";

// Reducer function
const passwordReducer = (state, action) => {
  switch (action.type) {
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_LENGTH":
      return { ...state, length: action.payload };
    case "TOGGLE_NUMBER":
      return { ...state, numberAllowed: !state.numberAllowed };
    case "TOGGLE_UPPERCASE":
      return { ...state, UpperCaseAllowed: !state.UpperCaseAllowed };
    case "TOGGLE_SYMBOL":
      return { ...state, symbolAllowed: !state.symbolAllowed };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};


// Initial state
const initialState = {
  password: "",
  length: 6,
  numberAllowed: false,
  UpperCaseAllowed: false,
  symbolAllowed: false,
};

const PasswordGenerator = () => {
  const [state, dispatch] = useReducer(passwordReducer, initialState);

  const { password, length, numberAllowed, UpperCaseAllowed, symbolAllowed } =
    state;


  const passwordGenerator = () => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (UpperCaseAllowed) str += "ABCDEFGHIJKLMNOPQURSUVWXYZ";
    if (symbolAllowed) str += "!@#$%^&*+_-=";

    for (let i = 0; i <= length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    dispatch({ type: "SET_PASSWORD", payload: pass });
  };


  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, UpperCaseAllowed, symbolAllowed]);

  return (
    <Container>
      <Title>Password Generator</Title>

      <InputField
        type="text"
        readOnly
        placeholder="Password"
        value={password}
      />
      <StyledButton onClick={passwordGenerator}>Generate Password</StyledButton>

      <RangeContainer>
        <StyledRange
          type="range"
          min={6}
          max={50}
          value={length}
          onChange={(e) =>
            dispatch({ type: "SET_LENGTH", payload: parseInt(e.target.value) })
          }
        />
        <RangeLabel>Length: {length}</RangeLabel>
      </RangeContainer>

      <CheckboxContainer>
        <StyledCheckbox
          type="checkbox"
          checked={numberAllowed}
          onChange={() => dispatch({ type: "TOGGLE_NUMBER" })}
          id="numberAllowed"
        />
        <CheckboxLabel htmlFor="numberAllowed">Number</CheckboxLabel>
      </CheckboxContainer>
      <CheckboxContainer>
        <StyledCheckbox
          type="checkbox"
          checked={UpperCaseAllowed}
          onChange={() => dispatch({ type: "TOGGLE_UPPERCASE" })}
          id="upperCaseAllowed"
        />
        <CheckboxLabel htmlFor="upperCaseAllowed">Uppercase</CheckboxLabel>
      </CheckboxContainer>
      <CheckboxContainer>
        <StyledCheckbox
          type="checkbox"
          checked={symbolAllowed}
          onChange={() => dispatch({ type: "TOGGLE_SYMBOL" })}
          id="symbolAllowed"
        />
        <CheckboxLabel htmlFor="symbolAllowed">Symbol</CheckboxLabel>
      </CheckboxContainer>
    </Container>
  );
};

export default PasswordGenerator;
