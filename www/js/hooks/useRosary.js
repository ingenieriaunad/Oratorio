const  useRosary = () => {
    const selectMystery = async ()=>{
        const options={
            day     :'Misterios del día',
            lunes   :'Misterios gozosos',
            martes  :'Misterios dolorosos',
            domingo :'Misterios gloriosos',
            jueves  :'Misterios luminosos',
        }
        const {value: mysterySelected}=await Swal.fire({
            title: 'Elije los misterios',
            input: 'radio',
            inputOptions: options,
            inputValidator: (value) => {
                if (!value) {
                    return 'Debes elegir un misterio'
                }
            },
            customClass: {
                input: 'swal-radio d-block',
            },
            confirmButtonText: 'Iniciar',
            confirmButtonColor: "#073ea8",
            allowOutsideClick: false,
        });
        return mysterySelected;
    };
    const mystery={
        lunes    :'Misterios gozosos',
        martes   :'Misterios dolorosos',
        miercoles:'Misterios gloriosos',
        jueves   :'Misterios luminosos',
        viernes  :'Misterios dolorosos',
        sabado   :'Misterios gozosos',
        domingo  :'Misterios gloriosos'
    }
    const mysterys={
        gozosos:[
            "La Anunciación del Ángel a María.",
            "La Visitación de María a su prima Isabel.",
            "El Nacimiento de Jesús en Belén.",
            "La Presentación del Niño Jesús en el Templo.",
            "El Niño Jesús perdido y hallado en el Templo."
        ],
        dolorosos:[
            "La Oración de Jesús en el Huerto.",
            "La Flagelación del Señor.",
            "La Coronación de espinas.",
            "Jesús con la Cruz a cuestas camino del Calvario.",
            "La Crucifixión y Muerte de Nuestro Señor Jesucristo."
        ],
        gloriosos:[
            "La Resurrección del Señor.",
            "La Ascensión del Señor.",
            "La Venida del Espíritu Santo.",
            "La Asunción de María Santísima a los cielos.",
            "La Coronación de María Santísima como Reina de Cielos y Tierra."
        ],
        luminosos:[
            "El Bautismo de Jesús en el Jordán.",
            "La Autorrevelación de Jesús en las bodas de Caná.",
            "El Anuncio del Reino de Dios invitando a la conversión.",
            "La Transfiguración.",
            "La Institución de la Eucaristía, expresión sacramental del misterio pascual."
        ]
    }
    const thoughtfulReadings={
        gozosos:[
            [            
                `Fue enviado por Dios el ángel Gabriel a una ciudad de Galilea llamada Nazaret, a una joven virgen comprometida con un hombre llamado José, de la casa de David; el nombre de la virgen era María.<em class="text-success">(Lc. 1.26-27)</em>`,
                `Y entrando, le dijo: «Alégrate, llena de gracia, el Señor está contigo.»<em class="text-success">(Lc. 1.28)</em>`,
                `Al oír estas palabras, María quedó muy conmovida y se preguntaba qué saludo era aquel. <em class="text-success">(Lc. 1.29)</em>`,
                `El ángel le dijo: «No temas, María, porque has encontrado gracia ante Dios.<em class="text-success">(Lc. 1.30)</em>`,
                `Vas a Concebir y darás a luz un hijo, y le pondrás por nombre Jesús.<em class="text-success">(Lc. 1.31)</em>`,
                `Él será grande y será llamado Hijo del Altísimo, el Señor Dios le dará el trono de David, su padre; reinará sobre la casa de Jacob por los siglos y su reino no tendrá fin.» <em class="text-success">(Lc. 1.32-33)</em>`,
                `María respondió al ángel: «¿Cómo será eso, pues no conozco a varón?» <em class="text-success">(Lc. 1.34)</em>`,
                `El ángel le contestó: «El Espíritu Santo vendrá sobre ti, y la fuerza del Altísimo te cubrirá con su sombra; por eso el Santo que va a nacer se llamará Hijo de Dios. Ahí tienes a tu pariente Isabel, que, a pesar de su vejez, ha concebido un hijo, y ya está de seis meses la que llamaban estéril, porque para Dios nada hay imposible.»<em class="text-success">(Lc. 1.35-37)</em>`,
                `María contestó: «Aquí está la esclava del Señor; hágase en mí según tu palabra.» Y la dejó el ángel.<em class="text-success">(Lc. 1.38)</em>`,
                `El verbo se hizo hombre y habitó entre nosotros.<em class="text-success">(Jn. 1.14)</em>`
            ],
            [
                `En aquellos días, María se levantó y se fue con prontitud a la región montañosa, a una ciudad de Judá; entró en casa de Zacarías y saludó a Isabel.<em class="text-success">(Lc. 1.39-40)</em>`,
                `Aconteció que, en cuanto oyó Isabel el saludo de María, saltó la criatura en su vientre. Se llenó Isabel del Espíritu Santo <em class="text-success">(Lc. 1.41)</em>`,
                `y exclamando con gran voz,dijo: «¡Bendita tú entre las mujeres y bendito el fruto de tu vientre!<em class="text-success">(Lc. 1.42)</em>`,
                `Dijo María: «Proclama mi alma la grandeza del Señor, y mi espíritu se alegra en Dios mi salvador;<em class="text-success">(Lc. 1.46-47)</em>`,
                `Ha puesto los ojos en la humildad de su esclava, por eso desde ahora todas las generaciones me llamarán bienaventurada,<em class="text-success">(Lc. 1.48)</em>`,
                `porque el Poderoso ha hecho obras grandes por mí: su nombre es santo,<em class="text-success">(Lc. 1.49)</em>`,
                `y su misericordia llega a sus fieles de generación en generación.<em class="text-success">(Lc. 1.50)</em>`,
                `Él hace proezas con su brazo: dispersa a los soberbios de corazón,<em class="text-success">(Lc. 1.51)</em>`,
                `derriba del trono a los poderosos y enaltece a los humildes, a los hambrientos los colma de bienes y a los ricos los despide vacíos.<em class="text-success">(Lc. 1.52-53)</em>`,
                `Acogio a Israel, su siervo, acordándose de la misericordia.<em class="text-success">(Lc. 1.54)</em>`,
            ],
            [
                `Subio José desde Galilea, de la ciudad de Nazaret, a Judea, a la ciudad de David, que se llama Belén, por ser el de la casa y familia de David, para inscribirse en el censo con María, su esposa, que estaba encinta.<em class="text-success">(Lc. 2.4-5)</em>`,
                `Y sucedió que, mientras estaban allí, se le cumplieron los días del alumbramiento,y dio a luz a su hijo primogénito <em class="text-success">(Lc. 2.6)</em>`,
                `y, envolviéndolo en pañales, lo acostó en un pesebre, porque no tenían sitio en la posada.<em class="text-success">(Lc. 2.7)</em>`,
                `En aquella región había unos pastores que pasaban la noche al aire libre, velando por turno su rebaño. Se les presentó un ángel del Señor, y la gloria del Señor los envolvió en su luz. Y se llenaron de gran temor.<em class="text-success">(Lc. 2.8-9)</em>`,
                `El ángel les dijo: «No temán, pues les anuncio una gran alegría, que lo será para todo el pueblo<em class="text-success">(Lc. 2.10)</em>`,
                `Ha nacido hoy, en la ciudad de David, un salvador, que es el Cristo Señor;<em class="text-success">(Lc. 2.11)</em>`,
                `y esto les servirá de señal: encontrarán a un niño envuelto en pañales y acostado en un pesebre.»<em class="text-success">(Lc. 2.12)</em>`,
                `De pronto, se juntó con el ángel una multitud del ejército celestial, que alababa a Dios, diciendo: «¡Gloria a Dios en las alturas y en la tierra paz a los hombres de buena voluntad!»<em class="text-success">(Lc. 2.13-14)</em>`,
                `Encontraron a María y a José, y al niño acostado en el pesebre. Al verlo, contaron lo que se les había dicho de aquel niño.<em class="text-success">(Lc. 2.16-17)</em>`,
                `María, por su parte, guardaba todas estas cosas, y las meditaba en su corazón.<em class="text-success">(Lc. 2.19)</em>`,

            ],
            [
                `Cuando se cumplieron los días de su purificación, según la ley de Moisés, llevaron a Jesús a Jerusalén para presentarlo al Señor,<em class="text-success">(Lc. 2.22)</em>`,
                `Había en Jerusalen un hombre llamado Simeón. Era justo y piadoso y esperaba la consolación de Israel; y el Espíritu Santo estaba en él.<em class="text-success">(Lc. 2.25)</em>`,
                `Movido por el Espíritu, fue al templo. Y cuando entraban con el niño Jesús sus padres para cumplir con él lo previsto por la ley, Simeón lo tomó en brazos y bendijo a Dios.<em class="text-success">(Lc. 2.27-28)</em>`,
                `Ahora, Señor, según tu promesa, puedes dejar a tu siervo irse en paz, porque han visto mis ojos tu salvación,<em class="text-success">(Lc. 2.29-30)</em>`,
                `Luz para iluminar a los gentiles y gloria de tu pueblo Israel.<em class="text-success">(Lc. 2.32)</em>`,
                `Su padre y su madre estaban admirados por lo que se decía del niño.<em class="text-success">(Lc. 2.33)</em>`,
                `Simeón les bendijo y dijo a María su madre:Este está puesto para caida y elevación de muchos en Israel.<em class="text-success">(Lc. 2.34)</em>`,
                `Y a ti una espada te atravesará el alma.<em class="text-success">(Lc. 2.35)</em>`,
                `Volvieron a Galilea, a su ciudad de Nazaret.<em class="text-success">(Lc. 2.39)</em>`,
                `El niño iba creciendo y robusteciéndose, y se llenaba de sabiduría; y la gracia de Dios lo acompañaba.<em class="text-success">(Lc. 2.40)</em>`,
            ],
            [
                
                `Sus padres solían ir cada año a Jerusalén por las fiestas de Pascua, cuando cumplió doce años, subieron ellos como de costumbre a la fiesta, al terminar los días de la fiesta, cuando ellos volvían, se quedó el niño Jesús en Jerusalén, sin que lo supieran sus padres.<em class="text-success">(Lc. 2.41-43)</em>`,
                `Creyendo que estaba en la caravana, anduvieron el camino de un día <em class="text-success">(Lc. 2.44)</em>`,
                `Se pusieron a buscarlo entre los parientes y conocidos;<em class="text-success">(Lc. 2.44)</em>`,
                `como no lo encontraron, se volvieron a Jerusalén en su busca.<em class="text-success">(Lc. 2.45)</em>`,
                `A los tres días, lo encontraron en el templo, sentado en medio de los maestros, escuchándolos y haciéndoles preguntas;<em class="text-success">(Lc. 2.46)</em>`,
                `todos los que le oían quedaban asombrados de su talento y de las respuestas que daba.<em class="text-success">(Lc. 2.47)</em>`,
                `Al verlo, se quedaron atónitos, y le dijo su madre: «Hijo, ¿por qué nos has tratado así? Mira que tu padre y yo te buscábamos angustiados.»<em class="text-success">(Lc. 2.48)</em>`,
                `Él les contestó: «¿Por qué me buscaban? ¿No sabían que yo debía estar en la casa de mi Padre?»<em class="text-success">(Lc. 2.49)</em>`,
                `Pero ellos no comprendieron lo que les dijo.<em class="text-success">(Lc. 2.50)</em>`,
                `Bajó con ellos y fue a Nazaret y estaba sujeto a ellos. Su madre conservaba cuidadosamente todas las cosas en su corazón.<em class="text-success">(Lc. 2.51)</em>`,
            ]

        ],
        dolorosos:[
            [
                `Jesús fue con sus discípulos a un huerto llamado Getsemaní, y les dijo: «Sentaos aquí, mientras voy allá a orar.» <em class="text-success">(Mt. 26.36)</em>`,
                `Entonces les dijo: «Mi alma está triste hasta la muerte; quedense aquí y vigilen conmigo.» <em class="text-success">(Mt. 26.38)</em>`,
                `Y adelantándose un poco, se hincó en tierra y comenzó a orar. <em class="text-success">(Mt. 26.39)</em>`,
                `Padre, si es posible, que pase de mí este cáliz, pero no se haga mi voluntad, sino la tuya.»<em class="text-success">(Mt. 26.39)</em>`,
                `Se le apareció un ángel del cielo para confortarlo. <em class="text-success">(Lc. 22.43)</em>`,
                `Y entrando en agonía, oraba con mayor insistencia. <em class="text-success">(Lc. 22.44)</em>`,
                `Y su sudor se volvió como gotas de sangre que caían al suelo. <em class="text-success">(Lc. 22.44)</em>`,
                `Después de orar, volvió a sus discípulos y los encontró dormidos, agotados por la tristeza. <em class="text-success">(Lc. 22.45)</em>`,
                `Y les dijo: «¿No han podido velar una hora conmigo? vigilen y oren para que no caigan en la tentación.»  <em class="text-success">(Mt. 26.40)</em>`,
                `El espíritu está pronto, pero la carne es débil. <em class="text-success">(Mt. 26.41)</em>`,
            ],
            [
                `Dijo Pilato: «Yo no encuentro culpa en este hombre. Por tanto, lo castigaré y lo soltaré.» <em class="text-success">(Lc. 23.4)</em>`,
                `Pilato entregó a Jesús para que lo azotaran. <em class="text-success">(Jn. 19.1)</em>`,
                `Oprimido y condenado, fue hecho varón de dolores. <em class="text-success">(Is. 53.7)</em>`,
                `Se sometió y fue llevado como cordero al matadero. <em class="text-success">(Is. 53.7)</em>`,
                `Quiso Yahvé quebrantarlo con dolores. Y puesto que él se entregó en sacrificio por el pecado. <em class="text-success">(Is. 53.10)</em>`,
                `Fue triturado por nuestros pecados, el castigo que sufrió nos trajo la paz, por sus llagas fuimos curados. <em class="text-success">(Is. 53.5)</em>`,
                `Cargó con nuestros dolores y soportó nuestros sufrimientos. <em class="text-success">(Is. 53.4)</em>`,
                `Fue traspasado por nuestras rebeliones, molido por nuestros pecados. <em class="text-success">(Is. 53.5)</em>`,
                `El castigo que nos da la paz recayó sobre él. <em class="text-success">(Is. 53.5)</em>`,
                `Por sus llagas fuimos curados. <em class="text-success">(Is. 53.5)</em>`,
            ],
            [
                `Los soldados del procurador llevaron a Jesús al pretorio y reunieron alrededor de él a toda la cohorte. <em class="text-success">(Mt. 27.27)</em>`,
                `Le quitaron sus vestiduras y le pusieron un manto escarlata. <em class="text-success">(Mt. 27.28)</em>`,
                `Le trenzaron una corona de espinas, se la pusieron en la cabeza y una caña en la mano derecha. <em class="text-success">(Mt. 27.29)</em>`,
                `Y doblándose ante él, se burlaban diciendo: «¡Salve, Rey de los judíos!» <em class="text-success">(Mt. 27.29)</em>`,
                `Le escupían y le quitaban la caña y le golpeaban la cabeza. <em class="text-success">(Mt. 27.30)</em>`,
                `Le gritaban viva el Rey de los judíos y le daban bofetadas. <em class="text-success">(Jn. 19.4)</em>`,
                `Pilato salió de nuevo y les dijo: «Aquí lo traigo fuera para que sepan que no encuentro en él ningún motivo de condena.» <em class="text-success">(Jn. 19.4)</em>`,
                `Jesús salió, llevando la corona de espinas y el manto escarlata. <em class="text-success">(Jn. 19.5)</em>`,
                `Pilato les dijo: «Aquí tienen al hombre.» <em class="text-success">(Jn. 19.5)</em>`,
                `Cuando lo vieron los sumos sacerdotes y los guardias, gritaron: «¡Crucifícalo, crucifícalo!» Pilato les dijo: «Tómenlo ustedes y crucifíquenlo, porque yo no encuentro en él ningún motivo de condena.» <em class="text-success">(Jn. 19.6)</em>`,
            ],
            [
                `Le quitaron la púrpura, le pusieron sus vestiduras y lo sacaron para crucificarlo. <em class="text-success">(Mc. 15.20)</em>`,
                `Y Él cargando con su cruz, salió hacia el lugar llamado Calvario, que en hebreo se llama Gólgota. <em class="text-success">(Jn. 19.17)</em>`,
                `Echaron mano de un cierto Simón de Cirene, que venía del campo, y le cargaron la cruz para que la llevara detrás de Jesús. <em class="text-success">(Lc. 23.26)</em>`,
                `Lo seguía una gran multitud del pueblo y de mujeres que se dolían y se lamentaban por Él. <em class="text-success">(Lc. 23.27)</em>`,
                `Jesús se volvió hacia ellas y les dijo: «Hijas de Jerusalén, no lloren por mí, lloren por ustedes y por sus hijos. <em class="text-success">(Lc. 23.28)</em>`,
                `Si esto hacen con el leño verde, ¿qué no harán con el seco?» <em class="text-success">(Lc. 23.31)</em>`,
                `Llevaban además a otros dos, malhechores, para ser ejecutados con Él. <em class="text-success">(Lc. 23.32)</em>`,
                `Si alguno quiere venir en pos de mí, niéguese a sí mismo, tome su cruz y sígame. <em class="text-success">(Mt. 16.24)</em>`,
                `Tomen sobre ustedes mi yugo y aprendan de mí, que soy manso y humilde de corazón. <em class="text-success">(Mt. 11.29)</em>`,
                `Y encontrarán descanso para sus almas. Porque mi yugo es suave y mi carga ligera. <em class="text-success">(Mt. 11.29)</em>`,
            ],
            [
                `Cuando llegaron al lugar llamado Calvario, lo crucificaron allí, a Él y a los malhechores, uno a la derecha y otro a la izquierda. <em class="text-success">(Lc. 23.33)</em>`,
                `Sobre su cabeza pusieron por escrito la causa de su condena: «Este es Jesús, el Rey de los judíos.» <em class="text-success">(Mt. 27.37)</em>`,
                `Jesús decia: «Padre, perdónalos, porque no saben lo que hacen.» <em class="text-success">(Lc. 23.34)</em>`,
                `Uno de los malhechores le dijo: «Jesus, acuérdate de mí cuando estés con tu reino.» <em class="text-success">(Lc. 23.42)</em>`,
                `Jesús le respondió: «Yo te aseguro que hoy estarás conmigo en el paraíso.» <em class="text-success">(Lc. 23.43)</em>`,
                `Jesús, viendo a su madre y junto a ella al discípulo a quien amaba, dijo a su madre: «Mujer, ahí tienes a tu hijo.» <em class="text-success">(Jn. 19.26)</em>`,
                `Después dijo al discípulo: «Ahí tienes a tu madre.» Y desde aquella hora, el discípulo la recibió en su casa. <em class="text-success">(Jn. 19.27)</em>`,
                `Sabiendo Jesús que ya todo estaba cumplido, para que se cumpliera la Escritura, dijo: «Tengo sed.» <em class="text-success">(Jn. 19.28)</em>`,
                `Cuando tomoró el vinagre, Jesús dijo: «Todo está cumplido.» <em class="text-success">(Jn. 19.30)</em>`,
                `Dando un fuerte grito, Jesús dijo: «Padre, en tus manos encomiendo mi espíritu.» Y dicho esto, expiró. <em class="text-success">(Lc. 23.46)</em>`,
            ]
        ],
        gloriosos:[
            [
                `Al alborear el primer día de la semana, fueron María Magdalena y la otra María a ver el sepulcro. <em class="text-success">(Mt. 28.1)</em>`,
                `Y de pronto hubo un gran terremoto, porque un ángel del Señor bajó del cielo, se acercó, removió la piedra y se sentó sobre ella. <em class="text-success">(Mt. 28.2)</em>`,
                `Los guardias, atemorizados ante él, se pusieron a temblar y quedaron como muertos. <em class="text-success">(Mt. 28.4)</em>`,
                `El ángel se dirigió a las mujeres y les dijo: «No teman, sé que buscan a Jesús, el crucificado. No está aquí, ha resucitado, como lo había dicho. Vengan a ver el lugar donde estaba. <em class="text-success">(Mt. 28.5-6)</em>`,
                `Ellas partieron enseguida del sepulcro, con temor y gran alegría, y corrieron a dar la noticia a sus discípulos. <em class="text-success">(Mt. 28.8)</em>`,
                `Jesús les salió al encuentro y les dijo: «Dios las guarde. No teman, avisen a mis hermanos que vayan a Galilea, allí me verán.» <em class="text-success">(Mt. 28.9-10)</em>`,
                `Estaban los apóstoles hablando de estas cosas, cuando Jesús se presentó en medio de ellos y les dijo: «Paz a ustedes.» <em class="text-success">(Lc. 24.36)</em>`,
                `Así está escrito: el Mesías padecerá y resucitará de entre los muertos al tercer día. Ustedes son testigos de estas cosas. <em class="text-success">(Lc. 24.46-48)</em>`,
                `Yo soy la resurrección y la vida. El que cree en mí, aunque haya muerto, vivirá. <em class="text-success">(Jn. 11.25)</em>`,
                `El que vive y cree en mí, no morirá para siempre. <em class="text-success">(Jn. 11.26)</em>`,
            ],
            [
                `Después de su pasión, se les presentó dándoles muchas pruebas de que estaba vivo. Durante cuarenta días se les apareció y les habló del Reino de Dios. <em class="text-success">(Hch. 1.3)</em>`,
                `Los sacó hasta cerca de Betania y, alzando sus manos, los bendijo. <em class="text-success">(Lc. 24.50)</em>`,	
                `Fué levantado en presencia de ellos, y una nube lo ocultó a sus ojos. <em class="text-success">(Hch. 1.9)</em>`,
                `Mientras miraban fijos al cielo, viéndolo irse, se les presentaron dos hombres vestidos de blanco, <em class="text-success">(Hch. 1.10)</em>`,
                `que les dijeron: «Galileos, ¿qué hacen ahí mirando al cielo?» <em class="text-success">(Hch. 1.11)</em>`,
                `Este mismo Jesús, que ha sido llevado de entre ustedes al cielo, vendrá como lo han visto ir al cielo. <em class="text-success">(Hch. 1.11)</em>`,
                `Se volvieron a Jerusalén desde el monte llamado de los Olivos. <em class="text-success">(Hch. 1.12)</em>`,
                `Cuando llegaron, subieron a la instancia donde vivían. <em class="text-success">(Hch. 1.13)</em>`,
                `Todos ellos perseveraban unánimes en la oración, con un mismo espíritu. <em class="text-success">(Hch. 1.14)</em>`,
                `Estaban siempre en el templo, alabando y bendiciendo a Dios. <em class="text-success">(Lc. 24.53)</em>`,
            ],
            [
                `Cuando llegó el día de Pentecostés, estaban todos reunidos en un mismo lugar. <em class="text-success">(Hch. 2.1)</em>`,
                `De pronto, vino del cielo un ruido como el de un viento recio que soplaba, y llenó toda la casa donde estaban. <em class="text-success">(Hch. 2.2)</em>`,
                `Se les aparecieron lenguas como de fuego que se repartieron y se posaron sobre cada uno de ellos. <em class="text-success">(Hch. 2.3)</em>`,
                `Todos quedaron llenos del Espíritu Santo y comenzaron a hablar en otras lenguas, según el Espíritu les concedía expresarse. <em class="text-success">(Hch. 2.4)</em>`,
                `Había en Jerusalén judíos devotos, de todas las naciones del mundo. <em class="text-success">(Hch. 2.5)</em>`,
                `Al oír el ruido, acudieron en masa y quedaron desconcertados, porque cada uno los oía hablar en su propio idioma. <em class="text-success">(Hch. 2.6)</em>`,
                `Pedro les dijo: «Sepan con certeza toda la casa de Israel que Dios ha constituido Señor y Mesías a este Jesús a quien ustedes crucificaron.» <em class="text-success">(Hch. 2.36)</em>`,
                `Al oír esto, se les partió el corazón y preguntaron a Pedro y a los demás apóstoles: «Hermanos, ¿qué debemos hacer?» <em class="text-success">(Hch. 2.37)</em>`,
                `Pedro les contestó: «Conviértanse y bautícense en el nombre de Jesucristo para perdón de sus pecados, y recibirán el don del Espíritu Santo. <em class="text-success">(Hch. 2.38)</em>`,
                `Envias tu soplo, Señor, y son creados, y renuevas la faz de la tierra. <em class="text-success">(Sal. 104.30)</em>`,
            ],
            [
                `Escucha, hija, mira y pon atento tu oído, olvida tu pueblo y la casa de tu padre y el rey prendará tu belleza. <em class="text-success">(Sal. 45.11)</em>`,
                `Toda espléndida, la hija del rey va adentro, con vestidos en oro recamados; con sus brocados es llevada ante el rey. <em class="text-success">(Sal. 45.14)</em>`,
                `Bendita seas hija del Dios altisimo, más que todas las mujeres en la tierra. <em class="text-success">(Jdt. 13.18)</em>`,
                `Bendito sea Dios, que ha creado el cielo y la tierra, que te ha guiado. <em class="text-success">(Jdt. 13.18)</em>`,
                `Jamás la confianza que tú has manifestado faltará en el corazón de los hombres. <em class="text-success">(Jdt. 13.20)</em>`,
                `Tú eres la exaltación de Jerusalén. <em class="text-success">(Jdt. 15.9)</em>`,
                `Tú eres el orgullo de Israel. <em class="text-success">(Jdt. 15.9)</em>`,
                `Tú la suprema gloria de nuestro pueblo. <em class="text-success">(Jdt. 15.9)</em>`,
                `Logre yo hacer tu nombre memorable para todas las generaciones. <em class="text-success">(Sal. 45.18)</em>`,
                `Los pueblos te alaben por los siglos de los siglos. <em class="text-success">(Sal. 45.18)</em>`,
            ],
            [
                `Una gran señal apareció en el cielo: una mujer vestida del sol. <em class="text-success">(Ap. 12.1)</em>`,
                `La luna estaba bajo sus pies y sobre su cabeza una corona de doce estrellas. <em class="text-success">(Ap. 12.1)</em>`,
                `¿Quién es esa que avanza como el alba, hermosa como la luna, radiante como el sol, imponente como un ejército en orden de batalla? <em class="text-success">(Cant. 6.10)</em>`,
                `De pie a tu derecha está la reina, engalanada con oro de Ofir. <em class="text-success">(Sal. 45.10)</em>`,
                `Prendado está el rey de tu belleza, postrate ante él, que él es tu señor. <em class="text-success">(Sal. 45.12)</em>`,
                `La ciudad viene con regalos, los pueblos más ricos buscan tu favor. <em class="text-success">(Sal. 45.13)</em>`,
                `Ya entra la princesa, bellísima, vestida de perlas y brocados. <em class="text-success">(Sal. 45.14)</em>`,
                `La llevan ante el rey, con séquito de vírgenes, la siguen sus compañeras. <em class="text-success">(Sal. 45.15)</em>`,
                `Las traen entre alegría y algazara, van entrando en el palacio real. <em class="text-success">(Sal. 45.16)</em>`,
                `En lugar de tus padres tendrás hijos, los nombrarás príncipes por toda la tierra. <em class="text-success">(Sal. 45.17)</em>`,
            ]

        ],
        luminosos:[
            [
                `Juan Bautista se fue por toda la región del Jordán, predicando un bautismo de conversión para el perdón de los pecados.<em class="text-success">(Lc. 3.3)</em>`,
                `Entonces Jesús llegó desde Galilea al Jordán y se presentó a Juan para ser bautizado por él.<em class="text-success">(Mt. 3.13)</em>`,
                `Pero Juan se le oponía, diciendo: «Soy yo el que necesita ser bautizado por ti, ¿y tú vienes a mí?»<em class="text-success">(Mt. 3.14)</em>`,
                `Jesús le respondió: «Déjalo ahora, pues conviene que así cumplamos todo lo que está mandado.» Entonces Juan se lo permitió.<em class="text-success">(Mt. 3.15)</em>`,
                `Cuando todo el pueblo estaba bautizándose, también Jesús fue bautizado mientras oraba <em class="text-success">(Lc. 3.21)</em>`,
                `Entonces se abrió el cielo y el Espíritu Santo descendió sobre él en forma corporal, como una paloma»<em class="text-success">(Lc. 3.22)</em>`,
                `Y se oyó una voz del cielo que decía: «Tú eres mi Hijo amado, mi elegido, en quien me complazco.»<em class="text-success">(Lc. 3.22)</em>`,
                `Juan decía: «Yo no le conocía, pero he venido a bautizar con agua, para que Él sea manifestado a Israel.»<em class="text-success">(Jn. 1.31)</em>`,
                `Y Juan dio testimonio diciendo: «Yo vi al Espíritu descender del cielo como una paloma y posarse sobre Él.»<em class="text-success">(Jn. 1.32)</em>`,
                `Juan Bautista decía: «El que me envió a bautizar con agua me dijo: “Aquel sobre quien veas bajar el Espíritu y posarse sobre Él, ese es el que bautiza con el Espíritu Santo.”<em class="text-success">(Jn. 1.33)</em>`,
            ],
            [
                `Tres días después se celebraron unas bodas en Caná de Galilea, y la madre de Jesús estaba allí.<em class="text-success">(Jn. 2.1)</em>`,
                `Jesús y sus discípulos también fueron invitados a la boda.<em class="text-success">(Jn. 2.2)</em>`,
                `Como faltaba vino, la madre de Jesús le dijo: «No tienen vino.»<em class="text-success">(Jn. 2.3)</em>`,
                `Jesús le respondió: «Mujer, ¿qué tengo que ver yo contigo? Todavía no ha llegado mi hora.»<em class="text-success">(Jn. 2.4)</em>`,
                `Su madre dijo a los sirvientes: «Hagan lo que Él les diga.»<em class="text-success">(Jn. 2.5)</em>`,
                `Había allí seis tinajas de piedra, para lavarse las manos, y en cada una cabían unos cien litros de agua.<em class="text-success">(Jn. 2.6)</em>`,
                `Jesús les dijo: «Llenen de agua las tinajas.» Y las llenaron hasta arriba.<em class="text-success">(Jn. 2.7)</em>`,
                `Entonces les dijo: «Saquen ahora y llévenlo al jefe de la fiesta» Y se lo llevaron. <em class="text-success">(Jn. 2.8)</em>`,
                `Cuando el jefe de la fiesta probó el agua convertida en vino, como no sabía de dónde venía (aunque los sirvientes que habían sacado el agua lo sabían), dijo al novio: «Todos sirven primero el vino bueno y cuando ya están bebidos, el peor; tú, en cambio, has guardado el vino bueno hasta ahora.»<em class="text-success">(Jn. 2.9-10)</em>`,
                `Así, en Caná de Galilea, Jesús comenzó sus signos, manifestó su gloria y sus discípulos creyeron en Él.<em class="text-success">(Jn. 2.11)</em>`,
            ],
            [
                `Jesús marchó a Galilea, a anunciar las buenas noticias de Dios. Decía: «Se ha cumplido el tiempo y el Reino de Dios está cerca»<em class="text-success">(Mc. 1.14-15)</em>`,
                `Jesús decia: «Conviértanse, arrepientanse, vuelvanse a Dios y crean en la Buena Nueva.»<em class="text-success">(Mc. 1.15)</em>`,
                `Cuando comenzó Jesús a predicar decia: «conviertanse, porque el Reino de los Cielos está cerca.»<em class="text-success">(Mt. 4.17)</em>`,
                `Jesús decia: «Dichosos los pobres de espíritu, porque de ellos es el Reino de los Cielos.»<em class="text-success">(Mt. 5.3)</em>`,
                `Dijo el Señor: «quien desprecie alguno de los mandamientos aunque sea el más pequeño y así lo enseñe, será el más pequeño en el Reino de los Cielos; pero quien los cumpla y los enseñe, será grande en el Reino de los Cielos.»<em class="text-success">(Mt. 5.19)</em>`,
                `Dijo Jesús: «Si no se convierten todos, perecerán del mismo modo.»<em class="text-success">(Lc. 13.3)</em>`,
                `Busquen primero el Reino de Dios y su justicia, y todo lo demás se les dará por añadidura.<em class="text-success">(Mt. 6.33)</em>`,
                `Dijo Jesús: «No todo el que me dice: “Señor, Señor”, entrará en el Reino de los Cielos, sino el que cumple la voluntad de mi Padre que está en los Cielos.»<em class="text-success">(Mt. 7.21)</em>`,
                `El reino de delos cielos padece violencia, y los que se hacen violencia a sí mismos lo conquistan.<em class="text-success">(Mt. 11.12)</em>`,
                `El Hijo del hombre no vino a buscar a los justos, sino a los pecadores. Hay más alegría en el cielo por un pecador que se convierte que por noventa y nueve justos que no necesitan convertirse. <em class="text-success">(Lc. 15.7)</em>`,

            ],
            [
                `Seis días después, Jesús tomó a Pedro, a Santiago y a su hermano Juan, y los llevó aparte a un monte alto a orar.<em class="text-success">(Mt. 17.1)</em>`,
                `Allí se transfiguró en su presencia: su rostro resplandecía como el sol y sus vestidos se volvieron blancos como la luz.<em class="text-success">(Mt. 17.2)</em>`,
                `De repente se les aparecieron Moisés y Elías conversando con Él. <em class="text-success">(Mt. 17.3)</em>`,
                `Y Moisés y Elías llenos de gloria, hablaban de su partida, que iba a consumar en Jerusalén. <em class="text-success">(Lc. 9.31)</em>`,
                `Pedro tomó la palabra y dijo a Jesús: «Señor, ¡qué bien estamos aquí! Si quieres, haré aquí tres tiendas, una para ti, otra para Moisés y otra para Elías.»<em class="text-success">(Mt. 17.4)</em>`,
                `Todavía estaba hablando, cuando una nube luminosa los cubrió con su sombra, y al entrar en la nube, los apóstoles se llenaron de temor. <em class="text-success">(Lc. 9.34)</em>`,
                `y una voz desde la nube decía: «Éste es mi Hijo amado, en quien me complazco; escúchenlo.» <em class="text-success">(Mt. 17.5)</em>`,
                `Al oír esto, los discípulos cayeron rostro en tierra, llenos de temor.<em class="text-success">(Mt. 17.6)</em>`,
                `Luego los discípulos, alzando los ojos, no vieron a nadie más que a Jesús solo. <em class="text-success">(Mt. 17.8)</em>`,
                `Jesús acercándose, les tocó y les dijo: «Levántense, no teman.». Luego les mando que no contaran a nadie hasta que el Hijo del hombre resucitara de entre los muertos. <em class="text-success">(Mc. 9.9)</em>`,
            ],
            [
                `Antes de la fiesta de la Pascua, sabiendo Jesús que había llegado su hora de pasar de este mundo al Padre, habiendo amado a los suyos que estaban en el mundo, los amó hasta el extremo.<em class="text-success">(Jn. 13.1)</em>`,
                `Llegando el dia de comer pan sin levadura, en que se debía inmolar la Pascua, Jesús envió a Pedro y a Juan, diciendo: «Vayan y preparen la Pascua para nosotros, para que la comamos.»<em class="text-success">(Lc. 22.7-8)</em>`,
                `Cuando llegó la hora, se puso Jesús a la mesa con los apóstoles y les dijo: «He deseado enormemente comer esta Pascua con ustedes antes de padecer. Porque les digo que ya no la comeré más hasta que se cumpla en el Reino de Dios.»<em class="text-success">(Lc. 22.14-16)</em>`,
                `Mientras cenaban, Jesús tomó pan, lo bendijo, lo partió y se lo dio a los discípulos, diciendo: «Tomen y coman, este es mi cuerpo.»<em class="text-success">(Mt. 26.26)</em>`,
                `Del mismo modo, después de cenar, tomó el cáliz, dio gracias y se los dio, diciendo: «Tomen y beban todos de él, porque esta es mi sangre, la sangre de la alianza, que se derrama por ustedes y por muchos para el perdón de los pecados.»<em class="text-success">(Mt. 26.27-28)</em>`,
                `Jesus les dijo: «Hagan esto en memoria mía.»<em class="text-success">(Lc. 22.19)</em>`,
                `Cada vez que comemos de este pan y bebemos de este cáliz, anunciamos la muerte del Señor, hasta que venga.<em class="text-success">(1Co. 11.26)</em>`,
                `Quien come el pan o bebe el cáliz del Señor indignamente, será reo del cuerpo y de la sangre del Señor.<em class="text-success">(1Co. 11.27)</em>`,
                `Dijo Jesús: «Yo soy el pan que ha bajado del cielo; el que coma de este pan vivirá para siempre.»<em class="text-success">(Jn. 6.51)</em>`,
                `Decía Jesús: «Mi carne es verdadera comida y mi sangre es verdadera bebida. Si no comen la carne del Hijo del hombre y no beben su sangre, no tienen vida en ustedes.»<em class="text-success">(Jn. 6.55)</em>`
            ]
        ]
    }
    const prays={
        actOfContrition:`Jesús, mi Señor y Redentor, yo me arrepiento de todos los pecados que he cometido hasta hoy, y me pesa de todo corazón, porque con ellos he ofendido a un Dios tan bueno.<br>
        Propongo firmemente no volver a pecar y confío que por tu infinita misericordia me has de conceder el perdón de mis culpas y me has de llevar a la vida eterna. <strong>Amén</strong>`,
        creed     :`Creo en Dios, Padre todopoderoso, Creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo, nació de Santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado, descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos y está sentado a la derecha de Dios, Padre todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos. Creo en el Espíritu Santo, la Santa Iglesia católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna. <strong>Amén.</strong>`,
        hailMary  :`Dios te salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. <strong>Amén.</strong>`,
        glory     :`Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. <strong>Amén.</strong>`,
        eternalFather:`Padre Eterno, te ofrezco el Cuerpo, 
        <br>la Sangre, el Alma y la Divinidad 
        <br>de Tu Amadísimo Hijo, 
        <br>Nuestro Señor Jesucristo, 
        <br>para el perdón de nuestros 
        <br>pecados y los del mundo entero.`,
        ourFather:`Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal. <strong>Amén.</strong>`,
        hisSorrowfulPassion:`<strong class='text-danger'>V.</strong> Por su dolorosa pasión,
        <br><strong class='text-danger'>R.</strong>ten misericordia de nosotros y del mundo entero.`,
        holyGod:`<strong class='text-danger'>V.</strong>Santo Dios, Santo Fuerte, Santo Inmortal,
        <br><strong class='text-danger'>R.</strong> ten piedad de nosotros y del mundo entero.`,
        fatima    :`Oh mi buen Jesús, perdona nuestros pecados, líbranos del fuego del infierno, lleva todas las almas al cielo, especialmente las más necesitadas de tu misericordia Señor. <strong>Amén.</strong>`,
        offer     :"Ofrezco (Ofrezcamos) este rosario por ... ",
        offer1    :"Ofrezco (Ofrezcamos) este padre nuestro y tres avemarias por la intención del Santo Padre, el Papa Francisco, para ganar las indulgencias del Santo Rosario y por todas las benditas almas del purgatorio.",
        offer2    :"El rosario de María nos libre de todo mal, alabemos noche y día a la reina celestial.",
        finalPray :`Dios te salve, Reina y Madre de
        misericordia, vida, dulzura
        y esperanza nuestra: Dios te salve.
        A ti llamamos los desterrados hijos de
        Eva; a ti suspiramos, gimiendo
        <br>y llorando en este
        <br>valle de lágrimas. Ea, pues, Señora
        <br>abogada nuestra, vuelve a nosotros
        <br>esos tus ojos misericordiosos y,
        <br>después de este destierro, muéstranos a Jesús, fruto bendito de tu vientre.
        <br>¡Oh clementísima! ¡oh piadosa!
        <br>¡oh dulce Virgen María!
        <br><strong class='text-danger'>V.</strong> Ruega por nosotros santa
        Madre de Dios
        <br><strong class='text-danger'>R.</strong> Para que seamos dignos de alcanzar las promesas de nuestro Señor
        Jesucristo.
        <br>
        <strong>Amén.</strong>
        <br><br>
        Bajo tu amparo nos acogemos, Santa Madre de Dios; no deseches las oraciones que te dirigimos en nuestras necesidades, antes bien, líbranos de todo peligro, ¡oh Virgen gloriosa y bendita! <br><strong>Amén.</strong>`,
        finalPray2:`Dulce Madre, no te alejes, tu vista de mi rostro no apartes, ven con nosotros a todas partes y nunca solo me dejes. Ya que me proteges tanto como verdadera madre que eres, has que me bendiga el Padre, el Hijo y el Espíritu Santo. <br><strong>Amén.</strong>`,
        mystery   :"Vamos a contemplar los ",
        mysterys:{
            lunes    :mysterys.gozosos,
            martes   :mysterys.dolorosos,
            miercoles:mysterys.gloriosos,
            jueves   :mysterys.luminosos,
            viernes  :mysterys.dolorosos,
            sabado   :mysterys.gozosos,
            domingo  :mysterys.gloriosos
        },
        thoughtfulReadings:{
            lunes    :thoughtfulReadings.gozosos,
            martes   :thoughtfulReadings.dolorosos,
            miercoles:thoughtfulReadings.gloriosos,
            jueves   :thoughtfulReadings.luminosos,
            viernes  :thoughtfulReadings.dolorosos,
            sabado   :thoughtfulReadings.gozosos,
            domingo  :thoughtfulReadings.gloriosos
        }
    }
    
    return {mystery, mysterys, prays,selectMystery}
};