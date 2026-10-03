import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/app/layouts/AppLayout.vue'

const PlaceholderPage = () => import('@/pages/placeholder')
const HomePage = () => import('@/pages/home')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        { path: '', name: 'home', component: HomePage, meta: { title: 'Главная' } },
        { path: 'training', name: 'training', component: PlaceholderPage, meta: { title: 'Тренировка' } },
        { path: 'dictionary', name: 'dictionary', component: PlaceholderPage, meta: { title: 'Словарь' } },
        { path: 'medals', name: 'medals', component: PlaceholderPage, meta: { title: 'Медали' } },
        { path: 'stages/:stage', name: 'stage', component: PlaceholderPage, meta: { title: 'Слова этапа' } },
        {
          path: 'training/results',
          name: 'training-results',
          component: PlaceholderPage,
          meta: { title: 'Результаты', hideNavigation: true },
        },
        {
          path: 'training/:mode',
          name: 'exercise',
          component: PlaceholderPage,
          meta: { title: 'Задание', hideNavigation: true },
        },
      ],
    },
    { path: '/showcase', name: 'showcase', component: () => import('@/showcase/ShowcaseView.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

router.afterEach((to) => {
  document.title = to.meta.title ? `${String(to.meta.title)} · EngApp` : 'EngApp'
})

export default router
