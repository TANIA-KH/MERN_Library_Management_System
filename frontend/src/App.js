import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Login from './components/login.js';
import BooksPage from './components/booksPage';

function App() {
  return (
    <>
    <div className='title'><h1>LIBRARY MANAGEMENT SYSTEM</h1></div>
    <BrowserRouter>
    <div className="App">
      
      
      <main>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/books" element={<BooksPage/>}/>
          
        </Routes>
      </main>
      
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
