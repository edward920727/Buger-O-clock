import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // 當路由變化時關閉選單
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  // 當選單開啟時鎖定 body 滾動，關閉時解除
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    // 清理函數：組件卸載時恢復滾動
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const isActive = (path) => {
    let currentPath = location.pathname
    if (currentPath.startsWith('/Burger-O-clock')) {
      currentPath = currentPath.replace('/Burger-O-clock', '')
    }
    
    if (path === '/') {
      return currentPath === '/' || currentPath === ''
    }
    return currentPath === path
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = [
    { path: '/', label: '首頁' },
    { path: '/menu', label: '美味菜單' },
    { path: '/info', label: '聯絡資訊' }
  ]

  // 漢堡圖標 SVG（不使用外部庫，確保顯示）
  const HamburgerIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  )

  const CloseIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  )

  return (
    <>
      <nav 
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 99999,
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e5e7eb',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          width: '100%'
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(0.5rem, 2vw, 1rem)' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            height: '64px'
          }}>
            {/* 品牌 Logo */}
            <Link 
              to="/" 
              style={{ 
                fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
                fontWeight: 300,
                color: '#111827',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => e.target.style.color = '#4b5563'}
              onMouseLeave={(e) => e.target.style.color = '#111827'}
            >
              BURGER O'CLOCK TAIPEI
            </Link>

            {/* 漢堡選單按鈕 - 所有尺寸都顯示 */}
            <button
              onClick={toggleMenu}
              type="button"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#111827',
                transition: 'color 0.2s',
                outline: 'none',
                zIndex: 99999,
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#4b5563'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#111827'
              }}
              aria-label={isMenuOpen ? '關閉選單' : '開啟選單'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* 全螢幕選單 - 所有尺寸都使用 */}
      <>
        {/* 全螢幕選單容器 */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 99997,
            opacity: isMenuOpen ? 1 : 0,
            visibility: isMenuOpen ? 'visible' : 'hidden',
            transition: 'opacity 0.3s ease, visibility 0.3s ease',
            pointerEvents: isMenuOpen ? 'auto' : 'none',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: isMenuOpen ? 'blur(8px)' : 'blur(0px)',
            WebkitBackdropFilter: isMenuOpen ? 'blur(8px)' : 'blur(0px)'
          }}
          onClick={toggleMenu}
        >
          {/* 選單內容容器 */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
              transition: 'transform 0.3s ease',
              padding: '2rem'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={toggleMenu}
                style={{
                  padding: '1rem 2rem',
                  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                  fontWeight: isActive(item.path) ? 600 : 400,
                  color: isActive(item.path) ? '#ffffff' : '#e5e7eb',
                  textDecoration: 'none',
                  backgroundColor: 'transparent',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.05em',
                  textAlign: 'center',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#ffffff'
                  e.target.style.transform = 'scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = isActive(item.path) ? '#ffffff' : '#e5e7eb'
                  e.target.style.transform = 'scale(1)'
                }}
              >
                {item.label}
                {isActive(item.path) && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '60px',
                      height: '2px',
                      backgroundColor: '#fbbf24'
                    }}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </>
    </>
  )
}

export default Navbar
