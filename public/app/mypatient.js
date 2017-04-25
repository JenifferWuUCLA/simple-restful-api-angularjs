app.controller('MyPatientCtrl', function($scope, MyPatient, ngProgress, toaster) {

    $scope.mypatient = new MyPatient();

    var refresh = function() {
        $scope.mypatients = MyPatient.query();
        $scope.mypatient ="";
    }

    refresh();

    $scope.add = function(patient) {
        Patient.save(patient, function(mypatient) {
            refresh();
        });
    };

    $scope.update = function(mypatient) {
        mypatient.$update(function() {
            refresh();
        });
    };

    $scope.remove = function(mypatient) {
        mypatient.$delete(function(){
            refresh();
        });
    };

    $scope.edit = function(id) {
        $scope.mypatient = mypatient.get({ id: id });
    };

    $scope.deselect = function() {
        $scope.mypatient = "";
    }

})