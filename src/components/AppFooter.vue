<template>
  <footer class="footer">
    <div class="footer-container">
      <a href="#accueil" class="footer-logo">
        <img src="/images/logo.png" alt="La Parenthèse" />
      </a>

      <div class="footer-socials">
        <a href="https://www.instagram.com/reflexologielaparenthese/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="social-link">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="2"/>
            <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/>
            <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
          </svg>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61587524751766" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="social-link">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5H16.7V4.6c-.3-.04-1.3-.13-2.5-.13-2.45 0-4.15 1.5-4.15 4.25v2.17H7.3V14h2.75v8h3.45z"/>
          </svg>
        </a>
        <a href="mailto:laparentheseancenis@gmail.com" aria-label="Email" class="social-link">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2.5" y="5" width="19" height="14" rx="2" stroke="currentColor" stroke-width="2"/>
            <path d="M3 6.5L12 13L21 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>

      <div class="footer-meta">
        <a href="/politique-confidentialite.html" class="footer-link">Politique de confidentialité</a>
        <p class="footer-credit">&copy; 2026 La Parenthèse</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #fff;
  padding: 0;
  border-top: 1px solid #e5ede8;
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}

.footer-logo img {
  width: 72px;
  height: 72px;
  display: block;
}

.footer-socials {
  display: flex;
  gap: 20px;
}

.social-link {
  width: 44px;
  height: 44px;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #4a5a51;
  background: #f0f5f2;
  transition: background 0.3s, color 0.3s;
}

.social-link:hover {
  background: #94b0a1;
  color: #fff;
}

.footer-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  text-align: right;
}

.footer-link {
  font-size: 12px;
  line-height: 15px;
  color: #4a5a51;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #94b0a1;
}

.footer-credit {
  font-size: 12px;
  line-height: 15px;
  color: rgba(74, 90, 81, 0.6);
}

@media (max-width: 900px) {
  .footer-container {
    flex-direction: column;
    padding: 32px 24px;
    gap: 20px;
    text-align: center;
  }
  .footer-meta {
    align-items: center;
    text-align: center;
  }
}
</style>
