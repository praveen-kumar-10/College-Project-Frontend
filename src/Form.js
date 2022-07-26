/** @format */

import { useFormik } from 'formik';
import React from 'react';

function Form() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: '',
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor=' name'>Name</label>
        <input
          type='text'
          id='name'
          name='name'
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <label htmlFor='email'>E-mail</label>
        <input
          type='email'
          id='email'
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <label htmlFor=' channel'>Channel</label>
        <input
          type='text'
          id='channel'
          name='channel'
          value={formik.values.channel}
          onChange={formik.handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Form;
