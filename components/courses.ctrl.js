(function() {
  "use strict";

  angular
    .module("ngcourseor.coursesCtrl",[])
    .controller("CourseListCtrl",
      function($scope, $stateParams, popupService, $window, Course) {
      $scope.courses = Course.query();

      $scope.deleteCourse = function(course) {
        if (popupService.showPopup('Delete this course?')) {
          course.$delete(function() {
            $window.location.href = '';
          });
        }
      };
    }).controller('CourseViewController',
      function($scope, $stateParams, Course) {
      $scope.course = Course.get({ id: $stateParams.id });
    }).controller('CourseCreateController',
      function($scope, $state, $stateParams, Course) {
      $scope.course = new Course();

      $scope.addCourse = function() {
        $scope.course.$save(function() {
          $state.go('courses');
        });
      };
    }).controller('CourseEditController',
      function($scope, $state, $stateParams, Course) {
      $scope.updateCourse = function() {
        $scope.course.$update(function() {
          $state.go('courses');
        });
      };

      $scope.loadCourse = function() {
        $scope.course = Course.get({ id: $stateParams.id });
      };

      $scope.loadCourse();
    });
})();
