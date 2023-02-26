const animItems = document.querySelectorAll("._anim-items");
//все элементы с классом '._anim-items' анимируются с добовление к ним _active

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);

  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        scrollY > animItemOffset - animItemPoint &&
        screenY < animItemOffset + animItemHeight
      ) {
        //добавления класса актив
        animItem.classList.add("_active");
      } else {
        //проверка на наличие _anim-no-hide чтобы при скроле вверх не было анимации можно и без нее
        if (!animItem.classList.contains("_anim-no-hide")) {
          //удаление класса
          animItem.classList.remove("_active");
        }
      }
    }
  }

  //высчитуем оффсет окна
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.scrollX || document.documentElement.scrollLeft,
      scrollTop = window.scrollY || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft,
    };
  }

  //задержа запуска анимации
  setTimeout(() => {
    animOnScroll();
  }, 300);
}
