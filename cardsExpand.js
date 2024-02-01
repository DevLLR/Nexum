const informacion = [
    {
        titulo : `<h3 class="tituloExpand">Embargos</h3>`,
        texto : `<h4 class="subTituloExpand">Para que exista un embargo el mismo debe ser ordenado por un juez</h4><p class="textoExpand">No puede existir embargo sin la iniciación previa de un juicio. Por tanto, no se deje asustar cuando le dicen que mañana recibirá un embargo, pues lo primero que debe preguntar Ud. es dónde esta iniciado el juicio y seguramente con rodeos no le daran los datos. En ese caso es posible que el juicio no exista.</p><h4 class="subTituloExpand">Bienes que puede afectar un embargo</h4><p class="textoExpand"><strong>- Muebles</strong> se refiere todo lo que Ud. tenga en su casa. La mayoria han sido declarados inembargables permitiendo esto el levantamiento de la medida.<br><strong>- Inmuebles</strong> resultan ser las propiedades de las que Ud. resulta titular (casas, lotes, departamenteos, cocheras, etc).<br><strong>- Cuentas Bancarias</strong><br><strong>- Sueldo</strong> no puede ser superior al 20%.<br><strong>- Automotores y Motos</strong><br>Los embargos son medidas judiciales para garantizar el cobro de la deuda, no implica ni secuestro ni remates, siendo posible llegar a un acuerdo y levantarlos.</p>`
    },

    {
        titulo : `<h3 class="tituloExpand">Veraz</h3>`,
        texto : `<p class="textoExpand">Estar informado por deudas en Veraz u otros organismos (Banco Central, Seven, Nosis, Riesgo On Line, etc.) Suele traer serios inconvenientes a la hora de contratar servicios, adquirir bienes o tomar préstamos.<br>Esto puede ser solucionado mediante los mecanismos que hoy proporciona la Ley Nacional de Protección de Datos Personales bajo al premisa del <strong>“derecho al olvido”</strong>.<br>Dándose los requisitos previstos por la mencionada ley y a través de una gestión ágil y efectiva de nuestro estudio Ud. dejará de aparecer como moroso en estos registros.<br>Hay que tener en cuenta que el hecho de Ud. deje de ser informado como deudor moroso le abrirá las puertas nuevamente al sistema financiero.</p>`
    },
    {
        titulo : `<h3 class="tituloExpand">Concurso y Quiebras</h3>`,
        texto : `<p class="textoExpand">En situaciones de dificil resolución a favor del deudor, dado la complejidad que se presenta ante el gran número de acreedores y a lo abultado de las deudas contraídas es necesario recurrir a estos institutos que nos permiten tomar la iniciativa en la solución del problema y no esperar el ataque a nuestro patrimonio por parte de los acreedores.<br>En el caso del concurso preventivo, su finalidad es convocar a los acreedores a los fines de ofrecer una solución acorde a las posibilidades del deudor, teniendo como principal efecto el congelamiento de las deudas al momento de la apertura del concurso, esto es la no carga de nuevos intereses a su deuda.<br>Otra ventaja de este procedimiento lo constituye el levantamiento de los embargos trabados y el impedimento de que ingresen nuevos embargos.<br>Respecto a la quiebra consideramos que se trata de una solución en casos extremos ya que tiene consecuencias inmediatas y futuras perjudiciales (patrimoniales y personales) muchas veces minimizadas. Es por esto que recomendamos un adecuado asesoramiento al respecto previo a su pedido de declaración.</p>`
    },
        {
        titulo : `<h3 class="tituloExpand">Otros Servicios</h3>`,
        texto : `<h4 class="subTituloExpand">Remates</h4><p class="textoExpand">Para llegar a esta instancia se requiere el haber recorrido un largo camino en la tramitación del juicio. Sin embargo la ley otorga medios para evitarlos y poder negociar una solución que no implique la ejecución de su bien.<br>La subasta de una propiedad debe ser notificada previamente y un oficial de justicia debera visitarlo y constatar su estado. Es importante no demorarse en consultar al abogado ante esta situacion ya que existen plazos para cuestionar las actuaciones judiciales realizadas.<br>Incluso habiendo sido rematado su bien aun existen posibilidades de buscar una solución.</p> <h4 class="subTituloExpand">Defensa del Consumidor</h4><p class="textoExpand">Lo representamos en pos de velar por la protección de sus derechos como usuario y consumidor, ante los diversos incumplimientos en la oferta y contratación de bienes y/o servicios que se producen en el mercado y que transgreden lo establecido en la ley de defensa al consumidor y usuario.<br>- Garantía de Reparación o reemplazo de bienes defectuosos<br>- Garantía por los daños producidos por productos defectuosos<br>- Publicidad engañosa<br>- Información falsa<br>- Promesas incumplidas por parte de los vendedores<br>- Planes de ahorro para compra de bienes (automotores)<br>- Incumplimiento por parte de agencias de viajes y turismo<br>- Incumplimiento a las prestaciones de medicina prepaga<br>- Descuentos indebidos en cuenta bancarias (cuenta corriente, caja de ahorro, tarjetas de creditos)<br>- Fraudes e ilicítos con su tarjeta de crédito o débito (robo, extracciones en el exterior, seguros)</p>`
    },
    {   titulo : `<h3 class="tituloExpand">Desalojos</h3>`,
    texto : `<p class="textoExpand">Si está en esta apremiante situación debe tener en cuenta que existen mecanismos de defensa previstos por la ley que garantizan que se respeten sus derechos.<br>Es importante estar permanentemente asesorado en este difícil momento que le permitirá tener contralada la situación y evitar ser desalojado por la fuerza sin saber cuando se producirá.</p>`
},
{   titulo : `<h3 class="tituloExpand">Alquileres</h3>`,
    texto : `<p class="textoExpand">En una relación como la de locador-locatario suelen suscitarse conflictos que requieren del correcto asesoramiento, para evitar en un futuro, mayores gastos tanto para inquilinos como garantes.<br>Son claros ejemplos de estos conflictos la negativa del recibo de las llaves del inmueble a la conclusión del contrato, el pretender ajustes no pactados, no otorgar recibos ante pagos efectuados, reclamos por roturas o desperfectos que son a cargo del locador, etc.<br>En estas situaciones es prioritario actuar rápidamente teniendo la certeza que una consulta con su abogado de confianza le ahorra costos y dolores de cabeza en el futuro.</p>`
},




]

function leerMas (title, text) {
    Swal.fire({
        title: title,
        html: text,
        width: '75%',
        confirmButtonColor: '#207981',
    })
}

/* document.addEventListener('click', (e) => {
    console.log(e.target.classList)
})
 */
document.addEventListener('click',  (e) => {
    if (e.target && e.target.classList.contains('btnCards')) {
        const id = e.target.id;
        console.log (id)
        leerMas (informacion[id].titulo,informacion[id].texto)
    }
});

/* const deudaLink = document.querySelector("#deudaLink");
const deudaSection = document.querySelector("#deudaIndex");

deudaLink.addEventListener('click', function (event) {
  event.preventDefault();
  deudaSection.scrollIntoView({ behavior: "smooth" });
}); */

