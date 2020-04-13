import React, { useState, useEffect } from 'react';

const Greet = () => {
  const [greet, setGreet] = useState("");

  async function fetchData() {
    fetch('/api/greet')
      .then(res => res.text())
      .then(greet => {
        setGreet(greet);
    });
  }
  
  useEffect(() => {
    fetchData()
  }, []);
  
  return (
  <div>
    <p>{greet}</p>
  </div>
  )
}

export default Greet;