<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api'], function () use ($router) {
  // T O U R N A M E N T S
  $router->get('tournaments',  ['uses' => 'TournamentController@showAllTournaments']);

  $router->get('tournament/{id}', ['uses' => 'TournamentController@showOneTournament']);

  $router->post('tournament', ['uses' => 'TournamentController@create']);

  $router->delete('tournament/{id}', ['uses' => 'TournamentController@delete']);

  $router->put('tournament/{id}', ['uses' => 'TournamentController@update']);

  // T E A M S
  $router->get('teams',  ['uses' => 'TeamController@showAllTeams']);

  $router->get('team/{id}', ['uses' => 'TeamController@showOneTeam']);

  $router->post('team', ['uses' => 'TeamController@create']);

  $router->delete('team/{id}', ['uses' => 'TeamController@delete']);

  $router->put('team/{id}', ['uses' => 'TeamController@update']);

  // D I V I S I O N
  $router->get('divisions',  ['uses' => 'DivisionController@showAllDivisions']);

  $router->get('division/{id}', ['uses' => 'DivisionController@showOneTeam']);

  $router->post('division', ['uses' => 'DivisionController@create']);

  $router->delete('division/{id}', ['uses' => 'DivisionController@delete']);

  $router->put('division/{id}', ['uses' => 'DivisionController@update']);
  
  // F I E L D
  $router->get('fields',  ['uses' => 'FieldController@showAllFields']);

  $router->get('field/{id}', ['uses' => 'FieldController@showOneField']);
  
  $router->post('field', ['uses' => 'FieldController@create']);
  
  $router->delete('field/{id}', ['uses' => 'FieldController@delete']);
  
  $router->put('field/{id}', ['uses' => 'FieldController@update']);
  
  // R E F E R E E 
  $router->get('referees',  ['uses' => 'RefereeController@showAllReferees']);

  $router->get('referee/{id}', ['uses' => 'RefereeController@showOneReferee']);
  
  $router->post('referee', ['uses' => 'RefereeController@create']);
  
  $router->delete('referee/{id}', ['uses' => 'RefereeController@delete']);
  
  $router->put('referee/{id}', ['uses' => 'RefereeController@update']);  

  // P L A Y E R 
  $router->get('players',  ['uses' => 'PlayerController@showAllPlayers']);

  $router->get('player/{id}', ['uses' => 'PlayerController@showOnePlayer']);
  
  $router->post('player', ['uses' => 'PlayerController@create']);
  
  $router->delete('player/{id}', ['uses' => 'PlayerController@delete']);
  
  $router->put('player/{id}', ['uses' => 'PlayerController@update']);  

  // G A M E 
  $router->get('games',  ['uses' => 'GameController@showAllGames']);

  $router->get('game/{id}', ['uses' => 'GameController@showOneGame']);
  
  $router->post('game', ['uses' => 'GameController@create']);
  
  $router->delete('game/{id}', ['uses' => 'GameController@delete']);
  
  $router->put('game/{id}', ['uses' => 'GameController@update']);    
});
