<!DOCTYPE html>
<html lang="ru">
   <head>
      <link rel="stylesheet" href="libs/materialize.css">
      <meta name="viewport" content="width=device-width, minimum-scale=1.0" />
      <meta charset="UTF-8">
      <title>Ипотека на строящееся жилье по ставке от 9.25%</title>
      <link rel="stylesheet" href="libs/kladr.css">
      <link rel="stylesheet" href="css/main.css">
      <link rel="stylesheet" href="css/elements.css">
      <link rel="stylesheet" href="css/effects.css">
   </head>
   <body>
     <!-- Yandex.Metrika counter -->
      <script type="text/javascript" > (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter49678438 = new Ya.Metrika2({ id:49678438, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/tag.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks2"); </script> <noscript><div><img src="https://mc.yandex.ru/watch/49678438" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->
      <header>
         <div class="header-wrapper">
            <div class="logo"> <img src="/img/logo.svg"></div>
            <div class="text">
               <h1>ипотека на строящееся жилье по ставке от 9.25%</h1>
            </div>
         </div>
      </header>
      <main style="background: url('../img/bgc.jpg'); background-position: center; background-size: cover; background-repeat: no-repeat;">
         <div class="forma shade">
            <div class="prev"> Оставьте заявку на ипотеку и с вами в ближайшее время свяжется наш специалист <br>Время заполнения заявки - менее одной минуты</div>
            <form id="main-form" action="javascript:void(null);" onsubmit="call()">
               <input type="hidden" value="Новостройка" name="Тип заявки">
               <input type="hidden" name="Данные о квартире" value="<?=$_GET['custitle']?>" >
               <div class="form-content">
                  <div class="ls">
                     <label for="fam">Фамилия:</label>
                     <div class="wrapper">
                        <input id="fam" name="Фамилия" placeholder="Фамилия" type="text">
                        <div class="warning">Укажите корректную фамилию</div>
                     </div>
                     <label for="name">Имя:</label>
                     <div class="wrapper">
                        <input id="name" name="Имя" placeholder="Имя" type="text">
                        <div class="warning">Пожалуйста укажите корректное имя</div>
                     </div>
                     <label for="otch">Отчество:</label>
                     <div class="wrapper">
                        <input id="otch" name="Отчество" placeholder="Отчество" type="text">
                        <div class="warning">Укажите корректное отчество</div>
                     </div>
                     <label for="mobile">Телефон:</label>
                     <div class="wrapper">
                        <input id="mobile" name="Телефон" placeholder="+7 (___) ___-____" type="text">
                        <div class="warning">Некорректно указан номер</div>
                     </div>
                     <label for="mail">Электронная почта:</label>
                     <div class="wrapper">
                        <input id="mail" name="Электронная почта" placeholder="Электронная почта" type="text">
                        <div class="warning">Укажите корректный адрес эл. почты</div>
                     </div>
                     <label for="date">Дата рождения:</label>
                     <div class="wrapper">
                        <input name="Дата рождения" id="date" placeholder="__.__.19__" type="text">
                        <div class="warning">Введите корректную дату</div>
                     </div>
                     <label for="city">Город проживания:</label>
                     <div class="wrapper">
                        <input id="city" name="Город проживания" placeholder="Укажите город" type="text">
                        <div class="warning">Вы не указали город</div>
                     </div>
                  </div>
                  <div class="ds">
                     <div class="inputs-ds">
                        <label for="price">Укажите стоимость квартиры:</label> <input value="<?=$_GET['price'] ?>" name="Стоимость квартиры" type="text" id="price" placeholder="Например 4 300 000"> <span>Наличие материнского капитала:</span>
                        <div class="mtkptl">
                           <p> <label> <input class="with-gap" type="radio" name="Материнский капитал" value="Есть" id="kp_true"/> <span>Есть</span> </label></p>
                           <p> <label> <input class="with-gap" checked class="radio-item" type="radio" name="Материнский капитал" value="Нет" id="kp_false"/> <span>Нет</span> </label></p>
                        </div>
                        <label for="frstvznos">Введите сумму первого взноса:</label>
                        <div class="wrapper">
                           <input name="Сумма первого взноса" type="text" id="frstvznos" placeholder="Например 1 100 000">
                           <div class="warning"></div>
                        </div>
                        <span>Подтверждение дохода:</span>
                        <div class="dohod">
                           <p> <label> <input class="with-gap" type="radio" checked name="Подтверждение дохода" id="2ndfl" value="2 НДФЛ"/> <span>2 НДФЛ</span> </label></p>
                           <p> <label> <input class="with-gap" type="radio" value="Справка по форме банка" name="Подтверждение дохода" id="spravka"/> <span>Справка по форме банка</span> </label></p>
                        </div>
                     </div>
                     <div class="aproved">
                        <style></style>
                        <div class="radio-item"> <input checked id="agree" type="radio" name="Согласие на обработку" value="Есть"> <label class="letsgo" for="agree">Нажимая кнопку "Отправить заявку", я даю своё согласие на обработку моих персональных данных в соответствии с Федеральным законом от 27.07.2006 года №152‑ФЗ "О персональных данных", на условиях и для целей, определённых в Согласии на обработку персональных данных.</label></div>
                        <br> <button class="go waves-light waves-effect" >Отправить заявку на ипотеку</button>
                     </div>
                  </div>
               </div>
               <div class="form-footer"> АО "ДОМ.РФ". Местонахождение: г. Москва, ул. Воздвиженка, д.10, ИНН 7729355614, КПП 997950001 <br>АКБ «РОССИЙСКИЙ КАПИТАЛ» (АО), г. Москва</div>
            </form>
         </div>
      </main>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.min.js">
      </script> <script src="https://mc.yandex.ru/metrika/watch.js">
      </script> <script src="/js/main.js"></script>
      <script>
      function call() {if(!all_validate()) {$("button").css({"background-color":err_color});return false;} var msg=$('form').serialize();$.ajax({type:'POST',url:'/send.php',data:msg,success:function(data){console.log(data);if(data==1) {yaCounter49678438.reachGoal('ipoteka_na_stroit');window.location.replace('http://ipotekazayavka.ru/spasibo.html');}},error:function(xhr,str){}});}</script>
       <script src='/libs/kladr.min.js'></script>
      <script>
      $('[name="Город проживания"]').kladr({
				type: $.kladr.type.city
			});
      </script>
      <!-- <script crossorigin="anonymous" async type="text/javascript" src="//api.pozvonim.com/widget/callback/v3/b62e9daada1d4d613e6986c5de0dd26e/connect" id="check-code-pozvonim" charset="UTF-8"></script> -->
  </body>
</html>