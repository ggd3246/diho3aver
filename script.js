const splash = document.getElementById("splash");
const mainSite = document.getElementById("mainSite");
const enterBtn = document.getElementById("enterBtn");

// Показываем кнопку через 8 секунд после окончания вращения логотипа
setTimeout(() => {
  enterBtn.style.display = "inline-block";
  setTimeout(() => enterBtn.classList.add("show-btn"), 50);
}, 8000);

// При клике убираем заставку и показываем сайт
enterBtn.onclick = () => {
  splash.style.opacity = '0'; // плавно скрываем
  setTimeout(() => {
    splash.classList.add("hidden"); // полностью скрываем
    mainSite.classList.remove("hidden"); // показываем основной сайт
  }, 500); // ждем 0.5 секунды для плавного исчезновения
};
//мондалки//
// Элементы модального окна
const modalGallery = document.getElementById("modal-gallery");
const photosContainer = modalGallery.querySelector(".photos");
const modalPhoto = document.getElementById("modal-photo");
const photoImg = document.getElementById("photo-img");
const openBtn = document.querySelector(".open-modal-btn");
const closeButtons = document.querySelectorAll(".close");

// Список фото для блока 2
const photos = [
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "2.jpg"
];

// Открытие галереи по кнопке
openBtn.addEventListener("click", () => {
  photosContainer.innerHTML = ""; // очищаем контейнер перед добавлением
  photos.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Фото";
    // Клик по миниатюре открывает фото в модальном окне
    img.addEventListener("click", () => {
      photoImg.src = src;
      modalPhoto.style.display = "flex";
    });
    photosContainer.appendChild(img);
  });
  modalGallery.style.display = "flex"; // показать модалку
});

// Закрытие модалки крестиком
closeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.parentElement.style.display = "none";
  });
});

// Закрытие при клике на фон
[modalGallery, modalPhoto].forEach(modal => {
  modal.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });
});
