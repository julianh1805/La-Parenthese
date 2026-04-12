<template>
  <section id="accueil" class="hero" :style="{ backgroundImage: `url(${require('@/assets/images/hero-bg.jpg')})` }">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="hero-subtitle">L'ART DU SOUFFLE &amp; DE LA DÉTENTE</div>
      <h1>La Parenthèse -</h1>
      <h2 class="hero-h2">Réflexologie Combinée</h2>
      <p class="hero-tagline">Une invitation à rééquilibrer votre corps et apaiser votre esprit.</p>
      <div class="hero-buttons">
        <a href="#accompagnement" class="btn-primary">MON ACCOMPAGNEMENT</a>
      </div>
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
  flex-direction: column;
  gap: 8px;
}

.hero-subtitle {
  font-family: 'Epilogue', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 4.8px;
  text-transform: uppercase;
  color: #94b0a1;
  line-height: 16px;
}

.hero h1 {
  font-size: 72px;
  line-height: 1;
  color: #3d4f45;
  letter-spacing: -0.15px;
  padding-top: 16px;
}

.hero-h2 {
  font-size: 72px;
  line-height: 1;
  color: #3d4f45;
  letter-spacing: -0.15px;
}

.hero-tagline {
  font-family: 'Sacramento', cursive;
  font-size: 36px;
  line-height: 58.5px;
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
  font-family: 'Epilogue', sans-serif;
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
  font-family: 'Epilogue', sans-serif;
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
</style>
