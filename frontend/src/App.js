import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Login from './components/login.js';
import BooksPage from './components/booksPage';

function App() {
  return (
    
    
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
    
  );
}

export default App;
