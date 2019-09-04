// Служебные функции из моей библиотеки 
var ggn;
ggn = getGreatNum;

// Для иконок 
var icon;
icon = {
  rub: ' <i class="fa fa-rub" aria-hidden="true"></i>'
}

function getValform(el) {
  let allipnut = $(el + " input");
  let result = '';
  $(allipnut).each(function () {
    result += $(this).attr("name") + "=" + $(this).val() + "&";
  })
  result = result.slice(0, - 3)
  return result;
}

var srok, dolg, price, stavka, eshplat, result;

function filter() {
  let val, newval;
  val = $(this).val();
  newval = ggn(val);
  $(this).val(newval);
}
$(document).ready(function () {
  var target = true;
  var actionspostChange = {
    price: function () {
      sliders['#dolg'].update({
        // min: ($('#price').val() * 0.2), 
        max: ($('#price').val() * 0.8)
      })
      const dolgmax = $('#dolg').parent().parent().children('.rng-mark').children('.max');
      $(dolgmax).html(ggn($('#price').val() * 0.8) + icon.rub);
      sliders['#dolg'].options.onChange();
    },
    dolg: function () {
      let price, dolg, stavka, period;
      var dolg_result;
      price = $('#price').val();
      dolg = Number($('#dolg').val());
      if (dolg > price * 0.5) {
        stavka = 9.75;
      } else {
        stavka = 10;
      }
      $('#stv').val(stavka + '%');
      period = $('#srok').val() * 12 - 2;
      result = getPayment(dolg, period, stavka);
      if (target) {
        $('.plt-val').html(ggn(result) + icon.rub)
      } else {
        dolg_result = [];
        for (let index = 360; index > 35; index--) {
          dolg_result.push(getPayment(dolg, index-2, stavka));
        }
        sliders['#eshplt'].update({
          values: dolg_result
        })
        let rng_mark_eshplt = $('#eshplt').parent().parent().children('.rng-mark');
        $(rng_mark_eshplt).children('.max').html(ggn(dolg_result[dolg_result.length - 1]) + icon.rub);
        $(rng_mark_eshplt).children('.min').html(ggn(dolg_result[0]) + icon.rub);
        sliders['#eshplt'].options.onChange();
      }
    },
    srok: function () {
      sliders['#dolg'].options.onChange();
    },
    eshplt: function () {
      $('.plt-val').html(-(sliders['#eshplt'].options.values.indexOf(parseInt($('#eshplt').val())) - 360) + ' мес.')
    }
  }

  function Createsetval(id, pars, next) {
    return function () {
      $(id + '_val').val(pars($(id).val()));
      if (next) {
        next.call(this)
      }
    }
  }

  var actiononChange = {
    price: new Createsetval('#price', ggn, actionspostChange.price),
    dolg: new Createsetval('#dolg', ggn, actionspostChange.dolg),
    srok: new Createsetval('#srok', getPostfixYear, actionspostChange.srok),
    eshplt: new Createsetval('#eshplt', ggn, actionspostChange.eshplt)
  }


  $("#eshplt").ionRangeSlider({
    type: 'single',
    hide_min_max: true,
    onChange: actiononChange.eshplt
  });

  $("#price").ionRangeSlider({
    type: 'single',
    step: 25000,
    from: 8000000,
    hide_min_max: true,
    onChange: actiononChange.price
  });

  $("#dolg").ionRangeSlider({
    type: 'single',
    from: 3900000,
    min: 500000,
    max: 6400000,
    hide_min_max: true,
    step: 25000,
    onChange: actiononChange.dolg
  });

  $("#srok").ionRangeSlider({
    type: 'single',
    min: 3,
    max: 30,
    step: 1,
    from: 8,
    hide_min_max: true,
    onChange: actiononChange.srok
  });


  var sliders = {
    '#price': $('#price').data("ionRangeSlider"),
    '#dolg': $('#dolg').data("ionRangeSlider"),
    '#srok': $('#srok').data("ionRangeSlider"),
    '#eshplt': $('#eshplt').data("ionRangeSlider"),
  }
  function switchtarget() {
    $("[name='Тип заявки']").val($(this).val())
    let sw, pw;
    sw = $("#srok-wrap");
    pw = $("#eshplt-wrap");
    if ($(this).val() === "Уменьшить платеж") {
      $(".plt-prev").html("Ваш ежемесячный платеж:");
      $(sw).show();
      $(pw).hide();
      target = true;
      sliders['#price'].options.onChange();
      return;
    }
    $(sw).hide();
    $(pw).show();
    target = false;
    sliders['#price'].options.onChange();
    $(".plt-prev").html("Новый срок кредитования:");
  }
  $('#modal1').modal({
    endingTop: '15%'
  });
  $("form").validate({
    rules: {
      'Email': {
        required: true,
        email: true
      },
      'Номер телефона': {
        required: true
      },
      'Имя': {
        required: true
      }
    },
    messages: {
      'Email': {
        email: 'Пожалуйста введите корректный email',
        required: 'Поле Email обязательно для заполнения'
      },
      'Номер телефона': {
        required: 'Пожалуйста введите свой номер телефона'
      },
      'Имя': {
        required: 'Пожайлуйста введите имя'
      }
    },
    submitHandler: function () {
      let postdata = getValform('form')
      $.post("http://ipotekazayavka.ru/sendref.php", postdata,
        function (data, textStatus, jqXHR) {
          alert(data);
          if (data) {
            window.location.replace('http://ipotekazayavka.ru/spasibo.html')
          }
        }
      );
    },
    errorElement: 'p',
  })
  $.mask.definitions.n = '[0-9]';
  $("#mobile").mask("+7 (nnn) nnn-nnnn");

  $('input[name="Тип"]').on("change", switchtarget)
  $('input[id*=_val]').on("input", filter);
  $('input[id*=_val]').on("change", function () {
    let value = Number($(this).val().replace(/\s+/g, ''));
    const slidersid = '#' + $(this).attr("id").split('_')[0];
    const maxval = sliders[slidersid].options.max;
    const minval = sliders[slidersid].options.min;
    if (value < minval) {
      value = minval;
    } else if (value > maxval) {
      value = maxval;
    }
    sliders[slidersid].update({
      from: value
    })
    sliders[slidersid].options.onChange();
  });
  $("#srok_val").click(function () { $(this).select() })
  $('input[name="Подтверждение дохода"]').change(function () {
    $('.dohod-val').val($(this).val());
  })
  $("#send").click(function () {
    console.log($("#sp").prop("checked"))
    if ($("#sp").prop("checked")) {
      $("#itog_pay").val(($(".plt-val").html()).split('<')[0]);
      $("#itog-srok").val($("#srok_val").val())
    } else {
      $("#itog_pay").val($("#eshplt_val").val());
      $("#itog-srok").val($(".plt-val").html());
    }
    $("#itog-dolg").val($("#dolg_val").val());
    $("#itog-price").val($("#price_val").val());
    $("#itog_dohod").val($(".dohod-val").val());
  })
  sliders['#price'].options.onChange();
  sliders['#srok'].options.onChange();
})