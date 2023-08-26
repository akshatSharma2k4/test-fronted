import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [response, setResponse] = useState({});
  const callApi = async () => {
    const resp = await fetch("https://testbackend-j2yc.onrender.com/");
    const data = await resp.json();
    console.log(data);
    setResponse(data);
  };
  useEffect(() => {
    callApi();
  }, []);
  return <h1>This is data from backend {response.message}</h1>;
}

export default App;
