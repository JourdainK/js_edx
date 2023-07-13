<?php

?>
<!doctype html>
<html lang="eng">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://d3js.org/d3.v3.min.js"></script>
    <script src="https://mauriciopoppe.github.io/function-plot/js/function-plot.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.22/paper.js"></script>
    <link rel="stylesheet" type="text/css" href="./lib/css/test01.css"/>
    <title>Edx Javascript introduction</title>
</head>
<body class="text-center text-wrap align-middle">
<header>

</header>
<nav>
    <?php
    if(file_exists('./lib/php/menu.php')){
        include('./lib/php/menu.php');
    }
    ?>
</nav>

<main>
    <br><br>

    <?php
    if(!isset($_SESSION['page'])){
        $_SESSION['page']="welcome.php";
    }
    if(isset($_GET['page'])){
        $_SESSION['page'] = $_GET['page'];
    }
    $path='./pages/'.$_SESSION['page'];
    if(file_exists($path)){
        include ($path);
    }else{
        include ('./pages/page404.php');
    }
    ?>
</main>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>

</body>
</html>