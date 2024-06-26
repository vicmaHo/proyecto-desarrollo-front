$(document).ready(function(){
    $('.tooltips-general').tooltip('hide');
    $('.mobile-menu-button').on('click', function(){
        var mobileMenu=$('.navbar-lateral');	
        if(mobileMenu.css('display')=='none'){
            mobileMenu.fadeIn(300);
        }else{
            mobileMenu.fadeOut(300);
        }
    });
    $('.dropdown-menu-button').on('click', function(){
        var dropMenu=$(this).next('ul');
        dropMenu.slideToggle('slow');
    });
    $('.exit-system-button').on('click', function(e){
        e.preventDefault();
        var LinkExitSystem=$(this).attr("data-href");
        Swal.fire({
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "No, cancelar",
            confirmButtonText: "Si, salir",
            confirmButtonColor: "#3598D9", // Color de fondo del botón confirmar
            cancelButtonColor: "#dc3545", // Color de fondo del botón cancelar
            focusConfirm: false, // Evita que el botón confirmar obtenga el foco
            title: "¿Estás seguro?",
            text: "Quieres salir del sistema y cerrar la sesión actual",
            
        }).then((result) => {
            if(result.isConfirmed){

                window.parent.location=LinkExitSystem; 
            }
        });
        
    });
    
    $('.btn-help').on('click', function(){
        $('#ModalHelp').modal({
            show: true,
            backdrop: "static"
        });
    });
});
(function($){
    $(window).load(function(){
        $(".custom-scroll-containers").mCustomScrollbar({
            theme:"dark-thin",
            scrollbarPosition: "inside",
            autoHideScrollbar: true,
            scrollButtons:{ enable: true }
        });
    });
})(jQuery);


