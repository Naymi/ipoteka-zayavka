var
  slice_spaces, getNum_ranks, getNum, getGreatNum;
  
/**
 * Вычисление логарифма с произвольным основанием
 * @param {float} x - основание логарифма
 * @param {float} y - число, от которого требуется найти логарифм
 * @return {float}
 */
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

/**
 * Вычисляет ежемесячный платёж по сроку ипотеки
 *
 * @param {float} sum - сумма кредита
 * @param {integer} period - срок в годах
 * @param {float} rate - годовая ставка в процентах
 * @return {integer} или Nan
 */
function getPayment(sum, period, rate) {
  let i, koef, result;
  // ставка в месяц
  i = rate / 12 / 100;

  // коэффициент аннуитета
  koef = i * Math.pow(1 + i, period) / (Math.pow(1 + i, period) - 1);

  // итог
  result = sum * koef;

  // округлим до целых
  return result.toFixed();
};

/**
 * Вычисляет период выплаты ипотеки по ежемесячному платежу
 *
 * @param {float} sum - сумма кредита
 * @param {float} plat - ежемясячный платеж
 * @param {float} rate - годовая ставка в процентах
 * @return {integer} или Nan
 */
function getPeriod(sum, plat, rate) {
  var mm,
    i,
    result;

  // ставка в месяц
  i = (rate / 12) / 100;

  mm = plat / sum;
  result = getBaseLog(1 + i, -mm / (i - mm));

  // округлим до целых
  return Math.ceil(+result);
};
/**
 * Убирает все пробелы из строки
 * @param {Any} str - Строка с пробелами
 * @return  {String}
 */
slice_spaces = (str) => String(str).replace(/\s+/g, '');

/**
 * Возвращает строку с расставленными разрядами
 * в качестве разделителя используется пробел
 * 
 * @param   {any}  str  Число без разделителей, желательно прогнанное через parseInt(). Функция приводит к String в любом случае.
 * 
 * @return  {String} Число с разделителем разряда в виде пробела
 */
getNum_ranks = function (str) {
  if (slice_spaces(str) == '') {
    return '';
  }
  let
    RegEx = /\s/g;
  str = String(str);
  str = str.replace(RegEx, "");
  return (str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
}
/**
 * Возвращает число убрав из него все пробелы
 * 
 * @param {Sting} str Строка с пробелами
 * 
 * @return {Integer} Целое число
 */
getNum = (str) => (isNaN(parseInt(slice_spaces(str))) ? 0 : parseInt(slice_spaces(str)))

/**
 * Убирает из строки пробелы => приводит в int => расставляет разряды
 * 
 * @param {String} num Любая строка
 * 
 * @return  {String} Число с разрядами
 */
getGreatNum = (num) => getNum_ranks(getNum(num));

/**
 * [getPostfixYear description]
 * 
 * @param   {[type]}  age  [age description]
 * 
 * @return  {[type]}
 */
function getPostfixYear(age) {
  if (isNaN(parseInt(age))) {
    return age;
  }
  let postfix, count;
  age = Math.abs(age)
  postfix = 'лет';
  count = parseInt(age) % 100;
  if (!(count >= 5 && count <= 20)) {
    count = count % 10;
    if (count == 1) {
      postfix = 'год';
    } else if (count >= 2 && count <= 4) {
      postfix = 'года';
    }
  }
  return age + " " + postfix;
}