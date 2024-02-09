import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCollege from './components/AddCollege';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddCollege/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
