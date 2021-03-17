import { useState } from 'react';
const axios = require('axios');

function AddBid({ id, jobInfo, setBids }) {
  const [buyer, setBuyer] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(jobInfo.bids);
    let bidsUpdated = [...jobInfo.bids, { buyer, amount }];
    console.log(bidsUpdated);
    setBids([...bidsUpdated]);
    const data = { ...jobInfo, bids: [...bidsUpdated] };
    console.log(data);
    axios
      .put(`/jobs/${id}`, {
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
      <h1>Add a Bid</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Buyer:
          <input
            type='text'
            value={buyer}
            onChange={e => {
              setBuyer(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Amount:
          <input
            type='text'
            value={amount}
            onChange={e => {
              setAmount(e.target.value);
            }}
          />
        </label>
        <br />
        <input type='submit' value='Submit Bid' />
      </form>
    </div>
  );
}

export default AddBid;
