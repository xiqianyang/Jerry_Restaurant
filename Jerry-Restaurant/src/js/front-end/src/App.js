import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}>
        </Route>
        <Route path="/main" element={<Main/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
