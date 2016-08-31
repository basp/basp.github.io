define([
    'jquery'
], function(
    $
) {

    var height = {
            window: $(window).height(),
            document: $(document).height()
        };

    /**
     * Returns offset value based on view height
     * @method viewOffset
     * @param  {Number}   val  Original offset
     * @return {Number} Returns offset based on view height
     */
    function viewOffset(val){
        return Math.round((val / 1000) * height.window);
    }


    return {
        offset: viewOffset,
        height: height
    };

});
