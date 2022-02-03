console.log('HI');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerIcon = document.querySelector('.header__hamurger--menu-icon');
const gustInstructors = [
  {
    image: '../assets/member1.png',
    name: 'Yochai Benkler',
    position:
      'Berkman Professonr of Enterpreneurial Legal Studies at Harvard Law School',
    describtion:
      'Benkler studies commons-based peer poduction,and published his seminal book. The Wealthof Networks in 2006.',
  },
  {
    image: '../assets/member2.png',
    name: 'Yochai Benkler',
    position:
      'Berkman Professonr of Enterpreneurial Legal Studies at Harvard Law School',
    describtion:
      'Benkler studies commons-based peer poduction,and published his seminal book. The Wealthof Networks in 2006.',
  },
  {
    image: '../assets/member3.png',
    name: 'Yochai Benkler',
    position:
      'Berkman Professonr of Enterpreneurial Legal Studies at Harvard Law School',
    describtion:
      'Benkler studies commons-based peer poduction,and published his seminal book. The Wealthof Networks in 2006.',
  },
  {
    image: '../assets/member4.png',
    name: 'Yochai Benkler',
    position:
      'Berkman Professonr of Enterpreneurial Legal Studies at Harvard Law School',
    describtion:
      'Benkler studies commons-based peer poduction,and published his seminal book. The Wealthof Networks in 2006.',
  },
  {
    image: '../assets/member5.png',
    name: 'Yochai Benkler',
    position:
      'Berkman Professonr of Enterpreneurial Legal Studies at Harvard Law School',
    describtion:
      'Benkler studies commons-based peer poduction,and published his seminal book. The Wealthof Networks in 2006.',
  },
  {
    image: '../assets/member6.png',
    name: 'Yochai Benkler',
    position:
      'Berkman Professonr of Enterpreneurial Legal Studies at Harvard Law School',
    describtion:
      'Benkler studies commons-based peer poduction,and published his seminal book. The Wealthof Networks in 2006.',
  },
];
const featuredSpeaker = document.querySelector('.featured-speakers');

mobileMenu.innerHTML = ` <ul class="mobile-nav">
        <li><i class="fas fa-window-close x-icon"></i></li>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="#">Program</a></li>
        <li><a href="#">Join</a></li>
        <li><a href="#">Sponsor</a></li>
        <li><a href="#">News</a></li>
      </ul>`;
const displayMenu = (event) => {
  if (event.target === hamburgerIcon) {
    mobileMenu.classList.toggle('display-none');
  }
  window.document.querySelector('body').classList.toggle('no-scroll');
};
const xIcon = document.querySelector('.x-icon');

const closeMenu = (event) => {
  if (event.target === xIcon) {
    mobileMenu.classList.toggle('display-none');
  }
  window.document.querySelector('body').classList.toggle('no-scroll');
};

const addFeaturedSpeaker = () => {
  for (let i = 0; i <= gustInstructors.length; i += 1) {
    const featuredInstructor = document.createElement('div');

    featuredInstructor.innerHTML = `
  <img src='${gustInstructors[i].image}' alt="" class="featured-image">
<ul>
  <li class="speaker-name">${gustInstructors[i].name}</li>
  <li class="speaker-position">${gustInstructors[i].position}</li>
  <li class="position-line"><li>
  <li class="speaker-description">${gustInstructors[i].describtion}</li>
</ul>`;

    featuredSpeaker.appendChild(featuredInstructor);
    if (i >= 2) {
      featuredInstructor.classList.add('more');
    }
  }
};

const seeMoreBtn = document.querySelector('#see-more');
const seeMore = (event) => {
  if (window.screen > 768) {
    for (let i = 4; i < 6; i += 1) {
      featuredSpeaker.childNodes[i].classList.toggle('dn-feature');
    }
  } else {
    for (let i = 2; i < 6; i += 1) {
      featuredSpeaker.childNodes[i].classList.toggle('dn-feature');
    }
  }

  if (event.target.innerHTML === 'LESS') {
    seeMoreBtn.innerHTML = 'MORE';
  } else {
    seeMoreBtn.innerHTML = 'LESS';
  }
};

hamburgerIcon.addEventListener('click', displayMenu);
xIcon.addEventListener('click', closeMenu);
window.addEventListener('load', addFeaturedSpeaker);
seeMoreBtn.addEventListener('click', seeMore);
