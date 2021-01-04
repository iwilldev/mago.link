export const state = () => ({
  projectsList: [
    {
      id: 'mago-iris',
      icon: 'ReactJS',
      title: 'Mago Íris',
      description: `Gerador de paletas de cores a partir de código hexadecimal de 6 dígitos.`,
      secondTitle: 'descrição do projeto',
      secondDescription: `Quando o usuário aplica uma cor em formato HEX (#000000) no campo, o estado 'queryColor' é atualizado com o novo valor através da 'onChange'. 
      
      Quando o formulário é enviado, a função 'generateColors()' é executada utilizando esse valor de 'queryColor' como parâmetro, convertendo-o para o formato HSL.
      
      Os valores individuais de Hue, Saturation e Lightness são armazenados em um objeto no estado 'hslProp' que é condição para renderização de uma lista de componentes que retornam combinações diferentes para aquela cor.
      
      Esses componentes recebem o 'hslProp' através da propriedade 'colors'. Essa prop é dependência para um hook de efeito de cada componente que recebe esses valores e gera mais 4 cores através da função 'generateCardColors', com variações correspondentes a combinação, atribuindo-as em um array com useState().
      
      Na renderização do componente, os cards de cores são gerados com o método 'map()' percorrendo o array de cores. Cada card retorna o componente ColorCard, com a cor de fundo corresponde e os três formatos (HEX, RGB e HSL) em texto. As funções para conversão entre padrões foram retiradas do artigo 'Converting Color Spaces in JavaScript' de Jon Kantner para o CSS-Tricks.`,
      link: 'https://mago-iris.vercel.app/',
    },
    {
      id: 'orion',
      icon: 'ReactJS',
      title: 'Orion',
      description: `Utilizando a dependência 'react-calendar', a aplicação faz requisições a API 'Astronomy Picture of The Day' da NASA, retornando a imagem e um link para visualização em alta resolução.`,
      secondTitle: 'descrição do projeto',
      secondDescription: `Feito com React, react-calendar, Axios, API 'APOD' da NASA. Ao ser iniciada, a aplicação tem a data atual (new Date()) como valor do estado 'currentDate'. 
      
      Esse valor é utilizado em um hook de efeito (useEffect) que tem o próprio 'currentDate' como dependência. A data é formatada usando três variáveis ('fullYear', 'month' e 'date') que são declaradas com os respectivos getters ('getFullYear', 'getMonth' e 'getDate') da instância 'Date()'.
      
      Esse valor formatado é declarado na constante 'fullDate' que é utilizada em uma template string que faz a requisição a API, utilizando o Axios. Na resposta, o objeto 'response.data' é atribuído ao estado 'image', que serve como condicional para renderizar o conteúdo dentro da div '.container': o título, o link para a imagem e a imagem em si, que são gerados com os valores das propriedades '.title', '.hdurl' e '.url' do objeto recebido da API.
      
      No menu da aplicação, há um calendário gerado através da 'react-calendar' que, ao ter um dia selecionado pelo usuário, altera o estado 'currentDate' para a data selecionada, reiniciando o script do useEffect citado acima e apresentando uma nova imagem na tela.`,
      link: 'https://g31-orion.now.sh/',
    },
    {
      id: 'galeria-de-imagens',
      icon: 'ReactJS',
      title: 'Galeria de Imagens',
      description: `A aplicação utiliza a API do Unsplash, fazendo uma requisição customizada que retorna imagens conforme a busca selecionada. Clicando no card, o usuário é redirecionado a outra rota onde pode visualizar a imagem em resolução maior, podendo ainda clicar nela para abrir sua versão com resolução máxima, em outra aba. 
      
      Layout feito com CSS Flexbox, responsivo e sem nenhum breakpoint.`,
      secondTitle: 'descrição do projeto',
      secondDescription: `Criado com: React, CSS Flexbox, API do Unsplash. A barra de busca tem como valor o estado 'query', que é atualizado através do atributo 'onChange' do input. 
      
      No submit do formulário, essa query é aplicada ao endereço de requisição, retornando um conjunto de imagens correspondentes abaixo do formulário.
      
      Para abrir a imagem na visualização foram utilizadas duas Locations Props, uma com a imagem a ser exibida e outra com o array armazenado no estado 'images', para que ao voltar através do botão, o usuário possa ver a última busca que realizou: quando o App é montado, um hook de efeito verifica se há dados nas locations props, retornando a busca realizada, caso positivo, ou mantendo a página em branco, aguardando nova busca.`,
      link: 'https://g31-galeria-reativa.now.sh/',
    },
    {
      id: 'editor-de-fotos',
      icon: 'ReactJS',
      title: 'Editor de Fotos',
      description: `Editor de fotos que permite carregar uma imagem PNG ou JPG e aplicar filtros CSS nela, com a opção de exportação do canvas onde a imagem foi editada.`,
      secondTitle: 'descrição do projeto',
      secondDescription: `Criado com React. No cabeçalho, quando uma imagem é selecionada, uma função é executada através do atributo 'onChange' do input, que reseta os valores de configuração padrão (atribuindo a constante 'defaultValues' ao estado 'adjustedValues') e gera uma url temporária para a imagem que renderiza na 'img' abaixo do header. 
      
      Essa imagem recebe os estilos através de um hook de efeito, que atualiza uma template com a propriedade filter e todos os valores aplicáveis através dos controles abaixo, vindos do estado 'adjustedValues'. Nos controles, os botões mudam o estado 'valuesIndex' que é utilizado para acessar os valores individuais da 'adjustedValue'.
      
      Quando o input range é alterado, o filtro selecionado nos botões é aplicado através do atributo 'onChange' desse input. Para a exportação, foi utilizada a dependência 'html-to-image', que imprime o canvas com os filtros aplicados em uma imagem JPEG.`,
      link: 'https://g31-editor-de-fotos.now.sh/',
    },
    {
      id: 'gerador-de-flexbox',
      icon: 'ReactJS',
      title: 'Gerador de Flexbox',
      description: `Aplicação criada para demonstrar o comportamento de um flex-container, através da alteração de suas propriedades. A tela é dividida em duas partes (horizontalmente, no desktop, e verticalmente, nas telas menores), sendo metade para um "controller", onde você pode alterar as propriedades do container através dos respectivos 'select', e a outra para um preview do container e o código CSS gerado pelo controller.`,
      secondTitle: 'descrição do projeto',
      secondDescription: `Criado com: ReactJS / Create React App. React HTML Parser, para exibir o código CSS com quebra de linha. E muuuuuito Flexbox <3 . Criado com 'create-react-app', pode ser executada e enviada para a produção com os scripts padrão, descritos no README da pasta, no repositório do desafio. 
      
      No controller, cada 'select' altera (através da 'onChange') uma propriedade (aplicada com spread operator) a um objeto armazenado em um estado (criado com 'useState') em sintaxe JavaScript. Esses estilos são aplicados ao container do preview através de sua propriedade 'style'.
      
      Esse objeto é percorrido, dentro de um hook de efeito, e retorna um array com as propriedades (que são reescritas de camelCase para kebab-case, através do método 'replace()') e seus valores, quando não forem padrão, concatenando os textos no formato CSS, que é impresso na tela, com quebra de linha, utilizando o React HTML Parser.`,
      link: 'https://g31-flexbox-generator.vercel.app/',
    },
    {
      id: 'dragonflix',
      icon: 'ReactJS',
      title: 'Dragonflix',
      description:
        'Projeto criado durante a #ImersãoReact da Alura, que consiste-se em um acervo de vídeos do YouTube escolhidos pelo usuário. Criei o Dragonflix, uma coletânea de vídeos de rock e metal.',
      secondTitle: 'descrição do projeto',
      secondDescription: `Além do ReactJS (aplicação criada com 'create-react-app'), utilizamos JavaScript, Styled Components e CSS em servidor Node.js. Afim de otimizar a usabilidade do site, incluí um banner com o título do vídeo que é exibido com o 'hover' do mouse, no desktop, e está sempre visível no mobile, além da exibição nativa do vídeo, sem redirecionamento para o site do YouTube. 
        
        O projeto foi estilizado para se adequar a dispositivos móveis, mantendo seu aspecto original e ajustando alguns pontos, como o link 'Novo Vídeo', a fim de garantir uma boa experiência ao usuário.`,
      link: 'https://dragonflix.vercel.app/',
    },
    {
      id: 'metronomo',
      icon: 'ReactJS',
      title: 'Metrônomo',
      description: `Metrômono com variação de tempo e batidas.`,
      secondTitle: 'descrição do projeto',
      secondDescription: `A interface conta com dois ajustes, sendo um de tempo, através de um input do tipo range, e um de batidas, através de um select com quatro opções (2, 3, 4, 6). Quando o botão 'Iniciar' é pressionado, a função 'startStop' verifica o estado de valor booleano 'playing', invertendo seu valor. 
      
      Quando o input de tempo é alterado, a função 'handleBpmChange' é executada, alterando o estado 'bpm' com o novo valor e verificando o estado de 'playing', zerando o contador (estado 'count') caso o metrônomo esteja sendo executado. Na alteração no select de batidas, o estado 'beatsPerMeasure' é alterado com o novo valor.
      
      O script principal é executado dentro de um hook de efeito, que é tem, como dependências, os quatro estados da aplicação é alterado. Após a criação dos dois objetos de áudio ('click1' e 'click2'), é executada uma condicional para o estado 'playing' que, sendo verdadeiro, inicial um timer que alterna entre os dois sons, conforme o número de batidas selecionadas, em um intervalo de tempo compatível com o que foi selecionado no input correspondente.`,
      link: 'https://metronome-react.vercel.app/',
    },
    {
      id: 'codescola',
      icon: 'ReactJS',
      title: 'Codescola',
      description:
        'Projeto desenvolvido na segunda edição da NLW, envolvendo React, React Native, Node.js e Typescript. A codEscola é uma plataforma para integrar alunos e professores de programação',
      secondTitle: 'descrição do projeto',
      secondDescription: `O site foi construído com os princípios do mobile-first, com um design inicialmente voltado para os dispositivos móveis, que se adaptava a grandes telas, através de media queries na estilização dos componentes. 
        
        E além da aplicação Web, foi desenvolvida uma aplicação móvel, em React Native, permitindo que os alunos pudessem pesquisar os professores disponíveis, inclusive salvando os seus favoritos.
        
        A 'cozinha' da aplicação ficou por conta do TypeScript, que foi usado no template do projeto, construindo uma Restful API em Node.js, para interface entre os bancos de dados da aplicação e as aplicações web e móvel`,
      link: 'https://github.com/euwilliamgoncalves/codescola_webapp_nlw2/',
    },
    {
      id: 'jogo-da-velha',
      icon: 'ReactJS',
      title: 'Jogo da Velha',
      description: `Reprodução do clássico, com transição entre jogadores (X ou O) e histórico de jogadas com possibilidade de regressão.`,
      secondTitle: 'descrição do projeto',
      secondDescription: `Feito com React. O 'helper.js', bem como as instruções para esse projeto, foram uma cortesia do canal 'codeSTACKr' no YouTube. O componente 'Square' renderiza o 'value' recebido nas props em um botão, além de herdar o 'onClick' do componente 'Board'. O componente 'Board' usa a função 'map' no array 'squares' recebido nas props e, para cada item, renderiza um 'Square', passando para ele o 'value' correspondente a posição do array 'square' e o 'onClick' recebido nas props do componente 'Game'. 
      
      No componente 'Game', a 'history' armazena o histórico de jogadas, sendo iniciada através do 'useState' como um array de 9 posições nulas. A 'stepNumber' armazena a posição da última jogada, relacionada ao histórico. 'xIsNext' indica qual é o próximo jogador, alternando entre 'true' e 'false'. A 'winner' usa o método 'calculateWinner' do 'helper.js' para verificar se, na condição atual, a mesa apresenta uma jogada vencedora, dentre as possíveis. 'xO' retorna a jogada (X ou O), testando a 'xIsNext' em um ternário.
      
      A função 'handleClick()', que é repassada para o 'Board' e o 'Square' através do 'onClick', recebe como parâmetro a posição da jogada, acrescentando-a a constante 'historyPoint' que é atribuída, com a 'stepNumber' como index, a constante 'current' que é armazenada, através de um spread operator, a constante 'squares'. É executada uma condicional que verifica se há um vencedor ('winner') ou se a posição clicada está preenchida (squares[index]).
      
      Caso não retorne positivo, a jogada é atribuída a posição correspondente (squares[index] = xO), o histórico é atualizado, bem como a posição da jogada atual nele, além da 'xIsNext' ter seu valor atribuído ao oposto. A função 'jumpTo()' retorna o quadro a jogada correspondente, armazenada na 'stepNumber', além de usar o próprio 'step' para verificar que era o jogador da vez, vendo se a chave da posição, dividida por 2, é par.
      
      A 'renderMoves()' renderiza o histórico, conforme as jogadas acontecem. Os botões gerados executam a 'jumpTo()'. No return principal, o componente 'Board' é renderizado, recebendo como 'squares' o histórico de jogadas.`,
      link: 'https://g31-bloco-notas.now.sh/',
    },

    {
      id: 'app-clima',
      icon: 'ReactJS',
      title: 'App de Clima',
      description: `Utilizando a API da OpenWeatherMap, a aplicação permite buscar o clima atual em qualquer local do mundo, através da barra de busca, exibindo um resultado com aparência dinâmica que varia conforme a condição do clima e a temperatura do local buscado.`,
      secondTitle: 'descrição do projeto',
      secondDescription: `Feito com React, CSS Flexbox e a API da OpenWeatherMap. 
      
      Quando o usuário busca um local na barra de busca, a aplicação faz uma requisição a API, retornando os dados para exibição. Na renderização do container do app, são feitas verificações condicionais que retornam até nove variações de ícones conforme o clima e duas baseadas na temperatura.
      
      Após verificação, são aplicadas as classes correspondentes ao resultado obtido através da API.`,
      link: 'https://g31-weather-app-react.vercel.app/',
    },
    {
      id: 'pedra-papel-tesoura',
      icon: 'Vue.js',
      title: 'Pedra, Papel, Tesoura',
      description:
        'Jogo criado durante o Dev Day da Digital Innovation, através das aulas do Rafael Maia, utilizando Vue e Sass, além de recursos como responsividade e um local storage para armazenar a pontuação',
      secondTitle: 'descrição do projeto',
      secondDescription: `O jogo é uma variação do clássico Pedra, Papel e Tesoura, com o acréscimo de duas novas jogadas: Lagarto e Spock, que minimizam as chances de empate. 
        
        Na tela inicial, você conta com os links para jogar e para ver as regras.As regras originais se mantém com uma única diferença: nessa versão, cada jogada pode vencer ou perder de outras duas.O gameplay é descomplicado possibilitando jogadas consecutivas em uma tela com design minimalista e interativo, que garante bons momentos de diversão.`,
      link: 'https://pptls.now.sh/',
    },
    {
      id: 'aunuxt',
      icon: 'Vue.js',
      title: 'Blog Augusto dos Anjos',
      description: `Blog com alguns dos melhores textos de Augusto dos Anjos, meu poeta favorito.`,
      secondTitle: 'descrição do projeto',
      secondDescription: `Feito com Vue.js, Nuxt.js e Vuex. Na tela inicial há um loop com a diretiva 'v-for' que renderiza links para uma rota dinâmica que redireciona a uma página individual dos textos. 
      
      O blog foi construído utilizando a estrutura do Nuxt.js, que configura as rotas de forma automática, mediante os arquivos adicionados na pasta 'pages'.
      
      O conteúdo foi armazenado em um store do Vuex, sendo utilizado através de métodos que verificam o id selecionado na rota dinâmica, retornando o texto desejado.`,
      link: 'https://aunuxt.now.sh/',
    },
    {
      id: 'travueling',
      icon: 'Vue.js',
      title: 'App de Viagens',
      description: `App de viagens com quatro países e experiências para cada um deles, utilizando recursos do Vue Router.`,
      secondTitle: 'descrição do projeto',
      secondDescription: `Feito com Vue.js. 
      
      Criado explorando recursos do Vue Router, a página utiliza 'named routes' e 'dynamic routes' para os destinos além de 'nested routes' para as experiências, 'lazy load' das rotas para otimizar os bundles, 'router params' para controlar o conteúdo a ser exibido, 'history mode' para monitorar e guardar as etapas de navegação e navigation guards para proteger rotas com login seguro.
      
      Para melhorar a experiência, 'route transitions' foram aplicadas nas mudanças de rotas.`,
      link: 'https://travueling.vercel.app/',
    },
    {
      id: 'music-app',
      icon: 'Vue.js',
      title: 'Music App',
      description: `App de Música criado com Vuetify e o componente Vuetify Audio.`,
      secondTitle: 'descrição do projeto',
      secondDescription: `Esse app foi criado utilizando Vue.js, Vuetify e o Vuetify Audio, um componente criado por Wilson Wu. 
      
      No componente da página inicial, o player do Vuetify Audio é renderizado, assim como uma lista com 4 músicas. 
      
      Quando uma música é selecionada, seu caminho é atribuído a propriedade 'file' do Vuetify Audio, que alterei para incluir o controle de volume. 
      
      Forkei o projeto original e abri uma pull request com a alteração, disponível no meu GitHub.`,
      link: 'https://music-app-taupe.vercel.app/',
    },
    {
      id: 'lista-de-tarefas',
      icon: 'Vue.js',
      title: 'Lista de Tarefas',
      description: `Lista de tarefas criada utilizando Vue.js e o framework de interface Vuetify.`,
      secondTitle: 'descrição do projeto',
      secondDescription: `Feito com Vue.js, Vuetify. As tarefas são armazenadas no array 'tasks' da propriedade 'data()'. Quando o usuário cria uma nova tarefa, o método 'addTask()' é executado, criando um novo objeto com um id dinâmico, o nome escolhido pelo usuário e o valor 'false' para a propriedade 'done' (feito), adicionando esse objeto ao array 'tasks', através do 'push()'. 
      
      Quando o usuário exclui uma tarefa, o método 'deleteTask()' retorna um novo array de 'tasks' através do método 'filter()', com todas as tarefas exceto a que tem o id da deletada, gerando uma nova lista sem essa tarefa.
      
      Quando uma tarefa é concluída pelo usuário, o método 'doneTask()' utiliza o método 'filter()' para encontrar a tarefa com o mesmo id e inverter o valor booleano da propriedade 'done'.
      
      Esses três métodos executam o método updateLocalStorage(), que adiciona os valores ao Local Storage do navegador, mantendo-os salvos para uma futura sessão, através do hook 'created()' que recupera esses dados quando o componente Todo.vue é montado.
      
      Para garantir uma boa experiência na interface, binds e classes dinâmicas alteram a aparência das tarefas, conforme interação do usuário.`,
      link: 'https://g31-lista-de-tarefas.vercel.app/',
    },
    {
      id: 'form-validation',
      icon: 'Vue.js',
      title: 'Validação de Formulário',
      description: `Exemplo de formulário com validação no lado do cliente, utilizando Vue.js, Vuelidate, classes dinâmicas e renderização condicional, para otimizar a experiência e orientar o usuário durante o preenchimento.`,
      secondTitle: 'descrição do projeto',
      secondDescription: `Feito com Vue.js, Vuelidate, Axios e CSS. Uma instância Vue foi criada na div '#app', com os dados do formulário declarados em um objeto (form) retornado pelo 'data()'. 
      
      Utilizando o Vuelidate, a propriedade 'validations' foi adicionada a instância, utilizando métodos nativos apropriados para verificar o nome, a idade e o e-mail. Para o nome de usuário do GitHub, o validador aguarda a requisição a API, através do Axios, para validar o preenchimento. Na validação da pergunta (Prefere 'dia' ou 'noite'?), o validador verifica se o valor preenchido é correspondente a uma das opções.
      
      As mensagens de erro na tela são renderizadas através da diretiva 'v-if', caso o campo retorne o erro, utilizando a referência dos dados computados pelo Vuelidate para o formulário ($v.form.NOME_DO_CAMPO.VALIDADOR_OU_ERRO). 
      
      Para melhoras a experiência, foram adicionadas classes dinâmicas aos campos, que mudam sua aparência em situações de erro, ou de validade do dado, utilizando a diretiva 'v-bind' de forma implícita (:class). As classes 'error' e 'valid' são adicionadas ao campo caso seus respectivos métodos (shouldAppendErrorClass e shouldAppendValidClass) retornem 'true'.
      
      Os campos também retornarão erro, caso o usuário selecione um campo, não digite nada e passe para outro campo, através do evento 'blur', utilizando a diretiva 'v-on' (@blur="$v.form.NOME_DO_CAMPO.$touch()").
      
      Para o efeito do label, o 'font-size' é reduzido no arquivo CSS, caso o input esteja seleciodado (input:focus + label), e com a 'v-bind' no próprio elemento, caso exista um dado no campo, adicionando a classe 'toggle', que causa o mesmo efeito (:class="{toggle: form.NOME_DO_CAMPO}").`,
      link: 'https://g31-validacao-form.now.sh/',
    },
    {
      id: 'space-shooter',
      icon: 'Vue.js',
      title: 'Space Shooter',
      description: `Jogo no estilo arcade compatível com PC (pelo teclado) e smartphones (pelos botões virtuais). O jogo é interrompido se o usuário perder as 10 energias, que são retiradas quando um alien consegue tocar a base do quadro do jogo.`,
      secondTitle: 'descrição do projeto',
      secondDescription: `Feito com Vue.js, JavaScript e CSS. Uma instância Vue foi criada na div '.wrapper', concentrando os dados do jogador (x, y, angle, bullets), do jogo (score, energy) e dos inimigos (enemies e enemyReached). 
      
      Ao ser renderizada, ela executa os métodos 'updateBullet' e 'updateEnemy', através de 'created'. 
      
      Nos métodos, 'rotateClockwise()' e 'rotateCounterClockwise()' alteram a variável 'angle', que afeta o player, através de um 'transform' aplicado nos estilos; o 'fire()' cria um novo bullet (com as posições e ângulo do jogador) no array 'bullets', que é afetado pelo 'updateBullet', que utiliza o objeto 'Math' para calcular o trajeto do disparo em função do ângulo do jogador, sendo interrompido e removi do array 'bullets', quando cai na condicional do método 'outOfScreen()', que verifica se o disparo saiu das coordenadas x e y da tela do jogo.
      
      O método 'checkCollision()' testa se um dos disparos e um dos inimigos estão na mesma posição. Caso positivo, um ponto é acrescentado em 'score' e o inimigo "atingido" é removido do array 'enemies'.
      
      O método 'enemyReachedBottom()' testa se um dos inimigos alcançou a base da tela, removendo-o do array 'enemies', trocando a condição de 'enemyReached' para 'true' e removendo um ponto de 'energy', seguido de um 'setTimeout' que retorna a condição de 'enemyReached' para 'false'. Essa variável é usada como teste em um ternário que acrescenta uma classe ao container do jogo, fazendo com que a tela dê uma leve chacoalhada, quando o jogador perde uma energia.
      
      O 'updateEnemy()' acrescenta um inimigo no array 'enemies', em posição aleatória no eixo x, usando um 'setInterval' que incrementa sua posição no eixo y, fazendo com que ele se mova pra baixo. Esse método executada o 'enemyReachedBottom()' para cada inimigo.
      
      Há um Listener no documento ('keydown), que captura entradas de teclas e, caso sejam as teclas jogáveis, executa os métodos correspondentes, descritos em tela.`,
      link: 'https://g31-space-shooter.now.sh/',
    },
    {
      id: 'github-card',
      icon: 'Vue.js',
      title: 'Github Card',
      description: `A página consome a API do GitHub através do 'axios', fazendo uma requisição a duas rotas, retornando um resumo dos dados do perfil buscado e a linguagem mais utilizada nos repositórios.`,
      secondTitle: 'descrição do projeto',
      secondDescription: `Criado com: Vue.js (Vue CLI), Semantic UI, API do GitHub. Quando a aplicação é iniciada, o componente GithubCard faz uma requisição a API, através de seu hook 'created', retornando os dados do perfil, que são armazenado no objeto 'user', além dos dados dos repositórios desse perfil, que são percorridos, com o método 'map', e tem as linguagens utilizadas armazenadas no array languageList, que é usado como parâmetro para o método 'findMostFrequentLanguage' do componente, que usa os métodos 'reduce' e 'filter' para comparar a recorrência das linguagens e retornar a que é mais utilizada. 
      
      Quando uma busca é realizada, a 'searchKey' da instância principal é incrementada e, sendo passada como prop do componente GithubCard, aciona um watcher, refazendo todos os passos, desde a requisição até a atribuição dos novos dados.`,
      link: 'https://g31-github-resume-card.now.sh/',
    },
    {
      id: 'painel-drag-and-drop',
      icon: 'Vue.js',
      title: 'Painel Drag and Drop',
      description: `Painel no estilo kan ban, com três estados para as atividades, que podem ser incluídas através do formulário do cabeçalho e movidas de um quadro para o outro.`,
      secondTitle: 'descrição do projeto',
      secondDescription: `Criado com: Vue.js (Vue CLI) e CSS Flexbox. O formulário do topo usa um input com v-model para a variável 'newCard' que é adicionada, através do método 'addCard()' ao array 'cards', que é renderizado no primeiro quadro, através da diretiva v-for. 
      
      Quando um card é selecionado, sua ID é armazenada no Local Storage e seu display é alterado para 'none', através de um método no componente 'Card'.
      
      Quando o usuário solta o card em um quadro, um método do componente 'Board' é executado, utilizando a ID armazenada no Local Storage para assumir o card como filho, através do método 'appendChild()'..`,
      link: 'https://g31-painel-drag-and-drop.now.sh/',
    },
    {
      id: 'lista-de-compras',
      icon: 'Vue.js',
      title: 'Lista de Compras',
      description: `Loja do Mago, um shopping fake que vende itens e habilidades para desenvolvedores. Construído com VueJs, foi feita para explorar conceitos de reatividade, renderização condicional, binding, entre outros recursos como a criação e utilização de métodos na instância utilizada.`,
      secondTitle: 'descrição do projeto',
      secondDescription: `Feito com VueJs e CSS Flexbox. Uma instância Vue foi criada no elemento '#shopping-list', que contempla todos os itens da aplicação. 
      
      Em seu estado 'default', a lista de itens da loja está oculta, sendo exibido apenas os itens selecionados (ou uma mensagem de carrinho vazio, caso nenhum item tenha sido escolhido na lista). 
      
      Quando o botão 'Ver Loja' é clicado, o estado da instância é alterado para 'edit', exibindo os produtos disponíveis acima do resultado da loja. 
      
      Clicando em 'comprar', o item selecionado é adicionado na lista de compras e tem sua classe e botão alterados, impedindo a inserção duplicada, através de um bind que verifica sua propriedade 'purchased', um booleano.
      
      Quando o botão remover é clicado, ele é removido da lista e volta ao seu comportamento e aparência padrão.
      
      Na lista de compras, havendo presença de itens selecionados, surge um botão 'finalizar' que direciona o usuário a um novo estado ('finished') que exibe uma mensagem de pedido finalizado.`,
      link: 'https://g31-lista-de-compras-vuejs.now.sh/',
    },
    {
      id: 'chat-em-tempo-real',
      icon: 'Vue.js',
      title: 'Chat em Tempo Real',
      description:
        'A aplicação foi criada importando o unpkg do Vue e abstraindo os scripts em um arquivo JS. Demais recursos foram importados através de links, no próprio HTML.',
      secondTitle: 'descrição do projeto',
      secondDescription: `Criado com VueJs (Scripts e renderização), Firebase (realtime storage) e Native Toast (notificação). Dentro da instância Vue, foram criados os dados a serem utilizados na aplicação, bem como os métodos que manipulam esses dados e interagem com o storage. 
      
      A comunicação em tempo real com o storage do Firebase, através dos seus métodos nativos, fica dentro do hook 'created', que é executado a cada nova renderização da aplicação, além de atualizar as informações na tela através dos dados recebidos do storage, mantendo o chat com um ótimo tempo de resposta.`,
      link: 'https://g31-chat-vue-firebase.now.sh/',
    },
    {
      id: 'are-you-human',
      icon: 'JavaScript',
      title: 'Are you Human? (Captcha)',
      description: `Verificador por toque/clique, no estilo CAPTCHA. Quando o usuário pressiona a área, uma barra enche da esquerda para a direita, até o fim da caixa. O botão de envio só é liberado se o toque for interrompido com a ponta da barra dentro da área vermelha, que aparece em posições aleatórias, a cada tentativa.`,
      secondTitle: 'descrição do projeto',
      secondDescription: `Feito com JavaScript e CSS. No início do script, seis constantes são criadas, a partir dos elementos da página, utilizando o método 'querySelector: 'submitButton', que é o botão de envio do formulário, 'openTestButton', que é o botão que habilita o teste, 'testMessage' e 'testBox' que fazem parte do validador, sendo a mensagem de orientação e a área de toque, e 'bar' e 'trigger', que são a barra que "enche" e a área onde ela deve ser interrompida, respectivamente. 
      
      No 'openTestButton' há um Listener (pointerdown) que remove a classe 'hidden' da 'testBox' e da 'testMessage', além de adicioná-la a si, tornando-se invisível enquanto habilita a visualização da área de teste.
      
      Na 'testBox' há dois listeners. O 'pointerdown' exibe o 'trigger' e o posiciona aleatoriamente, além de atribuir o valor 'true' a variável 'isPressed' e executar a função 'fillBar()', que usa um 'setInterval' para aumentar a largura da barra, sendo interrompido quando a barra chega ao fim da 'testBox', ou quando a condição de 'isPressed' for 'false'.
      
      Já no 'pointerup', a 'isPressed' recebe o valor 'false' e é feita uma condicional para verificar se a barra "parou" dentro do 'trigger'.
      
      Caso positivo, a 'testMessage' recebe 'Verificado!', através do 'innerHTML', a 'testBox' recebe a classe 'hidden' e o 'submitButton' é habilitado. Se a condição for negativa, os elementos são resetados para uma nova tentativa.`,
      link: 'https://g31-are-you-human.now.sh/',
    },
    {
      id: 'ecoleta',
      icon: 'JavaScript',
      title: 'Ecoleta',
      description:
        'Criado na trilha Starter da primeira #NextLevelWeek da Rocketseat, o Ecoleta é um marketplace de coleta de resíduos. Para esse projeto, utilizamos JavaScript, CSS, HTML, Node.js, Express, Nunjucks e SQLite.',
      secondTitle: 'descrição do projeto',
      secondDescription: `Os pontos cadastrados podem ser encontrados através do link da página principal que redireciona a um modal de busca.. A busca retorna em uma página dinâmica, preenchida com os dados do banco de dados (SQLite), através da template engine Nunjucks. 
      
      Os pontos são cadastrados através de formulário que utilizou, inclusive, uma API dos Correios para preenchimento das cidades correspondentes ao estado selecionado. Nessa minha versão, permito a inclusão de novos pontos para teste da plataforma e o servidor Node.js apaga os novos registros, dois minutos após a inclusão.`,
      link: 'https://euwg-nlw1-ecoleta.glitch.me/',
    },
    {
      id: 'bloco-de-notas',
      icon: 'JavaScript',
      title: 'Bloco de Notas',
      description: `Bloco de notas com textos salvos em formato Markdown, com armazenamento das notas no Local Storage do navegador.`,
      secondTitle: 'descrição do projeto',
      secondDescription: `Feito com JavaScript, biblioteca 'Marked' para formatação do texto salvo e FontAwesome para ícones. O script interage diretamente com dois elementos do DOM: o botão 'Criar Nota' ('.add') e a div '.notes', que são declarados através do 'querySelector' como 'addButton' e 'notesContainer', respectivamente. 
      
      Ao ser iniciado, o script verifica se há notas armazenadas no localStorage, através do método 'getItem' que executa um 'parse' no JSON e retornando-os em um array, caso positivo. Esse array é armazenado na constante 'notes' que é utilizada como condicional para executar um 'forEach' nela mesma executando, para cada nota, a função 'addNewNote' com essa nota como parâmetro.
      
      A função 'addNewNote' cria uma div com a classe 'note', através dos métodos 'createElement' e, posteriormente, 'classList.add'. Os elementos individuais do card são inclusos nela através do métodos 'innerHTML'. Após isso, quatro constantes são criadas, com o 'querySelector', para manipulação e edição da nota: 'markedText', a qual é atribuída a div '.main' onde é exibido o texto formatado; 'textEditor', a qual é atribuída a textarea onde o texto pode ser editado; 'editButton', a qual é atribuída o botão '.edit'; e 'deleteButton', a qual é atribuída o botão '.delete'.
      
      No 'editButton' é adicionado um Listener ('pointerdown') que o método 'classList.toggle' na 'markedText' e na 'textEditor', permitindo a transição entre o campo de edição e o texto salvo, além de usar esse mesmo método para substituir seu ícone (tag 'i'). A nota recebida no parâmetro da função é atribuída ao 'value' da 'textEditor' e ao 'markedText', com o 'innerHTML'.
      
      Um Listener ('input') é utilizado na 'textEditor', fazendo com que o valor substituído seja atribuído a 'markedText', com o 'innerHTML', além de executar a função 'updateLocalStorage()', que atualizada o storage com a nova nota.
      
      Na 'deleteButton' é usado um Listener ('pointerdown') que apaga a respectiva div através do método 'remove()', além de executar a função 'updateLocalStorage()', atualizando o storage, removendo a nota.
      
      A função 'addNewNote' é finalizada com o método 'appendChild' sendo utilizado na 'notesContainer', que faz com que a div criada seja adicionada como filha dela.
      
      A função 'updateLocalStorage', que atualiza os dados no storage, atribui um array com todas as textarea do documento a constante 'notesText' que é percorrida com um 'forEach', para que o valor de cada textarea seja incluso (.push()) no array 'notes', que é armazenado no storage através do método JSON.stringify.
      
      Por fim, um Listener ('pointerdown') no 'addButton' executa a função 'addNewNote', gerando um card em branco, habilitado para edição (classes dinâmicas no botão de edição, na div '.main' e na textarea fazem com que o card seja iniciado dessa maneira, caso a função 'addNewNote' seja executada com parâmetro vazio).`,
      link: 'https://g31-quadro-desenho.now.sh/',
    },
    {
      id: 'calculadora-javascript',
      icon: 'JavaScript',
      title: 'Calculadora',
      description: `Calculadora simples, criada com HTML, CSS e JavaScript.`,
      secondTitle: 'descrição do projeto',
      secondDescription: `Criado com: JavaScript, para validações de entradas de dados, biblioteca math.js, que calcula a expressão exibida na tela e CSS Grid, para distribuir e organizar o layout da tela e dos botões. Os dados digitados são armazenados e exibidos em uma 'textarea' (tela da calculadora) alterando o 'value' do elemento. 
      
      Quando um número é digitado, é feita uma validação (através da função inputNumber()), que verifica se o conteúdo na tela é o resultado de uma expressão recém-calculada. Caso positivo, o número substitui o resultado, iniciando uma nova expressão. Caso contrário, como na presença de um número seguido de um operador, o número é inserido dando continuidade a expressão.
      
      Para a inclusão de um operador, é feita uma outra validação (através da função inputOperator()) que evita a inserção seguida de mais de um operador.
      
      O botão 'C' executa a função clearScreen() que reseta a calculadora para seu estado inicial.
      
      O botão '=' executa a função displayResult(), que utiliza o método 'evaluate()' da biblioteca Math.js, para transformar a string com os números e operadores em uma expressão, retornando seu resultado, além de informar que o conteúdo na tela é um resultado, reiniciando a primeira validação.`,
      link: 'https://g31-calculadora-javascript.now.sh/',
    },
    {
      id: 'pomodoro-timer',
      icon: 'JavaScript',
      title: 'Pomodoro Timer',
      description: `A aplicação permite a customização dos tempos de foco e de pausa, individualmente. É possível iniciar e pausar o timer, além de reiniciar a página ao estado original.`,
      secondTitle: 'descrição do projeto',
      secondDescription: `Criado com: JavaScript e CSS Flexbox. Os elementos de texto dos timers, os botões e os inputs do tempo são selecionados no JavaScript com o método 'querySelector'. 
      
      Os botões executam funções através de Event Listeners que resetam (botão Reset) a página, além de iniciar (botão Iniciar) ou interromper (botão Pausar) a função 'timer', que executa uma série de condicionais nas propriedades 'innerText' dos elementos de texto, realizando o decremento adequado a funcionalidade de timer, manipulando diretamente os dados dos elementos no DOM.
      
      Ao fim dos ciclos de foco e pausa, é exibido um alerta ao usuário, para que ele possa dar sequência ao próximo ciclo. Finalizados os dois, é feito um incremento no contador de ciclos.`,
      link: 'https://g31-pomodoro-timer.now.sh/',
    },
    {
      id: 'app-meditacao',
      icon: 'JavaScript',
      title: 'App de Meditação',
      description: `App para auxiliar a meditação, com dois temas ambientes (e vídeos de fundo correspondentes), três opções de duração e botão play/pause com relógio regressivo.`,
      secondTitle: 'descrição do projeto',
      secondDescription: `Criado com: JavaScript. Os elementos do DOM são capturados no script através do método 'querySelector', além de declaradas a medida da circunferência do círculo animado ao redor do play (outlineLength) e o tempo de duração da aplicação em modo play (fakeDuration). 
      
      Para mudar o tema ambiente, utiliza-se um forEach nos botões capturados e atribui-se um Event Listener (pointerdown) para cada um, que altera as sources do video e do som, através dos atributos 'data-video' e 'data-sound' nos elementos HTML.
      
      Para mudar o tempo, também é utilizado um forEach nos botões, seguidos de Listeners (pointerdown) que alteram a 'fakeDuration', através do atributo 'data-time' nos elementos, além de alterar o texto do relógio regressivo. No botão play, também há um Event Listener (pointerdown), que executa a função 'checkPlaying()', verificando se o som está pausado ou em execução, tomando a ação correspondente com o vídeo de fundo, o som selecionado e o ícone do botão, que alterna entre play e pause.
      
      Por último, é executado o método 'ontimeupdate', no elemento de áudio, que decrementa o relógio, anima o círculo ao redor do botão e retorna o app ao estado original quando a 'fakeDuration' é menor que o tempo de execução, com vídeo e áudio pausados e botão habilitado como play.`,
      link: 'https://g31-app-meditacao.now.sh/',
    },
    {
      id: 'quadro-de-desenho',
      icon: 'JavaScript',
      title: 'Quadro de Desenho',
      description: `Quadro de desenho com variação de tamanho e cor do pincel.`,
      secondTitle: 'descrição do projeto',
      secondDescription: `Criado com: JavaScript. No HTML, o canvas tem medidas fixas a fim de evitar distorções no desenhos. Na barra abaixo, há três elementos que interagem com ele: um input do tipo 'range', que altera o tamanho do pincel (changeBrushSize()); um input do tipo 'color', que altera a cor utilizada (changeBrushColor()); e um botão que limpa o canvas (clearCanvas()). 
      
      Os inputs enviam, como parâmetro, seu valor respectivo, que é aplicado as variáveis ('size' e 'color') utilizadas nas funções de desenho. O botão utiliza o método 'clearRect', do contexto, para limpar a tela.
      
      No canvas, foram inclusos quatro Listeners: para registrar a posição inicial de um traço ('pointerdown'); para interromper o traço e resetar a posição utilizada ('pointerup'); para detectar movimentos no touch e convertê-los para um evento de mouse ('touchmove'); e para detectar movimento do mouse ('mousemove') e, havendo toque/clique no trajeto, executar as funções de desenho: 'drawLine' e 'drawCircle', utilizadas em conjunto para gerar um traçado suave e com curvas, conforme as ações do usuário.
      
      A 'drawcircle' tem como parâmetro a posição (x,y) atual do ponteiro, desenhando círculos com diâmetro conforme valor do input e preenchidos com a cor selecionada, a cada ciclo da função.
      
      A 'drawLine' tem como parâmetro as posições (x,y) do início do toque (listener 'pointerdown') e do final do toque (listener 'pointerup'), traçando uma linha com a largura conforme valor do input e com a cor selecionada.
      
      As propriedades e métodos utilizados nas duas funções são nativas do método 'getContext' que foi atribuído em '2d' a constante 'context'.`,
      link: 'https://g31-quadro-desenho.now.sh/',
    },
    {
      id: 'iza',
      icon: 'CSS3',
      title: 'Iza',
      description:
        'Fanpage criada com HTML e CSS, utilizando técnicas de CSS Grid e Flexbox, tornando a página totalmente responsiva em diferentes dispositivos.',
      secondTitle: 'descrição do projeto',
      secondDescription: `Desde álbuns de estúdios a singles e participações, o site conta com o acervo da cantora, com links para as principais plataformas de streaming. 
        
        A videografia da cantora também está disponível na página, redirecionando o usuário através de um link para o do canal oficial no YouTube.
        
        A página conta também com os links para as redes sociais da Iza, bem como para seus perfis nas plataformas de streaming.`,
      link: 'https://iza.now.sh/',
    },
    {
      id: 'rmgeradores',
      icon: 'JavaScript',
      title: 'RM Geradores',
      description:
        "Site institucional da RM Geradores, criado em formato 'one page layout'. A ideia por trás desse trabalho visava criar algo que fosse funcional e passasse uma mensagem rápida e direta, sem tomar muito tempo dos clientes.",
      secondTitle: 'descrição do projeto',
      secondDescription: `A seção de serviços conta com um script que exibe de forma dinâmica as informações referentes a cada tópico, sem a necessidade de redirecionar o cliente para outra(s) página(s). 
        
        Indo contra o usual do segmento, que costuma usar textos estáticos para as informações de contato, a RM conta com botões funcionais que levam os visitantes em contato direto com a equipe.
        
        A página foi criada com os princípios de 'mobile-first, para que o uso dela fosse otimizado em dispositivos móveis, melhorando a usabilidade e a experiência dos clientes, parceiros e colaboradores.`,
      link: 'https://rmgeradores.com.br/',
    },
    {
      id: 'knowleed',
      icon: 'CSS3',
      title: 'Knowleed',
      description:
        'Projeto criado durante o Hackathon Mega Hack 3.0 da Shawee, atendendo o desafio da Árvore Educação e alcançando o Top 20 nele.',
      secondTitle: 'descrição do projeto',
      secondDescription: `Uma plataforma de leitura gamificada com sistemas de pontuação, nível, conquistas e ranking, premiando os alunos mais assíduos na plataforma com recompensas no mundo real. 
        
        Para construir a aplicação, utilizamos HTML, CSS, JavaScript, Node.js, Express e Nunjucks.
        
        É fundamental que você tenha um destino para tudo o que for codar.Mesmo que seja pelo aprendizado, é super importante dar um norte ao produto. Se não há um comprador definido, para sua aplicação, dificilmente você vende.E nós alcançamos nosso objetivo nesse desafio, com um grande trabalho de pesquisa, ideação, definição de personas, estudo de mercado e entendendo o comportamento de potenciais usuários.
        
        Equipe:
        Nayra Cruz - UX
        Daniel Meiato - PM
        Michel Bernardo - Dev
        Thiago Pederzolli - Dev'`,
      link: 'https://www.youtube.com/watch?v=cAm7oerJ_sY',
    },
  ],
})
