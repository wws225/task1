import './App.css'
import React from 'react';
import { InputArea } from './components/area/InputArea';
import { InputProvider } from './providers/GlobalState';
import { TableView } from './components/area/TableView';
import { TotalTime } from './components/area/TotalTime';
import { RegisterButton } from './components/area/RegisterButton';
function App() {
  return (
    <InputProvider>
       <h1 data-testid="title" style={{color:"red"}}>学習記録一覧</h1>
    <InputArea />
    <TableView />
    <TotalTime />
    <RegisterButton />
    </InputProvider>
  )
}
export default App

// import React from "react";
// function App() {
//   return (
//     <>
//       <title data-testid="title">Hello Jest</title>
//     </>
//   );
// }

// export default App;

