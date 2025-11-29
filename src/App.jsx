import './App.css'

function App() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero" id="home">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              <img src="/bv-logo.png" alt="Bella Via Logo" />
            </div>
            <div className="nav-links">
              <a href="#tour" onClick={(e) => { e.preventDefault(); handleScrollTo('tour'); }} className="nav-link">
                TAKE A TOUR →
              </a>
              <a href="#apply" onClick={(e) => { e.preventDefault(); handleScrollTo('apply'); }} className="nav-link">
                APPLY NOW
              </a>
            </div>
          </div>
        </nav>
        <div className="hero-content">
          <h1 className="hero-title">Bella Via Condominiums</h1>
          <p className="hero-subtitle">luxury living awaits</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="tour">
        <div className="container">
          <h2 className="section-title">Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Modern Design</h3>
              <p>Beautiful and intuitive interface designed with care</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast Performance</h3>
              <p>Lightning-fast loading and smooth interactions</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3>Premium Quality</h3>
              <p>Built with attention to detail and best practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">About</h2>
          <div className="about-content">
            <p>
              Bella Via represents a journey of excellence. We believe in creating
              experiences that are both beautiful and functional, combining modern
              design principles with thoughtful user experience.
            </p>
            <p>
              Our mission is to deliver products that not only meet your needs but
              exceed your expectations. Every detail matters, and we're committed to
              crafting something truly special.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <div className="container">
          <h2 className="section-title">Gallery</h2>
          <div className="gallery-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="gallery-item">
                <div className="gallery-placeholder">
                  <span>Image {item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="apply">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="your.email@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Bella Via. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

