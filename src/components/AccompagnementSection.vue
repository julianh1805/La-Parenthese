<template>
  <section id="accompagnement" class="accompagnement">
    <div class="accompagnement-container">
      <h2>Mon accompagnement personnalisé</h2>

      <div class="cures-grid">
        <div class="cure-card">
          <div class="cure-item">
            <span class="cure-name">Cure vitalité :</span> rééquilibre le métabolisme, stimule la circulation sanguine, élimine stress et tensions, dynamise le corps
          </div>
          <div class="cure-item">
            <span class="cure-name">Cure détox :</span> élimine les toxines du corps, draine et stimule le système lymphatique, booste l'immunité
          </div>
          <div class="cure-item">
            <span class="cure-name">Cure Silhouette :</span> aide le corps à mieux digérer les graisses, draine et stimule le métabolisme, booste la perte de poids
          </div>
        </div>
        <div class="cure-card">
          <div class="cure-item">
            <span class="cure-name">Cure Bien-être du dos :</span> décontracte les muscles du dos, dénoue les tensions, améliore l'amplitude et la souplesse vertébrale
          </div>
          <div class="cure-item">
            <span class="cure-name">Cure Anti-stress sommeil :</span> identifie les causes des troubles du sommeil et les sources du stress, favorise la détente mentale et physique, ouvre l'esprit à adopter une meilleure hygiène de vie
          </div>
        </div>
      </div>

      <div class="specifique">
        <h3>Accompagnement spécifique à :</h3>
        <div class="specifique-grid">
          <p><span class="bullet">&bull;</span> <span class="spec-name">la fibromyalgie :</span> apport de bien-être, libération des tensions, apaisement des émotions</p>
          <p><span class="bullet">&bull;</span> <span class="spec-name">la maladie de Crohn :</span> prise en charge selon le niveau de fragilité</p>
          <p><span class="bullet">&bull;</span> <span class="spec-name">l'endométriose :</span> prise en charge selon le niveau de fragilité</p>
          <p><span class="bullet">&bull;</span> <span class="spec-name">le sevrage tabagique :</span> apport de bien-être et apaisement émotionnel, diminution des tensions</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.accompagnement {
  background: #f8faf9;
  padding: 128px 0;
}

.accompagnement-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.accompagnement h2 {
  font-size: 72px;
  line-height: 72px;
  color: #94b0a1;
  text-align: center;
  letter-spacing: -0.15px;
}

.cures-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  padding-top: 32px;
}

.cure-card {
  background: #f0f5f2;
  border-left: 8px solid #94b0a1;
  border-radius: 40px;
  padding: 40px 40px 40px 48px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.cure-item {
  font-size: 16px;
  line-height: 24px;
  color: #4a5a51;
  letter-spacing: -0.15px;
}

.cure-name {
  font-weight: 700;
  color: #94b0a1;
}

.specifique {
  background: #f0f5f2;
  border-radius: 40px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
}

.specifique h3 {
  font-family: 'Sacramento', cursive;
  font-size: 48px;
  line-height: 48px;
  color: #94b0a1;
  text-align: center;
  letter-spacing: -0.15px;
}

.specifique-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  max-width: 896px;
}

.specifique-grid p {
  font-size: 16px;
  line-height: 24px;
  color: #4a5a51;
  letter-spacing: -0.15px;
}

.spec-name {
  font-weight: 700;
  color: #94b0a1;
}

.bullet {
  margin-right: 4px;
}
</style>
