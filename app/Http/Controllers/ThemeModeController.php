<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ThemeModeController extends Controller
{
    public function get_default_theme_mode(){
        if(Auth::check()){
            $user = User::where('id', '=', Auth::user()->id)->first();

            return response()->json($user->default_theme_mode != '' ? $user->default_theme_mode : env('DEFAULT_THEME_MODE'));
        }
        else{
            return response()->json(session()->has('default_theme_mode') ? session()->get('default_theme_mode') : env('DEFAULT_THEME_MODE'));
        }
    }

    public function set_default_theme_mode(Request $request){
        if(Auth::check()){
            try{
                DB::beginTransaction();

                $user = User::where('id', '=', Auth::user()->id)->first();

                $user->default_theme_mode = $request->theme_mode;

                $user->save();

                DB::commit();

                return response()->json([
                    'status' => true
                ]);

            }catch(\Exception $e){

                DB::rollBack();

                return response()->json([
                    'status' => false,
                    'message' => $e->getMessage(),
                ]);

            }
        }
        else{
            session()->put('default_theme_mode', $request->theme_mode);

            return response()->json([
                'status' => true
            ]);
        }
    }
}
