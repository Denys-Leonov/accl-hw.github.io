import './App.css';
import MyAppBar from './components/MyAppBar/MyAppBar';
import { useState } from 'react';
import MyItemList from './components/MyItemList/MyItemList';

function App() {
  const [dataArr, setDataArr] = useState([]);

  return (
    <div className="App">
      <MyAppBar dataArr={dataArr} setDataArr={setDataArr} />
      <MyItemList dataArr={dataArr}/>
    </div>
  );
}

export default App;
