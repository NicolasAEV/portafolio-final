//objetos 10 productos
export let carritos = JSON.parse(localStorage.getItem("carritos")) || [{
    id : 1,
    cantidad : 1,
    nombre: 'AC: Valhalla',
    descripcion: 'AC: Valhalla: Juego de rol y aventura en el que controlas a Eivor, un vikingo que debe liderar a su clan a través de conflictos y peligros en la época de las invasions vikingas de Inglaterra. Podrás personalizar a tu personaje y tomar decisiones que afectarán la historia y el mundo del juego.',
    precio: 20000,
    imagen: 'https://img.gg.deals/e0/33/373ed27d91cc87f237bcf8768c65c0cb8409_1920xt1080_Q100.png',
    categoria : "aventura",
    stock : "10"
}, {
    id : 2,
    cantidad : 1,
    nombre: 'Gears Of War',
    descripcion: 'Gears of War: Juego de disparos en tercera persona que se desarrolla en un mundo postapocalíptico en el que los humanos luchan por sobrevivir contra una raza alienígena invasora. Contiene una intensa historia y combate a gran escala.',
    precio: 15000,
    imagen: 'https://i.blogs.es/cc16cd/apps.52315.68607194681373551.b4c09a44-be36-42d6-96c5-4a33b566becd/1366_2000.jpg',
    categoria : "aventura",
    stock : "10"
}, {
    id : 3,
    cantidad : 1,
    nombre: 'God of war',
    descripcion: 'God of War: Aventura en tercera persona en la que controlas a Kratos, un guerrero espartano en su lucha contra los dioses del Olimpo. Deberás enfrentarte a peligrosos enemigos y resolver rompecabezas mientras exploras el mundo de los dioses griegos.',
    precio: 13000,
    imagen: 'https://media.vandal.net/m/11-2022/202211218263381_1.jpg',
    categoria : "aventura",
    stock : "10"

}, {
    id : 4,
    cantidad : 1,
    nombre: 'GR: Breackpoint',
    descripcion: 'GR: Breakpoint: Juego de disparos en tercera persona que se desarrolla en un mundo abierto y con elementos de rol. Controlarás a un soldado de élite que se encuentra atrapado en una isla tropical controlada por un grupo de soldados traicioneros. Deberás sobrevivir y descubrir la verdad detrás de la traición',
    precio: 10000,
    imagen: 'https://generacionxbox.com/wp-content/uploads/2019/09/GR-Breakpoint-generacion-xbox.jpg',
    categoria : "aventura",
    stock : "10"

}, {
    id : 5,
    cantidad : 1,
    nombre: 'Raimbow Six',
    descripcion: 'Raimbow Six: Juego de disparos en primera persona que se desarrolla en el mundo de la operaciones especiales y el terrorismo. Contiene modos multijugador y una historia en solitario que te llevará a través de misiones peligrosas.',
    precio: 45000,
    imagen: 'https://cloudfront-us-east-1.images.arcpublishing.com/copesa/GTTIKPEE2NDOXHKLHUGKSUCD5Y.jpeg',
    categoria : "aventura",
    stock : "10"

}, {
    id : 6,
    cantidad : 1,
    nombre: 'Call of duty mw2',
    descripcion: 'Call of Duty MW2: Juego de disparos en primera persona ambientado en la guerra moderna. Contiene modos multijugador y una historia en solitario que te llevará a través de diferentes escenarios y misiones.',
    precio: 60000,
    imagen: 'https://imgs.callofduty.com/content/dam/atvi/callofduty/cod-touchui/kronos/common/social-share/social-share-image.jpg',
    categoria : "aventura",
    stock : "10"

}, {
    id : 7,
    cantidad : 1,
    nombre: 'Elden Ring',
    descripcion: 'Elden Ring: Juego de rol y aventura en el que deberás explorar un mundo fantástico y luchar contra peligrosos enemigos mientras resuelves rompecabezas y descubres la verdad detrás de la misteriosa desaparición de Elden Ring.',
    precio: 45000,
    imagen: 'https://www.videogameschronicle.com/files/2022/02/sds5.jpg',
    categoria : "aventura",
    stock : "10"
}, {
    id : 8,
    cantidad : 1,
    nombre: 'Halo 5',
    descripcion: 'Halo 5: Juego de disparos en primera persona ambientado en un mundo futurista en el que controlarás a Master Chief, un soldado cibernético, en su lucha contra una invasión alienígena. Contiene modos multijugador y una historia en solitario.',
    precio: 40000,
    imagen: 'https://s2.gaming-cdn.com/images/products/9598/orig/halo-5-guardians-pc-game-steam-cover.jpg?v=1668692780',
    categoria : "aventura",
    stock : "10"
}, {
    id : 9,
    cantidad : 1,
    nombre: 'GTA: V',
    descripcion: 'GTA: V: Juego de mundo abierto en el que controlarás a tres personajes diferentes en su lucha por sobrevivir y prosperar en la ciudad de Los Santos. Podrás realizar misiones, robos y otras actividades ilegales mientras exploras el mundo del juego.',
    precio: 40000,
    imagen: 'https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_1920x1080_Hero-Carousel_V06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0.jpg',
    categoria : "aventura",
    stock : "10"
}, {
    id : 10,
    cantidad : 1,
    nombre: 'The Witcher III',
    descripcion: 'The Witcher III: Juego de rol y aventura en el que controlarás a Geralt de Rivia, un cazador de monstruos, en su búsqueda por encontrar a su adoptiva hija y luchar contra peligrosos enemigos en un mundo fantástico. Contiene una historia profunda y decisiones que afectarán el mundo del juego',
    precio: 40000,
    imagen: 'https://images.gog-statics.com/ca20a040b7e7dbf11f954b4fa85e1ecdcf8f95eeba8ebf71f89455794eec80f2.jpg',
    categoria : "aventura",
    stock : "10"
}];
localStorage.setItem("carritos", JSON.stringify(carritos));
