<?php
require_once('config.php');
if (isset($_SESSION['auth']) && $_SESSION['admin'] == 1){
  header('Location: big_Admin.php');
}else{
  $login = $_POST['name'];
  $pass = $_POST['pass'];
  $result = $link->query("SELECT * FROM `users` WHERE `login_users` = '$login' AND `pass_users` = '$pass'");
  if ($result->num_rows > 0){
    $_SESSION['auth'] = 1;
    $_SESSION['admin'] = $result->fetch_assoc()['admin_rights'];
    header('Location: big_Admin.php');
  }else{
    echo "Неверный логин или пароль!";
  }

}