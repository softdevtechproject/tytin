<?php

namespace anyname;

use PDO; ?>

<h1>Your comment</h1>

<h2>Name: <?php echo htmlspecialchars($_POST['name']); ?></h2>
<h2>Comments: <?php echo htmlspecialchars($_POST['comments']) ?></h2>
<h2>Phone: <?php echo htmlspecialchars($_POST['phone']) ?></h2>

<h1>Succefully accepted</h1>

<?php



$db = new PDO('sqlite:orders.db');
$db->exec('CREATE TABLE IF NOT EXISTS "comment" (
	"id"	INTEGER NOT NULL UNIQUE,
	"name"	TEXT NOT NULL,
	"comments"	TEXT NOT NULL,
	"phone"	TEXT NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);');

$qry = $db->prepare(
	'INSERT INTO "comment" (name, comments, phone) VALUES(?, ?, ?);'
);
$qry->execute(array($_POST['name'], $_POST['comments'], $_POST['phone']));







?>