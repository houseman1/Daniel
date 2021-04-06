<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>PHP CRUD</title>
</head>
<body>
    
    <!--Create the MySQL database "crud" and the table "data" with id, name and location fields


    Create process.php, add it to Form action and include it from index.php-->
    <?php require_once 'process.php'; ?>

    <?php //check if $_SESSION message has been set
        if(isset($_SESSION['message'])): ?>
    <!--display Save and Delete messages with $_SESSION at the top of the page using Bootstrap 4 classes depending on whether msg_type = success or danger in process.php.-->
    <div class="alert alert-<?=$_SESSION['msg_type']?>">

            <?php
                echo $_SESSION['message'];
                unset($_SESSION['message']);//The unset() function unsets a variable.  No value is returned.
            ?>
    </div>
    <?php endif ?>

    

    <div class="container">
    <?php //connect to database or die in case of error
        $mysqli = new mysqli('localhost', 'root', '', 'crud') or die(mysqli_error($mysqli));
        //run query to select all records from 'data' database and store in variable $result
        $result = $mysqli->query("SELECT * FROM data");
        ?>
        <!--table for database entries-->
        <div class="row justify-content-center">
            <table class="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Location</th>
                            <th colspan="2">Action</th>
                        </tr>
                    </thead>

        <?php //pull records from 'data' database and store in $row then print to screen
                while ($row = $result->fetch_assoc()) : ?>

                        <tr>
                            <td><?php echo $row['name']; ?></td>
                            <td><?php echo $row['location']; ?></td>
                            <td> 
                                <!--add Edit link to index.php (because that is where the form is located and where the record will be edited)
                                Pass the variable as 'edit' and print out the row id in the edit variable-->
                                <a href="index.php?edit=<?php echo $row['id']; ?>"
                                    class="btn btn-info">Edit</a>
                                <!--add Delete link to process.php
                                Pass the variable as 'delete' and print out the row id in the delete variable-->
                                <a href="process.php?delete=<?php echo $row['id']; ?>"
                                    class="btn btn-danger">Delete</a>
                            </td>
                        </tr>
                <?php endwhile; ?>
                </table>
            </div>
        <?php
        //print array with <pre></pre> HTML tags for better readability
        //pre_r($result);

        //fetch record
        //pre_r($result->fetch_assoc());

        function pre_r($array) {
            echo '<pre>';
            print_r($array);
            echo '</pre>';
        }
        ?>

        

    <!--create POST form with Name and Location input fields and save button
    Add divs and Bootstrap classes to the form, centre the form-->
    <div class="row justify-content-center">
        <form action = "process.php" method="POST">
            <div class="form-group">
            <label>Name</label>
            <input type="text" name="name" class="form-control" placeholder="Enter your name"
                    value="<?php echo $name; ?>"><!--display name variable in input field when Edit is clicked-->
            </div> 
            <div class="form-group"> 
            <label>Location</label>
            <input type="type2" name="location" class="form-control" placeholder="Enter your location"
                    value="<?php echo $location; ?>"><!--display location variable in input field when Edit is clicked-->
            </div>
            <div class="form-group"> 
            <button type="submit" class="btn btn-primary" name="save">Save</button>
            </div>
        </form>
    </div>
        </div>
        

    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
</body>
</html>