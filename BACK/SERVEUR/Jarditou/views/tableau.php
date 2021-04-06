<!DOCTYPE html>
    <html lang="fr">
    <head>
        <!-- Required meta tags -->
        <!-- Specify character encoding -->
        <meta charset="utf-8">
        <!-- Responsive viewport meta tag -->
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        
        <title>Tableau</title>
    </head>    
    <body class="container">   
        <!-- header -->
        <header class="d-none d-sm-block">
            <div class="row">    
                <img src="src/img/jarditou_logo.jpg" class="image-responsive col-3" alt="logo" title="logo">
                <div class="col-5"></div>
                <h3 class="col-3">Tout le jardin</h3>
            </div>
        </header>
        <!-- navbar -->
        <div class="row">
            <nav class="navbar navbar-expand-lg navbar-light bg-light col-12">
                <a class="navbar-brand" href="../index.php">Jarditou</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                        <a class="nav-link" href="../index.php">Accueil</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="tableau.php">Tableau</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="contact.php">Contact</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Votre promotion" aria-label="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
        <!--promo banner -->
        <div class="row max-width">
            <img src="src/img/promotion.jpg" class="image-fluid w-100" alt="promotion" title="promotion">    
        </div>

        <?php
            
            require "connexion_bdd.php";
            //connect to the database
            $db = connect_db();

            //PAGINATION

            //Determine which page we are on
            if(isset($_GET['page']) && !empty($_GET['page'])){
                $currentPage = (int) strip_tags($_GET['page']);
            }else{
                $currentPage = 1;
            }
    
            //Assign the total number of articles to the variable $sql
            $sql = "SELECT COUNT(*) AS nb_articles FROM produits"; 
            //Prepare the query
            $query = $db->prepare($sql);
            //Execute the query
            $query->execute();
            //Fetch the number of articles and assign it to the variable $result
            $result = $query->fetch();
            //Determine the total number of items in produits
            $nbArticles = (int) $result['nb_articles'];
            //Determine the number of items per page
            $parPage = 8;
            //Assign the total number of pages to the variable $pages
            $pages = ceil($nbArticles / $parPage);
            //Assign the first item on the page to the variable $premier
            $premier = ($currentPage * $parPage) - $parPage;
            //Assign 8 items to the variable $requete
            $requete = 'SELECT * FROM produits  LIMIT :premier ,:parpage';

            //Prepare the query
            $result = $db->prepare($requete);
            $result->bindValue(':premier', $premier, PDO::PARAM_INT);
            $result->bindValue(':parpage', $parPage, PDO::PARAM_INT);

            //Execute the query
            $result->execute();

        ?>

        <!-- table -->
        <div class="table-responsive">
            <table class="table">
                <thead class="thead-secondary">
                    <tr>
                        <th scope="col"><b>Photo</b></th>
                        <th scope="col"><b>ID</b></th>
                        <th scope="col"><b>Catégorie</b></th>
                        <th scope="col"><b>Libellé</b></th>
                        <th scope="col"><b>Prix</b></th>
                        <th scope="col"><b>Couleur</b></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-warning">
                        <th scope="row"><img src="src/img/7.jpg" height="100" alt="bbq 7" class="image-fluid"></th>
                        <td>7</td>
                        <td>Barbecues</td>
                        <td>Aramis</td>
                        <td>110.00€</td>
                        <td>Brun</td>
                    </tr>
                    <tr >
                        <th scope="row"><img src="src/img/8.jpg" height="100" alt="bbq 8" class="image-fluid"></th>
                        <td>8</td>
                        <td>Barbecues</td>
                        <td>Athos</td>
                        <td>249.99€</td>
                        <td>Noir</td>
                    </tr>
                    <tr class="table-warning">
                        <th scope="row"><img src="src/img/11.jpg" height="100" alt="bbq 11" class="image-fluid"></th>
                        <td>11</td>
                        <td>Barbecues</td>
                        <td>Clatronic</td>
                        <td>135.90€</td>
                        <td>Chrome</td>
                    </tr>
                    <tr>
                        <th scope="row"><img src="src/img/12.jpg" height="100" alt="bbq 12" class="image-fluid"></th>
                        <td>12</td>
                        <td>Barbecues</td>
                        <td>Camping</td>
                        <td>88.0€</td>
                        <td>Noir</td>
                    </tr>
                    <tr class="table-warning">
                        <th scope="row"><img src="src/img/13.jpg" height="100" alt="bbq 13" class="image-fluid"></th>
                        <td>13</td>
                        <td>Brouette</td>
                        <td>Green</td>
                        <td>49.00€</td>
                        <td>Verte</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- navbar -->
        <div class="row">
            <nav class="navbar navbar-expand-lg navbar-light bg-dark col-12">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link text-white" href="views/mentions_legale.html">mentions légales</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link text-white" href="views/horaires.html">horaires</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link text-white" href="views/plan_du_site.html">plan du site</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <script src="JS_jarditou.js"></script>
        <!-- bootstrap Javascript -->
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
     </body>
</html>