// Масив зображень для галереї
const images = [
  {
    // Попереднє зображення для перегляду в галереї
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    // Оригінальне зображення для модального вікна
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    // Опис зображення
    description: 'Hokkaido Flower',
  },
  {
    // Попереднє зображення для перегляду в галереї
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    // Оригінальне зображення для модального вікна
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    // Опис зображення
    description: 'Container Haulage Freight',
  },
  {
    // Попереднє зображення для перегляду в галереї
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    // Оригінальне зображення для модального вікна
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    // Опис зображення
    description: 'Aerial Beach View',
  },
  {
    // Попереднє зображення для перегляду в галереї
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    // Оригінальне зображення для модального вікна
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    // Опис зображення
    description: 'Flower Blooms',
  },
  {
    // Попереднє зображення для перегляду в галереї
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    // Оригінальне зображення для модального вікна
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    // Опис зображення
    description: 'Alpine Mountains',
  },
  {
    // Попереднє зображення для перегляду в галереї
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    // Оригінальне зображення для модального вікна
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    // Опис зображення
    description: 'Mountain Lake Sailing',
  },
  {
    // Попереднє зображення для перегляду в галереї
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    // Оригінальне зображення для модального вікна
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    // Опис зображення
    description: 'Alpine Spring Meadows',
  },
  {
    // Попереднє зображення для перегляду в галереї
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    // Оригінальне зображення для модального вікна
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    // Опис зображення
    description: 'Nature Landscape',
  },
  {
    // Попереднє зображення для перегляду в галереї
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    // Оригінальне зображення для модального вікна
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    // Опис зображення
    description: 'Lighthouse Coast Sea',
  },
];

// Отримання посилань на елементи DOM
// Знаходимо елемент галереї у HTML-документі
const gallery = document.querySelector('.gallery');
// Знаходимо контейнер для галереї
const wrapper = document.querySelector('.wrapper');

// Функція для генерації розмітки галереї зображень
function generateGallery() {
  images.forEach((image, index) => {
    // Створення елементу списку для галереї
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery-item');

    // Створення посилання для кожного елемента галереї
    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery-link');
    galleryLink.href = image.original;

    // Створення зображення для елемента галереї
    const galleryImg = document.createElement('img');
    galleryImg.classList.add('gallery-image');
    galleryImg.src = image.preview;
    galleryImg.alt = image.description;
    galleryImg.setAttribute('data-source', image.original);
    galleryImg.setAttribute('data-index', index);

    // Додавання зображення до посилання, а посилання до елемента списку
    galleryItem.append(galleryLink);
    galleryLink.append(galleryImg);
    gallery.append(galleryItem);
  });
}

// Функція для налаштування обробки кліку на елементи галереї
function setupImageClickHandler() {
  gallery.addEventListener('click', event => {
    // Перевіряємо, чи клікнули саме на зображення
    if (event.target.classList.contains('gallery-image')) {
      event.preventDefault(); // Забороняємо перезавантаження сторінки
      // Отримуємо посилання на велике зображення
      const link = event.target.getAttribute('data-source');
      // Отримуємо індекс зображення
      const index = parseInt(event.target.getAttribute('data-index'), 10);
      openLightbox(link, index); // Відкриваємо модальне вікно з зображенням
    }
  });
}

// Функція для відкриття модального вікна з великим зображенням
function openLightbox(link, index) {
  // Створюємо інстанцію модального вікна з зображенням
  const instance = basicLightbox.create(
    `
    <img width="1400" height="900" src="${link}">
  `,
    { closable: false }
  );

  // Показуємо модальне вікно
  instance.show();
  setupSliderControls(index, instance); // Налаштовуємо кнопки для перемикання зображень
}

// Функція для налаштування кнопок навігації (перемикання між зображеннями)
function setupSliderControls(index, instance) {
  // Створюємо кнопку для попереднього зображення
  const prevBtn = document.createElement('button');
  prevBtn.className = 'prev btn';
  prevBtn.textContent = '<';

  // Створюємо кнопку для наступного зображення
  const nextBtn = document.createElement('button');
  nextBtn.className = 'next btn';
  nextBtn.textContent = '>';

  // Створюємо кнопку для закриття модального вікна
  const closeBtn = document.createElement('button');
  closeBtn.className = 'closeBtn';
  closeBtn.textContent = 'X';

  // Додаємо кнопки до контейнера галереї
  gallery.append(prevBtn);
  gallery.append(nextBtn);
  wrapper.append(closeBtn);

  // Додаємо обробники подій для кнопок
  prevBtn.addEventListener('click', () =>
    changeImage((index = index > 0 ? index - 1 : 0), instance)
  );
  nextBtn.addEventListener('click', () =>
    changeImage(
      (index = index < images.length ? index + 1 : images.length - 1),
      instance
    )
  );
  closeBtn.addEventListener('click', () =>
    closeOpenLightbox([prevBtn, nextBtn, closeBtn], instance)
  );
}

// Функція для зміни зображення у модальному вікні
function changeImage(newIndex, instance) {
  // Перевіряємо, чи новий індекс знаходиться в межах масиву зображень
  if (newIndex >= 0 && newIndex < images.length) {
    const newImage = document.querySelector(`[data-index="${newIndex}"]`);
    const newLink = newImage.getAttribute('data-source');
    instance.element().querySelector('img').src = newLink;
  }
}

// Функція для закриття модального вікна та видалення кнопок
function closeOpenLightbox(args, instance) {
  // Видаляємо всі елементи кнопок, якщо вони існують
  args?.forEach(item => item.remove());
  // Закриваємо модальне вікно
  instance.close();
}

// Генеруємо галерею та налаштовуємо обробку кліків
generateGallery();
setupImageClickHandler();
