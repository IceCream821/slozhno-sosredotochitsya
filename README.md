https://github.com/IceCream821/slozhno-sosredotochitsya


### 🎨 Цветовые схемы

#### Тёмная тема (Неон) — Основная

| Переменная         | Значение  | Использование         |
| ------------------ | --------- | --------------------- |
| `--bg-color`       | `#1a1a1a` | Основной фон страницы |
| `--text-color`     | `#ffffff` | Основной текст        |
| `--accent-color`   | `#ff0070` | Акцентный цвет (неон) |
| `--text-secondary` | `#b3b3b3` | Вторичный текст       |
| `--decor-bg`       | `#2d2d2d` | Фон для title-decor   |
| `--decor-color`    | `#ff0070` | Декоративные элементы |

#### Светлая тема (День)

| Переменная         | Значение  | Использование                   |
| ------------------ | --------- | ------------------------------- |
| `--bg-color`       | `#ffffff` | Основной фон страницы           |
| `--text-color`     | `#1a1a1a` | Основной текст                  |
| `--accent-color`   | `#ff8dcb` | Акцентный цвет (светло-розовый) |
| `--text-secondary` | `#666666` | Вторичный текст                 |
| `--decor-bg`       | `#f0f0f0` | Фон для title-decor             |
| `--decor-color`    | `#ff8dcb` | Декоративные элементы           |

---

### 📏 Шрифты

| Параметр     | Значение                         |
| ------------ | -------------------------------- |
| Семейство    | `IBM Plex Mono`, monospace       |
| Начертания   | Regular (400), Bold (700)        |
| Подключение  | `@font-face` в `fonts/fonts.css` |
| font-display | `swap`                           |

---

### 📐 Размеры текста (clamp)

| Элемент              | Формула                                           |
| -------------------- | ------------------------------------------------- |
| H1 (мобильный)       | `clamp(7.25rem, 7.0115rem + 1.0178vw, 7.5rem)`    |
| H1 (планшет/десктоп) | `clamp(7.5rem, 0.5625rem + 14.4531vw, 9.8125rem)` |
| H2 (секции)          | `clamp(1.5rem, 1.2rem + 2vw, 2.5rem)`             |
| Основной текст       | `clamp(0.875rem, 0.8rem + 0.5vw, 1rem)`           |
| Подписи              | `0.75rem`                                         |
| Копирайт             | `0.625rem`                                        |

---

### 📏 Отступы (адаптивные)

| Переменная                 | Значение                            | Использование                 |
| -------------------------- | ----------------------------------- | ----------------------------- |
| `--section-padding-inline` | `clamp(1rem, 0.5rem + 2vw, 3rem)`   | Горизонтальные отступы секций |
| `--section-padding-block`  | `clamp(2rem, 1.5rem + 3vw, 5rem)`   | Вертикальные отступы секций   |
| `--gap-small`              | `clamp(0.5rem, 0.3rem + 1vw, 1rem)` | Малые отступы                 |
| `--gap-medium`             | `clamp(1rem, 0.8rem + 1.5vw, 2rem)` | Средние отступы               |
| `--gap-large`              | `clamp(2rem, 1.5rem + 2vw, 4rem)`   | Большие отступы               |

---

### 🖼️ Декоративные элементы

| Элемент          | Значение                          |
| ---------------- | --------------------------------- |
| Уголки (размер)  | `clamp(12px, 10px + 1vw, 20px)`   |
| Уголки (граница) | `2px solid var(--corner-color)`   |
| REC точка        | `4px × 4px`, `border-radius: 50%` |
| REC анимация     | `blink 1.5s infinite`             |
| Тень заголовка   | `4px 4px 0 var(--accent-color)`   |
| Тень ссылок      | `2px 2px 0 var(--accent-color)`   |

---

### 📱 Брейкпоинты (адаптив)

| Разрешение | Тип             | Особенности                           |
| ---------- | --------------- | ------------------------------------- |
| `375px`    | Мобильный       | 1 колонка галереи, кнопки вертикально |
| `768px`    | Планшет малый   | 2 колонки галереи                     |
| `1024px`   | Планшет большой | 2-3 колонки галереи                   |
| `1440px`   | Десктоп         | 3-4 колонки галереи, макс. ширина     |

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
