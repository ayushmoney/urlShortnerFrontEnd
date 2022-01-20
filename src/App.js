import './App.css';
import { useState } from 'react';
import { postData } from './api';

function App() {
  const [url,setUrl] = useState('');
  const [arr,setArr] = useState([]);
  const handleSubmit = async()=>{
    const res = await postData(url);
    var temp = [...arr];
    temp.push({
      url : url,
      short : res.data
    });
    setArr(temp);
    console.log(temp);
  }
  console.log(url);
  return (
    <>
    <div className="App">
    <div>Url Shortner</div>
      <div className='secondary'>
      <input className='input' type="text" placeholder='url' onChange={(e)=>setUrl(e.target.value)}></input>
      <button className='btn' onClick={handleSubmit}>Shorten</button>
      </div>
      <div>
        <div>URL shortened by you</div>
        {/* {arr.map(ele=>(
            <MiniApp key={ele.url} or={ele.url} mod={ele.short}/>
        ))} */}
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Original</th>
      <th scope="col">Shortened</th>
    </tr>
  </thead>
  <tbody>
    {
      arr.map(ele=>(
        <tr>
      <td className='urlLen'><a href={ele.url} target='_blank'> {ele.url} </a></td>
      <td><a href={ele.short} target='_blank'> {ele.short} </a></td>
    </tr>
      ))
    }
  </tbody>
</table>
      </div>
    </div>
    </>
  );
}

export default App;
