import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
// 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