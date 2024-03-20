<?php
if(isset($_SERVER["REQUEST_METHOD"]) && $_SERVER["REQUEST_METHOD"] == "POST"){ 
    //TO GET THE CONTACT DATA
    $name = trim($_POST["name"]);  
	$email = trim($_POST["email"]);  
	$message = nl2br(htmlspecialchars($_POST["message"])); 

    if (empty($name) || empty($email) || empty($message)) {
        //HANDLE EMPTY PART
        echo '<script>alert("Please fill in all required fields."); window.location.href="index.html";</script>';
        exit();
    }

    //VALIDATING EMAIL ADDRESS
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        //HANDLE INVALID EMAIL
        echo '<script>alert("Invalid email address."); window.location.href="index.html";</script>';
        exit();
    }

    //EMAIL CONFIGURATION
    $to= "sagarika0525@gmail.com";
    $subject = "Contact Form Message from: $name";
    $body = "Name: $name\nEmail: $email\nSubject: $subject\n\n$message";
    $headers = "From: " . $email;

    //SEND EMAIL
    if(mail($to, $subject, $body, $headers)){
        //EMAIL SUCCESS
        echo '<script>alert("Your message has been sent successfully!"); window.location.href="index.html";</script>';
    }else{
        //EMAIL ERROR
        echo '<script>alert("Oops! Something went wrong. Please try again later."); window.location.href="index.html";</script>';
        //LOG ERROR
        error_log("Error sending message to: $email", 0);
    }
}else{
    //HANDLE INVALID SUBMISSION
    echo '<script>alert("Invalid form submission method."); window.location.href="index.html";</script>';
}
