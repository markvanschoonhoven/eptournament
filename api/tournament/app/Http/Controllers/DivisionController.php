<?php

namespace App\Http\Controllers;

use App\Division;
use Illuminate\Http\Request;

class DivisionController extends Controller
{

    public function showAllDivisions()
    {
        return response()->json(division::all());
    }

    public function showOneDivision($id)
    {
        return response()->json(Division::find($id));
    }

    public function create(Request $request)
    {
        $division = Division::create($request->all());

        return response()->json($division, 201);
    }

    public function update($id, Request $request)
    {
        $division = Division::findOrFail($id);
        $division->update($request->all());

        return response()->json($division, 200);
    }

    public function delete($id)
    {
        Division::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}