/*!
* NAME OF THE FILE (minimumText.js)
* Logic for the minimumText
* 
* @project   minimumText
* @date      030-06-2016
* @author    mr.naresh kumar <mnaresh2010@aol.com>
* @license  MIT
*
*/

'use strict';

;(function ($) {
    $.fn.minimumText = function (obj) {
        var el = $(obj.element),
            content = $(el).html(),
            charCount = obj.numsChar || 125,
            link = obj.url || '',
            dots = obj.dots || '...',
            stringVal = obj.str || 'See More',
            modifiedStr = content.substr(0, charCount) + dots + " " + "<a href=http://" + link + "><small>" + stringVal + "</small></a>";

        $(el).html(modifiedStr);
        return this;
    }
}(jQuery));
