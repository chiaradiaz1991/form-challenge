import React, { useState } from "react";
import { StyleInput } from "./styles";
import ReactTooltip from "react-tooltip";
import Error from '../Error/Error';
import { validation } from "../../utils/Validation";


const TextInput = ({ value, storeValues, clear }) => {
  const { name, type, description, id } = value;
  const [error, setError] = useState('');
  const [ valueInput, setValueInput ] = useState('');

  const handleChange = (e) => {
    //obtain name and value from the user
    setValueInput(e.target.value);
    const newVal = valueInput;
    const name = e.target.name;
    // this const will evaluate wether it's an error or empty
    const hasError = newVal === "" || validation(name, newVal);
    setError(hasError);
    // send newVal and name to the storeValues function
    storeValues(newVal, name, hasError);
  };

  return (
    <>
      <label htmlFor={type}>{name}</label>
      <ReactTooltip />
      <div data-tip={description && description}>
        <StyleInput
          id={id}
          name={name}
          type={type}
          onChange={(e) => handleChange(e)}
          value={clear ? '' : valueInput}
          // value={valueInput}
          data-tip={description && description}
        />
      </div>
      {/* if error, then show error component */}
      { error && <Error name={name}/> }
    </>
  );
};

export default TextInput;
