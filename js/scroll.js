
    $(document).ready(function(){
           
        $(window).scroll(function(){

            if($(window).scrollTop()>5)
            {
              $(".navigation").css("display","none")
              // $(".bar-icon").css("display","none")
            }

            else 
            {
              $(".navigation").css("display","flex")
              // $(".bar-icon").css("display","flex")
            }
            
        
                if($(window).scrollTop()>$("header").height() )
                  {    
                  $(".navigation").css("background-color","white");
                  // $(".bar-icon").css("background-color","white");
                  $(".white-anchor").css("color","black");
                  // $(".bar-icon").css("color","black");
                  $(".navigation").css("display","flex");
                  }
                  else  
                  {
                  $(".white-anchor").css("color","white");
                  // $(".bar-icon").css("color","white");
                  $(".navigation").css("background-color","transparent"); 
                  // $(".bar-icon").css("background-color","transparent");             
                  }

                
              })
  // $(window).resize(function(){
  //   if($(window).width()<=600)
  //   {
  //     alert("hello")
  //     $(".navigation").css("display","none")
  //   }
  // })
           

             
                $(".fa-bars").click(function(){
                   $(".navigation").toggle()
                })
          





             });
 

          
       
           