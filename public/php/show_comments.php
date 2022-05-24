<?php


$db = new PDO('sqlite:orders.db');

$qry = $db->prepare(
    'SELECT * FROM "comment"'
);
$qry->execute();

$res = $qry->fetchAll(PDO::FETCH_ASSOC);



foreach ($res as $row) {
    echo '<p>';
    echo $row['id'], ' ';
    echo $row['name'], ' ';
    echo $row['comments'], ' ';
    echo $row['phone'], ' ';
    echo '</p>';
    echo "\r\n";
}
