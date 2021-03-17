import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Job() {
  const history = useHistory();
  const [job, setJob] = useState(null);
  const [lowestBid, setLowestBid] = useState(null);
  let { id } = useParams();

  console.log(id);

  useEffect(() => {
    //TODO create service for database calls
    async function fetchData() {
      // You can await here
      const res = await fetch('/jobs');
      const data = await res.json();
      console.log(data);
      let targetJob = data.find(job => {
        console.log(job);
        return job.id === Number(id);
      });
      console.log(targetJob);
      setJob(targetJob);
      setLowestBid(findLowestBid());
      console.log(lowestBid);
    }
    fetchData();
  }, []);

  function findLowestBid() {
    if (!job) return;
    let lowestBidAmount = Number.POSITIVE_INFINITY;
    let lowestBid = null;
    for (let b of job.bids) {
      let amount = b.amount;
      if (amount < lowestBidAmount) {
        lowestBidAmount = amount;
        lowestBid = b;
      }
    }
    return lowestBid;
  }

  return (
    <div>
      <h1>Job</h1>
      {job && job ? (
        <div>
          <p>Job Description: {job.description}</p>
          <p>Last Bid Day: {job.last_bid_day}</p>
        </div>
      ) : (
        `Job with id of ${id} is not found`
      )}
      {lowestBid && lowestBid ? (
        <div>{`The lowest bid amount is: ${lowestBid.amount}`}</div>
      ) : (
        'There are no bids'
      )}
    </div>
  );
}

export default Job;
