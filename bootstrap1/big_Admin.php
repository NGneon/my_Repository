<?php
include_once('Admin.php');
include_once('config.php');
$admin = new Admin();
// $admin->CreatePage('Document1','О нас');
$pages = $admin->GetPage($link);
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  <link rel="stylesheet" href="css/styles.css">
  <title>Document</title>
</head>

<body>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand text-center">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <?php
            for ($i = 0 ; $i < count($pages); $i++) {
              $page = $pages[$i];
              echo "<li class='nav-item'>";
              echo "<a class='nav-link' href='$page[3]'>" . $page[1] . '</a>';
              echo "</li>";
            }
          ?>
          <li class="nav-item" >
            <a class="nav-link" href="big_black_login.php">Выйти в главное меню</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <h1>Форма по созданию страницы</h1>
  <form id="create-page-form" method="POST">
    <label for="page-name">Название страницы:</label>
    <input type="text" id="page-name" name="page-name" required>
    <label for="page-content">Описание страницы:</label>
    <textarea id="page-content" name="page-content" required></textarea>
    <button>Создать страницу</button>
  </form>
  <div class="d-flex justify-content-center">
    <h1>Созданные сайты</h1>
  </div>
  <div class="d-flex border mx-auto" style="width: 900px; height: 550px;">
    <div class="border d-flex justify-content-evenly flex-column align-items-center" id="start" style="width: 325px;">
      <div class="bg-danger block" draggable="true" id="block" style="width: 175px; height: 75px;"></div>
      <div class="bg-danger block" draggable="true" id="block" style="width: 175px; height: 75px;"></div>
      <div class="bg-danger block" draggable="true" id="block" style="width: 175px; height: 75px;"></div>
    </div>
    <div class="border bg-secondary" style="width: 250px;"></div>
    <div class="border d-flex justify-content-around flex-column align-items-center" id="target" style="width: 325px;">
    </div>
  </div>
</body>
<script src="index.js"></script>
<script src="js/bootstrap.bundle.js"></script>
<script src="js/script.js"></script>

</html>