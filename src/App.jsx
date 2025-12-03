import { BrowserRouter, Routes, Route, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
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
        <Route path="/bedroom2" element={<Bedroom2Page />} />
        <Route path="/bedroom3" element={<Bedroom3Page />} />
        <Route path="/floorplan2" element={<FloorPlan2Page />} />
        <Route path="/floorplan3" element={<FloorPlan3Page />} />
      </Routes>
      <Analytics />
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
                href="#tour"
                onClick={(e) => {
                  e.preventDefault()
                  handleScrollTo('tour')
                }}
                className="nav-link"
              >
                About Us
              </a>
              <span className="nav-separator">|</span>
              <a
                href="#photo-gallery"
                onClick={(e) => {
                  e.preventDefault()
                  handleScrollTo('photo-gallery')
                }}
                className="nav-link"
              >
                Photo Gallery
              </a>
              <span className="nav-separator">|</span>
              <a
                href="#virtual-tour"
                onClick={(e) => {
                  e.preventDefault()
                  handleScrollTo('virtual-tour')
                }}
                className="nav-link"
              >
                Virtual Tour
              </a>
              <span className="nav-separator nav-separator-after-virtual-tour">|</span>
              <a
                href="#floor-plans"
                onClick={(e) => {
                  e.preventDefault()
                  handleScrollTo('floor-plans')
                }}
                className="nav-link"
              >
                Floor Plans
              </a>
              <span className="nav-separator">|</span>
              <a
                href="#apply"
                onClick={(e) => {
                  e.preventDefault()
                  handleScrollTo('apply')
                }}
                className="nav-link"
              >
                Contact Us
              </a>
            </div>
          </div>
        </nav>
        <div className="hero-content">
          <h1 className="hero-title">Bella Via Condominiums</h1>
          <p className="hero-subtitle">Luxury Living Awaits</p>
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
            <h3 className="welcome-subtitle">About Us</h3>
            <p className="welcome-body">
              Bella Via Condominiums offers luxury living at its finest. Our residences feature stunning territorial
              views, attention-to-detail designer finishes like custom closets and under-mount cabinet lighting, and
              hotel-like amenities. Floor plans have been maximized for spacious, city living at its finest.
            </p>
          </div>
          <div className="welcome-image">
            <img src="/welcome-home.jpg" alt="Bella Via Condominiums" />
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="photo-gallery-section" id="photo-gallery">
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

      {/* Virtual Tour Section */}
      <section className="virtual-tour-section" id="virtual-tour">
        <div className="virtual-tour-container">
          <div className="virtual-tour-image">
            <img src="/vt1.png" alt="Bella Via Virtual Tour" />
          </div>
          <div className="virtual-tour-content">
            <div className="virtual-tour-headline">
              <span className="headline-line"></span>
              <span className="headline-text">TAKE A TOUR</span>
            </div>
            <h2 className="virtual-tour-title">Virtual Tours Now Available</h2>
            <p className="virtual-tour-body">
              Experience your future home through immersive 3D virtual tours. Explore every detail of our spacious 2-bedroom and 3-bedroom floor plans, each featuring 2.5 bathrooms and premium finishes throughout.
            </p>
            <div className="virtual-tour-buttons">
              <button
                className="virtual-tour-button"
                onClick={(e) => {
                  e.preventDefault()
                  navigate('/bedroom2')
                }}
              >
                2 Bedroom →
              </button>
              <button
                className="virtual-tour-button"
                onClick={(e) => {
                  e.preventDefault()
                  navigate('/bedroom3')
                }}
              >
                3 Bedroom →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section className="welcome-section" id="floor-plans">
        <div className="welcome-container">
          <div className="welcome-content">
            <div className="welcome-headline">
              <span className="headline-line"></span>
              <span className="headline-text">SPACIOUS FLOOR PLANS</span>
            </div>
            <h2 className="welcome-title">Floor Plans</h2>
            <p className="welcome-body">
              Explore our thoughtfully designed floor plans, each maximized for spacious, city living. Choose from our
              2-bedroom or 3-bedroom layouts, both featuring 2.5 bathrooms and premium finishes throughout.
            </p>
            <div className="virtual-tour-buttons">
              <button
                className="virtual-tour-button"
                onClick={(e) => {
                  e.preventDefault()
                  navigate('/floorplan2')
                }}
              >
                2 Bedroom →
              </button>
              <button
                className="virtual-tour-button"
                onClick={(e) => {
                  e.preventDefault()
                  navigate('/floorplan3')
                }}
              >
                3 Bedroom →
              </button>
            </div>
          </div>
          <div className="welcome-image">
            <img src="/photo28.jpg" alt="Bella Via Condominiums" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="apply">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-info">
            <div className="contact-info-item">
              <h3>Address</h3>
              <p>1926 S. Washington St. Tacoma, WA 98405</p>
            </div>
            <div className="contact-info-item">
              <h3>Property Manager</h3>
              <p>Anthony Kunitsa · (253) 732-0718 · Bellaviacondominiums@gmail.com</p>
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
              in advance anytime by phone or email. Virtual tours are coming soon.
            </p>
            <p>
              Prefer to speak with someone directly? Call our leasing office anytime at <strong>(253) 732-0718</strong> or email{' '}
              <strong>Bellaviacondominiums@gmail.com</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Bella Via. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function GalleryPage() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBackClick = () => {
    navigate('/')
    setTimeout(() => {
      const element = document.getElementById('photo-gallery')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <div className="gallery-page">
      <button
        className="gallery-back-icon gallery-page-back-icon"
        aria-label="Back to photo gallery"
        onClick={handleBackClick}
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

      <footer className="footer">
        <p>&copy; 2025 Bella Via. All rights reserved.</p>
      </footer>
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

function Bedroom2Page() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBackClick = () => {
    navigate('/')
    setTimeout(() => {
      const element = document.getElementById('virtual-tour')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <div className="bedroom-page">
      <button
        className="gallery-back-icon virtual-tour-back-icon"
        aria-label="Back to virtual tour"
        onClick={handleBackClick}
      >
        ←
      </button>

      <div className="bedroom-page-content">
        <div className="matterport-embed">
          <iframe
            width="100%"
            height="600"
            src="https://my.matterport.com/show/?m=zQMJRDMih6z&play=1&qs=1"
            frameBorder="0"
            allowFullScreen
            allow="xr-spatial-tracking"
            title="2 Bedroom Virtual Tour"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

function Bedroom3Page() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBackClick = () => {
    navigate('/')
    setTimeout(() => {
      const element = document.getElementById('virtual-tour')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <div className="bedroom-page">
      <button
        className="gallery-back-icon virtual-tour-back-icon"
        aria-label="Back to virtual tour"
        onClick={handleBackClick}
      >
        ←
      </button>

      <div className="bedroom-page-content">
        <div className="matterport-embed">
          <iframe
            width="100%"
            height="600"
            src="https://my.matterport.com/show/?m=72xJMCEbRQo&play=1&qs=1"
            frameBorder="0"
            allowFullScreen
            allow="xr-spatial-tracking"
            title="3 Bedroom Virtual Tour"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

function FloorPlan2Page() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBackClick = () => {
    navigate('/')
    setTimeout(() => {
      const element = document.getElementById('floor-plans')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <div className="bedroom-page">
      <button
        className="gallery-back-icon floor-plan-back-icon"
        aria-label="Back to floor plans"
        onClick={handleBackClick}
      >
        ←
      </button>

      <div className="bedroom-page-content">
        <div className="matterport-embed">
          <img src="/2bedplan.png" alt="2 Bedroom Floor Plan" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
      </div>
    </div>
  )
}

function FloorPlan3Page() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBackClick = () => {
    navigate('/')
    setTimeout(() => {
      const element = document.getElementById('floor-plans')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <div className="bedroom-page">
      <button
        className="gallery-back-icon floor-plan-back-icon"
        aria-label="Back to floor plans"
        onClick={handleBackClick}
      >
        ←
      </button>

      <div className="bedroom-page-content">
        <div className="matterport-embed">
          <img src="/3bedplan.png" alt="3 Bedroom Floor Plan" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
      </div>
    </div>
  )
}

export default App

