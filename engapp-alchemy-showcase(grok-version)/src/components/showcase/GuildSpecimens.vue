<script setup lang="ts">
import { BookOpen, ChevronRight, Flame, Mail, Medal, Sparkles, Star, Trophy } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
</script>

<template>
  <div class="showcase-grid guild-grid">
    <section class="specimen-section guild-section">
      <div class="section-heading">
        <span>09</span>
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
        <span>10</span>
        <div><h2>Награда</h2><p>Короткий торжественный момент</p></div>
      </div>
      <Dialog>
        <DialogTrigger as-child>
          <Button class="reward-preview">
            <span class="reward-halo"><Trophy /></span>
            <span><small>Завершение тренировки</small><strong>Посмотреть награду</strong></span>
            <ChevronRight />
          </Button>
        </DialogTrigger>
        <DialogContent class="reward-dialog">
          <DialogHeader class="reward-dialog-header">
            <div class="reward-medal"><Medal /></div>
            <div class="stars"><Star /><Star /><Star /></div>
            <DialogTitle>Преобразование завершено</DialogTitle>
            <DialogDescription>Гильдия отметила сегодняшний прогресс.</DialogDescription>
          </DialogHeader>
          <div class="reward-stats">
            <div><Sparkles /><strong>+40</strong><span>опыта</span></div>
            <div><BookOpen /><strong>3</strong><span>слова</span></div>
            <div><Flame /><strong>5</strong><span>дней</span></div>
          </div>
          <DialogFooter>
            <Button class="alchemy-button alchemy-button-primary w-full">Забрать награду</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  </div>
</template>
