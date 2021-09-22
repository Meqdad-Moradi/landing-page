/* 
========================
    toggle header nav
========================
*/

const toggleNave = () => {
  const bars = document.querySelector("#bars");
  const times = document.querySelector("#times");
  const nav = document.querySelector(".header-nav");
  const navLinks = document.querySelectorAll(".nav-list a");
  const navItems = document.querySelectorAll(".nav-list li");

  bars.addEventListener("click", (e) => {
    e.currentTarget.classList.remove("active");
    times.classList.toggle("active");
    if (!nav.classList.contains("active")) {
      nav.classList.add("active");
    }

    // animation links
    navItems.forEach((link, i) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `apearLink .5s ease-in-out ${
          i / 7 + 0.2
        }s forwards`;
      }
    });
  });

  times.addEventListener("click", (e) => {
    e.currentTarget.classList.remove("active");
    bars.classList.toggle("active");
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
    }

    // animation links
    removeAnimation();
  });

  navLinks.forEach((link) =>
    link.addEventListener("click", (e) => {
      if (nav.classList.contains("active")) {
        nav.classList.remove("active");
      }

      if (times.classList.contains("active")) {
        times.classList.remove("active");
        bars.classList.toggle("active");
      }

      // animation links
      removeAnimation();
    })
  );

  // remove animation
  const removeAnimation = () => {
    navItems.forEach((link, i) => {
      if (link.style.animation) {
        link.style.animation = "";
      }
    });
  };
};

toggleNave();

/* 
========================
    showcase slider
========================
*/

const hero = () => {
  const imgesCover = document.querySelector(".imgs");
  const imgs = Array.from(imgesCover.children);
  const prev = document.querySelector("#prev");
  const next = document.querySelector("#next");
  const auto = true;
  const time = 3000;
  let slideInterval;
  const indexEl = document.querySelector("#index");
  let counter = 1;

  // big function
  const heroSlide = (activeImg, targetImg, clonImg) => {
    activeImg.classList.remove("active");
    if (targetImg) {
      targetImg.classList.add("active");
    } else {
      clonImg.classList.add("active");
    }
  };

  // next slide
  next.addEventListener("click", (e) => {
    const activeSlide = imgesCover.querySelector(".active");
    const nextSlide = activeSlide.nextElementSibling;
    const firstSlide = imgs[0];

    // counter
    counter++;
    if (counter > 3) {
      counter = 1;
    }
    indexEl.textContent = counter;

    heroSlide(activeSlide, nextSlide, firstSlide);

    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(() => {
        autoSlide();
      }, time);
    }
  });

  // previous slide
  prev.addEventListener("click", (e) => {
    const activeSlide = imgesCover.querySelector(".active");
    const prevSlide = activeSlide.previousElementSibling;
    const lastSlide = imgs[imgs.length - 1];

    // conter
    counter--;
    if (counter < 1) {
      counter = 3;
    }
    indexEl.textContent = counter;

    heroSlide(activeSlide, prevSlide, lastSlide);

    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(() => {
        autoSlide();
      }, time);
    }
  });

  // auto slide
  const autoSlide = () => {
    const activeSlide = imgesCover.querySelector(".active");
    const nextSlide = activeSlide.nextElementSibling;
    const firstSlide = imgs[0];

    // counter
    counter++;
    if (counter > 3) {
      counter = 1;
    }
    indexEl.textContent = counter;

    activeSlide.classList.remove("active");
    if (nextSlide) {
      nextSlide.classList.add("active");
    } else {
      firstSlide.classList.add("active");
    }
  };

  if (auto) {
    slideInterval = setInterval(() => {
      autoSlide();
    }, time);
  }
};

hero();

/* 
========================
    services section
========================
*/

const services = () => {
  let service = [
    {
      id: 1,
      img: "./images/1.jpg",
      title: "Web Design",
      desc: `Amet consectetur adipisicing elit. Esse labore autem minima sapiente! Incidunt, nulla.`,
    },
    {
      id: 2,
      img: "./images/2.jpg",
      title: "UI/UX Design",
      desc: `Esse labore autem minima sapiente! Incidunt, nulla.`,
    },
    {
      id: 1,
      img: "./images/4.jpg",
      title: "Graphic Design",
      desc: `Consectetur adipisicing elit. Esse labore autem minima sapiente! Incidunt, nulla.`,
    },
  ];

  // manipulate the services card
  const serviceCardWrap = document.querySelector(".services-wrap");
  serviceCardWrap.innerHTML = "";

  window.addEventListener("DOMContentLoaded", () => {
    readServicesItem();
  });

  function readServicesItem() {
    const serviceCard = service
      .map((item) => {
        return `<div class="s-card-body">
      <div class="img">
          <img src="${item.img}" alt="">
      </div>
      <div class="content">
          <div class="text">
              <h2>${item.title}</h2>
              <p>${item.desc}</p>
          </div>
          <div class="btn-wrap">
              <a href="#contact" class="btn">Let's Talk</a>
          </div>
      </div>
  </div>`;
      })
      .join("");

    serviceCardWrap.innerHTML = serviceCard;
  }
};

services();

/* 
=============
    work 
=============
*/

const workProject = () => {
  let works = [
    {
      id: 1,
      title: "sample Website",
      category: "web",
      img: "./images/6.jpg",
      desc: `project is done in 2020`,
    },
    {
      id: 2,
      title: "sample Website",
      category: "web",
      img: "./images/5.jpg",
      desc: `project is done in 2020`,
    },
    {
      id: 3,
      title: "sample Website",
      category: "graphic",
      img: "./images/4.jpg",
      desc: `project is done in 2020`,
    },
    {
      id: 4,
      title: "sample Website",
      category: "graphic",
      img: "./images/3.jpg",
      desc: `project is done in 2020`,
    },
    {
      id: 5,
      title: "sample Website",
      category: "web",
      img: "./images/1.jpg",
      desc: `project is done in 2020`,
    },
    {
      id: 6,
      title: "sample Website",
      category: "UI / UX",
      img: "./images/2.jpg",
      desc: `project is done in 2020`,
    },
  ];

  // manipulate works project items
  const workWrap = document.querySelector(".work-wrap");
  const filterBtnContainer = document.querySelector(".filter-btn-container");
  workWrap.innerHTML = "";
  filterBtnContainer.innerHTML = "";

  window.addEventListener("DOMContentLoaded", () => {
    readWorkItems(works);
    filterBtns();
  });

  // add filter button
  const filterBtns = () => {
    const workCatergorys = works
      .reduce(
        (value, item) => {
          if (!value.includes(item.category)) {
            value.push(item.category);
          }
          return value;
        },
        ["all"]
      )
      .map((item) => {
        return `<button class="filterBtn" data-id="${item}">${item}</button>`;
      })
      .join("");

    filterBtnContainer.innerHTML = workCatergorys;

    // add btns functionality
    const filterBtns = document.querySelectorAll(".filterBtn");

    filterBtns.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.id;
        const category = works.filter((item) => item.category === id);
        filterBtns.forEach((btn) => btn.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (id === "all") {
          readWorkItems(works);
        } else {
          readWorkItems(category);
        }
      })
    );
  };

  // show all items dynamically
  const readWorkItems = (myWork) => {
    const worksItem = myWork
      .map((item) => {
        return `<div class="work-body">
            <div class="img">
                <img src="${item.img}" alt="${item.title}">
            </div>
            <div class="content">
                <div class="text">
                    <p>${item.desc}</p>
                    <h2>${item.title}</h2>
                </div>
                <div class="btn-wrap">
                    <a href="#contact" class="work-btn">Case Study<i class="fas fa-chevron-right"></i></a>
                </div>
            </div>
          </div>`;
      })
      .join("");

    workWrap.innerHTML = worksItem;
  };
};

workProject();

/* 
====================
    sticky header 
====================
*/

const stickyHeader = () => {
  const header = document.querySelector("#header");
  header.style.transition = `all .3s ease-in-out`;
  if (window.scrollY > 0) {
    header.classList.add("sticky-header");
    document.body.style.marginTop = header.offsetHeight + "px";
  } else {
    header.classList.remove("sticky-header");
    document.body.style.marginTop = 0;
  }
};

window.addEventListener("scroll", stickyHeader);

/* 
==============
    about  
==============
*/
const about = () => {
  const btnsWrap = document.querySelector(".about-btn-container");
  const btns = Array.from(btnsWrap.children);
  const aboutSection = document.querySelectorAll(".about-section");

  btns.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      btns.forEach((btn) => btn.classList.remove("active"));
      e.currentTarget.classList.add("active");
      aboutSection.forEach((sec) => sec.classList.remove("active"));

      if (id) {
        const secId = document.getElementById(id);
        secId.classList.add("active");
      }
    })
  );

  // image gallery
  const bigImage = document.querySelector(".big-img");
  const imgGallery = document.querySelectorAll(".about-img-gallery img");
  imgGallery.forEach((img) =>
    img.addEventListener("click", (e) => {
      const currentImage = e.currentTarget.src;
      bigImage.src = currentImage;
    })
  );
};
about();

/* 
====================
    contact form 
====================
*/

const contactForm = () => {
  const form = document.querySelector("#form");
  const firstName = document.querySelector("#name");
  const lastName = document.querySelector("#lname");
  const email = document.querySelector("#email");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    submitForm();
  });

  const submitForm = () => {
    if (firstName.value === "" || firstName.value === null) {
      error(firstName, "please insert your name!");
    } else {
      success(firstName);
    }

    if (lastName.value === "" || lastName.value === null) {
      error(lastName, "please insert your last name!");
    } else {
      success(lastName);
    }

    if (email.value === "" || email.value === null) {
      error(email, "please insert your email address!");
    } else {
      success(email);
    }

    firstName.value = "";
    lastName.value = "";
    email.value = "";
    const message = (document.querySelector("#message").value = "");
  };

  const error = (input, message) => {
    const inputParent = input.parentElement;
    const small = inputParent.querySelector("small");
    inputParent.className = "input-wrap error";
    small.textContent = message;
  };

  const success = (input) => {
    const inputParent = input.parentElement;
    const small = inputParent.querySelector("small");
    inputParent.className = "input-wrap success";
    small.style.display = "none";
  };
};
contactForm();
