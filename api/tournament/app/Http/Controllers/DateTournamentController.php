<?php

namespace App\Http\Controllers;

use App\DateTournament;
use Illuminate\Http\Request;

class DateTournamentController extends Controller
{

    public function showAllDateTournaments()
    {
        return response()->json(date_tournament::all());
    }

    public function showOneDateTournament($id)
    {
        return response()->json(Date_tournament::find($id));
    }

    public function create(Request $request)
    {
        $date_tournament = Date_tournament::create($request->all());

        return response()->json($date_tournament, 201);
    }

    public function update($id, Request $request)
    {
        $date_tournament = Date_tournament::findOrFail($id);
        $date_tournament->update($request->all());

        return response()->json($date_tournament, 200);
    }

    public function delete($id)
    {
        Date_tournament::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}