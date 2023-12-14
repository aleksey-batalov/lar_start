<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

function uploadImage(Request $request, $data, $images, $object = [])
{
    foreach (array_keys($images) as $key) {
        $folder = date('Y-m-d');
        if(!empty($object)){
            Storage::delete($object->$key);
            //Создан диск my_files в config/filesystems.php
            $object[$key] = $request->file($key)->store("images/{$folder}", ['disk' => 'my_files']);
        }
        //Создан диск my_files в config/filesystems.php
        $data[$key] = $request->file($key)->store("images/{$folder}", ['disk' => 'my_files']);
    }
    return $data;

}

function getImage($object, $name)
{
    if(!$object->$name){
        return asset('uploads/images/no-image.jpg');
    }
    return asset("uploads/{$object->$name}");
}




