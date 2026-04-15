<template>
  <section id="accueil" class="hero" :style="{ backgroundImage: `url(${require('@/assets/images/hero-bg.jpg')})` }">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="hero-text">
        <div class="hero-subtitle">L'ART DU SOUFFLE &amp; DE LA DÉTENTE</div>
        <h1>La Parenthèse</h1>
        <h2 class="hero-h2">RÉFLEXOLOGIE COMBINÉE</h2>
        <p class="hero-tagline">Une invitation à rééquilibrer votre corps et apaiser votre esprit.</p>
        <div class="hero-buttons">
          <a href="#accompagnement" class="btn-primary">MON ACCOMPAGNEMENT</a>
        </div>
      </div>
      <div class="hero-logo" aria-hidden="true"></div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 48px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 88px;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(248, 250, 249, 0.3);
}

.hero-content {
  position: relative;
  width: 100%;
  max-width: 1216px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.hero-logo {
  flex-shrink: 0;
  width: 440px;
  height: 440px;
  align-self: flex-start;
  margin-top: -40px;
  background-color: #3d4f45;
  -webkit-mask-image: url('~@/assets/images/logo.svg');
  mask-image: url('~@/assets/images/logo.svg');
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
}

.hero-subtitle {
  align-self: flex-start;
  font-family: 'Sen', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 4.8px;
  text-transform: uppercase;
  color: #fff;
  background: rgba(61, 79, 69, 0.7);
  padding: 6px 14px;
  border-radius: 9999px;
  line-height: 16px;
}

.hero h1 {
  font-size: 180px;
  line-height: 1;
  color: #3d4f45;
  letter-spacing: -0.15px;
  padding-top: 16px;
}

.hero-h2 {
  font-family: 'Sen', sans-serif;
  font-weight: 700;
  font-size: 72px;
  line-height: 1;
  color: #3d4f45;
  letter-spacing: -0.15px;
}

.hero-tagline {
  font-family: 'Sen', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5;
  color: #3d4f45;
  letter-spacing: -0.15px;
  opacity: 0.95;
  padding-top: 40px;
}

.hero-buttons {
  display: flex;
  gap: 24px;
  padding-top: 40px;
}

.btn-primary {
  font-family: 'Sen', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #fff;
  background: #94b0a1;
  padding: 20px 40px;
  border-radius: 9999px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s;
}

.btn-primary:hover {
  opacity: 0.9;
}

.btn-outline {
  font-family: 'Sen', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #94b0a1;
  border: 2px solid #94b0a1;
  padding: 20px 40px;
  border-radius: 9999px;
  transition: background 0.3s, color 0.3s;
}

.btn-outline:hover {
  background: #94b0a1;
  color: #fff;
}

@media (max-width: 900px) {
  .hero-logo {
    display: none;
  }
  .hero {
    height: calc(100vh - 68px);
    min-height: 560px;
    padding: 0 24px;
    margin-top: 68px;
  }
  .hero h1 {
    font-size: 180px;
  }
  .hero-h2 {
    font-size: 56px;
  }
  .hero-tagline {
    font-size: 18px;
    line-height: 1.5;
    padding-top: 32px;
  }
  .hero-subtitle {
    font-size: 12px;
    letter-spacing: 3.2px;
  }
  .hero-buttons {
    padding-top: 36px;
  }
  .btn-primary {
    padding: 18px 32px;
    font-size: 12px;
  }
}

@media (max-width: 640px) {
  .hero {
    height: calc(100vh - 68px);
    min-height: 560px;
    padding: 0 20px;
  }
  .hero h1 {
    font-size: 150px;
  }
  .hero-h2 {
    font-size: 44px;
  }
  .hero-tagline {
    font-size: 16px;
  }
}
</style>
