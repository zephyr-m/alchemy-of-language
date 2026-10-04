<script setup lang="ts">
import { Beaker, BookOpen, Check, Flame, Gem, LockKeyhole, Shield, Sparkles, Volume2, X } from '@lucide/vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="showcase-grid controls-grid">
    <section class="specimen-section buttons-section">
      <div class="section-heading">
        <span>03</span>
        <div><h2>Действия</h2><p>Главное, спокойное и закрытое</p></div>
      </div>
      <div class="button-lab">
        <Button class="alchemy-button alchemy-button-primary" size="lg">
          <Sparkles /> Начать преобразование
        </Button>
        <Button variant="secondary" class="alchemy-button alchemy-button-secondary">
          <BookOpen /> Открыть книгу
        </Button>
        <Button variant="outline" class="alchemy-button alchemy-button-outline">
          <Volume2 /> Прослушать слово
        </Button>
        <Button disabled class="alchemy-button"><LockKeyhole /> Закрыто</Button>
      </div>
      <div class="mini-state-row">
        <button class="state-chip pressed"><span>Нажатие</span></button>
        <button class="state-chip correct"><Check /><span>Верно</span></button>
        <button class="state-chip wrong"><X /><span>Ошибка</span></button>
      </div>
    </section>

    <section class="specimen-section tokens-section">
      <div class="section-heading">
        <span>04</span>
        <div><h2>Знаки отличия</h2><p>Статусы, ресурсы и ранги</p></div>
      </div>
      <div class="token-row">
        <Badge class="game-badge streak-badge"><Flame /> 5 дней</Badge>
        <Badge class="game-badge xp-badge"><Sparkles /> 280 XP</Badge>
        <Badge class="game-badge gem-badge"><Gem /> 42</Badge>
      </div>
      <div class="rank-row">
        <div class="rank-seal novice"><Shield /><span>Ученик</span></div>
        <div class="rank-seal active"><Beaker /><span>Алхимик</span></div>
        <div class="rank-seal locked"><LockKeyhole /><span>Мастер</span></div>
      </div>
    </section>
  </div>
</template>
