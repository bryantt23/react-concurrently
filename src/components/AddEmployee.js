import { useState } from 'react';
const axios = require('axios');

function AddEmployee() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  //   "first_name": "Steve",
  //   "last_name": "Palmer",
  //   "email": "steve@codingthesmartway.com"
  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      id: new Date().getUTCMilliseconds(),
      first_name: firstName,
      last_name: lastName,
      email
    };
    axios
      .post('/employees', {
        ...data
      })
      .then(resp => {
        console.log(resp.data);
        return resp.data;
      })
      .catch(error => {
        console.log(error);
      });
    // console.log(response);
  };

  return (
    <div>
      <h1>Create new</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type='text'
            value={firstName}
            onChange={e => {
              setFirstName(e.target.value);
            }}
          />
        </label>
        <label>
          Last Name:
          <input
            type='text'
            value={lastName}
            onChange={e => {
              setLastName(e.target.value);
            }}
          />
        </label>
        <label>
          Email:
          <input
            type='text'
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default AddEmployee;
