<?php

class Admin{
  public function CreatePage($pageName, $pageDesc, $link){
    $pageQuery = $pageName . '.php';
    $template = file_get_contents('template.php');
    if (file_exists($pageName . '.php')){
      $pageName_ext = $pageName . random_int(1, 200000);
      file_put_contents($pageName_ext . '.php', $template);
      $link->query("INSERT INTO `pages`(`page_name`,`page_desc`,`filename`) VALUES ('$pageName','$pageDesc','$pageQuery')");
      return true;
    }else{
    file_put_contents($pageName . '.php', $template);
      $link->query("INSERT INTO `pages`(`page_name`,`page_desc`,`filename`) VALUES ('$pageName','$pageDesc','$pageQuery')");
    return true;
    }
  }
  public function GetPage($link){
    $result = $link->query("SELECT * FROM `pages`");
    $result = $result->fetch_all();
    return $result;
  }
}