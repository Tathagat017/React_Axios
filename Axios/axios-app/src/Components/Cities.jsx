import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const getData = () => {
  return axios.get(`http://localhost:8800/cities`);
};

function Citites() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function renderData() {
    setLoading(true);
    getData()
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          setCities(res.data);
          console.log(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    renderData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong.. Please refresh</h1>;
  }

  return (
    <div>
      <h1>Cities</h1>
      <ol>
        {cities.map((city) => (
          <li key={city.id}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                border: "1px solid",
                backgroundColor: "black",
                color: "white",
              }}
            >
              <p>ID:{city.id}</p>
              <p>CITY : {city.name}</p>
              <p> POPULATION : {city.population}</p>
              <p> COUNTRY: {city.country}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Citites;
