$(document).ready(function(){

    /**
     * Import element to the top of the list
     */
    $("#import").click(function(){
        var text = $('textarea[name=text]').val();
        if(text === ""){
            // Show alert dialog if value is not blank
            alert("This field is required");
        }
        else {

            var output = nl2br(text);
            var array = output.split("<br>\n");

            //Delete null element
            array = jQuery.grep(array, function(n){ return (n); });

            for(var i=0; i<array.length; i++){
                $("ul").append("<li>"+array[i]+"</li>");
            }

            var auto_inc_id = 0; //initialise value of auto incremented id to 0
            $('ul.list li').each(function(){ //loop through each list element of ul
                $(this).attr('id', auto_inc_id); //attach to current li an id attribute that has auto_inc_id as its value
                auto_inc_id++; //increment auto_inc_id by one
            });
        }

        $("#textarea").val("");

        /**
         * Move the element
         */
        $('.list').sortable();

        /**
         * chọn 1 mục trong danh sách, mục được chọn có style khác các mục khác
         */
        $( "li" ).on({
            click: function() {
                $( this ).toggleClass( "active" );
            }
        });
    });


    /**
     * Inport element  to the top of list
     */
    $("#importTop").click(function(){
        var textarea = $('textarea[name=text]').val();
        if(textarea === ""){
            // Show alert dialog if value is not blank
            alert("This field is required");
        }
        else {
            var output = nl2br(textarea);
            var array = output.split("<br>\n");
            array = jQuery.grep(array, function(n){ return (n); });

            for(var i=0; i<array.length; i++){
                $("ul").prepend("<li>"+array[i]+"</li>");
            }

            var auto_inc_id = 0; //initialise value of auto incremented id to 0
            $('ul.list li').each(function(){ //loop through each list element of ul
                $(this).attr('id', auto_inc_id); //attach to current li an id attribute that has auto_inc_id as its value
                auto_inc_id++; //increment auto_inc_id by one
            });
        }

        $("#textarea").val("");

        /**
         * Move the element
         */
        $('.list').sortable();

        /**
         * chọn 1 mục trong danh sách, mục được chọn có style khác các mục khác
         */
        $( "li" ).on({
            click: function() {
                $( this ).toggleClass( "active" );
            }
        });
    });


    /**
     * Delete the last element of the list
     */
    $("#delete").click(function(){
        $("li.active").remove();
    });

    /**
     * Append to the botom of the list and change tag li to tag input radio button
     */
    $("#export").click(function(){
        $("#id").append($(".active"));
        // for(var i = $('li').length-1; i>=0; i--){
        //     $('li#'+i).replaceWith('<input type="radio" name="radio" class="radio">' + $('#'+i).text() +'<br>');
        // }

        for(var i = $('li').length+1; i>=0; i--){
            if ($("#"+i).hasClass("active")) {
                $('#'+i).replaceWith('<input type="radio" name="radio" class="radio">' + $('#'+i).text() +'<br>');
            }
        }

        setTimeout(function(){
            if ($('#id').length > 0) {
                $('#id').empty();
            }
        }, 1000)

    });

    /**
     * Delete radio button when click
     */
    $('#id').on('click', '.radio', function(){
        $(this).get(0).nextSibling.remove()
        $(this).remove();
    });

    /**
     * Order sort list of ul li
     * @param ul
     * @param sortDescending
     */
    function sortUnorderedList(ul, sortDescending) {
        if(typeof ul == "string")
        ul = $('ul');

        var lis = $('li');
        var vals = [];

        for(var i = 0, l = lis.length; i < l; i++)
            vals.push(lis[i].innerHTML);

        vals.sort();

        if(sortDescending)
            vals.reverse();

        for(var i = 0, l = lis.length; i < l; i++)
            lis[i].innerHTML = vals[i];
    }

    window.onload = function() {
        var desc = false;
        document.getElementById("order").onclick = function() {
            sortUnorderedList("list", desc);
            desc = !desc;
            return false;
        }
    };

    /**
     * This function is same as PHP's nl2br() with default parameters.
     *
     * @param {string} str Input text
     * @param {boolean} replaceMode Use replace instead of insert
     * @param {boolean} isXhtml Use XHTML
     * @return {string} Filtered text
     */
    function nl2br (str, replaceMode, isXhtml) {

        var breakTag = (isXhtml) ? '<br />' : '<br>';
        var replaceStr = (replaceMode) ? '$1'+ breakTag : '$1'+ breakTag +'$2';
        return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, replaceStr);
    }
});