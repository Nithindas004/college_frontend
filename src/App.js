import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCollege from './components/AddCollege';
import ViewCollege from './components/ViewCollege';
import SearchCollege from './components/SearchCollege';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddCollege/>} />
        <Route path='/view' element={<ViewCollege/>} />
        <Route path='/search' element={<SearchCollege/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
