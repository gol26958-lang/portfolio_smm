document.addEventListener("DOMContentLoaded", () => {
  // 1. Загрузка главного экрана
  fetch('/content/home.json')
    .then(res => res.json())
    .then(data => {
      if (document.getElementById('hero-title') && data.hero_title) {
        document.getElementById('hero-title').innerText = data.hero_title;
      }
      if (document.getElementById('hero-subtitle') && data.hero_subtitle) {
        document.getElementById('hero-subtitle').innerText = data.hero_subtitle;
      }
      if (data.telegram_link) {
        if (document.getElementById('tg-btn')) document.getElementById('tg-btn').href = data.telegram_link;
        if (document.getElementById('tg-footer-btn')) document.getElementById('tg-footer-btn').href = data.telegram_link;
      }
    }).catch(() => {
      console.log("Использование стандартных текстов до сохранения в CMS");
    });
});
