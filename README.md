### 🎨 Цветовые схемы

#### Тёмная тема (Неон) — Основная
| Переменная | Значение | Использование |
|------------|----------|---------------|
| `--bg-color` | `#1a1a1a` | Основной фон страницы |
| `--text-color` | `#ffffff` | Основной текст |
| `--accent-color` | `#ff0070` | Акцентный цвет (неон) |
| `--text-secondary` | `#b3b3b3` | Вторичный текст |
| `--decor-bg` | `#2d2d2d` | Фон для title-decor |
| `--decor-color` | `#ff0070` | Декоративные элементы |

#### Светлая тема (День)
| Переменная | Значение | Использование |
|------------|----------|---------------|
| `--bg-color` | `#ffffff` | Основной фон страницы |
| `--text-color` | `#1a1a1a` | Основной текст |
| `--accent-color` | `#ff8dcb` | Акцентный цвет (светло-розовый) |
| `--text-secondary` | `#666666` | Вторичный текст |
| `--decor-bg` | `#f0f0f0` | Фон для title-decor |
| `--decor-color` | `#ff8dcb` | Декоративные элементы |

---

### 📏 Шрифты

| Параметр | Значение |
|----------|----------|
| Семейство | `IBM Plex Mono`, monospace |
| Начертания | Regular (400), Bold (700) |
| Подключение | `@font-face` в `fonts/fonts.css` |
| font-display | `swap` |

---

### 📐 Размеры текста (clamp)

| Элемент | Формула |
|---------|---------|
| H1 (мобильный) | `clamp(7.25rem, 7.0115rem + 1.0178vw, 7.5rem)` |
| H1 (планшет/десктоп) | `clamp(7.5rem, 0.5625rem + 14.4531vw, 9.8125rem)` |
| H2 (секции) | `clamp(1.5rem, 1.2rem + 2vw, 2.5rem)` |
| Основной текст | `clamp(0.875rem, 0.8rem + 0.5vw, 1rem)` |
| Подписи | `0.75rem` |
| Копирайт | `0.625rem` |

---

### 📏 Отступы (адаптивные)

| Переменная | Значение | Использование |
|------------|----------|---------------|
| `--section-padding-inline` | `clamp(1rem, 0.5rem + 2vw, 3rem)` | Горизонтальные отступы секций |
| `--section-padding-block` | `clamp(2rem, 1.5rem + 3vw, 5rem)` | Вертикальные отступы секций |
| `--gap-small` | `clamp(0.5rem, 0.3rem + 1vw, 1rem)` | Малые отступы |
| `--gap-medium` | `clamp(1rem, 0.8rem + 1.5vw, 2rem)` | Средние отступы |
| `--gap-large` | `clamp(2rem, 1.5rem + 2vw, 4rem)` | Большие отступы |

---

### 🖼️ Декоративные элементы

| Элемент | Значение |
|---------|----------|
| Уголки (размер) | `clamp(12px, 10px + 1vw, 20px)` |
| Уголки (граница) | `2px solid var(--corner-color)` |
| REC точка | `4px × 4px`, `border-radius: 50%` |
| REC анимация | `blink 1.5s infinite` |
| Тень заголовка | `4px 4px 0 var(--accent-color)` |
| Тень ссылок | `2px 2px 0 var(--accent-color)` |

---

### 📱 Брейкпоинты (адаптив)

| Разрешение | Тип | Особенности |
|------------|-----|-------------|
| `375px` | Мобильный | 1 колонка галереи, кнопки вертикально |
| `768px` | Планшет малый | 2 колонки галереи |
| `1024px` | Планшет большой | 2-3 колонки галереи |
| `1440px` | Десктоп | 3-4 колонки галереи, макс. ширина |

---

### 🏗️ Структура проекта

```
slozhno-sosredotochitsya-main/
├── index.html              # HTML разметка
├── README.md               # Эта документация
├── styles/
│   ├── variables.css       # CSS переменные
│   ├── globals.css         # Глобальные стили (сброс, overflow-x)
│   ├── style.css           # Основные стили + медиа-запросы
│   ├── dark.css            # Тёмная тема
│   └── light.css           # Светлая тема
├── scripts/
│   └── script.js           # Переключение тем (не изменён)
├── fonts/
│   ├── IBMPlexMono-Regular.woff
│   ├── IBMPlexMono-Bold.woff
│   └── fonts.css
├── images/                 # Все изображения из макета
│   ├── books.png
│   ├── ice-cream.png
│   ├── street.png
│   ├── sunset.png
│   ├── tape.png
│   ├── cover-image-dark.png
│   ├── cover-image-light.png
│   ├── favicon.ico
│   └── favicon.svg
└── .github/workflows/      # Автотесты Яндекс Практикум
    └── tests.yml
```

---

### 🔧 Порядок подключения CSS

```html
<link rel="stylesheet" href="./fonts/fonts.css" />
<link rel="stylesheet" href="./styles/variables.css" />
<link rel="stylesheet" href="./styles/globals.css" />
<link rel="stylesheet" href="./styles/style.css" />
<link rel="stylesheet" href="./styles/dark.css" />
<link rel="stylesheet" href="./styles/light.css" />
```

---

### ⚙️ Мета-теги

```html
<meta name="color-scheme" content="dark light" />
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="icon" href="./images/favicon.ico" type="image/x-icon" />
<link rel="icon" href="./images/favicon.svg" type="image/svg+xml" />
```

---

## ✅ ЧЕК-ЛИСТ ПРОВЕРКИ (по Zadaniya.docx)

### 🔴 КРИТИЧЕСКИЕ ТРЕБОВАНИЯ (автотесты)

| № | Требование | Статус | Примечание |
|---|------------|--------|------------|
| 1 | Все секции макета присутствуют | ✅ | Header, Main (5 секций), Footer |
| 2 | Визуальное совпадение ≤10% | ⚠️ | Требуется Pixel Perfect проверка |
| 3 | Нет горизонтального скролла | ✅ | `overflow-x: hidden` в globals.css |
| 4 | Темы переключаются | ✅ | Кнопки работают, классы добавляются |
| 5 | Валидный HTML | ✅ | 0 ошибок на validator.w3.org |
| 6 | CSS-переменные для цветов | ✅ | В variables.css + переопределение |
| 7 | REC скрыт в светлой теме | ✅ | `display: none` в light.css |
| 8 | Header/Footer = 100vh | ⚠️ | Header: 100vh, Footer: 50vh (по макету) |
| 9 | color-scheme мета-тег | ✅ | `content="dark light"` |
| 10 | Фавиконки подключены | ✅ | .ico + .svg |

---

### 🟡 СТРУКТУРА ПРОЕКТА

| № | Требование | Статус | Примечание |
|---|------------|--------|------------|
| 1 | Нет пустых файлов | ✅ | Все файлы заполнены |
| 2 | index.html есть | ✅ | В корне проекта |
| 3 | Структура единообразна | ✅ | styles/, images/, fonts/ |
| 4 | Стили в правильном порядке | ✅ | См. раздел «Порядок подключения CSS» |

---

### 🟡 HTML ТРЕБОВАНИЯ

| № | Требование | Статус | Примечание |
|---|------------|--------|------------|
| 1 | Аккуратная разметка | ✅ | Prettier форматирование |
| 2 | Валидный HTML | ✅ | 0 ошибок валидации |
| 3 | Стили подключены в порядке | ✅ | fonts → variables → globals → style → dark → light |
| 4 | lang="ru" | ✅ | В теге html |
| 5 | title задан | ✅ | "Сложно сосредоточиться" |
| 6 | Семантическая разметка | ✅ | header, main, footer, section, nav, article |
| 7 | Один h1 | ✅ | Только в шапке |
| 8 | alt у изображений | ✅ | В галерее |
| 9 | loading="lazy" | ✅ | Для изображений галереи |

---

### 🟡 CSS ТРЕБОВАНИЯ

| № | Требование | Статус | Примечание |
|---|------------|--------|------------|
| 1 | Форматирование кода | ✅ | Пробелы, точки с запятой, отступы |
| 2 | Имена классов (kebab-case) | ✅ | header__theme-menu-button |
| 3 | Сброс отступов | ✅ | В globals.css |
| 4 | Цвета, размеры, line-height | ✅ | Через CSS-переменные |
| 5 | Шрифты подключены | ✅ | IBM Plex Mono |
| 6 | Layout (flex/grid) | ✅ | Grid для header/footer/gallery |
| 7 | Адаптив (брейкпоинты) | ✅ | 375px, 768px, 1024px, 1440px |
| 8 | Нет пустых правил | ✅ | — |
| 9 | Нет дублирующихся селекторов | ✅ | — |
| 10 | Нет дублирующихся свойств | ✅ | — |
| 11 | CSS-переменные | ✅ | В variables.css |
| 12 | Переиспользование стилей | ✅ | .title-decor, .decor-corner |
| 13 | Нет inline-стилей | ✅ | Все стили в CSS файлах |

---

### 🟢 ХОРОШИЕ ПРАКТИКИ

| № | Практика | Статус | Примечание |
|---|----------|--------|------------|
| 1 | Нет лишних обёрток div | ✅ | — |
| 2 | Нет пустых href | ✅ | — |
| 3 | Ограничения размеров изображений | ✅ | width/height указаны |
| 4 | Ленивая загрузка | ✅ | loading="lazy" |
| 5 | Нет неиспользуемых классов | ✅ | — |
| 6 | box-sizing: border-box | ✅ | В globals.css |
| 7 | gap вместо margin | ✅ | Для grid/flex |
| 8 | Логические CSS-свойства | ✅ | padding-inline, margin-block |
| 9 | aria-hidden для декора | ✅ | Для REC и уголков |
| 10 | :focus-visible для доступности | ✅ | Для кнопок и ссылок |

---

## 🚀 КАК ЗАПУСТИТЬ

```bash
# Открыть в браузере
firefox index.html &

# Или любой другой браузер
google-chrome index.html
```

---

## 📎 ССЫЛКИ

| Ресурс | Ссылка |
|--------|--------|
| Макет Figma | https://www.figma.com/design/lCqDbWjgllgJtb2hmCqfyX |
| Валидатор HTML | https://validator.w3.org/ |
| ТЗ (Zadaniya.docx) | В корне папки Заказ_2 |

---

## ⚠️ ВОПРОСЫ ДЛЯ ПРОВЕРКИ

1. **Высота footer** — 50vh по макету (требуется подтверждение, еще не чекал)
2. **Визуальное совпадение** — требуется Pixel Perfect проверка (≤10%) (аналогично не чекал)
3. **Точные отступы** — требуется сверка с Figma(также еще не чекал)

---