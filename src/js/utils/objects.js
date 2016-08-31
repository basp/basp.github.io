define(
    [
        'jquery'
    ],
    function objectsUtil(
        $j
    ) {
        'use strict';



        /***
        Check object length
        ***/
        var objectLength = function (obj) {
            var objectLength = 0;
            if (obj) {
                for (var i in obj) {
                    objectLength++;
                }; // check Obj Length
            }
            return objectLength;
        }


        /***
        inArray()
        needle: search string
        haystack: array to search in
        ***/
        function inArray(needle, haystack) {
            var length = haystack.length;
            for (var i = 0; i < length; i++) {
                if (haystack[i] == needle)
                    return true;
            }
            return false;
        }


        /***
        inObject()
        needle: search string
        haystack: array to search in
        ***/
        function inObject(needle, haystack) {
            var inHaystack = false;
            $j.each(haystack, function (key, value) {
                if (value == needle || key == needle) { inHaystack = true; }
            });
            return inHaystack;
        }




        return {
            objectLength:objectLength,
            inArray: inArray,
            inObject: inObject,
        };
    }
);
