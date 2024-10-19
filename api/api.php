<?php

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['error' => 'Only POST requests are allowed']);
    die();
}
if($_GET['device'] == null) {
    echo json_encode(['error' => 'device is required']);
    die();
}

$json = file_get_contents('php://input');
file_put_contents($_GET['device'] . '.json', $json);

$date = date('Y/m/d H:i:s');
$data = $date . ' - ' . $_SERVER['REMOTE_ADDR'] . ' => '.json_encode($json, JSON_PRETTY_PRINT). PHP_EOL;
$fp = fopen('logs_' . $_GET['device'] . '.json', 'a');
fwrite($fp, $data);

// echo 'GET <br />';
// echo '<pre>';
// print_r($_GET);
// echo '</pre>';
// echo 'POST <br />';
// echo '<pre>';
// print_r($_POST);
// echo '</pre>';
// echo 'JSON <br />';
// echo '<pre>';
// print_r($json);
// echo '</pre>';
header('Content-Type: application/json; charset=utf-8');




