import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [test, setTest] = React.useState<
    { firstName: string; lastName: string }[]
  >([]);

  React.useEffect(() => {
    const fetchData = async () => {
      // const res1 = await axios.get("http://localhost:3080/");
      const res = await axios.get("http://localhost:3080/user/");
      // console.log({ res, res1 });
      setTest(res.data);
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                React app
                <ul>
                  {test.map((item, index) => (
                    <li key={index}>
                      {item.firstName} {item.lastName}
                    </li>
                  ))}
                </ul>
              </div>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
