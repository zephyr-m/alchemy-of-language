<script setup lang="ts">
import { FlaskConical } from '@lucide/vue'
</script>

<template>
  <header class="masthead">
    <div class="brand-mark" aria-hidden="true">
      <FlaskConical :size="26" stroke-width="1.8" />
    </div>
    <div class="masthead-copy">
      <p class="eyebrow">EngApp · система интерфейса</p>
      <h1>Алхимик в гильдии</h1>
      <p>Компоненты для превращения незнакомых слов в личную книгу знаний.</p>
    </div>
    <div class="version-stamp">
      <span>ПРОТОТИП</span>
      <strong>UI · 01</strong>
    </div>
  </header>

  <div class="ornament-line"><span>✦</span></div>
</template>
