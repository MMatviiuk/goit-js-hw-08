// Масив зображень для галереї
const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// Отримання посилань на елементи DOM
const gallery = document.querySelector('.gallery');
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
    galleryImg.dataset.source = image.original;
    galleryImg.dataset.index = index;

    // Додавання зображення до посилання, а посилання до елемента списку
    galleryLink.append(galleryImg);
    galleryItem.append(galleryLink);
    gallery.append(galleryItem);
  });
}

// Функція для налаштування обробки кліку на елементи галереї
function setupImageClickHandler() {
  gallery.addEventListener('click', event => {
    if (event.target.classList.contains('gallery-image')) {
      event.preventDefault(); // Забороняємо перезавантаження сторінки
      const link = event.target.dataset.source;
      const index = parseInt(event.target.dataset.index, 10);
      openLightbox(link, index); // Відкриваємо модальне вікно з зображенням
    }
  });
}

// Функція для відкриття модального вікна з великим зображенням
function openLightbox(link, index) {
  const instance = basicLightbox.create(
    `
    <img width="1400" height="900" src="${link}">
  `,
    { closable: true }
  );

  instance.show(); // Показуємо модальне вікно
}

// Генеруємо галерею та налаштовуємо обробку кліків
generateGallery();
setupImageClickHandler();
