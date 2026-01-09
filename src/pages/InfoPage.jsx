function InfoPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', paddingTop: '80px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(1rem, 3vw, 2rem) clamp(0.75rem, 3vw, 1.5rem)', width: '100%' }}>
        {/* 頁面標題 */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <h1 style={{ 
            fontSize: 'clamp(1.75rem, 5vw, 3rem)', 
            fontWeight: 300, 
            color: '#111827', 
            marginBottom: '1rem',
            letterSpacing: '0.05em'
          }}>聯絡我們</h1>
          <div style={{ width: 'clamp(72px, 15vw, 96px)', height: '4px', backgroundColor: '#111827', margin: '0 auto' }}></div>
        </div>

        {/* 品牌故事 */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1rem, 3vw, 2rem)', color: '#374151', lineHeight: '1.75', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <h2 style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)', fontWeight: 300, color: '#111827', marginBottom: '1rem', marginTop: 0 }}>品牌故事</h2>
          <p style={{ fontSize: 'clamp(0.9375rem, 2.5vw, 1.125rem)', margin: 0 }}>
            用心的老闆是個在台灣過美國時間的人，因為老闆是真正美國人的朋友，所以對美式食物有說不出的愛。
          </p>
          <p style={{ fontSize: 'clamp(0.9375rem, 2.5vw, 1.125rem)', margin: 0 }}>
            因為天母的宵夜選擇實在太少，在一個飢寒交迫的瞬間，腦袋突然迸出一個念頭：「來打個賭，賭上男人的生命跟榮譽，開一家深夜美式漢堡店吧！」
          </p>
        </section>

        {/* 品牌理念 */}
        <section style={{ backgroundColor: '#f9fafb', padding: 'clamp(1rem, 3vw, 2rem)', marginBottom: 'clamp(2rem, 5vw, 4rem)', borderRadius: '8px' }}>
          <h2 style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)', fontWeight: 300, color: '#111827', marginBottom: '1rem', marginTop: 0 }}>品牌理念</h2>
          <p style={{ fontSize: 'clamp(0.9375rem, 2.5vw, 1.125rem)', color: '#374151', lineHeight: '1.75', textAlign: 'center', margin: 0 }}>
            Burger O'clock 也是一個人生充電站，參與你人生的每一個時刻！<br />
            讓我們吃飽喝足後充電，一起為明天的人生加油！
          </p>
        </section>

        {/* 人生哲學 */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <h2 style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)', fontWeight: 300, color: '#111827', marginBottom: '1rem', marginTop: 0 }}>人生哲學</h2>
          <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#6b7280', textAlign: 'center', margin: 0 }}>#什麼是人生</p>
          <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#6b7280', textAlign: 'center', margin: 0 }}>#人生就是吃堡睡睡飽吃啊</p>
          <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#6b7280', textAlign: 'center', margin: 0 }}>#在能吃飯的時候好好吃飯</p>
          <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#6b7280', textAlign: 'center', margin: 0 }}>#在能睡覺的時候好好睡覺</p>
        </section>

        {/* 聯絡資訊 */}
        <section style={{ borderTop: '1px solid #e5e7eb', paddingTop: 'clamp(1.5rem, 4vw, 3rem)', display: 'flex', flexDirection: 'column', gap: 'clamp(1rem, 3vw, 1.5rem)', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)', fontWeight: 300, color: '#111827', marginBottom: 'clamp(1rem, 3vw, 2rem)', marginTop: 0 }}>Burger O'clock Taipei</h2>
          <address style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.75rem, 2vw, 1rem)', color: '#4b5563', fontStyle: 'normal' }}>
            <div>
              <strong style={{ fontWeight: 500, marginBottom: '0.25rem', marginTop: 0, fontSize: 'clamp(0.875rem, 2.5vw, 1rem)', display: 'block' }}>地址</strong>
              <p style={{ margin: 0, fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>111台北市士林區中山北路七段36號</p>
              <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', marginTop: '0.25rem', marginBottom: 0 }}>1F, NO.36, Sec.7, Zhongshan N. Rd. Shilin Dist., Taipei City 111, Taiwan</p>
            </div>
            <div>
              <strong style={{ fontWeight: 500, marginBottom: '0.25rem', marginTop: 0, fontSize: 'clamp(0.875rem, 2.5vw, 1rem)', display: 'block' }}>電話</strong>
              <p style={{ margin: 0, fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>
                <a href="tel:0900777093" style={{ color: 'inherit', textDecoration: 'none' }}>0900-777-093</a>
              </p>
            </div>
            <div>
              <strong style={{ fontWeight: 500, marginBottom: '0.25rem', marginTop: 0, fontSize: 'clamp(0.875rem, 2.5vw, 1rem)', display: 'block' }}>營業時間</strong>
              <p style={{ margin: 0, fontSize: 'clamp(0.875rem, 2.5vw, 1rem)' }}>週一至週日 19:00 - 03:00</p>
              <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#6b7280', marginTop: '0.25rem', marginBottom: 0 }}>(宵夜場首選)</p>
            </div>
            {/* 社群連結 */}
            <div style={{ paddingTop: '1rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'clamp(0.75rem, 2vw, 1rem)' }}>
              <a 
                href="https://www.facebook.com/burgeroclocktaipei/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: 'clamp(0.5rem, 2vw, 0.625rem) clamp(1rem, 3vw, 1.5rem)',
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s',
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#2563eb'}
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" style={{ width: 'clamp(16px, 4vw, 20px)', height: 'clamp(16px, 4vw, 20px)', flexShrink: 0 }}>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook 粉專</span>
              </a>
              
              <a 
                href="https://www.instagram.com/burger_oclock/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: 'clamp(0.5rem, 2vw, 0.625rem) clamp(1rem, 3vw, 1.5rem)',
                  background: 'linear-gradient(to right, #9333ea, #ec4899, #f97316)',
                  color: '#ffffff',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" style={{ width: 'clamp(16px, 4vw, 20px)', height: 'clamp(16px, 4vw, 20px)', flexShrink: 0 }}>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
              
              <a 
                href="https://www.ubereats.com/store-browse-uuid/3775e491-a246-4430-a302-df86693ea25d?diningMode=DELIVERY" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: 'clamp(0.5rem, 2vw, 0.625rem) clamp(1rem, 3vw, 1.5rem)',
                  backgroundColor: '#16a34a',
                  color: '#ffffff',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s',
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#15803d'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#16a34a'}
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" style={{ width: 'clamp(16px, 4vw, 20px)', height: 'clamp(16px, 4vw, 20px)', flexShrink: 0 }}>
                  <path d="M0 10h24v4H0z"/>
                  <path d="M12 0L0 6v2h12V0zm0 24l12-6v-2H12v8z"/>
                </svg>
                <span>Uber Eats</span>
              </a>
            </div>
          </address>
          
          {/* 備註資訊 */}
          <aside style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column', gap: '0.5rem' }} aria-label="餐廳規則">
            <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#4b5563', margin: 0 }}>低消 100 元</p>
            <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', color: '#4b5563', margin: 0 }}>無服務費</p>
          </aside>
        </section>
      </div>
    </div>
  )
}

export default InfoPage
