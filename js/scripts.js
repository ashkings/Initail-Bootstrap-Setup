      $(document).ready(function(){
        $('#mycarousel').carousel({interval:2000});
        $("#carouselButton").click(function(){
            if($('#carouselButton').children("span").hasClass('fa-pause')){
                $('#mycarousel').carousel('pause');
                $('#carouselButton').children("span").removeClass('fa-pause');
                $('#carouselButton').children("span").addClass('fa-play');
            }
            else if($('#carouselButton').children("span").hasClass('fa-play')){
                $('#mycarousel').carousel('cycle');
                $('#carouselButton').children("span").removeClass('fa-play');
                $('#carouselButton').children("span").addClass('fa-pause');
            }
            });
    

    <!-- jQuery for modals -->
    

        $("#reserve_button").click(function(){
            $("#reserve").modal('show');
        });
        $("#Login").click(function(){
            $("#loginModal").modal('show');
        });

        $(".dismiss").click(function(){
            $("#loginModal").modal('hide');
        });

        $(".dismiss").click(function(){
            $("#reserve").modal('hide');
        });


    <!-- jQuery for smoking and non-smoking buttons -->
     

        $("#btn-2").click(function(){
            if($("#btn-1").hasClass('active')){
            $("#btn-1").removeClass('active');
            $("#btn-2").addClass('active');
        }
        });
        $("#btn-1").click(function(){
            if($("#btn-2").hasClass('active')){
            $("#btn-2").removeClass('active');
            $("#btn-1").addClass('active');
        }
        });
    };