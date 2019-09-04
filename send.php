<?php
// Проверяем что сюда не попали специально

if (empty($_POST))
	{
		exit();
	}
$c=true;
$mypismo = "Поступила заявка<br>";
	foreach ( $_POST as $key => $value ) {
			$mypismo .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
	}
$mypismo = "<table style='width: 100%;'>$mypismo</table>";

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL;


// Отправляем
$theme = 'Новая заявка: '.$_POST['Тип_заявки'];
//mail('af.work@mail.ru', $theme , $mypismo, $headers);
echo mail('aschaulov.mihail@yandex.ru', $theme, $mypismo, $headers);
mail('partner@agent-ahml.ru', $theme, $mypismo, $headers);