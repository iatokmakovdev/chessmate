class Slider {
  constructor(position, currentItem) {
    this.screenWidth =
      document.getElementsByClassName("container")[1].offsetWidth;
    this.containerPadding = 72;
    this.sliderItems = document.getElementsByClassName("slider__list");
    this.sliderList = document.getElementsByClassName("slider__item");
    this.prevBtn = document.getElementById("slider-prev");
    this.nextBtn = document.getElementById("slider-next");
    this.prevBtnM = document.getElementById("slider-prev-m");
    this.nextBtnM = document.getElementById("slider-next-m");
    this.isPaused = false;
    this.position = position;
    this.currentItem = currentItem;
    this.slideWidth =
      document.getElementsByClassName("slider__item")[1].offsetWidth + 94;
    this.count = document.getElementById("count");
    this.countM = document.getElementById("count-m");
    this.slideInterval = setInterval(
      function () {
        this.nextSlide(this.currentItem++);
      }.bind(this),
      4000
    );

    this.prevBtn.addEventListener("click", () => {
      this.previousSlide(this.currentItem--);
    });

    this.nextBtn.addEventListener("click", () => {
      this.nextSlide(this.currentItem++);
    });

    this.prevBtnM.addEventListener("click", () => {
      this.previousSlide(this.currentItem--);
    });

    this.nextBtnM.addEventListener("click", () => {
      this.nextSlide(this.currentItem++);
    });
  }
  nextSlide(item) {
    let cur = 0;
    if (this.screenWidth > 1365) {
      cur = item + 3;
      this.count.innerHTML = cur + 1;
    } else {
      cur = item + 1;
      this.countM.innerHTML = cur + 1;
    }
    this.position -= this.slideWidth;

    if (item >= 3 && this.screenWidth > 1365) {
      this.position = 0;
      this.currentItem = 0;
      this.count.innerHTML = 3;
    } else if (item >= 5 && this.screenWidth < 1366) {
      this.position = 0;
      this.currentItem = 0;
      this.countM.innerHTML = 1;
    }

    this.sliderItems[0].style.transform = `translateX(${this.position}px)`;
    this.sliderItems[0].style.transition = "transform 2s";
  }
  previousSlide(item) {
    let cur = 0;
    if (this.screenWidth > 1365) {
      cur = item + 3;
      this.count.innerHTML = cur - 1;
    } else {
      cur = item + 1;
      this.countM.innerHTML = cur - 1;
    }
    this.position += this.slideWidth;

    if (item <= 0 && this.screenWidth > 1365) {
      this.position = -(this.slideWidth * 3);
      this.currentItem = 3;
      this.count.innerHTML = this.currentItem + 3;
    } else if (item <= 0 && this.screenWidth < 1366) {
      this.position = -(this.slideWidth * 5);
      this.currentItem = 5;
      this.countM.innerHTML = 6;
    }
    this.sliderItems[0].style.transform = `translateX(${this.position}px)`;
    this.sliderItems[0].style.transition = "transform 2s";
  }
}

let slider = new Slider(0, 0);

class MobileSlider {
  constructor(position, currentItem) {
    this.screenWidth =
      document.getElementsByClassName("container")[1].offsetWidth;
    this.sliderItems = document.getElementsByClassName("levels__list");
    this.sliderList = document.getElementsByClassName("levels__item");
    this.prevBtn = document.getElementById("sliderMobile-prev");
    this.nextBtn = document.getElementById("sliderMobile-next");
    this.position = position;
    this.currentItem = currentItem;
    this.containerPadding = 20;
    this.slideWidth =
      document.getElementsByClassName("levels__item")[1].offsetWidth +
      this.containerPadding;
    this.controllers = document.getElementById("controllers");
    this.sliderControllers = this.prevBtn.addEventListener("click", () => {
      this.previousSlide(this.currentItem--);
    });

    this.nextBtn.addEventListener("click", () => {
      this.nextSlide(this.currentItem++);
    });
  }
  nextSlide(item) {
    let cur = 0;
    cur = item + 1;
    this.position -= this.slideWidth;

    if (item >= 6) {
      this.position = 0;
      this.currentItem = 0;
      cur = 0;
    }

    document.querySelectorAll(".sliderBtnsMobile__item").forEach((n) => {
      n.classList.remove("currentSlide");
    });
    console.log(cur);
    let currentCircle = document.querySelector(
      `.sliderBtnsMobile__list :nth-child(${cur + 1})`
    );
    currentCircle.classList.add("currentSlide");

    this.sliderItems[0].style.transform = `translateX(${this.position}px)`;
    this.sliderItems[0].style.transition = "transform 2s";
  }
  previousSlide(item) {
    let cur = 0;
    cur = item + 1;
    this.position += this.slideWidth;

    if (item <= 0) {
      this.position = -(this.slideWidth * 6);
      this.currentItem = 6;
      cur = 8;
    }

    document.querySelectorAll(".sliderBtnsMobile__item").forEach((n) => {
      n.classList.remove("currentSlide");
    });
    console.log(cur);
    let currentCircle = document.querySelector(
      `.sliderBtnsMobile__list :nth-child(${cur - 1})`
    );
    currentCircle.classList.add("currentSlide");

    this.sliderItems[0].style.transform = `translateX(${this.position}px)`;
    this.sliderItems[0].style.transition = "transform 2s";
  }
}

let sliderMobile = new MobileSlider(0, 0);
