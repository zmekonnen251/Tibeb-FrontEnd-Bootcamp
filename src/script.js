console.log("HI");
const mobileMenu = document.querySelector(".mobile-menu");
const hamburgerIcon = document.querySelector(".header__hamurger--menu-icon");
const gustInstructors = [
  {
    image: "../assets/member1.png",
    name: "Yochai Benkler",
    position:
      "Berkman Professonr of Enterpreneurial Legal Studies at Harvard Law School",
    describtion:
      "Benkler studies commons-based peer poduction,and published his seminal book. The Wealthof Networks in 2006.",
  },
  {
    image: "../assets/member2.png",
    name: "Yochai Benkler",
    position:
      "Berkman Professonr of Enterpreneurial Legal Studies at Harvard Law School",
    describtion:
      "Benkler studies commons-based peer poduction,and published his seminal book. The Wealthof Networks in 2006.",
  },
  {
    image: "../assets/member3.png",
    name: "Yochai Benkler",
    position:
      "Berkman Professonr of Enterpreneurial Legal Studies at Harvard Law School",
    describtion:
      "Benkler studies commons-based peer poduction,and published his seminal book. The Wealthof Networks in 2006.",
  },
  {
    image: "../assets/member4.png",
    name: "Yochai Benkler",
    position:
      "Berkman Professonr of Enterpreneurial Legal Studies at Harvard Law School",
    describtion:
      "Benkler studies commons-based peer poduction,and published his seminal book. The Wealthof Networks in 2006.",
  },
  {
    image: "../assets/member5.png",
    name: "Yochai Benkler",
    position:
      "Berkman Professonr of Enterpreneurial Legal Studies at Harvard Law School",
    describtion:
      "Benkler studies commons-based peer poduction,and published his seminal book. The Wealthof Networks in 2006.",
  },
  {
    image: "../assets/member6.png",
    name: "Yochai Benkler",
    position:
      "Berkman Professonr of Enterpreneurial Legal Studies at Harvard Law School",
    describtion:
      "Benkler studies commons-based peer poduction,and published his seminal book. The Wealthof Networks in 2006.",
  },
];

mobileMenu.innerHTML = ` <ul class="mobile-nav">
        <li><i class="fas fa-window-close x-icon"></i></li>
        <li ><a href="about.html">About</a></li>
        <li><a href="#">Program</a></li>
        <li><a href="#">Join</a></li>
        <li><a href="#">Sponsor</a></li>
        <li><a href="#">News</a></li>
      </ul>`;
const displayMenu = (event) => {
  if (event.target === hamburgerIcon) {
    mobileMenu.classList.toggle("display-none");
  }
};
const xIcon = document.querySelector(".x-icon");

const closeMenu = (event) => {
  console.log(event.target);
  if (event.target === xIcon) {
    mobileMenu.classList.toggle("display-none");
  }
};

hamburgerIcon.addEventListener("click", displayMenu);
xIcon.addEventListener("click", closeMenu);
