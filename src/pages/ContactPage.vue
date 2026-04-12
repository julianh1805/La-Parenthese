<template>
  <main class="contact">
    <h1>Contact</h1>

    <form v-if="!sent" class="contact-form" @submit.prevent="submit">
      <div class="field">
        <label for="name">Nom</label>
        <input id="name" v-model="form.name" type="text" required />
      </div>

      <div class="field">
        <label for="email">Email</label>
        <input id="email" v-model="form.email" type="email" required />
      </div>

      <div class="field">
        <label for="message">Message</label>
        <textarea id="message" v-model="form.message" rows="5" required></textarea>
      </div>

      <p v-if="error" class="error">{{ error }}</p>

      <button type="submit" :disabled="loading">
        {{ loading ? 'Envoi...' : 'Envoyer' }}
      </button>
    </form>

    <p v-else class="success">Merci, votre message a bien été envoyé !</p>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({ name: '', email: '', message: '' })
const loading = ref(false)
const error = ref('')
const sent = ref(false)

async function submit() {
  loading.value = true
  error.value = ''

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    const data = await res.json()

    if (!res.ok) {
      error.value = data.error || 'Une erreur est survenue'
      return
    }

    sent.value = true
  } catch {
    error.value = 'Impossible de contacter le serveur'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.contact {
  max-width: 600px;
  margin: 4rem auto;
  padding: 0 1rem;
}

.contact h1 {
  margin-bottom: 2rem;
}

.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.field label {
  margin-bottom: 0.25rem;
  font-weight: 600;
}

.field input,
.field textarea {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

button {
  padding: 0.75rem 1.5rem;
  background: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error {
  color: #c00;
  margin-bottom: 1rem;
}

.success {
  color: #090;
  font-size: 1.1rem;
}
</style>
