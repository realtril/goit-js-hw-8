export const tempImgPic = (item) => {
  return `
  <li class="gallery__item">
    <a
        class="gallery__link"
        href="${item.original}"
  >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>
  `;
};
