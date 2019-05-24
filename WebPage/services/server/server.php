<?php
    if(isset($_POST['submit'])) {
      $user = $_POST['name'];
      $pass = $_POST['password'];
      if(empty($user) || empty($pass)) {
         setcookie("Last_submit",date("d.m.Y s-i-H"),time() + 86400 * 15,"/");
         header("Location: ../services.html?login=empty");
         exit();
      } else {
         if($user == "Admin" && $pass == "password") {
            setcookie("Last_submit",date("d.m.Y s-i-H"),time() + 86400 * 15,"/");
            header("Location: system/manager.html?login=success");
         } else {
            setcookie("Last_submit",date("d.m.Y s-i-H"),time() + 86400 * 15,"/");
            header("Location: ../services.html?login=wrong");
         }
      }
    } else {
      header("Location: ../services.html");
    }
?>