<?php

namespace App\Http\Controllers;

use App\Team;
use Illuminate\Http\Request;

class TeamController extends Controller
{

    public function showAllTeams()
    {
        return response()->json(team::all());
    }

    public function showOneTeam($id)
    {
        return response()->json(Team::find($id));
    }

    public function create(Request $request)
    {
        $team = Team::create($request->all());

        return response()->json($team, 201);
    }

    public function update($id, Request $request)
    {
        $team = Team::findOrFail($id);
        $team->update($request->all());

        return response()->json($team, 200);
    }

    public function delete($id)
    {
        Team::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}