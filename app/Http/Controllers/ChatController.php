<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function first_message(Request $request){
        $chatuser = [
            'status' => true,
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message,
        ];

        return response()->json($chatuser);
    }

    public function send_message(Request $request){
        return response()->json([
            'status' => true,
            'message' => $request->message,
        ]);
    }
}
