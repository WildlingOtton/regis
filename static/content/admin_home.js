$(function(){
 
    var tmpl,   
    tdata = {};  
 
   
    var initPage = function() {

        
        $.get("/templates/admin_home.html", function(d){
            tmpl = d;
        });

        if (readCookie("username")) {
            tdata.username = readCookie("username");
        }

      
        $(document).ajaxStop(function () {
            var renderedPage = Mustache.to_html( tmpl, tdata );
            $("body").html( renderedPage );
        })    
    }();
});

