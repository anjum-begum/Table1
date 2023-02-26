import { useEffect, useState } from "react"
import './App.css';
import axios from "axios"


function App() {
  const [data , setData] = useState([])

  useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
    console.log("getting from", res.data)
    setData(res.data)
  }).catch(err => console.log(err))
  }, [])

  const arr = data.map((data, index) => {
    return(
    <tr>
          <td>{data.id}</td>
          <td>{data.title}</td>
          <td>{data.body}</td>

      </tr>
    )
  })
  return (
    <div className="App">
      <h1>How Display API data in Table in React JS</h1>
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>BODY</th>
        </tr>
        </thead>
{arr}

</table>
</div>
);
}
export default App;
