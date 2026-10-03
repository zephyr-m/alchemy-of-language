<script setup lang="ts">
import ControlSpecimens from '@/components/showcase/ControlSpecimens.vue'
import DictionarySpecimens from '@/components/showcase/DictionarySpecimens.vue'
import ExerciseSpecimens from '@/components/showcase/ExerciseSpecimens.vue'
import FoundationSpecimens from '@/components/showcase/FoundationSpecimens.vue'
import GuildSpecimens from '@/components/showcase/GuildSpecimens.vue'
import IntroductionSpecimens from '@/components/showcase/IntroductionSpecimens.vue'
import MedalSpecimens from '@/components/showcase/MedalSpecimens.vue'
import ProgressSpecimens from '@/components/showcase/ProgressSpecimens.vue'
import ResultsSpecimens from '@/components/showcase/ResultsSpecimens.vue'
import StageWordSpecimens from '@/components/showcase/StageWordSpecimens.vue'
import ShowcaseFooter from '@/components/showcase/ShowcaseFooter.vue'
import ShowcaseHeader from '@/components/showcase/ShowcaseHeader.vue'
</script>

<template>
  <main class="showcase-shell">
    <div class="ambient ambient-left" />
    <div class="ambient ambient-right" />

    <section class="showcase-board">
      <ShowcaseHeader />
      <FoundationSpecimens />
      <ControlSpecimens />
      <ProgressSpecimens />
      <IntroductionSpecimens />
      <ExerciseSpecimens />
      <ResultsSpecimens />
      <StageWordSpecimens />
      <DictionarySpecimens />
      <MedalSpecimens />
      <GuildSpecimens />
      <ShowcaseFooter />
    </section>
  </main>
</template>
