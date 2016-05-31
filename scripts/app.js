angular.module("ngPterodact",[
  "ui.router",
  "ngResource",
  "ngPterodact.coursesCtrl",
  "ngPterodact.usersCtrl",
  "ngPterodact.services"
]);

angular.module("ngPterodact").config(function($stateProvider,$httpProvider) {
  $stateProvider.state("courses", {
    url:"/courses",
    templateUrl:"partials/courses.html",
    controller:"CourseListCtrl"
  });
}).run(function($state) {
  $state.go("courses");
});
