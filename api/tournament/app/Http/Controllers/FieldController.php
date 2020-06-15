<?php

namespace App\Http\Controllers;

use App\Field;
use Illuminate\Http\Request;

class FieldController extends Controller
{

    public function showAllFields()
    {
        return response()->json(field::all());
    }

    public function showOneField($id)
    {
        return response()->json(Field::find($id));
    }

    public function create(Request $request)
    {
        $field = Field::create($request->all());

        return response()->json($field, 201);
    }

    public function update($id, Request $request)
    {
        $field = Field::findOrFail($id);
        $field->update($request->all());

        return response()->json($field, 200);
    }

    public function delete($id)
    {
        Field::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}