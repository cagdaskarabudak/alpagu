<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Localization;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\User;

class LocalizationController extends Controller
{
    public function get_all(){
        $localizations = Localization::all();

        return response()->json($localizations);
    }

    public function set_user_localization(Request $request){
        if(Auth::check()){
            DB::beginTransaction();
            try{
                $user = User::where('id', '=', Auth::user()->id)->first();
                $user->default_localization_code = $request->localization_code;
                $user->save();
                DB::commit();
                return response()->json([
                    'status' => true,
                    'request' => $request->localization_code,
                ]);

            }catch(\Exception $e){
                DB::rollBack();
                return response()->json([
                    'status' => false,
                    'message' => $e->getMessage(),
                    'request' => $request->localization_code,
                ]);
            }
        }
        else{
            session()->put('default_localization_code', $request->localization_code);
            return response()->json([
                'status' => true,
            ]);
        }
    }

    public function get_default_localization(){
        if(Auth::check()){
            $user = Auth::user();

            return response()->json($user->default_localization);
        }
        else{
            if(session()->has('default_localization_code')){
                $localization = Localization::where('code', '=', session()->get('default_localization_code'))->first();

                return response()->json($localization);
            }
            else{
                $localization = Localization::where('is_default', '=', 1)->first();

                session()->put('default_localization_code', $localization->code);

                return response()->json($localization);
            }
            
        }
    }
}
