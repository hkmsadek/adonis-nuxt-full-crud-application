'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

Route.get('app/test-route', 'TestController.testMethod')
Route.get('app/test-route-with-id/:id', 'TestController.testMethodWithData')
Route.post('app/add_task_lists', 'TestController.addTask')
Route.get('app/get_task_lists', 'TestController.getTask')
Route.get('app/get_single_task/:id', 'TestController.getSingleTask')
Route.post('app/upadate_task', 'TestController.updateTask')
Route.post('app/delete_task', 'TestController.deleteTask')

Route.any('*', 'NuxtController.render')
