import { useEffect, useState } from 'react';

function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const res = await fetch('/employees');
      const data = await res.json();
      console.log(data);
      setEmployees(data);
    }
    fetchData();
  }, []);
  return <div>{JSON.stringify(employees)}</div>;
}

export default Employees;
