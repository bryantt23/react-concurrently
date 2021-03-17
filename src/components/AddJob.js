import { useState } from 'react';
const axios = require('axios');

function AddJob() {
  const [description, setDescription] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const [lastBidDay, setLastBidDay] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      id: new Date().getUTCMilliseconds(),
      first_name: description,
      last_name: maxBudget,
      lastBidDay,
      bids: []
    };
    axios
      .post('/jobs', {
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
          Description:
          <input
            type='text'
            value={description}
            onChange={e => {
              setDescription(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Max Budget:
          <input
            type='text'
            value={maxBudget}
            onChange={e => {
              setMaxBudget(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          lastBidDay:
          <input
            type='text'
            value={lastBidDay}
            onChange={e => {
              setLastBidDay(e.target.value);
            }}
          />
        </label>
        <br />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export default AddJob;
