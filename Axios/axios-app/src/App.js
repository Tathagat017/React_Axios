import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Citites from "./Components/Cities";

function App() {
  const [data, setData] = useState(0);
  //* useEffect(() => {
  // axios
  //   .get("https://jsonplaceholder.typicode.com/users", {})
  //   .then((res) => {
  //     console.log(res.data);
  //     setData(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // axios
  //   .post("https://jsonplaceholder.typicode.com/posts", {
  //     userId: 12,
  //     title: "ychag",
  //     body: "hey axios library",
  //   })
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  //* }, []);

  return (
    <div className="App">
      <Citites />
      {/* {data.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              border: "1px solid",
              gap: "10px",
            }}
          >
            <p> {item.name}</p>
            <p>{item.email}</p>
            <p>{item.username}</p>
          </div>
        );
      })} */}
    </div>
  );
}

export default App;
