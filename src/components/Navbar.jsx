import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">🚀</span>
          <span className="logo-text">YourBrand</span>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#products" className="nav-link">Products</a>
          </li>
          <li className="nav-item">
            <a href="#reviews" className="nav-link">Client Reviews</a>
          </li>
          <li className="nav-item">
            <a href="#places" className="nav-link">Places</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link contact-btn">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
