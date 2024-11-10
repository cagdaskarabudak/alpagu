<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\ProjectComment;
use App\Models\BlogArticleComment;
use Inertia\Inertia;

class CommentController extends Controller
{
    public function store(Request $request){
        $request->validate([
            'name' => ['required', 'string'],
            'email' => ['required', 'string', 'email'],
            'rate' => ['required', 'integer'],
            'type' => ['required', 'string'],
            'data_id' => ['required', 'integer'],
            'reply_comment_id' => ['integer', 'required'],
            'message' => ['required', 'string', 'min:10', 'max:1000'],
            'user_id' => ['required', 'integer'],
        ]);

        try{
            DB::beginTransaction();

            if($request->type == 'project'){
                $comment = new ProjectComment();
                $comment->user_id = $request->user_id != 0 && $request->user_id != null ? $request->user_id : null;
                $comment->name = $request->name;
                $comment->email = $request->email;
                $comment->content = $request->message;
                $comment->project_id = $request->data_id;
                $comment->ip_address = $request->ip();
                $comment->rate = $request->rate != 0 && $request->rate != null ? $request->rate : null;
                $comment->reply_comment_id = $request->reply_comment_id != 0 && $request->reply_comment_id != null ? $request->reply_comment_id : null;
                $comment->save();

                DB::commit();
                return response()->json([
                    'status' => true,
                    'comment' => $comment,
                ]);
            }
            elseif($request->type == 'article'){
                $comment = new BlogArticleComment();
                $comment->user_id = $request->user_id != 0 && $request->user_id != null ? $request->user_id : null;
                $comment->name = $request->name;
                $comment->email = $request->email;
                $comment->content = $request->message;
                $comment->article_id = $request->data_id;
                $comment->ip_address = $request->ip();
                $comment->rate = $request->rate != 0 && $request->rate != null ? $request->rate : null;
                $comment->reply_comment_id = $request->reply_comment_id != 0 && $request->reply_comment_id != null ? $request->reply_comment_id : null;
                $comment->save();

                DB::commit();
                return response()->json([
                    'status' => true,
                    'comment' => $comment,
                ]);
            }


        }catch(\Exception $e){
            DB::rollBack();
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function reply_store(Request $request){
        $request->validate([
            'name' => ['required', 'string'],
            'email' => ['required', 'string', 'email'],
            'rate' => ['required', 'integer'],
            'type' => ['required', 'string'],
            'data_id' => ['required', 'integer'],
            'reply_comment_id' => ['integer', 'required'],
            'message' => ['required', 'string', 'min:10', 'max:1000'],
            'user_id' => ['required', 'integer'],
        ]);

        try{
            DB::beginTransaction();

            if($request->type == 'project'){
                $comment = new ProjectComment();
                $comment->user_id = $request->user_id != 0 && $request->user_id != null ? $request->user_id : null;
                $comment->name = $request->name;
                $comment->email = $request->email;
                $comment->content = $request->message;
                $comment->project_id = $request->data_id;
                $comment->ip_address = $request->ip();
                $comment->rate = $request->rate != 0 && $request->rate != null ? $request->rate : null;
                $comment->reply_comment_id = $request->reply_comment_id != 0 && $request->reply_comment_id != null ? $request->reply_comment_id : null;
                $comment->save();

                DB::commit();
                return response()->json([
                    'status' => true,
                    'comment' => $comment,
                ]);
            }
            elseif($request->type == 'article'){
                $comment = new BlogArticleComment();
                $comment->user_id = $request->user_id != 0 && $request->user_id != null ? $request->user_id : null;
                $comment->name = $request->name;
                $comment->email = $request->email;
                $comment->content = $request->message;
                $comment->article_id = $request->data_id;
                $comment->ip_address = $request->ip();
                $comment->rate = $request->rate != 0 && $request->rate != null ? $request->rate : null;
                $comment->reply_comment_id = $request->reply_comment_id != 0 && $request->reply_comment_id != null ? $request->reply_comment_id : null;
                $comment->save();

                DB::commit();
                return response()->json([
                    'status' => true,
                    'comment' => $comment,
                ]);
            }


        }catch(\Exception $e){
            DB::rollBack();
            return response()->json([
                'status' => false,
                'message' => $e->getMessage(),
            ]);
        }
    }
}
