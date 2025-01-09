import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <h1>学習記録一覧</h1>
      <MainContent />
    </>
  )
}

const MainContent = () => {
  const [newContent, setNewContent] = useState("");
  const [newTime, setNewTime] = useState(0);
  const [records, setRecords] = useState([]);
  const [error, setError] = useState("");

  const addList = records.map(record => {
    return (
      <div>
        {record[0]} {record[1]}
      </div>
    );
  });

  return <>
    <div>
      <label>学習内容：</label>
      <input
        type="text" value={newContent}
        onChange={(e) => {
          setNewContent(e.target.value)
        }}
      />
    </div>
    <div>
      <label>学習時間：</label>
      <input
        type="number" value={newTime}
        onChange={(e) => {
          setNewTime(e.target.value)
        }}
      />
      <label>時間</label>
    </div>
    <div>入力されている学習内容：{newContent}</div>
    <div>入力されている時間：{newTime}時間</div>
    {addList}
    <button
      onClick={() => {
        if (newContent === "" && newTime === 0) {
          setError("入力されていない項目があります。");
          return;
        }
        const newRecords = [...records, [newContent, newTime]];
        setRecords(newRecords);
        setNewContent("");
        setNewTime(0);
        setError("")
      }}>登録</button>
    <div>合計時間：{
     records.map(record =>Number( record[1]))
     .reduce((sum, item) => (sum += item), 0)
}/1000(h)</div>
    <div>{error}</div>
  </>
}
export default App