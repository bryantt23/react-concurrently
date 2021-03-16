import { useEffect } from 'react';

function App() {
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const res = await fetch('/employees');
      const data = await res.json();
      console.log(data);
    }
    fetchData();
  }, []);
  return <div className='App'>hi </div>;
}

export default App;
