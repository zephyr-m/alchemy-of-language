# Экраны EngApp

Этот документ отслеживает готовность экранов и составляющих их UI-компонентов.

## Как пользоваться списком

- Галочка у экрана ставится, когда экран собран, подключён к маршруту и визуально проверен пользователем.
- Галочка у компонента ставится, когда компонент или локальный блок реализован и используется экраном.
- Пометка `widget` означает переиспользуемый крупный блок.
- Пометка `shared` означает общий UI-компонент.
- Пометка `локальный блок` означает часть конкретной страницы, которую пока не нужно выносить отдельно.
- Состояния ответа и модальные окна не получают собственные маршруты.

Текущий прогресс:

- Полноценные экраны: **2 из 10**.
- Состояния и модальные окна: **0 из 7**.

## Общая оболочка

- [x] `AppLayout` — мобильная оболочка, safe area и область страницы.
- [x] `BottomNavigation` — нижняя навигация; используется приложением и showcase.
- [x] Маршрутизация и скрытие навигации через route metadata.
- [x] Переходы из нижнего меню и карточек этапов к доступным экранам обучения.
- [x] `DailyProgress` — дневная цель, время, опыт и освоенные слова.
- [x] `StageList` — список этапов обучения.
- [x] `MasteryPreview` — слова, близкие к освоению.
- [x] `TrainingHeader` — заголовок этапа и возврат назад.
- [x] `FullPassProgress` — три полных прохождения слова.
- [x] `ExerciseFeedback` — результат правильного или ошибочного ответа.

## Полноценные экраны

### 01. Главная

Прототип: [screen-01-home.md](../screen-01-home.md)  
Маршрут: `/`  
Реализация: [HomePage.vue](./src/pages/home/ui/HomePage.vue)

- [ ] Экран главной — требуется повторная проверка после переноса этапов.
  - [x] Шапка мастерской и серия дней — локальный блок.
  - [x] `DailyProgress` — widget.
  - [x] Кнопка продолжения тренировки — локальный блок на базе `Button`.
  - [x] `MasteryPreview` — widget.
  - [x] Сводка личного словаря — локальный блок на базе `Card`.
  - [x] `BottomNavigation` — widget из layout.

### Экран тренировки

Маршрут: `/training`  
Реализация: [TrainingPage.vue](./src/pages/training/ui/TrainingPage.vue)

- [ ] Экран выбора стадии тренировки.
  - [x] Шапка тренировки и количество активных слов — локальный блок.
  - [x] Инструкция по выбору стадии — локальный блок на базе `Card`.
  - [x] `StageList` — widget, перенесён с главной.
  - [x] `BottomNavigation` — widget из layout.

### 02. Знакомство

Прототип: [screen-02-introduction.md](../screen-02-introduction.md)  
Маршрут: `/training/introduction`  
Реализация: [IntroductionPage.vue](./src/pages/introduction/ui/IntroductionPage.vue)

- [x] Экран знакомства.
  - [x] `TrainingHeader` — widget.
  - [x] Инструкция этапа — локальный блок.
  - [x] `IntroductionWordList` — widget.
  - [x] `IntroductionWordRow` — строка слова, перевода и действия.
  - [x] `BottomNavigation` — widget из layout.

### 03. Выбор перевода

Прототип: [screen-03-translation-choice.md](../screen-03-translation-choice.md)  
Маршрут: `/training/translation`  
Реализация: [TranslationChoicePage.vue](./src/pages/translation-choice/ui/TranslationChoicePage.vue)

- [x] Экран выбора перевода.
  - [x] `TrainingHeader` — widget, переиспользуется.
  - [x] `ChoiceExercise` — общий компонент задания с направлением перевода.
  - [x] `AnswerOption` — вариант ответа.
  - [x] `FullPassProgress` — UI сущности слова.

### 04. Выбор английского

Прототип: [screen-04-english-choice.md](../screen-04-english-choice.md)  
Маршрут: `/training/reverse`

- [ ] Экран выбора английского слова.
  - [ ] Конфигурация обратного направления для `ChoiceExercise`.
  - [x] `TrainingHeader` — widget, переиспользуется.
  - [x] `AnswerOption` — переиспользуется.
  - [x] `FullPassProgress` — UI сущности слова, переиспользуется.

### 05. Ввод и произношение

Прототип: [screen-05-input-pronunciation.md](../screen-05-input-pronunciation.md)  
Маршрут: `/training/recall`

- [ ] Экран воспроизведения слова.
  - [x] `TrainingHeader` — widget, переиспользуется.
  - [ ] `RecallPrompt` — русское слово и инструкция.
  - [ ] `WrittenAnswerForm` — поле и отправка письменного ответа.
  - [ ] `VoiceAnswerAction` — запуск голосового ответа.
  - [x] `FullPassProgress` — UI сущности слова, переиспользуется.

### 06. Результаты тренировки

Прототип: [screen-06-training-results.md](../screen-06-training-results.md)  
Маршрут: `/training/results`

- [ ] Экран результатов тренировки.
  - [ ] `TrainingRewardSummary` — время, слова и XP.
  - [ ] `DailyGoalSummary` — компактный итог дневной цели.
  - [ ] `MasteredWordsList` — освоенные за тренировку слова.
  - [ ] Действия «Продолжить» и «На главную» — локальный блок.

### 07. Мой словарь

Прототип: [screen-07-dictionary.md](../screen-07-dictionary.md)  
Маршрут: `/dictionary`

- [ ] Экран словаря.
  - [ ] `DictionaryProgress` — общий прогресс по каталогу.
  - [ ] `WordSearch` — поиск освоенного слова.
  - [ ] `AlphabeticalWordList` — widget.
  - [ ] `AlphabetSection` — группа слов по первой букве.
  - [ ] Состояние пустого результата поиска.
  - [x] `BottomNavigation` — widget из layout.

### 08. Слова этапа

Прототип: [screen-08-stage-words.md](../screen-08-stage-words.md)  
Маршрут: `/stages/:stage`

- [ ] Экран слов выбранного этапа.
  - [ ] `StageSummaryHeader` — номер этапа и количество слов.
  - [ ] Кнопка запуска тренировки этапа — локальный блок.
  - [ ] `StageWordList` — widget.
  - [ ] `StageWordRow` — слово и три полных прохождения.
  - [ ] `FullPassProgress` — shared.
  - [x] `BottomNavigation` — widget из layout.

### 16. Коллекция медалей

Прототип: [screen-16-medals.md](../screen-16-medals.md)  
Маршрут: `/medals`

- [ ] Экран коллекции медалей.
  - [ ] `MedalsSummary` — количество полученных наград и общий прогресс.
  - [ ] `MedalFilters` — все, полученные и не полученные.
  - [ ] `MedalTierLegend` — медь, бронза, серебро, золото, платина и алмаз.
  - [ ] `TieredMedalList` — накопительные медали.
  - [ ] `TieredMedalRow` — ступени и прогресс одной медали.
  - [ ] `SpecialMedalList` — особые медали.
  - [ ] `MedalItem` — состояние полученной или закрытой медали.

## Состояния экранов и модальные окна

### 09. Правильный ответ

Прототип: [screen-09-correct-answer.md](../screen-09-correct-answer.md)

- [ ] Состояние правильного ответа внутри `ChoiceExercise`.
  - [x] Правильное состояние `AnswerOption`.
  - [x] `ExerciseFeedback` с вариантом `correct`.
  - [ ] Действие перехода к следующему слову.

### 10. Ошибка

Прототип: [screen-10-wrong-answer.md](../screen-10-wrong-answer.md)

- [ ] Состояние ошибочного ответа внутри `ChoiceExercise`.
  - [x] Ошибочное состояние выбранного `AnswerOption`.
  - [x] Отображение правильного `AnswerOption`.
  - [x] `ExerciseFeedback` с вариантом `wrong`.
  - [ ] Действие перехода к следующему слову.

### 11. Этап завершён

Прототип: [screen-11-stage-complete.md](../screen-11-stage-complete.md)

- [ ] Модальное окно завершения этапа.
  - [ ] `StageCompleteDialog` на базе существующего `Dialog`.
  - [ ] `StarCelebration` — декоративное состояние награды.
  - [ ] `StageTransitionStats` — сколько слов поднялось и опустилось.
  - [ ] Действие возврата на главную.

### 12. Слово освоено

Прототип: [screen-12-word-mastered.md](../screen-12-word-mastered.md)

- [ ] Состояние освоенного слова внутри экрана воспроизведения.
  - [ ] `WordMasteredPanel`.
  - [x] `FullPassProgress` поддерживает состояние `3/3`.
  - [ ] Уведомление о добавлении слова в словарь.
  - [ ] Действие перехода к следующему слову.

### 13. Запись голоса

Прототип: [screen-13-voice-recording.md](../screen-13-voice-recording.md)

- [ ] Состояние активной записи внутри экрана воспроизведения.
  - [ ] `VoiceRecorder`.
  - [ ] `AudioWaveform` — визуализация записи.
  - [ ] `RecordingControls` — завершение и отмена.

### 14. Результат распознавания

Прототип: [screen-14-voice-result.md](../screen-14-voice-result.md)

- [ ] Состояние распознанного голосового ответа.
  - [ ] `VoiceRecognitionResult`.
  - [x] `ExerciseFeedback` — переиспользуется.
  - [x] `FullPassProgress` — переиспользуется.
  - [ ] Действие перехода к следующему слову.

### 15. Пустой этап

Прототип: [screen-15-empty-stage.md](../screen-15-empty-stage.md)

- [ ] Пустое состояние экрана слов этапа.
  - [ ] `EmptyStageState`.
  - [ ] Объяснение источников новых слов для этапа.
  - [ ] Действие перехода к знакомству.

## Экраны без утверждённого прототипа

- [ ] Профиль алхимика: уровень, XP, ранг и экипировка.
- [ ] Задания гильдии: квесты и награды.
- [ ] Мастерская или магазин.
- [ ] Повышение уровня.
- [ ] Повышение ранга гильдии.
- [ ] Получение медали.
