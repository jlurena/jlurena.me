<?php
  function getFiles($dir)
  {
      $files= scandir($dir);
      unset($files[0],$files[1]);
      $filePath = array();
      $arrFolder = explode("/", $dir);
      $folderPath = "";
      for ($i = count($arrFolder) - 3; $i < count($arrFolder); $i++) {
          $folderPath .= $arrFolder[$i] . "/";
      }

      foreach ($files as $file) {
          array_push($filePath, $folderPath . $file);
      }

      echo json_encode(array_combine($files, $filePath));
  }

  function getDirectories($path)
  {
      $files= scandir($path);
      unset($files[0],$files[1]);
      $filePath = array();
      foreach ($files as $file) {
          array_push($filePath, realpath($path) . "/" . $file);
      }

      echo json_encode(array_combine($files, $filePath));
  }

  $curDir = getcwd();
  $action = $_GET['action'];
  $path = $_GET['path'];
  switch ($action) {
      case "getFiles": getFiles($path); break;
      case "getDirectories": getDirectories(dirname($curDir) . $path); break;
  }
?>
