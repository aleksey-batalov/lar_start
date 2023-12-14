<?php

use Illuminate\Support\Str;

function strLimitDotEnd($string, $limit){
    //$string = Str::limit($string ,$limit, '...');
    $text_mini = htmlspecialchars_decode($string, ENT_QUOTES);
    $text_mini = strip_tags($text_mini);
    $text_mini = substr($text_mini, 0, $limit);

    //если есть пробел - значит как минимум два слова
    if(strpos($text_mini, ' ') !== false){
        $text_mini = substr($text_mini, 0, strrpos($text_mini, ' '));
        $text_mini = rtrim($text_mini, "!,.-") . ' ...';
    }

    return $text_mini;
}

//Содержит ли строка подстроку в ucfirst или lower
function containsInTheLine($string, $search) {
    return Str::contains($string, [Str::ucfirst($search), Str::lower($search)]);
}

//Формирование Описания для результата поиска
function strLimitForSearch($string, $search, $limit = null){

    $result = '';

    if($limit){
        if(Str::contains($string, Str::ucfirst($search))){
            $result = substr($string, strpos($string, Str::ucfirst($search)));
        }elseif(Str::contains($string, Str::lower($search))){
            $result = substr($string, strpos($string, Str::lower($search)));
        }
        $result = strLimitDotEnd($result, $limit);
        $result = substr_replace($result,'<strong>'.substr($result,0,strlen($search)).'</strong>', 0, strlen($search));
    }else{
        $result = $string;
        if(Str::contains($string, Str::ucfirst($search))){
            $result = Str::replaceFirst(Str::ucfirst($search), '<strong>'.Str::ucfirst($search).'</strong>',$result);
        }elseif(Str::contains($string, Str::lower($search))){
            $result = Str::replaceFirst(Str::lower($search), '<strong>'.Str::lower($search).'</strong>',$result);
        }
    }

    return $result;
}

//Удалить домен из строки
function removeDomain($url) {
    $withoutProtocolDelimiter = str_replace('//', '', $url);
    return substr($withoutProtocolDelimiter, strpos($withoutProtocolDelimiter, '/') + 1);
}


