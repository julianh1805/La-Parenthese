<template>
  <section class="spheres">
    <img class="spheres-deco" src="/images/spheres-deco.png" alt="" aria-hidden="true" />
    <div class="spheres-container">
      <div class="spheres-header">
        <span class="spheres-label">LES SPHÈRES DE RÉFLEXOLOGIE</span>
        <h2>Les Sphères de Réflexologie</h2>
        <p class="spheres-sub">Plantaire, palmaire, auriculaire et faciale</p>
      </div>
      <div class="spheres-grid">
        <div class="sphere-card">
          <img src="/images/plantaire.jpg" alt="Réflexologie plantaire" />
          <div class="sphere-overlay">
            <span>PLANTAIRE</span>
          </div>
        </div>
        <div class="sphere-card">
          <img src="/images/palmaire.jpg" alt="Réflexologie palmaire" />
          <div class="sphere-overlay">
            <span>PALMAIRE</span>
          </div>
        </div>
        <div class="sphere-card">
          <img src="/images/auriculaire.jpg" alt="Réflexologie auriculaire" />
          <div class="sphere-overlay">
            <span>AURICULAIRE</span>
          </div>
        </div>
        <div class="sphere-card">
          <img src="/images/faciale.jpg" alt="Réflexologie faciale" />
          <div class="sphere-overlay">
            <span>FACIALE</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.spheres {
  background: #8ba88e;
  padding: 96px 0;
  position: relative;
  overflow: hidden;
}

.spheres-deco {
  position: absolute;
  left: -336px;
  top: 19px;
  width: 672px;
  height: 672px;
  opacity: 0.1;
  pointer-events: none;
}

.spheres-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 64px;
}

.spheres-header {
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
}

.spheres-label {
  font-family: 'Epilogue', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 3.6px;
  text-transform: uppercase;
  color: #fff;
  line-height: 16px;
}

.spheres-header h2 {
  font-size: 96px;
  line-height: 96px;
  color: #fff;
  letter-spacing: -0.15px;
}

.spheres-sub {
  font-family: 'Epilogue', sans-serif;
  font-style: italic;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  letter-spacing: -0.15px;
}

.spheres-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.sphere-card {
  aspect-ratio: 1;
  border-radius: 40px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.sphere-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sphere-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.sphere-overlay:hover {
  background: rgba(0, 0, 0, 0.25);
}

.sphere-overlay span {
  font-family: 'Epilogue', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 3.6px;
  color: #fff;
}

@media (max-width: 900px) {
  .spheres {
    padding: 72px 0;
  }
  .spheres-container {
    gap: 40px;
    padding: 0 20px;
  }
  .spheres-header h2 {
    font-size: 56px;
    line-height: 1;
  }
  .spheres-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  .sphere-card {
    border-radius: 28px;
  }
}

@media (max-width: 640px) {
  .spheres-header h2 {
    font-size: 44px;
  }
}
</style>
