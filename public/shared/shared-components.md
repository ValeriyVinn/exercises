# Компоненти, які часто роблять спільними (shared)

## 🔁 Найчастіше перевикористовувані компоненти

### 📦 Модальні вікна (modals)
- Форми введення
- Інформаційні повідомлення
- Підтвердження дії

### 📂 Аккордеони / спойлери (accordions)
- FAQ блоки
- Розділи з підрозділами

### 📑 Таблиці
- Сортування, фільтри, пагінація

### ⬇️ Dropdown / Select меню
- Вибір фільтрів, теми, мови

### 📌 Toast / Алерти / Сповіщення
- Повідомлення про помилки або успішні дії

### 🔀 Слайдери / Каруселі
- Галереї зображень
- Прев’ю товарів

### 🧭 Меню навігації
- Головне або бічне меню
- Mobile-бургер

### 📅 Календарі / Date pickers
- Вибір дати
- Календар подій

### 🔍 Пошук з автозаповненням
- Підказки під час введення
- Динамічні запити

### 📦 Уніфіковані карточки контенту
- Товари, статті, профілі

---

## 📁 Приклад структури проєкту (Vanilla HTML/CSS/JS)

project-root/
│
├── index.html
├── style.css
├── main.js
│
├── shared/                ← Усі загальні шаблони/компоненти тут
│   ├── modal/
│   │   ├── modal.html     ← HTML-шаблон модального вікна (через <template>)
│   │   ├── modal.css      ← Стилі модального вікна
│   │   └── modal.js       ← Логіка відкриття/закриття/заповнення
│   │
│   ├── accordion/
│   │   ├── accordion.html
│   │   ├── accordion.css
│   │   └── accordion.js
│   │
│   ├── toast/
│   │   ├── toast.html
│   │   ├── toast.css
│   │   └── toast.js
│   │
│   └── ... (інші спільні компоненти)
│
├── pages/                 ← Конкретні сторінки/завдання
│   ├── task1.html
│   ├── task2.html
│   └── ...
│
├── scripts/               ← Загальні утиліти або логіка
│   └── utils.js
│
└── assets/                ← Зображення, шрифти, іконки
    ├── logo.svg
    └── ...
