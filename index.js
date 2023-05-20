
//DOM=>Document Object Model

function initial()
{
  const hamburger = document.querySelector(".hamburger");
  const sidebarCloseButton = document.querySelector(".close-button");
  const sidebarContainer = document.querySelector(".sidebar-container");

  const openSidebar = () =>
  {
    sidebarContainer.classList.add("show-sidebar");
    console.log(sidebarContainer.classList);
  }
  hamburger.addEventListener("click", openSidebar);

   const closeSidebar = () =>
  {
 console.log(sidebarContainer.classList);
 sidebarContainer.classList.remove("show-sidebar");
 console.log(sidebarContainer.classList);
  }
  sidebarCloseButton.addEventListener("click", closeSidebar);
}
initial();

function navRelatedCode()
{
    const navbarContainer = document.querySelector(".nav-container");
    window.addEventListener("scroll", function()
{
  const scrollNumber = window.scrollY;
  const targetNumber = window.innerWidth >= 992 ? 70 : 50;
  if(scrollNumber >= targetNumber)
  {
    navbarContainer.classList.add("sticky-nav");
  }
  else
  {
    navbarContainer.classList.remove("sticky-nav");
  }
});
}
navRelatedCode();