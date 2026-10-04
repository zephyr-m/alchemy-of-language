<script setup lang="ts">
import { Mic } from '@lucide/vue'
import { Button } from '@/components/ui/button'

defineEmits<{
  record: []
}>()
</script>

<template>
  <div class="voice-answer-action">
    <div class="answer-divider"><span>или</span></div>
    <Button type="button" variant="outline" class="alchemy-button alchemy-button-outline voice-answer-button" @click="$emit('record')">
      <Mic /> Произнести
    </Button>
  </div>
</template>

<style scoped>
.voice-answer-action { display: grid; gap: 0.85rem; }
.answer-divider { display: flex; align-items: center; gap: 0.75rem; color: rgb(243 228 188 / 68%); font-size: var(--type-small); text-align: center; }
.answer-divider::before,
.answer-divider::after { height: 1px; flex: 1; background: rgb(215 168 74 / 24%); content: ''; }
.voice-answer-button { width: 100%; }
</style>
