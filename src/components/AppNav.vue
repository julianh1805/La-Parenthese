<template>
  <nav class="nav">
    <div class="nav-container">
      <a href="#accueil" class="nav-logo">
        <img src="/images/logo.png" alt="La Parenthèse" />
      </a>
      <div class="nav-links">
        <a href="#accueil" class="nav-link active">ACCUEIL</a>
        <a href="#philosophie" class="nav-link">PHILOSOPHIE</a>
        <a href="#accompagnement" class="nav-link">ACCOMPAGNEMENT</a>
        <a href="#tarifs" class="nav-link">TARIFS</a>
        <a href="#contact" class="nav-link">CONTACT</a>
      </div>
      <a href="#contact" class="nav-btn">PRENDRE RDV</a>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(248, 250, 249, 0.9);
  backdrop-filter: blur(6px);
  box-shadow: 0 10px 30px rgba(132, 169, 140, 0.1);
}

.nav-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 12px 32px;
  display: flex;
  align-items: center;
  gap: 40px;
}

.nav-logo {
  margin-right: auto;
}

.nav-logo img {
  width: 64px;
  height: 64px;
}

.nav-links {
  display: flex;
  gap: 40px;
  align-items: center;
}

.nav-link {
  font-family: 'Epilogue', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: rgba(74, 90, 81, 0.7);
  transition: color 0.3s;
}

.nav-link:hover,
.nav-link.active {
  color: #94b0a1;
  border-bottom: 2px solid #94b0a1;
}

.nav-btn {
  font-family: 'Epilogue', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  color: #fff;
  background: #94b0a1;
  padding: 12px 32px;
  border-radius: 9999px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s;
}

.nav-btn:hover {
  opacity: 0.9;
}
</style>
