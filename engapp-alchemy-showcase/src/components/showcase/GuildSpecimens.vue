<script setup lang="ts">
import { ref } from 'vue'
import { ChevronRight, Mail, Trophy } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { StageCompleteDialog } from '@/features/complete-stage'

const stageCompleteOpen = ref(false)
</script>

<template>
  <div class="showcase-grid guild-grid">
    <section class="specimen-section guild-section">
      <div class="section-heading">
        <span>19</span>
        <div><h2>Гильдия</h2><p>Поручения, письма и признание</p></div>
      </div>
      <div class="guild-letter">
        <div class="letter-pin"><Mail /></div>
        <p class="letter-kicker">Письмо наставника</p>
        <h3>Ваши записи становятся точнее, алхимик.</h3>
        <p>Освойте ещё 8 слов, чтобы получить новую печать гильдии.</p>
        <div class="letter-progress"><span style="width: 68%" /></div>
        <div class="wax-seal"><span>G</span></div>
      </div>
    </section>

    <section class="specimen-section reward-section">
      <div class="section-heading">
        <span>20</span>
        <div><h2>Награда</h2><p>Короткий торжественный момент</p></div>
      </div>
      <Button class="reward-preview" @click="stageCompleteOpen = true">
        <span class="reward-halo"><Trophy /></span>
        <span><small>Завершение этапа</small><strong>Посмотреть награду</strong></span>
        <ChevronRight />
      </Button>
      <StageCompleteDialog
        v-model:open="stageCompleteOpen"
        :current-stage="2"
        :advanced="6"
        :advanced-stage="3"
        :returned="2"
        :returned-stage="1"
      />
    </section>
  </div>
</template>
