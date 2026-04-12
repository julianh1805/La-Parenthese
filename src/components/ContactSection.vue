<template>
  <section id="contact" class="contact">
    <div class="contact-grid">
      <div class="contact-info">
        <h2>Me Contacter</h2>

        <div class="info-items">
          <div class="info-item">
            <div class="info-icon">
              <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 0C4.03 0 0 4.03 0 9C0 15.75 9 22 9 22S18 15.75 18 9C18 4.03 13.97 0 9 0ZM9 12.25C7.21 12.25 5.75 10.79 5.75 9S7.21 5.75 9 5.75 12.25 7.21 12.25 9 10.79 12.25 9 12.25Z" fill="#fff"/>
              </svg>
            </div>
            <div class="info-text">
              <h4>Le Cabinet</h4>
              <p>261 rue Pierre Dautel<br/>44150 Ancenis</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 8.63C5.69 11.86 8.25 14.41 11.47 16.1L13.97 13.6C14.28 13.29 14.72 13.2 15.11 13.33C16.31 13.72 17.6 13.93 18.94 13.93C19.53 13.93 20 14.4 20 14.99V18.94C20 19.53 19.53 20 18.94 20C8.48 20 0 11.52 0 1.06C0 0.47 0.47 0 1.06 0H5.01C5.6 0 6.07 0.47 6.07 1.06C6.07 2.4 6.28 3.69 6.67 4.89C6.79 5.28 6.7 5.72 6.39 6.03L4 8.63Z" fill="#fff"/>
              </svg>
            </div>
            <div class="info-text">
              <h4>Téléphone</h4>
              <p>07 45 84 80 77</p>
            </div>
          </div>
          <div class="info-item">
            <div class="info-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9" stroke="#fff" stroke-width="2"/>
                <path d="M10 5V10L13 12" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="info-text">
              <h4>Sur Rendez-vous</h4>
              <p>Uniquement sur réservation</p>
            </div>
          </div>
        </div>

        <div class="contact-author">
          <img src="/images/celine.jpg" alt="Céline Berthault" class="author-avatar" />
          <p class="author-name">Céline Berthault</p>
        </div>
      </div>

      <div class="contact-form-wrapper">
        <form v-if="!sent" class="contact-form" @submit.prevent="submit">
          <div class="field">
            <label>Nom Complet</label>
            <input v-model="form.name" type="text" placeholder="Votre nom" required />
          </div>
          <div class="field">
            <label>Email</label>
            <input v-model="form.email" type="email" placeholder="votre@email.com" required />
          </div>
          <div class="field">
            <label>Votre Message</label>
            <textarea v-model="form.message" rows="4" placeholder="Comment puis-je vous aider ?" required></textarea>
          </div>
          <p v-if="error" class="form-error">{{ error }}</p>
          <button type="submit" :disabled="loading">
            {{ loading ? 'Envoi en cours...' : 'ENVOYER MA DEMANDE' }}
          </button>
        </form>
        <div v-else class="form-success">
          <p>Merci, votre message a bien été envoyé ! Je vous recontacterai dans les plus brefs délais.</p>
        </div>
      </div>
    </div>
  </section>
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
  background: #e5ede8;
  padding: 128px 32px;
}

.contact-grid {
  max-width: 1216px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.contact-info h2 {
  font-size: 96px;
  line-height: 96px;
  color: #94b0a1;
  letter-spacing: -0.15px;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.info-item {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.info-icon {
  width: 48px;
  height: 48px;
  background: #94b0a1;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-text h4 {
  font-family: 'Epilogue', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #3d4f45;
  margin-bottom: 2px;
}

.info-text p {
  font-size: 16px;
  line-height: 24px;
  color: #4a5a51;
}

.contact-author {
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 24px;
}

.author-avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
}

.author-name {
  font-family: 'Sacramento', cursive;
  font-size: 42px;
  line-height: 1;
  color: #94b0a1;
}

.contact-form-wrapper {
  background: #fff;
  border-radius: 40px;
  padding: 48px;
  box-shadow: 0 10px 30px rgba(61, 79, 69, 0.08);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field label {
  font-family: 'Epilogue', sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #4a5a51;
  letter-spacing: 0.5px;
}

.field input,
.field textarea {
  font-family: 'Epilogue', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #4a5a51;
  background: transparent;
  border: none;
  border-bottom: 1px solid #d5e0d8;
  border-radius: 0;
  padding: 10px 0;
  outline: none;
  transition: border-color 0.3s;
}

.field input::placeholder,
.field textarea::placeholder {
  color: #4a5a51;
  opacity: 0.6;
}

.field input:focus,
.field textarea:focus {
  border-color: #94b0a1;
}

.field textarea {
  resize: vertical;
  min-height: 98px;
}

.form-error {
  color: #c00;
  font-size: 14px;
}

button {
  font-family: 'Epilogue', sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #fff;
  background: #94b0a1;
  border: none;
  border-radius: 9999px;
  padding: 22px;
  width: 100%;
  box-shadow: 0 4px 6px -1px rgba(61, 79, 69, 0.15);
  transition: opacity 0.3s;
}

button:hover:not(:disabled) {
  opacity: 0.9;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-success {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}

.form-success p {
  font-size: 18px;
  line-height: 28px;
  color: #94b0a1;
  text-align: center;
  font-weight: 700;
}
</style>
