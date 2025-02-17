<?php
session_start();

// Vérifier si le formulaire a été soumis
if($_SERVER['REQUEST_METHOD'] == 'POST'){
  // Récupérer les données du formulaire
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Vérifier les identifiants de connexion
  if($username == 'visiteur' && $password == '######'){
    // Enregistrer les informations de connexion dans la session
    $_SESSION['username'] = $username;
    $_SESSION['authenticated'] = true;

    // Enregistrer un cookie de session valide pendant 30 minutes (1800 secondes)
    setcookie('mycookie', session_id(), time() + 1800, '/');

    // Rediriger l'utilisateur vers la page d'accueil
    header('Location: http://website.test/index.php');
    exit;
  }
  else{
    echo "Vous n'avez pas la permission de consulter ce site";
  }
}

?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Connexion</title>
  <link rel="stylesheet" href="login1.css">
</head>
<body>
  <div class="login-container">
    <h1>Connexion</h1>
    <form action="" method="post">
      <label for="username">Nom d'utilisateur</label>
      <input type="text" name="username" required>
      <label for="password">Mot de passe</label>
      <input type="password" name="password" required>
      <input type="submit" value="Se connecter" class="login-btn">
    </form>
  </div>
</body>
</html>


