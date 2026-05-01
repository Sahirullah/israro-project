import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Get All Types of Stuff</h1>
        <p className="hero-subtitle">High Quality Products on Responsible Prices</p>
        <p className="hero-description">Discover our exclusive collection of premium products at unbeatable prices. Quality you can trust, prices you'll love.</p>
        <div className="hero-buttons">
          <button className="hero-btn primary">Shop Now</button>
          <button className="hero-btn secondary">Learn More</button>
        </div>
      </div>
    </section>
  )
}
