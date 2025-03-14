<?php
include_once('Admin.php');
include_once('config.php');
$admin = new Admin();
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
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <?php
          for ($i = 0; $i < count($pages); $i++) {
            $page = $pages[$i];
            echo "<li class='nav-item'>";
            echo "<a class='nav-link' href='$page[3]'>" . $page[1] . '</a>';
            echo "</li>";
          }
          ?>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container d-flex justify-content-center align-items-center" style="width: 100%; height: 80%;">
    <form action="auth_logic.php" method="POST">
      <input type="text" name="name" id="name" placeholder="Enter your name"> <br><br>
      <input type="text" name="pass" id="pass" placeholder="Enter your password"> <br><br>
      <button type="submit" name="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  <footer class="container-fluid fixed-bottom bg-secondary d-flex justify-content-evenly align-items-center">
    <h2 class="text-center">2025 © Admin'ка</h2>
  </footer>
</body>
<script src="js/bootstrap.bundle.js"></script>
<script src="js/script.js"></script>

</html>