import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Jobs() {
  const history = useHistory();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    //TODO create service for database calls
    async function fetchData() {
      // You can await here
      const res = await fetch('/jobs');
      const data = await res.json();
      console.log(data);
      setJobs(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>Jobs available for bidding</h1>
      <ul>
        {jobs.map(job => (
          <li
            onClick={() => {
              history.push(`/jobs/${job.id}`);
            }}
          >
            <a href=''>{job.description}</a>
          </li>
        ))}
      </ul>
      {/* {JSON.stringify(jobs)}</div>; */}
    </div>
  );
}

export default Jobs;
