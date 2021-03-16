import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const axios = require('axios');

function EditEmployee() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const res = await fetch(`/employees/${id}`);
      const data = await res.json();
      console.log(data);
      setFirstName(data.first_name);
      setLastName(data.last_name);
      setEmail(data.email);
    }
    fetchData();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      first_name: firstName,
      last_name: lastName,
      email
    };
    axios
      .put(`/employees/${id}`, {
        ...data
      })
      .then(resp => {
        console.log(resp.data);
        return resp.data;
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Edit Employee</h1>
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

export default EditEmployee;
