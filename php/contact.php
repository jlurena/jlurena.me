<?php

/**
* Description: Verifies input of form
* returns true if valid, false other wise
**/
function isInputValid($name, $message, $email) {

    // Validate name msg and recaptcha response
    if ( !$name)
        "Please enter your name.<br />";

    if (!$message)
        echo "Please enter a message.<br />";

    if ( !$email || !filter_var($email, FILTER_VALIDATE_EMAIL) )
        echo "Please enter a valid email<br />";

}


$name; $message; $email;

if (isset($_POST['name']))
    $name = $_POST['name'];

if (isset($_POST['email']))
    $email = $_POST['email'];

if (isset($_POST['msg']))
    $message = $_POST['msg'];

isInputValid($name, $message, $email); // Validating input

// Mailto requirements
$from = "jlurhrey@jlurena.me"; // Email from has to be servers
$to = "eljean@live.com"; // To personal email
$subject = "Message from JLUrena Contact Form";
$body = "From: $name \nE-Mail: $email \nMessage: \n$message";

if ( mail ($to, $subject, $body, $from))
    echo "OK";
else
    echo '<div class="notification_error"></div>';



?>
