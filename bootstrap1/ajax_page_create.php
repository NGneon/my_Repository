<?php
include('Admin.php');
require_once('config.php');
$admin = new Admin();
if ($admin->CreatePage($_POST['page_name'], $_POST['page_desc'], $link)){
  echo 'Страница с именем ' . $_POST['page_name'] . ' была успешно создана.';
}else{
  echo 'Не удалось создать страницу.';
}

