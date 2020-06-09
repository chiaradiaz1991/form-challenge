import React, { useState, useEffect } from "react";

// data
import data from "./database.json";

// components
import SelectInput from "./Components/Select/Select";
import TextInput from "./Components/TextInput/TextInput";
import ProgressBar from "./Components/ProgressBar/ProgressBar";

// styles
import {
  GlobalStyle,
  Wrapper,
  StyledForm,
  StyledButton,
} from "./styles";

// Initial State
const initialState = {
  "First Name": { value: "", error: true },
  "Last Name": { value: "", error: true },
  "Date of Birth": { value: "", error: true },
  Email: { value: "", error: true },
  Address: { value: "", error: true },
  "Contact Number": { value: "", error: true },
  Gender: { value: "", error: true },
  "Areas of Recommendation": { value: "", error: true },
};

const App = () => {
  const [state, setState] = useState(initialState);
  const [percentage, setPercentage] = useState(0);
  const [clearValues, setClearValues] = useState(false);

  const errorsMap = Object.values(state).map(s => s.error)
  const validFieldsFilter = errorsMap.filter(error => error === false).length;
  const valideFields = validFieldsFilter !== 8;

  const handleSubmit = (e) => {
    e.preventDefault();
    // iterate on each value of the state and converts each element to a JSON string
    var data = Object.values(state).map(d => JSON.stringify(d));
    var link = window.document.createElement("a");
    link.setAttribute(
      "href",
      "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURI(data)
    );
    link.setAttribute("download", "submission.csv");
    link.click();

    setClearValues(true);
    setState(initialState)
    setPercentage(0);
  };


  useEffect(() => {
    // valid fields are the ones that the value error is in false from the state
    const validFields = validFieldsFilter;
    // update state percentage: 100/ 8 = 12.5 multiplied by the number of valid values
    setPercentage(12.5 * validFields);
    // this useEffect depends on the state
  }, [state])

  const handleStoreValues = (value, name, hasError) => {
    // with every update, I will have the previous values and it will update each key, value and error from the state.
    setState((prev) => ({ ...prev, [name]: { value, error: hasError } }));
  };

  // this function set the type of input of the new field
  const transformValues = (type) => {
    let valueType;
    switch (type) {
      case "short-text": {
        valueType = "text";
        break;
      }
      case "long-text": {
        valueType = "text";
        break;
      }
      case "phone-number": {
        valueType = "tel";
        break;
      }
      case "email": {
        valueType = "text";
        break;
      }
      case "date": {
        valueType = "date";
        break;
      }
      default: {
        break;
      }
    }
    return valueType;
  };

  return (
    <>
      <GlobalStyle />
      <ProgressBar percentage={percentage} />
      <Wrapper>
        <StyledForm>
          <h2>Form</h2>
          {/* iterates on each item of data.json from above and will render an input component or select compoent depends on the type */}
          {Object.values(data).map((item, index) => {
            if (item.type === "dropdown" || item.type === "multi-select") {
              return (
                <SelectInput
                  value={item}
                  key={`item ${item.id}`}
                  fieldType={item.type}
                  // callback handleStoreValues function to obtain the values from the child component
                  storeValues={handleStoreValues}
                  clear={clearValues}
                />
              );
            } else {
              return (
                <TextInput
                  // execute the transformValues function to obtain desired value
                  type={transformValues(item.type)}
                  value={item}
                  key={`item ${item.id}`}
                  // callback handleStoreValues function to obtain the values from the child component
                  storeValues={handleStoreValues}
                  clear={clearValues}
                />
              );
            }
          })}
          <StyledButton
            onClick={handleSubmit}
            type="button"
            //the submit button will be available upon fields completion
            disabled={valideFields}
          >
            Submit
          </StyledButton>
        </StyledForm>
      </Wrapper>
    </>
  );
};

export default App;
