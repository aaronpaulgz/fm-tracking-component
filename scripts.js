$hamburger = document.querySelector(".mob_header_hamburger");
$close = document.querySelector(".mob_header_close");
$modal = document.querySelector(".mob_modal");
console.warn($hamburger, $close);

const show = () => {
  $hamburger.style.display = "none";
  $close.style.display = "block";
  $modal.style.display = "block";
};

const hide = () => {
  $hamburger.style.display = "block";
  $close.style.display = "none";
  $modal.style.display = "none";
};
