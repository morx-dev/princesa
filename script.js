// Base de datos histórica original intacta
const baseHistorica = [
    { autor: "Isaias", mes: "Diciembre", fecha: "17 de Diciembre", especial: false, texto: "Vino poste y fuimos a comprar las promociones de Villa Burguer y fuimos a la posada del sector 5, llegó poca gente e hicimos la fila para la comida como 5 veces." },
    { autor: "Isaias", mes: "Diciembre", fecha: "18 de Diciembre", especial: false, texto: "Salí tarde porque estaba trabajando pero fuimos a la posada del sector 8, dieron de comida pan con frijol y té de piña." },
    { autor: "Isaias", mes: "Diciembre", fecha: "19 de Diciembre", especial: false, texto: "Salí del trabajo temprano y llegué a su casa en la tarde, tipo 3 almorzamos juntos. Fui a comprar una pizza y McDonald's para comer, fue muy bonito. En la noche le hice una broma muy pesada (me fui sin acompañarla a su casa) jaja se enojó feo, pero obviamente la terminé acompañando jajaj." },
    { autor: "Isaias", mes: "Diciembre", fecha: "20 de Diciembre", especial: false, texto: "Este día no nos vimos 😭 ella fue a una boda (de seguro vio a muchos hombres) jajaja, yo fui a la posada de sector 7 con Dei V y Xavi." },
    { autor: "Isaias", mes: "Diciembre", fecha: "21 de Diciembre", especial: false, texto: "Su mejor amiga vino de Estados Unidos (la mantequilla) salimos y estuvimos molestando, disque me quiere quitar a mi novia." },
    { autor: "Isaias", mes: "Diciembre", fecha: "22 de Diciembre", especial: false, texto: "Le mostré mi nuevo corte de pelo, salí a jugar con sus sobrinitos y vimos la final de fútbol 4:20 vs Tunquitos, ganó tunquitos, y yo gané la apuesta 😌." },
    { autor: "Isaias", mes: "Diciembre", fecha: "23 de Diciembre", especial: false, texto: "Cada quien salió con sus amigos, yo fui a jugar basket y ella jugó un rato fútbol. Me hizo show porque me puse la camisa que a ella le gusta." },
    { autor: "Isaias", mes: "Diciembre", fecha: "24 de Diciembre", especial: false, texto: "Pasamos juntos la noche, ella vino a cenar a mi casa, y luego a las 12 fui a su casa para abrir los regalos 🎄." },
    { autor: "Isaias", mes: "Diciembre", fecha: "25 de Diciembre", especial: false, texto: "Cada quien la pasó con sus amigos, ambos estuvimos en las canchas y nos saludamos." },
    { autor: "Isaias", mes: "Diciembre", fecha: "26 de Diciembre", especial: false, texto: "Llegué al arco de su casa un rato, luego subimos al parque y estuvimos jugando volley, también nos comimos un pan de banano." },
    { autor: "Isaias", mes: "Diciembre", fecha: "27 de Diciembre", especial: false, texto: "Salimos con sus sobrinitos un rato, yo fui a jugar futbol con negrito y en la noche cenamos en su casa (frijolitos) sus hermanas me hicieron bullying por no llevar lentes 🤓." },
    { autor: "Isaias", mes: "Diciembre", fecha: "28 de Diciembre", especial: false, texto: "Fuimos con su familia a Oakland a cambiar los regalos del 24 y en la noche pasamos cenando Campero 🍗." },
    { autor: "Isaias", mes: "Diciembre", fecha: "29 de Diciembre", especial: false, texto: "Salimos con su sobrinito (hijo de la Gorda) y luego fuimos a las canchas." },
    { autor: "Isaias", mes: "Diciembre", fecha: "30 de Diciembre", especial: false, texto: "No nos vimos (me fui de viaje) ✈️." },
    { autor: "Isaias", mes: "Diciembre", fecha: "31 de Diciembre", especial: false, texto: "No nos vimos (me fui de viaje) ✈️." },
    { autor: "Isaias", mes: "Enero", fecha: "01 de Enero", especial: false, texto: "Regresé del viaje, y salimos en la noche, ¡fue bonito verla de nuevo! 😍" },
    { autor: "Isaias", mes: "Enero", fecha: "02 de Enero", especial: false, texto: "Fui a almorzar y a cenar a su casa, estuvo bonito porque convivimos con sus hermanas y sus sobrinos, fuimos a comprar helados a Villa Hermosa 🍦." },
    { autor: "Isaias", mes: "Enero", fecha: "03 de Enero", especial: false, texto: "Ella fue a la casa de su tía en Santa Fe, yo salí con mis amigos y en la noche nos juntamos un ratito." },
    { autor: "Isaias", mes: "Enero", fecha: "04 de Enero", especial: false, texto: "Fuimos a almorzar caldo de gallina a la casa de su hermana Roxana, estuvimos ahí toda la tarde y pasé tiempo especial con ella y su familia." },
    { autor: "Isaias", mes: "Enero", fecha: "05 de Enero", especial: false, texto: "Salimos a jugar futbol con sus amigos ⚽." },
    { autor: "Isaias", mes: "Enero", fecha: "06 de Enero", especial: false, texto: "Por accidente no recordé que nos íbamos a hacer mascarillas y fui al gym con mi jefe, Ari se enojó, pero en la noche la fui a ver y hablamos jaja 😷." },
    { autor: "Isaias", mes: "Enero", fecha: "07 de Enero", especial: true, texto: "Celebramos el cumpleaños de Poste, llegaron varios amigos. ¡Este día me dijo en persona “Te amo mi amor” por primera vez! ❤️." },
    { autor: "Isaias", mes: "Enero", fecha: "08 de Enero", especial: false, texto: "Nos comimos nuestras donas and fuimos a cenar a su casa 🍩." },
    { autor: "Isaias", mes: "Enero", fecha: "09 de Enero", especial: false, texto: "No nos vimos." },
    { autor: "Isaias", mes: "Enero", fecha: "10 de Enero", especial: false, texto: "Fuimos en la mañana a Walmart a comprar los ingredientes para el pastel de su papá, por su cumpleaños. En la tarde me fui al volcán 🌋." },
    { autor: "Isaias", mes: "Enero", fecha: "11 de Enero", especial: false, texto: "Regresamos del Volcán tipo 10, te fui a saludar a tu casa en la mañana, pasamos todo el día juntos." },
    { autor: "Isaias", mes: "Enero", fecha: "12 de Enero", especial: false, texto: "Fue el primer día de Universidad de Ari 🎓. Salimos ya tarde, y fuimos a cenar a su casa." },
    { autor: "Isaias", mes: "Enero", fecha: "13 de Enero", especial: true, texto: "¡NUESTRO PRIMER ANIVERSARIO! Cumplimos un mes ❤️. Hoy no trabajé, y la fui a traer a la Universidad." },
    { autor: "Isaias", mes: "Enero", fecha: "14 de Enero", especial: false, texto: "Fui a jugar basket con mis amigos y en la noche nos comimos una promoción de torito de Villa Burguer." },
    { autor: "Isaias", mes: "Enero", fecha: "15 de Enero", especial: false, texto: "Nos vimos un rato al medio día cuando regresaba de la Universidad, en la noche cada quien salió con sus amigos." },
    { autor: "Isaias", mes: "Enero", fecha: "16 de Enero", especial: false, texto: "Nos vimos un rato en las canchas, vinieron sus amigas y en la noche me fui al volcán de Acatenango." },
    { autor: "Isaias", mes: "Enero", fecha: "17 de Enero", especial: false, texto: "Salimos en la tarde con ella y sus amigas, en la noche comimos pizza y shucos para despedir a Abdul 🌭." },
    { autor: "Isaias", mes: "Enero", fecha: "18 de Enero", especial: false, texto: "Cenamos atún con mayonesa en su casa y estuvimos juntos en la tarde." },
    { autor: "Isaias", mes: "Enero", fecha: "19 de Enero", especial: false, texto: "Salimos en la noche y nos comimos un shuco. Este día mi niña hermosa me preparó gelatina con leche 🥹." },
    { autor: "Isaias", mes: "Enero", fecha: "20 de Enero", especial: false, texto: "Hoy fue complicado jaja, discutí con Montse. Ari y yo fuimos al sector 12 a traer el dinero de las donas y ella me tranquilizó porque iba muy tenso. Se puso a llorar, es la primera vez que la veo llorar en persona." },
    { autor: "Isaias", mes: "Enero", fecha: "21 de Enero", especial: false, texto: "No nos vimos, ella fue al cumple de su tía y yo salí tarde del trabajo (8pm)." },
    { autor: "Isaias", mes: "Enero", fecha: "22 de Enero", especial: false, texto: "Fuimos a jugar futbol con sus amigos y en la noche cenamos panes con salchicha en su casa." },
    { autor: "Isaias", mes: "Enero", fecha: "23 de Enero", especial: false, texto: "Fuimos a jugar futbol y tomamos café en su casa ☕." },
    { autor: "Isaias", mes: "Enero", fecha: "24 de Enero", especial: false, texto: "Fuimos a Tribu Terrace en Alotenango a almorzar. En la noche celebramos el cumpleaños de mi hermano Axel." },
    { autor: "Isaias", mes: "Enero", fecha: "25 de Enero", especial: false, texto: "Almorzamos caldo de res en su casa, y en la noche fuimos al EcoCentro con su familia a comprar. Ari andaba celosa 🤭." },
    { autor: "Isaias", mes: "Enero", fecha: "26 de Enero", especial: false, texto: "Cada quien salió con sus amigos. Yo salí a hablar con Dei V, al final del día nos vimos un rato en las canchas." },
    { autor: "Isaias", mes: "Enero", fecha: "27 de Enero", especial: false, texto: "Celebramos el cumpleaños de Cano. Comimos pizza y vimos una película en mi casa 🎬." },
    { autor: "Isaias", mes: "Enero", fecha: "28 de Enero", especial: false, texto: "Salimos con José poste y comimos donas, seguimos viendo la película de Transformers." },
    { autor: "Isaias", mes: "Enero", fecha: "29 de Enero", especial: false, texto: "Salimos a las canchas a platicar, en la noche nos comimos un shuco con Montse y Marcela." },
    { autor: "Isaias", mes: "Enero", fecha: "30 de Enero", especial: false, texto: "Comimos Villa Burguer in la noche y terminamos de ver Transformers." },
    { autor: "Isaias", mes: "Enero", fecha: "31 de Enero", especial: false, texto: "Cenamos en mi casa panes de la Shell mientras veíamos las fotos de la boda de mi hermano 📸." },
    { autor: "Isaias", mes: "Febrero", fecha: "01 de Febrero", especial: false, texto: "Vimos una parte de la película de '13 horas' y comimos crepas hechas por Ari y Roxana." },
    { autor: "Isaias", mes: "Febrero", fecha: "02 de Febrero", especial: false, texto: "No nos vimos." },
    { autor: "Isaias", mes: "Febrero", fecha: "03 de Febrero", especial: false, texto: "Yo salí a las 6:30 de trabajar, jugamos futbol un rato en el parque y luego fuimos a cenar a su casa." },
    { autor: "Isaias", mes: "Febrero", fecha: "04 de Febrero", especial: false, texto: "Jugamos basket y volley en las canchas, después fuimos a su casa a comer Villa Burguer." },
    { autor: "Isaias", mes: "Febrero", fecha: "05 de Febrero", especial: false, texto: "Solo nos vimos un rato en la noche, ya que yo salí muy tarde de trabajar." },
    { autor: "Isaias", mes: "Febrero", fecha: "06 de Febrero", especial: false, texto: "Jugamos futbol y basket en la noche, ella estuvo algo molesta y estresada por discusiones familiares." },
    { autor: "Isaias", mes: "Febrero", fecha: "07 de Febrero", especial: false, texto: "Nos vimos un rato en la noche, tuve Universidad, estuvimos aprendiendo inglés en su casa 🇺🇸." },
    { autor: "Isaias", mes: "Febrero", fecha: "08 de Febrero", especial: false, texto: "Fuimos a las piscinas por el cumple de Santi 🏊‍♂️, la pasamos muy bonito con toda su familia." },
    { autor: "Isaias", mes: "Febrero", fecha: "09 de Febrero", especial: false, texto: "Salimos a molestar con mis amigos in la noche, estábamos en mi sector (sector 12)." },
    { autor: "Isaias", mes: "Febrero", fecha: "10 de Febrero", especial: false, texto: "Ari salió en la tarde a jugar fut con sus amigos, yo salí con mis amigos, estuvimos un rato juntos." },
    { autor: "Isaias", mes: "Febrero", fecha: "11 de Febrero", especial: false, texto: "Llegué a su casa como a las 3, en la tarde-noche salimos a vender donas." },
    { autor: "Isaias", mes: "Febrero", fecha: "12 de Febrero", especial: false, texto: "Cenamos chilaquiles en su casa y estábamos viendo la película de Venom 🍿." },
    { autor: "Isaias", mes: "Febrero", fecha: "13 de Febrero", especial: true, texto: "¡SEGUNDO MES DE ANIVERSARIO! ❤️ Fuimos a comer a McDonald's y planeamos hacer nuestro propio negocio. Hoy se miraba extremadamente guapa 😍." },
    { autor: "Isaias", mes: "Febrero", fecha: "14 de Febrero", especial: true, texto: "¡Nuestro primer San Valentín! 💘 Yo la pasé en la universidad, Ari fue a una boda con su familia. Nos pudimos ver hasta en la noche." },
    { autor: "Isaias", mes: "Febrero", fecha: "15 de Febrero", especial: false, texto: "Salimos en la tarde-noche y fuimos a comer tortillas de harina a Villa Hermosa." },
    { autor: "Isaias", mes: "Febrero", fecha: "16 de Febrero", especial: false, texto: "No nos vimos, ella salió con su familia, y yo salí tipo 7:30 al parque a hacer tiros de basket." },
    { autor: "Isaias", mes: "Febrero", fecha: "17 de Febrero", especial: false, texto: "Yo salí tarde de trabajar y nos vimos un rato en la noche, comimos hamburguesa en su casa." },
    { autor: "Isaias", mes: "Febrero", fecha: "18 de Febrero", especial: false, texto: "Salí tarde de trabajar, pero jugamos basket un rato en la noche, luego las acompañé a misa." },
    { autor: "Isaias", mes: "Febrero", fecha: "19 de Febrero", especial: false, texto: "Salimos un rato a jugar basket, pero me tuve que entrar temprano porque tuve que ir a trabajar." },
    { autor: "Isaias", mes: "Febrero", fecha: "20 de Febrero", especial: false, texto: "Salimos a jugar basket y luego fuimos a su casa a cenar 🍽️." },
    { autor: "Isaias", mes: "Febrero", fecha: "21 de Febrero", especial: false, texto: "Salimos un rato a las canchas, yo regresé tarde de la U." },
    { autor: "Isaias", mes: "Febrero", fecha: "22 de Febrero", especial: false, texto: "Discutimos 😣." },
    { autor: "Isaias", mes: "Febrero", fecha: "23 de Febrero", especial: false, texto: "Nos perdonamos y cenamos frijolitos en su casa, además vimos un rato El Hombre Araña 3 🕸️." },
    { autor: "Isaias", mes: "Febrero", fecha: "24 de Febrero", especial: false, texto: "Salimos a comer donas y empezamos a ver nuestra primera serie juntos: 'You' 📺." },
    { autor: "Isaias", mes: "Febrero", fecha: "25 de Febrero", especial: false, texto: "Fuimos a EcoCentro con sus amigos a comer algo, luego fuimos a las canchas a jugar basket." },
    { autor: "Isaias", mes: "Febrero", fecha: "26 de Febrero", especial: false, texto: "Salimos a hablar a las canchas." },
    { autor: "Isaias", mes: "Febrero", fecha: "27 de Febrero", especial: false, texto: "Jugamos un rato fut y después cada quien con sus amigos." },
    { autor: "Isaias", mes: "Febrero", fecha: "28 de Febrero", especial: false, texto: "No nos vimos." },
    { autor: "Isaias", mes: "Marzo", fecha: "01 de Marzo", especial: true, texto: "Nos vimos tarde. Hoy nos empezamos a decir “bolita” de apodo, porque yo escuché mal el “hoy no me dijiste bonita” 🥹🥎." },
    { autor: "Isaias", mes: "Marzo", fecha: "02 de Marzo", especial: false, texto: "Salimos a las canchas y cenamos crepas en su casa." },
    { autor: "Isaias", mes: "Marzo", fecha: "03 de Marzo", especial: false, texto: "No nos vimos." },
    { autor: "Isaias", mes: "Marzo", fecha: "04 de Marzo", especial: false, texto: "Hoy vendimos donas, luego fuimos a jugar basket a las canchas con sus amigos." },
    { autor: "Isaias", mes: "Marzo", fecha: "05 de Marzo", especial: false, texto: "Salimos a las canchas, nos acompañó Montse, en la noche fuimos a jugar juegos de mesa." },
    { autor: "Isaias", mes: "Marzo", fecha: "06 de Marzo", especial: false, texto: "Salimos al parque a hablar y recordamos los tiempos de antes 🤣." },
    { autor: "Isaias", mes: "Marzo", fecha: "07 de Marzo", especial: false, texto: "No nos vimos (fue a la casa de Tania)." },
    { autor: "Isaias", mes: "Marzo", fecha: "08 de Marzo", especial: false, texto: "Nos vimos un rato, estuvimos en Mc con su familia." },
    { autor: "Isaias", mes: "Marzo", fecha: "09 de Marzo", especial: false, texto: "Jugamos a armar rompecabezas en casa de Montse 🧩." },
    { autor: "Isaias", mes: "Marzo", fecha: "10 de Marzo", especial: false, texto: "Vendimos donas y salimos un rato al parque." },
    { autor: "Isaias", mes: "Marzo", fecha: "11 de Marzo", especial: false, texto: "Jugamos en las canchas con sus amigos, vino Poste y cenamos una hamburguesa." },
    { autor: "Isaias", mes: "Marzo", fecha: "12 de Marzo", especial: false, texto: "No nos vimos." },
    { autor: "Isaias", mes: "Marzo", fecha: "13 de Marzo", especial: true, texto: "¡TERCER MES DE ANIVERSARIO! ❤️ Me regaló una carta, una flor y una cadena, todo muy lindo." },
    { autor: "Isaias", mes: "Marzo", fecha: "14 de Marzo", especial: false, texto: "Nos fuimos en bus a Santa Fe, porque su hermana jugaba en Campo Marte." },
    { autor: "Isaias", mes: "Marzo", fecha: "15 de Marzo", especial: false, texto: "Salimos a comer y a comprar ropa por nuestro aniversario." },
    { autor: "Isaias", mes: "Marzo", fecha: "16 de Marzo", especial: false, texto: "No nos vimos." },
    { autor: "Isaias", mes: "Marzo", fecha: "17 de Marzo", especial: true, texto: "¡Le hicimos una fiesta sorpresa a mi novia con los amigos de su colegio! 🎉" },
    { autor: "Isaias", mes: "Marzo", fecha: "18 de Marzo", especial: false, texto: "Celebramos el cumple de Samuel." },
    { autor: "Isaias", mes: "Marzo", fecha: "19 de Marzo", especial: true, texto: "¡EL CUMPLEAÑOS DE ARI! 🎂🎈 Mi niña hermosa cumplió 19 años. Le llevé sus flores favoritas (girasoles 🌻)." },
    { autor: "Isaias", mes: "Marzo", fecha: "20 de Marzo", especial: false, texto: "Salimos a jugar basket y en la noche cenamos en su casa." },
    { autor: "Isaias", mes: "Marzo", fecha: "21 de Marzo", especial: false, texto: "Salimos a las 7, mis papás me cancelaron la ida al volcán, lloré y Ari me consoló 🫶🏼." },
    { autor: "Isaias", mes: "Marzo", fecha: "22 de Marzo", especial: true, texto: "Fuimos al Volcán de Ipala con sus hermanas y estuvo muy genial 🌋🌿." },
    { autor: "Isaias", mes: "Marzo", fecha: "23 de Marzo", especial: false, texto: "Salimos al parque con su familia y jugamos con los nenes." },
    { autor: "Isaias", mes: "Marzo", fecha: "24 de Marzo", especial: false, texto: "Estuvimos en casa de Dei V por su cumple. Hoy me quiso -5% ☹️." },
    { autor: "Isaias", mes: "Marzo", fecha: "25 de Marzo", especial: false, texto: "Comimos panqueques chiquititos rellenos de banano y comimos hamburguesa." },
    { autor: "Isaias", mes: "Marzo", fecha: "26 de Marzo", especial: false, texto: "Celebramos el cumple de la mamá en casa de Roxana, estuvo todo muy bonito." },
    { autor: "Isaias", mes: "Marzo", fecha: "27 de Marzo", especial: false, texto: "Discutimos por llamada 📞." },
    { autor: "Isaias", mes: "Marzo", fecha: "28 de Marzo", especial: false, texto: "Nos vimos un rato después de la U, salimos con Dei V y Valentina." },
    { autor: "Isaias", mes: "Marzo", fecha: "29 de Marzo", especial: false, texto: "No nos vimos." },
    { autor: "Isaias", mes: "Marzo", fecha: "30 de Marzo", especial: false, texto: "Salimos desde la mañana, fuimos a jugar a casa de Ari juegos de mesa." },
    { autor: "Isaias", mes: "Marzo", fecha: "31 de Marzo", especial: false, texto: "Mi mamá la invitó a almorzar a la casa 🏡." },
    { autor: "Isaias", mes: "Abril", fecha: "01 de Abril", especial: false, texto: "Fuimos al cine a ver Mario 🍄🎬." },
    { autor: "Isaias", mes: "Abril", fecha: "02 de Abril", especial: false, texto: "No nos vimos, se fue al puerto." },
    { autor: "Isaias", mes: "Abril", fecha: "03 de Abril", especial: false, texto: "No nos vimos." },
    { autor: "Isaias", mes: "Abril", fecha: "04 de Abril", especial: false, texto: "No nos vimos." },
    { autor: "Isaias", mes: "Abril", fecha: "05 de Abril", especial: false, texto: "Nos vimos un rato en su casa, ella regresó de Monterrico." },
    { autor: "Isaias", mes: "Abril", fecha: "06 de Abril", especial: false, texto: "Nos vimos en la tarde. En la noche cenamos en casa de Ari por el cumple de su tía." },
    { autor: "Isaias", mes: "Abril", fecha: "07 de Abril", especial: false, texto: "Celebramos el cumple de lupeca_2 y le hicimos una sorpresa en su casa." },
    { autor: "Isaias", mes: "Abril", fecha: "08 de Abril", especial: false, texto: "Salimos al parque a jugar con mis amigos, vino poste y comimos hamburguesa." },
    { autor: "Isaias", mes: "Abril", fecha: "09 de Abril", especial: false, texto: "Salimos a jugar basket y le hicimos una broma a Ari 🤭." },
    { autor: "Isaias", mes: "Abril", fecha: "10 de Abril", especial: false, texto: "Salimos al parque con poste, Dei V, y Ari." },
    { autor: "Isaias", mes: "Abril", fecha: "11 de Abril", especial: false, texto: "Fuimos a casa de Marcela a ver una película, hoy vine a las 6 porque andaba en la U." },
    { autor: "Isaias", mes: "Abril", fecha: "12 de Abril", especial: false, texto: "Celebramos el cumple de mi papá, vino toda mi familia." },
    { autor: "Isaias", mes: "Abril", fecha: "13 de Abril", especial: true, texto: "¡CUARTO MES DE ANIVERSARIO! ❤️ Pasamos un bonito momento en el arco de su casa. Terminamos esa noche viendo las estrellas y una estrella fugaz 🌠." },
    { autor: "Isaias", mes: "Abril", fecha: "14 de Abril", especial: false, texto: "Estuvimos un rato en mi casa con mi familia, mis tías de Izabal, y mis papás." },
    { autor: "Isaias", mes: "Abril", fecha: "15 de Abril", especial: false, texto: "Fui al gimnasio. Ari llegó a las 7 a las canchas." },
    { autor: "Isaias", mes: "Abril", fecha: "16 de Abril", especial: true, texto: "Pasamos todo el día juntos: fuimos a la universidad, al taller del papá, a comprar joyas, al partido y cenamos Campero." },
    { autor: "Isaias", mes: "Abril", fecha: "17 de Abril", especial: false, texto: "Hoy fuimos al gimnasio con Ari, Dei V y Marcela, y en la tarde salimos a jugar basket." },
    { autor: "Isaias", mes: "Abril", fecha: "18 de Abril", especial: false, texto: "Cenamos tamal en mi casa viendo el partido de Lakers vs Houston." },
    { autor: "Isaias", mes: "Abril", fecha: "19 de Abril", especial: false, texto: "No nos vimos." },
    { autor: "Isaias", mes: "Abril", fecha: "20 de Abril", especial: false, texto: "Fuimos a cenar a la casa de su hermana Roxana, comimos mixtas." },
    { autor: "Isaias", mes: "Abril", fecha: "21 de Abril", especial: false, texto: "Estve en casa de Javier y Roxana, fuimos a ver el partido del papá." },
    { autor: "Isaias", mes: "Abril", fecha: "22 de Abril", especial: false, texto: "Jugamos basket. Ari me contó que 'negrito' se había disculpado con ella." },
    { autor: "Isaias", mes: "Abril", fecha: "23 de Abril", especial: false, texto: "Fuimos a cenar a la casa de Roxana, carne asada 🥩." },
    { autor: "Isaias", mes: "Abril", fecha: "24 de Abril", especial: false, texto: "Comimos pizza en casa de Ari, vimos el partido de Lakers." },
    { autor: "Isaias", mes: "Abril", fecha: "25 de Abril", especial: false, texto: "Fuimos a los Tacos por el cumple de Dayana, Ari nos acompañó." },
    { autor: "Isaias", mes: "Abril", fecha: "26 de Abril", especial: true, texto: "Estuviste en casa de Ari desde las 12 del mediodía. Comimos ceviche con toda la familia reunida." },
    { autor: "Isaias", mes: "Abril", fecha: "27 de Abril", especial: false, texto: "Salimos al parque a jugar basket con negrito, Montse, Dei V y Ari." },
    { autor: "Isaias", mes: "Abril", fecha: "28 de Abril", especial: false, texto: "Ari se fue a cortar el pelo, luego probamos la ropa del volcán 🧥." },
    { autor: "Isaias", mes: "Abril", fecha: "29 de Abril", especial: false, texto: "Salimos a jugar basket con poste, Sofía, Dei V, Porsche y Ari." },
    { autor: "Isaias", mes: "Abril", fecha: "30 de Abril", especial: false, texto: "Fuimos a ver el partido del papá." },
    { autor: "Isaias", mes: "Mayo", fecha: "01 de Mayo", especial: false, texto: "No nos vimos (Día del Trabajador), cada quien con su familia." },
    { autor: "Isaias", mes: "Mayo", fecha: "02 de Mayo", especial: false, texto: "Fuimos a EcoCentro a comprar las cosas del volcán." },
    { autor: "Isaias", mes: "Mayo", fecha: "03 de Mayo", especial: true, texto: "¡Fuimos al Volcán de Acatenango! 🌋☁️ Estuvo todo extremadamente bonito." },
    { autor: "Isaias", mes: "Mayo", fecha: "04 de Mayo", especial: false, texto: "Estuvimos en su casa, Ari cocinó fideos con carne molida, estuvo muy rico 🍝." },
    { autor: "Isaias", mes: "Mayo", fecha: "05 de Mayo", especial: false, texto: "Hoy jugaron los Lakers vs Thunder y lo vimos en casa de Ari." },
    { autor: "Isaias", mes: "Mayo", fecha: "06 de Mayo", especial: false, texto: "Salimos al parque con poste y más amigos. Jugamos basket." },
    { autor: "Isaias", mes: "Mayo", fecha: "07 de Mayo", especial: true, texto: "Acompañé a Ari a la U, fuimos al taller y comimos shucos en Cuatro Grados Norte 🌭." },
    { autor: "Isaias", mes: "Mayo", fecha: "08 de Mayo", especial: false, texto: "Salimos al parque con el nene y jugamos." },
    { autor: "Isaias", mes: "Mayo", fecha: "09 de Mayo", especial: false, texto: "Nos vimos un rato en la tarde, yo no fui a la U, y Ari fue a un cumple." },
    { autor: "Isaias", mes: "Mayo", fecha: "10 de Mayo", especial: false, texto: "No nos vimos." },
    { autor: "Isaias", mes: "Mayo", fecha: "11 de Mayo", especial: false, texto: "Vimos el último partido de Lakers de playoffs, perdió contra Thunder 🏀." },
    { autor: "Isaias", mes: "Mayo", fecha: "12 de Mayo", especial: false, texto: "La fui a traer a la U, fuimos a comer a Subway y ajá (súper rico) 💀 tomó la pastilla 💊." },
    { autor: "Isaias", mes: "Mayo", fecha: "13 de Mayo", especial: true, texto: "¡QUINTO MES DE ANIVERSARIO! ❤️ Salimos a jugar basket con los amigos." },
    { autor: "Isaias", mes: "Mayo", fecha: "14 de Mayo", especial: false, texto: "No nos vimos." },
    { autor: "Isaias", mes: "Mayo", fecha: "15 de Mayo", especial: false, texto: "Estuvimos hablando con Lucía, Marcela y mi novia, cenamos en casa de Ari." },
    { autor: "Isaias", mes: "Mayo", fecha: "16 de Mayo", especial: false, texto: "No nos vimos." },
    { autor: "Isaias", mes: "Mayo", fecha: "17 de Mayo", especial: false, texto: "Fuimos a Antigua Guatemala con mi familia ⛪, vimos una película en mi casa." },
    { autor: "Isaias", mes: "Mayo", fecha: "18 de Mayo", especial: false, texto: "Estuvimos en su casa y en la noche fuimos al gym, hoy le bajó." },
    { autor: "Isaias", mes: "Mayo", fecha: "19 de Mayo", especial: false, texto: "Estuvimos en su casa, comimos una pizza y vimos Venom: The Last Dance." },
    { autor: "Isaias", mes: "Mayo", fecha: "20 de Mayo", especial: false, texto: "Discutimos fuerte 💔." },
    { autor: "Isaias", mes: "Mayo", fecha: "21 de Mayo", especial: false, texto: "Estuvimos en su casa y vimos una película (Venom)." },
    { autor: "Isaias", mes: "Mayo", fecha: "22 de Mayo", especial: false, texto: "Me acompañó a cortarme el pelo y estuvimos en su casa." },
    { autor: "Isaias", mes: "Mayo", fecha: "23 de Mayo", especial: false, texto: "Fuimos a ver el partido de su hermana en el Campo Marte." },
    { autor: "Isaias", mes: "Mayo", fecha: "24 de Mayo", especial: true, texto: "Fuimos a la iglesia por el aniversario, almorzó en mi casa y cenamos en Barista ☕." },
    { autor: "Isaias", mes: "Mayo", fecha: "25 de Mayo", especial: false, texto: "Estuvimos en mi casa, y en la noche fuimos un rato al parque." },
    { autor: "Isaias", mes: "Mayo", fecha: "26 de Mayo", especial: false, texto: "Estuvimos con Ari, Dei V, Montse, Lupeca y Marcela. Comimos pizza." },
    { autor: "Isaias", mes: "Mayo", fecha: "27 de Mayo", especial: false, texto: "Estuvimos en las canchas con Poste, nos dejaron plantados los culeros jajaja." },
    { autor: "Isaias", mes: "Mayo", fecha: "28 de Mayo", especial: false, texto: "Fuimos al parque a jugar basket con Sofía y Lucía, cenamos en mi casa." },
    { autor: "Isaias", mes: "Mayo", fecha: "29 de Mayo", especial: false, texto: "Me entré temprano porque tuve presentación de proyecto." },
    { autor: "Isaias", mes: "Mayo", fecha: "30 de Mayo", especial: false, texto: "Estuvimos in mi casa viendo la final de conferencia de la NBA 🏀." },
    { autor: "Isaias", mes: "Mayo", fecha: "31 de Mayo", especial: false, texto: "Estuvimos todo el día en su casa, almorzamos gallina, estuvo muy rico." },
    { autor: "Isaias", mes: "Junio", fecha: "01 de Junio", especial: false, texto: "No nos vimos." },
    { autor: "Isaias", mes: "Junio", fecha: "02 de Junio", especial: false, texto: "Salimos a jugar con todos sus amigos al parque. En la noche cenamos en su casa." },
    { autor: "Isaias", mes: "Junio", fecha: "03 de Junio", especial: false, texto: "No nos vimos." },
    { autor: "Isaias", mes: "Junio", fecha: "04 de Junio", especial: false, texto: "Jugamos basket en las canchas con Poste y su tía, Sofía y Porsche." },
    { autor: "Isaias", mes: "Junio", fecha: "05 de Junio", especial: false, texto: "Entrenamos gym en mi casa en la mañana." },
    { autor: "Isaias", mes: "Junio", fecha: "06 de Junio", especial: false, texto: "Salimos con sus amigos, vino Valentina y Poste. Hoy vino Mafer." },
    { autor: "Isaias", mes: "Junio", fecha: "07 de Junio", especial: false, texto: "Salimos al parque a jugar con sus amigos, jugamos basket y fut." },
    { autor: "Isaias", mes: "Junio", fecha: "08 de Junio", especial: false, texto: "Estuvimos en casa de Montse, Montse hizo pastel 🎂." },
    { autor: "Isaias", mes: "Junio", fecha: "09 de Junio", especial: false, texto: "Salimos al parque con sus amigos a jugar basket y cenamos en su casa 🍕." },
    { autor: "Isaias", mes: "Junio", fecha: "10 de Junio", especial: false, texto: "No nos vimos." }
];

let memoriaCompartida = [];
let filtroActual = 'todos'; 

function inicializarDatos() {
    const datosLocales = localStorage.getItem('bitacora_bilateral_v2');
    if (datosLocales) {
        memoriaCompartida = JSON.parse(datosLocales);
    } else {
        memoriaCompartida = [...baseHistorica];
        guardarEnStorage();
    }
}

function guardarEnStorage() {
    localStorage.setItem('bitacora_bilateral_v2', JSON.stringify(memoriaCompartida));
}

function renderBilateral(datosAMostrar) {
    const contenedorAri = document.getElementById('timeline-ari');
    const contenedorIsaias = document.getElementById('timeline-isaias');
    
    contenedorAri.innerHTML = '';
    contenedorIsaias.innerHTML = '';

    let totalVisibles = 0;

    for (let i = memoriaCompartida.length - 1; i >= 0; i--) {
        const dia = memoriaCompartida[i];

        if (!datosAMostrar.includes(dia)) continue;
        totalVisibles++;

        const card = document.createElement('div');
        const claseEspecial = dia.especial ? 'card-especial' : '';
        
        const botonesAccion = `
            <div class="flex gap-4 text-sm mt-4 pt-3 border-t border-gray-100 justify-end">
                <button onclick="prepararEdicion(${i})" class="action-btn text-blue-400 flex items-center gap-0.5 font-bold text-xs">
                    ✏️ Editar
                </button>
                <button onclick="eliminarRecuerdo(${i})" class="action-btn text-rose-400 flex items-center gap-0.5 font-bold text-xs">
                    🗑️ Borrar
                </button>
            </div>
        `;

        if (dia.autor === 'Ari') {
            card.className = `card-ari ${claseEspecial} p-6 rounded-2xl border border-purple-50/50 transition-all duration-300 card-appear group`;
            card.innerHTML = `
                <div class="flex justify-between items-start mb-3">
                    <span class="px-3 py-1 bg-purple-50 text-purple-500 font-bold text-[11px] rounded-full">📅 ${dia.fecha}</span>
                    ${dia.especial ? '<span class="text-sm">💖</span>' : ''}
                </div>
                <p class="text-gray-600 text-sm md:text-[15px] leading-relaxed">${dia.texto}</p>
                ${botonesAccion}
            `;
            contenedorAri.appendChild(card);
        } else {
            card.className = `card-isaias ${claseEspecial} p-6 rounded-2xl border border-blue-50/50 transition-all duration-300 card-appear group`;
            card.innerHTML = `
                <div class="flex justify-between items-start mb-3">
                    <span class="px-3 py-1 bg-blue-50 text-blue-500 font-bold text-[11px] rounded-full">📅 ${dia.fecha}</span>
                    ${dia.especial ? '<span class="text-sm">💝</span>' : ''}
                </div>
                <p class="text-gray-600 text-sm md:text-[15px] leading-relaxed">${dia.texto}</p>
                ${botonesAccion}
            `;
            contenedorIsaias.appendChild(card);
        }
    }

    if (totalVisibles === 0) {
        document.getElementById('no-results').classList.remove('hidden');
    } else {
        document.getElementById('no-results').classList.add('hidden');
    }
}

function actualizarDashboard() {
    const fechaInicio = new Date('2025-12-13T09:45:00');
    const fechaHoy = new Date();
    
    const diferenciaTiempo = fechaHoy - fechaInicio;
    const diasNoviazgo = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));

    const conteoAri = memoriaCompartida.filter(dia => dia.autor === 'Ari').length;
    const conteoIsaias = memoriaCompartida.filter(dia => dia.autor === 'Isaias').length;

    document.getElementById('total-dias').innerText = diasNoviazgo >= 0 ? diasNoviazgo : 0;
    document.getElementById('total-ari').innerText = conteoAri;
    document.getElementById('total-isaias').innerText = conteoIsaias;
}

function eliminarRecuerdo(index) {
    if (confirm("¿Estás seguro de borrar este recuerdo mutuo?")) {
        memoriaCompartida.splice(index, 1);
        guardarEnStorage();
        actualizarDashboard();
        aplicarFiltrosYBusqueda();
    }
}

function prepararEdicion(index) {
    const dia = memoriaCompartida[index];
    const formContainer = document.getElementById('form-container');
    
    document.getElementById('edit-index').value = index;
    if (dia.autor === 'Ari') {
        document.getElementById('autor-ari').checked = true;
    } else {
        document.getElementById('autor-isaias').checked = true;
    }
    document.getElementById('input-mes').value = dia.mes;
    document.getElementById('input-fecha').value = dia.fecha;
    document.getElementById('input-especial').checked = dia.especial;
    document.getElementById('input-texto').value = dia.texto; 

    document.getElementById('form-title').innerText = "✏️ Editar este momento";
    document.getElementById('btn-submit-form').innerText = "Actualizar Recuerdo 🔄";
    
    formContainer.classList.remove('hidden');
    formContainer.scrollIntoView({ behavior: 'smooth' });
}

function aplicarFiltrosYBusqueda() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    let filtrados = memoriaCompartida;

    if (filtroActual === 'especiales') {
        filtrados = filtrados.filter(dia => dia.especial === true);
    } else if (filtroActual !== 'todos') {
        filtrados = filtrados.filter(dia => dia.mes === filtroActual);
    }

    if (query) {
        filtrados = filtrados.filter(dia => 
            dia.texto.toLowerCase().includes(query) || 
            dia.fecha.toLowerCase().includes(query)
        );
    }

    renderBilateral(filtrados);
}

document.addEventListener('DOMContentLoaded', () => {
    inicializarDatos();
    actualizarDashboard();
    renderBilateral(memoriaCompartida);

    const searchBar = document.getElementById('search-bar');
    const suggestionsBox = document.getElementById('search-suggestions');
    const btnToggle = document.getElementById('btn-toggle-form');
    const formBox = document.getElementById('form-container');

    // CONTROL INTELIGENTE DE SUGERENCIAS
    searchBar.addEventListener('focus', () => {
        suggestionsBox.classList.remove('hidden');
    });

    // Cerrar el panel si hacen clic fuera del área del buscador
    document.addEventListener('click', (e) => {
        if (!searchBar.contains(e.target) && !suggestionsBox.contains(e.target)) {
            suggestionsBox.classList.add('hidden');
        }
    });

    // Inyectar palabra sugerida al hacer clic en un tag
    suggestionsBox.addEventListener('click', (e) => {
        const tag = e.target.closest('.tag-sug');
        if (tag) {
            searchBar.value = tag.getAttribute('data-word');
            aplicarFiltrosYBusqueda();
            suggestionsBox.classList.add('hidden'); // Ocultar tras elegir
        }
    });

    btnToggle.addEventListener('click', () => {
        document.getElementById('edit-index').value = "";
        document.getElementById('bitacora-form').reset();
        document.getElementById('form-title').innerText = "📝 Guardar lo vivido hoy";
        document.getElementById('btn-submit-form').innerText = "Guardar Recuerdo ✨";
        formBox.classList.toggle('hidden');
        if (!formBox.classList.contains('hidden')) formBox.scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('btn-cancelar').addEventListener('click', () => {
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

    document.getElementById('months-filter').addEventListener('click', function(e) {
        if (!e.target.classList.contains('mes-btn') && !e.target.classList.contains('especial-filter-btn')) return;

        document.querySelectorAll('.mes-btn, .especial-filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        filtroActual = e.target.getAttribute('data-mes');
        aplicarFiltrosYBusqueda();
    });

    searchBar.addEventListener('input', aplicarFiltrosYBusqueda);
});