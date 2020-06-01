
import React from 'react';
import ReactTooltip from "react-tooltip";
import { StyledFielSelect } from "./styles";


const SelectInput = ({ value, storeValues, fieldType }) => {
  const { name, description, options } = value;

  const multiple = fieldType === "multi-select";

  const handleChange = (e) => {
    let options = e.target.options;
    let values = [];
    // iterates on each element of options array
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        //only the option selected will be push to the new array
        values.push(options[i].value);
      }
    }
    // function from the App Component to obtain the user data
    storeValues(values, name, false);
  }

  return (
    <>
      <ReactTooltip />
      <div data-tip={description && description}>
        <label htmlFor={name}>{name}</label>
        {
          <StyledFielSelect
            name={name}
            onChange={e => handleChange(e)}
            multiple={multiple}
          >
            {options !== undefined && (
              options.map((elem, index) => (
                <>
                  <option key={`option ${index}`}>{elem}</option>
                </>
              )))
            }
          </StyledFielSelect>
        }
      </div>
    </>
  )
}

export default SelectInput;