import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Job() {
  const history = useHistory();
  const [job, setJob] = useState([]);
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
      // findLowestBidAmount()
    }
    fetchData();
  }, []);

  // findLowestBidAmount = () => {};

  return (
    <div>
      <h1>Job</h1>
      {job && job ? JSON.stringify(job) : `Job with id of ${id} is not found`}
    </div>
  );
}

export default Job;
