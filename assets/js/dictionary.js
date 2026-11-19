$(function() {

	var dict = {
		"What Mythic Plus Garbage Do I Have To Deal With This Week?": {
			es: "¿Cuáles son los retos a los que me enfrentaré esta semana en mi mítica+?",
			pt: "Quais são os desafios que vou enfrentar esta semana em minha mítica+?",
			fr: "Quelles galères vais-je devoir affronter cette semaine en Mythique+ ?"
		},
		"info_ood": {
			en: "Info might be a little out of date. I'm always accepting corrections or suggestions. Hit me up on discord: domain#2722 or at the ",
			es: "La información podría estar desactualizada. Estoy disponible a sugerencias o ajustes. Búscame en Discord: domain#2722 o en ",
			pt: "A página pode estar um pouco desactualizada. Estou disponível para correções ou sugestões. Me procure no Discord: domain#2722 ou no ",
			fr: "Les informations peuvent être légèrement obsolètes. J'accepte toujours les corrections ou suggestions. Contactez-moi sur Discord : domain#2722 ou sur "
		},
		"what m+ garbage do i have to deal with this week?": {
			es: "¿Cuáles son los retos a los que me enfrentaré esta semana en mi mítica+?",
			pt: "Quais são os desafios que vou enfrentar esta semana em minha mítica+?",
			fr: "Quelles galères vais-je devoir affronter cette semaine en Mythique+ ?"
		},
		"By request, here's a <a href=\"https://www.patreon.com/mythicplus\">Patreon link</a>. Thank you for your continued support.<br>As always, hit me up on <a href=\"https://discord.gg/Z7GPUw8\">discord</a>: domain#2722 or at the <a href=\"https://github.com/napnapnapnap/mythicpl.us\">github</a>.": {
			es: "Por petición, aquí está el enlace <a href=\"https://www.patreon.com/mythicplus\">del Patreon</a>. Gracias por tu apoyo.<br>Como siempre, buscame en <a href=\"https://discord.gg/Z7GPUw8\">discord</a>: domain#2722 o si quieres en <a href=\"https://github.com/napnapnapnap/mythicpl.us\">github</a>.",
			pt: "Atendendo a pedidos, compartilho o <a href=\"https://www.patreon.com/mythicplus\">link do Patreon</a>. Obrigado pelo seu apoio.<br>Como sempre, estou em <a href=\"https://discord.gg/Z7GPUw8\">discord</a>: domain#2722 ou no <a href=\"https://github.com/napnapnapnap/mythicpl.us\">github</a>.",
			fr: "À la demande générale, voici un <a href=\"https://www.patreon.com/mythicplus\">lien Patreon</a>. Merci pour votre soutien continu.<br>Comme toujours, contactez-moi sur <a href=\"https://discord.gg/Z7GPUw8\">Discord</a> : domain#2722 ou sur <a href=\"https://github.com/napnapnapnap/mythicpl.us\">GitHub</a>."
		},
		"Graphs": {
			es: "Gráficos",
			pt: "Gráficos",
			fr: "Graphiques"
		},
		"Open Menu": {
			es: "Abrir menú",
			pt: "Abrir menu",
			fr: "Ouvrir le menu"
		},
		"Calculator": {
			es: "Calculadora",
			pt: "Calculadora",
			fr: "Calculateur"
		},
		"Affixes": {
			es: "Afijos",
			pt: "Afixos",
			fr: "Affixes"
		},
		"Resources": {
			es: "Recursos",
			pt: "Ferramentas",
			fr: "Ressources"
		},
		"Timers": {
			es: "Tiempos",
			pt: "Tempos",
			fr: "Chronos"
		},
		"Loot": {
			es: "Botín",
			pt: "Saqueio",
			fr: "Butin"
		},
		"Raging": {
			es: "Furibunda",
			pt: "Enraivecedora",
			fr: "Déchaîné"
		},
		"Volcanic": {
			es: "Volcánica",
			pt: "Vulcânica",
			fr: "Volcanique"
		},
		"Teeming": {
			es: "Bullente",
			pt: "Apinhada",
			fr: "Grouillant"
		},
		"Explosive": {
			es: "Explosiva",
			pt: "Explosiva",
			fr: "Explosif"
		},
		"Bolstering": {
			es: "Potenciante",
			pt: "Encorajadora",
			fr: "Galvanisant"
		},
		"Overflowing": {
			es: "Dolorosa",
			pt: "Atrocidade",
			fr: "Débordant"
		},
		"Sanguine": {
			es: "Sanguina",
			pt: "Sanguínea",
			fr: "Sanguin"
		},
		"Bursting": {
			es: "Detonante",
			pt: "Explosivo",
			fr: "Détonant"
		},
		"Necrotic": {
			es: "Necrótica",
			pt: "Necrótica",
			fr: "Nécrotique"
		},
		"Skittish": {
			es: "Inquieta",
			pt: "Assustada",
			fr: "Fébrile"
		},
		"Quaking": {
			es: "Sísmica",
			pt: "Estremecendo",
			fr: "Sismique"
		},
		"Tyrannical": {
			es: "Tiránica",
			pt: "Tirânica",
			fr: "Tyrannique"
		},
		"Fortified": {
			es: "Reforzada",
			pt: "Fortificada",
			fr: "Fortifié"
		},
		"Black Rook Hold": {
			es: "Torreón Grajo Negro",
			pt: "Castelo Corvo Negro",
			fr: "Bastion du Freux"
		},
		"Court of Stars": {
			es: "Corte de las Estrellas",
			pt: "Pátio das Estrelas",
			fr: "Cour des Étoiles"
		},
		"Darkheart Thicket": {
			es: "Arboleda Corazón Oscuro",
			pt: "Bosque Corenegro",
			fr: "Fourré Sombrecœur"
		},
		"Eye of Azshara": {
			es: "Ojo de Azshara",
			pt: "Olho de Azshara",
			fr: "Œil d'Azshara"
		},
		"Halls of Valor": {
			es: "Cámaras del Valor",
			pt: "Salões da Bravura",
			fr: "Salles des Valeureux"
		},
		"Maw of Souls": {
			es: "Fauce de Almas",
			pt: "Gorja das Almas",
			fr: "Gueule des âmes"
		},
		"Neltharion's Lair": {
			es: "Guarida de Neltharion",
			pt: "Covil de Neltharion",
			fr: "Repaire de Neltharion"
		},
		"The Arcway": {
			es: "La Arquería",
			pt: "O Arcâneo",
			fr: "L'Arcavia"
		},
		"Vault of the Wardens": {
			es: "Cámara de las Celadoras",
			pt: "Câmara das Guardiãs",
			fr: "Caveau des Gardiennes"
		},
		"Lower Karazhan": {
			es: "Karazhan inferior",
			pt: "Karazhan inferior",
			fr: "Karazhan inférieur"
		},
		"Upper Karazhan": {
			es: "Karazhan superior",
			pt: "Karazhan superior",
			fr: "Karazhan supérieur"
		},
		"Cathedral of Eternal Night": {
			es: "Catedral de la Noche Eterna",
			pt: "Catedral da Noite Eterna",
			fr: "Cathédrale de la Nuit éternelle"
		},
		"Seat of the Triumvirate": {
			es: "Trono del Triunvirato",
			pt: "Sede do Triunvirato",
			fr: "Siège du Triumvirat"
		},
		"This Week": {
			es: "Esta semana",
			pt: "Esta semana",
			fr: "Cette semaine"
		},
		"Next week": {
			es: "Próxima semana",
			pt: "Próxima semana",
			fr: "Semaine prochaine"
		},
		"Week after next": {
			es: "Semana contígua",
			pt: "Semana depois da próxima",
			fr: "Dans deux semaines"
		},
		"CALCULATOR": {
			es: "CALCULADORA",
			pt: "CALCULADORA",
			fr: "CALCULATEUR"
		},
		"Calculate AP required to next artifact level and more!": {
			es: "¡Calcula el AP requerido para el siguiente nivel de artefacto y más!",
			pt: "Calcule o AP necessário para o próximo nível da arma de artefato e mais!",
			fr: "Calculez la puissance prodigieuse requise pour le prochain niveau d'arme prodigieuse et plus encore !"
		},
		"Affix effects": {
			es: "Efectos de los afijos",
			pt: "Efeitos dos afixos",
			fr: "Effets des affixes"
		},
		"Legend: ": {
			es: "Dificultad: ",
			pt: "Dificuldade: ",
			fr: "Difficulté : "
		},
		"easy difficulty": {
			es: "Fácil",
			pt: "Baixa",
			fr: "Facile"
		},
		"medium difficulty": {
			es: "Media",
			pt: "Média",
			fr: "Moyenne"
		},
		"hard difficulty": {
			es: "Alta",
			pt: "Alta",
			fr: "Difficile"
		},
		"Easy": {
			es: "Fácil",
			pt: "Baixa",
			fr: "Facile"
		},
		"Medium": {
			es: "Media",
			pt: "Média",
			fr: "Moyenne"
		},
		"Hard": {
			es: "Alta",
			pt: "Alta",
			fr: "Difficile"
		},
		"HP and Damage scaling per keystone level": {
			es: "Escala de Salud y Daño por nivel de Piedra angular mítica",
			pt: "Escala de HP e Dano por nível de Pedra-chave mítica",
			fr: "Échelonnement des PV et des dégâts par niveau de clé"
		},
		"Short survey to get your feedback on affix difficulty": {
			es: "Rellena la encuesta rápida (en inglés) para que tengamos tus opiniones sobre la dificultad de afijos",
			pt: "Preencha uma enquete rápida (em inglês) para que possamos ter um feedback sobre as dificuldades de afixos",
			fr: "Court sondage (en anglais) pour recueillir votre avis sur la difficulté des affixes"
		},
		"Curious about how I applied the results? Check ": {
			es: "¿Interesado en saber cómo obtuve los resultados? Compruébalo ",
			pt: "Interessado em descubrir como obtive os resultados? Comprovar ",
			fr: "Curieux de savoir comment j'ai appliqué les résultats ? Regardez "
		},
		"here!": {
			es: "aquí!",
			pt: "aqui!",
			fr: "ici !"
		},
		"Level 4 affixes ": {
			es: "Nivel 4 - Afijos ",
			pt: "Nível 4 - Afixos ",
			fr: "Affixes de niveau 4 "
		},
		"(these occur at +4 keystones)": {
			es: "(A partir de una piedra angular +4)",
			pt: "(desde uma pedra-chave +4)",
			fr: "(apparaissent à partir des clés +4)"
		},
		"Level 7 affixes ": {
			es: "Nivel 7 - Afijos ",
			pt: "Nível 7 - Afixos ",
			fr: "Affixes de niveau 7 "
		},
		"(these occur at +7 keystones)": {
			es: "(A partir de una piedra angular +7)",
			pt: "(desde uma pedra-chave +7)",
			fr: "(apparaissent à partir des clés +7)"
		},
		"Level 10 affixes ": {
			es: "Nivel 10 - Afijos ",
			pt: "Nível 10 - Afixos ",
			fr: "Affixes de niveau 10 "
		},
		"(these occur at +10 keystones)": {
			es: "(A partir de una piedra angular +10)",
			pt: "(desde uma pedra-chave +10)",
			fr: "(apparaissent à partir des clés +10)"
		},
		"bolstering_info": {
			en: "When any non-boss enemy dies, its death cry empowers nearby allies, temporarily increasing their health by 10%.",
			es: "Cuando un enemigo que no es un jefe muere, su grito al morir potencia a los aliados cercanos, lo que aumenta su salud y su daño máximos un 20%. Radio del grito 30 metros.",
			pt: "Quando um inimigo que não é chefe morre, os aliados a 30 metros dele recebem um bônus que aumenta sua vida máxima e seu dano em 20%, e o efeito acumula.",
			fr: "Lorsqu'un ennemi qui n'est pas un boss meurt, son cri d'agonie renforce les alliés proches, ce qui augmente temporairement leurs points de vie de 10%."
		},
		"bolstering_note": {
			en: "Note: it's important to kill all the trash in a pull as closely together as possible with this affix as mobs effectively heal as they gain max health (percent translation). Adds spawned from a trash mob or boss ability do not trigger bolster. It's possible to reset bolster on mobs by resetting them via wiping or exiting combat.",
			es: "Nota: Es importante intentar matar todo el pull a la vez para no potenciar a los enemigos cercanos. Los enemigos adicionales que aparecen en un combate contra un jefe de mazmorra no son afectados por la Potenciante.",
			pt: "Nota: É necessário tentar balancear o dano de forma que todos os inimigos morram juntos evitando potenciar os que estao ao redor. Os inimigos que aparecem junto com o chefe da masmorra não são afetados pela Encorajadora.",
			fr: "Note : il est important de tuer tous les ennemis d'un pack en même temps avec cet affixe, car les monstres se soignent effectivement lorsqu'ils gagnent des points de vie maximums. Les ennemis invoqués par une compétence d'un monstre ou d'un boss ne déclenchent pas Galvanisant. Il est possible de réinitialiser Galvanisant sur les monstres en sortant de combat ou après un wipe."
		},
		"raging_info": {
			en: "Non-boss enemies enrage at 30% health remaining, temporarily granting immunity to crowd control effects.",
			es: "Los enemigos que no son jefes se enfuceren cuando alcanzan un 30% de salud, por lo que infligen un 100% más de daño hasta que sean derrotados.",
			pt: "Os Inimigos que não são chefes ficam enfurecidos ao alcançar 30% de vida, causando 100% mais de dano até serem derrotados.",
			fr: "Les ennemis qui ne sont pas des boss deviennent enragés lorsqu'il leur reste 30% de points de vie, ce qui les rend temporairement insensibles aux effets de contrôle."
		},
		"raging_note": {
			en: "Note: mobs with high damage targeted abilities or high damage AoE abilities become deadly with this affix. Be sure to focus fire mobs down so there aren't multiple enraged mobs at once.",
			es: "Nota: los enemigos con habilidades que hacen mucho daño AoE o daño directo son mortales con este afijo. Asegúrate de hacer bien el foco e intenta reservar los stuns y ccs cuando estén enfurecidos. Caso se curen después de enfurecerse, seguirán enfucecidos hasta que mueran.",
			pt: "Nota: inimigos com habilidades que causam muito dano em áreas ou direto são mortais com este afixo. Garanta que o foco principal esteja morto e guarde algum aturdir e cc para quando estiverem enfurecidos. Se os enemigos se curam depois de potenciar-se, seguirão potenciados até que morram.",
			fr: "Note : les ennemis ayant des compétences ciblées ou de zone à forts dégâts deviennent mortels avec cet affixe. Assurez-vous de concentrer vos dégâts pour ne pas avoir plusieurs ennemis enragés en même temps."
		},
		"sanguine_info": {
			en: "When slain, non-boss enemies leave behind a lingering pool of ichor that heals their allies and damages players.",
			es: "Al morir, los enemigos que no son jefes dejan debajo suyo un charco persistente de icor que sana a sus aliados e inflige daño a los jugadores.",
			pt: "Ao morrer, inimigos que não-chefes deixam debaixo uma poça de sangue que cura aos aliados e causa dano aos jogadores.",
			fr: "Une fois tués, les ennemis qui ne sont pas des boss laissent derrière eux une flaque d'ichor persistante qui rend des points de vie à leurs alliés et inflige des dégâts aux joueurs."
		},
		"sanguine_note": {
			en: "Note: ez pz affix, don't stand in pools and make sure mobs don't stand in them either.",
			es: "Nota: afijo facilito :), no te quedes parado en los pulls y asegúrate de que los enemigos tampoco estén parados en el charco. ¡A moverse!",
			pt: "Nota: afixo facinho, facinho... Não fique parado nos mobs e mantenhase em movimento. Garanta que os inimigos também se movam. Movimento, movimento!",
			fr: "Note : affixe très facile, ne restez pas dans les flaques et assurez-vous que les ennemis n'y restent pas non plus."
		},
		"teeming_info": {
			en: "Additional non-boss enemies are present throughout the dungeon.",
			es: "Hay enemigos (no jefes) adicionales por toda la mazmorra.",
			pt: "Inimigos (não chefes) adicionais estão presentes na masmorra.",
			fr: "Des ennemis supplémentaires (hors boss) sont présents dans tout le donjon."
		},
		"teeming_note": {
			en: "Note: Not much different from usual unless paired with other problematic affixes (Skittish). The most notable change with this affix is that the Enemy Forces Defeated kill requirement is increased. Certain trash pulls can be really nasty with this affix depending on the dungeon.",
			es: "Nota: No es muy relevante, al menos que esté emparejado con otros afijos problemáticos (Inquieta). El cambio más notable con este afijo es que el requisito de hacer porcentaje aumenta igual que las tropas. Ciertos pulls pueden ser realmente desagradables con este afijo dependiendo de la mazmorra.",
			pt: "Nota: Não é muito relevante, ao menos que esteja em conjunto com outros afixos problemáticos (Assustada). A mudança mais perceptível com este afixo é que o requisito de matar inimigos não-chefes aumenta. Alguns mobs podem ser realmente horríveis com este afixo dependendo da masmorra.",
			fr: "Note : Pas très différent de d'habitude à moins d'être associé à d'autres affixes problématiques (Fébrile). Le changement le plus notable avec cet affixe est que le nombre de forces ennemies à vaincre est augmenté. Certains packs peuvent être très dangereux avec cet affixe selon le donjon."
		},
		"bursting_info": {
			en: "When slain, non-boss enemies explode, causing all players to suffer 10% of their maximum health in damage over 4 seconds. (5% every 2 seconds) This effect stacks.",
			es: "Al morir, los enemigos que no son jefes explotan, por lo que todos los jugadores reciben un 10% de su salud máxima como daño durante 4 s. Este efecto se acumula.",
			pt: "Quando mortos, inimigos que não são chefes explodem, fazendo com que todos os jogadores recebam dano equivalente a 10% do máximo de pontos de vida ao longo de 4 s. Este efeito acumula.",
			fr: "Une fois tués, les ennemis qui ne sont pas des boss explosent, ce qui inflige à tous les joueurs un montant de dégâts égal à 10% de leurs points de vie maximums en 4 s (5% toutes les 2 s). Cet effet est cumulable."
		},
		"bursting_note": {
			en: "Note: As far as I know there is no range on this. Consider it to work like Mythic Il'gynoth blobs.",
			es: "Nota: Este afijo parece que ignora el rango y columneo. Así que cuidado.",
			pt: "Nota: Este afixo parece que ignora o alcance. Portanto cuidado!",
			fr: "Note : Cet affixe ignore la portée et le champ de vision. Faites donc attention en tuant de gros packs."
		},
		"necrotic_info": {
			en: "All enemies' melee attacks apply a stacking blight that inflicts damage over time and reduces healing received.",
			es: "Todos los ataques cuerpo a cuerpo de los enemigos aplican un añublo que se acumula, inflige daño en el tiempo y reduce la sanación recibida.",
			pt: "Todos os ataques corpo a corpo dos inimigos aplicam uma praga cumulativa que causa dano ao longo do tempo e reduz a cura recebida.",
			fr: "Toutes les attaques de mêlée des ennemis appliquent une peste cumulable qui inflige des dégâts sur la durée et réduit les soins reçus."
		},
		"necrotic_note": {
			en: "Note: Strong AoE CC or slows are great for this affix to allow for kiting mobs while the tank's Necrotic stacks fall off.",
			es: "Nota: Está muy bien utilizar correctamente los CCs en áreas y ralentizaciones con este afijo para permitir kitear bien los pulls mientras el tanque se limpia de las cargas de Necrótica.",
			pt: "Nota: É importante utilizar corretamente os CCs de controle massivo e redução de velocidade dos inimigos para permitir que o tanque possa fugir. Desta forma ele pode limpar-se das cargas necróticas.",
			fr: "Note : Les contrôles de zone et les ralentissements sont excellents pour cet affixe afin de permettre au tank de kiter les monstres le temps que ses charges de Nécrotique disparaissent."
		},
		"skittish_info": {
			en: "Enemies pay far less attention to threat generated by tanks.",
			es: "Los enemigos prestan menos atención a la amenaza generada por los tanques.",
			pt: "Os inimigos dão muito menos atenção à ameaça gerada por tanques.",
			fr: "Les ennemis prêtent beaucoup moins d'attention à la menace générée par les tanks."
		},
		"skittish_note": {
			en: "Note: This affix is a lot easier if Tricks of the Trade or Misdirection are used on cooldown. Strong AoE CC is beneficial here as well in case mobs get loose.",
			es: "Nota: Este afijo es mucho más fácil si el grupo utiliza recursos de clase como redirección a CD. CCs en áreas también ofrecen ventaja en el caso de que los pulls se escapen del tanque.",
			pt: "Nota: Este afixo é bem mais fácil se o grupo utiliza corretamente os recursos de classe como redirecionar a CD. Controles de áreas também são vantajosos caso os inimigos se separem do tanque.",
			fr: "Note : Cet affixe est beaucoup plus facile si Ficelles du métier ou Détournement sont utilisés dès que disponibles. Les contrôles de zone sont également utiles au cas où des ennemis échapperaient au tank."
		},
		"volcanic_info": {
			en: "While in combat, enemies periodically cause gouts of flame to erupt beneath the feet of distant players.",
			es: "Mientras están en combate, los enemigos provocan de forma periódica que surjan llamas bajo los pies de los jugadores distantes.",
			pt: "Enquanto estiverem em combate, os inimigos periodicamente fazem com que glóbulos de fogo surjam sob os pés dos jogadores distantes.",
			fr: "Lorsqu'ils sont en combat, les ennemis font périodiquement jaillir des flammes sous les pieds des joueurs éloignés."
		},
		"volcanic_note": {
			en: "Note: Keep an eye out for the volcano animation under your feet or near you. Sometimes you may not have to move!",
			es: "Nota: Estate atento a la animación del volcán bajo tus pies o cerca de ti. ¡A veces puede que no tengas que moverte!",
			pt: "Nota: Fique atento as animações do vulcão debaixo dos seus pés ou perto de você. As vezes você nem precisa mover-se!",
			fr: "Note : Gardez un œil sur l'animation du volcan sous vos pieds ou près de vous. Parfois, vous n'aurez même pas besoin de bouger !"
		},
		"explosive_info": {
			en: "Creatures have a chance to summon an Explosive Orb at a nearby location that will explode, inflicting damage 50% of the player’s maximum health as damage.",
			es: "Mientras están en combate, los enemigos invocan de forma periódica orbes explosivos que detonan si nadie los destruye.",
			pt: "Em combate, os inimigos evocam periodicamente orbes Explosivos que explodirão se não forem destruídos.",
			fr: "En combat, les ennemis invoquent périodiquement des orbes explosifs qui détonent s'ils ne sont pas détruits, infligeant des dégâts égaux à 50% des points de vie maximums du joueur."
		},
		"explosive_note": {
			en: "Note: An explosive orb will spawn with a 6 second cast. If the cast goes off the entire party will take 50% of their max hp in damage. They are <strong>AOE immune so you can't cleave them down!</strong> They can also spawn on boss fights.",
			es: "Nota: Un orbe explosivo aparece con un lanzamiento de hechizo de 6 segundos. Si el orbe castea, todo el grupo recibirá un daño del 50% de salud máxima. ¡Estos son <strong>inmunes al daño en áreas, o sea cleave no funciona!</strong> Los orbes pueden aparecer en combates con jefes.",
			pt: "Nota: Um orbe explosivo surge com um lançamento de magia de 6 segundos. Caso o orbe finalize o lançamento, todo o grupo recebe um dano de 50% de sua saúde máxima. Eles são <strong>imunes ao dano em áreas ou cleave</strong> Los orbes pueden aparecer en combates con jefes.",
			fr: "Note : Un orbe explosif apparaît avec une incantation de 6 secondes. Si l'incantation se termine, tout le groupe subit 50% de ses PV max en dégâts. Ils sont <strong>insensibles aux dégâts de zone (AoE), vous ne pouvez donc pas les cleave !</strong> Ils peuvent également apparaître pendant les combats de boss."
		},
		"quaking_info": {
			en: "Players will periodically Quake, inflicting 20% of the player’s maximum health as damage and interrupting spell casts of themselves and nearby allies.",
			es: "Los jugadores emiten una ola de choque de forma periódica, lo que inflige daño e interrumpe a los aliados cercanos.",
			pt: "Os jogadores emitem periodicamente uma onda de choque, causando dano e interrompendo aliados próximos.",
			fr: "Les joueurs émettent périodiquement une onde de choc qui inflige des dégâts égaux à 20% de leurs points de vie maximums et interrompt leurs incantations ainsi que celles des alliés proches."
		},
		"quaking_note": {
			en: "Note: spread out.",
			es: "Nota: Separaos. Cuanto más separados estén, mejor. Interrumpe los lanzamientos de hechizos y también el intento de adquirir el buffo de comida.",
			pt: "Nota: Separarem-se!",
			fr: "Note : Écartez-vous les uns des autres."
		},
		"overflowing_info": {
			en: "Healing in excess of a target's maximum health is instead converted to a heal absorption effect.",
			es: "Cuando estáis heridos y os queda menos del 90% de salud, recibiréis daño creciente en el tiempo hasta que os curen y recuperéis al menos el 90% de esta.",
			pt: "Quando são feridos e chegam a menos de 90% dos pontos de vida, os jogadores sofrem dano crescente ao longo do tempo até serem curados acima de 90% dos pontos de vida.",
			fr: "Les soins prodigués au-delà du maximum de points de vie d'une cible sont convertis en un effet d'absorption de soins."
		},
		"overflowing_note": {
			en: "Note: only people specced as healer will trigger this effect. Self-heals do not count toward the healing absorption shield. The shield is not additive.",
			es: "Nota: Sangrarás hasta que se te cure por encima del 90%. ¡Finalmente, otra razón para culpar a tu healer (¿no hay nada que curar?)!",
			pt: "Nota: Você sangrará enquanto não se curar mais de 90%. Finalmente, outro motivo para culpar seu healer!",
			fr: "Note : seuls les joueurs spécialisés en tant que soigneur déclenchent cet effet. Les soins personnels ne comptent pas dans le bouclier d'absorption de soins. Le bouclier ne se cumule pas."
		},
		"fortified_info": {
			en: "Non-boss enemies have 20% more health and inflict up to 20% increased damage.",
			es: "Los enemigos que no son jefes tienen un 20% más de salud e infligen hasta un 30% más de daño.",
			pt: "Inimigos que não são chefes têm 20% mais pontos de vida e causam até 30% a mais de dano.",
			fr: "Les ennemis qui ne sont pas des boss ont 20% de points de vie en plus et infligent jusqu'à 20% de dégâts supplémentaires."
		},
		"fortified_note": {
			en: "Note: interrupting and dodging any/all trash mob abilities becomes an absolute priority with this affix. Most of the time spent in the dungeon will be fighting beefy trash, don't be afraid to use CDs.",
			es: "Nota: Interrumpir y esquivar la mayoría (o todas) las habilidades de los pulls se convierte en una prioridad absoluta con este afijo. La mayor parte del tiempo que pases en la mazmorra lucharás duramente contra los pulls, así que por favor, usa tus CDs.",
			pt: "Nota: Interromper e esquivar a maioria (ou todas) as habilidades dos mobs são prioridade absoluta com este afixo. A maior parte do tempo dentro da masmorra estarás em combate puramente com mobs, não economize os CDs.",
			fr: "Note : interrompre et esquiver toutes les compétences des monstres devient une priorité absolue avec cet affixe. La majeure partie du temps passé dans le donjon consistera à combattre des packs coriaces, n'ayez pas peur d'utiliser vos temps de recharge (CD)."
		},
		"tyrannical_info": {
			en: "Bosses have 25% more health. Bosses and their minions inflict up to 15% increased damage.",
			es: "Los jefes enemigos tienen un 40% más de salud e infligen hasta un 15% más de daño.",
			pt: "Inimigos chefes têm 40% a mais de vida e causam até 15% a mais de dano.",
			fr: "Les boss ont 25% de points de vie en plus. Les boss et leurs serviteurs infligent jusqu'à 15% de dégâts supplémentaires."
		},
		"tyrannical_note": {
			en: "Note: Boss abilities are no longer trivial. Boss mechanics need to be done or people will die. Some fights become endurance tests because they last so long.",
			es: "Nota: Las habilidades de los jefes ya no son triviales. La mecánica del jefe debe hacerse o se morirá \"la people\". Algunas peleas se convierten en pruebas de resistencia porque duran mucho tiempo.",
			pt: "Nota: As habilidades dos chefe não são mais triviais. As mecânicas do chefe precisam ser feitas ou verás gente morta :). Alguns combates se tornam verdadeiras provas de resistência (e não é do BBB) porque duram muito tempo.",
			fr: "Note : Les compétences des boss ne sont plus triviales. Les mécaniques des boss doivent être respectées sous peine de mort. Certains combats deviennent de véritables épreuves d'endurance car ils durent très longtemps."
		},
		"Weekly schedule for affixes": {
			es: "Calendario semanal de afijos",
			pt: "Agenda semanal de afixos",
			fr: "Calendrier hebdomadaire des affixes"
		},
		"Useful stuff": {
			es: "Cosas útiles",
			pt: "Coisas úteis",
			fr: "Choses utiles"
		},
		"Addons": {
			es: "Addons",
			pt: "Add-ons",
			fr: "Addons"
		},
		"PSA: I took off a pile of outdated addons and updated a few that have maintained forks.": {
			es: "PD: He quitado algunos addons desactualizados y puse algunos nuevos con las sugerencias de colaboradores.",
			pt: "PS: Removi alguns add-ons desatualizados e adicionei alguns mais recentes conforme as sugestões dos colaboradores.",
			fr: "Note : J'ai retiré une pile d'addons obsolètes et mis à jour quelques-uns qui ont des versions maintenues."
		},
		" - All-in-one mythic+ timer. Shows % value of mobs on tooltip, timers required for +2/+3 chest and times that objectives are completed.": {
			es: " - Todo en uno para míticas+. Muestra el porcentaje (%) de enemigos no-jefes al pasar el ratón sobre ellos, los temporizadores necesarios para hacer en +2 / +3 cofres y los tiempos en que concluyeron los objetivos.",
			pt: " - Tudo em um para míticas+. Mostra o percentual (%) de inimigos ao passar o mouse sobre eles, cronometro necessário para finalizar com +2 / +3 baús e os tempos de conclusão dos objetivos.",
			fr: " - Chronomètre tout-en-un pour Mythique+. Affiche le % des ennemis dans l'infobulle, les temps requis pour +2/+3 coffres et les temps de complétion des objectifs."
		},
		" - Another take on the keystone/mythic+ timer. Displays affix rotation schedule and current affixes as well as providing chest timers and kill count % ingame. Also styles keystone links ingame to show you what dungeon they're for.": {
			es: " - Otra forma de visualizar el temporizador de la mítica+. Muestra el calendario de la rotación de afijos y también los afijos actuales, además de proporcionar temporizadores para los cofres y recuento de muertes de los enemigos no-jefes. También es posible enlazar la piedra en el juego para enseñar las mazmorras y dificultades.",
			pt: " - Outra forma de visualizar o cronometro na mítica+. Mostra uma agenda com a rotaçao dos afixos e também os afixos atuais, além disso disponibiliza o cronometro para os baús e contagem de tropas pendentes. Também é possível linkear pedras-chave com as masmorras e dificuldades.",
			fr: " - Une autre approche du chronomètre Mythique+. Affiche le calendrier de rotation des affixes et les affixes actuels, tout en fournissant les chronos des coffres et le % de forces ennemies en jeu. Personnalise également les liens de clés en jeu pour indiquer de quel donjon il s'agit."
		},
		"Keystone information": {
			es: "Datos sobre piedra angular mítica",
			pt: "Dados de pedras-chave mítica",
			fr: "Informations sur les clés"
		},
		" - Shows keys for guild mates, Battle Net friends and alts. It also shows if your friends/guildies have done a 15+ or not!": {
			es: "- Muestra las piedras angulares para compañeros del clan, amigos de Battle.Net y alters. ¡También muestra si tus amigos / compañeros del clan han hecho piedras superiores a una +15 o no!",
			pt: " - Mostra as pedras-chave para as pessoas da guilda, amigos de Battle.Net e alters. Também mostra se seus amigos / pessoas do clan finalizaram pedras-chave superiores a +15 ou não!",
			fr: " - Affiche les clés des membres de la guilde, des amis Battle.net et des rerolls. Montre également si vos amis/membres de guilde ont terminé une +15 ou non !"
		},
		" - Queries other people in guild or group with the addon to see what keystones people have.": {
			es: " - Búsqueda de piedras angulares mítica en la hermandad o grupo para saber qué piedra tiene cada uno (que también tenga este addon).",
			pt: " - Busca pedras-chave míticas na guilda ou grupo para saber qual pedra-chave tem cada um (que também tenha o addon instalado).",
			fr: " - Interroge les autres membres de la guilde ou du groupe possédant l'addon pour voir quelles clés ils ont."
		},
		" - Queries people in guild with the addon to build a list of keystones.": {
			es: " - Hace una lista de piedras y dificultades de todas las personas en la hermandad con el addon instalado.",
			pt: " - Gera uma lista com as pedras-chave e dificuldades das pessoas na guilda com o addon instalado.",
			fr: " - Interroge les membres de la guilde possédant l'addon pour établir une liste des clés."
		},
		" - Inserts whispered keystones into the default LFG UI. Useful for boosting/carry groups.": {
			es: " - Enlaza las piedras susurradas en la interfaz del buscador. Útil para boosteo y grupos para carrito.",
			pt: " - Link das pedras-chaves sussurradas na interface do buscador. Muito útil para boost e grupos de rush.",
			fr: " - Insère les clés chuchotées dans l'interface de recherche de groupe par défaut. Utile pour les groupes de boost."
		},
		" - The largest M+ Discord server. I lurk here!": {
			es: " - El mayor Discord de míticas+. ¡Estoy de paseo por aquí!",
			pt: " - O maior Discord de míticas+. Estou escondido por aqui!",
			fr: " - Le plus grand serveur Discord M+. J'y traîne !"
		},
		" - Find RBG or M+ groups. Central focus on pushing high keystones. NA groups.": {
			es: " - Búsqueda de RGBs o míticas+. Enfoque central en pushear piedras altas.",
			pt: " - Buscar RGBs ou míticas+. Focado principalmente em subir pedras-chave altas.",
			fr: " - Trouvez des groupes RBG ou M+. Principalement axé sur les hautes clés. Groupes NA."
		},
		" - Same as above but for EU groups.": {
			es: " - El mismo Discord que el anterior pero para grupos EUROPEUS.",
			pt: " - Idem ao anterior porém para grupos EUROPEUS.",
			fr: " - Identique au précédent mais pour les groupes EU."
		},
		"Stats and Tools": {
			es: "Estadísticas y herramientas",
			pt: "Estatísticas e ferramentas",
			fr: "Statistiques et outils"
		},
		" - Raider.io has all kinds of tools including character specific M+ tracking, successful run comp tracking, and ranks for m+ dungeons. They're <strong>community</strong> run and have some cool planned features. Stay tuned! The site is also snappy AF. ": {
			es: " - Raider.io posee todos los tipos de herramientas para míticas+, incluye el rastreo de míticas+ en tiempo y clasificaciones de las míticas+. Ellos son una <strong>comunidad</strong> y tienen algunos recursos planificados muy buenos. ¡Estate atento! La página es rápida y jodidamente buena.",
			pt: " - Raider.io tem todos os tipos de ferramentas específicas para míticas+, incluindo rastreamento de corridas em tempo e classificações para masmorras+. Eles são uma<strong>comunidade</strong> e têm alguns recursos planejados bem legais. Fique ligado! O site também é foda.",
			fr: " - Raider.io propose toutes sortes d'outils, y compris le suivi M+ par personnage, le suivi des compositions réussies et les classements pour les donjons M+. C'est géré par la <strong>communauté</strong> avec d'excellentes fonctionnalités prévues. Le site est aussi ultra rapide."
		},
		" - (Mythic Plus Helper) Looks up group candidates and returns ilvl equipped/highest, total mythic plus runs and legendaries! Be sure to get the <a href=\"https://mods.curse.com/addons/wow/260666-mythic-plus-helper\">addon</a> for ease of use. <strong>Community created!</strong>": {
			es: " - (Mythic Plus Helper) Revisa candidatos del grupo y muestra el ilvl equipado/más alto, total de míticas+ y también legendarios! Asegúrate de utilizar la página \"<a href=\"https://mods.curse.com/addons/wow/260666-mythic-plus-helper\">complementar</a>\" para facilitar su uso. <strong>¡Comunidad creada!</strong>",
			pt: " - (Mythic Plus Helper) Revisa os candidatos para entrar no grupo e mostra o ilvl equipado/mais alto, total de corridas míticas+ e também os legendários! Tenha em mãos a página web <a href=\"https://mods.curse.com/addons/wow/260666-mythic-plus-helper\"> complementar </a> para facilitar a utilização.<strong>¡Comunidade criada!</strong>",
			fr: " - (Mythic Plus Helper) Recherche les candidats du groupe et affiche le niveau d'objet équipé/maximum, le total de donjons Mythique+ terminés et les légendaires ! N'oubliez pas de télécharger l'<a href=\"https://mods.curse.com/addons/wow/260666-mythic-plus-helper\">addon</a> pour faciliter son utilisation. <strong>Créé par la communauté !</strong>"
		},
		" - TONS OF USEFUL TOOLS. This site has player lookups that show content cleared, mythic plus stats, and more. The site might run a little slow because of all the data it's crunching, but it's worth it. <strong>Community created!</strong>": {
			es: " - TONELADAS DE HERRAMIENTAS ÚTILES. Este sitio tiene búsqueda de jugadores que muestra el contenido realizado, estadísticas de míticas+, y más. El sitio puede funcionar un poco lento debido a toda la información que se está procesando, pero vale la pena. <strong>¡Comunidad creada!</strong>",
			pt: " - TONELADAS DE FERRAMENTAS ÚTEIS. Este site tem pesquisas de jogadores que mostra o conteúdo realizado, estatísticas de míticas+ e muito mais. O site pode ser um pouco lento pela quantidade de dados que está sendo processado, mas vale a pena. <strong>Comunidade criada!</ strong>",
			fr: " - DES TONNES D'OUTILS UTILES. Ce site permet de rechercher des joueurs pour voir le contenu terminé, les statistiques Mythique+, et plus encore. Le site peut être un peu lent en raison de toutes les données traitées, mais cela en vaut la peine. <strong>Créé par la communauté !</strong>"
		},
		" - Highlights active explosive orb nameplates and provides a tracker of active explosive orbs. Great for explosive week!": {
			es: " - Destaca las placas de nombre de los orbes explosivos activos y muestra un rastreador de orbes explosivos activos. ¡Genial para una semana con este afijo!",
			pt: " - Destaca as placas de identificação dos orbes explosivos e fornece um rastreador de orbs ativos. É ótimo para as semanas com este afixo!",
			fr: " - Met en évidence les barres de nom des orbes explosifs actifs et fournit un suivi des orbes actifs. Idéal pour la semaine Explosif !"
		},
		" - Weakaura that tracks time until target death, average kill times, time until boss death, etc.": {
			es: " - Weakaura que rastrea el tiempo hasta que muera objetivo, los tiempos promedio de muerte, el tiempo hasta la muerte del jefe, etc.",
			pt: " - Weakaura que acompanha o tempo até a morte do objetivo, tempos médios da morte, tempo até morrer do chefe da masmorra, etc.",
			fr: " - WeakAura qui suit le temps restant avant la mort de la cible, les temps moyens d'élimination, le temps avant la mort du boss, etc."
		},
		" - Dungeon specific WeakAuras with a cc tracker.": {
			es: " - Auras específicas para las mazmorras, tiene rastreador de CC.",
			pt: " - Específicas para masmorras com um rastreador de CC.",
			fr: " - WeakAuras spécifiques aux donjons avec un suivi des contrôles de foule (CC)."
		},
		" - A WeakAura to track raid/group utility CDs (i.e Barkskin, Blessing of Sacrifice, etc).": {
			es: " - WeakAura para rastrear los CDs de utilidad en banda/grupo (Por ejemplo: Piel de corteza, Bendición del sacrificio, etc.).",
			pt: " - Para rastrear CDs úteis de uma raid/grupo (ou seja, Barkskin, Bênção de Sacrifício, etc.).",
			fr: " - Une WeakAura pour suivre les CD utilitaires de raid/groupe (ex. Écorce, Bénédiction de sacrifice, etc.)."
		},
		" - Very useful. It shows you how much physical and magic damage you can take. Based on current health, absorbs, and defensive cooldowns from yourself and others.": {
			es: " - Muy útil. Muestra cuanto daño físico y mágico puedes recibir. Basado en tu salud actual, absorciones y CDs defensivos, tuyos y de otros.",
			pt: " - Muito util. Mostra quanto dano fisico e mágico pode receber. Baseado no seu nível de saúde atual, absorçoes e CDs defensivos, seus e de outras pessoas.",
			fr: " - Très utile. Montre la quantité de dégâts physiques et magiques que vous pouvez encaisser selon vos points de vie actuels, vos absorptions et vos CD défensifs (les vôtres et ceux des autres)."
		},
		"Keystones": {
			es: "Piedras angulares míticas",
			pt: "Pedra-chave mítica",
			fr: "Clés mythiques"
		},
		"Complete a Mythic Keystone run within the timer to upgrade a keystone.": {
			es: "Finaliza una mazmorra mítica para mejorar la piedra angular.",
			pt: "Complete uma corrida mítica para aumentar uma Pedra-chave mítica.",
			fr: "Terminez un donjon de clé mythique dans le temps imparti pour améliorer votre clé."
		},
		"Complete it with 40% of the timer remaining and upgrade it 3 times in one go. i.e. Keystone level 5 to keystone level 8.": {
			es: "Finaliza con 40% del tiempo restante para que mejore 3 niveles. Ejemplo: Piedra angular de nivel 5 sube al nível 8.",
			pt: "Conclúa com 40% do tempo restante e aumente 3 níveis de uma vez. Exemplo: Pedra-chave de nível 5 subirá ao nível 8.",
			fr: "Terminez-le avec 40% du temps restant pour l'améliorer de 3 niveaux d'un coup (ex. : clé de niveau 5 à clé de niveau 8)."
		},
		"Complete a run with 20% of the timer remaining and upgrade it 2 times in one go. i.e. keystone level 5 to keystone level 7.": {
			es: "Finaliza con 20% del tiempo restante para que mejore 2 niveles. Ejemplo: Piedra angular de nivel 5 sube al nível 7.",
			pt: "Conclúa com 20% do tempo restante e aumente 2 níveis de uma vez. Exemplo: Pedra-chave de nível 5 subirá ao nível 7.",
			fr: "Terminez-le avec 20% du temps restant pour l'améliorer de 2 niveaux d'un coup (ex. : clé de niveau 5 à clé de niveau 7)."
		},
		"Didn't make the timer? That's ok. Your keystone doesn't deplete anymore, it just levels down by 1. i.e. keystone level 5 to keystone level 4. The dungeon stays the same.": {
			es: "¿No la has hecho en tiempo? No pasa nada. Tu piedra ya no se agota, simplemente baja un nivel. Ejemplo: Piedra angular de nível 5 baja al nível 4. La mazmorra seguirá siendo la misma a no ser que la completes fuera o dentro de tiempo.",
			pt: "Não concluíu em tempo? Sem problemas. Sua pedra não se esgotará, simplesmente baixará de nível. Exemplo: Pedra-chave de nível 5 baixará ao nível 7. A masmorra continuará sendo a mesma.",
			fr: "Vous n'avez pas respecté le chrono ? Ce n'est pas grave. Votre clé ne s'épuise plus, elle baisse simplement d'un niveau (ex. : clé de niveau 5 à clé de niveau 4). Le donjon reste le même."
		},
		"Instance Timer and Requirements for \"Level Jumps\"": {
			es: "Temporizador y requerimientos para \"subir de nivel\"",
			pt: "Temporizador e requisitos para \"subir de nível\"",
			fr: "Chronomètre d'instance et prérequis pour les « sauts de niveau »"
		},
		"keystone level": {
			es: "nivel de la piedra angular",
			pt: "nível da pedra angular",
			fr: "niveau de clé"
		},
		"keystone levels": {
			es: "niveles de la piedra angular",
			pt: "níveis da pedra",
			fr: "niveaux de clé"
		},
		"left on the timer": {
			es: "tiempo restante",
			pt: "tempo restante",
			fr: "restantes au chrono"
		},
		"Level": {
			es: "Nível",
			pt: "Nível",
			fr: "Niveau"
		},
		"Loot at the end": {
			es: "Nível del botín",
			pt: "Nível do saqueio",
			fr: "Butin à la fin"
		},
		"Weekly Chest": {
			es: "Cofre semanal",
			pt: "Baú semanal",
			fr: "Coffre hebdomadaire"
		},
		"The chest at the end of the run guarantees the <strong>GROUP</strong> two pieces of loot from the dungeon loot table. If you beat the timer you will be awarded one extra piece of loot.": {
			es: "El cofre al final de la mazmorra garantiza al <strong>GRUPO</strong> dos piezas de botín. Si superas el cronómetro, se le otorgará una pieza extra de botín.",
			pt: "O baú ao final da corrida garante ao <strong>GRUPO</strong> dois itens do saqueio da masmorra. Se você superar o cronometro, ganhará um item extra ao saquear.",
			fr: "Le coffre à la fin du donjon garantit au <strong>GROUPE</strong> deux pièces de butin issues de la table de butin du donjon. Si vous battez le chronomètre, vous recevrez une pièce de butin supplémentaire."
		},
		"Beating the timer with 20% of the timer remaining will grant a new (second) chest with 1 item from one tier higher, while beating the timer with 40% of the timer remaining will add a third chest with 1 item from two tiers higher.": {
			es: "Superar el cronómetro con un 20% del tiempo restante otorgará un nuevo (segundo) cofre con 1 objeto de un nivel superior, mientras que superar el cronómetro con un 40% del tiempo restante añadirá un tercer cofre con 1 objeto de dos niveles superiores.",
			pt: "Superar o cronômetro com 20% do tempo restante concederá um novo (segundo) baú com 1 item de um nível acima, enquanto superar o cronômetro com 40% do tempo restante adicionará um terceiro baú com 1 item de dois níveis acima.",
			fr: "Battre le chronomètre avec 20% du temps restant accordera un nouveau (deuxième) coffre contenant 1 objet d'un palier supérieur, tandis que battre le chronomètre avec 40% du temps restant ajoutera un troisième coffre contenant 1 objet de deux paliers supérieurs."
		},
		"Beating a level 8 keystone with more than 40% of the timer remaining will spawn 3 chests containing a total of THREE items of Mythic +8, ONE item of Mythic +9, and ONE item of Mythic +10.": {
			es: "Superar una piedra angular de nivel 8 con más del 40% del tiempo restante hará que aparezcan 3 cofres que contendrán un total de TRES objetos de Mítica +8, UN objeto de Mítica +9 y UN objeto de Mítica +10.",
			pt: "Superar uma pedra-chave de nível 8 com mais de 40% do tempo restante fará surgir 3 baús contendo um total de TRÊS itens de Mítica +8, UM item de Mítica +9 e UM item de Mítica +10.",
			fr: "Terminer une clé de niveau 8 avec plus de 40% du temps restant fera apparaître 3 coffres contenant un total de TROIS objets de Mythique +8, UN objet de Mythique +9 et UN objet de Mythique +10."
		},
		"In addition, roughly every 3 difficulty levels past 15 will award you with an additional piece of loot.": {
			es: "Además, aproximadamente a cada 3 niveles de dificultad después del 15 (ejemplo: 18, 21, 24) te otorgarán una pieza adicional de botín.",
			pt: "Além disso, aproximadamente a cada 3 níveis de dificuldade depois de 15, te entregará um item adicional ao saquear.",
			fr: "De plus, environ tous les 3 niveaux de difficulté au-delà de 15 vous accorderont une pièce de butin supplémentaire."
		},
		"Example time! You beat a level 15 keystone within the timer and your group is awarded 3 pieces of loot. Later, you beat a level 18 keystone within the timer and your group is awarded 4 pieces of loot. Repeat every three levels. 21 = 5 pieces of loot, 24 = 6 pieces of loot, etc.": {
			es: "¡Venga, a poner un ejemplo! Tú consigues una piedra angular de nivel 15 dentro del tiempo y tu grupo recibe 3 piezas de botín. </br>Más tarde, superas una piedra angular de nivel 18 en tiempo y tu grupo recibe 4 piezas de botín. </br>Esto se repite cada tres niveles. 21 = 5 piezas de botín, 24 = 6 piezas de botin, etc.",
			pt: "Se liga ai que é hora da revisão: - Você consegue finalizar uma pedra-chave de nível 15 dentro do cronometro e seu grupo recebe 3 itens do saqueio. </br>Mais tarde, você finaliza uma pedra-chave de nível 18 dentro do tempo e seu grupo é premiado com 4 itens ao saquear. </br>Agora, repita o mesmo exercício a cada três níveis. 21 = 5 itens de saqueio, 24 = 6 itens de saqueio, etc.",
			fr: "Exemple ! Vous terminez une clé de niveau 15 dans les temps et votre groupe reçoit 3 pièces de butin. Plus tard, vous terminez une clé de niveau 18 dans les temps et votre groupe reçoit 4 pièces de butin. Répétez tous les trois niveaux : 21 = 5 pièces de butin, 24 = 6 pièces de butin, etc."
		},
		"At the start of a week (after raid/mythic reset) a chest will appear in your order hall giving loot based on the highest level keystone dungeon <strong>COMPLETED</strong> the previous week, within the timer or not, whether it is your key or someone else's.": {
			es: "Al comenzar la semana (después de un reinício de banda o míticas), aparecerá un cofre en la sede de clase con el botín basado en el nivel de</br> dificultad más alto de la mazmorra <strong>FINALIZADA</strong> la semana anterior (sea en tiempo o no, ya sea con tu piedra angular o la de otra persona).",
			pt: "No início da semana (depois de reiniciar as raids ou míticas) surgirá um baú no Salão de Classe com o saqueio baseado na masmorra <strong>CONCLUÍDA</strong></br>da semana anterior com o nível de dificuldade mais alto, seja em tempo ou não, seja a pedra-chave sua ou de outra pessoa.",
			fr: "Au début de la semaine (après la réinitialisation des raids/mythiques), un coffre apparaîtra dans votre domaine de classe contenant du butin basé sur le donjon de clé mythique de plus haut niveau <strong>TERMINÉ</strong> la semaine précédente, dans les temps ou non, que ce soit votre clé ou celle de quelqu'un d'autre."
		},
		"In addition, the chest will also have a downgraded keystone based on the highest level keystone run <strong>YOU COMPLETED</strong> in the previous week.": {
			es: "Además, el cofre también tendrá una piedra angular solo un nivel más bajo comparada con la piedra angular de mayor </br> nivel que <strong>COMPLETASTE</strong> en la semana anterior.",
			pt: "Além disso, o baú também terá uma pedra-chave rebaixada (somente um nível) baseada na corrida de nível mais alto que <strong>VOCÊ COMPLETOU</ strong> na semana anterior.",
			fr: "De plus, le coffre contiendra également une clé de niveau inférieur basée sur le donjon de clé mythique de plus haut niveau que <strong>VOUS AVEZ TERMINÉ</strong> la semaine précédente."
		},
		"It is most beneficial to complete a +10 weekly (+15 starting in patch 7.1.5) to get the highest item level gear every reset. If that isn't feasible go for the next highest you can complete. Again, <strong>you don't need to finish in the timer to get the weekly chest.</strong>": {
			es: "Es más rentable finalizar una +10 semanalmente (+15 a partir del parche 7.1.5) para obtener el botín con el nivel más alto en cada reinicio. </br>Si eso no es factible, intenta hacer el nivel más alto que puedas finalizar. </br>El poder de artefacto conseguido en la mazmorra también es más alto dependiendo del nivel de dificultad. Otra vez, <strong>no es necesario finalizar la mazmorra en tiempo para obtener el cofre semanal.</strong>",
			pt: "É muito mais rentável finalizar uma masmorra +10 semanalmente (+15 a partir do patch 7.1.5) para obter o saqueio com o item de nível mais alto a cada reinício. </br>Se não for possível, tente concluir a masmorra com o nível de dificuldade mais alto que puder. </br><strong>Outra vez, não é necessário finalizar a masmorra dentro do cronometro para obter um item no baú semanal.</strong>",
			fr: "Il est plus avantageux de terminer une +10 chaque semaine (+15 à partir du patch 7.1.5) pour obtenir l'équipement de plus haut niveau d'objet à chaque réinitialisation. Si ce n'est pas faisable, visez le niveau le plus élevé que vous pouvez terminer. Encore une fois, <strong>vous n'avez pas besoin de finir dans les temps pour obtenir le coffre hebdomadaire.</strong>"
		},
		"suggestions welcome. Reach me by:": {
			es: "sugerencias son bienvenidas. Búscame en:",
			pt: "sugestões são bem-vindas. Me encontre em:",
			fr: "les suggestions sont les bienvenues. Contactez-moi par :"
		},
		"email: admin at mythicpl.us": {
			es: "correo eletrónico: admin at mythicpl.us",
			pt: "e-mail: admin at mythicpl.us",
			fr: "e-mail : admin at mythicpl.us"
		},
		"discord: domain#2722 OR the <a href=\"https://discord.gg/Z7GPUw8\">offical mythicpl.us discord ;)</a>": {
			es: "discord: domain#2722 O también el <a href=\"https://discord.gg/Z7GPUw8\">discord oficial de mythicpl.us ;)</a>",
			pt: "discord: domain#2722 OU também pelo <a href=\"https://discord.gg/Z7GPUw8\">discord oficial de mythicpl.us ;)</a>",
			fr: "discord : domain#2722 OU le <a href=\"https://discord.gg/Z7GPUw8\">discord officiel de mythicpl.us ;)</a>"
		},
		"open an issue at <a href=\"https://github.com/napnapnapnap/mythicpl.us/issues\">GitHub</a>": {
			es: "abrir un ticket en <a href=\"https://github.com/napnapnapnap/mythicpl.us/issues\">GitHub</a>",
			pt: "criar incidencia em <a href=\"https://github.com/napnapnapnap/mythicpl.us/issues\">GitHub</a>",
			fr: "ouvrir un ticket sur <a href=\"https://github.com/napnapnapnap/mythicpl.us/issues\">GitHub</a>"
		},
		"You can verify all my identities <a href=\"https://keybase.io/domain\">here.</a>": {
			es: "<a href=\"https://keybase.io/domain\">Aquí</a> están todas las formas en que puedes contactarme.",
			pt: "Você pode ver todos os meus contatos <a href=\"https://keybase.io/domain\">aqui.</a>",
			fr: "Vous pouvez vérifier toutes mes identités <a href=\"https://keybase.io/domain\">ici.</a>"
		},
		"World of Warcraft, Warcraft and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.": {
			es: "World of Warcraft, Warcraft y Blizzard Entertainment son marcas comerciales o marcas comerciales registradas de Blizzard Entertainment, Inc. en los EE.UU. y/o en otros países.",
			pt: "World of Warcraft, Warcraft e Blizzard Entertainment são marcas comerciais ou marcas registradas da Blizzard Entertainment, Inc. nos EUA e/ou em outros países.",
			fr: "World of Warcraft, Warcraft et Blizzard Entertainment sont des marques commerciales ou des marques déposées de Blizzard Entertainment, Inc. aux États-Unis et/ou dans d'autres pays."
		},
		"mythic+ calculator to fill out your artifact": {
			es: "Calculadora de mítica+ para subir el poder de artefacto",
			pt: "Calculadora de mítica+ para evoluir o poder da arma de artefato",
			fr: "Calculateur Mythique+ pour compléter votre arme prodigieuse"
		},
		"back": {
			es: "volver",
			pt: "voltar",
			fr: "retour"
		},
		"how many m+ do i have to run to get this goddamn artifact levelled? (now with some 7.2 data! m+ AP tokens have changed to scale with dungeon length and I haven't updated that yet)": {
			es: "¿Cuántas mazmorras+ tengo hacer para subir el poder de artefacto? (ahora con datos del parche 7.2! Las chapas de AP de las míticas+ han cambiado y escalan con la duración de la mazmorra pero no he actualizado todavía)",
			pt: "Quantas masmorras+ são necessárias fazer para subir o poder de artefato? (dados atualizados com a versão 7.2! As fichas de AP das míticas+ mudaram e escalam com a duração da masmorra, porém ainda não atualizei)",
			fr: "Combien de M+ dois-je faire pour monter cette fichue arme prodigieuse ? (maintenant avec des données de la 7.2 ! Les jetons de puissance prodigieuse M+ s'échelonnent désormais avec la durée du donjon et je n'ai pas encore mis cela à jour)"
		},
		"Current Artifact Level": {
			es: "Nivel actual de poder de artefacto",
			pt: "Nível atual de poder de artefato",
			fr: "Niveau actuel de l'arme prodigieuse"
		},
		"Current AP totals and AP to level": {
			es: "Totales de AP actual y AP para el nivel",
			pt: "Totais de AP atuais e AP para o nível",
			fr: "Totaux actuels de puissance prodigieuse et requis pour le niveau"
		},
		"btncalculate": {
			en: "CALCULATE",
			es: "Calcular",
			pt: "Calcular",
			fr: "Calculer"
		},
		"Total AP:": {
			es: "AP Total",
			pt: "AP Total",
			fr: "Puissance prodigieuse totale :"
		},
		"AP to level:": {
			es: "AP para el nivel:",
			pt: "AP para o nível:",
			fr: "Puissance prodigieuse pour le niveau :"
		},
		"AP to max:": {
			es: "AP para máx. nivel:",
			pt: "AP para máx. nível:",
			fr: "Puissance prodigieuse pour le max :"
		},
		"Total M+ required to level": {
			es: "Total de míticas+ requeridas para nivel",
			pt: "Requisito total de míticas+ o nível",
			fr: "Total de M+ requis pour monter de niveau"
		},
		"M+ to 35": {
			es: "M+ hasta 35",
			pt: "M+ até 35",
			fr: "M+ jusqu'à 35"
		},
		"M+ to 52 (first Concordance point)": {
			es: "M+ hasta 52 (primer punto del Acuerdo)",
			pt: "M+ até 52 (primero punto do Acordo)",
			fr: "M+ jusqu'à 52 (premier point de Concordance)"
		},
		"M+ to next level": {
			es: "M+ para el siguiente nivel",
			pt: "M+ para o seguinte nível",
			fr: "M+ pour le niveau suivant"
		},
		"M+ to Max (lol good luck)": {
			es: "M+ para Máx. (lol gzeta)",
			pt: "M+ para Máx. (puah sorte)",
			fr: "M+ jusqu'au Max (lol bonne chance)"
		},
		"AFFIX DIFFICULTY SURVEY RESULTS": {
			es: "RESULTADOS DE LA ENQUETE SOBRE LA DIFICULTAD DE AFIJOS",
			pt: "RESULTADOS DA PESQUISA SOBRE A DIFICULDADE DOS AFIXOS",
			fr: "RÉSULTATS DU SONDAGE SUR LA DIFFICULTÉ DES AFFIXES"
		},
		"The following charts are using input that I got from the survey hosted on mythicpl.us. Currently we're at <span id=\"totvotes\"></span> votes for the original affixes and <span id=\"newvotes\"></span> for the new affixes. The numbers you see are the total count of each difficulty divided by Total Votes (for the original affixes) or New Votes (for the new affixes) multiplied by 100 to get a percentage.": {
			es: "Los siguientes cuadros están usando la información que obtuve de la encuesta en mythicpl.us. Actualmente estamos en <span id=\"totvotes\"></span> votos para los afijos iniciales y <span id = \"newvotes\"></span> para los nuevos afijos. Los números que ves son el recuento total de cada dificultad dividido entre el total de votos (para los afijos iniciales) o los nuevos votos (para los nuevos afijos) multiplicado por 100 para obtener un porcentaje.",
			pt: "Os gráficos a seguir estão usando os inputs que recebi da pesquisa em mythicpl.us. Atualmente, estamos em <span id=\"totvotes\"></span> votos para os affixes iniciais e <span id=\"newvotes\"></span> para os novos afixos. Os números que você vê são a contagem total de cada dificuldade dividida por votos totais (para os afixos iniciais) ou novos votos (para os novos afixos) multiplicados por 100 para obter uma porcentagem.",
			fr: "Les graphiques suivants utilisent les réponses obtenues via le sondage hébergé sur mythicpl.us. Actuellement, nous avons <span id=\"totvotes\"></span> votes pour les affixes originaux et <span id=\"newvotes\"></span> pour les nouveaux affixes. Les chiffres affichés correspondent au nombre total de chaque difficulté divisé par le total des votes (pour les affixes originaux) ou les nouveaux votes (pour les nouveaux affixes), multiplié par 100 pour obtenir un pourcentage."
		},
		"This page should update in <i>psuedo-realtime</i> since it's just querying the Google spreadsheet hosting all the survey returns.": {
			es: "Esta pagina debería atualizarse en <i>psuedo-tiempo-real</i> una vez que simplemente consulta la hoja de calculo de Google que almacena todos los resultados de la pesquisa.",
			pt: "Esta página deve atualizar em <i>psuedo-tempo-real</i> uma vez que está apenas consultando a planilha do Google que armazena todos os resultados da pesquisa.",
			fr: "Cette page devrait se mettre à jour en <i>pseudo-temps réel</i> puisqu'elle interroge simplement la feuille de calcul Google qui héberge toutes les réponses du sondage."
		},
		"Haven't taken the survey yet? You can take it <a href=\"https://goo.gl/forms/YgaYteAnJjg2yMOn1\">here!</a> Wanna see the source spreadsheet? <a href=\"https://docs.google.com/spreadsheets/d/1saKejReaWhzQUmTy_r8FTTcW9xt1ilxI2knYdc8bQPs/pubhtml?gid=673910183&single=true\">Click here!</a>": {
			es: "",
			pt: "",
			fr: "Vous n'avez pas encore répondu au sondage ? Vous pouvez le faire <a href=\"https://goo.gl/forms/YgaYteAnJjg2yMOn1\">ici !</a> Vous voulez voir la feuille de calcul source ? <a href=\"https://docs.google.com/spreadsheets/d/1saKejReaWhzQUmTy_r8FTTcW9xt1ilxI2knYdc8bQPs/pubhtml?gid=673910183&single=true\">Cliquez ici !</a>"
		},
		"invite_survey": {
			en: "Haven't taken the survey yet? You can take it <a href=\"https://goo.gl/forms/YgaYteAnJjg2yMOn1\">here!</a> Wanna see the source spreadsheet? <a href=\"https://docs.google.com/spreadsheets/d/1saKejReaWhzQUmTy_r8FTTcW9xt1ilxI2knYdc8bQPs/pubhtml?gid=673910183&single=true\">Click here!</a>",
			es: "¿Todavía no has contestado la encuesta? ¡Puedes hacerlo <a href=\"https://goo.gl/forms/YgaYteAnJjg2yMOn1\"> aquí! </a> ¿Quieres ver la hoja de cálculo con la origen de los datos? <a href=\"https://docs.google.com/spreadsheets/d/1saKejReaWhzQUmTy_r8FTTcW9xt1ilxI2knYdc8bQPs/pubhtml?gid=673910183&single=true\">¡Haz clic aquí!</a>",
			pt: "Ainda não realizou a pesquisa? Você pode levá-lo <a href=\"https://goo.gl/forms/YgaYteAnJjg2yMOn1\"> aqui! </a> Quer ver a planilha de origem? <a href=\"https://docs.google.com/spreadsheets/d/1saKejReaWhzQUmTy_r8FTTcW9xt1ilxI2knYdc8bQPs/pubhtml?gid=673910183&single=true\"> Clique aqui! </a>",
			fr: "Vous n'avez pas encore répondu au sondage ? Vous pouvez le faire <a href=\"https://goo.gl/forms/YgaYteAnJjg2yMOn1\">ici !</a> Vous voulez voir la feuille de calcul source ? <a href=\"https://docs.google.com/spreadsheets/d/1saKejReaWhzQUmTy_r8FTTcW9xt1ilxI2knYdc8bQPs/pubhtml?gid=673910183&single=true\">Cliquez ici !</a>"
		},
		"Tier 1 affixes": {
			es: "Afijos de tier 1",
			pt: "Afixos de tier 1",
			fr: "Affixes de palier 1"
		},
		"Tier 2 affixes": {
			es: "Afijos de tier 2",
			pt: "Afixos de tier 2",
			fr: "Affixes de palier 2"
		},
		"Tier 3 affixes": {
			es: "Afijos de tier 3",
			pt: "Afixos de tier 3",
			fr: "Affixes de palier 3"
		},
		"Note: nothing too shocking here I don't think. Bolstering is annoying because it slows down your run.": {
			es: "Nota: no creo que haya nada impactante aquí. Potenciante es molesto porque ralentiza mazmorra mítica+.",
			pt: "Nota: não vejo nada chocante aqui. A Encorajadora é irritante porque atrasa a sua mítica+.",
			fr: "Note : rien de très choquant ici je pense. Galvanisant est ennuyeux car il ralentit votre course."
		},
		"Note: same deal here. Raging is annoying at best. Overwhelming medium votes here.": {
			es: "Nota: más de lo mismo. Furibunda ya no es tan molesto en comparación. Votos relevantes para dificultad media aquí.",
			pt: "Exemplo",
			fr: "Note : même chose ici. Déchaîné est au mieux ennuyeux. Une écrasante majorité de votes pour la difficulté moyenne ici."
		},
		"Note: lol.": {
			es: "Nota: izipizi loco.",
			pt: "Nota: facin facin.",
			fr: "Note : lol."
		},
		"Note: Not too shocking here either.": {
			es: "Nota: Nada impactante aquí tampoco.",
			pt: "Nota: Não há nada impactante por aqui.",
			fr: "Note : Rien de très choquant ici non plus."
		},
		"Note: Same deal as bolstering, slows your run.": {
			es: "Nota: Es parecido con la Potenciante, también ralentiza mítica+.",
			pt: "Nota: Se parece com a Encorajadora, também atrasa tua mítica+",
			fr: "Note : Même chose que Galvanisant, cela ralentit votre donjon."
		},
		"Note: REEEEEE. Necrotic is more doable now that stacks drop, but is still tough.": {
			es: "Nota: VIEJAAAAAAAA ¡Ayúda al tank!. Necrótica ya es más factible porque quita las cargas al salir de combate (antes no), aún así sigue sendo difícil.",
			pt: "Nota: AI COMO DÓI, pobre tanque. Necrótica ya es más factible porque quita las cargas al salir de combate (antes no), aún así sigue sendo difícil.",
			fr: "Note : REEEEEE. Nécrotique est plus faisable maintenant que les charges disparaissent hors combat, mais reste difficile."
		},
		"Note: skittish went from being medium to hard as more people learned to hate it.": {
			es: "Nota: inquieta dejó de ser un afijo de dificultad media a alta, ya que más y más personas fueron aprendiendo a odiarla.",
			pt: "Nota: assustada deixou de ser um afixo de dificuldade média e passou a alta, já que mais e mais pessoas foram aprendendo a odiar-la.",
			fr: "Note : Fébrile est passé de moyen à difficile à mesure que les gens ont appris à le détester."
		},
		"Note: EZ PZ 3 CHEST LOL. For real though, volcanic got easier after the 7.2 patch.": {
			es: "Nota: IZI-PIZI 3 COFRES PA VOSOTROS. De hecho es el afijo más fácil desde el parche 7.2.",
			pt: "Nota: FACIIIIN 3 BAÚS!!! Inclusive é o afixo mais fácil desde a versão 7.2",
			fr: "Note : 3 COFFRES TROP FACILE LOL. Sérieusement, Volcanique est devenu plus facile après le patch 7.2."
		},
		"Note: explosive has high wipe potential if people are auto-piloting. i expect it to go from med to hard": {
			es: "Nota: este afijo tiene una posibilidad enorme de matar a uno que otro empanado. Espero que cambie de dificultad media a alta.",
			pt: "Nota: este afixo tem uma possibilidade enorme de matar aos mais despistados. Espero que a dificuldade mude de média a alta.",
			fr: "Note : Explosif a un fort potentiel de wipe si les joueurs sont en pilote automatique. Je m'attends à ce qu'il passe de moyen à difficile."
		},
		"Note: overwhelming medium. spread out and you're good, right?": {
			es: "Nota: definitivamente tiene dificultad media. Separate y todo quedará bien, verdad?",
			pt: "Nota: definitivamente tem dificuldade média. Se separe e tudo vai ficar bem, beleza?",
			fr: "Note : difficulté moyenne à une écrasante majorité. Écartez-vous et tout ira bien, n'est-ce pas ?"
		},
		"Note: This might transition from medium to hard as well. Blame the healer!": {
			es: "Nota: Este también podría cambiar de media a alta. ¡Culpe al priest!",
			pt: "Nota: Este afixo poderia mudar de dificuldade também. De média a alta. Hora de culpar seu healer!",
			fr: "Note : Celui-ci pourrait aussi passer de moyen à difficile. C'est la faute du soigneur !"
		},
		"Note: WHO WOULD HAVE GUESSED. Tier three affixes are the worst.": {
			es: "Nota: COMO DEBERÍAS IMAGINAR. Estos afijos del tier 3 son los peores.",
			pt: "Nota: COMO VOCÊ DEVE IMAGINAR. Estes afixos de tier 3 são os piores.",
			fr: "Note : QUI L'AURAIT CRU. Les affixes de palier 3 sont les pires."
		},
		"Copy to WoW": {
			es: "Copiar a WoW",
			pt: "Copiar para o WoW",
			fr: "Copier pour WoW"
		},
		"Copy to Discord/Stoat": {
			es: "Copiar a Discord/Stoat",
			pt: "Copiar para o Discord/Stoat",
			fr: "Copier pour Discord/Stoat"
		},
		"Improve": {
			es: "Mejorar",
			pt: "Melhorar",
			fr: "S'améliorer"
		},
		"Groups": {
			es: "Grupos",
			pt: "Grupos",
			fr: "Groupes"
		},
		"Date": {
			es: "Fecha",
			pt: "Data",
			fr: "Date"
		},
		"Preparation": {
			es: "Preparación",
			pt: "Preparação",
			fr: "Préparation"
		},
		"Build your Comp": {
			es: "Arma tu composición",
			pt: "Monte sua composição",
			fr: "Construisez votre composition"
		},
		"<em>Click for a larger version – blue text means that a specific talent is required to unlock the ability in question. (Courtesy of Questionably Epic)</em>": {
			es: "<em>Haz clic para ampliar – el texto azul significa que se requiere un talento específico para desbloquear la habilidad en cuestión. (Cortesía de Questionably Epic)</em>",
			pt: "<em>Clique para ampliar – o texto azul significa que um talento específico é necessário para desbloquear a habilidade em questão. (Cortesia de Questionably Epic)</em>",
			fr: "<em>Cliquez pour agrandir – le texte bleu signifie qu'un talent spécifique est requis pour débloquer la compétence en question. (Avec l'aimable autorisation de Questionably Epic)</em>"
		},
		"The Mythic+ Checklist": {
			es: "Lista de preparación para Mítica+",
			pt: "Lista de preparação para Mítica+",
			fr: "La check-list Mythique+"
		},
		"Utility Potions: <a href=\"https://legion-shoot.tauri.hu/?item=127841\" target=\"_blank\">Skystep</a>, <a href=\"https://legion-shoot.tauri.hu/?item=9295\" target=\"_blank\">Invisibility</a> / <a href=\"https://legion-shoot.tauri.hu/?item=127840\" target=\"_blank\">Skaggldrynk</a>, <a href=\"https://legion-shoot.tauri.hu/?item=127839\" target=\"_blank\">Avalanche</a>": {
			es: "Pociones de utilidad: <a href=\"https://legion-shoot.tauri.hu/?item=127841\" target=\"_blank\">Pasocielo</a>, <a href=\"https://legion-shoot.tauri.hu/?item=9295\" target=\"_blank\">Invisibilidad</a> / <a href=\"https://legion-shoot.tauri.hu/?item=127840\" target=\"_blank\">Trago de skaggl</a>, <a href=\"https://legion-shoot.tauri.hu/?item=127839\" target=\"_blank\">Avalancha</a>",
			pt: "Poções de utilidade: <a href=\"https://legion-shoot.tauri.hu/?item=127841\" target=\"_blank\">Passocéu</a>, <a href=\"https://legion-shoot.tauri.hu/?item=9295\" target=\"_blank\">Invisibilidade</a> / <a href=\"https://legion-shoot.tauri.hu/?item=127840\" target=\"_blank\">Skaggldrynk</a>, <a href=\"https://legion-shoot.tauri.hu/?item=127839\" target=\"_blank\">Avalanche</a>",
			fr: "Potions utilitaires : <a href=\"https://legion-shoot.tauri.hu/?item=127841\" target=\"_blank\">Pas-céleste</a>, <a href=\"https://legion-shoot.tauri.hu/?item=9295\" target=\"_blank\">Invisibilité</a> / <a href=\"https://legion-shoot.tauri.hu/?item=127840\" target=\"_blank\">Skaggldrynk</a>, <a href=\"https://legion-shoot.tauri.hu/?item=127839\" target=\"_blank\">Avalanche</a>"
		},
		"<a href=\"https://legion-shoot.tauri.hu/?item=120257\" target=\"_blank\">Drums of Fury</a>": {
			es: "<a href=\"https://legion-shoot.tauri.hu/?item=120257\" target=\"_blank\">Tambores de furia</a>",
			pt: "<a href=\"https://legion-shoot.tauri.hu/?item=120257\" target=\"_blank\">Tambores da Fúria</a>",
			fr: "<a href=\"https://legion-shoot.tauri.hu/?item=120257\" target=\"_blank\">Tambours de fureur</a>"
		},
		"<a href=\"https://legion-shoot.tauri.hu/?item=132514\" target=\"_blank\">Auto-Hammer</a>": {
			es: "<a href=\"https://legion-shoot.tauri.hu/?item=132514\" target=\"_blank\">Automartillo</a>",
			pt: "<a href=\"https://legion-shoot.tauri.hu/?item=132514\" target=\"_blank\">Martelo Automático</a>",
			fr: "<a href=\"https://legion-shoot.tauri.hu/?item=132514\" target=\"_blank\">Auto-marteau</a>"
		},
		"(Repair Bot)": {
			es: "(Robot de reparación)",
			pt: "(Robô de reparo)",
			fr: "(Robot réparateur)"
		},
		"<a href=\"https://legion-shoot.tauri.hu/?item=132515\" target=\"_blank\">Failure Detection Pylon</a>": {
			es: "<a href=\"https://legion-shoot.tauri.hu/?item=132515\" target=\"_blank\">Pilón detector de errores</a>",
			pt: "<a href=\"https://legion-shoot.tauri.hu/?item=132515\" target=\"_blank\">Pilone Detector de Falhas</a>",
			fr: "<a href=\"https://legion-shoot.tauri.hu/?item=132515\" target=\"_blank\">Pylône de détection des échecs</a>"
		},
		"(Wipe Prevention)": {
			es: "(Prevención de wipes)",
			pt: "(Prevenção de wipes)",
			fr: "(Prévention de wipe)"
		},
		"The usual stuff": {
			es: "Lo habitual",
			pt: "O de sempre",
			fr: "Les classiques"
		},
		"(<a href=\"https://legion-shoot.tauri.hu/?items=0.6\" target=\"_blank\">Flasks</a>, <a href=\"https://legion-shoot.tauri.hu/?items=0.1\" target=\"_blank\">DPS &amp; health potions</a>, <a href=\"https://legion-shoot.tauri.hu/?items=0.5\" target=\"_blank\">food</a>, <a href=\"https://legion-shoot.tauri.hu/?item=140587\" target=\"_blank\">Augment runes</a>)": {
			es: "(<a href=\"https://legion-shoot.tauri.hu/?items=0.6\" target=\"_blank\">Frascos</a>, <a href=\"https://legion-shoot.tauri.hu/?items=0.1\" target=\"_blank\">pociones de DPS y salud</a>, <a href=\"https://legion-shoot.tauri.hu/?items=0.5\" target=\"_blank\">comida</a>, <a href=\"https://legion-shoot.tauri.hu/?item=140587\" target=\"_blank\">runas de aumento</a>)",
			pt: "(<a href=\"https://legion-shoot.tauri.hu/?items=0.6\" target=\"_blank\">Frascos</a>, <a href=\"https://legion-shoot.tauri.hu/?items=0.1\" target=\"_blank\">poções de DPS e vida</a>, <a href=\"https://legion-shoot.tauri.hu/?items=0.5\" target=\"_blank\">comida</a>, <a href=\"https://legion-shoot.tauri.hu/?item=140587\" target=\"_blank\">runas de aprimoramento</a>)",
			fr: "(<a href=\"https://legion-shoot.tauri.hu/?items=0.6\" target=\"_blank\">Flacons</a>, <a href=\"https://legion-shoot.tauri.hu/?items=0.1\" target=\"_blank\">potions de DPS et de soins</a>, <a href=\"https://legion-shoot.tauri.hu/?items=0.5\" target=\"_blank\">nourriture</a>, <a href=\"https://legion-shoot.tauri.hu/?item=140587\" target=\"_blank\">runes d'amélioration</a>)"
		},
		" - All-in-one mythic+ timer. Shows % value of mobs on nameplates, timers required for +2/+3 chest and times that objectives are completed with history and more": {
			es: " - Temporizador todo en uno para mítica+. Muestra el % de los enemigos en las placas de nombre, los tiempos necesarios para +2/+3 cofres y los tiempos de finalización de objetivos con historial y más.",
			pt: " - Cronômetro tudo-em-um para mítica+. Mostra o % dos inimigos nas placas de identificação, tempos necessários para +2/+3 baús e tempos de conclusão dos objetivos com histórico e muito mais.",
			fr: " - Chronomètre tout-en-un pour Mythique+. Affiche le % des ennemis sur les barres de nom, les temps requis pour +2/+3 coffres et les temps de complétion des objectifs avec historique et plus encore."
		},
		" - Shows keys for guild mates, friends and alts. It also shows if your friends/guildies have done a 15+ or not!": {
			es: " - Muestra las piedras angulares de compañeros de hermandad, amigos y alters. ¡También muestra si tus amigos o compañeros han completado una +15 o no!",
			pt: " - Mostra as pedras-chave para colegas de guilda, amigos e alts. Também mostra se seus amigos/colegas de guilda fizeram uma +15 ou não!",
			fr: " - Affiche les clés des membres de la guilde, des amis et des rerolls. Montre également si vos amis/membres de guilde ont terminé une +15 ou non !"
		},
		" - The largest Tauri LFG/LFM Discord server.": {
			es: " - El mayor servidor de Discord de búsqueda de grupo (LFG/LFM) de Tauri.",
			pt: " - O maior servidor de Discord de procura de grupo (LFG/LFM) do Tauri.",
			fr: " - Le plus grand serveur Discord de recherche de groupe (LFG/LFM) de Tauri."
		},
		" - Discord for https://tauriachievements.github.io/mythic-plus": {
			es: " - Discord para https://tauriachievements.github.io/mythic-plus",
			pt: " - Discord para https://tauriachievements.github.io/mythic-plus",
			fr: " - Discord pour https://tauriachievements.github.io/mythic-plus"
		},
		" - Upload your logs and use their <a href=\"https://wago.io/c5M9jAkEv\">WeakAura</a> to compare yourself to other people who are performing better at the same item level. See what they're doing differently.": {
			es: " - Sube tus registros (logs) y usa su <a href=\"https://wago.io/c5M9jAkEv\">WeakAura</a> para compararte con otros jugadores que rinden mejor con el mismo nivel de objeto. Descubre qué están haciendo diferente.",
			pt: " - Envie seus logs e use o <a href=\"https://wago.io/c5M9jAkEv\">WeakAura</a> deles para se comparar com outros jogadores que têm um desempenho melhor no mesmo nível de item. Veja o que eles estão fazendo de diferente.",
			fr: " - Téléversez vos journaux de combat (logs) et utilisez leur <a href=\"https://wago.io/c5M9jAkEv\">WeakAura</a> pour vous comparer à d'autres joueurs plus performants au même niveau d'objet. Voyez ce qu'ils font différemment."
		},
		" - See the best Mythic+ players on the realm and check their armory to see what works best. You can also use the <a href=\"https://tauriachievements.github.io/legion-key-history-addon\">Legion Key History Addon</a> to view near-real time rankings in game.": {
			es: " - Consulta los mejores jugadores de Mítica+ del reino y revisa su armería para ver qué funciona mejor. También puedes usar el <a href=\"https://tauriachievements.github.io/legion-key-history-addon\">Legion Key History Addon</a> para ver las clasificaciones casi en tiempo real dentro del juego.",
			pt: " - Veja os melhores jogadores de Mítica+ do reino e confira o arsenal deles para ver o que funciona melhor. Você também pode usar o <a href=\"https://tauriachievements.github.io/legion-key-history-addon\">Legion Key History Addon</a> para ver o ranking quase em tempo real dentro do jogo.",
			fr: " - Découvrez les meilleurs joueurs Mythique+ du royaume et consultez leur armurerie pour voir ce qui fonctionne le mieux. Vous pouvez également utiliser l'addon <a href=\"https://tauriachievements.github.io/legion-key-history-addon\">Legion Key History Addon</a> pour consulter les classements en temps quasi réel directement en jeu."
		},
		" - Comprehensive WeakAura pack for Legion Mythic+ dungeons covering major mechanics and trash abilities.": {
			es: " - Paquete completo de WeakAuras para mazmorras de Mítica+ de Legion que cubre las mecánicas principales y habilidades de enemigos.",
			pt: " - Pacote completo de WeakAuras para masmorras Mítica+ de Legion cobrindo as principais mecânicas e habilidades de mobs.",
			fr: " - Pack complet de WeakAuras pour les donjons Mythique+ de Legion couvrant les mécaniques majeures et les compétences des monstres."
		},
		" - Automatically shares or links your current keystone with your party.": {
			es: " - Comparte o enlaza automáticamente tu piedra angular actual con tu grupo.",
			pt: " - Compartilha ou envia o link automaticamente da sua pedra-chave atual com o seu grupo.",
			fr: " - Partage ou affiche automatiquement le lien de votre clé mythique actuelle avec votre groupe."
		},
		" - Tracks interrupt cooldowns for your party members in Mythic+ dungeons.": {
			es: " - Rastrea los tiempos de reutilización de las interrupciones de los miembros de tu grupo en mazmorras de Mítica+.",
			pt: " - Rastreia o tempo de recarga das interrupções dos membros do seu grupo em masmorras Mítica+.",
			fr: " - Suit les temps de recharge des interruptions des membres de votre groupe dans les donjons Mythique+."
		},
		" - Automatically slots your mythic keystone into the font at the start of the dungeon.": {
			es: " - Coloca automáticamente tu piedra angular mítica en la fuente de poder al inicio de la mazmorra.",
			pt: " - Insere automaticamente sua pedra-chave mítica na fonte de poder no início da masmorra.",
			fr: " - Insère automatiquement votre clé mythique dans la fontaine de puissance au début du donjon."
		},
		" - Make your nameplate glow with red if the mob is staying in sanguine and displays an icon on the right of it": {
			es: " - Hace que la placa de nombre brille en rojo si el enemigo permanece sobre un charco de Sanguina y muestra un icono a su derecha.",
			pt: " - Faz a placa de identificação brilhar em vermelho se o inimigo estiver parado na poça de Sanguínea e exibe um ícone à direita dela.",
			fr: " - Fait briller la barre de nom en rouge si l'ennemi reste dans une flaque de Sanguin et affiche une icône à sa droite."
		},
		"Didn't make the timer? That's ok. Your keystone doesn't deplete anymore, it just levels down by 1 and randomizes the dungeon. i.e. keystone level 5 for Blackrook Hold to keystone level 4 Halls of Valor.": {
			es: "¿No la has hecho en tiempo? No pasa nada. Tu piedra ya no se agota, simplemente baja un nivel y cambia aleatoriamente de mazmorra. Ejemplo: Piedra angular de nivel 5 de Torreón Grajo Negro pasa a nivel 4 de Cámaras del Valor.",
			pt: "Não concluiu a tempo? Sem problemas. Sua pedra não se esgota mais, apenas diminui em 1 nível e sorteia outra masmorra. Exemplo: pedra-chave nível 5 de Castelo Corvo Negro passa para nível 4 de Salões da Bravura.",
			fr: "Vous n'avez pas respecté le chrono ? Ce n'est pas grave. Votre clé ne s'épuise plus, elle baisse simplement d'un niveau et change aléatoirement de donjon (ex. : clé de niveau 5 pour le Bastion du Freux devient clé de niveau 4 pour les Salles des Valeureux)."
		},
		"Keystone": {
			es: "Piedra angular",
			pt: "Pedra-chave",
			fr: "Clé mythique"
		},
		"End-of-Dungeon Loot": {
			es: "Botín al final de la mazmorra",
			pt: "Saque no final da masmorra",
			fr: "Butin de fin de donjon"
		},
		"Weekly Class Hall Chest": {
			es: "Cofre semanal de la sede de clase",
			pt: "Baú semanal do Salão de Classe",
			fr: "Coffre hebdomadaire de domaine de classe"
		},
		"Base AP": {
			es: "AP base",
			pt: "AP base",
			fr: "AP de base"
		},
		"AP (AK 25)": {
			es: "AP (AK 25)",
			pt: "AP (AK 25)",
			fr: "AP (AK 25)"
		},
		"Current AP In Level": {
			es: "AP actual en el nivel",
			pt: "AP atual no nível",
			fr: "Puissance prodigieuse actuelle dans le niveau"
		},
		"Artifact Knowledge": {
			es: "Conocimiento del artefacto",
			pt: "Conhecimento do artefato",
			fr: "Connaissance de l'arme prodigieuse"
		},
		"Home": {
			es: "Inicio",
			pt: "Início",
			fr: "Accueil"
		},
		"Grievous": {
			es: "Dolorosa",
			pt: "Atroz",
			fr: "Aggravé"
		}
	};

	var userLang = navigator.language || navigator.userLanguage;
	userLang = userLang.toLowerCase().substr(0, 2);

	if (userLang != "en" && userLang != "es" && userLang != "pt" && userLang != "fr") {
	    //Default
	    userLang = "en";
	};

	var homePage = document.getElementById("home");

	if (homePage) {
		getAffixesReady.then(function(){
			var translator = $('body').translate({
				lang: userLang,
				t: dict
			});

			$(".lang_selector").click(function(ev) {
				var lang = $(this).attr("data-value");
				translator.lang(lang);
				ev.preventDefault();
			});

		});
	}
	else {
			var translator = $('body').translate({
				lang: userLang,
				t: dict
			});

			$(".lang_selector").click(function(ev) {
				var lang = $(this).attr("data-value");
				translator.lang(lang);
				ev.preventDefault();
			});
	};

});