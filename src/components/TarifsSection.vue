<template>
  <section id="tarifs" class="tarifs">
    <div class="tarifs-container">
      <div class="tarifs-header">
        <span class="tarifs-label">INVESTISSEZ EN VOUS</span>
        <h2>Mes Tarifs</h2>
      </div>
      <div class="tarifs-grid">
        <div class="tarif-card">
          <h3>Séance Découverte</h3>
          <p class="tarif-duration">1 séance de 45 min</p>
          <div class="tarif-price">35&euro;</div>
        </div>
        <div class="tarif-card featured">
          <div class="tarif-badge">La plus recommandée</div>
          <h3>Séance Personnalisée</h3>
          <p class="tarif-duration">1 séance de 1h à 1h30</p>
          <div class="tarif-price">60&euro;</div>
          <a href="#contact" class="tarif-btn">PRENDRE RDV</a>
        </div>
        <div class="tarif-card">
          <h3>Cure</h3>
          <p class="tarif-duration">5 séances de 1h à 1h30</p>
          <div class="tarif-price">275&euro;</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tarifs {
  background: #f8faf9;
  padding: 128px 0;
}

.tarifs-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.tarifs-header {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.tarifs-label {
  font-family: 'Epilogue', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 3.6px;
  text-transform: uppercase;
  color: #94b0a1;
  line-height: 16px;
}

.tarifs-header h2 {
  font-size: 96px;
  line-height: 96px;
  color: #94b0a1;
  letter-spacing: -0.15px;
}

.tarifs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  align-items: center;
}

.tarif-card {
  background: #f0f5f2;
  border-radius: 40px;
  padding: 41px 44px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  min-height: 406px;
  justify-content: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.tarif-card.featured {
  background: #94b0a1;
  color: #fff;
  min-height: 426px;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.tarif-badge {
  position: absolute;
  top: -15px;
  background: #3d4f45;
  color: #fff;
  font-family: 'Epilogue', sans-serif;
  font-size: 12px;
  letter-spacing: 0.5px;
  padding: 4px 24px;
  border-radius: 9999px;
}

.tarif-card h3 {
  font-family: 'Sacramento', cursive;
  font-size: 48px;
  line-height: 48px;
  color: #94b0a1;
  letter-spacing: -0.15px;
}

.tarif-card.featured h3 {
  color: #fff;
}

.tarif-duration {
  font-size: 16px;
  line-height: 24px;
  opacity: 0.8;
}

.tarif-price {
  font-family: 'Epilogue', sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 1;
  color: #94b0a1;
  margin-top: 32px;
}

.tarif-card.featured .tarif-price {
  color: #fff;
}

.tarif-btn {
  font-family: 'Epilogue', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #94b0a1;
  background: #fff;
  padding: 16px 0;
  border-radius: 9999px;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-top: 16px;
  transition: opacity 0.3s;
}

.tarif-btn:hover {
  opacity: 0.9;
}

@media (max-width: 900px) {
  .tarifs-container {
    gap: 48px;
    padding: 0 20px;
  }
  .tarifs-header h2 {
    font-size: 56px;
    line-height: 1;
  }
  .tarifs-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .tarif-card {
    min-height: auto;
    padding: 36px 28px;
  }
  .tarif-card.featured {
    min-height: auto;
  }
}

@media (max-width: 640px) {
  .tarifs-header h2 {
    font-size: 44px;
  }
  .tarif-price {
    font-size: 40px;
  }
}
</style>
