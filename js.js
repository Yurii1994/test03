const arr = [
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
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
const lightbox = document.querySelector('.lightbox');
const lightbox__button = document.querySelector('.lightbox__button');
const lightbox__image = document.querySelector('.lightbox__image');
const lightbox__overlay = document.querySelector('.lightbox__overlay');

const elements = arr.map(({ preview, original, description }) => {
    const element = document.createElement('li');

    element.innerHTML = `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;

    return element;
});

gallery.append(...elements);

const classListToggle = () => lightbox.classList.toggle('is-open');

gallery.addEventListener('click', (event) => {
    event.preventDefault();

    const dataSource = event.target.getAttribute('data-source');

    lightbox__image.setAttribute('src', dataSource);
    classListToggle();
});

lightbox__button.addEventListener('click', classListToggle);
lightbox__overlay.addEventListener('click', classListToggle);

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        classListToggle();
    }
});
// надо добавить кнопку
const themeSwitch = document.querySelector('.theme-switch');
const body = document.body;

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
});

// Код, который вы предоставили, реализует функциональность галереи изображений с возможностью открытия выбранного изображения в световом окне (lightbox) и переключение темы интерфейса.
//
//     Объявление массива arr:
//     Массив arr содержит объекты, каждый из которых представляет изображение и содержит свойства preview (ссылка на уменьшенную версию изображения), original (ссылка на оригинальное изображение) и description (описание изображения).
// Получение ссылок на элементы DOM:
//     gallery, lightbox, lightbox__button, lightbox__image и lightbox__overlay - это переменные, содержащие ссылки на соответствующие элементы DOM с помощью метода document.querySelector().
//     Создание элементов галереи:
//     Используя метод map(), массив arr преобразуется в новый массив elements, в котором каждый объект из arr преобразуется в элемент списка <li>.
// Для каждого элемента списка устанавливается HTML-содержимое, включая ссылку на изображение с соответствующими атрибутами.
//     Созданные элементы добавляются в галерею с помощью метода append().
//     Открытие светового окна при клике на изображение:
//     К галерее добавляется обработчик события click, который вызывает функцию при клике на элемент галереи.
//     В обработчике события используется метод event.preventDefault(), чтобы предотвратить переход по ссылке при клике.
//     Получается ссылка на оригинальное изображение из атрибута data-source кликнутого элемента.
//     Ссылка на оригинальное изображение устанавливается как источник (src) для изображения в световом окне.
//     Функция classListToggle() вызывается для переключения класса is-open у элемента lightbox, открывая или закрывая световое окно.
//     Закрытие светового окна при клике на кнопку или оверлей, а также при нажатии клавиши Escape:
//     Кнопке и оверлею светового окна добавляются обработчики события click, вызывающие функцию classListToggle() для открытия или закрытия светового окна.
//     Для документа (document) добавляется обработчик события keydown, который проверяет, была ли нажата клавиша Escape (event.key === 'Escape'). Если это так, то вызывается функция classListToggle() для закрытия светового окна.
//     Переключение темы интерфей






// arr.map(el => {
//     const item = document.createElement('li')
//     item.innerHTML = `<li class="gallery__item">
//   <a
//     class="gallery__link"
//     href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//   >
//     <img
//       class="gallery__image"
//       src='${el.preview}'
//       data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
//       alt="Tulips"
//     />
//   </a>
// </li>`
//     gallery[0].appendChild(item)
//    ?addEventListener













// Add gallery items to the DOM
// gallery.insertAdjacentHTML('beforeend', galleryItems.join(''));
//
// // Handle click on gallery item
// gallery.addEventListener('click', e => {
//     e.preventDefault();
//
//     const target = e.target;
//
//     if (target.nodeName !== 'IMG') {
//         return;
//     }
//
//     // Open lightbox
//     lightbox.classList.add('is-open');
//     lightboxImage.src = target.dataset.source;
//     lightboxImage.alt = target.alt;
//
//     // Close lightbox on overlay click
//     lightboxOverlay.addEventListener('click', onCloseLightbox);
//
//     // Close lightbox on button click
//     lightboxButton.addEventListener('click', onCloseLightbox);
//
//     // Close lightbox on escape key press
//     window.addEventListener('keydown', onCloseLightbox);
// });
//
// function onCloseLightbox(e) {
//     if (e.type === 'keydown' && e.code !== 'Escape') {
//         return;
//     }}


// Note: the openLightbox function is called from the onGalleryClick function in Task 2


// console.log(gallery)
// gallery.appendChild(items)

// function createPictureCartMarkup(galleryItems) {
//     return galleryItems
//         .map(({ preview, original, description }) => {
//             return `
//     <li class="gallery__item">
//       <a
//         class="gallery__link"
//         href = '${original}';
//       >
//         <img
//           class="gallery__image"
//           src="${preview}"
//           data-source="${original}"
//           alt="${description}"
//         />
//       </a>
//     </li>
//     `;
//         })
// gallery.innerHTML = elements.join('')
// };




