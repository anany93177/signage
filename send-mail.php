<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Step 1: Collect form data
    $name    = htmlspecialchars($_POST["name"]);
    $email   = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // Step 2: Setup mail variables
    $to      = " printandsignmaker@gmail.com";  // <-- Change to your email address
    $subject = "New message from $name";
    $body    = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email";

    // Step 3: Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location.href='contact.html';</script>";
    } else {
        echo "<script>alert('Message failed to send. Please try again.'); window.location.href='contact.html';</script>";
    }
} else {
    // If accessed directly (not via POST)
    echo "Invalid request method.";
}
?>
