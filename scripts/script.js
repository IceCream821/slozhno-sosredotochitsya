const themeButtons = document.querySelectorAll('.header__theme-menu-button');
let systemThemeListener = null; // для отслеживания изменений системной темы

// Применяет тему на основе системных настроек (для auto)
function applySystemTheme() {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const systemTheme = isDark ? 'dark' : 'light';
  
  document.body.className = 'page';
  document.body.classList.add(`theme_${systemTheme}`);
}

// Отключает слушатель системной темы, если он активен
function disableSystemThemeListener() {
  if (systemThemeListener) {
    systemThemeListener.removeEventListener('change', systemThemeListener.handler);
    systemThemeListener = null;
  }
}

// Включает слушатель изменений системной темы (только для режима auto)
function enableSystemThemeListener() {
  disableSystemThemeListener(); // убираем старый, если есть
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  const handler = (e) => {
    // Если текущий режим auto (проверяем localStorage), обновляем тему
    if (localStorage.getItem('theme') === 'auto') {
      applySystemTheme();
    }
  };
  
  mediaQuery.addEventListener('change', handler);
  systemThemeListener = mediaQuery;
  systemThemeListener.handler = handler;
}

// Основная функция смены темы
function changeTheme(theme) {
  if (theme === 'auto') {
    // Удаляем предыдущие классы и применяем системную тему
    applySystemTheme();
    localStorage.setItem('theme', 'auto');
    enableSystemThemeListener(); // начинаем следить за изменениями ОС
  } else {
    // Фиксированная тема (light / dark)
    disableSystemThemeListener(); // отключаем слежение
    document.body.className = 'page';
    document.body.classList.add(`theme_${theme}`);
    localStorage.setItem('theme', theme);
  }
}

// Обработчики кликов по кнопкам
themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    themeButtons.forEach((btn) => {
      btn.classList.remove('header__theme-menu-button_active');
      btn.removeAttribute('disabled');
    });
    
    let theme;
    if ([...button.classList].includes('header__theme-menu-button_type_light')) {
      theme = 'light';
    } else if ([...button.classList].includes('header__theme-menu-button_type_dark')) {
      theme = 'dark';
    } else {
      theme = 'auto';
    }
    
    changeTheme(theme);
    
    button.classList.add('header__theme-menu-button_active');
    button.setAttribute('disabled', true);
  });
});

// Инициализация при загрузке страницы
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    changeTheme(savedTheme);
    
    // Активируем соответствующую кнопку
    themeButtons.forEach((btn) => {
      btn.classList.remove('header__theme-menu-button_active');
      btn.removeAttribute('disabled');
    });
    const activeButton = document.querySelector(`.header__theme-menu-button_type_${savedTheme}`);
    if (activeButton) {
      activeButton.classList.add('header__theme-menu-button_active');
      activeButton.setAttribute('disabled', true);
    }
  } else {
    // Если тема не сохранена, по умолчанию включаем auto
    changeTheme('auto');
    const autoButton = document.querySelector('.header__theme-menu-button_type_auto');
    if (autoButton) {
      autoButton.classList.add('header__theme-menu-button_active');
      autoButton.setAttribute('disabled', true);
    }
  }
}

initTheme();