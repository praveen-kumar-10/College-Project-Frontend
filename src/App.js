/** @format */

import './App.css';
import Button from './components/UI/Button';
import Form from './Form';

import useInput from './utils/custom-hooks/useInput';

function App() {
  const { value, handleChange, handleReset, hasError, handleBlur, isTouched } =
    useInput('', (value) => value.length > 8);

  return (
    <div className='App'>
      {/* <Form />*/}
      <input
        value={value}
        onChange={(event) => handleChange(event.target.value)}
        onBlur={handleBlur}
      />
      {isTouched && hasError && <p>Error</p>}
    </div>
  );
}

export default App;
