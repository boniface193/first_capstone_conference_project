function sideBarFun() {
  const openBar = document.querySelectorAll('#openBar');
  const sideBar = document.querySelector('#sideBar');
  const navLink = document.querySelector('#navLink');
  const navLinkLi = navLink.querySelectorAll(':scope > aside > div');
  function openAndCloseBar() {
    navLink.classList.toggle('d-none');
    sideBar.classList.toggle('d-none');
  }

  openBar.forEach((i) => i.addEventListener('click', openAndCloseBar));
  navLinkLi.forEach((i) => i.addEventListener('click', openAndCloseBar));
}

export default sideBarFun;
