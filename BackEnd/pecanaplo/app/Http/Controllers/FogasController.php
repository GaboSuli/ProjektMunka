<?php

namespace App\Http\Controllers;

use App\Models\fogas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FogasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $select = fogas::all();
        return response()->json($select);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'fogoNeve' => 'required|string',
            'halFaj' => 'required|string',
            'fogasHossz' => 'required|numeric',
            'fogasSuly' => 'required|numeric',
            'helyszin' => 'required|string',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
        $newRec = new fogas();
        $newRec->fogoNeve = $request->fogoNeve;
        $newRec->halFaj = $request->halFaj;
        $newRec->fogasHossz = $request->fogasHossz;
        $newRec->fogasSuly = $request->fogasSuly;
        $newRec->helyszin = $request->helyszin;
        $newRec->save();
        return response()->json(['message' => 'Mentve'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function showId(string $id)
    {
        $select = fogas::where('id',$id)->get();
        if (empty($select)) {
            return response()->json(['message' => 'Nincs találat'], 404);
        }
        else
        {
            return response()->json($select);
        }
    }
    public function showMinSize(float $fogasHossz)
    {
        $select = fogas::where('fogasHossz', '>=', $fogasHossz)->get();
        if (empty($select)) {
            return response()->json(['message' => 'Nincs találat'], 404);
        }
        else
        {
            return response()->json($select);
        }
    }
    public function showMinWeight(float $fogasSuly)
    {
        $select = fogas::where('fogasSuly', '>=', $fogasSuly)->get();
        if (empty($select)) {
            return response()->json(['message' => 'Nincs találat'], 404);
        }
        else
        {
            return response()->json($select);
        }
    }
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(fogas $fogas)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, fogas $fogas)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(fogas $fogas)
    {
        //
    }
}
