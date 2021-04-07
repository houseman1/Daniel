<?php

     //create session
     //A session is a way to store information (in variables) to be used across multiple pages.
     //Unlike a cookie, the information is not stored on the users computer. 
<<<<<<< HEAD
    session_start();
=======
     session_start();
>>>>>>> 004f6992d89941abad410db83709dce0b32a9d52

    //connect to database
    $mysqli = new mysqli('localhost', 'root', '', 'crud') or die(mysqli_error($mysqli));

    //set name and location variables to empty strings to avoid error before Edit is clicked
    $name = '';
    $location = '';

    $update = false;

    if (isset($_POST['save'])){//check if save button has been clicked
        //store name and location in variables
        $name = $_POST['name'];
        $location = $_POST['location'];
        //connect to database and insert records, or die in case of syntax error
        //INSERT INTO table (col1, col2) VALUES ('val1', 'val2');
        $mysqli->query("INSERT INTO data (name, location) VALUES('$name', '$location')") or die($mysqli->error);
        //set message for Save button
        $_SESSION['message'] = "Record has been saved!";
        $_SESSION['msg_type'] = "success";
        //redirect user to index.php (the "Location:" header. Not only does it send this header back to the browser, but it also returns a REDIRECT (302) status code to the browser unless the 201 or a 3xx status code has already been set.)
        header("location: index.php");
    }
        
    //if the Delete button has been clicked, delete the record from the 'data' database using passed id from the $_GET['delete'] variable value
    if (isset($_GET['delete'])) {
        //store id in $id variable
        $id = $_GET['delete'];
<<<<<<< HEAD
        //query to delete record from 'data' table, or die in case of error
=======
        //query to delete record from 'data' database, or die in case of error
>>>>>>> 004f6992d89941abad410db83709dce0b32a9d52
        $mysqli->query("DELETE FROM data WHERE id=$id") or die($mysqli->error());
        //set message for Delete button
        $_SESSION['message'] = "Record has been deleted!";
        $_SESSION['msg_type'] = "danger";
         //redirect user to index.php (the "Location:" header. Not only does it send this header back to the browser, but it also returns a REDIRECT (302) status code to the browser unless the 201 or a 3xx status code has already been set.)
<<<<<<< HEAD
        header("location: index.php");
=======
         header("location: index.php");
>>>>>>> 004f6992d89941abad410db83709dce0b32a9d52
    }

    //If the Edit button has been clicked, select the existing record from the database, set $name and $location variables and display them in the Form input fields.
    if (isset($_GET['edit'])) {
        //store id in $id variable
        $id = $_GET['edit'];
<<<<<<< HEAD
        //query to edit record from 'data' table, or die in case of error
        $result = $mysqli->query("SELECT * FROM data WHERE id=$id") or die($mysqli->error());
        var_dump($result);
=======
        //query to edit record from 'data' database, or die in case of error
        $result = $mysqli->query("SELECT * FROM data WHERE id=$id") or die($mysqli->error());
>>>>>>> 004f6992d89941abad410db83709dce0b32a9d52
        //verify that the record exists in the database
        if (count($result)==1) {
            //set variables using fetch_array to fetch the record from the database
            $row = $result->fetch_array();
            $name = $row['name'];
            $location = $row['location'];
        }
    }