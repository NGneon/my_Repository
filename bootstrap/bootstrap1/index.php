<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  <link rel="stylesheet" href="css/styles.css">
  <title>bootstrap</title>
</head>

<body>
  <!-- <div class="container mx-auto">
    <nav class="d-flex justify-content-between">
      <div class="nav-left text-white fs-2 text-center">Логотип</div>
      <div class="nav-right d-flex justify-content-around align-items-center ">
        <select name="text" id="text" class="sel1 rounded-pill text-center bg-black text-white">
          <option value="text">Text</option>
        </select>
        <select name="menu" id="menu" class="sel2 rounded-pill text-center">
          <option value="menu">Menu</option>
        </select>
      </div>
    </nav>
    <div class="main_text d-flex align-items-center justify-content-center m-5 col-11">КРУТОЙ ПЕРЕЦ</div>
    <div class="row flex-column flex-xl-row">
      <div class="col-12 col-xl-4 order-xl-2 d-flex justify-content-center align-items-center mb-4">
        <div class="main-center">
          <img
            src="https://avatars.mds.yandex.net/i?id=85fd6f9294ab8a09c33eb3b0d458e1b472c0a077-12597979-images-thumbs&n=13"
            alt="" class="border rounded-circle">
        </div>
      </div>
      <div class="col-12 col-xl-4 order-xl-1 mb-4 col-md-12 row">
        <div
          class="row main-left text-white d-flex flex-xl-column flex-lg-row align-items-start justify-content-evenly col-md-12">
          <div class="bio col-xl-12 col-lg-4 col-md-12">
            <h6>Биография</h6>
            <p class="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis non ullam
              id corporis fuga!</p>
          </div>
          <div class="skils col-xl-12 col-lg-4 col-md-6">
            <h6>SKILLS</h6>
            <p class="text-secondary">Веб разработчик • UI & UX Дизайнер <br> • Маркетолог • SEO оптимизатор <br> •
              Руководитель</p>
          </div>
          <div class="contacts col-xl-12 col-lg-4 col-md-6">
            <h6>Контакты</h6>
            <img src="pngaaa.com-798731.png" alt="">
            <img src="pngwing.com (9).png" alt="">
            <img src="8e9de4d934e9bb4fc10943a55d7f8371.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="col-12 col-xl-4 order-xl-3 mb-4">
        <div class="main-right text-white d-flex justify-content-between flex-xl-column flex-lg-row">
          <div class="projects d-flex flex-column align-items-end align-lg-items-center">
            <h6>Проекты</h6>
            <h1>432</h1>
          </div>
          <div class="stazh d-flex flex-column align-items-end align-lg-items-center">
            <h6>Общий стаж</h6>
            <h1>13+</h1>
          </div>
          <div class="clients d-flex flex-column align-items-end align-lg-items-center">
            <h6>Количество клиентов</h6>
            <h1>900</h1>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <!-- <nav class="navbar navbar-expand-lg bg-body-tertiary mx-auto">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Новости <i class="bi bi-book-half"></i></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Домой <i class="bi bi-house"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">О нас <i class="bi bi-people-fill"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Корзина <i class="bi bi-cart"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </nav> -->
  <div class="carousel-container">
    <nav class="overlay-nav d-flex justify-content-around">
      <div>
        <a href="">News</a>
      </div>
      <div class="">
        <a href="">About</a>
        <a href="">Services</a>
      </div>
    </nav>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2500">
          <img src="https://avatars.mds.yandex.net/i?id=c322700e23f74bc3a0b7e0014376527b_l-5354907-images-thumbs&n=13"
            class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
        </div>
        <div class="carousel-item" data-bs-interval="2500">
          <img
            src="https://avatars.mds.yandex.net/i?id=85fd6f9294ab8a09c33eb3b0d458e1b472c0a077-12597979-images-thumbs&n=13"
            class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
        </div>
        <div class="carousel-item" data-bs-interval="2500">
          <img
            src="https://avatars.mds.yandex.net/i?id=df7ba99e1adb92eebf29ce71e906a8a385de531a-11015863-images-thumbs&n=13"
            class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <div class="wrapper">
  <h1>Главная</h1>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="LibraryPage.php" id="libraryLink">Library</a></li>
      <li class="breadcrumb-item"><a href="CartPage.php">Cart</a></li>
    </ol>
  </nav>
</div>
<div id="contentContainer"></div>
<script src="js/bootstrap.bundle.js"></script>
<script src="js/script.js"></script>
</body>

</html>