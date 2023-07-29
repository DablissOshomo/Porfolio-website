AOS.init({
    duration: 1200,
  })


  const menuIcon = document.querySelector(".menu-icon")
  const navList = document.querySelector("ul")



      menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle("active");
        navList.classList.toggle("active");
      })
