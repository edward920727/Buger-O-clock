import { useState } from 'react'
import menuData from '../menuData.ts'

// Tab 分類映射
const tabCategories = {
  '牛肉堡': ['牛肉堡'],
  '雞肉': ['雞肉堡', '熱狗', '素食'],
  '點心': ['點心'],
  '飲料': ['飲品/甜點']
}

function MenuPage() {
  const [activeTab, setActiveTab] = useState('牛肉堡')

  // 根據選中的 Tab 過濾菜單
  const getFilteredMenu = () => {
    const categoriesToShow = tabCategories[activeTab] || []
    return menuData.filter(item => categoriesToShow.includes(item.category))
  }

  const filteredMenu = getFilteredMenu()

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', paddingTop: '80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(1rem, 3vw, 2rem) clamp(0.75rem, 3vw, 1.5rem)', width: '100%' }}>
        {/* 頁面標題 */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <h1 style={{ 
            fontSize: 'clamp(1.75rem, 5vw, 3rem)', 
            fontWeight: 300, 
            color: '#111827', 
            marginBottom: '1rem',
            letterSpacing: '0.05em'
          }}>Menu</h1>
          <div style={{ width: 'clamp(72px, 15vw, 96px)', height: '4px', backgroundColor: '#111827', margin: '0 auto' }}></div>
        </div>

        {/* Tab 分類欄 */}
        <nav style={{ borderBottom: '1px solid #e5e7eb', marginBottom: 'clamp(1.5rem, 4vw, 3rem)', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }} aria-label="菜單分類導覽">
          <div style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'flex-start', gap: '0.5rem', paddingBottom: '0.5rem', minWidth: 'max-content' }}>
            {Object.keys(tabCategories).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 2rem)',
                  fontSize: 'clamp(0.8125rem, 2.5vw, 1rem)',
                  fontWeight: 500,
                  border: 'none',
                  borderBottom: activeTab === tab ? '2px solid #111827' : '2px solid transparent',
                  color: activeTab === tab ? '#111827' : '#6b7280',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== tab) {
                    e.target.style.color = '#111827'
                    e.target.style.borderBottomColor = '#d1d5db'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab) {
                    e.target.style.color = '#6b7280'
                    e.target.style.borderBottomColor = 'transparent'
                  }
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>

        {/* 菜單內容區塊 */}
        <section aria-labelledby="menu-section-title">
          <h2 id="menu-section-title" style={{ display: 'none' }}>{activeTab}類別</h2>
          {filteredMenu.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '5rem 0' }}>
              <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>該分類暫無商品</p>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
              gap: 'clamp(1rem, 3vw, 2rem)'
            }}>
              {filteredMenu.map((item) => (
                <article
                  key={item.id}
                  style={{ borderBottom: '1px solid #f3f4f6', paddingBottom: 'clamp(1rem, 3vw, 2rem)' }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'clamp(0.75rem, 2vw, 1rem)', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1 1 auto', minWidth: '200px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', fontWeight: 400, color: '#111827', margin: 0 }}>
                          {item.name_zh}
                        </h3>
                        {item.isRecommended && (
                          <span 
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.375rem',
                              fontSize: 'clamp(0.625rem, 2vw, 0.75rem)',
                              fontWeight: 800,
                              padding: 'clamp(0.25rem, 1vw, 0.375rem) clamp(0.5rem, 2vw, 0.75rem)',
                              borderRadius: '0.5rem',
                              backgroundColor: '#fbbf24',
                              color: '#1f2937',
                              letterSpacing: '0.08em',
                              boxShadow: '0 3px 6px rgba(251, 191, 36, 0.4)',
                              border: '1px solid rgba(251, 191, 36, 0.5)',
                              lineHeight: '1.2',
                              whiteSpace: 'nowrap'
                            }}
                          >
                            <span style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)' }}>⭐</span>
                            <span>推薦</span>
                          </span>
                        )}
                      </div>
                      <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#6b7280', marginBottom: '0.5rem', marginTop: 0 }}>
                        {item.name_en}
                      </p>
                      <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#4b5563', lineHeight: '1.6', margin: 0 }}>
                        {item.description}
                      </p>
                    </div>
                    <span style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', fontWeight: 300, color: '#111827', whiteSpace: 'nowrap', flexShrink: 0 }}>
                      ${item.price === 0 ? '???' : item.price}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* 備註資訊 */}
        <aside style={{ marginTop: 'clamp(2rem, 5vw, 5rem)', paddingTop: 'clamp(1.5rem, 4vw, 3rem)', borderTop: '1px solid #e5e7eb' }} aria-label="餐廳資訊">
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#4b5563', margin: 0 }}>
              低消 100 元
            </p>
            <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#4b5563', margin: 0 }}>
              無服務費
            </p>
            <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#4b5563', margin: 0 }}>
              飲品請至櫃檯挑選
            </p>
            <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#4b5563', marginTop: '1.5rem', marginBottom: 0 }}>
              * 以上漢堡皆可升級套餐
            </p>
            <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#4b5563', margin: 0 }}>
              * 加35元漢堡肉即可換特醃雞腿排
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default MenuPage
