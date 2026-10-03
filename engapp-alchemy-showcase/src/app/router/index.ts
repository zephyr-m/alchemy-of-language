import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/app/layouts/AppLayout.vue'

const PlaceholderPage = () => import('@/pages/placeholder')
const HomePage = () => import('@/pages/home')
const TrainingPage = () => import('@/pages/training')
const DictionaryPage = () => import('@/pages/dictionary')
const IntroductionPage = () => import('@/pages/introduction')
const TranslationChoicePage = () => import('@/pages/translation-choice')
const ReverseChoicePage = () => import('@/pages/reverse-choice')
const RecallPage = () => import('@/pages/recall')
const TrainingResultsPage = () => import('@/pages/training-results')
const StageWordsPage = () => import('@/pages/stage-words')
const MedalsPage = () => import('@/pages/medals')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        { path: '', name: 'home', component: HomePage, meta: { title: 'Главная' } },
        { path: 'training', name: 'training', component: TrainingPage, meta: { title: 'Тренировка' } },
        { path: 'dictionary', name: 'dictionary', component: DictionaryPage, meta: { title: 'Словарь' } },
        { path: 'medals', name: 'medals', component: MedalsPage, meta: { title: 'Медали', hideNavigation: true } },
        {
          path: 'stages/:stage',
          name: 'stage',
          component: StageWordsPage,
          meta: { title: 'Слова этапа' },
        },
        {
          path: 'training/introduction',
          name: 'introduction',
          component: IntroductionPage,
          meta: { title: 'Знакомство' },
        },
        {
          path: 'training/translation',
          name: 'translation-choice',
          component: TranslationChoicePage,
          meta: { title: 'Выбор перевода', hideNavigation: true },
        },
        {
          path: 'training/reverse',
          name: 'reverse-choice',
          component: ReverseChoicePage,
          meta: { title: 'Выбор английского', hideNavigation: true },
        },
        {
          path: 'training/recall',
          name: 'recall',
          component: RecallPage,
          meta: { title: 'Ввод и произношение', hideNavigation: true },
        },
        {
          path: 'training/results',
          name: 'training-results',
          component: TrainingResultsPage,
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
