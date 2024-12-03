
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MessageContent from './layout/content';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MessageContent/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
