document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("burgeropen");
  })
  document.getElementById("burger").addEventListener("click", function () {
    document.body.classList.toggle("stop-skroll");
  })

  let menulinks = document.querySelectorAll(".header__nav").forEach(function (element) {
    element.addEventListener("click", function () {
      document.body.classList.remove("stop-skroll");
      document.querySelector("header").classList.remove("burgeropen");
    })
  })

  document.getElementById("stepone").addEventListener("click", function () {
    document.getElementById('image').style.backgroundImage = "url('img/work-pic.jpg')";
    document.getElementById('messageh').innerHTML = "Проводим консультацию";
    document.getElementById('messagespan').innerHTML = "Влечет за&nbsp;собой процесс внедрения и&nbsp;модернизации приоритизации разума над эмоциями. В&nbsp;рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А&nbsp;также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с&nbsp;зарубежных источников, современные исследования подвергнуты целой серии независимых исследований. Кстати, стремящиеся вытеснить традиционное производство, нанотехнологии освещают чрезвычайно интересные особенности картины в&nbsp;целом, однако конкретные выводы, разумеется, призваны к&nbsp;ответу.";

  })
  document.getElementById("steptwo").addEventListener("click", function () {
    document.getElementById('image').style.backgroundImage = "url('img/work-pic2.jpg')";
    document.getElementById('messageh').innerHTML = "Составляем смету";
    document.getElementById('messagespan').innerHTML = "Внедрения и&nbsp;модернизации приоритизации разума над эмоциями. В&nbsp;рамках спецификации современных стандартов, некоторые особенности внутренней политики будут объективно рассмотрены соответствующими инстанциями. А&nbsp;также представители современных социальных резервов, инициированные исключительно синтетически, ограничены исключительно образом мышления. Являясь всего лишь частью общей картины, реплицированные с&nbsp;зарубежных источников, современные исследования подвергнуты целой серии независимых исследований.";
  })

  document.getElementById("stepthree").addEventListener("click", function () {
    document.getElementById('image').style.backgroundImage = "url('img/work-pic3.jpg')";
    document.getElementById('messageh').innerHTML = "Привлекаем подрядчиков";
    document.getElementById('messagespan').innerHTML = "Идейные соображения высшего порядка, а&nbsp;также новая модель организационной деятельности требует анализа прогресса профессионального сообщества. Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от&nbsp;дальнейших направлений развития. Разнообразный и&nbsp;богатый опыт говорит нам, что новая модель организационной деятельности говорит о&nbsp;возможностях системы массового участия. Принимая во&nbsp;внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнить важные задания по&nbsp;разработке прогресса профессионального сообщества.";
  })
  document.getElementById("stepfour").addEventListener("click", function () {
    document.getElementById('image').style.backgroundImage = "url('img/work-pic4.jpg')";
    document.getElementById('messageh').innerHTML = "Инспектируем все этапы работ";
    document.getElementById('messagespan').innerHTML = "Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта напрямую зависит от&nbsp;дальнейших направлений развития. Разнообразный и&nbsp;богатый опыт говорит нам, что новая модель организационной деятельности говорит о&nbsp;возможностях системы массового участия. Принимая во&nbsp;внимание показатели успешности, постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет.";
  })

  document.getElementById("opensearch-form").addEventListener("click", function () {
    document.getElementById("searchform").classList.add("header__searchform_open")
  })

  document.getElementById("searchformbtn-close").addEventListener("click", function () {
    document.getElementById("searchform").classList.remove("header__searchform_open")

  })

  document.getElementById("searchformbtn-close").addEventListener("click", function (e) {
    e.preventDefault();



  })


      // const pagin = document.querySelectorAll('.swiper-pagination-bullet');
      // pagin[0].setAttribute('aria-label', 'Слайд первый');
      // pagin[1].setAttribute('aria-label', 'Слайд второй');
      // pagin[2].setAttribute('aria-label', 'Слайд третий');



});

const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },

  a11y:{   paginationBulletMessage: 'Слайд номер{{index}}'
}


});





new Accordion('.accordion-container');


