import { useState } from 'react';
import Characters from './components/Characters';
import Header from './components/Header';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'App-dark' : 'App'}>
      <Header darkMode={darkMode} onClick={() => setDarkMode(!darkMode)}/>
      <Characters/>
    </div>
  );
}

export default App;
