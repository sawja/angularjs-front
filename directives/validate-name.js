angular.module('app').directive('validateName', () => { return {
    restrict: 'A',
        require: 'ngModel',
        link: (scope, elem, attrs, ctrl) => {
            ctrl.$validators.onlyLetters = () => {
                //const regexp = /^[a-zA-Z]+$/
                const regexp = /^[a-zA-Z\s]*$/
                if (regexp.test(ctrl.$viewValue)) {
                    return true
                } else {
                    return false
                }
            }
        }
}})