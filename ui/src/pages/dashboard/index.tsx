import axios from "axios";
import React from "react";

const Dashboard: React.FC = () => {
  const [test, setTest] = React.useState<
    { firstName: string; lastName: string }[]
  >([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3080/user/");

      setTest(res.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      Dashboard
      <ul>
        {test.map((i, k) => (
          <li key={k}>{`${i.firstName} ${i.lastName}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
