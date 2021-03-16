import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Employee() {
  const [employee, setEmployee] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const res = await fetch(`/employees/${id}`);
      const data = await res.json();
      console.log(data);
      setEmployee(data);
    }
    fetchData();
  }, []);

  return <div>{employee ? JSON.stringify(employee) : 'not found'}</div>;
}

export default Employee;
