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

const gallery = document.querySelector('.gallery');
const wrapper = document.querySelector('.wrapper');

function generateGallery() {
  images.forEach((image, index) => {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery-item');

    const galleryLink = document.createElement('a');
    galleryLink.classList.add('gallery-link');
    galleryLink.href = image.original;

    const galleryImg = document.createElement('img');
    galleryImg.classList.add('gallery-image');
    galleryImg.src = image.preview;
    galleryImg.alt = image.description;
    galleryImg.setAttribute('data-source', image.original);
    galleryImg.setAttribute('data-index', index);

    galleryItem.append(galleryLink);
    galleryLink.append(galleryImg);
    gallery.append(galleryItem);
  });
}

function setupImageClickHandler() {
  gallery.addEventListener('click', event => {
    if (event.target.classList.contains('gallery-image')) {
      event.preventDefault();
      const link = event.target.getAttribute('data-source');
      const index = parseInt(event.target.getAttribute('data-index'), 10);
      openLightbox(link, index);
    }
  });
}

function openLightbox(link, index) {
  const instance = basicLightbox.create(
    `
    <img width="1400" height="900" src="${link}">
  `,
    { closable: false }
  );

  instance.show();
  setupSliderControls(index, instance);
}

function setupSliderControls(index, instance) {
  const prevBtn = document.createElement('button');
  prevBtn.className = 'prev btn';
  prevBtn.textContent = '<';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'next btn';
  nextBtn.textContent = '>';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'closeBtn';
  closeBtn.textContent = 'X';

  gallery.append(prevBtn);
  gallery.append(nextBtn);
  wrapper.append(closeBtn);

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

function changeImage(newIndex, instance) {
  if (newIndex >= 0 && newIndex < images.length) {
    const newImage = document.querySelector(`[data-index="${newIndex}"]`);
    const newLink = newImage.getAttribute('data-source');
    instance.element().querySelector('img').src = newLink;
  }
}

function closeOpenLightbox(args, instance) {
  args?.forEach(item => item.remove());
  instance.close();
}

generateGallery();
setupImageClickHandler();
