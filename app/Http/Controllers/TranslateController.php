<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class TranslateController extends Controller
{
    public function translates($locale) 
    {
        $path = resource_path("lang/{$locale}.json");
        if (File::exists($path)) {
            return response()->json(json_decode(File::get($path)));
        }
        return response()->json([], 404);
    }
}
