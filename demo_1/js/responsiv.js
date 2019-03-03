$(function (){
   $('body > header .nav_bar .nav_bar_item').mouseover(function (){
        $('body > header .nav_bar .nav_bar_item .sub_menu:visible').hide();
        $('body > header .nav_bar .nav_bar_item .sub_menu_border_img:visible').hide();
        $(this).find('> div > .sub_menu').show();
        $(this).find('.sub_menu_border_img').show();
   });
   
   isNavBarHidden = true;
   $('.mobile_navs .menu_icon').click(function (){
      if(isNavBarHidden){
          $('body > header .nav_bar').fadeIn("slow");
          isNavBarHidden = false;
      }
        else{
          $('body > header .nav_bar').fadeOut("slow");
          isNavBarHidden = true;
      }
   });
   isSearchBoxHidden = true;
   $('.mobile_navs .search_icon').click(function (){
      if(isSearchBoxHidden){
          $('.search_box_mobile').fadeIn("slow");
          isSearchBoxHidden = false;
      }
        else{
          $('.search_box_mobile').fadeOut("slow");
          isSearchBoxHidden = true;
      }
   });
});