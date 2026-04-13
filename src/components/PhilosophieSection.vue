<template>
  <section id="philosophie" class="philosophie">
    <div class="philosophie-grid">
      <div class="philosophie-image">
        <img src="/images/celine.jpg" alt="Céline Berthault" />
      </div>
      <div class="philosophie-card">
        <h2>Ma philosophie</h2>
        <div class="philosophie-text">
          <p class="italic accent">Offrez-vous une pause hors du temps... un moment rien que pour vous.</p>
          <p>La réflexologie est bien plus qu'un simple soin : c'est une véritable invitation à rééquilibrer votre corps et apaiser votre esprit. Grâce à une approche globale, elle agit en profondeur sur les organes, les muscles, les articulations, mais aussi sur vos émotions.</p>
          <p>Par le biais de stimulations douces des zones ou points réflexes sur vos pieds, mains, visage ou oreilles, le corps réagit pour vous permettre d'accéder au bien-être. Chaque séance est pensée pour maximiser ses bienfaits, en s'appuyant sur une méthode alliant sensorialité, précision et harmonie.</p>
          <p>Dès les premiers instants, vous êtes plongé dans une expérience unique, entièrement personnalisée. À l'écoute de vos besoins, j'adapte mes gestes et mes techniques pour vous guider vers une détente profonde. Plus qu'un moment de relaxation, cette séance vous permet de devenir acteur de votre bien-être.</p>
          <p class="bold">Alors, pourquoi attendre ? Offrez-vous cette parenthèse de bien-être et réservez votre séance dès maintenant. 🌿 ✨</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.philosophie {
  background: #f0f5f2;
  padding: 128px 32px;
}

.philosophie-grid {
  max-width: 1216px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 96px;
  align-items: center;
}

.philosophie-image img {
  width: 512px;
  height: 640px;
  object-fit: cover;
  border-radius: 40px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.philosophie-card {
  background: rgba(255, 255, 255, 0.6);
  border-radius: 40px;
  padding: 48px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.philosophie-card h2 {
  font-size: 72px;
  line-height: 72px;
  color: #94b0a1;
  letter-spacing: -0.15px;
  margin-bottom: 32px;
}

.philosophie-text {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.philosophie-text p {
  font-size: 16px;
  line-height: 26px;
  color: #4a5a51;
  letter-spacing: -0.15px;
}

.philosophie-text .italic {
  font-style: italic;
  font-weight: 700;
}

.philosophie-text .accent {
  color: #94b0a1;
}

.philosophie-text .bold {
  font-weight: 700;
}

@media (max-width: 900px) {
  .philosophie-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .philosophie-image img {
    width: 100%;
    max-width: 420px;
    height: auto;
    aspect-ratio: 4 / 5;
    margin: 0 auto;
  }
  .philosophie-card {
    padding: 32px 24px;
  }
  .philosophie-card h2 {
    font-size: 52px;
    line-height: 1;
  }
}

@media (max-width: 640px) {
  .philosophie-card h2 {
    font-size: 44px;
  }
}
</style>
