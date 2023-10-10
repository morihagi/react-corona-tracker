import {Link} from "react-router-dom";

const Header = () =>{
  return(
    <div className="header">
      <Link to="/">Number of infections by country</Link>
      <Link to="/world">Number of infections in the world</Link>
    </div>
  );
};

export default Header;
