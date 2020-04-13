import React, { useState, useEffect } from 'react';

const Greet = () => {
  const [greet, setGreet] = useState("");

  async function fetchData() {
    let res = await fetch('/api/greet');
    let greet = await res.text()
    setGreet(greet);
  }
  
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
  <div>
    <h4>{greet}</h4>
  </div>
  )
}

export default Greet;