// document.addEventListener("DOMContentLoaded", function (){

const btnMore = document.querySelector('.podcasts__more');
const podcastItems = document.querySelectorAll('.podcasts__card');
btnMore.addEventListener('click', () => {
  podcastItems.forEach(el => {
    el.classList.add('podcasts__card--visible')
  });
  btnMore.closest('.podcasts__more').classList.add('podcasts__more--hidden');

});

/*************************************************************************/
document.getElementById("opensearch-form").addEventListener("click", function () {
  document.getElementById("searchform").classList.add("headertop__searchform_open");

});
/***********************************************************************/
document.addEventListener('click', function (event) {
  var e = document.getElementById('searchform');
  var e1 = document.getElementById('opensearch-form');
  if ((!e.contains(event.target)) && (!e1.contains(event.target)))
    e.classList.remove("headertop__searchform_open");

});


/************************************************************************/
// const element = document.querySelector('.js-choice');
// const cchoices = new Choices(element, {
//   searchEnabled: false, itemSelectText: "", shouldSort: false

// });

/*********************************************************/
let flagopen = 0;
let flagopen1 = 0;
let flagopen3 = 0;
document.getElementById("burger").addEventListener("click", function () {
  document.querySelector("header").classList.toggle("burgeropen");

  if (flagopen == 0) {
    flagopen = 1;
    if (flagopen1 == 1) {
      document.querySelector("header").classList.remove("playopen");
      flagopen1 = 0;
    }

  }
  else {
    flagopen = 0;


  }
  if (document.documentElement.clientWidth > 576) {
    if (flagopen3 == 1) {
      document.querySelector("header").classList.remove("burgeropenbottom");
      flagopen3 = 0;
    }
  }
  if (document.documentElement.clientWidth <= 576) {
    if (flagopen == 1) {
      document.querySelector("header").classList.add("burgeropenbottom");
      flagopen3 = 1;
    }
    else {
      document.querySelector("header").classList.remove("burgeropenbottom");
      flagopen3 = 0;
    }
  }
});

/******************************************************************/
window.addEventListener('resize', start);
function start() {

  if (flagopen == 1 && document.documentElement.clientWidth <= 576) {
    document.querySelector("header").classList.add("burgeropenbottom");
    flagopen3 = 1;
  }
}

/***********************************************************/

document.getElementById("burger").addEventListener("click", function () {
  document.body.classList.toggle("stop-skroll");
});

let menulinks = document.querySelectorAll(".headertop__nav").forEach(function (element) {
  element.addEventListener("click", function () {
    document.querySelector("header").classList.remove("burgeropen");
    document.body.classList.remove("stop-skroll");
    flagopen = 0;
  })
});



/**************************************************************/
document.getElementById("openplay").addEventListener("click", function () {
  document.querySelector("header").classList.add("playopen");
  flagopen1 = 1;
  if (flagopen == 1) {
    document.querySelector("header").classList.toggle("burgeropen");
    flagopen = 0;
  }
});

/***************************************************************/
document.getElementById("closeplay").addEventListener("click", function () {
  document.querySelector("header").classList.remove("playopen");
  flagopen1 = 0;
});
/***************************************************************/
document.getElementById("playopenclose576").addEventListener("click", function () {
  document.querySelector("header").classList.toggle("playopen");
  if (flagopen1 == 0) {
    flagopen1 = 1;
    if (flagopen == 1) {
      document.querySelector("header").classList.toggle("burgeropen");
      document.body.classList.toggle("stop-skroll");
      flagopen = 0;
    }
  }
  else flagopen1 = 0;
  if (flagopen3 == 1) {
    document.querySelector("header").classList.remove("burgeropenbottom");
    flagopen3 = 0;
  }


});

const wraper = document.querySelector(".headertop__nav");

document.addEventListener("click", (e) => {

  if ((wraper.contains(e.target))) {
    document.querySelector("header").classList.remove("burgeropenbottom");
    flagopen3 = 0;
  }

});


/**********************************************************************/

document.getElementById("guests1").onclick = function () {
  if (document.getElementById("guests1").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar3.jpg')";
    document.getElementById('guest-name').innerHTML = "Сергей Денисов";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";
  }
};

document.getElementById("guests2").onclick = function () {
  if (document.getElementById("guests2").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar4.jpg')";
    document.getElementById('guest-name').innerHTML = "Евгений Войновский";
    document.getElementById('guest-about').innerHTML = " Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests3").onclick = function () {
  if (document.getElementById("guests3").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar5.jpg')";
    document.getElementById('guest-name').innerHTML = "Олег Свиридовский";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года.Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";
  }
};

document.getElementById("guests4").onclick = function () {
  if (document.getElementById("guests4").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar10.jpg')";
    document.getElementById('guest-name').innerHTML = "Денис Тельман";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests5").onclick = function () {
  if (document.getElementById("guests5").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar11.jpg')";
    document.getElementById('guest-name').innerHTML = "Матвей Мечников";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года.Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года.";

  }
};

document.getElementById("guests6").onclick = function () {
  if (document.getElementById("guests6").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar14.jpg')";
    document.getElementById('guest-name').innerHTML = "Ольга Мартынова";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года.";

  }
};

document.getElementById("guests7").onclick = function () {
  if (document.getElementById("guests7").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar12.jpg')";
    document.getElementById('guest-name').innerHTML = "Владислав Кауперс";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests8").onclick = function () {
  if (document.getElementById("guests8").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar13.jpg')";
    document.getElementById('guest-name').innerHTML = "Юрий Горин";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года.Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года.Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года.";

  }
};

document.getElementById("guests9").onclick = function () {
  if (document.getElementById("guests9").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar15.jpg')";
    document.getElementById('guest-name').innerHTML = "Константин Прусино";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests10").onclick = function () {
  if (document.getElementById("guests10").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar16.jpg')";
    document.getElementById('guest-name').innerHTML = "Дмитрий Михалок";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests11").onclick = function () {
  if (document.getElementById("guests11").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar17.jpg')";
    document.getElementById('guest-name').innerHTML = "Михаил Пожитников";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года.Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года.";

  }
};

document.getElementById("guests12").onclick = function () {
  if (document.getElementById("guests12").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar18.jpg')";
    document.getElementById('guest-name').innerHTML = "Максим Сергеев";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";
  }
};

document.getElementById("guests13").onclick = function () {
  if (document.getElementById("guests13").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar19.jpg')";
    document.getElementById('guest-name').innerHTML = "Иван Калитников";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};
document.getElementById("guests14").onclick = function () {
  if (document.getElementById("guests14").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar20.jpg')";
    document.getElementById('guest-name').innerHTML = "Пётр Пиотровский";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года.";

  }
};

document.getElementById("guests15").onclick = function () {
  if (document.getElementById("guests15").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar21.jpg')";
    document.getElementById('guest-name').innerHTML = "Георгий Полуян";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};
document.getElementById("guests16").onclick = function () {
  if (document.getElementById("guests16").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar1.jpg')";
    document.getElementById('guest-name').innerHTML = "Макарова Анна";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests17").onclick = function () {
  if (document.getElementById("guests17").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar2.jpg')";
    document.getElementById('guest-name').innerHTML = "Бузова Ольга";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests18").onclick = function () {
  if (document.getElementById("guests18").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar6.jpg')";
    document.getElementById('guest-name').innerHTML = "Петрова Валентина";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests19").onclick = function () {
  if (document.getElementById("guests19").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar7.jpg')";
    document.getElementById('guest-name').innerHTML = "Пугачеа Алла";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};
document.getElementById("guests20").onclick = function () {
  if (document.getElementById("guests20").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar8.jpg')";
    document.getElementById('guest-name').innerHTML = "Иванова Люба";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года.Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года.";

  }
};
document.getElementById("guests21").onclick = function () {
  if (document.getElementById("guests21").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar9.jpg')";
    document.getElementById('guest-name').innerHTML = "Котова Мария";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года.";

  }
};
document.getElementById("guests22").onclick = function () {
  if (document.getElementById("guests22").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar22.jpg')";
    document.getElementById('guest-name').innerHTML = "Сергеева Татьяна";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests23").onclick = function () {
  if (document.getElementById("guests23").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar15.jpg')";
    document.getElementById('guest-name').innerHTML = "Сергей Денисов";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests24").onclick = function () {
  if (document.getElementById("guests24").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar16.jpg')";
    document.getElementById('guest-name').innerHTML = "Евгений Войновский";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года.";

  }
};

document.getElementById("guests25").onclick = function () {
  if (document.getElementById("guests25").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar17.jpg')";
    document.getElementById('guest-name').innerHTML = "Олег Свиридовский";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года.";

  }
};

document.getElementById("guests26").onclick = function () {
  if (document.getElementById("guests26").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar18.jpg')";
    document.getElementById('guest-name').innerHTML = "Денис Тельман";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года.Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года.Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests27").onclick = function () {
  if (document.getElementById("guests27").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar3.jpg')";
    document.getElementById('guest-name').innerHTML = "Сергей Денисов";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};
document.getElementById("guests28").onclick = function () {
  if (document.getElementById("guests28").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar4.jpg')";
    document.getElementById('guest-name').innerHTML = "Сергей Войновский";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};
document.getElementById("guests29").onclick = function () {
  if (document.getElementById("guests29").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar5.jpg')";
    document.getElementById('guest-name').innerHTML = "Олег Свиридовский";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests30").onclick = function () {
  if (document.getElementById("guests30").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar10.jpg')";
    document.getElementById('guest-name').innerHTML = "Денис Тельман";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests31").onclick = function () {
  if (document.getElementById("guests31").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar11.jpg')";
    document.getElementById('guest-name').innerHTML = "Евгений Войновский";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests32").onclick = function () {
  if (document.getElementById("guests32").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar12.jpg')";
    document.getElementById('guest-name').innerHTML = "Олег Свиридовский";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests33").onclick = function () {
  if (document.getElementById("guests33").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar13.jpg')";
    document.getElementById('guest-name').innerHTML = "Денис Тельман";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests34").onclick = function () {
  if (document.getElementById("guests34").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar1.jpg')";
    document.getElementById('guest-name').innerHTML = "Людмила Иванова";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests35").onclick = function () {
  if (document.getElementById("guests35").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar6.jpg')";
    document.getElementById('guest-name').innerHTML = "Евгения Сидорова";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests36").onclick = function () {
  if (document.getElementById("guests36").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar7.jpg')";
    document.getElementById('guest-name').innerHTML = "Олеся Караулова";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests37").onclick = function () {
  if (document.getElementById("guests37").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar8.jpg')";
    document.getElementById('guest-name').innerHTML = "Мария Михеева";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests38").onclick = function () {
  if (document.getElementById("guests38").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar9.jpg')";
    document.getElementById('guest-name').innerHTML = "Лидия Суровая";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests39").onclick = function () {
  if (document.getElementById("guests39").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar21.jpg')";
    document.getElementById('guest-name').innerHTML = "Александр Жуков";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests40").onclick = function () {
  if (document.getElementById("guests40").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar20.jpg')";
    document.getElementById('guest-name').innerHTML = "Михаил Медведьев";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests41").onclick = function () {
  if (document.getElementById("guests41").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar19.jpg')";
    document.getElementById('guest-name').innerHTML = "Олег Дерипаска";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests42").onclick = function () {
  if (document.getElementById("guests42").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar14.jpg')";
    document.getElementById('guest-name').innerHTML = "Эльвира Давлетова";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests43").onclick = function () {
  if (document.getElementById("guests43").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar9.jpg')";
    document.getElementById('guest-name').innerHTML = "Гульнур Салей";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests44").onclick = function () {
  if (document.getElementById("guests44").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar8.jpg')";
    document.getElementById('guest-name').innerHTML = "Ольга Кузнецова";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests45").onclick = function () {
  if (document.getElementById("guests45").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar15.jpg')";
    document.getElementById('guest-name').innerHTML = "Владислав Матыгин";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";

  }
};

document.getElementById("guests46").onclick = function () {
  if (document.getElementById("guests46").checked) {
    document.getElementById('guest-avatar').style.backgroundImage = "url('img/avatar13.jpg')";
    document.getElementById('guest-name').innerHTML = "Юрий Гагарин";
    document.getElementById('guest-about').innerHTML = "Российский искусствовед, арт-критик, куратор выставок, дизайнер, кандидат культурологии. Арт-критик газеты &laquo;Коммерсантъ&raquo;. Ведёт активную блогерскую деятельность как куратор музея &laquo;Гараж&raquo;, коим является с&nbsp;2016&nbsp;года. ";


  }


};

const checkgroup = document.querySelectorAll(".accordion__top");
const guestgroup = document.querySelectorAll(".guests__input");
const guestgroup1 = document.querySelectorAll(".group1");
const guestgroup2 = document.querySelectorAll(".group2");
const guestgroup3 = document.querySelectorAll(".group3");
const guestgroup4 = document.querySelectorAll(".group4");
const guestgroup5 = document.querySelectorAll(".group5");
const guestgroup6 = document.querySelectorAll(".group6");

const svg1920 = document.querySelectorAll(".podcasts__playbtn-svg1920");
const svg320 = document.querySelectorAll(".podcasts__playbtn-svg320");
const svg1920p = document.querySelectorAll(".podcasts__playbtn-svg1920pause");
const svg320p = document.querySelectorAll(".podcasts__playbtn-svg320pause");
const playbtn = document.querySelectorAll(".podcasts__playbtn");
const playbtn1 = document.querySelectorAll(".headerbottom__btnplay");
const playbtn1svg = document.querySelectorAll(".headerbottom__btnplay-svg");
const playbtn1svgp = document.querySelectorAll(".headerbottom__btnplay-svgpause");

const arraylength = playbtn.length;
const arraylength1 = playbtn1.length;
const playdArray = new Array(arraylength).fill(0);
const playdArray1 = new Array(arraylength1).fill(0);

const count = checkgroup.length;
var x = 0;
var y = 0;

for (let i = 0; i < arraylength; i++) {
  playbtn[i].addEventListener('click', function () {

    svg320p[i].classList.toggle("pause");
    svg320[i].classList.toggle("pause");
    svg1920[i].classList.toggle("pause");
    svg1920p[i].classList.toggle("pause");
    playdArray[i] = 1;
    x = i;
    obnul();

  })

}

function obnul() {
  for (let j = 0; j < arraylength; j++) {
    if (j != x) {

      if (playdArray[j] == 1) {
        svg320p[j].classList.add("pause");
        svg320[j].classList.remove("pause");
        svg1920[j].classList.remove("pause");
        svg1920p[j].classList.add("pause");
        playdArray[j] = 0;

      }
    }

  }

}


for (let i = 0; i < arraylength1; i++) {
  playbtn1[i].addEventListener('click', function () {
    playbtn1svg[i].classList.toggle("pause");
    playbtn1svgp[i].classList.toggle("pause");
    playdArray1[i] = 1;
    y = i;
    obnul1();
  })
}
function obnul1() {
  for (let j = 0; j < arraylength1; j++) {
    if (j != y) {

      if (playdArray1[j] == 1) {
        playbtn1svg[j].classList.remove("pause");
        playbtn1svgp[j].classList.add("pause");
        playdArray[j] = 0;

      }

    }
  }

}


const count1 = new Array(count).fill(0);
count1[0] = 1;
var flag = 1;
document.getElementById("guestrightsection").classList.add("guestsbottom__left--visible");


for (let i = 0; i < count; i++) {
  checkgroup[i].addEventListener('click', function () {

    if (count1[i] == 0) {
      count1[i] = 1;

      if ((count1[i] == 1) && (flag == 1)) {
        document.getElementById("guestrightsection").classList.remove("guestsbottom__left--visible");
        guestgroup.forEach(el => {
          el.checked = false
        })
      }
      for (let j = 0; j < count; j++) {
        if (i != j)
          count1[j] = 0;
      }
      flag = 1;
    }
    else {
      count1[i] = 0;
      document.getElementById("guestrightsection").classList.remove("guestsbottom__left--visible");
      flag = 1;
      guestgroup.forEach(el => {
        el.checked = false

      });
    }
  }
  )
}

for (let n = 0; n < guestgroup.length; n++) {
  guestgroup[n].addEventListener('click', function () {
    if (guestgroup[n].checked === true)
      document.getElementById("guestrightsection").classList.add("guestsbottom__left--visible");

  });
}

var container = document.querySelector(".formpopupcontainer");
var popapbuttons = document.querySelectorAll(".authoriz-btn");
var closecontainer = document.querySelector(".formpopup__closebtn");
for (let j = 0; j < popapbuttons.length; j++) {
  popapbuttons[j].addEventListener('click', function () {
    container.style.display = 'flex';
  });
}
closecontainer.addEventListener('click', function () {
  container.style.display = 'none';
});



// document.addEventListener("DOMContentLoaded", function () {
let acc = new Accordion('.accordion__list', {
  duration: 700,
  elementClass: 'accordion__item',
  triggerClass: 'accordion__top',
  panelClass: 'accordion__bottom',

});

const element = document.querySelector('.js-choice');
const cchoices = new Choices(element, {
  searchEnabled: false, itemSelectText: "", shouldSort: false

});



  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    a11y: {
      paginationBulletMessage: 'Слайд номер{{index}}'
    },
  
    breakpoints: {
  
      0: {
        slidesPerView: 2,
        spaceBetween: 11,
  
      },
  
      576: {
        slidesPerView: 2,
  
      },
  
      1025: {
        slidesPerView: 3,
  
      },
      1400: {
        slidesPerView: 4,
  
      },
    }
  
  });




// if (document.documentElement.clientWidth <= 576) {
//   document.querySelector(".playlists__leftsection-swiper").classList.add("swiper");
//   document.querySelector(".playlists__leftsection-swiper").classList.add("mySwiper2");
//   document.querySelectorAll(".leftplaysection__radioitem").forEach(el => {
//     el.classList.add("swiper-slide");
//   })
// }
// const swiper1 = new Swiper(".mySwiper2", {
//   slidesPerView: "auto",
//   spaceBetween: 18,


// });




// window.addEventListener('resize', function () {
//   const swiper1 = new Swiper(".mySwiper2", {
//     slidesPerView: "auto",
//     spaceBetween: 18,


//   });

//   if (document.documentElement.clientWidth <= 576) {
//     document.querySelector(".playlists__leftsection-swiper").classList.add("swiper");
//     document.querySelector(".playlists__leftsection-swiper").classList.add("mySwiper2");
//     document.querySelectorAll(".leftplaysection__radioitem").forEach(el => {
//       el.classList.add("swiper-slide");
//       return;
//     })
//   }
//   else {
//     document.querySelector(".playlists__leftsection-swiper").classList.remove("swiper");
//     document.querySelector(".playlists__leftsection-swiper").classList.remove("mySwiper2");
//     document.querySelectorAll(".leftplaysection__radioitem").forEach(el => {
//       el.classList.remove("swiper-slide");
//       return;
//     })
//   }
// })








const validation = new JustValidate('#form', {

  errorFieldStyle: {
    border: "2px solid #D52B1E",
    borderColor: "#D52B1E",
  },
  errorLabelStyle: {
    color: "#D52B1E",
    fontWeight: '400',
    fontSize: "12px",
    lineHeight: "12px",
  },
})
validation
  .addField("#name", [
    {
      rule: 'required',
      errorMessage: 'Введите Имя',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Имя должно содержать минимум 2 символа'
    },
    {
      rule: 'maxLength',
      value: 20,
      errorMessage: 'Имя должно содержать не более 20 символов'
    }
  ])

  .addField("#message", [
    {
      rule: 'required',
      errorMessage: 'Введите Ваше сообщение'
    },

  ])
  .addField("#email", [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели E-mail'
    },
    {
      rule: 'email',
      errorMessage: 'Не верный формат почты'
    },
  ])
  .addField("#formcheckbox", [
    {
      rule: 'required',
      errorMessage: 'Поставте галочку о согласии'
    },
  ])


const validationEnter = new JustValidate('#enterform', {
  errorFieldStyle: {
    border: "2px solid #D52B1E",
    borderColor: "#D52B1E",
  },
  errorLabelStyle: {
    color: "#D52B1E",
    fontWeight: '400',
    fontSize: "12px",
    lineHeight: "12px",
  },
})

validationEnter
  .addField("#login", [
    {
      rule: 'required',
      errorMessage: 'Введите Логин',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Логин минимум 2 символа'
    },
    {
      rule: 'maxLength',
      value: 20,
      errorMessage: 'Логин максисмум 20 символов'
    },
  ])

  .addField('#password', [
    {
      rule: 'password',
      errorMessage: 'Мин: 8 символов 1 буква 1 цифра',
    },
    {
      rule: 'required',
      errorMessage: 'Введите Пароль',
    },


  ])







  .onSuccess((event) => {
    document.getElementById("form").submit();
    document.getElementById("enterform").submit();
  });




// })
