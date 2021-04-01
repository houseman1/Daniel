<?php
    $nom = $_POST["nom"];
    $prenom = $_POST["prenom"];
    $optradio = $_POST["optradio"];
    $ddn = $_POST["ddn"];
    $codeP = $_POST["codeP"];
    $adresse = $_POST["adresse"];
    $email = $_POST["email"];
    $sujet = $_POST["sujet"];
    $question = $_POST["question"];
    $jaccepte = $_POST["jaccepte"];

    $error_counter = 0;

    if(empty($nom)){
        $error_nom = "Veuillez entrer votre nom";
        $error_counter++;
    }
    
    if($error_counter === 0){
        include "../views/successfully_uploaded.php";
    } else {
        include "../views/contact.php";
    }

?>