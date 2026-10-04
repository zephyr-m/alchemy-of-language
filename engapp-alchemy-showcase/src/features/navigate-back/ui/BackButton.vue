<script setup lang="ts">
import type { ButtonVariants } from '@/components/ui/button'
import { ArrowLeft } from '@lucide/vue'
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'

withDefaults(defineProps<{
  label?: string
  variant?: ButtonVariants['variant']
}>(), {
  label: 'Назад',
  variant: 'ghost',
})

const router = useRouter()
</script>

<template>
  <Button type="button" :variant="variant" class="back-button" @click="router.back()">
    <ArrowLeft /> {{ label }}
  </Button>
</template>

