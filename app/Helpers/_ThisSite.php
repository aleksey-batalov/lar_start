<?php

use Illuminate\Support\Str;

function FormattedPhone($string)
{
    return '+7 ('.substr($string, 0, 3).') '.substr($string, 3, 3).' '.substr($string, 6, 2).' '.substr($string, 8, 2);
}

function FormattedWorkTime($string)
{
    return '<p><span class="bold">'.Str::before($string,":").'</span>: '.Str::after($string,":").'</p>';
}
