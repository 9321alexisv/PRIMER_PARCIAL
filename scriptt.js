// ---------------------------------OBTENER ELEMENTOS--------------------------------------
const btnAceptar = document.getElementById("btnAceptar");
const titPelicula = document.getElementById("titPelicula");
const Clasificacion = document.getElementById("Clasificacion");
const descripcion = document.getElementById("descripcion");
const inputEdad = document.getElementById("input1");
const checkboxAccion = document.getElementById("checkbox1");
const checkboxTerror = document.getElementById("checkbox2");
const checkboxComedia = document.getElementById("checkbox3")
const imagenPeli = document.getElementById("imagenPeli");
// ---------------------------------OBTENER ELEMENTOS--------------------------------------


// ---------------------------------BOTON ACEPTAR------------------------------------------
btnAceptar.addEventListener("click", function () {
    const edad = parseInt(inputEdad.value);
    const esAccionSeleccionada = checkboxAccion.checked;
    const esTerrorSeleccionada = checkboxTerror.checked;
    const esComediaSeleccionada = checkboxComedia.checked;

    if (edad > 18 && esAccionSeleccionada) {
        titPelicula.textContent = "EFECTO MARIPOSA";
        Clasificacion.textContent = "Clasificacion B15";
        descripcion.textContent = "Decidido a llevar a cabo lo que no pudo hacer durante su infancia, Evan viaja en el tiempo *con su mente actual en el cuerpo de niño* e intenta reescribir la historia para que sus seres queridos no sufran las experiencias traumáticas que tuvieron. Al modificar el pasado Evan espera transformar el presente";
        imagenPeli.src = "imagenes/efecto_mariposa.jpg";
    } else if (edad > 18 && esTerrorSeleccionada) {
        titPelicula.textContent = "EL CONJURO";
        Clasificacion.textContent = "Clasificacion NC-17";
        descripcion.textContent = "Basada en una historia real, El conjuro cuenta cómo una pareja de investigadores de fenómenos paranormales, Ed y Lorraine Warren (Patrick Wilson, Vera Farmiga), acude en ayuda de una familia aterrorizada por una presencia oscura en una granja alejada de todo";
        imagenPeli.src = "imagenes/conjuro.jpg";
    } else if (edad < 18 && esAccionSeleccionada) {
        titPelicula.textContent = "BUSCANDO A NEMO";
        Clasificacion.textContent = "Clasificacion G";
        descripcion.textContent = "Nemo es un niño de seis años curioso e impresionable que vive solo con Marlin, un padre excesivamente protector. Ha llevado una vida muy tranquila y está muy emocionado ante la perspectiva de su primer día de colegio. Por fin va a tener la oportunidad de descubrir las maravillas que esconde la Gran Barrera de Coral.";
        imagenPeli.src = "imagenes/nemo.jpg";
    } else if (edad < 18 && esTerrorSeleccionada) {
            titPelicula.textContent = "HOTEL TRANSILVANYA";
            Clasificacion.textContent = "Clasificacion PG-13";
            descripcion.textContent = "Drácula es el propietario de un hotel construido exclusivamente para que los monstruos y sus familias puedan relajarse alejados de los humanos. Pero el vampiro es, además, padre de una adolescente, lo que le traerá más de un dolor de cabeza, especialmente con la llegada de un humano al hotel.";
            imagenPeli.src = "imagenes/hotel.jpg";
    } else if (edad < 18 && esComediaSeleccionada) {
            titPelicula.textContent = "SHREK";
            Clasificacion.textContent = "Clasificacion PG-13";
            descripcion.textContent = "Shrek es un ogro que disfruta de la vida solitaria en su pantano. Un día, su paz se ve alterada por una invasión de personajes de cuentos de hadas que huyen de la ira de lord Farquaad. Shrek le ofrece un trato: el rescate de la bella princesa Fiona, prometida con el príncipe, a cambio de su tranquilidad.";
            imagenPeli.src = "imagenes/shrek.jpg";
    } else if (edad > 18 && esComediaSeleccionada) {
            titPelicula.textContent = "21 JUMP STREET";
            Clasificacion.textContent = "Clasificacion B15";
            descripcion.textContent = "McCann se une Jump Street y se asoció con un adolescente deficientes mentales en un sistema de amigos de la escuela para investigar la muerte del ex compañero de la adolescente. Penhall se enamora de su compañero de narcóticos que parece tener un problema de drogas de su propia.";
            imagenPeli.src = "imagenes/jump.jpg";


    } else {
        // Restaurar valores predeterminados si no se cumplen las condiciones
        titPelicula.textContent = "TITULO PELICULA";
        Clasificacion.textContent = "Clasificacion Pelicula";
        descripcion.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur enim consectetur sed dolore magni, commodi expedita facere exercitationem reiciendis quia harum at qui atque a officiis. Molestiae incidunt provident sapiente!";
    }
});

// ---------------------------------BOTON ACEPTAR------------------------------------------



// ---------------------------------CHECK BOX------------------------------------------

function seleccionUnica(checkbox) 
{
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(item => {
        if (item !== checkbox) {
            item.checked = false;
        }
    });
}





// ---------------------------------CHECK BOX------------------------------------------

