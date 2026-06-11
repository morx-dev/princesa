// Base de datos histórica original e intacta tal cual fue escrita por Isaías
const baseHistorica = [
    { autor: "Isaias", mes: "Diciembre", fecha: "17 de diciembre", especial: false, texto: "vino poste y fuimos a comprar las promociones de Villa Burguer y fuimos a la posada del sector 5, llegó poca gente e hicimos la fila para la comida como 5 veces" },
    { autor: "Isaias", mes: "Diciembre", fecha: "18 de Diciembre", especial: false, texto: "yo salí tarde porque estaba trabajando pero fuimos a la posada del sector 8,  dieron de comida pan con frijol y té de piña" },
    { autor: "Isaias", mes: "Diciembre", fecha: "19 de Diciembre", especial: false, texto: "salí del trabajo temprano y llegué a su casa en la tarde, tipo 3 almorzamos juntos, fui a comprar una pizza para y Mc para comer, fue muy bonito, en la noche le hice una broma muy pesada (me fui sin acompañarla a su casa) jaja se enojó feo, pero obviamente la terminé acompañando jajaj" },
    { autor: "Isaias", mes: "Diciembre", fecha: "20 de Diciembre", especial: false, texto: "este día no nos vimos 😭 ella fue a una boda (de seguro vio a muchos hombres) jajaja, yo fui a la posada de sector 7 con Dei V y Xavi" },
    { autor: "Isaias", mes: "Diciembre", fecha: "21 de Diciembre", especial: false, texto: "su mejor amiga vino de Estados Unidos (la mantequilla) salimos y estuvimos molestando, disque me quiere quitar a mi novia" },
    { autor: "Isaias", mes: "Diciembre", fecha: "22 de Diciembre", especial: false, texto: "le mostré mi nuevo corte de pelo, salí a jugar con sus sobrinitos y vimos la final de fut 4:20 vs Tunquitos, ganó tunquitos, y yo gané la apuesta 😌" },
    { autor: "Isaias", mes: "Diciembre", fecha: "23 de Diciembre", especial: false, texto: "cada quien salió con sus amigos, yo fui a jugar basket y ella jugó un rato fut, me hizo show porque me puse la camisa que a ella le gusta" },
    { autor: "Isaias", mes: "Diciembre", fecha: "24 de Diciembre", especial: false, texto: "pasamos juntos la noche, ella vino a cenar a mi casa, y luego a las 12 fui a su casa para abrir los regalos" },
    { autor: "Isaias", mes: "Diciembre", fecha: "25 de Diciembre", especial: false, texto: "cada quien la pasó con sus amigos, ambos estuvimos en las canchas y nos saludamos" },
    { autor: "Isaias", mes: "Diciembre", fecha: "26 de Diciembre", especial: false, texto: "llegué al arco de su casa un rato, luego subimos al parque y estuvimos jugando volley, también nos comimos un pan de banano" },
    { autor: "Isaias", mes: "Diciembre", fecha: "27 de Diciembre", especial: false, texto: "salimos con sus sobrinitos un rato, yo fui a jugar futbol con negrito y en la noche cenamos en su casa (frijolitos) sus hermanas me hicieron bullying por no llevar lentes" },
    { autor: "Isaias", mes: "Diciembre", fecha: "28 de Diciembre", especial: false, texto: "fuimos con su familia a Oakland a cambiar los regalos del 24 y en la noche pasamos cenando campero" },
    { autor: "Isaias", mes: "Diciembre", fecha: "29 de Diciembre", especial: false, texto: "salimos con su sobrinito (hijo de la Gorda) y luego fuimos a las canchas" },
    { autor: "Isaias", mes: "Diciembre", fecha: "30 de Diciembre", especial: false, texto: "no nos vimos (me fui de viaje)" },
    { autor: "Isaias", mes: "Diciembre", fecha: "31 de Diciembre", especial: false, texto: "no nos vimos (me fui de viaje)" },
    { autor: "Isaias", mes: "Enero", fecha: "01 de Enero", especial: false, texto: "Regresé del viaje, y salimos en la noche, fue bonito verla de nuevo" },
    { autor: "Isaias", mes: "Enero", fecha: "02 de Enero", especial: false, texto: "fui a almorzar y a cenar a su casa, estuvo bonito porque convivimos con sus hermanas y sus sobrinos, fuimos a comprar helados a Villa Hermosa" },
    { autor: "Isaias", mes: "Enero", fecha: "03 de enero", especial: false, texto: "ella fue a la casa de su tía en Santa Fe, yo salí con mis amigos y en la noche nos juntamos un ratito" },
    { autor: "Isaias", mes: "Enero", fecha: "04 de enero", especial: false, texto: "fuimos a almorzar caldo de gallina a la casa de su hermana Roxana, estuvimos ahí toda la tarde y pasé tiempo especial con ella y su familia" },
    { autor: "Isaias", mes: "Enero", fecha: "05 de Enero", especial: false, texto: "salimos a jugar futbol con sus amigos" },
    { autor: "Isaias", mes: "Enero", fecha: "06 de Enero", especial: false, texto: "por accidente no recordé que nos íbamos a hacer mascarillas y fui al gym con mi jefe, Ari se enojó, pero en la noche la fui a ver y hablamos jaja" },
    { autor: "Isaias", mes: "Enero", fecha: "07 de enero", especial: false, texto: "celebramos el cumpleaños de Poste, llegaron varios amigos (leches, Anton, Fer, lupeca,Montse, etc)" },
    { autor: "Isaias", mes: "Enero", fecha: "07 de Enero (Amor)", especial: true, texto: "Me dijo en persona \"te amo mi amor\" nos dijimos" },
    { autor: "Isaias", mes: "Enero", fecha: "08 de enero", especial: false, texto: "nos comimos nuestras donas y fuimos a cenar a su casa" },
    { autor: "Isaias", mes: "Enero", fecha: "09 de enero", especial: false, texto: "no nos vimos" },
    { autor: "Isaias", mes: "Enero", fecha: "10 de Enero", especial: false, texto: "fuimos en la mañana a Walmart a comprar los ingredientes para el pastel de su papá, por su cumpleaños, en la tarde me fui al volcán" },
    { autor: "Isaias", mes: "Enero", fecha: "11 de Enero", especial: false, texto: "regresamos del Volcán tipo 10, te fui a saludar a tu casa en la mañana, me fui y luego a las 12 volví a regresar, pasamos todo el día juntos, le celebraron el cumpleaños al papá y comimos carne asada" },
    { autor: "Isaias", mes: "Enero", fecha: "12 de Enero", especial: false, texto: "fue el primer día de U de Ari, salimos ya tarde, y fuimos a cenar a su casa" },
    { autor: "Isaias", mes: "Enero", fecha: "13 de Enero", especial: true, texto: "hoy es nuestro aniversario, cumplimos un mes ❤️\nHoy no trabajé, y la fui a traer a la Universidad," },
    { autor: "Isaias", mes: "Enero", fecha: "14 de Enero", especial: false, texto: "fui a jugar basket con mis amigos y en la noche nos comimos una promoción de torito de Villa Burguer" },
    { autor: "Isaias", mes: "Enero", fecha: "15 de Enero", especial: false, texto: "nos vimos un rato al medio día cuando regresaba de la U, en la noche cada quien salió con sus amigos" },
    { autor: "Isaias", mes: "Enero", fecha: "16 de Enero", especial: false, texto: "nos vimos un rato en las canchas, vinieron sus amigas (Karin y Tania) \nY en la noche me fui al volcán de acatenango" },
    { autor: "Isaias", mes: "Enero", fecha: "17 de Enero", especial: false, texto: "salimos en la tarde con ella y sus amigas, en la noche comimos pizza y shucos para despedir a Abdul" },
    { autor: "Isaias", mes: "Enero", fecha: "18 de Enero", especial: false, texto: "cenamos atún con mayonesa en su casa y estuvimos juntos en la tarde" },
    { autor: "Isaias", mes: "Enero", fecha: "19 de Enero", especial: false, texto: "salimos en la noche y nos comimos un shuco, este día mi niña hermosa me preparó gelatina 🥹 con leche, estaba muy rica" },
    { autor: "Isaias", mes: "Enero", fecha: "20 de Enero", especial: false, texto: "hoy fue complicado jaja, discutí con Montse (fue un mal entendido) pero gracias a Dios se solucionó, yo me disculpé y todo bien. Ari y yo fuimos al sector 12 a traer el dinero de las donas y ella me tranquilizó porque iba muy tenso, luego me contó que no se sentía muy bien por algunas cosas (negrito) y se puso a llorar, es la primera vez que la veo llorar en persona." },
    { autor: "Isaias", mes: "Enero", fecha: "21 de Enero", especial: false, texto: "no nos vimos, ella fue al cumple de su tía y yo salí tarde del trabajo (8pm)" },
    { autor: "Isaias", mes: "Enero", fecha: "22 de Enero", especial: false, texto: "fuimos a jugar futbol con sus amigos y en la noche cenamos panes con salchicha en su casa" },
    { autor: "Isaias", mes: "Enero", fecha: "23 de Enero", especial: false, texto: "fuimos a jugar futbol y tomamos café en su casa" },
    { autor: "Isaias", mes: "Enero", fecha: "24 de Enero", especial: false, texto: "fuimos a Tribu Terrace en Alotenango a almorzar, nos acompañó la Gorda porque iba a llegar un su ligue (el Capitán) en la noche celebramos el cumpleaños de mi hermano Axel, llegaron todos nuestros amigos (amigos de Isaías) y la pasamos bien" },
    { autor: "Isaias", mes: "Enero", fecha: "25 de Enero", especial: false, texto: "almorzamos caldo de res en su casa, y en la noche fuimos al EcoCentro con su familia a comprar, Ari se puso molesta porque estuvo con sus sobrinos, celosa" },
    { autor: "Isaias", mes: "Enero", fecha: "26 de Enero", especial: false, texto: "cada quien salió con sus amigos \nYo salí a hablar con Dei V porque no se sentía bien, pero al final del día nos vimos un rato en las canchas" },
    { autor: "Isaias", mes: "Enero", fecha: "27 de Enero", especial: false, texto: "celebramos el cumpleaños de Cano, Ari salió algo tarde tipo 7:40 de la noche, comimos pizza y vimos una película en mi casa" },
    { autor: "Isaias", mes: "Enero", fecha: "28 de Enero", especial: false, texto: "salimos con José poste y comimos donas, en la noche seguimos viendo la película de Transformers" },
    { autor: "Isaias", mes: "Enero", fecha: "29 de Enero", especial: false, texto: "salimos a las canchas a platicar, en la noche nos comimos un shuco con Montse y Marcela, luego fuimos a su casa a cenar, seguimos viendo la película de Transformers" },
    { autor: "Isaias", mes: "Enero", fecha: "30 de Enero", especial: false, texto: "comimos Villa Burguer en la noche y terminamos de ver Transformers" },
    { autor: "Isaias", mes: "Enero", fecha: "31 de Enero", especial: false, texto: "cenamos en mi casa panes de la shell mientras veníamos las fotos de la boda de mi hermano" },
    { autor: "Isaias", mes: "Febrero", fecha: "01 de febrero", especial: false, texto: "vimos una parte de la película de \"13 horas\" y comimos crepas echas por Ari y Roxana, también comimos tostadas con queso y salsa" },
    { autor: "Isaias", mes: "Febrero", fecha: "02 de febrero", especial: false, texto: "no nos vimos" },
    { autor: "Isaias", mes: "Febrero", fecha: "03 de febrero", especial: false, texto: "yo salí a las 6:30 de trabajar, jugamos futbol un rato en el parque y luego fuimos a cenar a su casa" },
    { autor: "Isaias", mes: "Febrero", fecha: "04 de Febrero", especial: false, texto: "jugamos basket y volley en las canchas, vino el enamorado de Montse, después fuimos a su casa a comer Villa Burguer y terminamos de ver Transformers" },
    { autor: "Isaias", mes: "Febrero", fecha: "05 de Febrero", especial: false, texto: "solo nos vimos un rato en la noche, ya que yo salí muy tarde de trabajar" },
    { autor: "Isaias", mes: "Febrero", fecha: "06 de Febrero", especial: false, texto: "jugamos futbol y basket en la noche , ella estuvo algo molesta y estresada, porque estuvo discutiendo con su mamá casi todo el día" },
    { autor: "Isaias", mes: "Febrero", fecha: "07 de Febrero", especial: false, texto: "nos vimos un rato en la noche, tuve Universidad, estuvimos aprendiendo inglés, en su casa" },
    { autor: "Isaias", mes: "Febrero", fecha: "08 de febrero", especial: false, texto: "fuimos a las piscinas por el cumple de Santi, las pasamos muy bonito con toda su familia, en la noche venimos a su casa a comer pizza y a comer pastel, (Santi abrió sus regalos)" },
    { autor: "Isaias", mes: "Febrero", fecha: "09 de Febrero", especial: false, texto: "salimos a molestar con mis amigos en la noche, estábamos en mi sector (sector 12)" },
    { autor: "Isaias", mes: "Febrero", fecha: "10 de Febrero", especial: false, texto: "Ari salió en la tarde a jugar fut con sus amigos, yo salí con mis amigos, estuvimos un rato juntos" },
    { autor: "Isaias", mes: "Febrero", fecha: "11 de Febrero", especial: false, texto: "llegué a su casa como a las 3, en la tarde-noche salimos a vender donas, jugamos basket y en la noche fuimos a su casa a hacer una caja para una tarea que ella tenía." },
    { autor: "Isaias", mes: "Febrero", fecha: "12 de Febrero", especial: false, texto: "cenamos chilaquiles en su casa y estábamos viendo la película de Venom" },
    { autor: "Isaias", mes: "Febrero", fecha: "13 de Febrero", especial: true, texto: "celebramos nuestro segundo mes juntos, fuimos a comer a Mac y planeamos hacer nuestro propio negocio. Hoy se miraba extremadamente guapo." },
    { autor: "Isaias", mes: "Febrero", fecha: "14 de Febrero", especial: true, texto: "hoy fue San Valentín (nuestro primer san Valentín) yo Isaías la pasé en la universidad, Ari en cambio, fue a una boda con su familia, nos pudimos ver hasta en la noche, ya muy tarde" },
    { autor: "Isaias", mes: "Febrero", fecha: "15 de Febrero", especial: false, texto: "salimos en la tarde-noche y fuimos a comer tortillas de harina a Villa Hermosa, también ajá 🤣" },
    { autor: "Isaias", mes: "Febrero", fecha: "16 de Febrero", especial: false, texto: "no nos vimos, ella salió con su familia, y yo salí tipo 7:30 al parque a hacer tiros" },
    { autor: "Isaias", mes: "Febrero", fecha: "17 de Febrero", especial: false, texto: "yo salí tarde de trabajar y nos vimos un rato en la noche, comimos hamburguesa en su casa, y Montse nos dio una carta por el día del cariño" },
    { autor: "Isaias", mes: "Febrero", fecha: "18 de Febrero", especial: false, texto: "salí tarde de trabajar, pero jugamos basket un rato en la noche, luego Montse y Ari fueron a misa, las acompañé un rato" },
    { autor: "Isaias", mes: "Febrero", fecha: "19 de Febrero", especial: false, texto: "salimos un rato a jugar basket, pero me tuve que entrar temprano porque tuve que ir a trabajar" },
    { autor: "Isaias", mes: "Febrero", fecha: "20 de Febrero", especial: false, texto: "salimos a jugar basket y luego fuimos a su casa a cenar" },
    { autor: "Isaias", mes: "Febrero", fecha: "21 de Febrero", especial: false, texto: "salimos un rato a las canchas, yo regresé tarde de la U y después ajá" },
    { autor: "Isaias", mes: "Febrero", fecha: "22 de Febrero", especial: false, texto: "discutimos" },
    { autor: "Isaias", mes: "Febrero", fecha: "23 de Febrero", especial: false, texto: "nos perdonamos y cenamos frijolitos en su casa, además vimos un rato el hombre araña 3" },
    { autor: "Isaias", mes: "Febrero", fecha: "24 de Febrero", especial: false, texto: "salimos a comer donas y empezamos a ver nuestra primera serie juntos, \"You\"" },
    { autor: "Isaias", mes: "Febrero", fecha: "25 de Febrero", especial: false, texto: "fuimos a EcoCentro con sus amigos a comer algo, luego fuimos a las canchas a jugar basket, hoy vino poste, por eso" },
    { autor: "Isaias", mes: "Febrero", fecha: "26 de Febrero", especial: false, texto: "salimos a hablar a las canchas" },
    { autor: "Isaias", mes: "Febrero", fecha: "27 de Febrero", especial: false, texto: "jugamos un rato fut y después cada quien con sus amigos" },
    { autor: "Isaias", mes: "Febrero", fecha: "28 de Febrero", especial: false, texto: "no nos vimos" },
    { autor: "Isaias", mes: "Marzo", fecha: "01 de marzo", especial: false, texto: "Nos vimos tarde, fui a almorzar tortillas de harina a su casa, y en la tarde noche jugamos fut con sus sobrinos. Hoy nos empezamos a decir \"bolita\" de apodo, porque yo escuché mal el \"hoy no me dijiste bonita\"" },
    { autor: "Isaias", mes: "Marzo", fecha: "02 de marzo", especial: false, texto: "salimos a las canchas y cenamos crepas en su casa" },
    { autor: "Isaias", mes: "Marzo", fecha: "03 de marzo", especial: false, texto: "No nos vimos" },
    { autor: "Isaias", mes: "Marzo", fecha: "04 de Marzo", especial: false, texto: "hoy venimos donas, luego fuimos a jugar basket a las canchas con sus amigos, en la noche cenamos hamburguesas de Villa vergüenza" },
    { autor: "Isaias", mes: "Marzo", fecha: "05 de Marzo", especial: false, texto: "salimos a las canchas, nos acompañó Montse, en la noche, fuimos a jugar juegos de mesa a la casa de Montse" },
    { autor: "Isaias", mes: "Marzo", fecha: "06 de Marzo", especial: false, texto: "salimos al parque a hablar y recordamos los tiempos de antes 🤣\nEn la noche fuimos a su casa, comimos ricitos y ella me ajá" },
    { autor: "Isaias", mes: "Marzo", fecha: "07 de Marzo", especial: false, texto: "no nos vimos (fue a la casa de Tania)" },
    { autor: "Isaias", mes: "Marzo", fecha: "08 de Marzo", especial: false, texto: "nos vimos un rato, estuvimos en Mc con su familia" },
    { autor: "Isaias", mes: "Marzo", fecha: "09 de Marzo", especial: false, texto: "jugamos a armar rompecabezas en casa de Montse, con Marcela y Ari" },
    { autor: "Isaias", mes: "Marzo", fecha: "10 de Marzo", especial: false, texto: "vendimos donas y salimos un rato al parque" },
    { autor: "Isaias", mes: "Marzo", fecha: "11 de Marzo", especial: false, texto: "jugamos en las canchas con sus amigos, vino Poste y cenamos una hamburguesa en su casa" },
    { autor: "Isaias", mes: "Marzo", fecha: "12 de Marzo", especial: false, texto: "no nos vimos" },
    { autor: "Isaias", mes: "Marzo", fecha: "13 de Marzo", especial: true, texto: "hoy fue nuestro tercer mes de aniversario, me regaló una carta , una flor y una cadena, todo muy lindo" },
    { autor: "Isaias", mes: "Marzo", fecha: "14 de Marzo", especial: false, texto: "nos fuimos en bus a Santa Fe, porque su hermana jugaba en Campo Marte" },
    { autor: "Isaias", mes: "Marzo", fecha: "15 de Marzo", especial: false, texto: "salimos a comer y a comprar ropa , por nuestro aniversario y ajá" },
    { autor: "Isaias", mes: "Marzo", fecha: "16 de Marzo", especial: false, texto: "no nos vimos" },
    { autor: "Isaias", mes: "Marzo", fecha: "17 de Marzo", especial: false, texto: "Le hicimos una fiesta sorpresa a mi novia, con los amigos de su colegia" },
    { autor: "Isaias", mes: "Marzo", fecha: "18 de Marzo", especial: false, texto: "celebramos el cumple de Samuel" },
    { autor: "Isaias", mes: "Marzo", fecha: "19 de Marzo", especial: true, texto: "celebramos el cumple de Ari, hoy fue un día bonito ❤️ mi niña hermosa cumplió 19 años, le llevé flores (girasoles, sus favoritos) y cenamos en su casa con sus amigos y familia" },
    { autor: "Isaias", mes: "Marzo", fecha: "20 de Marzo", especial: false, texto: "salimos a jugar basket y en la noche cenamos en su casa" },
    { autor: "Isaias", mes: "Marzo", fecha: "21 de Marzo", especial: false, texto: "salimos a las 7, mis papás me cancelaron la ida al volcán, me sentía un poco mal (sentimentalmente) lloré y Ari me consoló 🫶🏼" },
    { autor: "Isaias", mes: "Marzo", fecha: "22 de Marzo", especial: false, texto: "fuimos al volcán de Ipala con sus hermanas y estuvo muy genial" },
    { autor: "Isaias", mes: "Marzo", fecha: "23 de Marzo", especial: false, texto: "salimos al parque con su familia, y jugamos con los nenes" },
    { autor: "Isaias", mes: "Marzo", fecha: "24 de Marzo", especial: false, texto: "estuvimos en casa de Dei V por su cumple, luego la fui a dejar a su casa y hablamos un rato. Hoy me quiso -5% ☹️" },
    { autor: "Isaias", mes: "Marzo", fecha: "25 de Marzo", especial: false, texto: "comimos panqueques chiquititos rellenos de banano, y comimos hamburguesa" },
    { autor: "Isaias", mes: "Marzo", fecha: "26 de Marzo", especial: false, texto: "celebramos el cumple de la mamá en casa de Roxana, estuvo todo muy bonito" },
    { autor: "Isaias", mes: "Marzo", fecha: "27 de Marzo", especial: false, texto: "discutimos por llamada." },
    { autor: "Isaias", mes: "Marzo", fecha: "28 de Marzo", especial: false, texto: "nos vimos un rato después de la U, salimos con Dei V y Valentina" },
    { autor: "Isaias", mes: "Marzo", fecha: "29 de Marzo", especial: false, texto: "no nos vimos" },
    { autor: "Isaias", mes: "Marzo", fecha: "30 de Marzo", especial: false, texto: "salimos desde la mañana, en la tarde-noche fuimos a jugar a casa de Ari, juegos de mesa, comimos pizza y ajá" },
    { autor: "Isaias", mes: "Marzo", fecha: "31 de Marzo", especial: false, texto: "mi mamá la invitó a almorzar a la casa" },
    { autor: "Isaias", mes: "Abril", fecha: "01 de Abril", especial: false, texto: "fuimos al cine a ver Mario" },
    { autor: "Isaias", mes: "Abril", fecha: "02 de Abril", especial: false, texto: "no nos vimos, se fue al puerto" },
    { autor: "Isaias", mes: "Abril", fecha: "03 de Abril", especial: false, texto: "no nos vimos" },
    { autor: "Isaias", mes: "Abril", fecha: "04 de Abril", especial: false, texto: "no nos vimos" },
    { autor: "Isaias", mes: "Abril", fecha: "05 de Abril", especial: false, texto: "nos vimos un rato en su casa, ella regresó de monterrico" },
    { autor: "Isaias", mes: "Abril", fecha: "06 de Abril", especial: false, texto: "nos vimos en la tarde, estuvimos planificando el cumple de lupeca_2, con Montse y Dei V, luego en la noche cenamos en casa de Ari por el cumple de su tía (únicamente Ari y yo)" },
    { autor: "Isaias", mes: "Abril", fecha: "07 de Abril", especial: false, texto: "celebramos el cumple de lupeca_2 y le hicimos una sorpresa en su casa" },
    { autor: "Isaias", mes: "Abril", fecha: "08 de Abril", especial: false, texto: "salimos al parque a jugar con mis amigos y amigos de Ari, vino poste y comimos hamburguesa de Villa vergüenza" },
    { autor: "Isaias", mes: "Abril", fecha: "09 de Abril", especial: false, texto: "salimos a jugar basket y le hicimos una broma a Ari" },
    { autor: "Isaias", mes: "Abril", fecha: "10 de Abril", especial: false, texto: "salimos al parque con poste, Dei V, y Ari" },
    { autor: "Isaias", mes: "Abril", fecha: "11 de Abril", especial: false, texto: "fuimos a casa de Marcela a ver una película, hoy vine a las 6, andaba en la U" },
    { autor: "Isaias", mes: "Abril", fecha: "12 de Abril", especial: false, texto: "celebramos el cumple de mi papá, vino toda mi familia, mi novia, Dei V, primo y su novia" },
    { autor: "Isaias", mes: "Abril", fecha: "13 de Abril", especial: true, texto: "celebramos nuestro aniversario, pasamos un bonito momento a soñar, en el arco de su casa, fue una tarde muy linda, terminamos esa noche viendo las estrellas y solo yo alcancé a ver una estrella fugaz." },
    { autor: "Isaias", mes: "Abril", fecha: "14 de Abril", especial: false, texto: "estuvimos un rato en mi casa con mi familia, mis tías de Izabal, y mis papás, cenamos en mi casa" },
    { autor: "Isaias", mes: "Abril", fecha: "15 de Abril", especial: false, texto: "fui al gimnasio, Ari no pida disque salir y vino poste, Ari llegó a las 7 a las canchas" },
    { autor: "Isaias", mes: "Abril", fecha: "16 de Abril", especial: false, texto: "pasamos todo el día juntos, fuimos a la universidad, al taller del papá, a zona 1 a comprar joyas, al partido del papá, y por último pasamos cenando en Campero, estuvo rico muy lindo" },
    { autor: "Isaias", mes: "Abril", fecha: "17 de Abril", especial: false, texto: "hoy fuimos al gimnasio con Ari, Dei V y Marcela, y en la tarde salimos a jugar basket, y terminamos cenando en su casa" },
    { autor: "Isaias", mes: "Abril", fecha: "18 de Abril", especial: false, texto: "cenamos en mi casa tamal, viendo el partido de Lakers vs Houston, luego ajá, y nos fuimos a su casa a terminar de ver el partido" },
    { autor: "Isaias", mes: "Abril", fecha: "19 de Abril", especial: false, texto: "no nos vimos" },
    { autor: "Isaias", mes: "Abril", fecha: "20 de Abril", especial: false, texto: "fuimos a cenar a la casa de su hermana Roxana, comimos mixtas" },
    { autor: "Isaias", mes: "Abril", fecha: "21 de Abril", especial: false, texto: "estuve en casa de Javier y Roxana, no la pude acompañar a la U, pero en la noche fuimos a ver el partido (semifinal) del papá y javier, lastimosamente perdieron." },
    { autor: "Isaias", mes: "Abril", fecha: "22 de Abril", especial: false, texto: "salimos al parque con José poste y Porsche, jugamos basket, luego me tuve que entrar porque tenía mi examen de inglés, también Ari me contó que \"negrito\" se había disculpado con ella" },
    { autor: "Isaias", mes: "Abril", fecha: "23 de Abril", especial: false, texto: "fuimos a cenar a la casa de Roxana, carne asada" },
    { autor: "Isaias", mes: "Abril", fecha: "24 de Abril", especial: false, texto: "comimos pizza en casa de Ari, vimos el partido de Lakers vs Houston" },
    { autor: "Isaias", mes: "Abril", fecha: "25 de Abril", especial: false, texto: "salimos con mis amigos, fuimos a Taco por el cumple de Dayana, Ari nos acompañó" },
    { autor: "Isaias", mes: "Abril", fecha: "26 de Abril", especial: false, texto: "estuve en casa de Ari desde las 12 del mediodía. Comimos ceviche y en la tarde noche comimos estofado, también cenamos pastel. Se reunió toda su familia. Javier, Roxana y sus hijos, la mamá de javier y gordo, gorda y todos." },
    { autor: "Isaias", mes: "Abril", fecha: "27 de Abril", especial: false, texto: "salimos al parque a jugar basket, con negrito, Montse, Dei V y Ari" },
    { autor: "Isaias", mes: "Abril", fecha: "28 de Abril", especial: false, texto: "Ari se fue a cortar el pelo, luego fuimos a su casa a probarnos la ropa que íbamos a usar para el volcán" },
    { autor: "Isaias", mes: "Abril", fecha: "29 de Abril", especial: false, texto: "salimos a jugar basket, con poste, Sofía, Dei V, porche y Ari" },
    { autor: "Isaias", mes: "Abril", fecha: "30 de Abril", especial: false, texto: "fuimos a ver el partido del papá" },
    { autor: "Isaias", mes: "Mayo", fecha: "01 de mayo", especial: false, texto: "no nos vimos (fue día del trabajador) cada quien salió con su familia" },
    { autor: "Isaias", mes: "Mayo", fecha: "02 de mayo", especial: false, texto: "nos vimos en la tarde, salió Xavi, Ari, Valentina y Dei V. Fuimos a EcoCentro a cómodas las cosas del volcán" },
    { autor: "Isaias", mes: "Mayo", fecha: "03 de mayo", especial: false, texto: "fuimos al volcán de Acatenango, en la mañana del domingo, estuvo todo muy bonito" },
    { autor: "Isaias", mes: "Mayo", fecha: "04 de mayo", especial: false, texto: "estuvimos en su casa, Ari cocinó fideos con carne molida, estuvo muy rico todo" },
    { autor: "Isaias", mes: "Mayo", fecha: "05 de mayo", especial: false, texto: "hoy jugaron los Lakers vs Thunder y lo vimos en casa de Ari" },
    { autor: "Isaias", mes: "Mayo", fecha: "06 de mayo", especial: false, texto: "salimos al parque, con poste y más amigos. Jugamos basket" },
    { autor: "Isaias", mes: "Mayo", fecha: "07 de mayo", especial: false, texto: "acompañé a Ari a la Universidad, luego fuimos al taller del papá y comimos shucos en cuatro grados norte, en la tarde noche vimos el partido de Lakers y comimos helados" },
    { autor: "Isaias", mes: "Mayo", fecha: "08 de mayo", especial: false, texto: "salimos al parque con el nene (hijo de la gorda) y jugamos" },
    { autor: "Isaias", mes: "Mayo", fecha: "09 de mayo", especial: false, texto: "nos vimos un rato en la tarde, yo no fui a la U, y Ari tuvo que ir a un cumpleaños" },
    { autor: "Isaias", mes: "Mayo", fecha: "10 de mayo", especial: false, texto: "no nos vimos" },
    { autor: "Isaias", mes: "Mayo", fecha: "11 de mayo", especial: false, texto: "salimos al parque con mis amigos, Ari llegó más tarde a las canchas, luego cenamos en su casa y vimos el último partido de Lakers de playoffs, perdió contra Thunder" },
    { autor: "Isaias", mes: "Mayo", fecha: "12 de mayo", especial: false, texto: "la fui a traer a la U, fuimos a comer a subway y ajá (súper rico) 💀 tomó 💊" },
    { autor: "Isaias", mes: "Mayo", fecha: "13 de mayo", especial: true, texto: "fue nuestro aniversario, salimos a jugar con los amigos, basket, a las canchas" },
    { autor: "Isaias", mes: "Mayo", fecha: "14 de mayo", especial: false, texto: "no nos vimos" },
    { autor: "Isaias", mes: "Mayo", fecha: "15 de mayo", especial: false, texto: "salimos a las canchas, no jugamos, solo estuvimos hablando con lucia, Marcela y mi novia, cenamos en casa de Ari" },
    { autor: "Isaias", mes: "Mayo", fecha: "16 de mayo", especial: false, texto: "no nos vimos" },
    { autor: "Isaias", mes: "Mayo", fecha: "17 de mayo", especial: false, texto: "fuimos a Antigua con mi familia, en la noche terminamos viendo una película en mi casa, cenamos en mi casa" },
    { autor: "Isaias", mes: "Mayo", fecha: "18 de mayo", especial: false, texto: "estuvimos en su casa y en la noche fuimos al gym, hoy le bajó" },
    { autor: "Isaias", mes: "Mayo", fecha: "19 de mayo", especial: false, texto: "estuvimos en su casa, comimos una pizza y vimos Venom\nThe last dance" },
    { autor: "Isaias", mes: "Mayo", fecha: "20 de mayo", especial: false, texto: "discutimos fuerte." },
    { autor: "Isaias", mes: "Mayo", fecha: "21 de mayo", especial: false, texto: "Estuvimos en su casa y vimos una película, (venom)" },
    { autor: "Isaias", mes: "Mayo", fecha: "22 de mayo", especial: false, texto: "me acompañó a cortarme el pelo y estuvimos en su casa" },
    { autor: "Isaias", mes: "Mayo", fecha: "23 de mayo", especial: false, texto: "fuimos a ver el partido de su hermana, en el campo Marte" },
    { autor: "Isaias", mes: "Mayo", fecha: "24 de mayo", especial: false, texto: "fuimos a la iglesia, fue el aniversario, vino a almorzar a mi casa y en la noche pasamos cenando en Barista" },
    { autor: "Isaias", mes: "Mayo", fecha: "25 de mayo", especial: false, texto: "estuvimos en mi casa, y en la noche fuimos un rato al parque" },
    { autor: "Isaias", mes: "Mayo", fecha: "26 de mayo", especial: false, texto: "estuvimos con Ari, Dei V, Montse, lupeca y Marcela. Comimos pizza" },
    { autor: "Isaias", mes: "Mayo", fecha: "27 de mayo", especial: false, texto: "estuvimos en las canchas, vino Poste y jugamos con sus amigos, en la noche nos dejaron plantados, los culeros" },
    { autor: "Isaias", mes: "Mayo", fecha: "28 de mayo", especial: false, texto: "fuimos al parque a jugar basket con Sofía y Lucia, cenamos en mi casa" },
    { autor: "Isaias", mes: "Mayo", fecha: "29 de mayo", especial: false, texto: "me entré temprano porque tuve presentación de proyecto" },
    { autor: "Isaias", mes: "Mayo", fecha: "30 de mayo", especial: false, texto: "estuvimos en mi casa viendo la final de conferencia de la NBA" },
    { autor: "Isaias", mes: "Mayo", fecha: "31 de mayo", especial: false, texto: "estuvimos todo el día en su casa, almorzamos gallina, estuvo muy rico" },
    { autor: "Isaias", mes: "Junio", fecha: "01 de Junio", especial: false, texto: "no nos vimos" },
    { autor: "Isaias", mes: "Junio", fecha: "02 de Junio", especial: false, texto: "salimos a jugar con todos sus amigos, al parque, basket con Poste, Montse, etc. En la noche cenamos en su casa" },
    { autor: "Isaias", mes: "Junio", fecha: "03 de Junio", especial: false, texto: "no nos vimos" },
    { autor: "Isaias", mes: "Junio", fecha: "04 de Junio", especial: false, texto: "jugamos basket en las canchas con poste y su tía, Sofía y Porsche" },
    { autor: "Isaias", mes: "Junio", fecha: "05 de Junio", especial: false, texto: "entrenamos en mi casa gym en la mañana y en la noche estuvimos en su casa viendo el partido de Spurs vs Knicks" },
    { autor: "Isaias", mes: "Junio", fecha: "06 de Junio", especial: false, texto: "salimos con sus amigos, vino Valentina y poste, nos quedamos hasta las 10 de la noche. Hoy vino Mafer" },
    { autor: "Isaias", mes: "Junio", fecha: "07 de Junio", especial: false, texto: "Salimos al parque a jugar con sus amigos \"literal, todos sus amigos\" ya salió Mafer y jugamos basket y fut" },
    { autor: "Isaias", mes: "Junio", fecha: "08 de Junio", especial: false, texto: "estuvimos en casa de Montse por una actividad que hicieron, Montse hizo pastel" },
    { autor: "Isaias", mes: "Junio", fecha: "09 de Junio", especial: false, texto: "salimos al parque con sus amigos, a jugar basket y cenamos en su casa, con su familia" },
    { autor: "Isaias", mes: "Junio", fecha: "10 de Junio", especial: false, texto: "no nos vimos" }
];

document.addEventListener('DOMContentLoaded', function() {
    
    // Fuerza la sincronización de la base de datos histórica fiel de Isaías,
    // descartando cualquier dato viejo o de prueba guardado previamente en el navegador
    const VERSION_BITACORA = "v2-2025-12-17_a_2026-06-10";
    let memoriaCompartida;

    if (localStorage.getItem('bitacora_version') !== VERSION_BITACORA) {
        memoriaCompartida = [...baseHistorica];
        localStorage.setItem('bitacora_recuerdos', JSON.stringify(memoriaCompartida));
        localStorage.setItem('bitacora_version', VERSION_BITACORA);
    } else {
        memoriaCompartida = JSON.parse(localStorage.getItem('bitacora_recuerdos'));
        if (!memoriaCompartida || memoriaCompartida.length === 0) {
            memoriaCompartida = [...baseHistorica];
            localStorage.setItem('bitacora_recuerdos', JSON.stringify(memoriaCompartida));
        }
    }

    const searchBar = document.getElementById('search-bar');
    const timelineAri = document.getElementById('timeline-ari');
    const timelineIsaias = document.getElementById('timeline-isaias');
    const noResults = document.getElementById('no-results');

    const totalDiasCtx = document.getElementById('total-dias');
    const totalAriCtx = document.getElementById('total-ari');
    const totalIsaiasCtx = document.getElementById('total-isaias');

    const formBox = document.getElementById('form-container');
    const toggleFormBtn = document.getElementById('btn-toggle-form');
    const cancelFormBtn = document.getElementById('btn-cancelar');

    let filtroActual = "TODOS";

    function guardarEnStorage() {
        localStorage.setItem('bitacora_recuerdos', JSON.stringify(memoriaCompartida));
    }

    function calcularDiasNoviazgo() {
        const fechaInicio = new Date('2025-12-13T09:45:00');
        const fechaActual = new Date();
        const diferenciaMili = fechaActual - fechaInicio;
        const diasTranscurridos = Math.floor(diferenciaMili / (1000 * 60 * 60 * 24));
        return diasTranscurridos > 0 ? diasTranscurridos : 0;
    }

    function actualizarDashboard() {
        totalDiasCtx.textContent = calcularDiasNoviazgo();
        
        let conteoAri = memoriaCompartida.filter(r => r.autor === 'Ari').length;
        let conteoIsaias = memoriaCompartida.filter(r => r.autor === 'Isaias').length;
        
        totalAriCtx.textContent = conteoAri;
        totalIsaiasCtx.textContent = conteoIsaias;
    }

    function aplicarFiltrosYBusqueda() {
        const textoBusqueda = searchBar.value.toLowerCase().trim();

        let registrosFiltrados = memoriaCompartida.map((item, index) => ({ ...item, originalIndex: index }));

        if (filtroActual === "ESPECIAL") {
            registrosFiltrados = registrosFiltrados.filter(r => r.especial === true);
        } else if (filtroActual !== "TODOS") {
            registrosFiltrados = registrosFiltrados.filter(r => r.mes.toLowerCase() === filtroActual.toLowerCase());
        }

        if (textoBusqueda) {
            registrosFiltrados = registrosFiltrados.filter(r => r.fecha.toLowerCase().includes(textoBusqueda) || r.texto.toLowerCase().includes(textoBusqueda));
        }

        renderizarListas(registrosFiltrados);
    }

    function renderizarListas(listaFiltrada) {
        timelineAri.innerHTML = "";
        timelineIsaias.innerHTML = "";

        if (listaFiltrada.length === 0) {
            noResults.classList.remove('hidden');
            return;
        }
        noResults.classList.add('hidden');

        listaFiltrada.forEach(recuerdo => {
            const card = document.createElement('div');
            
            let claseEstilo = recuerdo.autor === 'Ari' ? 'card-ari' : 'card-isaias';
            if (recuerdo.especial) {
                claseEstilo += recuerdo.autor === 'Ari' ? ' border-especial-ari' : ' border-especial-isaias';
            }

            card.className = `${claseEstilo} p-4 rounded-2xl relative card-appear transition-all`;
            
            card.innerHTML = `
                <div class="flex justify-between items-start gap-2 mb-1.5">
                    <span class="text-[11px] font-bold text-gray-400 tracking-wide">${recuerdo.fecha} de ${recuerdo.mes}</span>
                    ${recuerdo.especial ? '<span class="text-xs shrink-0 select-none">⭐ Día Especial</span>' : ''}
                </div>
                <p class="text-xs text-gray-600 leading-relaxed font-normal whitespace-pre-line">${recuerdo.texto}</p>
                
                <div class="flex gap-3 justify-end mt-3 pt-2 border-t border-gray-50 text-[10px] font-bold tracking-wider uppercase">
                    <button onclick="editarRecuerdo(${recuerdo.originalIndex})" class="text-rose-400 hover:text-rose-600 transition-all">✏️ Editar</button>
                    <button onclick="eliminarRecuerdo(${recuerdo.originalIndex})" class="text-gray-300 hover:text-red-400 transition-all">Eliminar</button>
                </div>
            `;

            if (recuerdo.autor === 'Ari') {
                timelineAri.appendChild(card);
            } else {
                timelineIsaias.appendChild(card);
            }
        });

        if (timelineAri.children.length === 0) {
            timelineAri.innerHTML = `<p class="text-center py-4 text-[11px] text-gray-300 italic">Sin recuerdos registrados por Ari aquí</p>`;
        }
        if (timelineIsaias.children.length === 0) {
            timelineIsaias.innerHTML = `<p class="text-center py-4 text-[11px] text-gray-300 italic">Sin recuerdos registrados por Isaías aquí</p>`;
        }
    }

    searchBar.addEventListener('input', aplicarFiltrosYBusqueda);

    document.getElementById('months-filter').addEventListener('click', function(e) {
        if (!e.target.classList.contains('mes-btn') && !e.target.classList.contains('especial-filter-btn')) return;

        document.querySelectorAll('.mes-btn, .especial-filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        filtroActual = e.target.getAttribute('data-mes');
        aplicarFiltrosYBusqueda();
    });

    toggleFormBtn.addEventListener('click', function() {
        document.getElementById('bitacora-form').reset();
        document.getElementById('edit-index').value = "";
        document.getElementById('form-title').textContent = "📝 Guardar lo vivido hoy";
        document.getElementById('btn-submit-form').textContent = "Guardar Recuerdo ✨";
        formBox.classList.toggle('hidden');
        if (!formBox.classList.contains('hidden')) {
            formBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    cancelFormBtn.addEventListener('click', function() {
        formBox.classList.add('hidden');
    });

    document.getElementById('bitacora-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const editIndex = document.getElementById('edit-index').value;
        const autorSeleccionado = document.querySelector('input[name="autor"]:checked').value;
        
        const registro = {
            autor: autorSeleccionado,
            mes: document.getElementById('input-mes').value,
            fecha: document.getElementById('input-fecha').value,
            especial: document.getElementById('input-especial').checked,
            texto: document.getElementById('input-texto').value
        };

        if (editIndex !== "") {
            memoriaCompartida[parseInt(editIndex)] = registro;
        } else {
            memoriaCompartida.push(registro);
        }

        guardarEnStorage();
        actualizarDashboard();
        aplicarFiltrosYBusqueda();
        this.reset();
        formBox.classList.add('hidden');
    });

    window.editarRecuerdo = function(index) {
        const item = memoriaCompartida[index];
        document.getElementById('edit-index').value = index;
        
        if (item.autor === 'Ari') {
            document.getElementById('autor-ari').checked = true;
        } else {
            document.getElementById('autor-isaias').checked = true;
        }

        document.getElementById('input-mes').value = item.mes;
        document.getElementById('input-fecha').value = item.fecha;
        document.getElementById('input-especial').checked = item.especial;
        document.getElementById('input-texto').value = item.texto;

        document.getElementById('form-title').textContent = "✏️ Modificar este recuerdo";
        document.getElementById('btn-submit-form').textContent = "Actualizar Registro 💾";
        
        formBox.classList.remove('hidden');
        formBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    window.eliminarRecuerdo = function(index) {
        if (confirm("¿Seguro que quieres borrar este lindo recuerdo?🥺")) {
            memoriaCompartida.splice(index, 1);
            guardarEnStorage();
            actualizarDashboard();
            aplicarFiltrosYBusqueda();
        }
    };

    actualizarDashboard();
    aplicarFiltrosYBusqueda();
});