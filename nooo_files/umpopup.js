function getUserPanelMenu()
{
    $("#user_panel_nav").css('display','none');
    var ml = 0;
    $("#user_panel_nav_hidden").css('margin-left', ml + 'px');
    $("#user_panel_nav_hidden").css('display','block');
    $("#user_panel_nav_hidden").hover(function(){
        //do nothing
    }, function(){
        hideUserPanelMenu();
    });
}

function hideUserPanelMenu()
{
    $("#user_panel_nav_hidden").css('display','none');
    $("#user_panel_nav").css('display','block');
    $("#user_panel_nav_hidden").css('margin-left', '850px');
}