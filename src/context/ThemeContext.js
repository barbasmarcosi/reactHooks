import { createContext } from 'react';

const ThemeContext = /*(darkMode) => */createContext(null/*{
    fontColor: darkMode ? 'white' : 'black',
    backgroundColor: darkMode ? 'black' : 'white',
}*/);

export default ThemeContext;