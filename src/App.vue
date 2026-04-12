<template>
  <div id="app">
    <AppNav />
    <main>
      <HeroSection />
      <PhilosophieSection />
      <AccompagnementSection />
      <SpheresSection />
      <TarifsSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppNav from '@/components/AppNav.vue'
import HeroSection from '@/components/HeroSection.vue'
import PhilosophieSection from '@/components/PhilosophieSection.vue'
import AccompagnementSection from '@/components/AccompagnementSection.vue'
import SpheresSection from '@/components/SpheresSection.vue'
import TarifsSection from '@/components/TarifsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>
