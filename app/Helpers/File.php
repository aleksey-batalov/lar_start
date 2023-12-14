<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

function uploadFile(Request $request, $data, $file, $object = [])
{

    foreach (array_keys($file) as $key) {
        $folder = date('Y-m-d');

        if(!empty($object)){
            Storage::delete($object->$key);
            $extension = $request->file($key)->getClientOriginalExtension();
            $file_name = $object->slug.".".$extension;
            $data[$key] = $request->file($key)->storeAs("files/{$folder}",$file_name);
        }else{
            //$file_name = $request->file($key)->getClientOriginalName();
            //$data[$key] = $request->file($key)->storeAs("files/{$folder}",$file_name);
            $data[$key] = $request->file($key)->store("files/{$folder}");
        }

    }
    return $data;

}

function getFile($object, $name)
{
    return asset("uploads/{$object->$name}");
}




