async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		/* setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100); */

		setTimeout(() => {
			const sendIcon = document.querySelector('[data-icon="wds-ic-send-filled"]');
			if (sendIcon) {
				const sendButton = sendIcon.closest('button');
				if (sendButton) sendButton.click();
			}
		}, 100);

		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
TOY STORY

Escrito por:

João Lasseter, Pete Docter, André Stanton & Joe Ranft

QUARTO DO INT. ANDY

Uma fileira de caixas móveis jaz no chão da sala.  Eles
são desenhados em giz de cera para parecer uma cidade ocidental em miniatura.
O quarto é forrado com papel de parede nuvem dando o
impressão do céu.

Uma das caixas tem um infantil ilustrado "PROCURA-SE"
cartaz de um Mr. Potato Head colado nele.

Um boneco de cabeça de batata está colocado na frente do cartaz.  O
A dublagem de ANDY, um menino de 6 anos, pode ser ouvida atuando
fora todas as vozes da cena.

ANDY (COMO CABEÇA DE BATATA)
Tudo bem a todos, isso é um pau-
em cima!  Ninguém se mexe!  Agora vazio
que seguro!

Um grupo de brinquedos se aglomeraram em frente ao
Caixa "BANCO".

A mão de Andy abaixa um COFRINHO DE CERÂMICA na frente do sr.
Cabeça de batata e sacudir uma pilha de moedas para o chão.  Sr.
Cabeça de batata beija as moedas.

ANDY (COMO CABEÇA DE BATATA)
Ooh!  Dinheiro.  Dinheiro.  Dinheiro.
(barulhos de beijo)


Uma estatueta de porcelana da pastora, BO PEEP, é trazida
em cena.

ANDY (COMO BO PEEP)
Pare!  Pare com isso, você quer dizer velho
batata!

ANDY (COMO CABEÇA DE BATATA)
Quieto Bo Peep, ou suas ovelhas ficam
atropelar!

As ovelhas de porcelana companheiras são colocadas no centro de um
Loop de trilha Hot Wheels.

ANDY (COMO OVELHAS)
Heeeeelp!  BAAAAA!  Heeeelp us!

ANDY (COMO BO PEEP)
Ah, não!  Não minhas ovelhas!  Alguém faz
algo!

WOODY, um cowboy boneco puxado, entra em cena
em frente ao inanimado spud.

A mão de Andy puxa o anel no centro das costas de Woody.

WOODY (CAIXA DE VOZ)
Alcance o céu.

ANDY (COMO CABEÇA DE BATATA)
Ah, não!  Xerife Woody!!

ANDY (COMO WOODY)
Estou aqui para te parar, Bart de um olho.

A mão de Andy puxa um dos olhos do Sr. Cabeça de Batata.

ANDY (COMO CABEÇA DE BATATA)
Doooooh!  Como você sabia que era eu!

ANDY (COMO WOODY)
Vai vir calado?

ANDY (COMO CABEÇA DE BATATA)
Você não pode me tocar Sheriff!  Eu
trouxe meu cão de ataque com um
em campo de força!

Andy coloca um TOY DOG, com um SLINKY para uma seção intermediária, em
frente ao Sr. Cabeça de Batata e o estica.

ANDY (COMO WOODY)
Bem, eu trouxe o meu DINOSSAURO, que
come cães de campo de força!!

Andy revela um TIRANOSSAURO DE PLÁSTICO REX, que pisa no
Cão Slinky.

ANDY (COMO DINOSSAURO)
AAAAR!  RUGIDO-RUGIDO-RUGIDO!

ANDY (COMO SLINKY DOG)
DÁ!  YIPE-YIPE!

ANDY (COMO WOODY)
Você vai para a cadeia, Bart.

Andy pega o Sr. Cabeça de Batata e o coloca em um berço
na sala.

Uma placa de papelão é colada nas barras com a palavra "CADEIA"
escrito em giz de cera.

ANDY (COMO WOODY)
Diga adeus à esposa e
tatertots.

A irmã de 1 ano de Andy, MOLLY, rasteja e pega o sr.
Cabeça de batata.  Ela o chupa por uma surra e prossegue
bater o brinquedo repetidamente contra o trilho de seu berço,
forçando algumas de suas partes soltas.

Andy, usando um chapéu de cowboy, pega Woody fora do
chão.

ANDY
(puxando a corda de Woody)
Você salvou o dia de novo, Woody.

WOODY (CAIXA DE VOZ)
O senhor é meu deputado favorito.

COMEÇAR TÍTULOS

MÚSICA "YOU'VE GOT A FRIEND IN ME" toca enquanto Andy toca
várias atividades com Woody:

- Andy vira as caixas da cidade ocidental para revelar vacas
desenhado do outro lado.  Ele pega uma corda de pular e finge
Woody está lascando o gado.

ANDY
Vamos torcer o gado.

- Andy então monta Woody em um RC (controle remoto)
carro, e pastoreia as caixas de "vaca" restantes sob o berço de Molly.

ESCADA INT.

- Andy coloca Woody no topo do corrimão da escada
permitindo que a boneca deslize escada abaixo.  Andy corre à frente e
pega-o no fundo.

SALA DE ESTAR NO ANDAR DE BAIXO

- Andy e Woody caem na cadeira La-Z-Boy e giram
e ao redor.

Em seguida, Andy usa o apoio para os pés La-Z-Boy como uma catapulta.

Andy joga Woody pela sala até o sofá.

ANDY
(levantando os braços)
Pontuação!

FIM DA CANÇÃO

Woody fica mancando no sofá enquanto Andy é ouvido conversando com
sua mãe.

ANDY (O.S.)
Uau!  Fresco!

SRA. DAVIS (O.S.)
Whadda você acha?

ANDY (O.S.)
Ah, isso está ÓTIMO, mamãe!

ÂNGULO: A SALA DE JANTAR ADJACENTE

A Sra. DAVIS, mãe de trinta e oito anos de Andy, acaba de
Finalizou a decoração da área com flâmulas e balões.  Um
banner é coberto por todo o arco.  Lê-se: "Feliz
Aniversário Andy."

O rosto congelado de Woody olha na direção do aniversário
Decorações.

ANDY
Podemos deixar isso para trás?

Sra. DAVIS
Bem, claro, podemos deixá-lo de lado.

ANDY
Sim!

Sra. DAVIS
Agora vá buscar Molly.  Seus amigos são
vai estar aqui a qualquer minuto.

ANDY
Ok.

Andy pega Woody no sofá e corre para o andar de cima.

ANDY
É tempo de festa, Woody!

QUARTO DE ANDY - CONTÍNUO

Andy e Woody entram na sala.  Molly ainda está batendo
Cabeça de batata contra a grade do berço.  Andy dá dicas ao chapéu de Woody
nela.

ANDY
Uau, senhorinha!

Ele deposita Woody na cama e puxa sua corda por último
Hora.

WOODY (CAIXA DE VOZ)
Alguém envenenou o poço.

ANDY
(pegando Molly)
Vamos lá, Molly.  Ah, você está recebendo
pesado!
(para Woody)
Veja mais tarde, Woody.

Andy sai.

TÍTULOS FINAIS

Os olhos de Woody ganham vida.  O boneco cowboy senta-se, seu
expressão mudando de um sorriso para preocupação.

LENHOSO
(para si mesmo)
Puxe minha corda!  O aniversário
festa é hoje?!

Woody pensa.

LENHOSO
(para o quarto)
Ok, pessoal.  A costa é clara.

O quarto ganha vida.  BRINQUEDOS emergem da caixa de brinquedos, o
armário, prateleiras, etc... em uma enxurrada de atividades.

POTATO HEAD, suas partes do corpo espalhadas pelo chão, senta-se
ele se ergue e começa a se recompor.

SR. CABEÇA DE BATATA
A partir dos três anos.  Está na minha caixa.
A partir dos três anos!  Eu não sou
supostamente seria babá da princesa
Babar.

HAMM, o cofrinho, joga um último centavo em sua moeda
ranhura.  Cabeça de batata caminha até ele.  Todas as suas peças faciais
estão nos slots errados.

SR. CABEÇA DE BATATA
Ei, Hamm!  Olhar!  Eu sou Picasso!

HAMM
Eu não entendo.

Hamm vai embora.

SR. CABEÇA DE BATATA
Você porco inculto!
(para alguém O.S.)
O que você está olhando, ya hóquei
disco?!

Cabeça de batata passa, revelando uma estatueta de puck de hóquei.

Woody senta-se na beira da cama observando toda a atividade.
Ele se vira para um homem verde do exército de plástico, SARGENT, em pé
a bancada de cabeceira.

LENHOSO
Uh, ei, Sarge, você já viu Slinky?

SARGENT
(saudação)
Sir!  No Sir!

LENHOSO
Ok, obrigado.  À vontade.

Woody pula da cama.

LENHOSO
Ei, Slinky?

SLINKY (O.S.)
Aqui mesmo, Woody!

Um cachorro de brinquedo Slinky, SLINKY, aparece debaixo da cama empurrando
fora um conjunto de tabuleiro de xadrez.  Ele começa a colocar as damas
a diretoria.

SLINKY
Estou vermelho dessa vez.

LENHOSO
Não, Slink -

SLINKY
Ah... Bem, tudo bem, você pode ser vermelho
Se você quiser.

LENHOSO
Agora não, Slink.  Eu tenho alguns maus
notícia.

SLINKY
Más notícias?!

LENHOSO
Sh-h-h-h-h!!

Woody cobre a boca de Slinky, ciente de que os outros brinquedos entram
a sala está observando.  Ele se inclina para perto de Slinky.

LENHOSO
(sussurrando)
Basta reunir todos para uma equipe
conheça e seja feliz!!

SLINKY
Peguei.

Slinky embaralha.

LENHOSO
Anime-se!

Slinky anima sua marcha e RI MUITO.

Woody prossegue na outra direção.  Ele passa um brinquedo
ROBÔ e COBRA parcialmente escondidos sob a colcha.

LENHOSO
(para o quarto)
Reunião de pessoal, pessoal.
(à parte)
Cobra, Robô -- dever de pódio.

Robô e Cobra saem de debaixo da cama e relutantemente
siga Woody.

Woody passa por um Etch-A-Sketch, ETCH, indo para o outro
direção.

LENHOSO
Olá Etch!  Desenhar!

Tanto Etch quanto Woody chicoteiam como pistoleiros.

Antes que Woody possa estender totalmente o braço para fora, o Etch-A-Sketch
coloca uma arma na tela.

LENHOSO
(fingindo ser baleado)
Ah!! Você me pegou de novo, Etch! Você tem
vem trabalhando nesse sorteio.  Rápido
botões no oeste.

Slinky passa um grupo de brinquedos no chão.

SLINKY
Tem uma reunião de pessoal, galera, venham
Pronto, vamos lá!

Robô e cobra começam a construir um pódio feito de
Legos e uma banheira de brinquedo Tinker enquanto Woody vasculha o chão.

LENHOSO
Agora, onde está essa -- ?  Ah, ei,
Quem moveu meu doodle pad para cá?

Woody vê a almofada de rabisco no chão ao lado da mesa e
caminha até ele.  Quando ele desce para pegá-lo...

REX, o dinossauro de plástico, salta para assustar Woody.

REX
ROOAAAARR!!

LENHOSO
(não afetado)
Ah, como vai', Rex?

Rex de repente fica tímido.

REX
Ficou com medo?  Diga-me honestamente.

LENHOSO
Eu estava perto de me assustar daquela vez.

Woody volta ao pódio.  Rex segue.

REX
Eu vou por medo aqui, mas eu
só não sente.  Eu acho que estou
só saindo como chato.

Um bandido de repente agarra o pescoço de Woody e o empurra em direção a BO
PEEP, a estatueta de porcelana.

LENHOSO
(asfixia)
Ach! -- Oh, oi, Bo.

BO PEEP
Eu queria te agradecer, Woody, por
salvando meu rebanho.

LENHOSO
(corando)
Oh, ei, não foi nada.

BO PEEP
Whadda ya dizer que eu tenho outra pessoa para
assistir as ovelhas esta noite?

LENHOSO
(muito afobado)
Heh, heh... oh sim, uh, eu...

Bo volta para seu candeeiro, passando uma pilha de
Blocos do ABC.

BO PEEP
Lembre-se, eu sou apenas um par de
Quarteirões.

Woody fica apaixonado.

Todos os outros brinquedos da sala estão passando por Slinky.

SLINKY
Vamos lá, vamos lá!  Brinquedos menores
frente.

Woody continua apaixonado no meio da sala.

SLINKY
Ei, Woody!  Vamos lá!

Woody sai do transe e corre para o pódio.

Os brinquedos se aglomeram enquanto Woody sobe ao pódio.
MIKE, um gravador de brinquedo, se movimenta ao lado de Woody e
indica seu microfone.

MICROFONE
Ahem!

LENHOSO
(microfone de pega)
Oh, obrigado, Mike.
(para a multidão)
Ok--

SFX: COMENTÁRIOS

LENHOSO
(para Mike)
Oh, uau, dê um passo para trás --

Mike recua um passo para parar o feedback.

LENHOSO
Olá?  Verificar?  Melhor?  Legal.
Todo mundo me ouve?  Para cima do
prateleira, você pode me ouvir?  Legal!
Ok, primeiro item hoje... Oh sim.
Todo mundo escolheu um amigo em movimento?

Os brinquedos todos gemem.

HAMM
Amigo em movimento?!  Não dá para ser sério!

REX
Bem, eu não sabia que deveríamos
para ter um já.

SR. CABEÇA DE BATATA
(acenando com o braço para fora
seu soquete)
Temos que dar as mãos?

Os brinquedos RIR e SNICKER.

LENHOSO
Ah, sim, vocês acham que isso é um
grande piada.  Temos apenas uma semana
saiu antes da mudança.  Eu não quero
todos os brinquedos deixados para trás.  Um movimento
amigo -- se você não tem um, obtenha
Um!
(verificando o pad)
Tudo bem, a seguir... uh... Oh sim.
Terça-feira à noite "Corrosão Plástica
"Reunião de conscientização" foi, eu acho, um
grande sucesso e queremos agradecer ao sr.
Feitiço para colocar isso para nós.
Obrigado, Sr. Spell.

As palavras "Você é bem-vindo" rolam pela tela do Sr. Spell
tela enquanto ele fala.

SR. FEITIÇO
De nada.

LENHOSO
Ok, uh... Oh sim.  Uma nota menor
aqui...
(sob sua respiração)
A festa de aniversário de Andy foi movida
até hoje.
(voz completa)
Em seguida, temos --

Os brinquedos todos PÂNICO.

REX
Que?!  Whadda ya quer dizer, o partido
Hoje?!  Seu aniversário não é até
Na próxima semana!!

HAMM
O que está acontecendo lá embaixo?  É mamãe
perder suas bolinhas de gude?!

LENHOSO
Bem, obviamente ela queria ter
a festa antes da mudança.  Eu não sou
preocupado.  Você não deve se preocupar.

SR. CABEÇA DE BATATA
Claro que Woody não está preocupado!
Ele tem sido o favorito de Andy desde então
jardim de infância!

SLINKY
Ei, ei!  Vamos lá, Cabeça de Batata!
Se Woody disser que está tudo bem, então,
Bem, Darnit, é bom o suficiente para
me.  Woody nunca nos guiou
errado antes.

Enquanto Slinky fala, Cabeça de Batata tira a boca e
mímica beijando a própria bunda.

LENHOSO
Vamos lá, pessoal!  Todo Natal e
Passamos por isso.

REX
Mas e se Andy conseguir outro
dinossauro?  Um maldoso?  Eu apenas
não acho que eu possa tomar esse tipo de
rejeição.

LENHOSO
Ei, ouça, ninguém está recebendo
Substituído.  Este é Andy nós somos
Falando.

Woody desce do pódio e caminha em direção à multidão.

LENHOSO
(continuação)
Não importa o quanto sejamos
brincou.  O que importa é que
estamos aqui para Andy quando ele precisa
nos.  É para isso que somos feitos.
Direita?

Todo mundo agora está olhando para baixo, ovelha.

HAMM
Perdoe-me.  Eu odeio quebrar o
reunião de pessoal, mas ELES ESTÃO AQUI!
Aniversariantes às três horas!

LENHOSO
Fiquem calmos, pessoal!!

Tarde demais.  Os brinquedos PÂNICO e debandada sobre Woody em direção
a janela do quarto, deixando-o sozinho no chão.

LENHOSO
Uh, reunião adiada.

Os brinquedos se aglomeram todos ao redor da janela do quarto, tentando chegar
uma espiada lá fora.

HAMM
Ah, menino.  Você vai dar uma olhada em
todos esses presentes?!

SR. CABEÇA DE BATATA
Não consigo ver nada!

Incapaz de ver sobre a multidão, Cabeça de Batata puxa os olhos para fora
de sua cabeça e os segura sobre os outros brinquedos.

ÂNGULO: POV DO BRINQUEDO DO QUINTAL DA FRENTE DE ANDY

CRIANÇAS se dirigem para a porta da frente carregando presentes.

HAMM
Sim, somos a garagem do próximo mês
venda forragem com certeza.

REX
(em pânico)
Algum em forma de dinossauro?

HAMM
Ah, por chorarem alto, são
tudo em caixas, seu!

Os presentes não param de chegar.

REX
Eles estão ficando maiores.

SLINKY
Esperar!  Tem um pequenino bacana
ali!

A princípio, o presente do garoto parece ser uma caixinha, mas
então o garoto se vira -- o presente tem quatro metros de comprimento.  O
brinquedos GRITAM.

SR. FEITIÇO
Soletrar a palavra "lixeira".

REX
Estamos condenados!

No chão, Woody bate a mão na testa
rendição.

LENHOSO
Tudo bem!  Tudo bem!

Os brinquedos se voltam para dentro e olham para Woody.

LENHOSO
(continuação)
Se eu mandar as tropas, você vai
tudo se acalma?

REX
Sim!  Sim!  Nós prometemos!

LENHOSO
Ok, guarde suas baterias!

HAMM
Eh, muito bom, Woody.  Isso é usar
o macarrão velho.

Woody pula na cama de Andy e se vira para o Sargent em
a mesinha de cabeceira.

LENHOSO
Sargent.  Estabeleça um posto de recon
embaixo.  Código vermelho.  Você sabe
o que fazer.

SARGENT
Sim SIR!

O homem do exército verde pula para o chão onde um "BUCKET O'
SOLDADOS" senta-se.

SARGENT
Tudo bem, homens, vocês o ouviram.  Código
Vermelho!  Repita-se: Estamos no Código Vermelho!
Recon plano Charlie.  Executar!
Vamos nos mover mover!!

OS HOMENS DO EXÉRCITO VERDE saem do balde e marcham em
formação em todo o piso do quarto.

CORREDOR DO ANDAR DE CIMA

A porta de Andy se abre e um homem solitário do exército se aventura
para garantir que a costa esteja limpa.  Satisfeito, ele pede
os outros para prosseguir.  Esquadrões de soldados marcham para o
hall carregando um monitor de bebê e uma corda de salto.

Os homens do exército saltam cada um atrás dos corrimões das escadas e
mantêm suas posições enquanto o Sargento examina a cena
abaixo através de seus binóculos.

ÂNGULO: VISÃO BINOCULAR DE SARGENT DO ANDAR DE BAIXO

Logo abaixo, a Sra. Davis passa pelo corredor
reunindo Andy e todos os seus convidados de aniversário.

Sra. DAVIS
Ok, c'mon crianças!  Todos na
Sala de estar.  Está quase na hora de
os presentes.

Uma vez que a Sra. Davis e as crianças estão fora de vista, o
Sargento se dirige a seus homens com um sinal silencioso de mão.

DOIS PARAQUEDISTAS saltam pelo corrimão, saltando de paraquedas
até o andar de baixo.

CORREDOR TÉRREO - CONTÍNUO

Os paraquedistas varrem a área com seus fuzis de plástico,
em seguida, dê o sinal de "tudo claro".

A corda de salto é abaixada e mais soldados descem de rapel.

QUARTO DO INT. ANDY

Os brinquedos correm em direção à mesinha de cabeceira onde Woody colocou
a metade receptora do monitor de bebê.

LENHOSO
E isso --
(ligar o monitor do bebê)
-- é como descobrimos o que está em
esses presentes.

CORREDOR DO ANDAR DE BAIXO

Os homens do exército verde marcham em formação pelo chão quando
repentinamente...

SFX: PASSOS

Ouve-se aproximar-se por trás da cozinha comunicante
porta.  Imediatamente o Sargento sinaliza para que seus homens congelem
em suas várias poses clássicas de ação.

SRA. DAVIS (O.S.)
Ok, quem está com fome?  Vem aí o
batatas fritas.  Eu tenho Cool Ranch e
Churrasco--

A porta se abre e o pé da Sra. Davis desce com força por cima
de um soldado.

Sra. DAVIS
Owww!  O que no mundo -- ?  Ah
Pensei que disse a ele para pegá-los.

Com uma varredura no pé, ela afasta os homens do exército
seu caminho e continua até a sala de estar.

QUARTO DO INT. ANDY

REX
Eles não deveriam estar lá agora?
O que está demorando tanto?!

LENHOSO
Ei, esses caras são profissionais.
Eles são os melhores.  Vamos lá, eles são
não deitar no trabalho.

CORREDOR DO ANDAR DE BAIXO

Assim que a mãe se vai, o Sargento pede que seus homens
prossiga em direção a uma planta de casa próxima que olha para o
Sala de estar.

O sargento então percebe um soldado ferido lutando para
arrastar-se para a frente - uma vítima do pé da Sra. Davis.  O
Sargent ajuda o soldado ferido a se levantar.

SOLDADO FERIDO
(geme)
Vá sem mim.  É só ir!

SLINKY
Um bom soldado nunca deixa um homem
atrás.

O Sargento se dirige aos demais homens acima.  Eles baixam
eles mesmos através de pular corda, montando o monitor de bebê.  Uma vez
no andar de baixo, eles empurram o monitor de bebê em direção ao
Houseplant.  Repentinamente...

UMA BOLA

salta para o corredor, seguido pelo som de passos
e clamor de criança.

O Sargento, apoiando seu homem ferido, chega à usina,
logo nos calcanhares do pelotão com o monitor de bebê.  Eles
esconder-se na planta da casa pouco antes do
crianças correndo.

INT. DOWNSTAIRS - PLANTA DA CASA - CONTÍNUO

Enquanto o monitor do bebê está no lugar, um médico avalia
o soldado ferido e dá o sinal de "polegar para cima".

O Sargento varre a festa com seu binóculo.

ÂNGULO: VISÃO BINOCULAR DE PRESENTES DE ANIVERSÁRIO

A pilha de presentes brilhantemente embrulhados fica no topo da sala de estar
Mesa.

SARGENTO (O.S.)
Lá estão eles.

QUARTO DO INT. ANDY

Os brinquedos se animam quando STATIC emite repentinamente do bebê
monitor.

SARGENTO (O.S.)
(sobre o monitor)
Entre, Mãe Pássaro, este é o Alfa
Bravo.

LENHOSO
É isso!  É isso!  Quieto
sossego, sossego!

SARGENTO (O.S.)
(sobre o monitor)
Entre, Mãe Passarinho.
Tudo bem... Andy está abrindo o primeiro
presente agora.

SR. CABEÇA DE BATATA
(canto)
Sra. Cabeça de Batata... Sra. Batata
Cabeça... Sra. Cabeça de Batata...
(fora do visual de Rex)
Ei, eu posso sonhar, não posso?

SARGENTO (O.S.)
(sobre o monitor)
O arco está saindo... ele está rasgando
o papel de embrulho... é
um... é... é uma marmita!  Nós temos
tem uma marmita, aqui!

LENHOSO
Uma marmita?!

SR. CABEÇA DE BATATA
Uma marmita...?!

SLINKY
Para o almoço.  Heh heh heh...

SARGENTO (O.S.)
(sobre o monitor)
Ok, segundo presente... parece
ser... Ok, são lençóis.

SR. CABEÇA DE BATATA
Quem convidou AQUELE garoto?!

SALA DE ESTAR INT.

ÂNGULO: VISÃO BINOCULAR DOS PRESENTES

				PARTIDA DISSOLVIDA PARA:

ÂNGULO: VISÃO BINOCULAR DE UM PRESENTE SINGULAR

Sra. DAVIS
Ah, só sobrou um.

QUARTO DO INT. ANDY

SARGENTO (O.S.)
(sobre o monitor)
Ok, estamos no último presente agora...

LENHOSO
Último presente!

SARGENTO (O.S.)
(sobre o monitor)
É um grande... É um... é um
jogo de tabuleiro!  Repetir!  Encouraçado--
Encouraçado, o jogo de tabuleiro!

Os brinquedos VIBRAM COM ALÍVIO.

HAMM
Pois é, tudo bem!!!!

Hamm dá um tapinha nas costas de Cabeça de Batata,
enviando suas feições faciais voando.

SR. CABEÇA DE BATATA
Ei, assista!

HAMM
Desculpe aí, velho Spudhead.

INT. DOWNSTAIRS - PLANTA DA CASA

SARGENT
(aos homens do exército)
Missão cumprida.  Muito bem
homens.  Arrume as malas, vamos para casa.

QUARTO DO INT. ANDY

LENHOSO
Então eu te falei?  Hem?  Nada a
preocupar-se.

SLINKY
Eu sabia que você estava certo o tempo todo,
Lenhoso.  Nunca duvidei de você por um
segundo.

INT. DOWNSTAIRS - PLANTA DA CASA

O pelotão prepara-se para sair da fábrica quando...

SRA. DAVIS (O.S.)
Espere um minuto.  Oooh, o que fazemos
tem aqui?!

O Sargento levanta o binóculo de volta aos olhos.

ÂNGULO: VISTA BINOCULAR DA SALA DE ESTAR

A Sra. Davis pode ser vista abrindo o armário e saindo
outro grande presente.

SARGENT
(indicando o monitor do bebê)
Espere -- ligue essa coisa novamente!

QUARTO DE ANDY - CONTÍNUO

SARGENTO (O.S.)
(sobre o monitor)
Entre, Mãe Passarinho, entre,
Pássaro Mãe.

Todos os brinquedos ficam tensos.

SARGENTO (O.S.)
(continuação)
Mamãe puxou um presente surpresa
do armário.  Andy está abrindo...

INT. DOWNSTAIRS - PLANTA DA CASA - CONTÍNUO

SARGENT
Ele está muito animado com isso.
É um pacote enorme.  Oh -- obter
fora -- uma das crianças está no
assim, eu não consigo ver...

QUARTO DE ANDY - CONTÍNUO

SARGENTO (O.S.)
(do monitor)
... é... é um --

O som das crianças CHEERING emite do monitor,
cortando o Sargento.

REX
É um QUÊ?! O QUE É?!!!

Rex pega uma perna da mesinha de cabeceira e a agita, fazendo com que o
monitor cair no chão.  O impacto provoca as baterias
para implementar.

REX
Ah, não!

SR. CABEÇA DE BATATA
Oh, seu grande lagarto!  Agora nunca mais
saiba o que é!

HAMM
(sarcástico)
Caminho a percorrer, Rex.

Todos correm para o monitor caído.  Cabeça de batata tenta
Insira corretamente as pilhas.

LENHOSO
No, no!  Turn 'em around, turn 'em
ao redor!

HAMM
Eh, ele tá puttin' tá pra trás!

LENHOSO
Mais é positivo, menos é negativo!
Ah, deixa eu!

Woody pula da cama e empurra Hamm e Potato
Cabeça à parte.

SALA DE ESTAR INT.

ANDY
Vamos para o meu quarto, pessoal!

As crianças passam correndo pela planta da casa.

SARGENT
(no monitor)
ALERTA VERMELHO!  ALERTA VERMELHO!  ANDRÉ É
CHEGANDO LÁ EM CIMA!

QUARTO DE ANDY - CONTÍNUO

Woody coloca a última bateria de volta.

LENHOSO
Ali.

SARGENTO (O.S.)
(sobre o monitor)
Intrusão juvenil!  Repetir!
Retome suas vagas AGORA!

LENHOSO
Andy está chegando, todo mundo!  Voltar para
seus lugares.  Pressa!

Os brinquedos ENTRAM em PÂNICO e se espalham pela sala.

SR. CABEÇA DE BATATA
Cadê meu ouvido?  Quem viu meu ouvido?
Você viu meu ouvido?

REX
Outta do meu jeito!  Cá venho, cá vou
vir--

Frenético, Rex bate em uma lata de lixo e cai.

Todos correm para seus lugares como os passos das crianças
Fique mais alto.

Woody cai mancando em seu lugar na cama assim como...

A porta do quarto de Andy se abre e uma enxurrada de crianças
os pés se apressam.

AMIGO #1
Ei, olha só!  Seus lasers se iluminam.

ANDY
Tome isso, Zurg!

Woody é arremessado do travesseiro de Andy e desliza, sem ser notado, para baixo
o vão entre a cama e a parede dos fundos.

AMIGO #2
Rápido!  Faça um espaço!  Isso é
onde a nave espacial pousa.

ANDY
-- e você pressiona as costas dele e ele
faz uma ação de karatê-chop!

SRA. DAVIS (O.S.)
Vamos lá, pessoal.  É hora de
Jogos!  Temos prêmios!

ANDY
Oh sim!

As crianças todas saem correndo tão rápido quanto entram, QUEBRANDO O
PORTA atrás deles.

BATER

Aos poucos, os brinquedos ganham vida e vão em direção à cama.

SR. CABEÇA DE BATATA
O que é?

BO PEEP
Você pode vê-lo?

SLINKY
O que diabos é lá em cima?

REX
Lenhoso?  Quem está lá em cima com você?

Woody rasteja para fora de debaixo da cama.  Os brinquedos ficam chocados
para descobri-lo lá.

SLINKY
Woody, o que você está fazendo sob o
cama?

LENHOSO
(compondo-se)
Uh-h-h-h... nada!  Uh, nada.
Tenho certeza que Andy foi apenas um pouco
empolgado, só isso.  Muito bolo
e sorvete, suponho.  É
apenas um erro.

SR. CABEÇA DE BATATA
Bem, esse ERRO está sentado
seu lugar, Woody.

REX
(GASP!)
Foi substituído?

LENHOSO
Ei!  O que eu te falei antes?
Ninguém está sendo substituído.

Os brinquedos dão um ar de dúvida um ao outro.

LENHOSO
Agora vamos todos ser educados e dar
o que quer que seja lá em cima um bom, grande
"Andy's Room" bem-vindo.

Woody sobe lentamente até o lado da cama, espreitando sobre o
borda.  Seus olhos arregalam ao ver de...

BUZZ LIGHTYEAR

Vemos Buzz como Woody faz - uma era espacial cara
action figure, coberto com botões e adesivos da cabeça
aos pés.  O imponente boneco "G.I. Joe-sized" está heroicamente
no centro da cama, de costas para Woody.

GULPS Amadeirado.

Buzz ganha vida e olha ao redor.

ÂNGULO: POV DE BUZZ ATRAVÉS DE SEU CAPACETE

Enquanto ele varre o quarto um "DARTH VADER" COMO RESPIRAÇÃO é
fantasma.

Buzz olha tudo desconfiado e aperta um botão em seu peito.

SFX: BIPE ELETRÔNICO

ZUMBIDO
Buzz Lightyear para Star Command.
Entre, Comando Estrela.

Nada.  Ele aperta o botão novamente.

ZUMBIDO
Star Command - entre.  Você
me lê?
(para si mesmo)
Por que não respondem?!!

Nesse momento, Buzz avista sua embalagem rasgada.  O
caixa é projetado para se parecer com uma nave espacial.

ZUMBIDO
(GASP)
Meu navio!!

Ele corre até a caixa e investiga os danos.

ZUMBIDO
Explosão!  Isso levará semanas para ser reparado!

Buzz abre um compartimento de plástico em seu braço - o dele
comunicador de pulso.

ZUMBIDO
Buzz Lightyear Registro de Missão.
Stardate 4072: Minha nave fugiu
Curso a caminho do setor 12.  Eu tenho
Crash pousou em um planeta estranho.
O impacto deve ter me despertado
hiper-sono.

O zumbido sobe e desce na superfície mole da cama.

ZUMBIDO
(em comunicador)
O terreno parece um pouco instável...

Ele toca o adesivo de controles em seu comunicador de pulso.

ZUMBIDO
(em comunicador)
Ainda não há leitura se o ar estiver
Respirável... e parece haver
nenhum sinal de vida inteligente
em qualquer lugar--

ÂNGULO: POV DE BUZZ ATRAVÉS DE SEU CAPACETE

O rosto de Woody de repente aparece à vista.

LENHOSO
Olá-o-o...

ZUMBIDO
HO-YAAAHH!!

Buzz salta para trás, assumindo uma postura de luta.  Ele pressiona um
botão em seu braço que acende uma luz vermelha de "feixe de laser"
seu pulso.  Buzz mira a trave vermelha na testa de Woody e
Segura lá.

LENHOSO
Aaaaah!  Uau, ei, uau, eu fiz
assusta?  Não foi a intenção.
Desculpa.  Olá!  Meu nome é Woody
e este é o quarto de Andy.  Isto é
tudo o que eu queria dizer, e também,
Houve um pouco de confusão.
Este é o meu lugar, veja, a cama aqui --

Enquanto Woody está falando, Buzz percebe o distintivo do xerife em
Colete de Woody.

ZUMBIDO
(desativando seu
feixe de laser)
Aplicação da lei local!  É sobre
hora que você chegou aqui.  Eu sou Buzz
Lightyear, Space Ranger, Universo
Unidade de Proteção.  Meu navio caiu
chegou aqui por engano.

Buzz começa a andar ao redor da cama, examinando a situação.
Woody tenta acompanhar.

LENHOSO
Sim, é um erro, porque, você
Veja, a cama, aqui, é o meu lugar.

ZUMBIDO
Preciso consertar meus turbo boosters.
Vocês ainda usam fóssil?
combustíveis, ou você descobriu
fusão cristalina?

LENHOSO
Bem, vejamos, temos o dobro
A's --

ZUMBIDO
Observe-se!!

Buzz empurra Woody para baixo na cama e reativa seu pulso
laser.

ZUMBIDO
(continuação)
Parar!  Quem vai lá?!

Os outros brinquedos estão espreitando sobre a borda da cama.

REX
Não atire!  Tudo bem!  Amigos!

ZUMBIDO
(para Woody)
Você conhece essas formas de vida?

LENHOSO
Sim.  São brinquedos de Andy.

ZUMBIDO
Tudo bem, pessoal.  Você é claro para
como para cima.

Buzz caminha até os brinquedos.

ZUMBIDO
Eu sou Buzz Lightyear.  Venho em paz.

Rex dá um passo à frente e aperta ansiosamente a mão de Buzz.

REX
Oh, estou tão feliz que você não é um dinossauro!

ZUMBIDO
Ora, obrigado...
(afasta-se)
Agora obrigado a todos pelo seu tipo
bem-vindo.

REX
Dizer!  O que esse botão faz?

ZUMBIDO
Vou te mostrar.

Buzz aperta um botão em seu peito.

BUZZ (VOZ AMOSTRADA)
Buzz Lightyear para o resgate!

Os brinquedos todos SUSPIRAM DE ESPANTO.

SLINKY
Ei, Woody tem algo como
Isso.  O dele é um puxador, só
ela--

SR. CABEÇA DE BATATA
Só que parece que um carro atropelou.

HAMM
Ah, sim, mas não como este.
Este é um sistema de som de qualidade.
Provavelmente toda fiação de cobre, hein?
Então, uh, de onde você é?
Cingapura?  Hong Kong?

ZUMBIDO
Poço... não, na verdade eu estou estacionado
em alta no Quadrante Gama do Setor
4. Como membro da elite
Unidade de Proteção do Universo do
Space Ranger Corps, eu protejo o
galáxia da ameaça de invasão
do Imperador Maligno Zurg, jurado
inimigo da Aliança Galáctica.

Enquanto Buzz fala, Woody olha para a caixa em que Buzz
Chegou.

ÂNGULO: PARTE DE TRÁS DA CAIXA DO BUZZ

Há um desenho de desenho animado de Buzz dando a palavra exata
por palavra que Buzz agora está dando.

SR. CABEÇA DE BATATA
Ah, mesmo?  Eu sou da Playskool.

REX
E eu sou da Mattel.  Bem, eu não sou
na verdade da Mattel, eu sou na verdade
de uma empresa menor que foi
comprado em uma compra alavancada.
Bem, eu realmente não entendo o
finanças, mas...

Woody caminha até Bo Peep.

LENHOSO
Você pensaria que eles nunca viram um
brinquedo novo antes.

BO PEEP
Com certeza, olhe para ele.  Ele tem
mais gadgets nele do que um suíço
canivete.

Slinky pressiona o botão no braço de Buzz, ativando seu
luz laser.  Buzz rapidamente afasta o braço.

ZUMBIDO
Ah, ah, ah, por favor, cuidado!  Você
não quero estar no caminho quando o meu
o laser dispara.

SR. CABEÇA DE BATATA
Ei, um laser!  Como é que você não faz
tem um laser, Woody?

LENHOSO
Não é um laser!  É um pouco
lâmpada que pisca!

HAMM
O que há com ele?

SR. CABEÇA DE BATATA
Inveja do laser.

LENHOSO
Tudo bem, é o suficiente.  Olhar
estamos todos muito impressionados com
O novo brinquedo de Andy --

ZUMBIDO
Brinquedo?

LENHOSO
T-O-Y.  Brinquedo.

ZUMBIDO
Desculpe-me, eu acho que a palavra que você é
procurando é Space Ranger.

LENHOSO
A palavra que estou procurando eu não consigo
digamos porque há brinquedos pré-escolares
presente.

SR. CABEÇA DE BATATA
Gettin' meio tenso, não é?

REX
Oh, uh, Sr. Lightyear?  Agora estou
curioso.  O que faz um Space Ranger
realmente fazer?

LENHOSO
Ele não é um Space Ranger!  Ele
não combate o mal nem dispara lasers
ou voar --

ZUMBIDO
Com licença.

Buzz calmamente bate em um botão e asas aparecem.

Novamente os brinquedos SUSPIRAM DE ESPANTO.

HAMM
Ah, envergadura impressionante.  Muito bom!

LENHOSO
Ah, o quê?! ... Que?!  Estes são
plástico.  Ele não pode voar!

ZUMBIDO
Eles são uma liga terillium-carbic
e eu POSSO voar.

LENHOSO
Não, não pode.

ZUMBIDO
Sim, eu posso.

LENHOSO
Não pode!

ZUMBIDO
Poder!

LENHOSO
Não!  Não!  Não!

ZUMBIDO
Eu te digo, eu poderia voar em torno disso
quarto de olhos fechados!

LENHOSO
Ok, então, Sr. Lightbeer!  Prove isso.

ZUMBIDO
Tudo bem, então, eu vou.
(aos brinquedos)
Recuem todos!

A multidão de brinquedos abre espaço para Buzz enquanto ele se dirige para o
borda da cama e sobe até a cabeceira.  Ele posa como um
mergulhador alto, fecha os olhos...

ZUMBIDO
Ao infinito e além!!

... e salta da cama.

Buzz despenca direto, acerta uma grande bola de borracha e
Recupera para cima.

Ele então pousa em um carro Hotwheels, que o leva até o
trilha, através do loop, e fora de uma rampa.  Zumbido sobe
em um avião móvel pendurado no teto.

O zumbido fica encravado entre as rodas do avião.  O impacto
liga o MOTOR DO AVIÃO fazendo ele (e o Buzz) girar
e ao redor.

Todos os outros brinquedos assistem da cama, hipnotizados.

Finalmente, a força centrífuga faz com que o Buzz se separe de
o avião, navegando-o pelo quarto em direção à cama.

Buzz faz um pouso perfeito bem na frente de Woody e
depois abre os olhos.

ZUMBIDO
Poder.

A multidão de brinquedos corre Buzz, APLAUDINDO E BATENDO PALMAS COM
ADORAR.

REX
Uau!  Ah, nossa!  Você voou
magnificamente!

BO PEEP
Encontrei meu amigo em movimento!

ZUMBIDO
Ora, obrigado.  Obrigado a todos.
Obrigado.

LENHOSO
Isso não estava voando!  Isso foi
caindo com estilo!

SR. CABEÇA DE BATATA
Cara, as bonecas devem mesmo ir para
você!
(à parte)
Você pode me ensinar isso?

Woody fica sozinho do outro lado da cama, irritado.
Slinky, envolvido na euforia, aproxima-se de Woody.

SLINKY
Heh, heh, heh!  Golly bob howdy --

LENHOSO
Ah, cala a boca!  Em alguns dias,
tudo será do jeito que está
Foi.  Eles vão ver... eles vão ver.
Eu ainda sou o brinquedo favorito do Andy.

ASSEMBLÉIA

MÚSICA: STRANGE THINGS toca sobre montagem.

QUARTO DE ANDY - MAIS TARDE

A) Andy brinca com Woody: pulando para cima e para baixo na cama,
correndo pela sala.

B) Andy coloca Woody no chão.  Em seguida, ele "pousa" Buzz
Lightyear no chão em frente ao Woody.  Andy atira em Buzz
laser em Woody e, em seguida, bate Woody através da sala como se fosse
ele tinha sido surpreendido pelo laser.

C) Andy corre para seu armário usando seu chapéu de cowboy e
pijama de cowboy.

				CORTE DE CORRESPONDÊNCIA PARA:

Andy sai do armário vestido com pijamas Buzz Lightyear
e um capacete caseiro de um homem espacial.

ANDY
Buzz Lightyear para o resgate.

D) Woody observa todos os itens temáticos de cowboy no quarto
transformar em motivo espacial: os cartazes, os desenhos no
parede, o travesseiro, a colcha.

E) Buzz relógios Rex executar um ROAR WIMPY.  O guarda espacial
sugere algumas dicas para o dinossauro.  Rex tenta novamente, isso
tempo dando um rugido de "JURASSIC PARK".

O rugido explode as feições de Cabeça de Batata diretamente de seu rosto.

F) Woody passa por Etch-A-Sketch, que ostenta um retrato de
Zumbido.

Woody olha para o outro lado da sala para ver Buzz penteando Troll Doll's
cabelo, conversando como um cabeleireiro.

Woody irritado abala Etch, removendo a imagem de Buzz.

G) Rocky, Snake, Troll Doll e Rex estão levantando Tinkertoys
como pesos.  Buzz funciona em cima de um robô de cabeça para baixo,
usando os pés como esteira.

Cabeça de Batata tenta levantar sua barra Tinkertoy, mas termina
para cima tombando para trás, deixando seus braços conectados ao
Barbell.

H) Woody olha debaixo da cama para Slinky, encontrando apenas o
Xadrez.

Woody espreita ao canto da cama para ver Slinky e
Robô, sob a direção de Buzz, colocando a "nave" de Buzz em
topo de blocos ABC para reparo.

Em frustração, Woody chuta o tabuleiro de xadrez, mandando o
peças voando.  Uma das damas ricocheteia no
cômoda e bumerangue na boca de Woody.

I) Na cama de Andy, Buzz acaricia Slinky cujo back-end é
esticado para o outro lado onde Woody se senta.  Slinky's
abanando o rabo bate na cara de Woody repetidamente.

Woody empurra a traseira de Slinky para fora da cama, deixando o seu
front-end não há escolha a não ser eventualmente seguir.

J) Na hora de dormir, Andy carrega seus brinquedos na caixa de brinquedos até
restam apenas Woody e Buzz.  Ele delibera sobre qual
brinquedo para guardar e qual jogar na caixa de brinquedos.

QUARTO DE ANDY - MAIS TARDE NAQUELA NOITE

Andy está dormindo, com Buzz escondido sob as cobertas em seguida
para ele.

Woody espreita para fora da caixa de brinquedos e, em seguida, infelizmente afunda
de volta para a caixa, fechando a tampa para...

PRETO

FIM DA MONTAGEM/FIM DA MÚSICA

A tela preta se divide horizontalmente para se tornar...

QUARTO DE ANDY - MANHÃ - POV DE WOODY DO QUARTO
DA CAIXA DE BRINQUEDOS

Tudo está claro - nenhum sinal de Andy.  Woody abre a tampa
da caixa de brinquedos.

LENHOSO
Finalmente!

Ele toma algumas respirações profundas de ar fresco, então descobre
que falta o chapéu dele.

LENHOSO
(olhando para trás em
a caixa de brinquedos)
Ei!  Quem tem meu chapéu?

O tubarão de borracha aparece usando o chapéu de cowboy de Woody.

TUBARÃO
Olha, eu sou Woody.  Uau, uau, uau!

LENHOSO
(sarcástico)
Ah-hah!  Ah-hah-hah!
(pega o chapéu)
Me dá isso!

Woody salta da caixa de brinquedos.

ZUMBIDO (O.S.)
Diga lá, Lagarto e Cão Elástico.
Deixe-me mostrar-lhe uma coisa.  Ela
parece que fui aceito
na sua cultura.

Woody olha para cima para ver Buzz conversando com Rex e Slinky.

ZUMBIDO
(continuação)
Seu Chefe, Andy, inscreveu seu
nome em mim.

Buzz coloca o pé para fora para que Slinky e Rex possam ver o
sola de sua bota.

O nome "ANDY" está escrito nele em marcador permanente.

SLINKY & REX
Uau!

REX
Com tinta permanente, também!

ZUMBIDO
Bem, eu preciso voltar a reparar
meu navio.

O zumbido vai embora.

Woody olha para o seu pé - "Andy" está escrito nele também, mas
em um rabisco muito mais infantil, e é em grande parte desbotado.

BO PEEP (O.S.)
Não deixe isso chegar até você, Woody.

Ouvindo Bo, Woody coloca o pé de volta e rapidamente
endireita.

LENHOSO
(indiferente)
Uh, vamos o quê?  Eu não -- Uh, o que
Quer dizer?  Quem?

BO PEEP
Eu sei que Andy está animado com Buzz,
mas você sabe, ele sempre terá um
lugar especial para você.

SR. CABEÇA DE BATATA
(passando andando)
Sim.  Como o sótão.  Heh, heh...

LENHOSO
Tudo bem!  É isso!

Woody marcha furiosamente pela sala.

Do outro lado da sala, o navio de papelão de Buzz ainda está no topo da
Blocos do ABC.  Buzz deita-se num skate e desliza por baixo
o navio como um mecânico.  Cobra e robô aguardam
para obter instruções.  A mão de Buzz estende a mão por baixo do navio.

ZUMBIDO
Faixa de colagem unidirecional.

Robô se vira para Snake que fica de prontidão por uma fita
Dispensador.

ROBÔ
O Sr. Lightyear quer mais fita!

Cobra arranca um pedaço de fita com a boca.

Woody se aproxima do skate, agarra o pé de Buzz
e o lança de baixo do navio.

LENHOSO
Ouça, Lightsnack, você fica longe
de Andy.  Ele é meu e ninguém
está tirando-o de mim.

ZUMBIDO
Do que você está falando?
(para Robô)
Cadê essa tira de ligação?!

Buzz volta atrás.  Woody o lança novamente.

LENHOSO
E outra coisa.  Pare com isso
coisa de homem espacial.  Está entrando no meu
Nervos.

ZUMBIDO
Você está dizendo que quer hospedar um
Reclamação com o Comando Estrela?

LENHOSO
Oh ok, então você quer fazer o
Jeito difícil, hein?

Buzz se levanta, cara a cara com Woody.

ZUMBIDO
Nem pense nisso, cowboy!

LENHOSO
Ah, sim, cara duro?!

Woody empurra Buzz no peito, ativando acidentalmente um
botão que faz o capacete do homem espacial abrir.

Buzz agarra seu pescoço, OFEGANTE POR AR.  Ele cai de joelhos
e começa a se contorcer no chão, prendendo a respiração.

Woody não sabe como reagir.

De repente, Buzz cheira o ar.

ZUMBIDO
O ar não é tóxico.

Buzz se levanta e aponta o dedo acusador para Woody.

ZUMBIDO
Como você se atreve a abrir o
capacete em um planeta desconhecido!  Meu
globos oculares poderiam ter sido sugados de
suas tomadas!

Buzz fecha o capacete.

LENHOSO
Você realmente acha que é o "Buzz"
Ano Luz?" Ah, todo esse tempo eu
achei que era um ato!
(para o quarto)
Ei, pessoal!  Olhar!  É o REAL
Buzz Lightyear!

ZUMBIDO
Você está zombando de mim, não é?

LENHOSO
Oh, no, no, no...
(apontando atrás de Buzz)
Zumbido, olha!  Um alienígena!

ZUMBIDO
Onde?

Buzz cai no truque e dá a volta por cima.

Woody se ajoelha com RISOS.

SFX: LATIDOS DE CÃES

Woody pára por pouco.  Todos os brinquedos olham para a janela do quarto.

SID (O.S.)
Sim!  Ah, ha, ha, ha...

LENHOSO
Uh-oh.

Slinky se esconde debaixo da cama.

SLINKY
É o Sid!

REX
Achei que ele estava no acampamento de verão!

HAMM
Devem tê-lo expulsado cedo
este ano.

Os brinquedos correm para a janela.

REX
Ah, não!  Não Sid!

SID (O.S.)
... Entrante!

Da janela, SID PHILLIPS, um hiperativo de dez anos-
velho, e seu cachorro, SCUD, pode ser feito pulando
no quintal de casa.

Uma pequena figura está isolada no centro do quintal.
Sid golpeia a figura com pedras, enquanto Scud se esforça em seu
coleira, latindo descontroladamente.

SR. CABEÇA DE BATATA
Quem é desta vez?

LENHOSO
Não sei dizer.  Ei, cadê o Lenny?

LENNY (O.S.)
Aqui mesmo, Woody.

Woody se vira para ver, LENNY, um par de binóculos de enrolar,
aproximando-se dele do outro lado da mesa.  Palhetas amadeiradas
Lenny levanta-se e olha através dele para examinar a cena.

REX
Ah, não.  Eu não suporto assistir a um
destes de novo!

ÂNGULO: VISÃO BINOCULAR DO QUINTAL DO SID

Um soldado de brinquedo em tamanho real é posado em uma posição de corrida no
centro do quintal.  Um enorme M-80 está preso ao
Costas de boneca com fita adesiva.

LENHOSO
Ah, não... é um Carl de Combate.

SID (O.S.)
(joga sob o próximo
5 linhas)
Fique onde você está, Cabo!
Não se mexa, Carlinhos.  Você vai explodir.
Eu sei que você está cansado!  Eu conheço o seu
Perna é cólica, mas você não pode se mover.
Você me ouve?

O burburinho invade a multidão.

ZUMBIDO
O que está acontecendo?

LENHOSO
Nada que lhes diga respeito aos homens do espaço.
Só nós BRINQUEDOS.

ZUMBIDO
É melhor eu dar uma olhada de qualquer maneira.

Buzz agarra Lenny de Woody e olha através dele.

ZUMBIDO
Por que esse soldado está amarrado a um
Artefato explosivo?

LENHOSO
(redirecionando a visão de Buzz)
É por isso.  Sid.

ÂNGULO: VISÃO BINOCULAR DO CÃO, SCUD

ZUMBIDO
Claro que é um fellah peludo.

LENHOSO
Não!  Não, isso é Scud, seu!

Mais uma vez, Woody reajusta a visão de Buzz.

ÂNGULO: VISÃO BINOCULAR DO SID

Ele está vestindo uma camiseta de caveira e rindo HORRIVELMENTE.

LENHOSO
Isso é Sid!

ZUMBIDO
Quer dizer aquela criança feliz?

SR. CABEÇA DE BATATA
Essa não é uma criança feliz.

REX
Ele tortura brinquedos - apenas por diversão.

ZUMBIDO
Bem, então temos que fazer alguma coisa!

Buzz sobe para a borda da janela.  Os brinquedos SUSPIRAM EM CHOQUE.

BO PEEP
O que é que está a fazer?!!  Desça
a partir daí!

ZUMBIDO
Vou ensinar a esse menino um
lição.

LENHOSO
Sim, com certeza.  Você vai em frente.  Derreter
ele com seu laser assustador.

Woody pressiona o botão laser de Buzz.  Ele emite um WIMPY
BIPE ELETRÔNICO.  Buzz rapidamente afasta o braço.

ZUMBIDO
Cuidado com isso, é
extremamente perigoso.

Enquanto Woody e Buzz brincam, Lenny testemunha a iluminação de Sid
o fusível do M80.

LENNY
Ele está acendendo!  Ele está acendendo!

SID (O.S.)
NÃO-O-O-O-O!!  CA-A-A-A-A-A-A-ARL!

LENNY
Bateu na sujeira!

Os brinquedos saltam para longe da janela.

SFX: EXPLOSÃO

Nuvens de terra e estilhaços de brinquedo chovem ao longo do lado de
A casa de Andy.

SID (O.S.)
Sim!  Ele se foi!  Ele é história!

Os brinquedos de Andy espreitam o peitoril da janela.

ÂNGULO: SID'S YARD

Uma grande marca de queimadura preta é tudo o que resta onde o Combate
Carlinhos uma vez se levantou.  Sid salta para cima e para baixo vitoriosamente enquanto
Scud retoma seu latido.

ZUMBIDO
Eu poderia tê-lo impedido.

LENHOSO
Buzz, eu adoraria vê-lo tentar.
(gesticulando para o quintal de Sid)
"Claro que eu adoraria vê-lo como um
cratera.

Sid CACKLES e dança ao redor da cratera.

BO PEEP
Quanto mais cedo nos movermos, melhor.

				DISSOLVER EM:

PÁTIO DA FRENTE DE ANDY - PÔR DO SOL

Uma placa de "à venda" está no quintal da frente.
Outra placa com os dizeres "VENDIDO" está pendurada na parte inferior.

HALL DO ANDAR DE CIMA/QUARTO DE ANDY

Mamãe abre a porta do quarto de Andy e entra.  O quarto é
cheio de caixas de embalagem, a maioria delas meio cheias.  Andy é
brincando com Woody e Buzz.

ANDY
Ao infinito e além!

Sra. DAVIS
Ah, toda essa embalagem me faz
faminto.  O que você diria para
jantar em, uh, oh, Pizza Planet?

ANDY
Planeta Pizza?!  Ah, legal!

Andy joga os dois brinquedos em sua mesa com Buzz pousando direito
em cima de Woody.

Sra. DAVIS
Vá lavar as mãos e eu vou conseguir
Molly pronto.

No minuto em que a porta é fechada, Woody ganha vida e empurra
Zumbido fora dele.

ANDY (O.S.)
Posso levar alguns brinquedos?

SRA. DAVIS (O.S.)
Você pode trazer UM brinquedo...

ANDY (O.S.)
Apenas um?

Woody se anima com preocupação.

LENHOSO
(para si mesmo)
Um brinquedo?

Ele olha por cima do ombro para Buzz, que está indo embora
na extremidade oposta da mesa.

Woody pega uma Magic 8 Ball deixada ao seu lado na mesa.
De costas para Buzz, Woody agita tranquilamente a bola de 8.

LENHOSO
(sussurrando)
Andy vai me escolher?

Ele derruba a bola de 8.  O oráculo triangular flutua até
a superfície.  Sua previsão diz: NÃO CONTE COM ISSO.

LENHOSO
Não conte com isso?!!  Doh-h-h-h!

Woody joga a bola de 8 com nojo.  Rola
a mesa e cai atrás dela com um LOUD THUD.

Woody de repente se interessa pelo fundo da mesa
e espreita para baixo.

ÂNGULO: PARTE DE TRÁS DA MESA

A bola 8 está encravada bem perto do fundo.  O espaço é
um abismo preto, escuro e profundo, apenas grande o suficiente para caber... um brinquedo.

Woody olha do outro lado da mesa para Buzz.

Ele está CANTAROLANDO PARA SI MESMO enquanto vasculha o coração de Andy
bandeja de caneta/lápis procurando "ferramentas" para consertar seu navio.
Logo atrás do Buzz fica

O CARRO RC

Ele repousa na área de trabalho, apontando na direção onde o
8 bola caiu, com o controle remoto ao seu lado.

Woody sorri por uma batida e depois corre em pânico para Buzz.

LENHOSO
Zumbido!!  Oh, Buzz, Buzz Lightyear!
Buzz Lightyear, graças a Deus!
Temos problemas!

ZUMBIDO
Incomodar?!
(olhando ao redor)
Onde?!

LENHOSO
(apontando para trás
da mesa)
Lá embaixo.  Só lá embaixo.  Um
brinquedo indefeso... é... está preso,
Zumbido!

ZUMBIDO
Então não temos tempo a perder!!

Buzz corre e olha para o fundo da mesa.

ZUMBIDO
Não vejo nada!

Woody pega o controle remoto para o RC Car e o liga.
Os olhos de RC (faróis) abrem sonolentos.

LENHOSO
Ah, ele está lá.  Apenas, apenas manter
Olhando.

Woody aperta o botão "FORWARD" no controle remoto e dirige o
RC Car direto para Buzz.

ZUMBIDO
Que tipo de brinquedo -- ?

Buzz se vira para ver RC indo direto para ele.  Ele mergulha
do caminho como o carro RC SMASHES na base de...

UM QUADRO DE AVISOS

O impacto força os pinos a voarem para fora da prancha.  Zumbido
patos como alfinetes pousam ao seu redor, grudados na mesa
como flechas.

CABEÇA DE BATATA

senta-se no chão no meio de um jogo de cartas com Hamm.

Ele olha para a mesa e para o GASPS como o quadro de avisos
bate em...

UM GLOBO

derrubando-o de sua arquibancada.  O globo começa a rolar
bem no Buzz.

Woody fica congelado em descrença com o caos que criou.

Buzz corre ao longo da mesa, o globo rolando logo atrás
ele, estilo Indiana Jones.  Buzz fica preso "log rolling" em
uma pilha de lápis, mas no último segundo salta para fora do
caminho para a borda da janela.

O globo passa por Buzz e atinge um estilo Luxo.
candeeiro de secretária.  O braço da lâmpada balança por todo o caminho,
mal faltou Woody...

... e derruba Buzz pela janela.

BRINQUEDOS
ZUMBIDO!!!!

LENHOSO
Zumbido!!!

Woody olha pela janela.  Nenhum sinal de Buzz.  Todos os outros
os brinquedos correm para o peitoril.

SLINKY
Não o vejo na garagem!  Eu
acho que ele quicou no quintal de Sid.

Woody se afasta da comoção, despercebido.

REX
(GASP)
Zumbido!

CARRO RC
(sons de motores elétricos)
Whirrr!!  Whirrrr-whirr!

Rex olha para RC.  O carro de controle remoto está saltando para cima
e para baixo animadamente.

REX
Olá a todos!  RC's tentando dizer
algo!

Os brinquedos passam da janela para o RC.

REX
(inclinando-se para baixo perto
para RC)
O que é isso, rapaz?

CARRO RC
(sons de motores elétricos)
Whirrr!! Whirrr!  Whirrrrrr!!

SR. CABEÇA DE BATATA
Ele está dizendo que isso não foi por acaso.

BRINQUEDOS
Hem?

BO PEEP
O que você quer dizer?

SR. CABEÇA DE BATATA
Quer dizer, Humpty Dumpty foi empurrado...
(apontando para Woody)
... por Woody.

BRINQUEDOS
QUE?!?

Os brinquedos se voltam para Woody que, de repente, percebe como isso parece.

LENHOSO
Espere um minuto.  Você -- você não
acho que eu quis nocautear o Buzz
janela, você Cabeça de Batata?

SR. CABEÇA DE BATATA
Esse é o Sr. Cabeça de Batata para você, você
assassino de facada!

LENHOSO
Agora, foi um acidente!  Galera
Vamos lá, você... você tem que acreditar em mim

SLINKY
Nós acreditamos em você, Woody.  Certo, Rex?

REX
(recuando)
Ah, não gosto de confrontos.

O Sargento sai do balde do exército ao lado de Woody.

SARGENT
Cadê sua honra, sujeira?!  Você
são uma vergonha absoluta!  Você
não merece --

Woody sela a tampa de volta no balde.

Cabeça de Batata começa a se aproximar de Woody.

SR. CABEÇA DE BATATA
Não consegui lidar com Buzz cuttin' em
seu tempo de jogo, você poderia Woody?
Não queria encarar o fato de que
Buzz pode ser o novo de Andy
brinquedo favorito, então você se livrou dele.
Bem, e se Andy começar a jogar'
comigo mais, Woody, hein?  Você
vai me derrubar pela janela também?

Cabeça de Batata levou Woody de volta à borda do
mesa -- preso.

HAMM
Não acho que devemos dar a ele
a chance.

De repente, a tampa estoura o balde dos homens do exército.

SARGENT
Lá está ele, homens!  Arrase ele!

Os homens do exército gritam CHARGE e atacam Woody, enquanto todos os
o resto dos brinquedos se aproximam.

SR. CABEÇA DE BATATA
Vamos amarrá-lo pelo seu puxão-
corda!

HAMM
Eu tenho dibs no chapéu dele!

BO PEEP
Vocês meninos parariam com isso?!

HAMM
Enfrente-o!

LENHOSO
Não, não, não, não!  Esperar!  Espere eu posso
explicar tudo --

SRA. DAVIS (O.S.)
Andy, vamos lá!

ANDY (O.S.)
Ok, mamãe, fique bem para baixo.  Eu tenho
para obter Buzz.

SARGENT
Retirar-se!

Os brinquedos todos largam Woody e correm de volta para seus lugares.

Andy entra na sala e vai direto para a mesa onde
Woody está mentindo.  Andy ignora Woody e começa a procurar
ao redor da sala.

ANDY
Mamãe!  Você sabe onde fica o Buzz?

SRA. DAVIS (O.S.)
Não, eu não o vi.

Woody assiste dolorosamente enquanto Andy procura em vão por Buzz.

SR. CABEÇA DE BATATA (O.S.)
Psssst!

Woody olha para o outro lado da sala.

Cabeça de batata e Etch-A-Sketch espreitam de uma caixa de embalagem.
Etch-A-Sketch rabisca o laço de um enforcado enquanto Cabeça de Batata
aponta o dedo acusador na direção de Woody.

GULPS Amadeirado.

SRA. DAVIS (O.S.)
Andy!  Estou saindo pela porta.

ANDY
Mas mamãe, eu não consigo encontrá-lo!

SRA. DAVIS (O.S.)
Bem, querida, apenas pegue algum outro
brinquedo!  Agora vamos lá!

ANDY
Ok...

Ele agarra Woody e sai da sala.

EXT. CASA DE ANDY - CONTÍNUO

Andy sai da casa arrastando Woody enquanto ele se dirige para o
van da família na garagem.

ANDY
Não consegui encontrar meu Buzz.  Eu sei que eu
deixou-o ali mesmo.

Sra. DAVIS
Querida, tenho certeza que ele está por perto.
Você vai encontrá-lo.

UM BUSH

Ao lado da van começa a farfalhar.  Mãos parte da folhagem,
revelando Buzz.  Ele olha Woody entrando na van e faz um
queimadura lenta.

O MOTOR ARRANCA.  Buzz corre para fora do mato, e
com um salto poderoso, agarra o para-lama traseiro da van como ele
Sai da garagem.

ÂNGULO: LADO DA CASA DE ANDY

Uma cadeia de macacos cai à vista, balançando um considerável
distância acima do solo.

EXTENSÃO JANELA DO QUARTO DE ANDY - CONTÍNUA

O resto dos brinquedos de Andy se reagruparam na janela,
supervisionar o rebaixamento da "corrente do macaco".

SLINKY
É muito curto!  Precisamos de mais macacos!

REX
(segurando um barril vazio)
Não há mais!  Esse é o
barril inteiro.

Rex joga o barril para baixo e corre de volta para a borda.

REX
(gritando pela janela)
Zumbido!  Os macacos não estão funcionando!
Estamos formulando outro plano!
Fique tranquilo!
(bater)
Ah, onde ele poderia estar?

EXT. POSTO DE GASOLINA - MAIS TARDE

A van da família Davis puxa até uma das bombas.

FURGÃO - CONTÍNUO

Andy senta-se no banco traseiro com Woody deitado ao seu lado.

ANDY
Posso ajudar a bombear o gás?

Sra. DAVIS
Certo!  Vou até deixar você dirigir.

Tanto a Sra. Davis quanto Andy saem da van enquanto a bebê Molly
dorme na frente no banco do carro.

ANDY (O.S.)
Sim?!

SRA. DAVIS (O.S.)
Sim, quando você tiver dezesseis anos.

ANDY (O.S.)
(sarcástico)
Yuk, yuk, yuk -- engraçado, mãe.

Com a mãe e Andy fora de alcance, Woody ganha vida.  Ele
olha para o teto solar, ainda se recuperando de tudo.

LENHOSO
Ah, ótimo.  Como vou convencer
Esses caras foi um acidente?

De repente, Buzz aparece sobre a borda do teto solar.

LENHOSO
Zumbido!

Buzz pula no banco de trás para enfrentar Woody.  Ele está furioso.

LENHOSO
Zumbido!  Você está vivo!  Isso é ótimo!
Ah, estou salvo!  Estou salvo!  Andy'll
encontre-o aqui, ele nos levará de volta
para a sala, e então você pode dizer
todo mundo que tudo isso era apenas um
grande erro.  Hem?

Nenhuma resposta do Buzz.  Apenas um olhar irritado.

LENHOSO
(fracamente)
Direita?  Amigo?

ZUMBIDO
Eu só quero que você saiba que mesmo
embora você tenha tentado me encerrar,
A vingança não é uma ideia que promovemos
no meu planeta.

LENHOSO
Ah.  Ah, isso é bom.

ZUMBIDO
(ficando na cara do Woody)
Mas não estamos no meu planeta, não é?

LENHOSO
Não.

Buzz mergulha para Woody.  Os dois brinquedos voam do assento e
pela porta lateral aberta da van.

RAMAL POSTO DE GASOLINA - CONTÍNUO

Woody e Buzz bateram no chão e rolaram sob a van, trancados
em combate mortal.

LENHOSO
Okey!  Sem essa!  Você quer um pedaço de
me?!

Buzz desfere um soco que faz a cabeça de Woody girar.

Woody mergulha com todas as suas forças.  Ele bate em Buzz no
cara, fazendo-o CHIAR a cada golpe.

Buzz fecha o capacete na mão de Woody.

LENHOSO
Owwwww!!

Woody bate no peito de Buzz com a mão livre, ativando
Botões de VOZ DE AMOSTRA DO BUZZ.

SFX: CARRO POR SLAM

Os brinquedos param de brigar.  Antes que eles possam reagir...

SRA. DAVIS (O.S.)
Próxima parada...

ANDY (O.S.)
Planeta Pizza!  Sim!!!

A van vai embora.

LENHOSO
(GASP)
Andy?!

Woody começa a correr na direção da van, mas
Deixa Buzz e Woody encalhados.

LENHOSO
Ele não percebe que eu não sou
ali?
(bater)
Estou PERDIDO!  Ah, eu sou um brinquedo perdido!

Enquanto isso, Buzz verifica os arredores.  Ele abre o seu
comunicador de pulso.

ZUMBIDO
Buzz Lightyear Registro de Missão.  O
Xerife local e eu parece estar em um
enorme posto de reabastecimento de alguns
ordenar--

Woody chicoteia, sua expressão mudando de pânico para
raiva fervente.  Ele cobra no Buzz.

LENHOSO
Você!

SFX: BUZINA DE CAMINHÃO ALTO

Só então os brinquedos são banhados nos feixes de faróis de um
caminhão-tanque gigante puxando para dentro da estação.

Buzz mergulha para o lado enquanto Woody desaba exatamente onde
ele fica na calçada.  O caminhão ruge sobre ele.

UM PNEU GIGANTESCO

pára a poucos milímetros do nariz de Woody.

Petrificado, Woody a centímetros de distância do pneu, movendo-se para trás
embaixo do caminhão até esbarrar em Buzz.

ZUMBIDO
(em comunicador de pulso)
De acordo com o meu nava-computador, o --

LENHOSO
(sussurrando)
Cale a boca!  Cala a boca, seu!!

ZUMBIDO
Xerife, não é hora de entrar em pânico.

LENHOSO
Este é o momento perfeito para entrar em pânico!
Estou perdido, Andy se foi, eles estão
vai se mudar de sua casa em
dois dias e a culpa é toda sua!!

ZUMBIDO
Culpa minha?!  Se você não tivesse me empurrado
fora da janela no primeiro
lugar--

LENHOSO
Oh sim?  Bem, se você não tivesse
apareceu no seu pequeno estúpido
nave espacial de papelão e levada
tudo o que era importante para
me--

ZUMBIDO
Não fale comigo sobre importância.
Por causa de VOCÊ a segurança disso
todo o universo está em perigo.

LENHOSO
(incrédulo)
QUE?!!  Do que você está falando?!

Zumbido caminha até a borda do pneu do caminhão e aponta para o
Estrelas.

ZUMBIDO
Neste momento, à beira da
a galáxia, o imperador Zurg tem sido
secretamente construindo uma arma com o
capacidade destrutiva de aniquilar
um planeta inteiro.  Só eu tenho
informações que revelam isso
A única fraqueza da arma.
(apontando para Woody)
E você, meu amigo, é responsável
por atrasar meu encontro com
Comando Estrela.

Woody explode.

LENHOSO
VOCÊ É UM BRINQUEDO!!  Você não é o
real Buzz Lightyear, você é um
figura de ação!!  Você é de uma criança
brinquedo!!!

Bater.

ZUMBIDO
Você é um triste homenzinho estranho
e você tem minha pena.  Adeus.

O burburinho se afasta.

LENHOSO
Oh sim?  Bem, boa cavalgada, ya
Looney!

Woody se afasta na direção oposta.

LENHOSO
(para si mesmo)
Rendez-vous com Star Command.

SFX: GUINCHO DE PNEUS SEGUIDO DE SINO DE POSTO DE GASOLINA

ENTREGADOR DE PIZZA (O.S.)
Ei, cara de gás!

AGUARDANDO (O.S.)
Você fala comigo?

ENTREGADOR DE PIZZA (O.S.)
É, cara, você pode me ajudar?  Você
sabe onde fica o Cutting Blvd.?

AGUARDANDO (O.S.)
Apenas um momento...

Woody olha na direção do sino.  Seu rosto ilumina
até à vista de...

UM CAMINHÃO DE ENTREGA PIZZA PLANET.

LENHOSO
(para si mesmo)
Planeta Pizza... Andy!

Woody dá um passo à frente e depois para.

LENHOSO
Ah, não!  Não consigo mostrar meu rosto
aquela sala sem Buzz.

Woody corre de volta sob o caminhão-tanque.  O burburinho está longe
fim do caminhão, afastando-se de Woody.

LENHOSO
Zumbido!  Zumbido, volte!

ZUMBIDO
(continuando a afastar-se)
Vá-se embora.

Woody olha para o caminhão de entrega em desespero e
depois olhos...

ÂNGULO: SINAL DO TETO DO CAMINHÃO DE ENTREGA

No topo do caminhão está um foguete com o logotipo da Pizza Planet.

LENHOSO
Não, Buzz, você tem que voltar.
Encontrei uma nave espacial!

Buzz pára de se afastar e olha para Woody.

LENHOSO
É uma nave espacial, Buzz!

POSTO DE GASOLINA EXT. - ALGUNS MINUTOS DEPOIS

O motor do caminhão de entrega parou e está desligado.

ENTREGADOR DE PIZZA (O.S.)
Vamos lá, cara, se apresse.  Hum, como
As pizzas estão ficando frias aqui.

Woody e Buzz olham o caminhão de entrega estacionado de dentro do
segurança de uma exposição de lata de óleo nas proximidades.

ZUMBIDO
Agora você tem certeza que este cargueiro espacial
retornará ao seu porto de origem
uma vez que ele descarta seu suprimento de alimentos?

LENHOSO
Uh-hein.  E quando chegamos lá,
Seremos capazes de encontrar uma maneira de
transportá-lo... Casa.

ZUMBIDO
Bem, então vamos subir para o exterior.

Buzz faz um beeline para a porta lateral do passageiro do
caminhão de pizza.  Woody corre atrás dele.

LENHOSO
Não, não, não, espere, Buzz, Buzz, vamos
ficar atrás.  Ninguém vai ver
nós lá.

ZUMBIDO
Negativo.  Não há restrições
chicotes na área de carga.  Nós vamos
ser muito mais seguro no cockpit.

Em um piscar de olhos, Buzz escalou o pneu dianteiro, agarrou o traseiro
espelho de visão, e se jogou para cima e para dentro da cabine.

LENHOSO
(sussurro alto)
É, mas, Buzz!  Zumbido!

ENTREGADOR DE PIZZA (O.S.)
Ok, então são duas esquerdas, e depois um
certo, hein?

AGUARDANDO (O.S.)
Sim.

ENTREGADOR DE PIZZA (O.S.)
Ok, obrigado pelas instruções.

LENHOSO
(sussurro alto)
Zumbido!

SFX: PARTIDA DO MOTOR

Woody corre para a traseira do caminhão, embaralha o
para-choques e lança a escotilha traseira para subir para dentro.

Woody solta um YELL, enquanto a escotilha traseira bate de volta
sua traseira, mandando-o voar para a cama do caminhão.

CAMINHÃO DE ENTREGA PIZZA PLANET - CONTÍNUO

Woody espreita através da janela divisória para dentro da cabine.

Buzz é escondido da visão do pizzaiolo por uma pilha de
pizzas em suas capas isoladas.  O zumbido prende com prudência
seu cinto de segurança.

LENHOSO
Será mais seguro no cockpit do que
o compartimento de carga.  Que!

O motorista muda de marcha e bate no acelerador, impulsionando
Woody para a traseira do caminhão.

O entregador de pizza dirige como um maníaco, dando voltas bruscas
e morros em alta velocidade.  Woody é jogado impotente por aí
o caminhão.  A cada golpe, Woody YELPS de dor.

O caminhão sobe uma colina íngreme.  Woody olha para cima a tempo
Ver...

UMA GRANDE CAIXA DE FERRAMENTAS

Aproximando-se dele.

BAM!!!

				CORTE PARA:

UM CÉU NOTURNO NEGRO CHEIO DE ESTRELAS

Nós MOVEMOS PARA BAIXO para revelar...

EXT. PIZZA PLANET - NOITE

O caminhão de entrega entra no estacionamento e nos parques.

CAMINHÃO DE ENTREGA INTERNACIONAL - CABINE - CONTÍNUO

Depois que o motorista sai do caminhão, Buzz espreita para fora do
janela do passageiro.

ÂNGULO: A ENTRADA FRONTAL

Dois imponentes robôs animatrônicos guardam a porta.  Como
CLIENTES se aproximam da frente, os guardas partem de sua cruz
"Lanças de pizza", permitindo que os clientes entrassem.

PROTETORES ROBÔS
Você é claro para entrar.  Bem-vindo ao
Planeta Pizza.

VÁRIOS ANÚNCIOS sopram dos palestrantes:

LOCUÇÃO MASCULINA
Próxima decolagem do ônibus programada para
T-menos 30 minutos e contando...

LOCUÇÃO FEMININA
A zona branca é para comer pizza
somente.  A zona branca é para...

Animado, Buzz abre a janela entre a cabine e
cama de caminhão.

ZUMBIDO
Xerife!

Woody se foi.  Apenas a caixa de ferramentas e o lixo espalhado.

ZUMBIDO
(continuação)
Xerife?

A caixa de ferramentas cai de lado, revelando Woody.  Ele descasca
a traseira do caminhão e cai em uma pilha de lixo.

ZUMBIDO
Aí está.  Agora a entrada é
fortemente vigiado.  Precisamos de uma maneira de
entre.

Woody se levanta do lixo com um copo "MEGA-GULP" na cabeça.

ZUMBIDO
Ótima ideia, Woody!  Eu gosto do seu
pensante!

EXT. PIZZA PLANET - ENTRADA FRONTAL

No f.g. fica uma lixeira com recipientes de fast food
entulhado em torno dele.  MAIS CLIENTES se aproximam dos "vigiados"
entrada.

PROTETORES ROBÔS
Você é claro para entrar.  Bem-vindo ao
Planeta Pizza.

As portas da frente se abrem automaticamente à medida que as pessoas passam
através.  De repente, dois pedaços de lixo -- um recipiente de hambúrguer
e copo "MEGA-GULP" de pé.

ZUMBIDO
(em recipiente de hambúrguer)
AGORA!

Os dois brinquedos disfarçados fazem uma corrida pelas portas que se fecham.

ZUMBIDO
(em contêiner)
Rapidinho, xerife!  O bloqueio de ar é
fechamento.

PIZZA PLANET - ENTRADA FRONTAL - CONTÍNUA

Woody e Buzz apenas fazem isso dentro, mas depois congelam
imediatamente como um GRUPO DE CRIANÇAS passam, forçando os brinquedos a
posar como lixo descartado.

Quando a costa estiver clara, Woody e Buzz voltam a caminhar.
Buzz esbarra em Woody.

LENHOSO
(usando palha como periscópio)
Ow!  Veja para onde você está indo!

ZUMBIDO
(boquinha com caixa de hambúrguer)
Desculpa.

Eles se esgueiram entre duas longas fileiras de videogames e jogam
fora de seus disfarces.  Eles então dão uma boa olhada em...

O FLIPERAMA

A arena temática do espaço está cheia de hordas de crianças
jogar videogame.  Um mar de SONS E LUZES HI-TECH
sobrecarregar o lugar.

Buzz está radiante de esperança.

ZUMBIDO
Que porta espacial.  Bom trabalho, Woody.

Woody está ocupado olhando para todas as crianças no fliperama, mas
Nenhuma das crianças lhe parece familiar.  Só então ele OUVE...

ANDY (O.S.)
Mãe, posso jogar Black Hole?
Por favor, por favor, por favor?!

Woody se vira e através dos videogames ele vê...

ANDY

em pé com a mãe e Molly em seu carrinho.

LENHOSO
(para si mesmo)
Andy!

Sra. DAVIS
O que é buraco negro?

ANDY
Ah, é tão legal...

A família começa a se afastar.

ZUMBIDO
Agora precisamos encontrar um navio que seja
rumo ao Setor 12 --

Buzz está prestes a ir na direção oposta quando
Woody agarra-o e rapidamente puxa-o pelo corredor de vídeo.

LENHOSO
Espere um minuto!  Sem burburinho!  Assim!
Há um navio especial.  Acabei de ver
ela!

ZUMBIDO
Quer dizer que tem hyperdrive?

LENHOSO
Hiperdrive hiperativo e
astro... uh, relva.

Os brinquedos conseguem chegar à frente de Andy.  Espia lenhosa ao redor
o canto de um dos videogames e espera pela mamãe e
Andy para se aproximar.

LENHOSO
(acompanhando Andy e família)
Vamos lá, vamos lá, é isso...

ZUMBIDO
Onde fica?  Eu não vejo o --

Buzz pára na visão de...

UM JOGO DE GUINDASTE

Ele é modelado para parecer uma nave espacial pronta para ser lançada.

ZUMBIDO
(continuação)
Espaçonave.

LENHOSO
Tudo bem Buzz, prepare-se...

Buzz se dirige para o jogo do guindaste, mas Woody não percebe,
seus olhos trancados no carrinho que se aproximava.

LENHOSO
Ok, Buzz, quando eu digo "vá", estamos
vai pular na cesta --

Woody se vira e percebe que Buzz se foi.  Ele olha para o outro lado do
bem a tempo de ver Buzz saltar para o jogo do guindaste
através da vaga "PRÊMIO".

LENHOSO
(sussurro alto)
Zumbido!

Woody volta na direção do carrinho.

Já passou.

LENHOSO
Dooh!  Não!  Isso não pode ser
acontecendo comigo!!!!

Woody corre em direção ao jogo do guindaste, mas é forçado a segurar
volta por um momento enquanto algumas crianças GRITANDO passam.

JOGO INT. CRANE

Buzz sobe sobre a partição que divide o slot de depósito
dos brinquedos do prêmio e salta para uma pilha de...

APERTE ALIENÍGENAS DE BRINQUEDO

São centenas, todas idênticas e fofas demais.

ALIENÍGENA #1
(empolgado)
Um estranho!

ALIENÍGENA #2
De fora!

ALIENÍGENAS
Oo-o-o-o-o-o-o...

ZUMBIDO
Saudações!  Eu sou Buzz Lightyear!  Eu
Venha em paz!

ALIENÍGENAS
Conte-nos!  Como é lá fora?

Os brinquedos de aperto apressam Buzz como crianças animadas JABBERING.

JOGO DE GUINDASTE EXT.

Com as crianças desaparecidas, Woody atravessa o corredor até o guindaste
jogo e mergulha através da vaga de prêmios.

JOGO DE GUINDASTE - CONTÍNUO

Woody aperta o lado do slot de depósito.

ZUMBIDO (O.S.)
Esta é uma emergência intergaláctica!
Preciso comandar sua embarcação para
Setor 12!

Woody espreita sobre a divisória para testemunhar Buzz rodeado por
os brinquedos alienígenas bonitos.

ZUMBIDO
(continuação; aos alienígenas)
Quem manda aqui?

Todos os alienígenas apontam para cima.

ALIENÍGENAS
O cla-a-a-a-a-a-a-a-a-w!!

Woody e Buzz olham para cima.

ÂNGULO: GARRA DO JOGO CRANE

Ele balança diretamente acima dos brinquedos.

ALIENÍGENA #1
A garra é o nosso mestre.

ALIENÍGENA #2
A garra escolhe quem vai e
quem vai ficar.

LENHOSO
(para si mesmo)
Isso é ridículo.

SID (O.S.)
(risos)

Woody GASPS no reconhecimento da voz de Sid.  Ele se volta para
veja Sid indo direto para o jogo do guindaste.

LENHOSO
Ah, não!  Sid!!!

Woody salta da divisória e ataca Buzz, empurrando o
dois deles no fundo da pilha de alienígenas.

LENHOSO
Desça!!

Sid se aproxima do jogo do guindaste e pesca fora de seu
bolso da calça.

ZUMBIDO
(sussurro alto)
O que entrou em você, xerife?  Eu
Foi--

LENHOSO
(sussurro alto)
VOCÊ é quem decidiu
suba nisso --

ALIENÍGENA #4
(sussurro alto)
Sh-h-h-h-h-h-h.  A garra.  Ele se move.

ÂNGULO: Garra

Ele se move para a posição e paira diretamente acima da área
onde Woody e Buzz estão escondidos.

O guindaste cai e agarra o brinquedo alienígena que é
bem em cima do Buzz.

ALIENÍGENA #3
(sussurrando animadamente)
Fui escolhida!!

Posicionado de costas para Sid, o alienígena é levantado por
a garra.

ALIENÍGENA #3
(continuação)
Adeus, meus amigos!  Passo a um
melhor lugar.

SID
Entendi!

Com o alienígena desaparecido, a parte superior do tronco de Buzz fica exposta,
forçando o ranger espacial a congelar.  Sid de repente vê Buzz.

SID
Um Buzz Lightyear!  De maneira nenhuma!

Woody, ainda escondido, olha freneticamente ao redor de alguma forma
para escapar.  Atrás dele, através dos alienígenas, ele olha...

UMA PEQUENA PORTA DE REPARO

Woody nada através dos brinquedos alienígenas em direção à porta.
Ele agarra a trava e, depois de alguns
tenta, é capaz de abrir a porta.

A sombra do guindaste se alinha sobre Buzz, abaixa e
agarra-lhe a cabeça.

SID
Sim!

A garra começa a levantar Buzz.

LENHOSO
(GASP)
Zumbido, NÃO!

Woody agarra os pés de Buzz.

Woody e a garra começam a ter um cabo de guerra com Buzz.

Woody puxa para baixo com força, forçando Buzz a afundar na pilha de
alienígenas, fora da visão de Sid.

SID
(batendo o punho
contra o vidro)
Wha -- ?  Ei!!

Ainda puxando contra o guindaste, Woody está quase fora do
porta com Buzz.  Nesse momento, os alienígenas no fundo do
pilha puxar Buzz e Woody de volta para dentro.

ALIENÍGENA #4
Ele foi escolhido.

LENHOSO
Ei!  O que é que está a fazer?

ALIENÍGENA #5
Ele tem que ir.

LENHOSO
Pare com isso, você -- !  Pare com isso, você
Fanáticos!

ALIENÍGENAS
Ele tem que ir!  Não lute contra a garra!
Não irrite a garra!  Ele foi
escolhido.

Woody e Buzz são empurrados para a superfície e para o
ar, balançando sem vida na frente de Sid.

SID
Tudo bem!  Prêmios em dobro!

Woody e Buzz são jogados na porta do prêmio e
arrebatado por Sid.

SID
(olhando para seus dois
brinquedos novos)
Vamos para casa e... brincar.  Ha-ha-ha.

ÂNGULO: CLOSEUP DO CRÂNIO NA CAMISETA DO SID

				PARTIDA DISSOLVIDA PARA:

EXT. CASA DE SID - MAIS TARDE NAQUELA NOITE

De fora da escuridão aparece Sid em seu skate.  Ele
está CANTAROLANDO a música rock de seu walkman enquanto carrega seu
mochila na mão.

Sid pula do skate e caminha pelo caminho da frente
em direção à porta da frente.

Através do zíper aberto, Buzz espreita para fora da mochila para
veja a casa de Sid.  Ele reconhece a casa de Andy ao lado.

MOCHILA CONTÍNUA

Buzz, Woody e um alienígena de brinquedo squeeze são esmiuçados no
mochila.

ZUMBIDO
Xerife!  Eu posso ver a sua morada
daqui!  Você está quase em casa.

ALIENÍGENA
O Nirvana está chegando!  O místico
portal aguarda!

LENHOSO
(para Alien)
Vai ficar quieto?!!
(para ambos)
Vocês não entendem, não é?
Uma vez que entramos na casa de Sid, nós
não vai sair.

ÂNGULO: POV DOS BRINQUEDOS DA MOCHILA DE FORA

A porta da frente se abre para revelar Scud.  O cão mergulha
direto para a mochila, latindo.

SID
Uau, Scud!  Ei, menino.  Sentar!  Bom
menino!

O cão obedece com desdém.

SID
Ei, eu fiquei um pouco magro para você, rapaz.

A mão de Sid alcança a mochila.

LENHOSO
(sussurro alto)
CONGELAR!!!

Os brinquedos ficam parados.  A mão de Sid agarra o alienígena para fora do
mochila.  O alienígena é então colocado de lado ao longo de Scud's
focinho.

SID
Pronto, pronto, AGORA.

Em um movimento rápido, Scud vira o alienígena para cima, pega-o
sua boca, e a agita furiosamente para frente e para trás.

Buzz e Woody reagem horrorizados.

SID
Hannah!  Ei, Hannah!!

Woody e Buzz olham para cima para ver HANNAH, a pequena e frágil de Sid
irmã, carregando sua boneca Janie.

HANNAH
Que?

SID
Recebi meu pacote pelo correio?

HANNAH
Não sei.

SID
Whaddaya quer dizer, você não sabe?

HANNAH
(insistem)
Eu não sei!

SID
(preocupação simulada)
Ah, não, Ana!

HANNAH
Que?

SID
Olhar!  Janie!

Ele pega o boneco.

HANNAH
Ei!!

SID
Ela está doente!

HANNAH
(pânico aumentando)
Não, ela NÃO é --

SID
Vou ter que realizar um dos
meu... Operações!

HANNAH
NO-O-O... Não toque nela!  NÃO!

Sid sobe com Hannah em perseguição.

LENHOSO
Não o quarto do Sid... lá não...

HALL DO ANDAR DE CIMA - CONTÍNUO

Sid corre para a porta de seu quarto.  Hannah está logo atrás.

HANNAH
Sid!  Devolva-a!

Sid só RI.  Ele entra na sala e bate no
porta na cara da irmã.

SALA DO SID - CONTÍNUO

ANA (O.S.)
(batendo na porta)
Sul!  Sul!...

Sid descuidadamente joga a mochila na cama e caminha
para uma bancada improvisada.

SID
(como Doutor)
Ah, não.  Temos um doente
aqui, enfermeira.  Prepare o O.R., STAT!

Sid CLICA em uma lâmpada nua pendurada acima de seu "funcionamento"
tabela."

Woody e Buzz olham da segurança da mochila como
Sid coloca a cabeça da boneca Janie em uma morsa.

ANA (O.S.)
Sid, devolva-a!  Devolvê-la
agora!  Tô contando!

SID
(como Doutor)
O paciente é...
(esforço enquanto
aperto da morsa)
... pré-e-epped.

Sid pega a máscara de um pintor de sua caixa de ferramentas e a veste
como uma máscara de cirurgião.

SID
(como Doutor)
Ninguém nunca tentou uma dobradinha
Transplante de cérebro antes.

Sid pega um pterodáctilo de brinquedo de uma caixa próxima cheia de lixo.

SID
(como Doutor)
Agora para a parte complicada -- alicate!

ZUMBIDO
(sussurrando para Woody)
Eu não acredito que esse homem nunca
cursaram medicina.

Sid luta por um momento com seu "paciente" e então para.

SID
(como Enfermeira)
Doutor, você conseguiu!
(correndo para a porta)
Hannah?

Ele abre a porta.  Ana está ali, parecendo preocupada.

SID
(continuação)
Janie está melhor agora.

Ele lhe entrega Janie - sua cabeça foi substituída por um
pterodáctilos.  Hannah GRITA ao ver o
monstruosidade e parafusos pelo corredor.

HANNAH
MAMÃE!!  MAMÃE!!

SID
Ela está mentindo!  O que quer que ela diga
não é verdade!

Sid joga a boneca no chão e corre atrás de Hannah,
batendo a porta atrás dele.

Woody e Buzz olham para fora da mochila em seu novo
arredores.  Cartazes de metal pesado, restos de brinquedos descartados
e ferramentas elétricas adornam a sala bagunçada.

Estão no inferno... brinquedo Inferno.

LENHOSO
Vamos morrer.
(aparafusar fora da embalagem)
Tô aqui fora!

Woody salta da cama para a maçaneta e luta para
abra-o.  Não adianta.  Woody cai no chão.

LENHOSO
Trancado!  Tem que ter outro
Fora daqui.

SFX: SOM DE ROLAMENTO

Woody se assusta com o barulho.

Um pequeno ioiô sai por trás de uma caixa e cai em sua
lado.

Assustado, Woody pega um lápis no chão e branqueia
como uma arma.

Só então uma sombra passa por Woody.  Ele se vira rapidamente, mas
não vê nada.

LENHOSO
Uh... Zumbido?  Era você?

Woody troca apressadamente seu lápis por uma lanterna maior.

Ele ouve um BARULHO debaixo da cama de Sid.  Woody liga o
lanterna e brilha o feixe na direção do
ruído, iluminação...

PERFIL DE A BABY DOLL HEAD

LENHOSO
Ei!  Oi, lá, fellah pequeno!
Venha para cá.  Você sabe um caminho
fora daqui?

A boneca se move para fora de debaixo da cama, revelando um
cabeça de boneca de olhos em cima de um corpo semelhante a uma aranha feito de conjunto eretor
Peças.

LENHOSO
(GASP!!)

A criatura estende as pernas e sobe mais alto que Woody.
Assustado sem palavras, Woody mantém seu feixe de lanterna preso
BABYFACE.

Vários outros BRINQUEDOS MUTANTES começam a emergir das sombras:
uma vara de pesca de brinquedo com pernas de boneca de moda, um skate com
o torso de um soldado de combate enroscado na parte frontal, um jack-
in-the-box com uma mão de borracha para uma cabeça, (e outros).

Woody pula na cama e se esconde atrás de Buzz.

LENHOSO
B-B-B-Buzz!

Buzz e Woody olham como os mutantes têm um cabo de guerra como
eles pegam todas as partes de Janie e pterodáctilo, arrastando-as
fora para as sombras.

ZUMBIDO
São canibais!

Woody recua de volta para a mochila.

MOCHILA CONTÍNUA

Woody se encolhe no canto quando Buzz entra.  Ele dá um soco em um
botão no peito.

ZUMBIDO
Dia do Trabalhador!  Dia do Trabalhador!  Entre, Estrela
Comando!  Mandar reforços...
(pausa)
Star Command, você copia?

Sem resposta.

Buzz ajusta sua luz laser.  Ele emite um blip curto.

ZUMBIDO
(apontando o braço para fora
o pacote)
Eu coloquei meu laser de atordoar para matar.

LENHOSO
Oh, ótimo, ótimo.  Sim, e se
qualquer um nos ataca nós podemos piscar 'em
até a morte.

EXT. CASA DE ANDY - NOITE

Rex aponta uma lanterna para fora da janela do quarto de Andy enquanto
Bo Peep, Slinky, Hamm e Cabeça de Batata olham.

Alguns arbustos fervilham abaixo.

REX
Ei, pessoal!  Acho que encontrei
ele.  Zumbido!  É você?!

Rex aponta o feixe de lanterna para os arbustos trêmulos.  O
Ouve-se MEOW irritado de um gato.

REX
Bigodes!  Você vai sair de
aqui?!  Você está interferindo com o
busca e salvamento.

SFX: APROXIMANDO-SE DO CARRO

Rex desliga a lanterna.

REX
(sussurrando)
Olhar!  Eles estão em casa!

Os brinquedos se abaixam atrás do peitoril.

A van da família Davis entra na garagem.  Andy e a Sra.
Davis sai.

ANDY
Mãe, você já viu Woody?

Sra. DAVIS
Onde foi o último lugar que você o deixou?

ANDY
(pesquisando a van)
Aqui mesmo na van.

Sra. DAVIS
Ah, tenho certeza que ele está lá.  Você é
só não olhando duro o suficiente.

ANDY
Ele não está aqui, mãe.  Woody se foi.

Os brinquedos todos se olham.

BO PEEP
(GASP)
Woody se foi?!

HAMM
Bem waddah-ya-know, a doninha correu
fora.

Hamm, Cabeça de Batata e Rex se afastam da janela.

SR. CABEÇA DE BATATA
Hem?!  Hem?!  Eu falei que ele era
culpado.

REX
Quem diria que ele era capaz?
de tais atrocidades?!

Bo Peep e Slinky são deixados sozinhos na janela, visivelmente
cabisbaixo.

BO PEEP
Oh, Slink, espero que ele esteja bem.

				DISSOLVER EM:

JANELA DO QUARTO DO SID - DIA

SID (O.S.)
(como Interrogador)
Ah, um sobrevivente.  Onde está o rebelde
base?  Falar!

SFX: TAPA NA MÃO

SALA DO SID - CONTÍNUO

Um Woody inanimado voa pela sala, pousando com força
o chão.

Sid cruza para a janela.

SID
(como Interrogador)
Vejo que sua vontade é forte.

Sid abre a sombra da janela.  A luz do sol brilhante brilha
em Woody.

SID
(continuação)
Bem, nós temos maneiras de fazê-lo falar.

Sid tira uma lupa do bolso traseiro e
foca a trave na testa de Woody.

SID
(como Interrogador)
Onde estão seus amigos rebeldes agora?
Heh, heh.

Um ponto quente branco brilhante se forma na testa de Woody e começa
para soldar.

MÃE DE SID (O.S.)
Sid!!  Seus pop-tarts estão prontos!

Sid puxa a lupa.

SID
Tudo bem!!

Sid sai correndo da sala.  Assim que ele se vai, Woody pula
até GRITANDO, a testa queimando.

Ele corre para uma tigela de cereal meio comido (com leite) no
chão, e enfia a cabeça.

Buzz corre para Woody, fazendo uma pausa para remover duas ventosas
dardos de sua pessoa antes de puxar Woody para fora da tigela.
Dois Froot-Loops coloridos grudam em cada um dos olhos de Woody como
óculos.

ZUMBIDO
Está bem?
(batendo-lhe nas costas)
Estou orgulhoso de você, xerife.  Um
homem menor teria falado sob
tamanha tortura.

Woody olha para seu reflexo na parte de trás do cereal
colher e esfrega a marca de queimadura em sua testa.

LENHOSO
Espero que isso não seja permanente.

ZUMBIDO
(verificando o comunicador de pulso)
Ainda nenhuma palavra do Comando Estrela.
Não estamos tão longe do
Espaçoporto--

Os olhos de Woody se iluminam.

ÂNGULO: COLHER

A porta do quarto de Sid pode ser vista no reflexo.  Está aberto.

LENHOSO
A porta!  Está aberto!  Somos livres!!

Woody corre para a porta.  Segue-se o burburinho.

ZUMBIDO
Woody, não sabemos o que há por aí!

LENHOSO
Eu vou te dizer o que é -- AAAAH!

OS BRINQUEDOS MUTANTES

de repente aparecem e bloqueiam seu caminho para a porta.  Lenhoso
se esconde atrás de Buzz.

LENHOSO
Eles vão nos comer, Buzz!!  Fazer
algo!  Rápido!

ZUMBIDO
Proteja seus olhos!

Buzz dispara seu laser contra eles.  A pequena viga vermelha apenas
pisca contra a cabeça de Babyface.  O olhar dos brinquedos mutantes
confusos um com o outro.

ZUMBIDO
Não está funcionando.  Eu recarreguei
antes de sair.  Deve ser bom
por horas --

LENHOSO
Ah, seu!  Você é um brinquedo!  Usar
Sua ação de corte de karatê!

Agarrando Buzz como um refém, Woody se defende do mutante
brinquedos apertando um grande botão nas costas de Buzz, fazendo Buzz
braço involuntariamente "cortar" para cima e para baixo.

LENHOSO
(aos mutantes)
Escapar!  Hoo-cha!  Hoo-cha!

ZUMBIDO
Ei!!  Ei!  Como você está fazendo isso?
Pare com isso!

LENHOSO
Voltar!  De volta, seus selvagens!  Voltar!

Círculos amadeirados em torno dos brinquedos mutantes até a porta aberta,
cortando continuamente o braço de Buzz.

ZUMBIDO
Woody, parem com isso!!

LENHOSO
Desculpe pessoal, mas o jantar está cancelado!

Woody solta Buzz e sai correndo pela porta.

CORREDOR NO ANDAR DE CIMA - CONTÍNUO

Woody corre pelo corredor...

LENHOSO
(para si mesmo)
Não há lugar como casa.
Não há lugar como casa.
Não há lugar como casa...

... vira para o topo da escada, desce alguns degraus,
e é confrontado por...

SCUD

dormindo no pouso.

Woody congela a centímetros de distância da besta adormecida.  Ele
lentamente sobe as escadas.

De repente, Buzz aparece e puxa Woody de volta contra o
parede do corredor.  Ele cobre a boca de Woody com a mão.

LENHOSO
(suspiro abafado)


ZUMBIDO
(sussurro)
Outro golpe assim, cowboy --
você vai nos matar.

LENHOSO
(afastando a mão de Buzz)
Não me diga o que fazer!

ZUMBIDO
Shhh!

Buzz verifica para se certificar de que Scud ainda está dormindo e, em seguida, dardos
do outro lado da escada que se abre para a outra extremidade do corredor.
Uma vez em segurança, ele pede que Woody siga.

Woody rasteja covarde de quatro pela área aberta e
encontra-se com Buzz.

Do jeito que ele está...

ANEL DE CORDA DE WOODY

fica preso em um dos cachos da grade de ferro forjado.

Os brinquedos começam a rastejar pelo corredor, sem saber que
A corda puxada de Woody está sendo puxada cada vez mais longe
até--

Ele ARRANCA do corrimão de ferro e voa de volta em direção a Woody.

WOODY (CAIXA DE VOZ)
YEEEEEEEE-HAAAAAAA!!

Tanto Buzz quanto Woody pulam de surpresa ao som de Woody's
laringe.

ÂNGULO: OLHO DE SCUD

Abre-se.

Woody tenta em vão sufocar o cordão de recuo.

WOODY (CAIXA DE VOZ)
(continuação)
Sócio da Giddy-up...

RONANDO, Scud começa a subir as escadas.

WOODY (CAIXA DE VOZ)
(continuação)
... Nós temos que pegar este trem de vagão um
movin'!

Woody e Buzz decolam correndo.

ZUMBIDO
Dividir!

Duas portas estão abertas na outra extremidade do corredor.  Zumbido
mergulha atrás de um enquanto Woody salta para...

UM ARMÁRIO

Woody fecha a porta assim que Scud chega ao topo do
o pouso.  CRASHED pode ser ouvido por trás do armário
porta, chamando a atenção de Scud.

Buzz espreita de sua porta em Scud SNIFFING E
RONANDO no armário.

Sentindo o movimento atrás dele, Scud chicoteia e começa a
entre na porta de Buzz.

SFX: SNORING

O barulho impede o cachorro de seguir seus rastros.  Tanto o Scud quanto o Buzz
Olhe para cima para ver...

COVA DO PAI DO SID - CONTÍNUO

MR. PHILLIPS está dormindo em uma poltrona La-Z-Boy na frente de
a TV

Scud recua e desce as escadas.

Buzz se vira para sair da sala quando ouve...

COMANDANTE ESPACIAL (O.S.; NA TV)
Chamando Buzz Lightyear!  Pode entrar
Buzz Lightyear!  Esta é a Estrela
Comando.  Buzz Lightyear!  Você
me lê?!

ZUMBIDO
Comando das Estrelas!

Buzz abre o pulso e está prestes a
fale sobre ele quando ele for interrompido.

KID #1 (O.S.)
Buzz Lightyear respondendo!  Ler
você em alto e bom som!

Buzz se vira para ver...

UM APARELHO DE TELEVISÃO

O logotipo do ranger espacial do Buzz está na tela sobre um campo de
Estrelas.  A imagem muda rapidamente para dois garotos brincando
no quintal com um boneco Buzz Lightyear.

COMANDANTE ESPACIAL
Buzz Lightyear, Planeta Terra precisa
sua ajuda!

KID #1
(em comunicador de pulso de brinquedo)
A caminho!

CORO MASCULINO (V.O.)
BUZZ LIGHTYEAR!!

Buzz reage com confusão ao que está assistindo.  Ele caminha
lentamente em direção ao aparelho de televisão.

LOCUTOR DE TV (V.O.)
O maior super-herói do mundo!
Agora o maior BRINQUEDO do mundo!

ÂNGULO: COMERCIAL DE TV

O boneco Buzz Lightyear agora está fora da caixa e sendo
Exibido.

LOCUTOR DE TV (V.O.)
Buzz tem de tudo!  Pulso de bloqueio
comunicador!

KID #1
Chamando Buzz Lightyear.

LOCUTOR DE TV (V.O.)
Ação de corte de karatê!

KID #2
Uau!

A cada recurso demonstrado na TV, o Buzz compara o
mesma característica em si mesmo.

LOCUTOR DE TV (V.O.)
Luz laser pulsante!

KID #2
Aniquilação total!

LOCUTOR DE TV (V.O.)
Simulador de voz multi-frase!

TV BUZZ (VOZ AMOSTRADA)
É uma missão secreta em Uncharted
espaço!

Buzz aperta o mesmo botão em seu uniforme.

BUZZ (VOZ AMOSTRADA)
É uma missão secreta em Uncharted
espaço!

LOCUTOR DE TV (V.O.)
E o melhor de tudo...
(grande voz de "monster truck")
ASAS ESPACIAIS DE ALTA PRESSÃO!!

TV BUZZ
Ao infinito e além!

Na tela da TV, a figura de ação de Buzz Lightyear aparece
a ser lançado pelo ar.  As palavras: NÃO É UM VOO
TOY pisca na parte inferior da tela.

LOCUTOR DE TV (V.O.)
(voz de advogado não empolgada)
Não é um brinquedo voador.

Buzz balança lentamente a cabeça em descrença de olhos arregalados.

LOCUTOR DE TV (V.O.)
Obtenha sua ação Buzz Lightyear
Descubra e salve uma galáxia perto de você!

CORO MASCULINO (V.O.)
BUZZ LIGHTYEAR!!

A imagem na tela muda para uma foto de centenas de
Zumbrios em suas caixas alinhadas de ambos os lados do corredor de uma loja.

LOCUTOR LOCAL (V.O.)
Disponível em todos os Al's Toy Barn
pontos de venda na área do tri-condado.

Buzz é atingido.  Ele olha para o comunicador de pulso
e abre-o.

ÂNGULO: COMUNICADOR DE PULSO

Moldados na parte inferior da tampa estão três palavras: "MADE
EM TAIWAN."

MÚSICA: "I WILL GO SAILING NO MORE" COMEÇA

CORREDOR NO ANDAR DE CIMA - CONTÍNUO

Buzz caminha desanimado para fora da toca e pelo corredor.

Ao passar pelo topo da escada, ele faz uma pausa para olhar para cima
através do corrimão do...

UMA PEQUENA JANELA

Está aberto, revelando o céu azul além.  Um pássaro voa.

A voz provocadora de Woody ecoa em sua cabeça.

LENHOSO (V.O.)
Você é um brinquedo!  Você não pode voar!

Buzz abaixa a cabeça, derrotado.

BATER

Lentamente Buzz levanta a cabeça, determinação em seus olhos.  Ele
bate no pulso ofendido Comunicador fechado, como se negasse
sua mensagem de "Made in Taiwan".

Buzz sobe pelo corrimão até o corrimão.  Ele estoura
suas asas, e aponta-se para a janela acima.

ZUMBIDO
Ao infinito e além!

Buzz salta do corrimão...

e quedas.

Em câmera lenta Buzz vê seu quadrado de céu azul puxar
mais longe dele enquanto ele despenca para o chão abaixo.

CASA DO SID/ENTRADA - CONTÍNUA

Buzz CRASHES no piso da entrada.

Buzz abre os olhos para ver...

SEU BRAÇO ESQUERDO DECEPADO

O braço quebrado fica a poucos centímetros de distância de seu braço agora vazio
soquete.

Buzz baixa a cabeça na derrota.

FIM DA CANÇÃO

ANA (O.S.)
M-o-o-om?  Mãe, você já viu o meu
Boneca Sally?

Hannah entra na entrada e, não vendo Buzz, entra
sobre ele.

MÃE (O.K.)
O que, querida?  O que foi isso?

Hannah pega Buzz (e seu braço) e sorri.

HANNAH
Nevermind.

				DISSOLVER EM:

CORREDOR DO ANDAR DE CIMA - MAIS TARDE

ÂNGULO: ARMÁRIO

O botão balança por um momento.  De repente, a porta voa
aberto revelando Woody, enredado em luzes de Natal,
em cima de uma pilha de caixas para estar na altura da maçaneta.

Woody e o resto do lixo tombam.

Uma bola de boliche tomba, esmagando Woody quadrado na cabeça.

LENHOSO
Oo-o-of!
(para o corredor)
Zumbido?!  A costa é clara.  Zumbido?
Onde você está?

ZUMBIDO (O.S.; VOZ AMOSTRADA)
É uma missão secreta em Uncharted
espaço!  Vamos!!

Woody rasteja pelo corredor, arrastando as luzes de Natal
com ele.

ANA (O.S.)
Realmente?  Isso é tão interessante.

Woody espreita a porta aberta de...

QUARTO DE HANNAH/CORREDOR DO ANDAR DE CIMA - CONTÍNUO

Hannah está fingindo fazer uma festa de chá.  Seus convidados são
bonecas, bonecas sem cabeça, que é exceto para...

ZUMBIDO

Ele está sentado na mesa em miniatura, vestido com um babado
avental e chapéu de festa da moda.

HANNAH
(continuação)
Quer um chá, Sra. Nesbit?

LENHOSO
(sob sua respiração)
Zumbido!

Hannah colocou um pequeno bule no braço decepado de Buzz e
derrama chá imaginário com ele.

HANNAH
É tão bom que você poderia se juntar a nós em
tal aviso prévio tardio.

Woody volta para o corredor.

LENHOSO
Ah, não!

HANNAH
Que lindo chapéu, Sra. Nesbit.  Ela
vai muito bem com a cabeça.

Woody pensa por um momento, depois dá alguns passos adiante
no corredor.  Ele LIMPA A GARGANTA.

LENHOSO
(voz alta)
Hannah!  Ah, Ana!

Ana para de tomar chá e olha para cima.

HANNAH
(gritando para fora do quarto)
Mamãe?
(às bonecas)
Por favor, desculpem-me, senhoras.  Eu serei
lateral-direito.

Assim que Hannah sai da sala, Buzz fica de bruços
em cima da mesa.

Hannah passa por Woody, escondida nas luzes de Natal, e
desce as escadas.

HANNAH
O que é isso, mamãe?  Mãe, onde você está?

Woody entra no quarto de Hannah.

LENHOSO
Zumbido!  Ei, Buzz!  Você está bem?

Buzz levanta a cabeça e chora em desespero bêbado.

ZUMBIDO
Sumido!  É tudo go-o-one!  Todos os
Foi-se.  Adeusinho!  Uau!
Te vejo depois!

Woody pega o braço decepado de Buzz.

LENHOSO
O que aconteceu com você?

ZUMBIDO
Um minuto você está defendendo o
galáxia inteira...
(apontando para outras bonecas)
... e de repente você se encontra
chupar Darjeeling com Marie
Antonieta e suas irmãzinhas.

As bonecas sem cabeça giram e acenam.

Woody retira o bule do braço decepado e coloca-o
a tabela.

LENHOSO
Eu acho que você já tomou chá suficiente para
Hoje.
(ajudando o Buzz up)
Vamos tirá-lo daqui, Buzz.

ZUMBIDO
(agarrando Woody)
Não entendeu?!  Tá vendo o chapéu?
Eu sou a Sra. Nesbit!!
(risos histéricos)


LENHOSO
Saia dessa, Buzz!

Woody aperta o capacete de Buzz e dá um tapa no rosto dele
com o próprio braço desprendido, e depois educadamente fecha o capacete.

Buzz fica sóbrio e calmamente toma seu braço decepado de Woody.
Buzz sai da sala enquanto Woody segue.

ZUMBIDO
(sóbrio)
Desculpa.  Você está certo.

CORREDOR NO ANDAR DE CIMA - CONTÍNUO

ZUMBIDO
(continuação)
... Estou um pouco deprimido,
só isso.  Eu posso passar por isso.

Buzz chega ao centro do corredor e cai de joelhos.

ZUMBIDO
Ah, eu sou uma farsa!!!!

LENHOSO
(sussurro alto)
Sh-h-h-h-h!!  Calma, Zumbido.

ZUMBIDO
Olhe para mim!  Eu não posso nem voar para fora
de uma janela!

Woody pára por pouco.  Ele olha para o corredor na
direção do quarto de Sid.

ÂNGULO: JANELA DO QUARTO DE SID

Woody pode ver diretamente pela janela de Sid do outro lado do caminho para
Janela do quarto de Andy.

ZUMBIDO
(continuação)
Mas -- o chapéu parecia bom.  Contar
me o chapéu ficou bom!  O avental
é um pouco demais, não é a minha cor...

LENHOSO
Pela janela... Buzz, você é um
gênio!

Woody pega a bobina das luzes de Natal e arrasta Buzz
em direção ao quarto de Sid.

LENHOSO
(continuação)
Vamos lá, assim!

ZUMBIDO
Anos de formação na Academia... desperdiçado!!

EXT. CASA DE ANDY/JANELA DO QUARTO DE ANDY

Mr. Potato Head e Hamm estão jogando Battleship.  Hamm's
usando chapéu de cabeça de batata.

SR. CABEÇA DE BATATA
B-3.

HAMM
Errar.  G-6.

SR. CABEÇA DE BATATA
ah!  Você afundou!

HAMM
Heh-heh.

SR. CABEÇA DE BATATA
Você está espiando?

HAMM
Ah, pare de chorar e pague.

Cabeça de batata alcança sua orelha.

HAMM
Não, não, não o ouvido.  Gimme o
nariz.  Vamos lá!

SR. CABEÇA DE BATATA
(puxando o seu
nariz; nasalmente)
Como 'bout três de cinco?

Ele está prestes a entregar seu nariz a Hamm quando...

LENHOSO (O.S.)
Olá pessoal!  Galera!  Ei!

Ambos os brinquedos olham para o outro lado do caminho.

JANELA DO SID/JANELA DO QUARTO DE ANDY - CONTÍNUA

Woody acaba de levantar a janela de Sid e acena para
os brinquedos.

SR. CABEÇA DE BATATA
Filho de um bloco de construção, é Woody!

HAMM
Ele está no quarto do psicopata!

LENHOSO
Oi!

HAMM
(no quarto de Andy)
Pessoal, é Woody!

QUARTO DE ANDY - CONTÍNUO

Slinky, Bo Peep e Rex olham para a janela.

BO PEEP
Lenhoso?!

REX
Você está brincando?

SLINKY
Lenhoso?!

QUARTO DO INT.

LENHOSO
Nós vamos sair daqui, Buzz --
Zumbido?

Buzz não está lá.  Woody olha para o chão.

Buzz está sentado no chão, jogando "bombas" com seu
braço quebrado.

JANELA DO QUARTO DE ANDY/JANELA DO SID

O resto dos brinquedos de Andy se reúnem ao redor da janela para ver Woody.

REX
Ei, olha só!

BO PEEP
Lenhoso!

LENHOSO
Rapaz, fico feliz em ver vocês!

SLINKY
Eu sabia que você voltaria, Woody!

BO PEEP
O que você está fazendo por lá?

LENHOSO
É uma longa história, Bo.  Eu vou
explique mais adiante.  Aqui, pega isso!

Woody joga uma ponta das luzes de Natal por cima.  Slinky
pega-os.

SLINKY
Eu entendi, Woody!

REX
(muito animado)
Ele entendeu, Woody!

LENHOSO
Bom dia, Slink!  Agora, apenas, apenas
amarre em alguma coisa!

SR. CABEÇA DE BATATA
Esperar!  Esperar!  Tive uma ideia melhor!
Que tal NÃO FAZERMOS?!

Cabeça de Batata agarra a sequência de luzes longe de Slinky.

SLINKY
Ei?!!

BO PEEP
Cabeça de batata!?

SR. CABEÇA DE BATATA
Será que todos vocês tomaram pílulas estúpidas isso
Manhã?!  Você esqueceu o que
ele fez com o Buzz?  E agora você quer
para deixá-lo de volta aqui?

LENHOSO
Não, não, não!  Você entendeu tudo errado,
Cabeça de batata.  Buzz é bom!  Zumbido
está bem aqui.  Ele está comigo!

SR. CABEÇA DE BATATA
Você é mentiroso!

LENHOSO
Não, não estou!
(ao Buzz)
Buzz, venha aqui e você apenas
diga aos brinquedos agradáveis que você não é
morto.

ÂNGULO: BUZZ

Ele não responde, preocupado em tirar o adesivo
no pulso, comunicador.  Ele a amassa e a joga
à parte.

LENHOSO
(aos brinquedos de Andy)
Apenas um segundo.

SALA DO SID - CONTÍNUO

Frenético, Woody caminha até a borda da mesa.

LENHOSO
Zumbido!  Você vai chegar aqui e
me dá uma mão?!

O braço decepado de Buzz vem voando e pousa
Pés de Woody.

LENHOSO
(insinceramente)
Ha ha.  Isso é muito engraçado, Buzz.
(explodindo)
Isso é sério!!

REX (O.S.)
Ei, Woody!?  Para onde você iria?

SR. CABEÇA DE BATATA (O.S.)
Ele está mentindo'.  Buzz não existe.

JANELA DO SID/JANELA DO ANDY

Woody reaparece na borda da janela de Sid.  Ele finge que
Observe algo fora da visão do outro brinquedo.

LENHOSO
(casualidade forçada)
Ah, oi Buzz!  Por que você não diz
"Alô" pra galera aí?

BRAÇO DECEPADO DE BUZZ

de repente aparece com Woody segurando o final logo após
vista.  Woody lança a voz, fingindo ser Buzz.

WOODY (COMO BUZZ)
Oi ya, fellas.  Ao infinito e
além!

REX
Olha só!  É Buzz!

LENHOSO
(apertando a mão do braço)
Sim, ei, Buzz.  Vamos mostrar o
caras nossos novos melhores amigos secretos
aperto de mão.  Gimme cinco, cara!

HAMM
Alguma coisa é ferrada aqui.

LENHOSO
E aí, viu?  Somos amigos agora,
galera.  Não somos, Buzz?
(como BUZZ)
You bet.  Gimme a hug.

Woody faz o braço de Buzz agarrar seu pescoço e puxá-lo para frente.

LENHOSO
(continuação; como ele mesmo)
Ha, ha, oh, eu te amo também.

SLINKY
Ver?  É o Buzz.  Agora devolva
as luzes, Cabeça de Batata.

SR. CABEÇA DE BATATA
Aguarde apenas um minuto.  O que você está
tentando puxar?!

LENHOSO
Nada.

Woody inocentemente dá de ombros e joga as duas mãos para cima...

... expondo o braço decepado.

Os brinquedos todos GRITAM de horror.  Rex aperta as mãos ao seu
boca e se afasta para BARF.

Percebendo seu erro, Woody tenta esconder o braço, mas é
tarde demais.

HAMM
Ah, isso é nojento.

SR. CABEÇA DE BATATA
Assassino!

LENHOSO
Em!  De, de, de, de!

SR. CABEÇA DE BATATA
Você assassinando cachorro!

LENHOSO
Não, não é o que você acha, juro!

SR. CABEÇA DE BATATA
Guarde para o júri.  Espero Sid
puxa sua caixa de voz para fora, ya creep!

Cabeça de batata deixa cair as luzes.

LENHOSO
Não!  Não!  Não saia!  Não saia!
Você tem que nos ajudar, por favor!  Você
não sei como é por aqui!

SR. CABEÇA DE BATATA
(para os outros brinquedos)
Sem essa.  Vamos sair daqui.

HAMM
Voltai às vossas vidas, cidadãos.
O show acabou.

Todos os brinquedos saem da janela, exceto o Slinky.

LENHOSO
Volte!  Slink!  Slink, por favor!
Por favor!  Ouça-me!

Incapaz de olhar Woody nos olhos, Slinky fecha as persianas.

LENHOSO
(continuação)
Não!  Não!  Volte!  SLI-I-I-INKYYY!!

SFX: TROVÃO

Enquanto nuvens de tempestade rolam sobre a casa de Sid, Woody cai sobre a
Peitoril de janela na derrota.

SALA DO SID - CONTÍNUO

SONS DE BRINQUEDOS QUEBRADOS emitem por trás de Woody.  Ele se afasta do
janela para ver...

OS BRINQUEDOS MUTANTES

convergindo em torno do Buzz.

LENHOSO
ZUMBIDO!!

Ainda segurando o braço de Buzz, Woody pula para baixo do
e corre para o socorro de Buzz.

LENHOSO
Vá embora, seus malucos nojentos!

Babyface se vira da briga e cobra de Woody com seu
pinças do conjunto de erectores.

Woody se encolhe, protegendo-se do braço de Buzz.

Babyface aperta o braço e tem um cabo de guerra com Woody.

LENHOSO
Tudo bem de volta!  De volta, vocês canibais!

Woody perde o controle do braço e navega pela sala,
batendo na parede.

Até agora não há nenhuma visão de Buzz dentro da massa de enxame de
brinquedos mutantes.

Woody ataca a multidão com uma vingança.

LENHOSO
Ele ainda está vivo, e você não está
vai pegá-lo, seus monstros!

Ele furiosamente joga os brinquedos mutantes de lado, cavando seu caminho
Para...

ZUMBIDO

Ele está sentado, com o braço quebrado agora recém-preso.

A raiva de Woody se transforma em confusão.

LENHOSO
Ei?!  Ei, eles consertaram você!

Woody sacudiu o braço de Buzz para confirmar que o que ele está vendo é real
quando ele olha para os mutantes.

LENHOSO
(continuação)
Mas -- mas eles são canibais.  Nós
viu-os comer aqueles outros brinquedos.

Os brinquedos mutantes partem para revelar as vítimas recentes de Sid
última "operação": A boneca Janie e Pterodáctilo.  Seu
as cabeças foram coladas nos corpos corretos.

Os mutantes todos inocentemente olham para Woody.

LENHOSO
Uh... Desculpa.  Eu... Eu pensei que você
estavam indo...
(risos nervosos)
... você sabe, coma meu amigo.

Imediatamente, os brinquedos mutantes recuam de volta para o escuro
cantos da sala.

LENHOSO
Ei!  Não, não, espere!  Ei!  O que é
errado?

MÃE DE SID (O.S.)
Sid!

SID (O.S.)
Agora não, mãe, estou OCUPADA!

LENHOSO
Sid!!!

PASSOS aproximam-se do quarto.  Woody tenta pegar o
ainda deprimiu Buzz, mas ele simplesmente fica mole.

LENHOSO
Zumbido!  Vamos lá, levante-se!  Zumbido
você...
(TERRENO)
... Fique de pé...

Woody começa a arrastar Buzz em direção à cama, mas seus
O progresso é demasiado lento.  Ele abala Buzz com força.

LENHOSO
Multa.  Deixe Sid lixá-lo.  Mas
não me culpe.

Woody deixa Buzz sentado sozinho no meio do chão
e se esconde embaixo de uma caixa de leite próxima assim como...

Sid entra carregando uma grande caixa.

SID
Chegou!  Finalmente chegou!

Sid corre para sua bancada e rasga a caixa.

SID
(reverentemente)
O grande.

Ele puxa um foguete com "THE BIG ONE" escrito nele.

SID
(lendo o rótulo do foguete)
"Extremamente perigoso.  Mantenha-se fora de
alcance das crianças".  FRESCO...
(olha ao redor)
O que eu vou soprar?  Homem... ei
cadê aquele boneco de cowboy malandro?

Sid avista a caixa de leite e a pega.

Sem lenhoso.

ÂNGULO: PARTE INFERIOR DA CAIXA DE LEITE

Fora da visão de Sid, Woody pressiona contra o interior, pendurado
para a vida querida.

SFX: LASER DO BUZZ

Sid olha para baixo e percebe que está pisando em Buzz, ativando
seu laser.

SID
Sim!  Eu sempre quis colocar um
homem espacial em órbita.  Ha-ha.

Ele coloca Buzz e a caixa de leite na bancada de trabalho e joga
uma caixa de ferramentas em cima da caixa.

O impacto da caixa de ferramentas desloca Woody de seu esconderijo
lugar.  Woody rapidamente se abaixa sob uma revista no chão de
a caixa "cadeia".

Woody assiste impotente enquanto Sid pesca um rolo de
fita elétrica da caixa de ferramentas e, com um IRREVERENTE
CHUCKLE, fitas Buzz para o foguete.

SFX: THUNDERCLAP

Um relâmpago interrompe o momento.

SID
Ah, não...

Sid cruza para a janela para ver uma enorme tempestade começar.
Mal-humorado, ele bate a cabeça contra a janela.

SID
Ah, cara...!

Woody dá um suspiro de alívio.

De repente, o rosto de Sid brilha.  Ele desvia seu foco do
chuva para o Buzzrocket.

SID
(como Newscaster)
Reportagem de Sid Phillips.  Lançamento do
o vaivém foi atrasado devido a
condições meteorológicas adversas no
local de lançamento.  A previsão de amanhã...

Sid bate Buzz na mesa, enrola seu despertador e
coloca-o ao lado do Buzz.

SID
Ensolarado.  Ha-ha-ha.  Sonhe com os anjos.

QUARTO DE ANDY - NAQUELA NOITE

Andy está sendo enfiado na cama por sua mãe.  Ela o entrega
seu chapéu de cowboy.

Sra. DAVIS
Olhei para todos os lados, querida, mas tudo
Eu poderia encontrar era o seu chapéu.

ANDY
(Grófur)
Mas e se os deixarmos para trás?

Sra. DAVIS
Ah, não se preocupe, querida, tenho certeza
vamos encontrar Woody e Buzz antes de nós
Saia amanhã.

Os olhos de Andy se fecharam.  Mamãe apaga a luz e sai tranquilamente
o quarto.

Uma caixa móvel no chão, com os dizeres "Andy's Toys!"
rabiscado, começa a tremer de um lado para o outro.

REX (O.S.)
(abafado)
Aaaah!  Preciso de ar!

Rex sai do topo da caixa, TOSSINDO uma embalagem
isopor amendoim fora da boca.  Cabeça de batata aparece
ao lado dele.

REX
(aliviado)
Aa-a-a-a-ah!
(TOSSE)

SR. CABEÇA DE BATATA
Você vai parar de se movimentar?!

REX
Desculpa.  Só que eu fico assim
nervoso antes de viajar.

SR. CABEÇA DE BATATA
Como eu fiquei preso com VOCÊ como um
Amigo em movimento?

Cabeça de batata cai de volta na caixa.

REX
(seguindo Cabeça de Batata)
Todos os outros foram escolhidos.

BO PEEP

espreita ao virar da esquina de uma das caixas e olha para cima
Andy dormiu rápido segurando seu chapéu de cowboy.

BO PEEP
Oh, Woody, se você pudesse ver
o quanto Andy sente sua falta.

EXT. CASA DE SID - MAIS TARDE NAQUELA NOITE

TROVÕES RESSOAM enquanto a chuva cai do lado de fora da assustadora moradia.

QUARTO DO INT.

Sid está na cama dormindo rápido.

Woody luta para mover sua prisão de caixa de leite, mas com o
peso da caixa de ferramentas em cima ele não vai ceder.

Woody olha do outro lado da área de trabalho para Buzz sentado desanimado
com o foguete amarrado às costas.

LENHOSO
Ps-s-s-s-t!  Psst!  Ei, Buzz!

Nenhuma reação de Buzz.

Woody pega uma lavadora perdida da mesa e a arremessa
em Buzz, atingindo seu capacete.

Buzz levanta a cabeça e se vira sem vida para olhar para Woody.

LENHOSO
Ei!  Acesse aqui e veja se você
pode tirar essa caixa de ferramentas de mim.

Buzz apenas desvia o olhar de Woody e abaixa a cabeça.

LENHOSO
Ah, vamos lá, Buzz.  O... Zumbido, eu
não pode fazer isso sem você.  Preciso
sua ajuda.

ZUMBIDO
Eu não posso ajudar.  Não posso ajudar ninguém.

LENHOSO
Porque, com certeza você pode, Buzz.  É possível
me tira daqui e depois eu vou
Tire esse foguete de você, e nós vamos
faça uma pausa para a casa de Andy.

ZUMBIDO
A casa de Andy.  Casa de Sid.  O que é
a diferença.

LENHOSO
Oh, Buzz, você teve uma grande queda.
Você não deve estar pensando claramente.

ZUMBIDO
Não, Woody, pela primeira vez estou
pensar com clareza.
(olhando para si mesmo)
Você estava certo o tempo todo.  Eu não sou
um guarda espacial.  Eu sou apenas um brinquedo.  Um
brinquedo estúpido e insignificante.

LENHOSO
Uau, ei, espere um minuto.  Ser
um brinquedo é muito melhor do que ser um
Ranger Espacial.

ZUMBIDO
Sim, certo.

LENHOSO
Não.  Olha, mais nisso
casa é uma criança que pensa que você é
o maior, e não é porque
você é um Space Ranger, amigo, é
porque você é um BRINQUEDO!  Você é DELE
Brinquedo.

ZUMBIDO
Mas por que Andy me queria?

LENHOSO
Por que Andy iria querer você?!  Olhar para
você!  Você é um Buzz Lightyear.  Qualquer
outro brinquedo desistiria de se mudar
peças só para ser você.  Você tem
asas, você brilha no escuro, você
fale, seu capacete faz isso -- isso
whoosh coisa -- você é um brinquedo legal.

Woody faz uma pausa e olha para si mesmo.

LENHOSO
(continuação; deprimido)
Na verdade, você é legal demais.
Quero dizer -- quero dizer que acaso faz um
brinquedo como eu tenho contra um zumbido
Figura de ação Lightyear?  Tudo o que posso
fazer é...

Woody puxa sua própria corda.

WOODY (CAIXA DE VOZ)
Tem uma cobra nas botas!

Woody abaixa a cabeça.

LENHOSO
Por que Andy gostaria de jogar
comigo, quando ele tem você?
(pausa)
Eu sou o único que deve ser amarrado
para aquele foguete.

Woody cai desanimado contra o caixote, de costas para Buzz.

Buzz levanta o pé.

ÂNGULO: A SOLA DO PÉ DE BUZZ

A assinatura "ANDY" lê através da sujeira e marcas de raspão.

Buzz olha de volta para Woody.  Um olhar de determinação se espalha
em seu rosto.

LENHOSO
Ouça Buzz, esqueça de mim.  Você
deve sair daqui enquanto puder.

Silêncio.

Woody se vira.

O burburinho acabou.

De repente, toda a caixa de leite começa a tremer.  Aparência amadeirada
até ver...

ZUMBIDO

Ele está em cima da caixa de leite, tentando empurrar a caixa de ferramentas.

LENHOSO
Zumbido!!  O que é que está a fazer?  Eu
pensou que você era --

ZUMBIDO
Vamos lá, xerife.  Tem uma criança
Naquela casa que precisa de nós.
Agora vamos tirá-lo dessa coisa.

LENHOSO
Sim senhor!

Tanto Buzz quanto Woody empurram a caixa de leite e, juntos,
finalmente fazê-lo mover-se, mas é um progresso lento.

LENHOSO
(coado)
Vamos lá, Buzz!  Nós podemos fazer isso!

SFX: CAMINHÃO

Os dois brinquedos param para olhar pela janela junto à bancada.

ÂNGULO: PARA FORA DA JANELA DO QUARTO DE SID

Com a chuva parada e o sol começando a nascer...

UM CAMINHÃO EM MOVIMENTO

pode ser visto puxando para cima em frente à casa de Andy.

ZUMBIDO
Lenhoso!  É a van em movimento.

LENHOSO
Temos que sair daqui... AGORA.

Buzz se prepara entre o baú de ferramentas e a parede.

Usando as pernas, Buzz empurra com todas as forças.  A caixa de ferramentas
começa a se mexer.

Woody percebe que a cada empurrão que Buzz dá à ferramenta
peito, a caixa de leite começa a bordar para fora sobre o lábio do
mesa.

LENHOSO
Vamos lá, Buzz.

Finalmente, a lacuna é grande o suficiente para Woody pular.
Woody cai no chão abaixo.

LENHOSO
(sussurro alto)
Tudo bem.  Zumbido!  Ei!  Tô fora!

Buzz não ouve Woody e continua a empurrar a caixa de ferramentas
(e milkcrate) mais longe.

ZUMBIDO
... quase
(TERRENO)
... ali
(TERRENO)
...

Woody olha para cima a tempo de ver toda a caixa de ferramentas e
O caixote de leite tomba em sua direção.

LENHOSO
(risos nervosos)

A caixa de ferramentas TRAVA bem em cima do Woody.

Buzz cai na área de trabalho e olha para Sid, que
Agita...

SID
(durante o sono)
Quero montar o pônei...

Sid não acorda.  Buzz dá um SUSPIRO DE ALÍVIO, depois os pares
sobre a borda da bancada.

ZUMBIDO
Lenhoso!  Lenhoso?!  Você está bem?!

Woody se levanta debaixo dos escombros.

LENHOSO
(soco-bêbado)
Não, estou bem... Estou bem...

SFX: DESPERTADOR

Ele sai ao lado da cama de Sid.  Woody cai de volta sob o
E o Buzz fica mole.

Sid senta-se groguemente para uma batida, então seus olhos se iluminam.

SID
Oh sim!  Hora da decolagem!

Sid pula da cama, agarra Buzz e sai do quarto.

SID (O.S.)
AO INFINITO E ALÉM!!

Woody salta aos seus pés, corre pela sala e apanha
a porta pouco antes de fechar.  Enquanto ele balança a porta para trás
aberto Woody é confrontado por...

SCUD

O cachorro desce pelo corredor direto para Woody.

LENHOSO
Aaah!  Voltar!  Voltar!  Abaixo!  Abaixo!

Woody fecha a porta a tempo.  Scud BARKS E
ARRANHÕES na porta.

LENHOSO
(sem fôlego; para si mesmo)
Ok, o que eu faço?  Vamos lá Woody,
pensar!

Woody olha para o outro lado da sala.

OS BRINQUEDOS MUTANTES

apareceram por toda a sala.

LENHOSO
Galera!

Os brinquedos mutantes se espalham e se escondem.

LENHOSO
Não, não, não!  Esperar!  Esperar!  Escutar!
Por favor!  Há um bom brinquedo para baixo
lá e ele está -- ele vai estar
explodido aos pedaços em poucos minutos tudo
por minha causa.  Eu tenho que salvá-lo!
(pausa)
-- Mas preciso da sua ajuda.

Sem resposta.

Woody então percebe Babyface timidamente espreitando para fora do
sombras debaixo da cama.

LENHOSO
Por favor.  Ele é meu amigo.  Ele é o
só um eu tenho.

Babyface rasteja para fora e bate em código no lado de Sid
poste de metal.

Os brinquedos mutantes emergem das sombras e se reúnem ao redor
Lenhoso.  Ele se ajoelha em um amontoado com eles.

LENHOSO
(para Babyface)
Obrigado.
(aos demais)
Ok.  Acho que sei o que fazer.
Vamos ter que quebrar alguns
Mas se funcionar, vai ajudar
todos.

QUARTO DO INT. ANDY

Os MOVIMENTADORES carregam a última carga.  Um Andy desamparado agarra-se
na caixa de "nave espacial" de Buzz em uma das mãos e seu chapéu de cowboy
no outro.

Andy varre a sala vazia e dá um suspiro triste.

GALPÃO DE QUINTAL

Sid sai da casa carregando um monte de materiais embaixo
o braço dele.

SID
(como astronauta)
Houston para o Controle da Missão.  Vir
em, Controle.

Ele joga o lixo ao lado de um Buzz inanimado.

SID
(continuação)
A plataforma de lançamento está sendo construída!
Heh-heh.

CORREDOR DO ANDAR DE CIMA DO SID

Scud é plantado do lado de fora da porta do quarto de Sid, pronto para
atacar qualquer coisa que saia.

SALA DO SID - CONTÍNUO

Woody criou um pequeno diagrama da casa e do quintal
de dominó e telhas Scrabble.  Ele aponta para isso com um
lápis enquanto se dirige aos mutantes.

LENHOSO
Tudo bem, ouça.  Preciso de Bomba
Garoto aqui -- Patinho aqui.  Perna?

LEGS, a vara de pesca de brinquedo com pernas de boneca da moda, passos
para a frente da multidão.

LENHOSO
(continuação; para Legs)
Você está com Ducky.
(aos demais)
RollerBob e eu não nos movemos até que nós
obter o sinal.  Claro?

Todos os mutantes dão um aceno afirmativo.

LENHOSO
Ok, vamos lá!

Os brinquedos todos quebram.

Pernas e DUCKY, um dispensador de cabeça de pato Pez com baby doll
torso e base do êmbolo, corra para uma grelha de aquecimento e
Puxe a placa frontal da parede.  Eles desaparecem na
duto de aquecimento.

DUTO DE AQUECIMENTO INTERNACIONAL - CONTÍNUO

Ducky e Legs chegam a um cruzamento.  Ducky QUACKS e
eles seguem pelo túnel direito.

QUARTO DO INT.

HAND-IN-THE-BOX, a mão de borracha no Jack-in-the-box,
pilhas em cima de vários brinquedos mutantes para alcançar a maçaneta
da porta do quarto.

Woody pula no ROLLERBOB, um skate com um soldado
tronco superior amarrado à sua frente.

LENHOSO
Enrole o sapo!

WALKING CAR, um carro Hot Wheels com braços de bebê, começa a enrolar
até O SAPO, um sapo de lata com rodas de caminhão monstro
em vez de pernas.

INT. SID'S HOUSE/ALPENDRE SÓTÃO

Um fundo de isolamento de parede é deixado de lado para revelar Ducky
e Pernas.  Eles fazem seu caminho em direção a uma caixa de junção
sentado no centro do chão.

Ducky e Legs levantam a caixa de junção solta.

EXT. CASA DO SID/VARANDA FRONTAL - CONTÍNUO

A LUZ DA VARANDA QUEBRADA

de repente levanta-se para cima e desaparece no telhado.

Ducky estende seu pescoço de Pez para fora do buraco para verificar se o
Costa é clara.

QUARTO DO INT.

Todos os brinquedos ocuparam suas posições e aguardam em silêncio,
seus olhos fixos em Woody.

LENHOSO
Aguarde o sinal.

INT. SÓTÃO DO PÓRTICO

Ducky tira o fim da linha do carretel de pesca de Legs,
prende-o a si mesmo, e então é abaixado através do
buraco aberto.

VARANDA FRONTAL - CONTÍNUA

Pendurado no meio da porta da frente, Ducky começa a balançar.
Eventualmente, ele balança o suficiente para chegar ao seu destino:
a campainha.

Ducky pressiona.

SFX: CAMPAINHA

QUARTO DO INT.

Woody joga o braço para baixo.

LENHOSO
Ir!!

Mão na caixa abre a porta e O Sapo é solto.

O Sapo atravessa as pernas de Scud e desce pelo corredor.
Scud corre atrás dele e o segue pelas escadas.

SFX: CAMPAINHA

ANA (O.S.)
Vou conseguir!

Woody ajuda o resto dos brinquedos mutantes no skate.

LENHOSO
Tudo bem, vamos lá.

Usando seus braços dianteiros, Rollerbob impulsiona o skate e
tripulação para o corredor.

CASA DO SID/ENTRADA

SFX: CAMPAINHA

Hannah caminha até a porta da frente...

HANNAH
Estou chegando!  Estou chegando!

... e abre-o.

PORTA DE ENTRADA EXT./INT. - CONTÍNUA

Ninguém está lá.

Hannah não percebe Ducky preso ao chão da varanda por seu
desentupidor.

O SAPO

desce as escadas com Scud LATINDO logo atrás.  O
Sapo salta do último degrau, acelera pelas pernas de Ana
e pela porta da frente aberta.

Hannah olha para dentro de Scud.  Naquele momento, Ducky
pega o sapo e é rapidamente arrastado para cima de volta para o
telhado.

Scud rompe as pernas de Hannah, derrubando-a, e
corre para a varanda vazia.

HANNAH
(irritado)
SCUD!!!

Scud de repente percebe que foi enganado, mas antes que ele possa
Voltando para dentro, Hannah fecha a porta da frente.

HANNAH
Cachorro estúpido.

Scud bate na porta fechada e começa a latir furiosamente.

Quando Hannah invade outra sala, ela não percebe
Woody e os mutantes saindo das escadas e rodando o
canto, indo direto para a cozinha.

COZINHA CONTÍNUA

Até agora, RollerBob realmente ganhou velocidade.  Ele atira
debaixo da mesa da cozinha, através do labirinto de cadeira
pernas, retas para...

A PORTA DO PET

LENHOSO
Incline-se!

Todos os mutantes empurram para trás fazendo com que o RollerBob faça um
Wheelie.  Eles quebram a porta do cachorro...

QUINTAL DO SID - CONTÍNUO

... e catapultar para os arbustos.

Os brinquedos espreitam do mato para ver Buzz amarrado ao
Launchpad.  Sid ainda está no banco de reservas.

SID (O.S.; OS ASTRONAUTAS)
Uh, Controle de Missão... é o
Construção da Plataforma de Lançamento concluída? --
(estática simulada)
Uh, Roger, foguete agora está garantido para
fio-guia.  Estamos atualmente
obtendo o... bastões de ignição.
A contagem regressiva começará momentaneamente.
Estar a postos--
(estática simulada)


Ducky, Legs e o Sapo disparam para o quintal de um
tubo de drenagem.  Eles trocam um polegar para cima com Woody.

LENHOSO
(aos brinquedos no mato)
Vamos!

Os mutantes se dispersam para seus lugares designados no quintal.

SID (O.S.)
Ei, mamãe?!  Onde estão as partidas?
Oh, oh, espere, aqui estão eles.
Nevermind...

Woody corre em direção a Buzz, que vê Woody se aproximando.

ZUMBIDO
(sussurro alto)
Lenhoso?!  Legal!  Ajude-me a sair de
essa coisa!

Woody pára a poucos metros de distância de Buzz.

LENHOSO
Shhhhhhh!

ZUMBIDO
Que?!

LENHOSO
(sussurro alto)
É razoável.  Tudo está sob controle.

Woody deliberadamente cai manco na grama.

ZUMBIDO
Lenhoso?!  O que é que está a fazer?!

Sid emerge do galpão de ferramentas.  O zumbido congela.

SID (COMO ASTRONAUTA)
Houston, todos os sistemas estão prontos.
Solicitando permissão para iniciar --
(avistando Woody)
Ei!  Como você chegaria até aqui?

Sid pega Woody, examina-o para uma batida e depois sorri.

SID
Oh, bem, você e eu podemos ter um
cozinhe mais tarde.  Ha-ha-ha...

Ele enfia um fósforo em destaque no coldre de Woody e joga
ele na churrasqueira de uma churrasqueira aberta.

SID (COMO ASTRONAUTA)
Houston, temos permissão para
lançar? --
(estática simulada)
Uh, Roger, permissão concedida.  Você
estão confirmados em T menos 10 segundos...

Durante a contagem regressiva de Sid, todos os mutantes correm para dentro de seus
posições finais.

Sid acende um fósforo.

SID
(continuação)
... e contagem.  Dez!  Nove!
Oito!  Sete!  Seis!  Cinco!  Quatro!
Três!  Dois!... Um!...

Sid chora ameaçadoramente enquanto a partida se move em direção ao fusível.

WOODY (CAIXA DE VOZ)
Alcance o céu!!

SID
Hem?

Sid recua ao acender o fusível.  Ele se vira para olhar
Woody ainda deitado sem vida em cima da churrasqueira, exceto por
o som emitido por sua caixa de voz.

WOODY (CAIXA DE VOZ)
Esta cidade não é grande o suficiente para o
nós dois!

SID
Que?!

Sid caminha até Woody e o pega.

WOODY (CAIXA DE VOZ)
Alguém envenenou o poço de água...

SID
Está estourado.

Ele levanta Woody, prestes a jogá-lo fora --

WOODY (CAIXA DE VOZ)
Quem é você chamando, Buster?!

Sid pára e olha para Woody novamente.

WOODY (CAIXA DE VOZ)
(continuação)
Está correto.  Estou falando com VOCÊ,
Sid Phillips.  Não gostamos de ser
explodido, Sid, ou esmagado, ou
Rasgado...

Enquanto a caixa de voz de Woody fala, Sid verifica a corda.

Não está se movendo.  Sid GULPS.

SID
W-w-w-we?

WOODY (CAIXA DE VOZ)
Está correto.
(bater)
Seus brinquedos.

Os restos de brinquedos quebrados no quintal, conduzidos pelo quarto
mutantes, começam a se levantar do chão em "NOITE DO
MORTOS-VIVOS" moda.

Os brinquedos marcham para a frente, formando um círculo em torno de Sid.  Sid é
muito assustado para gritar ou se mexer.

WOODY (CAIXA DE VOZ)
A partir de agora, é preciso tomar o bem
cuidados com seus brinquedos.  Porque se você
não, vamos descobrir, Sid.  Nós
brinquedos podem ver...

A cabeça inanimada de Woody gira 360 graus.

WOODY (CAIXA DE VOZ)
(continuação)
... tudo.

Por uma fração de segundo, o rosto de Woody ganha vida.

LENHOSO
(voz regular)
Então jogue bem.

Sid solta Woody e parafusos dentro da casa.

SID
AAAAAAAGGGGGGHHHHHHH!!!!

Woody e todos os brinquedos TORCEM VITORIOSAMENTE.

ENTRADA DO SID

Hannah acaba de descer as escadas carregando uma nova boneca quando Sid
corre para cima dela.

SID
Os brinquedos!  Os brinquedos estão vivos!

Sid olha para a boneca de Hannah e a acaricia suavemente na cabeça.

SID
(continuação)
N-N-Nice dolly...

Hannah, sentindo o medo de Sid, de repente empurra a boneca para dentro
O rosto de Sid.  Ele GRITA e corre para cima.  Hannah persegue
depois dele, provocando.

HAMM
O que há de errado, Sid?!  Você não quer
para brincar com a Sally?!

QUINTAL DO SID.

Os brinquedos estão todos parabenizando uns aos outros.

LENHOSO
Bom trabalho, fellahs.  Muito bom trabalho.
Comin' fora do chão -- que
Tocar!  Foi um golpe de génio.

ZUMBIDO
Lenhoso!

Woody se vira e olha para Buzz, que ainda está preso
Barra de lançamento do Sid.  Buzz estende a mão para Woody.

ZUMBIDO
Obrigado.

Eles tremem.

SFX: BUZINA DE VAN

SRA. DAVIS (O.S.)
Todo mundo fala: "Tchau, casa".

ANDY (O.S.)
(deprimido)
Tchau, casa.

Buzz e Woody olham na direção da casa de Andy.

ÂNGULO: ANDY'S DRIVEWAY - A VAN DA FAMÍLIA

Através da cerca, Andy e sua família podem ser vistos recebendo
dentro da carrinha.

ZUMBIDO
Lenhoso!  A carrinha!

Woody rapidamente iça Buzz do poste ao qual estava amarrado.

LENHOSO
(aos brinquedos mutantes)
Temos que correr!  Obrigado, pessoal.

Com o foguete ainda colado em Buzz, os dois brinquedos correm
em direção à cerca.

SFX: PARTIDA DO MOTOR DA VAN

LENHOSO
Rápido!

Woody facilmente escorrega através das ripas na cerca, mas
O foguete de Buzz faz com que ele fique preso.

EXTENSÃO ANDY'S DRIVEWAY - CONTÍNUO

Woody já subiu no para-choque traseiro da van antes
percebendo que Buzz está desaparecido.  Ele olha para trás para descobrir
Zumbido preso na cerca.

ZUMBIDO
É só ir!  Vou me atualizar!

Woody pula e corre de volta para Buzz.

A van começa a sair da garagem.

Woody puxa uma slat solta e quebra Buzz livre do
cerca.

Os dois brinquedos correm para a rua a tempo de ver o
van saindo pela rua.

SFX: MOTOR DE CAMINHÃO

Woody e Buzz se voltam.

A VAN EM MOVIMENTO

dirige diretamente sobre eles.  Woody e Buzz GRITAM, abaixando-se apenas
a tempo.

Depois que o caminhão passa, Buzz corre atrás dele com Woody alguns
passos atrás.

ZUMBIDO
Sem essa!

ÂNGULO: VARANDA FRONTAL DO SID

Scud está deitado na varanda quando, de repente, se anima com o
visão dos dois pequenos brinquedos correndo pela rua após o
caminhão em movimento.

Scud carrega os dentes e rosna.

RUA DO BAIRRO EXT.

Buzz corre perto do caminhão com Woody ainda atrás alguns
Passos.

Uma PORCARIA

balança na traseira do caminhão.  Buzz dá um salto para isso
e agarra-se.  Ele sobe na alça e no para-choque.

Woody então mergulha para a alça, mas ela fica fora do alcance.

ZUMBIDO
Você pode fazer isso, Woody.

Woody dá um salto poderoso e pega a alça.

LENHOSO
Ufa, eu consegui!

Woody começa a subir quando, de repente, Buzz fica pálido.
Woody olha para trás para ver...

SCUD

O cão salta para a frente e morde uma das pernas de Woody.

LENHOSO
(chutando Scud com
outro pé)
Aaaaaahh!!!!  Vá embora, seu estúpido
cão!  Abaixo!  Abaixo!

Scud puxa Woody, puxando-o até o final da alça.

ZUMBIDO
Espere, Woody!

LENHOSO
Não consigo!  Cuide de Andy
pra mim!

ZUMBIDO
NÃO-O-O-O-O-O-O!!

Buzz salta do caminhão e entra no focinho de Scuds.  Ele agarra
As pálpebras de Scud e as encaixa com força.  Scud YELPS, soltando
de Woody.  O cachorro briga descontroladamente com Buzz pendurado em seu
rosto.

LENHOSO
Zumbido!

O caminhão em movimento continua pela rua deixando Buzz e
Scud atrás.

Ainda pendurado na alça, Woody se embaralha na
amortecedor.  Ele destranca a porta traseira do caminhão e tenta
levante a porta pesada.

De repente, a van da família e o caminhão de mudança param no local.
um semáforo.

Woody bate na porta, fazendo com que ela voe para cima
Woody com ele.

Pendurado na porta, Woody escaneia o interior do caminhão
até que ele vê o que está procurando.

UMA PILHA DE CAIXAS MÓVEIS

com as palavras "ANDY'S TOYS" escritas neles em giz de cera.

RUA DO BAIRRO EXT.

Scud tira Buzz de seu rosto.  Buzz vai caindo sob um
carro estacionado.  Scud atropela o carro, mas é grande demais para
fique por baixo dele.

TRASEIRA DO CAMINHÃO EM MOVIMENTO

Woody rasga em uma das caixas de Andy.

ÂNGULO: DENTRO DA CAIXA

Todos os brinquedos piscam e gemem enquanto cobrem os olhos de
o brilho repentino.

BRINQUEDOS
Que?!

REX
Já lá vamos?

SLINKY
Lenhoso?!  Como você --

A resposta de Woody é deslizar a caixa para o lado e começar
vasculhando a próxima caixa.

Slinky, Cabeça de Batata, Rex e os outros brinquedos GRUMBLE IN
CONFUSÃO enquanto eles cutucam a cabeça para fora da primeira caixa.

LENHOSO
Ah-hah!  Aí está!!

Woody puxa o RC Car e seu controle remoto para fora da segunda caixa.

SR. CABEÇA DE BATATA
Ei!  O que ele está fazendo?

Woody corre para a traseira do caminhão e joga o carro RC
para a rua.  Os outros brinquedos GRITAM de horror.

REX
Ele está nisso de novo!

INTERCORTE - RUA DO RAMAL / INT.

Woody liga o controle remoto e dirige o carro RC passando por Scud
e debaixo do carro estacionado onde Buzz está escondido.

O motor de RC WHIRRS feliz ao ver Buzz.

O semáforo fica verde permitindo que a van e o caminhão
atravessar o cruzamento.

SR. CABEÇA DE BATATA
(apontando para Woody)
Pegue-o!!

Todos os brinquedos saem de suas caixas e CARREGAM em Woody.

LENHOSO
Ah-h!!  Ah-h!  No, no!

Woody continua a dirigir o controle remoto enquanto tenta evitar
a turba furiosa de brinquedos.

Buzz salta para o carro RC e eles voltam para o
caminhão em movimento.

Scud está bem em seus calcanhares e está prestes a cortar
Zumbido--

Rocky pega Woody e o gira sobre sua cabeça.

LENHOSO
No, no, no!  Wait!
(como Rocky gira ele)
Whoa-Whoa-Whoa...!

- O carro RC de repente desvia das mandíbulas de Scud e começa
fazendo donuts (combinando com Woody's) no meio da rua.

ZUMBIDO
(fiação)
Whoa-Whoa-Whoa...!

Rocky joga Woody no chão.

- RC retoma seu curso direto na rua com Scud
dando perseguição apertada.

Hamm salta de uma pilha de caixas para Woody.

HAMM
Pilha de porco!!

- O carro RC pula no ar, jogando Buzz para cima e para fora.
Buzz consegue pousar de volta em RC, mas virado para trás.

ÂNGULO: SEMÁFORO

Muda de vermelho novamente e o muro de tráfego cruzado é retomado.

Buzz e o carro RC dirigem direto para ele.

Scud cegamente os segue no trânsito e derrapa para um
parar só falta um carro.  O carro desvia e bate em
outro carro.  Logo há um amontoado de vários carros que
circunda Scud, prendendo o cachorro.

Buzz e o carro RC emergem do cruzamento com segurança em
o outro lado.

TRASEIRA DO CAMINHÃO EM MOVIMENTO

A multidão de brinquedos levanta Woody (ainda segurando o controle remoto) e
cabeça para as costas abertas.

LENHOSO
Não espere!  Você não entende!
Buzz está por aí!  Nós temos que
ajude-o!!

SR. CABEÇA DE BATATA
Toss 'im overboard!

LENHOSO
No, no, no, wait!

Os brinquedos o jogam na estrada.  Enquanto o caminhão dirige
fora, os brinquedos ANIMAM.

SR. CABEÇA DE BATATA
Até tanto tempo Woody!

RUA RAMAL - CONTÍNUO

SFX: BUZINA DO CARRO

Woody se vira e se abaixa bem na hora em que um carro passa
sobre ele.

Abalado, Woody tenta se levantar novamente quando...

BUZZ & RC

vem em direção a ele.

ZUMBIDO
Quem-o-oa!  Lenhoso!

O RC Car varre Woody e continua dirigindo.

Woody se vê sentado na frente de Buzz (ainda segurando
o remoto).

LENHOSO
Bem, obrigado pelo passeio.

ZUMBIDO
(apontando para frente)
Fique atento!!

Os brinquedos estão prestes a bater no pneu traseiro do carro
que havia passado por cima de Woody antes.

Woody GRITA e dá ao volante do controle remoto um
esquerda dura, faltando o pneu por centímetros.  O carro RC sobe
embaixo do carro.

LENHOSO
Agora vamos pegar esse caminhão!

ÂNGULO: RC REMOTO

Woody mexe um interruptor de "ON" para "TURBO".

O carro RC acelera em direção ao caminhão em movimento.

TRASEIRA DO CAMINHÃO EM MOVIMENTO

Os brinquedos estão ocupados PARABENIZANDO um ao outro quando Lenny, o
binóculos, olha para trás e vê Buzz e
Lenhoso.

LENNY
Galera!  Galera!  Woody's montando RC!
E Buzz está com ele!

BRINQUEDOS
Que?!!!

Os brinquedos correm para a borda do caminhão aberto.  Bo pega
Lenny e olha através dele.

ÂNGULO: VISÃO BINOCULAR DO ZUMBIDO E AMADEIRADO

BO PEEP
É o Buzz!  Woody estava dizendo ao
verdade!

SLINKY
O que fizemos?!

REX
Legal.  Agora eu tenho culpa.

RUA DO RAMAL / TRASEIRA DO CAMINHÃO EM MOVIMENTO

O RC Car começa a ganhar no caminhão.

LENHOSO
Estamos quase lá.

BO PEEP
Rochoso!  A rampa!

Rocky, o boneco lutador, corre para uma alavanca na lateral
das costas.  A placa acima diz "RAMPA: UP/DOWN".
Rocky empurra forte na alavanca.  A rampa começa a baixar.

Woody & Buzz olhar para cima para ver a rampa prestes a descer
bem em cima deles.

ZUMBIDO
Fique atento!!

O RC Car recua pouco antes da rampa pesada bater em
a estrada.  Faíscas voam para todos os lugares a partir do metal raspando o
pavimento.

SLINKY
(para outros brinquedos)
Rápido!  Segura no meu rabo!

Cabeça de batata e Rex agarra a cauda de Slinky permitindo
A dianteira de Slinky para saltar do caminhão e para a rampa.

Slinky inclina-se para a frente com a pata estendida para Woody.
Woody entrega o controle remoto para Buzz e se inclina para frente para agarrar
A mão de Slinky.

ÂNGULO: WOODY & MÃOS DE SLINKY

Eles se agarram.

SR. CABEÇA DE BATATA
Que menino, Slink!!

De repente, o RC Car começa a desacelerar puxando
A dianteira de Slinky sai da rampa.

SLINKY
Lenhoso!!

Seu meio escorregadio, começa a se esticar e esticar...

SLINKY
Lenhoso!  Acelerar!

LENHOSO
(ao Buzz)
Acelerar!

ZUMBIDO
As baterias!  Estão acabando!

Os olhos do farol de RC caem.  O carro desacelera ainda mais.

Enquanto Slinky continua se alongando.  O carro RC começa a tecer
Lado a lado como um esquiador aquático.

SLINKY
Uau!  Uau!  Uau!

INT. VAN FAMILIAR

Com a mãe e Andy preocupados, a bebê Molly olha para ela
espelho retrovisor lateral.

ÂNGULO: ESPELHO DO LADO DO PASSAGEIRO

O carro RC (com Woody e Buzz) tece em vista e, em seguida,
voltar atrás.

Molly GUINCHA com prazer.

RUA DO RAMAL / TRASEIRA DO CAMINHÃO EM MOVIMENTO

Com a seção intermediária de Slinky esticada até o limite, ele começa
para perder o controle sobre Woody.

SLINKY
Não aguento muito mais tempo!

LENHOSO
Slink!  Espere aí!

A mão de Slinky escorrega, mandando sua frente disparar de volta para dentro
o caminhão em movimento e derrubando todos os brinquedos.

O carro RC pára.

Woody e Buzz assistem em vão como a van da família e em movimento
caminhão desaparece.

Buzz joga o controle remoto no chão em frustração.

LENHOSO
(sarcástico)
Legal!

BATER

ZUMBIDO
Lenhoso!  O foguete!

LENHOSO
A partida!

Woody tira o fósforo de seu coldre que Sid havia colocado
lá antes.

LENHOSO
(continuação)
Sim!  Obrigado, Sid!

Woody corre atrás de Buzz, ataca a partida contra
Pneu traseiro de RC, e está prestes a acender o fusível quando...

UM CARRO

chia bem em cima deles, explodindo a partida.

Woody aperta o fósforo queimado em suas mãos e cai
prostrado ao chão.

LENHOSO
Não-o-o!  Não-não-não-não!  Não-o-o!

Incapaz de ver um cowboy chorar, Buzz abaixa a cabeça, causando
seu capacete para bloquear o sol de Woody.

Quando a sombra de Buzz passa sobre ele, Woody para de gemer e
olha para a mão dele.

UM PONTO QUENTE BRANCO

como a gerada a partir da lupa de Sid, aparece
nas costas da mão de Woody.

Woody pula, pega o capacete de Buzz e o alinha para que o
ponto branco atinge a ponta do fusível.

ZUMBIDO
Lenhoso?!  O que é que está a fazer?

LENHOSO
Fique quieto, Buzz!

O fusível acende.

LENHOSO
Ha-ha!!!!

ZUMBIDO
Você conseguiu!  Próxima parada.  Andy.

Woody pula de volta para o carro e, de repente, para de sorrir.

LENHOSO
Espere um minuto... Acabei de acender um foguete.
Rockets Explo -

SFX: EXPLOSÃO DE FOGUETE

O RC Car dispara para a frente.  Excesso de velocidade ao longo da divisória
linha na estrada, ele passa facilmente carro após carro até o
caminhão em movimento pode ser visto no horizonte.

PARTE TRASEIRA DO CAMINHÃO EM MOVIMENTO

Os brinquedos estão reunidos em torno de Slinky, sua mola jogada para fora
no chão.

SLINKY
Eu deveria ter aguentado mais.

Lenny olha para trás novamente.

LENNY
Olhar!  Olhar!  É Woody e Buzz!
Comin' up rápido!

Os brinquedos correm até a abertura e TORCEM.

ÂNGULO: ZUMBIDO E AMADEIRADO

O foguete é tão forte que começa a levantar Buzz e
Woody fora do carro RC.  Woody consegue continuar segurando
em RC -- mas não por muito tempo.

Os brinquedos TORCIDA se transforma em GRITOS enquanto correm para sair
do caminho do "foguete RC" que se aproxima.

REX
Proteja-se!!

Woody é forçado a largar o carro RC.

Eles se separam, mandando os dois brinquedos para cima e RC para dentro do
traseira do caminhão.

RC bate em Cabeça de Batata, mandando todas as suas partes voarem.

EXT. SKY - ZUMBIDO E AMADEIRADO

O foguete sobe cada vez mais alto.

LENHOSO
Ahhh!!!! Esta é a parte em que nós
explodir!

ZUMBIDO
Hoje não!

Buzz pressiona confiantemente o botão em seu peito.

ASAS

Fora de Buzz, cortando a fita que o prende ao foguete.
Os brinquedos se separam do foguete pouco antes de ele explodir.

Os brinquedos despencaram.

LENHOSO
(tapando os olhos)
Ah-h-h-h-h!!!!

Só então o Buzz fica sob algumas linhas de energia e sobe para cima
outra vez.  Woody dá uma olhada.

Eles estão voando.

LENHOSO
Ei, Buzz!!  Você está voando!!

ZUMBIDO
Isso não é voar.  Isso é
Caindo -- com estilo!

LENHOSO
Ha ha!!  Ao infinito e além!!

Eles voam graciosamente em direção ao caminhão em movimento, mas depois passam
sobre ele.

LENHOSO
Uh, Zumbido?!  Perdemos o caminhão!

ZUMBIDO
Não estamos mirando no caminhão!

ÂNGULO: VAN FAMILIAR

Buzz e Woody voam sobre o teto solar da van e, em seguida,
cair no carro.

VAN FAMILIAR - CONTÍNUA

Antes que alguém possa notar, Woody e Buzz pousam em uma caixa aberta
no banco de trás ao lado de Andy.

Andy se vira para descobrir o manco Buzz e Woody deitado no
caixa.

ANDY
Ei!  Uau!

Sra. DAVIS
Que?  O que é?

ANDY
(pegar os brinquedos)
Lenhoso!  Zumbido!

Sra. DAVIS
Oh, ótimo, você os encontrou.  Onde
foram?

ANDY
Aqui!  No carro!

Sra. DAVIS
Ver?  Agora, o que eu te falei?
Exatamente onde você os deixou.

Andy abraça os dois brinquedos.

CLOSE UP - AMADEIRADO E ZUMBIDO

Eles dão uma piscadela de olho um no outro.

				DISSOLVER EM:

EXT. ANDY'S NEW HOUSE - MANHÃ DE NATAL - SALA DE ESTAR BAY
JANELA

Através da neve que cai suavemente, a família Davis pode ser
visto ao redor da árvore de Natal desembrulhando presentes.

ANDY
Qual deles posso abrir primeiro?

Sra. DAVIS
Vamos deixar Molly abrir um.

NOVA CASA/SALA DE ESTAR DE ANDY - ÁRVORE DE NATAL

Uma das lâmpadas de Natal se afasta para revelar...

O SARGENTO

O soldado verde de plástico espia a família Davis com seu
binóculo.  Ele se vira e se move de volta para a árvore.

ÁRVORE DE NATAL

Um monitor de bebê fica encravado entre alguns galhos apoiados
por vários homens do exército verde.  Um dos soldados liga-o.

O NOVO QUARTO DE ANDY

A extremidade receptora do monitor está no topo da mesa de cabeceira de Andy.
ESTALA COM ESTÁTICA.

SARGENTO (O.S.)
(sobre o monitor)
Incenso, isto é Mirra.  Vir
em, Incenso.

Buzz senta-se à beira da cama de Andy, enquanto Hamm descansa no
mesa de cabeceira ao lado do monitor.  Eles ouvem atentamente.

HAMM
(para o quarto)
Ei, cabeça todo mundo!  É
showtime.

Woody e o resto dos brinquedos estão se misturando como um
típica festa de Natal do escritório.

REX
Ah!  Chegou a hora!

Todos os brinquedos param e correm em direção ao monitor.

Woody está prestes a seguir quando um bandido o puxa para trás para
revelar...

BO PEEP

LENHOSO
Whoooooah!  Ah!  Bo!
(esfregando o pescoço)
Tem que haver uma maneira menos dolorosa
para chamar minha atenção.

BO PEEP
Feliz Natal, xerife.

Ela sorri e aponta seu torto para cima para suas ovelhas empoleiradas
em uma prateleira pendurando visco.

LENHOSO
Digamos, não é visco?

BO PEEP
Mm-hmmmmm.

Bo solta seu bandido, mergulha Woody e o beija.

O restante dos brinquedos se reuniu embaixo do monitor
inquieto com "excitação" não medo.

REX
(para Slinky)
Talvez Andy vai ter outro dinossauro,
como um comedor de folhas.  Dessa forma, eu
poderia jogar o, uh, dominante
predador.  Que!

Slinky RI com Rex.

ZUMBIDO
Cala todo mundo, sossego!

SARGENTO (O.S.)
(sobre o monitor)
O primeiro presente de Molly i-i-é... Sra.
Cabeça de batata.  Repetir.  A Sra.
Cabeça de batata.

HAMM
Caminho a percorrer, Idaho!

Todos os brinquedos PARABENIZAM a Cabeça de Batata.

SR. CABEÇA DE BATATA
Pô, é melhor eu me barbear.

Cabeça de batata chicoteia seu pedaço de bigode.

Woody sobe na cama e se junta a Buzz.  Batom agora
cobre o rosto de Woody.

SARGENTO (O.S.)
(sobre o monitor)
Entre, Frankincenso.  Andy agora é
abrindo seu primeiro presente --
(ESTÁTICO)


Buzz bangs na lateral do monitor.  Nada.

LENHOSO
Zumbido.  Buzz Lightyear.  Você não é
preocupado, está?

SARGENTO (O.S.)
(sobre o monitor)
Eu não consigo entender --
(ESTÁTICO)

ZUMBIDO
(defensivamente)
Me?  No, no, no, no...
(bater)
E você?

LENHOSO
(risos)
Agora Buzz, o que Andy poderia possivelmente
pega que é pior que você?!

Nós CAMINHAMOS pela janela para o EXT.

ANDY (O.S.)
Ah, o que é isso?  O que é?

SFX: LATINDO

ANDY (O.S.)
Uau!  Um cachorrinho!

Nós ZOOM BACK através da janela para um CLOSE UP de Buzz e
Lenhoso.

Eles se olham com um meio sorriso, meio careta e
RIR FRACAMENTE.


FIM!




`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
