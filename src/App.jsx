import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom'
import './App.css'

const totalPhotos = 50

const galleryPhotos = Array.from({ length: totalPhotos }, (_, index) => {
  const id = index + 1

  // Give some variation in sizes for the masonry layout
  let size = 'normal'
  if (id % 7 === 0) {
    size = 'wide'
  } else if (id % 5 === 0) {
    size = 'tall'
  }

  return {
    id,
    label: `Photo ${id}`,
    size,
    src: `/photo${id}.jpg`,
  }
})

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/:photoId" element={<PhotoDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

function HomePage() {
  const navigate = useNavigate()

  const handleScrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
              <a
                href="/gallery"
                onClick={(e) => {
                  e.preventDefault()
                  navigate('/gallery')
                }}
                className="nav-link"
              >
                PHOTO GALLERY
              </a>
              <span className="nav-separator">,</span>
              <a
                href="#apply"
                onClick={(e) => {
                  e.preventDefault()
                  handleScrollTo('apply')
                }}
                className="nav-link"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </nav>
        <div className="hero-content">
          <h1 className="hero-title">Bella Via Condominiums</h1>
          <p className="hero-subtitle">luxury living awaits</p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section" id="tour">
        <div className="welcome-container">
          <div className="welcome-content">
            <div className="welcome-headline">
              <span className="headline-line"></span>
              <span className="headline-text">YOUR NEW HOME AWAITS</span>
            </div>
            <h2 className="welcome-title">
              Welcome to
              <br />
              Bella Via Condominiums
            </h2>
            <p className="welcome-body">
              Bella Via Condominiums offers luxury living at its finest. Our residences feature stunning territorial
              views, attention-to-detail designer finishes like custom closets and under-mount cabinet lighting, and
              hotel-like amenities. Floor plans have been maximized for spacious, city living at its finest.
            </p>
            <button
              className="welcome-button"
              onClick={(e) => {
                e.preventDefault()
                handleScrollTo('tour')
              }}
            >
              TAKE A TOUR →
            </button>
          </div>
          <div className="welcome-image">
            <img src="/welcome-home.jpg" alt="Bella Via Condominiums" />
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="photo-gallery-section">
        <div className="photo-gallery-container">
          <div className="photo-gallery-left">
            <div className="gallery-headline">
              <span className="gallery-headline-line"></span>
              <span className="gallery-headline-text">LUXURY IS CALLING</span>
            </div>
            <h2 className="gallery-title">Photo Gallery</h2>
            <div className="gallery-left-image">
              <img src="/living-room.jpg" alt="Bella Via Living Room" />
            </div>
          </div>
          <div className="photo-gallery-right">
            <div className="gallery-right-image">
              <img src="/garage.jpg" alt="Bella Via Garage" />
            </div>
            <div className="gallery-description">
              <p>
                Explore bright, modern interiors and thoughtfully designed townhomes at Bella Via. From open-concept
                living spaces to private garages, every detail is crafted for elevated everyday living.
              </p>
              <button
                className="gallery-button"
                onClick={(e) => {
                  e.preventDefault()
                  navigate('/gallery')
                }}
              >
                VIEW ALL PHOTOS →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="apply">
        <div className="container">
          <h2 className="section-title">Contact Info</h2>
          <div className="contact-info">
            <div className="contact-info-item">
              <h3>Address</h3>
              <p>123 Bella Via Lane, Bellevue, WA 98004</p>
            </div>
            <div className="contact-info-item">
              <h3>Property Manager</h3>
              <p>Jane Doe · (555) 123-4567 · manager@bellavia.com</p>
            </div>
          </div>
          <div className="contact-copy">
            <p>
              For leasing information, private tours, or current availability at Bella Via Condominiums, please reach
              out to our on-site management team. We are happy to answer questions about floor plans, pricing, and
              amenities.
            </p>
            <p>
              Office hours are Monday–Friday, 9:00 AM to 6:00 PM, and Saturday by appointment. Tours can be scheduled
              in advance by phone or email, and virtual tours are available upon request.
            </p>
            <p>
              Prefer to speak with someone directly? Call our leasing office at <strong>(555) 123-4567</strong> or email{' '}
              <strong>leasing@bellavia.com</strong>.
            </p>
          </div>
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

function GalleryPage() {
  const navigate = useNavigate()

  return (
    <div className="gallery-page">
      <button
        className="gallery-back-icon"
        aria-label="Back to home"
        onClick={() => {
          navigate('/')
        }}
      >
        ←
      </button>

      <header className="gallery-page-header">
        <h1 className="gallery-page-title">Photo Gallery</h1>
      </header>

      <div className="gallery-page-grid">
        {galleryPhotos.map((photo) => (
          <button
            key={photo.id}
            type="button"
            className={`gallery-page-item gallery-page-item-${photo.size}`}
            onClick={() => navigate(`/gallery/${photo.id}`)}
          >
            <div className="gallery-page-photo-placeholder">
              <img src={photo.src} alt={photo.label} />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

function PhotoDetailPage() {
  const { photoId } = useParams()
  const navigate = useNavigate()

  const numericId = Number(photoId)
  const index = galleryPhotos.findIndex((p) => p.id === numericId)

  if (index === -1) {
    return <GalleryPage />
  }

  const photo = galleryPhotos[index]
  const prev = galleryPhotos[(index - 1 + galleryPhotos.length) % galleryPhotos.length]
  const next = galleryPhotos[(index + 1) % galleryPhotos.length]

  return (
    <div className="photo-detail-page">
      <button
        className="gallery-back-icon"
        aria-label="Back to gallery"
        onClick={() => {
          navigate('/gallery')
        }}
      >
        ←
      </button>

      <div className="photo-detail-content">
        <button
          type="button"
          className="photo-nav photo-nav-left"
          aria-label="Previous photo"
          onClick={() => navigate(`/gallery/${prev.id}`)}
        >
          ‹
        </button>

        <div className="photo-detail-placeholder">
          <img src={photo.src} alt={photo.label} />
        </div>

        <button
          type="button"
          className="photo-nav photo-nav-right"
          aria-label="Next photo"
          onClick={() => navigate(`/gallery/${next.id}`)}
        >
          ›
        </button>
      </div>
    </div>
  )
}

export default App

