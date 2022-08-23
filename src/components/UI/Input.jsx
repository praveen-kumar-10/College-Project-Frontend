/** @format */

import { Form } from 'react-bootstrap';

const Input = ({
  label,
  required,
  type,
  rows,
  name,
  value,
  placeholder,
  onChange,
  disabled,
  error,
  success,
  errorCond,
}) => {
  return (
    <div className='input__wrapper'>
      <Form.Group>
        {label && (
          <Form.Label>
            {label}
            {required && <span className='asterisk'>*</span>}
          </Form.Label>
        )}
        <Form.Control
          className={`${error !== '' && 'error'} ${success && 'success'}`}
          type={type}
          rows={rows && rows}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder && placeholder}
        />
        {errorCond && <span className='error__message'>{error}</span>}
      </Form.Group>
    </div>
  );
};

export default Input;
