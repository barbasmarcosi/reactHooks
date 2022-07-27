import '../index.css';
const Header = (props) => {
  return (
    <div className="Header">
      <h1 className="Title">Rick and Morty App</h1>
      <button className="Button" onClick={props.onClick}>
        {props.darkMode ? "DarkMode" : "Light Mode"}
      </button>
    </div>
  );
};

export default Header;
