<?php

namespace anyname;

use PDO; ?>

<h1>Your order</h1>

<h2>Name: <?php echo htmlspecialchars($_POST['name']); ?></h2>
<h2>Order: <?php echo htmlspecialchars($_POST['order']) ?></h2>
<h2>Address: <?php echo htmlspecialchars($_POST['address']); ?></h2>
<h2>Phone: <?php echo htmlspecialchars($_POST['phone']) ?></h2>

<h1>Succefully accepted</h1>

<?php



$db = new PDO('sqlite:orders.db');
$db->exec('CREATE TABLE IF NOT EXISTS "order" (
	"id"	INTEGER NOT NULL UNIQUE,
	"name"	TEXT NOT NULL,
	"order_text"	TEXT NOT NULL,
	"address"	TEXT NOT NULL,
	"phone"	TEXT NOT NULL,
	PRIMARY KEY("id" AUTOINCREMENT)
);');

$qry = $db->prepare(
	'INSERT INTO "order" (name, order_text, address, phone) VALUES(?, ?, ?, ?);'
);
$qry->execute(array($_POST['name'], $_POST['order'], $_POST['address'], $_POST['phone']));







?>