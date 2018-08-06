angular.module('app').directive('validateDate', () => { return {
    restrict: 'A',
        require: 'ngModel',
        link: (scope, elem, attrs, ctrl) => {
            ctrl.$validators.validDate = () => {
                const year = ctrl.$viewValue.substring(0, 4)
                if (year > 1900) {
                    return true
                } else {
                    return false
                }
            }
        }
}})