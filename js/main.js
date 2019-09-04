var 
  mass = {
    'fam': !1,
    'name': !1,
    'otch': !1,
    'mail': !1,
    'city': !1,
    "date": !1,
    "frstvznos": !1,
    "price": !1
  },
  minfrstvz, mtkptl=false;
  err_color = '#ff0a00',
  norm_color = '#acacac',
  good = `<div class="well shade">
        <div class="wrap">
        <h1>Спасибо за ваше обращение!</h1>
        <p>Ваша заявка на ипотеку будет рассмотрена в ближайшее время <br>
        После рассмотрения заявки с вами свяжется наш менеджер и сообщит решение по ипотеке</p>
      </div></div>`;

function getnum(str) {
  return String(str).replace(/[^\d]/g, '')
}

function pricepars(str) {
  var
    RegEx = /\s/g;
  str = String(str).replace(RegEx, "");
  return (str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '))
};

function valid_date(str) {
  if (/^(0?[1-9]|[12][0-9]|3[01])\.(0?(?:[1-9]|1[0-2]))\.[1-2][0-9]{3}$/.test(str)) {
    let cfr = parseInt(str.substr(-2));
    if (cfr > 97 || cfr < 58) {
      return !1
    }
    return !0
  }
  return !1
}

function valid_inputs() {
  let ret;
  $('input[type="text"]').each(function (index, el) {
    if ($(el).val() == '') {
      inp_err(el);
      ret = !1;
      return ret
    }
    if ($(el).attr("id") in mass) {
      ret = test_inputs(el, !1);
      return ret
    }
    inp_true(el)
  });
  if (ret === !1) {
    return !1
  }
  return !0
}

function all_validate() {
  if (!valid_inputs()) {
    return !1
  }
  return !0
}

function vz_inp_err(el, newval, pref) {
  $(el).css({
    "border-color": err_color
  });
  $(el).parent().children('.warning').html("Не "+pref+" " + pricepars(String(newval)) + " руб.");
  $(el).parent().children('.warning').css({
    "visibility": 'visible'
  });
  mass.fz = !1;
  return !1
}

function vz_inp_norm(el) {
  $(el).css({
    "border-color": norm_color
  });
  $(el).parent().children('.warning').css({
    "visibility": 'hidden'
  });
  mass.fz = !0;
  return !0
}

function inp_err(inp) {
  $(inp).css({
    "border-color": err_color
  });
  $(inp).parent().children('.warning').css({
    "visibility": 'visible'
  });
  mass[$(this).attr("id")] = !1;
  return !1
}

function inp_true(inp) {
  $(inp).css({
    "border-color": norm_color
  });
  $(inp).parent().children('.warning').css({
    "visibility": 'hidden'
  });
  mass[$(this).attr("id")] = !0;
  return !0
}

function valid_price(val) {
  var reg = [/^\D+/, /[^.,\d]+/g, /[\.,]+/, /(\d+\.\d{2}).*$/],
    ch = val.replace(reg[0], '').replace(reg[1], '').replace(reg[2], '.').replace(reg[3], '$1');
  return ch
};

function valid_mail(str) {
  return (/^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/.test(str))
}

function valid_name(str) {
  return (/^[А-Яа-яЁё]+$/.test(str))
}

function valid_city(str) {
  return /^[а-яА-Я0-9- ]*$/.test(str)
}

function test_inputs(el, flag = !0) {
  let vr;
  switch ($(el).attr("id")) {
    case "mail":
      if (valid_mail($(el).val())) {
        return inp_true(el)
      }
      return inp_err(el);
      break;
    case "fam":
    case "name":
    case "otch":
      if (valid_name($(el).val())) {
        return inp_true(el)
      }
      return inp_err(el);
      break;
    case "city":
      if (valid_city($(el).val())) {
        return inp_true(el)
      }
      return inp_err(el);
      break;
    case "price":
      vr = valid_price($(el).val());
      $(el).val(pricepars(Math.ceil(vr)));
      if (vr == 0) {
        mass.price = !1;
        return !1
      } else if (flag) {
        mass.price = !0;
        return !0
      }
      break;
    case "frstvznos":
      vr = parseInt(getnum($(el).val()));
      vr = isNaN(vr)? 0 : vr;
      console.log(vr);
      if (vr < minfrstvz) {
        return vz_inp_err(el, minfrstvz, 'менее')
      }
      if (vr > maxfrstvz){
        return vz_inp_err(el, maxfrstvz, 'более')
      }
      return vz_inp_norm(el);
      break;
    case "date":
      if (valid_date($(el).val())) {
        return inp_true(el)
      }
      return inp_err(el);
      break
  }
}
$(document).ready(function () {
  minfrstvz = Math.ceil($("#price").val() * 0.2);
  let veryvr = parseInt(getnum($("#price").val()))
  maxfrstvz = veryvr > 5000000 ? veryvr * 0.9 : veryvr - 500000;
  $("#price").val(pricepars($("#price").val()))
  $.mask.definitions['9'] = '';
  $.mask.definitions.n = '[0-9]';
  $.mask.definitions.d = '[0-3]';
  $.mask.definitions.m = '[0-2]';
  $("#mobile").mask("+7 (nnn) nnn-nnnn", {
    completed: function () {
      inp_true($("#mobile"))
    }
  });
  $("#date").mask("dn.mn.19nn", {
    completed: valid_date
  });
  $('input[type="text"]').change(function () {
    test_inputs(this)
  });
  $('input[name="Материнский капитал"]').change(function () {
    mtkptl = ($(this).val() === 'Есть');
    $("#price").trigger("input");
    if ($("#price").val() == '' || $("#price").val()==0) {
      $("#frstvznos").val("");
    }
    vz_inp_norm($("#frstvznos"))
  });
  $("#price").on('input', function () {
    let val = parseInt(getnum($(this).val()))
    vz_inp_norm($("#frstvznos"))
    $(this).val(pricepars(val))
    if (mtkptl) {
      minfrstvz = val > 4500000 ? Math.ceil(val * 0.2) - 450000 : Math.ceil(val*0.1);
    }else{
      minfrstvz = Math.ceil(val * 0.2);
    }
    let veryvr = parseInt(getnum($("#price").val()))
    maxfrstvz = veryvr > 5000000 ? veryvr * 0.9 : veryvr - 500000;
    $("#frstvznos").val(pricepars(minfrstvz));
  });
  $("#price").change(function(){
    $("#frstvznos").val(pricepars(minfrstvz));
  })
  $("#frstvznos").on('input', function () {
    $(this).val(pricepars($(this).val()))
  })
})