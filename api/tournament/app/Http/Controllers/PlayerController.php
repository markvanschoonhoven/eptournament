<?php

namespace App\Http\Controllers;

use App\Player;
use Illuminate\Http\Request;

class PlayerController extends Controller
{

    public function showAllPlayers()
    {
        return response()->json(player::all());
    }

    public function showOnePlayer($id)
    {
        return response()->json(Player::find($id));
    }

    public function create(Request $request)
    {
        $player = Player::create($request->all());

        return response()->json($player, 201);
    }

    public function update($id, Request $request)
    {
        $player = Player::findOrFail($id);
        $player->update($request->all());

        return response()->json($player, 200);
    }

    public function delete($id)
    {
        Player::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}