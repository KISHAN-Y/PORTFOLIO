<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'kishanyadav2093@gmail.com';
        $mail->Password = 'eorz rlty jheg nark'; // Use App Password if required
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;


        $mail->setFrom($email, $name);
        $mail->addAddress('kishanyadav2093@gmail.com'); // replace with your email address

        $mail->isHTML(false);
        $mail->Subject = "New Form Submission: $subject";
        $mail->Body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage:\n$message";

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
