$(document).ready(()=> {
    if(window.location.href.indexOf('index') > -1)
    { //Si es que estoy en index cargo slider.
        $('.bxslider').bxSlider({
        mode: 'fade',
            captions: true,
            slideWidth: 1200
        }); 
    }

    /*Arreglo de JSON para los posts*/
    if(window.location.href.indexOf('index') > -1)
    {//Si es que estoy en index cargo post.
        var posts = 
        [
            {   //Articulo 1
                titulo:  "Titulo 1",
                fecha:   moment().day() + "/" + moment().month() + "/" + moment().format("YYYY"),   //Usando moment.js
                contenido: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam pariatur aliquam, explicabo itaque hic harum mollitia cupiditate quod in adipisci provident, modi, voluptas accusamus ratione saepe cumque repellat esse aperiam."
            },
            {   //Articulo 2
                titulo:  "Titulo 2",
                fecha:   moment().day() + "/" + moment().month() + "/" + moment().format("YYYY"),
                contenido: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam pariatur aliquam, explicabo itaque hic harum mollitia cupiditate quod in adipisci provident, modi, voluptas accusamus ratione saepe cumque repellat esse aperiam."
            },
            {   //Articulo 3
                titulo:  "Titulo 3",
                fecha:   moment().day() + + "/" + moment().month() + "/" + moment().format("YYYY"),
                contenido: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam pariatur aliquam, explicabo itaque hic harum mollitia cupiditate quod in adipisci provident, modi, voluptas accusamus ratione saepe cumque repellat esse aperiam."
            },
            {   //Articulo 4
                titulo:  "Titulo 4",
                fecha:   moment().day() + "/" + moment().month() + "/" + moment().format("YYYY"),
                contenido: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam pariatur aliquam, explicabo itaque hic harum mollitia cupiditate quod in adipisci provident, modi, voluptas accusamus ratione saepe cumque repellat esse aperiam."
            }
        ]
        posts.forEach((item,index) => { //For each para llenar dinamicamente los articulos
            var post= `
            <article class="post">
            <h2>${item.titulo}</h2>   
                <span class="fecha">${item.fecha}</span>
                    <p>${item.contenido}</p>
            <a href="#" class="more">Leer mas</a>
            </article>
        `
            $("#posts").append(post);   //Incrustamos en el HTML dinamicamente.    
        })
    }

    /* SELECTOR DE TEMAS */
    var tema = $("#theme");
    var verde = $("#verde");
    var rojo = $("#rojo");
    var azul = $("#azul");

    verde.click(() => {
        tema.attr("href","css/green.css");
    })

    rojo.click(() => {
        tema.attr("href","css/red.css");
    })

    azul.click(() => {
        tema.attr("href","css/blue.css");
    })

    /* SCROLL HACIA ARRIBA*/ 
    var subir = $(".subir");

    subir.click((excp) => {
        excp.preventDefault();  //Prevenimos que se redireccione a otro sitio.
        $('html,body').animate({    //Usamos animate. ScrollTop nos lleva al pixel 0.
            scrollTop:0
            },500); //500 ms de transicion.

    })

    /* LOGIN */ 
    $("#login form").submit(() => {    //Cuando se haga un submit...
        var usuario = $("#nombre").val();   //Capturamos lo que se ingresa en usuario.
        localStorage.setItem("Usuario", usuario);   //Almaceno en LocalStorage
    });

    var usuario = localStorage.getItem("Usuario");  //Recupero de LocalStorage
    if(usuario != null && usuario != undefined){
       var about_parrafo = $("#about p");
       about_parrafo.html("<br><strong>Bienvenido, " + usuario + "</strong>");  //Saludo al usuario
       $("#login").hide();  //Escondemos el login si hay una sesion activa.
       about_parrafo.append("<a href='#' id='logout'>Cerrar Sesion</a>");   //Doy opcion de cerrar sesion.
       $("#logout").click(() => {localStorage.clear(); //Limpio la memoria del local storage.
                                 location.reload()   })   //Recargo la pagina.
    }

    if(window.location.href.indexOf('about') > -1){//Si es que estoy en about cargo post.
        $("#acordeon").accordion();
    }

    /* RELOJ DINAMICO */
    if(window.location.href.indexOf('reloj') > -1){
        setInterval(()=>{   //Cada 1 segundo, que actualice el reloj.
        var reloj = moment().format('h:mm:ss a');
        $("#reloj").html(reloj);},1000)

    }

    /* VALIDACION */
    if(window.location.href.indexOf('contacto') > -1){
        $("form input[name='fecha']").datepicker({
            dateFormat: 'dd/mm/yyyy'    //Formato del datepicker.
        });

        //Json con distintos parametros para personalizar el mensaje de error.
        $.validate({lang: 'es', errorMessagePosition: 'top', scrollToTopOnError: true});

    }

})