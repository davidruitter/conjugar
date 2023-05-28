import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Conjugation from './pages/Conjugation';

const App = () => {
  return (
    <Router basename='/conjugar'>
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/practice/*" Component={Conjugation}/>
        </Routes>
    </Router>
  );
};

export default App;