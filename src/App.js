import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const [data , getData] = useState([]);

  useEffect(() => {
    tableData();
  }, [])

  const tableData = () => {
    axios.get(URL).then((response) => {
        console.log(response);
      })
  }
  return (
    <div>
      <h1>How Display API data in Table in React JS</h1
      <tbody>
        <tr>
          <th>User ID</th>
          <th>ID</th>
          <th>Title</th>
          <th>Descripation</th>
        </tr>
        {data.length>0 && data.map((item, i) => (
          <tr key={i}>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        ))
}
</tbody>
</div>
export default App;