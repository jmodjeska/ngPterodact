angular.module('ngPterodact.services', []).factory('Course', function($resource) {
    return $resource('http://localhost:3000/courses/:id');
});
