<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Setting;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\PreferencesRequest;
use App\Http\Requests\SiteSettingsRequest;
use App\Http\Requests\SocialRequest;

class SettingsController extends Controller
{

    public function get_settings(){
        $settings = Setting::first();

        return response()->json($settings);
    }

    public function update_site_settings(SiteSettingsRequest $request){
        try{
            DB::beginTransaction();

            $settings = Setting::first();

            $data = $request->validated();
            if ($request->hasFile('logo_src')) {
                $data['logo_src'] = basename($request->file('logo_src')->store('images', 'public'));
                unset($data['is_destroy_photo']);
            }
            elseif($request->logo_src == null){
                if($request->is_destroy_photo == '1'){
                    $data['logo_src'] = null;
                    unset($data['is_destroy_photo']);
                }
                elseif($request->is_destroy_photo == '0'){
                    $data['logo_src'] = $settings->logo_src;
                    unset($data['is_destroy_photo']);
                }
            }

            $settings->fill($data);
            $settings->save();

            DB::commit();

            return Redirect::route('dashboard.settings.view');
        }catch(\Exception $e){
            
            DB::rollBack();
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function update_preferences(PreferencesRequest $request){
        try{
            DB::beginTransaction();

            $settings = Setting::first();

            $settings->fill($request->validated());
            $settings->save();

            DB::commit();

            return Redirect::route('dashboard.preferences.view');

        }catch(\Exception $e){
            
            DB::rollBack();
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function update_social(SocialRequest $request){
        try{
            DB::beginTransaction();

            $settings = Setting::first();

            $data = $request->validated();
            if ($request->hasFile('photo')) {
                $data['photo'] = basename($request->file('photo')->store('images', 'public'));
                unset($data['is_destroy_photo']);
            }
            elseif($request->photo == null){
                if($request->is_destroy_photo == '1'){
                    $data['photo'] = null;
                    unset($data['is_destroy_photo']);
                }
                elseif($request->is_destroy_photo == '0'){
                    $data['photo'] = $settings->photo;
                    unset($data['is_destroy_photo']);
                }
            }

            $settings->fill($data);
            $settings->save();

            DB::commit();

            return Redirect::route('dashboard.social.view');
        }catch(\Exception $e){
            
            DB::rollBack();
            return response()->json([
                'message' => $e->getMessage(),
            ]);
        }
    }
}
