<template>
  <div class="star-celebration" aria-hidden="true">
    <span>✧</span>
    <strong>★</strong>
    <span>✧</span>
  </div>
</template>

<style scoped>
.star-celebration { display: flex; align-items: center; justify-content: center; gap: 0.8rem; color: var(--brass-light); }
.star-celebration span { font-size: var(--type-title); opacity: 0.78; text-shadow: 0 0 16px rgb(215 168 74 / 35%); }
.star-celebration strong { display: grid; width: 4.5rem; height: 4.5rem; place-items: center; border: 2px solid #f2cb73; border-radius: 50%; color: #fff1cf; background: radial-gradient(circle at 40% 28%, #e0b25a, #8a5a24 58%, #3a2416); font-size: var(--type-display); box-shadow: inset 0 1px rgb(255 244 210 / 50%), 0 0 0 5px rgb(215 168 74 / 12%), 0 6px 0 #3a2616, 0 0 28px rgb(215 168 74 / 30%); text-shadow: 0 1px 0 #5d3818; }
</style>
