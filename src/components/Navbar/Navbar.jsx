import "./navbar.css";

const Navbar = () => {
  return (
    <header className="heading d-flex grow-shrink-basis align-center">
      <div className="heading-title-icon d-flex grow-shrink-basis align-center">
        <h1 className="heading-title">shophub</h1>
      </div>
      <nav className="navigation">
        <ul className="list-non-bullet d-flex align-center">
          <li className="list-item-inline">HOME</li>
          <li className="list-item-inline">CART</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
