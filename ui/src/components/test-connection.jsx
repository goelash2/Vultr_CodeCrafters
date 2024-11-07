import { useEffect, useState } from 'react';

function TestConnection() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/test-connection')
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error:', error));
  }, []);

  return <div>{message ? message : 'Loading...'}</div>;
}

export default TestConnection;
