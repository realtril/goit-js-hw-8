export const tempImgPic = (item) => {
  return `
  <li class="gallery__item">
    <a
        class="gallery__link"
        href="${item.original}"
  >
    <img
      class="gallery__image"
      src=""
      data-source="${item.original}"
      data-preview ="${item.preview}"
      alt="${item.description}"
    />
  </a>
</li>
  `;
};
