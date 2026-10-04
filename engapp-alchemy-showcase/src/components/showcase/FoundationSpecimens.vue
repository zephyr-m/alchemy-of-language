<script setup lang="ts">
const swatches = [
  { name: 'Уголь', value: '#191213', class: 'swatch-coal' },
  { name: 'Пергамент', value: '#E7D3A1', class: 'swatch-parchment' },
  { name: 'Латунь', value: '#D7A84A', class: 'swatch-brass' },
  { name: 'Медь', value: '#9A6038', class: 'swatch-copper' },
  { name: 'Изумруд', value: '#57B586', class: 'swatch-emerald' },
  { name: 'Киноварь', value: '#B44C3E', class: 'swatch-cinnabar' },
]
</script>

<template>
  <div class="showcase-grid intro-grid">
    <section class="specimen-section color-section">
      <div class="section-heading">
        <span>01</span>
        <div><h2>Материалы и цвет</h2><p>Тёплая мастерская после заката</p></div>
      </div>
      <div class="swatch-grid">
        <div v-for="swatch in swatches" :key="swatch.name" class="swatch-item">
          <div class="swatch" :class="swatch.class" />
          <div><strong>{{ swatch.name }}</strong><span>{{ swatch.value }}</span></div>
        </div>
      </div>
    </section>

    <section class="specimen-section typography-section">
      <div class="section-heading">
        <span>02</span>
        <div><h2>Письмо и голос</h2><p>Гримуар с современной читаемостью</p></div>
      </div>
      <div class="type-specimen">
        <p class="display-type">Путь алхимика</p>
        <p class="heading-type">Слово становится знанием</p>
        <p class="body-type">Изучайте английские слова, проходя четыре стадии преобразования.</p>
        <div class="word-pair"><strong class="learning-text">knowledge</strong><span class="learning-text">знание</span><em class="learning-text">/ˈnɒlɪdʒ/</em></div>
      </div>
    </section>
  </div>
</template>
