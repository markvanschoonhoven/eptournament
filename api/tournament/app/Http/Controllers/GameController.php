<?php

namespace App\Http\Controllers;

use App\Game;
use Illuminate\Http\Request;

class GameController extends Controller
{

    public function showAllGames()
    {
        return response()->json(game::all());
    }

    public function showOneGame($id)
    {
        return response()->json(Game::find($id));
    }

    public function create(Request $request)
    {
        $game = Game::create($request->all());

        return response()->json($game, 201);
    }

    public function update($id, Request $request)
    {
        $game = Game::findOrFail($id);
        $game->update($request->all());

        return response()->json($game, 200);
    }

    public function delete($id)
    {
        Game::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}