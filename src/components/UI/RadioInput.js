/** @format */

import { Form } from 'react-bootstrap';

const RadioInput = ({
  label,
  value,
  name,
  required,
  radioInputs,
  handleChange,
  error,
  checkedValue,
}) => {
  return (
    <div className='input__wrapper'>
      <Form.Group>
        <Form.Label>
          {label}
          {required && <span className='asterisk'>*</span>}
        </Form.Label>
        <div className='radio__wrapper d-flex'>
          {radioInputs &&
            radioInputs.map((item) => {
              const isChecked = checkedValue === item.value;
              return (
                <div
                  key={item.value}
                  onClick={() => {
                    handleChange(item.value);
                  }}>
                  <Form.Check
                    type='radio'
                    className={`mx-2 ${item.value === value && 'active'}`}>
                    <Form.Check.Input
                      type='radio'
                      name={name}
                      value={value}
                      // onChange={onChange}
                      checked={isChecked}
                    />
                    <Form.Check.Label>{item.label}</Form.Check.Label>
                  </Form.Check>
                </div>
              );
            })}
        </div>
      </Form.Group>
      {error && <span className='error-message'>{error}</span>}
    </div>
  );
};

export default RadioInput;
