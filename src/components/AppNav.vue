<template>
  <nav class="nav" :class="{ 'is-open': open }">
    <div class="nav-container">
      <a href="#accueil" class="nav-logo" @click="close">
        <img src="/images/logo.png" alt="La Parenthèse" />
      </a>
      <div class="nav-links">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          class="nav-link"
          :class="{ active: active === link.id }"
          @click="close"
        >{{ link.label }}</a>
        <a href="#contact" class="nav-btn nav-btn--mobile" @click="close">PRENDRE RDV</a>
      </div>
      <a href="#contact" class="nav-btn nav-btn--desktop" @click="close">PRENDRE RDV</a>
      <button
        type="button"
        class="nav-burger"
        :aria-expanded="open"
        aria-label="Menu"
        @click="open = !open"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const links = [
  { id: 'accueil', label: 'ACCUEIL' },
  { id: 'philosophie', label: 'PHILOSOPHIE' },
  { id: 'accompagnement', label: 'ACCOMPAGNEMENT' },
  { id: 'tarifs', label: 'TARIFS' },
  { id: 'contact', label: 'CONTACT' },
]
const active = ref('accueil')
const open = ref(false)
const close = () => { open.value = false }

let observer = null
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) active.value = e.target.id
      })
    },
    { rootMargin: '-40% 0px -55% 0px' }
  )
  links.forEach((l) => {
    const el = document.getElementById(l.id)
    if (el) observer.observe(el)
  })
})
onUnmounted(() => observer?.disconnect())
</script>

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
  font-family: 'Sen', sans-serif;
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
  font-family: 'Sen', sans-serif;
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

.nav-btn--mobile {
  display: none;
}

.nav-burger {
  display: none;
  width: 40px;
  height: 40px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.nav-burger span {
  display: block;
  width: 24px;
  height: 2px;
  background: #3d4f45;
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}

@media (max-width: 900px) {
  .nav-container {
    padding: 10px 20px;
    gap: 16px;
  }
  .nav-logo img {
    width: 48px;
    height: 48px;
  }
  .nav-btn--desktop {
    display: none;
  }
  .nav-btn--mobile {
    display: inline-flex;
    align-self: center;
    margin-top: 12px;
  }
  .nav-burger {
    display: inline-flex;
  }
  .nav-links {
    position: fixed;
    top: 68px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 16px 24px 24px;
    background: rgba(248, 250, 249, 0.98);
    backdrop-filter: blur(8px);
    box-shadow: 0 10px 30px rgba(132, 169, 140, 0.15);
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.25s, opacity 0.25s;
  }
  .nav.is-open .nav-links {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
  .nav-link {
    padding: 16px 4px;
    font-size: 14px;
    border-bottom: 1px solid rgba(148, 176, 161, 0.15);
  }
  .nav-link:hover,
  .nav-link.active {
    border-bottom: 1px solid #94b0a1;
  }
  .nav.is-open .nav-burger span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }
  .nav.is-open .nav-burger span:nth-child(2) {
    opacity: 0;
  }
  .nav.is-open .nav-burger span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }
}
</style>
