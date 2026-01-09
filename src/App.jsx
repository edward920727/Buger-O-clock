import { Routes, Route, Link } from 'react-router-dom'
import { ClipboardList } from 'lucide-react'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import MenuPage from './pages/MenuPage'
import InfoPage from './pages/InfoPage'

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#ffffff'
    }}>
      <ScrollToTop />
      <Navbar />
      <main style={{
        flex: 1,
        width: '100%'
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </main>
      
      {/* Footer - 顯示在所有頁面 */}
      <footer style={{
        backgroundColor: '#111827',
        padding: 'clamp(2rem, 5vw, 3rem) clamp(0.75rem, 3vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
        textAlign: 'center',
        width: '100%'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(1rem, 3vw, 1.5rem)',
          width: '100%'
        }}>
          <div style={{
            fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
            color: '#d1d5db',
            lineHeight: '1.6'
          }}>
            <p style={{ margin: '0 0 0.5rem 0', padding: '0 0.5rem' }}>
              地址：111 臺北市士林區中山北路七段36號
            </p>
            <p style={{ margin: '0 0 1.5rem 0', padding: '0 0.5rem' }}>
              營業時間：7:00 pm - 3:00 am
            </p>
            
            {/* 社群媒體按鈕 */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 'clamp(0.75rem, 2vw, 1rem)',
              marginBottom: '1.5rem',
              flexWrap: 'wrap',
              padding: '0 0.5rem'
            }}>
              {/* Facebook 按鈕 */}
              <a
                href="https://www.facebook.com/burgeroclocktaipei/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="前往 Facebook"
                style={{
                  width: 'clamp(40px, 10vw, 48px)',
                  height: 'clamp(40px, 10vw, 48px)',
                  borderRadius: '50%',
                  border: '2px solid #ffffff',
                  backgroundColor: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  flexShrink: 0,
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff'
                  e.currentTarget.querySelector('svg').style.fill = '#111827'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.querySelector('svg').style.fill = '#ffffff'
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                  aria-hidden="true"
                  style={{
                    transition: 'fill 0.3s ease',
                    width: 'clamp(20px, 5vw, 24px)',
                    height: 'clamp(20px, 5vw, 24px)'
                  }}
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>前往 Facebook</span>
              </a>

              {/* Instagram 按鈕 */}
              <a
                href="https://www.instagram.com/burgeroclocktaipei/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="前往 Instagram"
                style={{
                  width: 'clamp(40px, 10vw, 48px)',
                  height: 'clamp(40px, 10vw, 48px)',
                  borderRadius: '50%',
                  border: '2px solid #ffffff',
                  backgroundColor: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff'
                  e.currentTarget.querySelector('svg').style.fill = '#111827'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.querySelector('svg').style.fill = '#ffffff'
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#ffffff"
                  aria-hidden="true"
                  style={{
                    transition: 'fill 0.3s ease',
                    width: 'clamp(20px, 5vw, 24px)',
                    height: 'clamp(20px, 5vw, 24px)'
                  }}
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* 菜單圖示按鈕 */}
              <div style={{ position: 'relative' }}>
                <Link
                  to="/menu"
                  aria-label="前往菜單頁面"
                  style={{
                    width: 'clamp(40px, 10vw, 48px)',
                    height: 'clamp(40px, 10vw, 48px)',
                    borderRadius: '50%',
                    border: '2px solid #ffffff',
                    backgroundColor: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    flexShrink: 0
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff'
                    const svg = e.currentTarget.querySelector('svg')
                    if (svg) svg.setAttribute('stroke', '#111827')
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    const svg = e.currentTarget.querySelector('svg')
                    if (svg) svg.setAttribute('stroke', '#ffffff')
                  }}
                >
                  <ClipboardList
                    size={24}
                    stroke="#ffffff"
                    strokeWidth={2}
                    style={{
                      transition: 'stroke 0.3s ease',
                      width: 'clamp(20px, 5vw, 24px)',
                      height: 'clamp(20px, 5vw, 24px)',
                      flexShrink: 0,
                      pointerEvents: 'none'
                    }}
                    aria-hidden="true"
                  />
                  <span style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>前往菜單</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 版權文字 */}
          <div style={{
            paddingTop: 'clamp(1rem, 3vw, 1.5rem)',
            borderTop: '1px solid #374151',
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem'
          }}>
            <p style={{
              fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
              color: '#9ca3af',
              fontWeight: 400,
              margin: '0 0 0.5rem 0'
            }}>
              © 2026 Burger O'clock. All rights Reserved.
            </p>
            <p style={{
              fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
              color: '#6b7280',
              fontWeight: 400,
              fontFamily: 'Arial, "Microsoft JhengHei", sans-serif',
              margin: 0
            }}>
              <a 
                href="https://edward920727.github.io/edward/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: '#6b7280',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#d1d5db'}
                onMouseLeave={(e) => e.target.style.color = '#6b7280'}
              >
                Edward 網頁開發
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
