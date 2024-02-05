import { useEffect } from "react";
import "../styles/TabulateFetchedData.css";
import { useState } from "react";
const URL = "https://reqres.in/api/users";

const TabulateFetchedData = () => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      console.log(data.data);
      setData(
        data.data.sort((a, b) => {
          return a.first_name.localeCompare(b.first_name);
        })
      );
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((elem) => {
            return (
              <tr key={elem.id}>
                <td>
                  {elem.first_name} {elem.last_name}
                </td>
                <td> {elem.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default TabulateFetchedData;
