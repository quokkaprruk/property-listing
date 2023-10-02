const toggle_btn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropdown_menu = document.querySelector(".dropdown_menu");

toggle_btn.onclick = () => {
  dropdown_menu.classList.toggle("open");
  const isOpen = dropdown_menu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
//for frontend

//for backend: should be folder modules
