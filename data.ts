
import { Recipe, Category, GuideSection } from './types';

// Helper to generate a consistent ID
const id = () => Math.random().toString(36).substr(2, 9);

// Helper to generate a FAIL-SAFE, Realistic image URL based on the recipe title
// Uses Pollinations.ai with FLUX model for photorealism
const getRecipeImage = (title: string, category: string) => {
  const prompt = `delicious ${title}, ${category}, professional food photography, 4k, highly detailed, michelin star plating, cinematic lighting, photorealistic`;
  const encodedPrompt = encodeURIComponent(prompt);
  const seed = title.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0);
  return `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1080&height=720&model=flux&nologo=true&seed=${Math.abs(seed)}`;
};

export const recipes: Recipe[] = [
  // --- PEQUENO ALMOÇO (16 Receitas) ---
  {
    id: id(),
    title: "Panqueca Carnívora",
    category: Category.BREAKFAST,
    prepTime: "15 min",
    calories: 450,
    ingredients: ["2 Ovos grandes", "60g Queijo Creme (tipo Philadelphia)", "Manteiga para fritar", "Uma pitada de sal"],
    instructions: [
      "Coloque os ovos, o queijo creme e o sal num liquidificador.",
      "Bata em velocidade alta por 30-45 segundos até a mistura ficar completamente lisa e espumosa.",
      "Aqueça uma frigideira antiaderente em lume médio e unte com um pouco de manteiga.",
      "Verta uma pequena quantidade da massa (cerca de 1/3) no centro da frigideira.",
      "Deixe cozinhar por 2-3 minutos. Vire apenas quando surgirem pequenas bolhas na superfície e as bordas estiverem firmes.",
      "Cozinhe do outro lado por mais 1 minuto até dourar.",
      "Repita o processo com o resto da massa e sirva empilhado com manteiga extra no topo."
    ],
    tips: "Se a massa estiver muito líquida, deixe repousar 2 minutos antes de fritar. Pode adicionar canela se não for estrito.",
    image: getRecipeImage("Carnivore Pancakes stack butter", "breakfast")
  },
  {
    id: id(),
    title: "Ovos Mexidos com Carne Picada",
    category: Category.BREAKFAST,
    prepTime: "20 min",
    calories: 550,
    ingredients: ["3 Ovos grandes", "150g Carne Picada (20% gordura)", "Sal a gosto", "1 colher de sopa de Manteiga"],
    instructions: [
      "Aqueça uma frigideira larga em lume médio-alto e adicione a carne picada.",
      "Com uma colher de pau, vá separando a carne enquanto frita para garantir que fica soltinha e bem dourada.",
      "Quando a carne estiver cozinhada, reduza o lume para médio-baixo e adicione a manteiga.",
      "Numa tigela à parte, bata ligeiramente os ovos e verta-os sobre a carne na frigideira.",
      "Mexa suavemente e constantemente, empurrando as bordas para o centro, até os ovos estarem cozinhados mas ainda brilhantes e húmidos.",
      "Tempere com sal apenas no final para evitar que os ovos libertem água."
    ],
    tips: "Use carne com 20% gordura para mais saciedade e sabor.",
    image: getRecipeImage("Scrambled Eggs with Ground Beef", "breakfast")
  },
  {
    id: id(),
    title: "Café Carnívoro (Bulletproof)",
    category: Category.BREAKFAST,
    prepTime: "5 min",
    calories: 300,
    ingredients: ["200ml Café quente recém tirado", "1 c.sopa Manteiga sem sal", "1 c.sopa Óleo MCT (opcional)", "1 pitada de sal (opcional)"],
    instructions: [
      "Prepare o seu café preto bem quente.",
      "Verta o café para o copo do liquidificador (cuidado com o vapor).",
      "Adicione a manteiga e o óleo MCT.",
      "Bata na velocidade máxima por 20 a 30 segundos. Isto é crucial: é a alta velocidade que emulsiona a gordura e cria a espuma cremosa tipo latte.",
      "Sirva imediatamente enquanto está espumoso."
    ],
    tips: "Nunca apenas misture com colher; a emulsão no liquidificador é essencial para a digestão e textura.",
    image: getRecipeImage("Bulletproof Coffee butter creamy", "drink")
  },
  {
    id: id(),
    title: "Cereal de Bacon e Queijo",
    category: Category.BREAKFAST,
    prepTime: "15 min",
    calories: 500,
    ingredients: ["4 fatias de Bacon", "1 ou 2 Ovos", "50g Queijo ralado grosso"],
    instructions: [
      "Frite as fatias de bacon até ficarem extremamente crocantes e estaladiças. Retire e deixe arrefecer num papel absorvente.",
      "Na gordura do bacon que ficou na frigideira, estrele os ovos mantendo a gema mole.",
      "Pique o bacon frio em pedaços pequenos (tamanho de cereal).",
      "Numa tigela, coloque o bacon picado e o queijo ralado.",
      "Coloque os ovos quentes por cima de tudo.",
      "Misture vigorosamente com o garfo: o calor do ovo vai derreter o queijo e criar um 'mingau' salgado delicioso."
    ],
    tips: "Use um queijo que derreta bem, como Gouda, Cheddar ou Flamengo.",
    image: getRecipeImage("Crispy Bacon and Cheese Bowl with Egg", "breakfast")
  },
  {
    id: id(),
    title: "Omelete de Presunto e Queijo",
    category: Category.BREAKFAST,
    prepTime: "15 min",
    calories: 450,
    ingredients: ["3 Ovos", "3 Fatias de Presunto de qualidade", "Queijo Cheddar fatiado", "Manteiga"],
    instructions: [
      "Bata os ovos vigorosamente numa tigela até espumarem um pouco.",
      "Aqueça a manteiga numa frigideira antiaderente em lume médio.",
      "Verta os ovos e deixe assentar por alguns segundos. Incline a frigideira para cobrir todo o fundo.",
      "Quando a base estiver firme mas o topo ainda ligeiramente líquido, coloque o presunto e o queijo numa metade.",
      "Dobre a omelete ao meio cobrindo o recheio.",
      "Deixe cozinhar mais 30 segundos para derreter o queijo e sirva."
    ],
    tips: "Não cozinhe demais os ovos; uma boa omelete deve ser húmida por dentro (baveuse).",
    image: getRecipeImage("Ham and Cheese Omelette fluffy", "breakfast")
  },
  {
    id: id(),
    title: "Bife com Ovo a Cavalo",
    category: Category.BREAKFAST,
    prepTime: "20 min",
    calories: 600,
    ingredients: ["1 Bife fino (Vazia ou Alcatra)", "2 Ovos", "2 colheres de sopa de Manteiga", "Sal grosso"],
    instructions: [
      "Tempere o bife com sal grosso 10 minutos antes.",
      "Aqueça bem uma frigideira (de preferência ferro fundido) em lume alto com uma colher de manteiga.",
      "Sele o bife por 1-2 minutos de cada lado (dependendo da espessura) para ficar suculento. Retire o bife para o prato.",
      "Baixe o lume para médio. Adicione o resto da manteiga na mesma frigideira (vai pegar o sabor da carne).",
      "Estrele os ovos na manteiga, cozinhando as claras mas deixando as gemas moles.",
      "Coloque os ovos cuidadosamente sobre o bife e regue com o molho de manteiga da frigideira."
    ],
    tips: "Use o pão (se comer) ou a própria carne para molhar na gema.",
    image: getRecipeImage("Steak and Eggs breakfast", "meat")
  },
  {
    id: id(),
    title: "Waffles de Queijo (Chaffles)",
    category: Category.BREAKFAST,
    prepTime: "15 min",
    calories: 400,
    ingredients: ["1 Ovo grande", "1 chávena de Queijo Mozzarella ralado", "Opcional: Bacon picadinho na massa"],
    instructions: [
      "Pré-aqueça a sua máquina de waffles até estar bem quente.",
      "Numa tigela pequena, bata o ovo e misture bem com o queijo ralado.",
      "Polvilhe um pouco de queijo extra diretamente na grelha da máquina (para ficar crocante).",
      "Verta a mistura no centro e espalhe ligeiramente.",
      "Feche e deixe cozinhar por 4 a 5 minutos. Não abra antes! Espere até parar de sair vapor.",
      "Retire e deixe arrefecer numa grelha por 1 minuto para ficar crocante."
    ],
    tips: "Estes waffles servem perfeitamente como 'pão' para sanduíches de carne.",
    image: getRecipeImage("Cheese Waffles Chaffles", "breakfast")
  },
  {
    id: id(),
    title: "Ovos Cozidos Esmagados",
    category: Category.BREAKFAST,
    prepTime: "15 min",
    calories: 350,
    ingredients: ["3 Ovos", "2 c.sopa Manteiga de pasto", "Sal marinho"],
    instructions: [
      "Coloque os ovos em água fria e leve ao lume. Quando ferver, conte 8 minutos.",
      "Retire os ovos e passe por água fria apenas para conseguir descascar (queremos que continuem quentes).",
      "Coloque os ovos numa tigela e adicione a manteiga fria.",
      "Com um garfo, esmague grosseiramente os ovos misturando com a manteiga.",
      "O calor residual dos ovos vai derreter a manteiga, criando um creme rico.",
      "Tempere generosamente com sal e sirva morno."
    ],
    tips: "Comida de conforto perfeita para dias frios ou estômagos sensíveis.",
    image: getRecipeImage("Mashed Boiled Eggs with Butter", "breakfast")
  },
  {
    id: id(),
    title: "Salsichas Frescas com Ovos",
    category: Category.BREAKFAST,
    prepTime: "20 min",
    calories: 500,
    ingredients: ["2 Salsichas frescas de porco (toscana)", "2 Ovos", "1 c.chá de Banha"],
    instructions: [
      "Com uma faca, faça um corte longitudinal nas salsichas e retire a pele.",
      "Aqueça a banha numa frigideira média.",
      "Coloque o recheio da salsicha na frigideira e vá desfazendo com a colher em pedaços irregulares.",
      "Deixe fritar bem até a carne ficar dourada e crocante nas pontas.",
      "Abra espaços no meio da carne e parta os ovos nesses espaços.",
      "Tape a frigideira e deixe cozinhar em lume baixo até as claras firmarem (ou mexa tudo se preferir ovos mexidos)."
    ],
    tips: "Verifique sempre os ingredientes das salsichas para evitar açúcares escondidos.",
    image: getRecipeImage("Sausage and Eggs Scramble", "breakfast")
  },
  {
    id: id(),
    title: "Muffins de Ovo e Bacon",
    category: Category.BREAKFAST,
    prepTime: "30 min",
    calories: 150,
    ingredients: ["6 Ovos", "6 fatias de Bacon", "Queijo Cheddar ralado", "Manteiga para untar"],
    instructions: [
      "Pré-aqueça o forno a 180°C. Unte generosamente uma forma de muffins.",
      "Corte o bacon em pedaços pequenos e frite ligeiramente (meia cozedura).",
      "Em cada cavidade da forma, coloque um pouco de bacon e queijo no fundo.",
      "Num jarro, bata os ovos com uma pitada de sal e verta sobre o recheio até 3/4 da altura.",
      "Leve ao forno por 20 minutos ou até estarem dourados e crescidos.",
      "Deixe arrefecer um pouco antes de desenformar, pois eles vão baixar ligeiramente."
    ],
    tips: "Faça em grande quantidade ao domingo para ter pequenos-almoços prontos para a semana.",
    image: getRecipeImage("Egg and Bacon Muffins", "breakfast")
  },
  {
    id: id(),
    title: "Smoothie de Gemas",
    category: Category.BREAKFAST,
    prepTime: "5 min",
    calories: 300,
    ingredients: ["3 Gemas de ovo cruas", "100ml Natas ou Leite de Coco", "3 Pedras de Gelo", "Gotas de extrato de baunilha"],
    instructions: [
      "Separe as gemas das claras (guarde as claras para outra receita).",
      "Coloque as gemas, as natas, o gelo e a baunilha no liquidificador.",
      "Bata na velocidade máxima até o gelo estar triturado e a bebida ficar espessa e amarela pálida.",
      "Beba imediatamente."
    ],
    tips: "Se tiver receio de ovos crus, use ovos pasteurizados. Esta bebida é uma bomba de nutrientes.",
    image: getRecipeImage("Yellow Egg Yolk Smoothie Glass", "drink")
  },
  {
    id: id(),
    title: "Torrada de Queijo Coalho",
    category: Category.BREAKFAST,
    prepTime: "10 min",
    calories: 300,
    ingredients: ["Fatias grossas de Queijo Coalho", "Orégãos secos (opcional)"],
    instructions: [
      "Corte o queijo coalho em fatias com cerca de 1cm de espessura.",
      "Aqueça uma frigideira antiaderente em lume médio (não precisa de gordura).",
      "Coloque as fatias de queijo. Deixe cozinhar sem mexer por 2-3 minutos até formar uma crosta dourada escura.",
      "Vire e faça o mesmo do outro lado.",
      "Retire e polvilhe com orégãos."
    ],
    tips: "O segredo é deixar a crosta formar bem antes de tentar virar, senão o queijo pega.",
    image: getRecipeImage("Grilled Cheese Curd Slice Golden", "breakfast")
  },
  {
    id: id(),
    title: "Crepe de Ovo Fino",
    category: Category.BREAKFAST,
    prepTime: "10 min",
    calories: 150,
    ingredients: ["2 Ovos", "1 colher de sopa de Água fria", "1 c.chá de Manteiga", "Sal"],
    instructions: [
      "Numa tigela, bata os ovos com a água e o sal. A água ajuda a tornar o crepe mais fino e flexível.",
      "Aqueça uma frigideira antiaderente larga em lume médio e unte levemente com manteiga.",
      "Verta a mistura e rode imediatamente a frigideira para cobrir todo o fundo numa camada fina.",
      "Deixe cozinhar até as bordas começarem a levantar (cerca de 1-2 minutos).",
      "Com cuidado, vire e cozinhe por mais 30 segundos.",
      "Pode enrolar assim ou rechear com queijo e presunto."
    ],
    tips: "Use estes crepes como substituto de tortilhas para tacos ou wraps.",
    image: getRecipeImage("Thin Egg Crepe Omelette", "breakfast")
  },
  {
    id: id(),
    title: "Iogurte de Nata Caseiro",
    category: Category.BREAKFAST,
    prepTime: "15 min + 24h",
    calories: 400,
    ingredients: ["500ml Natas frescas (mínimo 35% gordura)", "1 colher de sopa de Iogurte natural (com culturas vivas) ou fermento"],
    instructions: [
      "Aqueça as natas numa panela até atingirem cerca de 40°C (morno ao toque, não quente).",
      "Retire do lume e misture bem a colher de iogurte/fermento.",
      "Verta para um frasco de vidro limpo e esterilizado.",
      "Cubra com um pano e mantenha num local morno (como dentro do forno desligado com a luz acesa) por 24 horas.",
      "Após fermentar, leve ao frigorífico para firmar antes de consumir."
    ],
    tips: "Este iogurte é muito mais rico em gordura e pobre em lactose do que os de compra.",
    image: getRecipeImage("Heavy Cream Yogurt Jar", "dairy")
  },
  {
    id: id(),
    title: "Pudim de Ovos Express",
    category: Category.BREAKFAST,
    prepTime: "5 min",
    calories: 250,
    ingredients: ["2 Ovos", "50ml Natas", "Canela em pó", "Adoçante (opcional)"],
    instructions: [
      "Numa caneca que possa ir ao microondas, parta os ovos e junte as natas.",
      "Bata bem com um garfo até ficar homogéneo.",
      "Leve ao microondas em potência média por 1 minuto. Pare, veja se precisa de mais.",
      "Cozinhe em incrementos de 30 segundos até firmar, mas cuidado para não explodir.",
      "Polvilhe com canela e coma quente."
    ],
    tips: "Vigie constantemente o microondas, pois a mistura sobe rapidamente.",
    image: getRecipeImage("Egg Custard Pudding Mug", "dessert")
  },
  {
    id: id(),
    title: "Ovos Benedict Carnívoros",
    category: Category.BREAKFAST,
    prepTime: "25 min",
    calories: 600,
    ingredients: ["2 Ovos", "200g Carne Picada", "3 Gemas (para o molho)", "100g Manteiga derretida (para o molho)", "Limão"],
    instructions: [
      "Molde a carne picada em dois discos achatados e grelhe-os até estarem cozinhados. Reserve (serão a 'base').",
      "Faça os ovos escalfados em água quente com vinagre por 3-4 minutos.",
      "Prepare o Molho Holandês: Bata as 3 gemas com umas gotas de limão em banho-maria até engrossar ligeiramente. Vá adicionando a manteiga derretida em fio, batendo sempre, até ficar um creme espesso.",
      "Montagem: Coloque o hambúrguer no prato, o ovo escalfado por cima e cubra generosamente com o molho holandês."
    ],
    tips: "Um pequeno-almoço de luxo para o fim de semana.",
    image: getRecipeImage("Carnivore Eggs Benedict on Meat Patty", "breakfast")
  },

  // --- CARNES VERMELHAS (30 Receitas) ---
  {
    id: id(),
    title: "Bife da Vazia com Manteiga de Alho",
    category: Category.RED_MEAT,
    prepTime: "20 min",
    calories: 650,
    ingredients: ["1 Bife da Vazia alto (New York Strip)", "2 colheres de sopa de Manteiga", "1 c.chá Alho em pó", "Sal grosso"],
    instructions: [
      "Retire o bife do frio 30 minutos antes e seque bem a superfície com papel de cozinha.",
      "Aqueça uma frigideira de ferro em lume máximo até começar a fumegar.",
      "Tempere o bife com sal grosso apenas no momento de ir para a frigideira.",
      "Coloque o bife e não mexa por 3 minutos para criar uma crosta escura.",
      "Vire e cozinhe mais 2-3 minutos (para mal passado).",
      "Retire o bife para uma tábua. Misture a manteiga com o alho em pó e coloque sobre a carne quente.",
      "Deixe descansar obrigatoriamente 5 minutos antes de cortar."
    ],
    tips: "O descanso da carne é o passo mais importante para manter os sucos.",
    image: getRecipeImage("Sirloin Steak with Garlic Butter", "meat")
  },
  {
    id: id(),
    title: "Costeletas de Cordeiro Grelhadas",
    category: Category.RED_MEAT,
    prepTime: "25 min",
    calories: 500,
    ingredients: ["4 Costeletas de Cordeiro", "Sal Grosso", "Alecrim fresco (opcional)", "Azeite"],
    instructions: [
      "Tempere as costeletas com sal e um fio de azeite. Pressione o alecrim na carne.",
      "Aqueça bem a grelha ou frigideira.",
      "Comece por colocar as costeletas 'em pé', com a gordura virada para baixo, para derreter e tostar a gordura por 2-3 minutos.",
      "Deite as costeletas e grelhe 2-3 minutos de cada lado.",
      "O cordeiro deve ser servido rosado no interior para não ficar seco."
    ],
    tips: "A gordura do cordeiro tem um sabor intenso e delicioso quando bem tostada.",
    image: getRecipeImage("Grilled Lamb Chops", "meat")
  },
  {
    id: id(),
    title: "Picanha no Forno (Inteira)",
    category: Category.RED_MEAT,
    prepTime: "1h",
    calories: 800,
    ingredients: ["1 Peça de Picanha inteira (1kg-1.2kg)", "Sal grosso abundante"],
    instructions: [
      "Pré-aqueça o forno a 180°C.",
      "Com uma faca afiada, faça cortes em losango na capa de gordura da picanha (sem chegar à carne).",
      "Esfregue sal grosso em toda a peça, especialmente nas fendas da gordura.",
      "Aqueça uma frigideira grande. Sele a picanha com a gordura para baixo até ficar dourada.",
      "Transfira para uma assadeira, com a gordura virada para cima.",
      "Asse por cerca de 40-50 minutos (use um termómetro para atingir 54°C internos para mal passado).",
      "Deixe descansar 15 minutos antes de fatiar."
    ],
    tips: "Fatie sempre contra as fibras da carne para garantir a maciez.",
    image: getRecipeImage("Whole Roasted Picanha Steak", "meat")
  },
  {
    id: id(),
    title: "Hambúrguer Recheado com Cheddar",
    category: Category.RED_MEAT,
    prepTime: "25 min",
    calories: 700,
    ingredients: ["200g Carne de vaca picada", "1 Cubo grande de queijo Cheddar", "Sal", "Pimenta (opc)"],
    instructions: [
      "Divida a carne em duas partes iguais e forme dois discos finos.",
      "Coloque o cubo de queijo no centro de um disco.",
      "Cubra com o outro disco de carne e aperte muito bem as bordas para selar o queijo lá dentro.",
      "Tempere o exterior com sal.",
      "Grelhe em lume médio-alto por 4-5 minutos de cada lado. Se o lume estiver muito alto, queima fora e o queijo não derrete dentro.",
      "Sirva imediatamente."
    ],
    tips: "Cuidado ao dar a primeira dentada, o queijo no interior estará muito quente!",
    image: getRecipeImage("Cheddar Stuffed Burger Patty", "meat")
  },
  {
    id: id(),
    title: "Entrecosto Assado (Só Sal)",
    category: Category.RED_MEAT,
    prepTime: "2h 15min",
    calories: 900,
    ingredients: ["1 Peça de Entrecosto de Porco", "Sal marinho abundante"],
    instructions: [
      "Pré-aqueça o forno a 160°C (lume baixo).",
      "Seque bem o entrecosto e cubra generosamente com sal de ambos os lados.",
      "Coloque num tabuleiro e cubra com papel de alumínio.",
      "Asse lentamente por 1h30m. Isto vai amaciar a carne.",
      "Retire o alumínio, aumente o forno para 220°C e deixe assar mais 15-20 minutos para a gordura ficar crocante e dourada."
    ],
    tips: "A simplicidade do sal realça o sabor doce natural da gordura de porco.",
    image: getRecipeImage("Roasted Pork Ribs Salt", "meat")
  },
  {
    id: id(),
    title: "Carne Picada Refogada Simples",
    category: Category.RED_MEAT,
    prepTime: "20 min",
    calories: 500,
    ingredients: ["500g Carne picada (20% gordura)", "Sal", "1 colher de sopa de Banha"],
    instructions: [
      "Aqueça a banha numa frigideira grande em lume alto.",
      "Adicione a carne picada. O segredo aqui é não mexer logo. Deixe criar uma crosta castanha no fundo.",
      "Mexa, vire e deixe dourar novamente. Queremos fritar a carne, não cozê-la no vapor.",
      "Continue até toda a carne estar bem dourada e crocante em alguns pontos.",
      "Tempere com sal apenas no final.",
      "Se sobrar gordura no fundo, verta sobre a carne ao servir."
    ],
    tips: "A 'crosta' castanha (reação de Maillard) é onde está todo o sabor.",
    image: getRecipeImage("Ground Beef Skillet Cooked", "meat")
  },
  {
    id: id(),
    title: "Steak Tartare Clássico",
    category: Category.RED_MEAT,
    prepTime: "20 min",
    calories: 400,
    ingredients: ["200g Lombo de Vaca fresquíssimo", "1 Gema de ovo", "Flor de sal", "Pimenta preta", "Gotas de molho inglês (opc)"],
    instructions: [
      "Coloque a carne no congelador 15 minutos antes para firmar e facilitar o corte.",
      "Corte a carne em cubos minúsculos com uma faca muito afiada (não use carne moída de máquina, a textura é diferente).",
      "Numa tigela gelada, misture a carne picada com sal, pimenta e molho inglês.",
      "Molde num disco no prato.",
      "Faça uma pequena cova no topo e coloque a gema de ovo crua.",
      "Misture tudo no prato antes de comer."
    ],
    tips: "Faça esta receita apenas se confiar a 100% na origem e frescura da carne.",
    image: getRecipeImage("Steak Tartare Raw Egg", "meat")
  },
  {
    id: id(),
    title: "Costela de Vaca na Pressão",
    category: Category.RED_MEAT,
    prepTime: "1h 15m",
    calories: 800,
    ingredients: ["1kg Costela de vaca em pedaços", "Sal grosso", "1/2 copo de Água"],
    instructions: [
      "Aqueça a panela de pressão destapada e sele os pedaços de costela na própria gordura até dourarem.",
      "Adicione o sal e a água (pouca água, a carne vai largar sucos).",
      "Tape a panela. Quando começar a apitar, baixe o lume e conte 45 a 60 minutos.",
      "Deixe a pressão sair naturalmente.",
      "A carne deve estar a soltar-se do osso. Se o molho estiver muito líquido, ferva destapado uns minutos para reduzir."
    ],
    tips: "O caldo resultante é rico em colagénio. Guarde-o se sobrar.",
    image: getRecipeImage("Pressure Cooker Beef Ribs", "meat")
  },
  {
    id: id(),
    title: "Língua de Vaca Estufada",
    category: Category.RED_MEAT,
    prepTime: "3h 30m",
    calories: 600,
    ingredients: ["1 Língua de vaca inteira", "Banha", "Sal", "1 Cebola inteira (apenas para sabor no caldo, não comer)"],
    instructions: [
      "Lave bem a língua. Coloque numa panela grande com água, sal e a cebola.",
      "Cozinhe por 2 a 3 horas até estar macia (espete um garfo).",
      "Retire da água e, enquanto ainda está quente, remova a pele grossa branca (sai facilmente quente).",
      "Corte a língua em fatias grossas.",
      "Numa frigideira, aqueça a banha e frite as fatias de língua até dourarem de ambos os lados."
    ],
    tips: "A língua é uma das carnes mais ricas em gordura e tem uma textura amanteigada única.",
    image: getRecipeImage("Stewed Beef Tongue Sliced", "meat")
  },
  {
    id: id(),
    title: "Rins de Vaca Salteados",
    category: Category.RED_MEAT,
    prepTime: "40 min",
    calories: 350,
    ingredients: ["500g Rins de vaca", "Vinagre", "3 colheres de sopa de Manteiga", "Sal"],
    instructions: [
      "Limpe bem os rins, retirando as partes brancas do centro. Corte em cubos.",
      "Deixe de molho em água com vinagre por 20 minutos para suavizar o sabor. Escorra e seque bem.",
      "Aqueça a manteiga numa frigideira até espumar.",
      "Adicione os rins e salteie em lume alto rapidamente (3-4 minutos).",
      "Tempere com sal no final.",
      "Não cozinhe demais ou ficarão com textura de borracha."
    ],
    tips: "Órgãos são os 'multivitamínicos' da natureza. Tente incluir semanalmente.",
    image: getRecipeImage("Sauteed Beef Kidneys", "meat")
  },
  {
    id: id(),
    title: "Almôndegas de Carne e Bacon",
    category: Category.RED_MEAT,
    prepTime: "40 min",
    calories: 600,
    ingredients: ["400g Carne picada", "100g Bacon cru moído ou picado muito fino", "1 Ovo", "Sal"],
    instructions: [
      "Numa tigela, misture a carne, o bacon picado, o ovo e o sal. Amasse bem com as mãos.",
      "Faça bolinhas do tamanho de bolas de golfe.",
      "Opção 1 (Forno): Asse a 200°C por 20-25 minutos.",
      "Opção 2 (Frigideira): Frite em banha em lume médio, rodando as almôndegas para dourarem por igual.",
      "Certifique-se que estão cozinhadas no centro."
    ],
    tips: "O bacon adiciona a gordura e o sabor fumado que falta à carne picada simples.",
    image: getRecipeImage("Meatballs Beef and Bacon", "meat")
  },
  {
    id: id(),
    title: "Medalhões com Tutano",
    category: Category.RED_MEAT,
    prepTime: "30 min",
    calories: 700,
    ingredients: ["2 Medalhões de lombo (filé mignon)", "2 Ossos de cana com tutano", "Sal grosso"],
    instructions: [
      "Asse os ossos de tutano no forno a 220°C por 15-20 minutos até o tutano borbulhar e soltar das bordas.",
      "Enquanto isso, grelhe os medalhões de lombo em lume alto (o lombo é magro, não passe demais).",
      "Coloque os bifes no prato.",
      "Com uma colher, retire o tutano derretido de dentro do osso e coloque sobre o bife como se fosse manteiga.",
      "Tempere com flor de sal."
    ],
    tips: "Esta é a combinação suprema de proteína magra com gordura de alta qualidade.",
    image: getRecipeImage("Steak Medallions with Bone Marrow", "meat")
  },
  {
    id: id(),
    title: "Bife de Alcatra Grelhado",
    category: Category.RED_MEAT,
    prepTime: "20 min",
    calories: 500,
    ingredients: ["2 Bifes de Alcatra", "Sal grosso", "Azeite para untar"],
    instructions: [
      "Deixe a carne atingir a temperatura ambiente.",
      "Pincele os bifes com um pouco de azeite e cubra com sal grosso.",
      "Aqueça o grelhador até estar muito quente.",
      "Grelhe 3 a 4 minutos de cada lado. A alcatra é saborosa mas pode ficar rija se passar do ponto.",
      "Deixe descansar antes de servir."
    ],
    tips: "Um corte económico com excelente sabor a carne.",
    image: getRecipeImage("Grilled Rump Steak", "meat")
  },
  {
    id: id(),
    title: "Carne de Porco à Alentejana (Carnívora)",
    category: Category.RED_MEAT,
    prepTime: "1h",
    calories: 700,
    ingredients: ["500g Carne de porco em cubos (rojões)", "3 colheres de sopa de Banha", "Massa de pimentão (opcional)", "Sal"],
    instructions: [
      "Tempere a carne com sal e massa de pimentão (se usar) 30 minutos antes.",
      "Derreta a banha numa frigideira funda.",
      "Adicione a carne e deixe fritar lentamente em lume médio. A carne vai soltar água e cozer primeiro.",
      "Quando a água evaporar, a carne vai começar a fritar na banha.",
      "Deixe fritar até ficar bem dourada e crocante por fora.",
      "Retire e sirva (sem as batatas e amêijoas tradicionais)."
    ],
    tips: "A verdadeira 'fast food' portuguesa saudável.",
    image: getRecipeImage("Fried Pork Cubes Portuguese", "meat")
  },
  {
    id: id(),
    title: "Espetadas de Coração de Vaca",
    category: Category.RED_MEAT,
    prepTime: "25 min",
    calories: 400,
    ingredients: ["500g Coração de vaca limpo", "Vinagre", "Sal", "Azeite"],
    instructions: [
      "Limpe o coração de peles e gorduras duras. Corte em cubos de 3cm.",
      "Tempere com sal e um pouco de vinagre.",
      "Enfie os cubos em espetos de madeira ou metal.",
      "Grelhe em lume forte, rodando sempre, por cerca de 5-7 minutos.",
      "O coração é um músculo denso, deve ser servido ligeiramente mal passado para não endurecer."
    ],
    tips: "Rico em CoQ10 e uma das carnes mais baratas do talho.",
    image: getRecipeImage("Beef Heart Skewers grilled", "meat")
  },
  {
    id: id(),
    title: "Chouriço Assado em Canoa",
    category: Category.RED_MEAT,
    prepTime: "15 min",
    calories: 500,
    ingredients: ["1 Chouriço de carne de qualidade", "Álcool etílico (para assar)"],
    instructions: [
      "Faça cortes superficiais na pele do chouriço (sem cortar até ao fim).",
      "Coloque o chouriço num assador de barro.",
      "Verta álcool no fundo do assador.",
      "Acenda o fogo com cuidado.",
      "Vá virando o chouriço com um garfo até a pele estar preta e estaladiça e o interior quente."
    ],
    tips: "A pele crocante é a melhor parte. Escolha chouriços com poucos aditivos.",
    image: getRecipeImage("Roasted Portuguese Chorizo Fire", "meat")
  },
  {
    id: id(),
    title: "Bifanas no Prato",
    category: Category.RED_MEAT,
    prepTime: "25 min",
    calories: 550,
    ingredients: ["4 Bifanas de porco cortadas muito finas", "2 colheres de sopa de Banha", "3 dentes de Alho esmagados", "Sal e Pimenta"],
    instructions: [
      "Tempere as bifanas com sal e pimenta.",
      "Aqueça a banha na frigideira e junte os dentes de alho esmagados com casca para aromatizar a gordura.",
      "Frite as bifanas rapidamente em lume forte (1-2 minutos de cada lado). Não encha a frigideira, faça por turnos.",
      "No final, junte todas as bifanas na frigideira, baixe o lume e deixe apurar os sucos por 1 minuto.",
      "Sirva com o molho da frigideira."
    ],
    tips: "As bifanas devem ser cortadas quase transparentes para ficarem tenras.",
    image: getRecipeImage("Pork Bifanas Steak Plate", "meat")
  },
  {
    id: id(),
    title: "Carne Seca com Manteiga",
    category: Category.RED_MEAT,
    prepTime: "40 min",
    calories: 600,
    ingredients: ["400g Carne seca (charque)", "3 colheres de sopa de Manteiga ou Ghee"],
    instructions: [
      "Corte a carne seca em cubos e ferva em água por 20 minutos para retirar o excesso de sal. Escorra.",
      "Desfie a carne ou bata num pilão para soltar as fibras.",
      "Aqueça a manteiga numa frigideira.",
      "Adicione a carne desfiada e frite, mexendo sempre, até ficar crocante e dourada.",
      "Sirva como prato principal ou snack."
    ],
    tips: "Sabor intenso e salgado, ótimo para repor eletrólitos.",
    image: getRecipeImage("Dried Beef Jerky with Butter", "meat")
  },
  {
    id: id(),
    title: "T-Bone Steak na Chapa",
    category: Category.RED_MEAT,
    prepTime: "25 min",
    calories: 800,
    ingredients: ["1 T-Bone Steak grande (aprox. 4cm altura)", "Sal grosso", "Pimenta preta"],
    instructions: [
      "Deixe a carne à temperatura ambiente por pelo menos 30 minutos.",
      "Seque bem a carne. Tempere generosamente com sal e pimenta.",
      "Aqueça uma chapa ou frigideira de ferro até estar extremamente quente.",
      "Coloque o T-Bone. Sele por 4-5 minutos de um lado sem mexer.",
      "Vire e sele por mais 3-4 minutos do outro lado.",
      "Segure o bife na vertical com uma pinça para derreter a gordura lateral.",
      "Deixe descansar 10 minutos antes de cortar."
    ],
    tips: "Este corte tem dois tipos de carne: lombo e vazia. Coma ambos!",
    image: getRecipeImage("T-Bone Steak Grilled", "meat")
  },
  {
    id: id(),
    title: "Maminha na Airfryer",
    category: Category.RED_MEAT,
    prepTime: "30 min",
    calories: 600,
    ingredients: ["1 Peça de Maminha inteira (aprox. 1kg)", "Sal grosso", "Manteiga derretida"],
    instructions: [
      "Pincele toda a peça de maminha com a manteiga derretida.",
      "Cubra com sal grosso.",
      "Coloque na Airfryer pré-aquecida a 200°C com a gordura virada para cima.",
      "Asse por 20 a 25 minutos para um ponto mal passado/médio.",
      "Retire e deixe descansar 10 minutos antes de fatiar.",
      "Se gostar mais passado, fatie e devolva à Airfryer por 2 minutos."
    ],
    tips: "A gordura da maminha fica incrivelmente crocante na Airfryer.",
    image: getRecipeImage("Tri-tip Maminha Steak Roasted", "meat")
  },
  {
    id: id(),
    title: "Fígado de Vaca Acebolado (Sem Cebola)",
    category: Category.RED_MEAT,
    prepTime: "20 min",
    calories: 400,
    ingredients: ["4 Bifes de fígado de vaca", "4 fatias de Bacon", "1/2 chávena de Leite (para demolhar)"],
    instructions: [
      "Retire a pele fina à volta do fígado e deixe de molho no leite por 20 minutos (suaviza o sabor amargo). Seque bem depois.",
      "Frite o bacon na frigideira até ficar estaladiço. Retire o bacon e reserve a gordura.",
      "Aumente o lume e coloque os bifes de fígado na gordura quente do bacon.",
      "Frite rápido: 2 minutos de cada lado. O interior deve ficar ligeiramente rosado.",
      "Sirva o fígado coberto com o bacon crocante esfarelado."
    ],
    tips: "O sabor fumado do bacon substitui perfeitamente a doçura da cebola tradicional.",
    image: getRecipeImage("Beef Liver and Bacon", "meat")
  },
  {
    id: id(),
    title: "Rolo de Carne com Ovo",
    category: Category.RED_MEAT,
    prepTime: "1h",
    calories: 650,
    ingredients: ["500g Carne picada", "3 Ovos cozidos", "Fatias de Bacon", "Sal e especiarias a gosto"],
    instructions: [
      "Tempere a carne picada com sal.",
      "Estenda a carne sobre uma folha de papel vegetal formando um retângulo.",
      "Coloque os ovos cozidos descascados em linha no centro da carne.",
      "Com a ajuda do papel, enrole a carne à volta dos ovos, fechando bem as pontas para formar um rolo.",
      "Cubra o rolo com as fatias de bacon.",
      "Asse no forno a 180°C por 45 minutos."
    ],
    tips: "Ao cortar, o visual do ovo no centro é fantástico.",
    image: getRecipeImage("Meatloaf Stuffed with Egg", "meat")
  },
  {
    id: id(),
    title: "Tomahawk na Brasa",
    category: Category.RED_MEAT,
    prepTime: "40 min",
    calories: 1200,
    ingredients: ["1 Tomahawk Steak (bife com o osso da costela comprido)", "Sal grosso abundante"],
    instructions: [
      "Tempere a carne com sal grosso 1 hora antes.",
      "Prepare a brasa. Queremos uma zona de calor forte e uma zona de calor médio.",
      "Comece por selar a carne na zona de calor forte, 2 minutos de cada lado para marcar.",
      "Mova para a zona de calor médio e deixe cozinhar lentamente até atingir o ponto desejado (cerca de 15-20 minutos, virando ocasionalmente).",
      "Deixe descansar 10 minutos antes de cortar."
    ],
    tips: "É o 'rei dos bifes'. Ideal para partilhar.",
    image: getRecipeImage("Tomahawk Steak Grilled", "meat")
  },
  {
    id: id(),
    title: "Entranha Fina (Skirt Steak)",
    category: Category.RED_MEAT,
    prepTime: "15 min",
    calories: 600,
    ingredients: ["1 Peça de Entranha", "Sal fino"],
    instructions: [
      "Aqueça a grelha ou chapa no máximo possível. A entranha precisa de calor violento.",
      "Tempere a carne com sal mesmo antes de grelhar.",
      "Grelhe apenas 2 a 3 minutos de cada lado. A carne deve ficar tostada fora e vermelha dentro.",
      "Retire e corte em tiras, *sempre* contra as fibras da carne.",
      "Se cortar a favor da fibra, ficará impossível de mastigar."
    ],
    tips: "Um corte com sabor a ferro intenso, adorado pelos verdadeiros carnívoros.",
    image: getRecipeImage("Grilled Skirt Steak", "meat")
  },
  {
    id: id(),
    title: "Secretos de Porco Preto",
    category: Category.RED_MEAT,
    prepTime: "20 min",
    calories: 800,
    ingredients: ["Secretos de Porco Preto", "Flor de sal"],
    instructions: [
      "Este corte é muito gordo, por isso não adicione gordura à frigideira.",
      "Aqueça a chapa ou grelha.",
      "Coloque os secretos. A gordura vai começar a derreter e a fritar a carne.",
      "Cozinhe até a gordura estar translúcida e dourada e a carne crocante.",
      "Tempere com flor de sal na hora de servir."
    ],
    tips: "A gordura do porco preto é saudável e deliciosa, não a desperdice.",
    image: getRecipeImage("Secretos Iberico Pork Grilled", "meat")
  },
  {
    id: id(),
    title: "Plumas Grelhadas",
    category: Category.RED_MEAT,
    prepTime: "15 min",
    calories: 600,
    ingredients: ["Plumas de Porco Preto", "Sal"],
    instructions: [
      "As plumas são mais finas que os secretos.",
      "Grelhe em lume forte rapidamente para não secar.",
      "Deixe dourar bem de ambos os lados.",
      "Tempere com sal grosso após grelhar."
    ],
    tips: "Extremamente tenras e saborosas.",
    image: getRecipeImage("Grilled Pork Plumas", "meat")
  },
  {
    id: id(),
    title: "Carpaccio de Vaca",
    category: Category.RED_MEAT,
    prepTime: "15 min",
    calories: 300,
    ingredients: ["200g Lombo de vaca (congelado por 1h)", "Queijo Parmesão em lascas", "Azeite virgem extra", "Sal e Pimenta"],
    instructions: [
      "Com a carne semi-congelada, use uma faca muito afiada para cortar fatias finas como papel.",
      "Disponha as fatias num prato grande sem as sobrepor muito.",
      "Regue generosamente com azeite.",
      "Tempere com sal e pimenta.",
      "Espalhe as lascas de queijo parmesão por cima e sirva imediatamente."
    ],
    tips: "Uma entrada fria perfeita e rica em enzimas.",
    image: getRecipeImage("Beef Carpaccio Parmesan", "meat")
  },
  {
    id: id(),
    title: "Ossobuco Cozido Lento",
    category: Category.RED_MEAT,
    prepTime: "3h 30m",
    calories: 550,
    ingredients: ["2 pedaços de Ossobuco (com o osso)", "Banha", "Caldo de carne", "Sal"],
    instructions: [
      "Faça pequenos cortes na pele à volta do ossobuco para não enrolar.",
      "Sele a carne na banha quente até dourar.",
      "Coloque numa panela de fundo grosso, cubra com o caldo e tape.",
      "Deixe cozinhar em lume mínimo por 3 horas, virando ocasionalmente.",
      "A carne deve cair do osso."
    ],
    tips: "O tutano no centro do osso é a melhor parte, não o deixe cair no molho!",
    image: getRecipeImage("Ossobuco Slow Cooked", "meat")
  },
  {
    id: id(),
    title: "Guisado de Vaca Simples",
    category: Category.RED_MEAT,
    prepTime: "2h",
    calories: 500,
    ingredients: ["1kg Carne de vaca para estufar em cubos", "2 colheres de sopa de Banha", "Água ou caldo de ossos", "Sal"],
    instructions: [
      "Seque os cubos de carne com papel.",
      "Aqueça a banha numa caçarola.",
      "Frite a carne em lotes (não ponha tudo de uma vez) para dourar bem.",
      "Volte a colocar toda a carne na panela, cubra com água ou caldo, tempere com sal.",
      "Tape e deixe cozinhar em lume baixo por 1h30 a 2h, até a carne se desfazer com o garfo e o molho estar grosso e gelatinoso."
    ],
    tips: "Simples, barato e reconfortante.",
    image: getRecipeImage("Beef Stew Meat Pot", "meat")
  },

  // --- AVES (15 Receitas) ---
  {
    id: id(),
    title: "Coxas de Frango com Pele Crocante",
    category: Category.POULTRY,
    prepTime: "50 min",
    calories: 500,
    ingredients: ["4 Coxas de frango com pele e osso", "Sal grosso", "1 c.chá de Pimentão doce (opcional)", "1 c.sopa Azeite"],
    instructions: [
      "Pré-aqueça o forno a 200°C.",
      "Seque muito bem a pele do frango com papel de cozinha (essencial para ficar crocante).",
      "Esfregue o azeite, o sal e o pimentão nas coxas.",
      "Coloque num tabuleiro com a pele virada para cima.",
      "Asse por 40-45 minutos. Não vire o frango.",
      "A pele deve ficar fina e estaladiça como uma batata frita."
    ],
    tips: "Nunca retire a pele, é onde está a gordura saudável necessária na dieta carnívora.",
    image: getRecipeImage("Crispy Chicken Thighs Roasted", "chicken")
  },
  {
    id: id(),
    title: "Asinhas de Frango Fritas (Banha)",
    category: Category.POULTRY,
    prepTime: "25 min",
    calories: 600,
    ingredients: ["1kg Asas de frango", "500g Banha de porco (para fritar)", "Sal"],
    instructions: [
      "Corte as asas separando a coxinha da asa (descarte a pontinha).",
      "Tempere com sal.",
      "Aqueça a banha numa panela funda até estar bem quente.",
      "Frite as asas por imersão cerca de 10-12 minutos, até estarem bem douradas e a flutuar.",
      "Retire e escorra. A banha deixa-as mais secas e crocantes que o óleo."
    ],
    tips: "A banha é uma gordura animal estável a altas temperaturas, muito melhor que óleos vegetais.",
    image: getRecipeImage("Fried Chicken Wings Crispy", "chicken")
  },
  {
    id: id(),
    title: "Peito de Frango Recheado com Bacon",
    category: Category.POULTRY,
    prepTime: "40 min",
    calories: 450,
    ingredients: ["2 Peitos de frango grandes", "4 colheres de sopa Queijo creme", "8 fatias de Bacon"],
    instructions: [
      "Faça um corte horizontal no peito de frango para abrir como um livro (ou crie uma bolsa).",
      "Espalhe o queijo creme no interior e feche o peito.",
      "Enrole todo o peito com as fatias de bacon, garantindo que o queijo fica selado.",
      "Sele numa frigideira quente para dourar o bacon de todos os lados.",
      "Leve ao forno a 180°C por 15-20 minutos para cozinhar o frango por dentro."
    ],
    tips: "O bacon protege o peito de frango de secar no forno.",
    image: getRecipeImage("Bacon Wrapped Stuffed Chicken Breast", "chicken")
  },
  {
    id: id(),
    title: "Ovos Escoceses (Scotch Eggs)",
    category: Category.POULTRY,
    prepTime: "45 min",
    calories: 550,
    ingredients: ["4 Ovos cozidos (descascados)", "400g Carne de salsicha fresca crua", "Torresmo moído (para panar, opcional)"],
    instructions: [
      "Divida a carne de salsicha em 4 bolas. Achate cada bola na palma da mão.",
      "Coloque um ovo cozido no centro da carne e envolva-o completamente, selando bem.",
      "Passe as bolas pelo torresmo moído (se usar) para panar.",
      "Frite em óleo/banha quente até dourar (cerca de 5-6 minutos) ou asse no forno a 200°C por 20 minutos.",
      "Deixe arrefecer antes de cortar."
    ],
    tips: "Snack portátil perfeito para levar para o trabalho.",
    image: getRecipeImage("Scotch Eggs Meat", "meat")
  },
  {
    id: id(),
    title: "Nuggets de Frango Carnívoros",
    category: Category.POULTRY,
    prepTime: "30 min",
    calories: 400,
    ingredients: ["300g Frango moído cru", "1 Chávena de Queijo parmesão ralado fino", "1 Ovo", "Sal"],
    instructions: [
      "Numa tigela, misture o frango moído, o ovo e uma pitada de sal. A massa fica pegajosa.",
      "Coloque o queijo parmesão num prato raso.",
      "Com as mãos molhadas, faça pequenas formas de nugget com a carne.",
      "Passe cada nugget pelo queijo parmesão, cobrindo bem.",
      "Frite em banha ou manteiga numa frigideira em lume médio até dourarem e ficarem crocantes (3-4 min por lado)."
    ],
    tips: "Ficam incrivelmente crocantes sem usar qualquer farinha.",
    image: getRecipeImage("Chicken Nuggets Homemade", "chicken")
  },
  {
    id: id(),
    title: "Fígado de Frango Salteado",
    category: Category.POULTRY,
    prepTime: "15 min",
    calories: 350,
    ingredients: ["300g Fígados de frango", "3 colheres de sopa Manteiga", "Sal e Pimenta"],
    instructions: [
      "Limpe os fígados, separando os lóbulos e retirando nervos brancos. Seque com papel.",
      "Aqueça a manteiga numa frigideira até começar a espumar.",
      "Adicione os fígados (cuidado, podem salpicar).",
      "Frite por 2-3 minutos de cada lado. O interior deve ficar rosado, não cinzento.",
      "Tempere generosamente com sal e pimenta no prato."
    ],
    tips: "O fígado de frango é mais suave que o de vaca. Não cozinhe demais ou fica amargo.",
    image: getRecipeImage("Sauteed Chicken Liver", "meat")
  },
  {
    id: id(),
    title: "Frango Assado na Manteiga",
    category: Category.POULTRY,
    prepTime: "1h 30m",
    calories: 700,
    ingredients: ["1 Frango inteiro", "100g Manteiga amolecida", "Sal grosso"],
    instructions: [
      "Pré-aqueça o forno a 190°C.",
      "Com os dedos, solte a pele do peito do frango com cuidado para não rasgar.",
      "Introduza metade da manteiga entre a pele e a carne do peito.",
      "Barre o resto da manteiga por fora do frango e cubra com sal.",
      "Asse por cerca de 1h15m.",
      "Deixe descansar 15 minutos antes de trincar."
    ],
    tips: "A manteiga debaixo da pele garante que o peito (normalmente seco) fica suculento.",
    image: getRecipeImage("Roasted Whole Chicken Butter", "chicken")
  },
  {
    id: id(),
    title: "Perna de Peru Assada",
    category: Category.POULTRY,
    prepTime: "1h 45m",
    calories: 600,
    ingredients: ["1 Perna de Peru grande", "Banha de porco", "Sal grosso"],
    instructions: [
      "Faça cortes profundos na carne da perna de peru.",
      "Esfregue a banha e o sal em toda a perna, enchendo os cortes.",
      "Coloque numa assadeira e leve ao forno a 180°C.",
      "A meio do tempo, regue a perna com a gordura que derreteu no fundo.",
      "Asse até a carne estar a soltar do osso e a pele estaladiça."
    ],
    tips: "A carne escura do peru é mais gorda e adequada à dieta carnívora do que o peito.",
    image: getRecipeImage("Roasted Turkey Leg", "meat")
  },
  {
    id: id(),
    title: "Corações de Frango de Cebolada (Sem Cebola)",
    category: Category.POULTRY,
    prepTime: "25 min",
    calories: 450,
    ingredients: ["400g Corações de frango", "100g Bacon picado", "1 c.sopa Manteiga"],
    instructions: [
      "Lave os corações e retire excessos de gordura dura ou artérias.",
      "Numa frigideira, frite o bacon até soltar a gordura.",
      "Adicione os corações e a manteiga.",
      "Refogue em lume médio por 10-15 minutos, mexendo sempre, até estarem dourados e cozinhados.",
      "Tempere com sal."
    ],
    tips: "Económico e delicioso. O bacon dá o sabor que compensa a falta de vegetais.",
    image: getRecipeImage("Chicken Hearts Fried", "meat")
  },
  {
    id: id(),
    title: "Pato Confitado (Coxa)",
    category: Category.POULTRY,
    prepTime: "3h",
    calories: 800,
    ingredients: ["2 Coxas de Pato", "500g Gordura de pato (ou banha)", "Sal grosso"],
    instructions: [
      "Salgue as coxas de pato e deixe repousar no frio por 1 hora.",
      "Limpe o sal. Coloque as coxas numa panela pequena e cubra completamente com a gordura derretida.",
      "Cozinhe em lume muito baixo (quase sem ferver) por 2h30 a 3 horas, até a carne estar muito macia.",
      "Retire da gordura. Aqueça uma frigideira e doure a pele da coxa para ficar crocante antes de servir."
    ],
    tips: "Guarde a gordura usada: ela fica com um sabor incrível e pode ser reutilizada.",
    image: getRecipeImage("Duck Confit Leg", "meat")
  },
  {
    id: id(),
    title: "Peito de Pato Grelhado (Magret)",
    category: Category.POULTRY,
    prepTime: "25 min",
    calories: 600,
    ingredients: ["1 Peito de Pato (Magret)", "Sal grosso"],
    instructions: [
      "Com uma faca afiada, faça cortes em losango na pele do pato, sem cortar a carne.",
      "Coloque o peito com a pele virada para baixo numa frigideira FRIA.",
      "Ligue o lume médio. Deixe a gordura derreter lentamente por 8-10 minutos. Vá retirando o excesso de gordura líquida da frigideira.",
      "Quando a pele estiver fina e crocante, aumente o lume, vire e sele a carne por 2-3 minutos.",
      "Sirva fatiado rosado."
    ],
    tips: "Começar com a frigideira fria é o segredo para render a gordura sem queimar.",
    image: getRecipeImage("Grilled Duck Breast Magret", "meat")
  },
  {
    id: id(),
    title: "Hambúrguer de Frango e Bacon",
    category: Category.POULTRY,
    prepTime: "20 min",
    calories: 500,
    ingredients: ["300g Peito de frango picado", "100g Bacon picado cru", "Sal"],
    instructions: [
      "Misture o frango picado com o bacon picado numa tigela.",
      "Molde hambúrgueres com as mãos.",
      "Aqueça uma chapa ou frigideira com um pouco de gordura.",
      "Grelhe os hambúrgueres até estarem bem cozinhados (frango não pode ficar cru).",
      "O bacon vai manter o hambúrguer suculento."
    ],
    tips: "Uma ótima forma de tornar o peito de frango interessante.",
    image: getRecipeImage("Chicken and Bacon Burger Patty", "meat")
  },
  {
    id: id(),
    title: "Chips de Pele de Frango",
    category: Category.POULTRY,
    prepTime: "25 min",
    calories: 400,
    ingredients: ["Peles de frango (sobras de outras receitas)", "Sal"],
    instructions: [
      "Pré-aqueça o forno a 200°C.",
      "Estenda as peles de frango num tabuleiro forrado com papel vegetal, bem esticadas e sem sobrepor.",
      "Tempere com sal.",
      "Asse por 15-20 minutos até estarem douradas e estaladiças.",
      "Deixe arrefecer em papel absorvente (ficam mais crocantes ao arrefecer)."
    ],
    tips: "Não desperdice nada. É o melhor snack crocante que existe.",
    image: getRecipeImage("Crispy Chicken Skin Chips", "food")
  },
  {
    id: id(),
    title: "Codornizes no Forno",
    category: Category.POULTRY,
    prepTime: "35 min",
    calories: 450,
    ingredients: ["2 Codornizes inteiras", "4 fatias de Bacon", "Manteiga"],
    instructions: [
      "Barre as codornizes com manteiga e sal.",
      "Envolva o peito de cada codorniz com fatias de bacon (amarre com fio se necessário).",
      "Leve ao forno a 200°C por 20-25 minutos.",
      "O bacon protege a carne delicada de secar."
    ],
    tips: "Uma carne de caça acessível e saborosa.",
    image: getRecipeImage("Roasted Quail with Bacon", "meat")
  },
  {
    id: id(),
    title: "Moelas Estufadas Simples",
    category: Category.POULTRY,
    prepTime: "1h 15m",
    calories: 300,
    ingredients: ["500g Moelas de frango limpas", "2 c.sopa Banha", "Água ou Caldo", "Sal e Piri-piri (opc)"],
    instructions: [
      "Lave bem as moelas.",
      "Numa panela, derreta a banha e refogue as moelas para selar.",
      "Cubra com água ou caldo e tempere com sal.",
      "Tape e deixe cozinhar em lume brando por 1 hora, adicionando água se secar, até estarem macias.",
      "Deixe o molho reduzir no final para ficar espesso."
    ],
    tips: "Rico em colagénio, textura firme mas agradável.",
    image: getRecipeImage("Chicken Gizzards Stew", "meat")
  },

  // --- PEIXES E MARISCO (16 Receitas) ---
  {
    id: id(),
    title: "Salmão Grelhado com Pele",
    category: Category.FISH,
    prepTime: "20 min",
    calories: 500,
    ingredients: ["1 Lombo de Salmão com pele", "Sal grosso", "1 c.sopa Manteiga"],
    instructions: [
      "Seque a pele do salmão muito bem com papel. Tempere com sal.",
      "Aqueça uma frigideira antiaderente em lume médio-alto com um pouco de azeite.",
      "Coloque o salmão com a pele para baixo e pressione com uma espátula por 10 segundos para não enrolar.",
      "Deixe cozinhar 90% do tempo com a pele para baixo (cerca de 5-6 minutos) até a pele estar muito crocante e a carne mudar de cor até quase ao topo.",
      "Vire apenas por 30 segundos para selar o topo.",
      "Sirva com a manteiga derretida por cima."
    ],
    tips: "A pele crocante é deliciosa e rica em ómega-3.",
    image: getRecipeImage("Grilled Salmon Fillet with Skin", "fish")
  },
  {
    id: id(),
    title: "Sardinhas Assadas na Brasa",
    category: Category.FISH,
    prepTime: "25 min",
    calories: 400,
    ingredients: ["6 Sardinhas gordas (inteiras)", "Sal grosso"],
    instructions: [
      "Meia hora antes, salgue generosamente as sardinhas inteiras.",
      "Prepare o grelhador com brasas quentes.",
      "Coloque as sardinhas na grelha. Deixe assar até a pele tostar e os olhos ficarem brancos.",
      "Vire uma única vez com cuidado.",
      "Sirva imediatamente."
    ],
    tips: "Coma a pele e, se forem pequenas, até a espinha para mais cálcio.",
    image: getRecipeImage("Grilled Sardines on Charcoal", "fish")
  },
  {
    id: id(),
    title: "Bacalhau à 'Brás' Carnívoro",
    category: Category.FISH,
    prepTime: "25 min",
    calories: 500,
    ingredients: ["300g Bacalhau demolhado e desfiado", "3 Ovos", "4 c.sopa Azeite virgem extra", "Salsa (opc)"],
    instructions: [
      "Numa frigideira larga, aqueça o azeite e refogue o bacalhau desfiado por 5 minutos para perder alguma água.",
      "Bata os ovos numa tigela com uma pitada de pimenta.",
      "Baixe o lume para o mínimo.",
      "Junte os ovos ao bacalhau e mexa constantemente.",
      "O segredo é desligar o lume antes dos ovos secarem completamente. Queremos um creme aveludado, não ovos mexidos secos.",
      "Sirva polvilhado com salsa."
    ],
    tips: "Sem batata palha, mas o sabor autêntico está lá.",
    image: getRecipeImage("Codfish Scramble Eggs", "fish")
  },
  {
    id: id(),
    title: "Camarões ao Alho e Manteiga",
    category: Category.FISH,
    prepTime: "15 min",
    calories: 400,
    ingredients: ["300g Camarões descascados", "50g Manteiga", "1 c.chá Alho em pó", "Sal"],
    instructions: [
      "Seque os camarões com papel.",
      "Aqueça a manteiga numa frigideira grande até espumar.",
      "Adicione os camarões numa única camada (não amontoe).",
      "Frite 1-2 minutos de cada lado até ficarem cor-de-rosa e opacos.",
      "Tempere com sal e alho em pó no final e envolva bem na manteiga."
    ],
    tips: "Não cozinhe demais ou ficam borrachosos.",
    image: getRecipeImage("Garlic Butter Shrimp", "seafood")
  },
  {
    id: id(),
    title: "Atum com Maionese de Bacon",
    category: Category.FISH,
    prepTime: "10 min",
    calories: 450,
    ingredients: ["1 Lata de Atum em azeite", "2 c.sopa Maionese de Bacon (ver extras) ou Maionese normal", "1 Ovo cozido picado"],
    instructions: [
      "Escorra o azeite da lata de atum.",
      "Numa tigela, desfaça o atum com um garfo.",
      "Adicione o ovo cozido picado e a maionese.",
      "Misture bem até obter uma pasta.",
      "Coma à colher ou use para rechear ovos."
    ],
    tips: "Uma refeição de emergência perfeita e rica em proteína.",
    image: getRecipeImage("Tuna Salad with Mayo and Egg", "fish")
  },
  {
    id: id(),
    title: "Linguado Meunière (Sem Farinha)",
    category: Category.FISH,
    prepTime: "20 min",
    calories: 350,
    ingredients: ["2 Filetes de Linguado", "3 c.sopa Manteiga", "Sumo de meio Limão", "Sal"],
    instructions: [
      "Tempere os filetes com sal.",
      "Aqueça 1 colher de manteiga numa frigideira.",
      "Grelhe o peixe delicadamente, cerca de 2-3 minutos de cada lado. Retire para o prato.",
      "Na mesma frigideira, adicione o resto da manteiga e deixe derreter até começar a cheirar a noz (beurre noisette).",
      "Junte o sumo de limão e verta imediatamente sobre o peixe."
    ],
    tips: "Peixe branco é magro, por isso o molho de manteiga é essencial.",
    image: getRecipeImage("Sole Fish Butter Lemon", "fish")
  },
  {
    id: id(),
    title: "Lulas Grelhadas",
    category: Category.FISH,
    prepTime: "15 min",
    calories: 250,
    ingredients: ["Lulas limpas inteiras ou em pedaços", "Azeite abundante", "Sal grosso", "Alho picado (opc)"],
    instructions: [
      "Seque bem as lulas.",
      "Aqueça uma chapa ou frigideira em lume muito alto até fumegar.",
      "Pincele as lulas com azeite e coloque na chapa.",
      "Grelhe muito rápido: 1 a 2 minutos de cada lado é suficiente. Se passar disso, ficam duras.",
      "Retire e regue com mais azeite cru e sal grosso."
    ],
    tips: "O segredo da lula é: ou cozinha muito rápido (grelhar) ou muito tempo (estufar). O meio termo estraga.",
    image: getRecipeImage("Grilled Squid Calamari", "seafood")
  },
  {
    id: id(),
    title: "Robalo ao Sal",
    category: Category.FISH,
    prepTime: "50 min",
    calories: 300,
    ingredients: ["1 Robalo inteiro (com escamas)", "1kg Sal grosso", "Clara de ovo (opcional para ligar o sal)"],
    instructions: [
      "Pré-aqueça o forno a 200°C.",
      "Numa tigela, misture o sal com um pouco de água (ou claras) para parecer areia molhada.",
      "Faça uma cama de sal num tabuleiro. Coloque o peixe por cima (o peixe deve estar limpo de tripas mas manter as escamas para não ficar salgado demais).",
      "Cubra o peixe completamente com o restante sal, apertando bem.",
      "Asse por 30-40 minutos.",
      "Parta a crosta de sal e retire a pele. A carne estará incrivelmente húmida."
    ],
    tips: "A crosta de sal funciona como uma panela de pressão natural.",
    image: getRecipeImage("Salt Crusted Sea Bass", "fish")
  },
  {
    id: id(),
    title: "Polvo à Lagareiro (Sem Batata)",
    category: Category.FISH,
    prepTime: "50 min",
    calories: 500,
    ingredients: ["Tentáculos de Polvo já cozido", "200ml Azeite virgem extra", "3 Dentes de alho"],
    instructions: [
      "Pré-aqueça o forno a 200°C.",
      "Coloque o polvo numa travessa de barro.",
      "Esmague os dentes de alho (murro) e espalhe.",
      "Regue o polvo com o azeite (seja generoso, o polvo deve quase nadar no azeite).",
      "Leve ao forno por 30-40 minutos até o polvo estar dourado e o azeite a ferver."
    ],
    tips: "O polvo é magro, o azeite fornece a energia necessária.",
    image: getRecipeImage("Roasted Octopus Olive Oil", "seafood")
  },
  {
    id: id(),
    title: "Mexilhões ao Vapor com Nata",
    category: Category.FISH,
    prepTime: "20 min",
    calories: 350,
    ingredients: ["500g Mexilhões frescos limpos", "100ml Natas", "1 c.sopa Manteiga"],
    instructions: [
      "Numa panela grande, derreta a manteiga.",
      "Adicione os mexilhões e tape a panela imediatamente.",
      "Deixe cozinhar em lume médio-alto por 5 minutos, agitando a panela ocasionalmente, até as conchas abrirem.",
      "Adicione as natas, mexa e deixe ferver por mais 2 minutos para engrossar o molho.",
      "Descarte qualquer mexilhão que não tenha aberto."
    ],
    tips: "Use as conchas como colher para beber o molho de natas.",
    image: getRecipeImage("Mussels in Cream Sauce", "seafood")
  },
  {
    id: id(),
    title: "Truta Enrolada em Bacon",
    category: Category.FISH,
    prepTime: "30 min",
    calories: 500,
    ingredients: ["2 Trutas limpas", "4 a 6 fatias de Bacon", "Sal"],
    instructions: [
      "Tempere o interior das trutas com um pouco de sal.",
      "Enrole as fatias de bacon à volta do corpo de cada truta.",
      "Coloque num tabuleiro e leve ao forno a 200°C por 20 minutos.",
      "Termine com 2 minutos de grelhador superior para tornar o bacon extra crocante."
    ],
    tips: "O bacon salgadinho combina perfeitamente com a carne suave da truta.",
    image: getRecipeImage("Trout Wrapped in Bacon", "fish")
  },
  {
    id: id(),
    title: "Ostras ao Natural",
    category: Category.FISH,
    prepTime: "10 min",
    calories: 100,
    ingredients: ["6 Ostras frescas", "Gelo (para servir)", "Limão (opcional)"],
    instructions: [
      "Lave as ostras fechadas em água corrente.",
      "Com um pano e uma faca de ostras, abra-as com cuidado pela dobradiça.",
      "Corte o músculo que prende a ostra à concha.",
      "Sirva imediatamente sobre gelo.",
      "Coma crua, mastigando bem."
    ],
    tips: "O 'multivitamínico' do mar, extremamente ricas em Zinco.",
    image: getRecipeImage("Fresh Oysters on Ice", "seafood")
  },
  {
    id: id(),
    title: "Vieiras Coradas na Manteiga",
    category: Category.FISH,
    prepTime: "15 min",
    calories: 300,
    ingredients: ["6 Vieiras grandes", "Manteiga Clarificada (Ghee)", "Sal", "Pimenta"],
    instructions: [
      "Seque as vieiras muito bem com papel. Se estiverem húmidas não vão corar.",
      "Tempere com sal e pimenta.",
      "Aqueça a frigideira em lume alto com a Ghee até fumegar.",
      "Coloque as vieiras (sentido horário para saber qual virar primeiro). Não mexa!",
      "Deixe selar por 1m30s até formar crosta dourada.",
      "Vire e cozinhe apenas mais 30-60 segundos do outro lado."
    ],
    tips: "Textura amanteigada e doce.",
    image: getRecipeImage("Seared Scallops Butter", "seafood")
  },
  {
    id: id(),
    title: "Sapateira Recheada (Carnívora)",
    category: Category.FISH,
    prepTime: "30 min",
    calories: 400,
    ingredients: ["1 Sapateira cozida", "1 Ovo cozido", "2 c.sopa Maionese caseira", "Mostarda (opc)"],
    instructions: [
      "Abra a sapateira e retire toda a carne das patas e do interior da carapaça (aproveite o coral/ovas).",
      "Numa tigela, misture a carne da sapateira com o ovo cozido picado muito fino.",
      "Envolva com a maionese e um pouco de mostarda.",
      "Volte a colocar o recheio na carapaça lavada.",
      "Sirva frio, comendo à colher."
    ],
    tips: "Evite tostas, coma diretamente como uma salada rica.",
    image: getRecipeImage("Stuffed Crab Shell", "seafood")
  },
  {
    id: id(),
    title: "Cavala no Forno",
    category: Category.FISH,
    prepTime: "35 min",
    calories: 450,
    ingredients: ["2 Cavalas inteiras escaladas", "Azeite", "Sal grosso", "Vinagre"],
    instructions: [
      "Coloque as cavalas abertas num tabuleiro.",
      "Tempere com sal grosso.",
      "Regue com um fio de azeite.",
      "Asse a 200°C por 20 minutos.",
      "Ao retirar do forno, borrife com umas gotas de vinagre para cortar a gordura."
    ],
    tips: "Peixe barato, gordo e muito rico nutricionalmente.",
    image: getRecipeImage("Roasted Mackerel Fish", "fish")
  },
  {
    id: id(),
    title: "Sashimi de Salmão e Atum",
    category: Category.FISH,
    prepTime: "15 min",
    calories: 300,
    ingredients: ["Lombo de salmão fresco (qualidade sushi)", "Lombo de atum fresco", "Molho de soja (opcional/cuidado com trigo)"],
    instructions: [
      "Garanta que o peixe esteve congelado previamente para segurança alimentar.",
      "Com uma faca longa e afiada, corte fatias de 0.5cm num movimento único de puxar (não serrar).",
      "Disponha num prato frio.",
      "Coma ao natural para apreciar a gordura do peixe."
    ],
    tips: "Use peixe de qualidade 'sushi grade'.",
    image: getRecipeImage("Salmon and Tuna Sashimi", "seafood")
  },

  // --- SNACKS E EXTRAS (18 Receitas) ---
  {
    id: id(),
    title: "Torresmos Caseiros (Pork Rinds)",
    category: Category.SNACKS,
    prepTime: "1h 30m",
    calories: 600,
    ingredients: ["500g Pele de porco limpa (sem carne)", "Sal", "Banha para fritar"],
    instructions: [
      "Corte a pele em quadrados de 3cm.",
      "Frite em banha fria (sim, comece a frio) em lume baixo por 40-50 minutos. A pele vai confitar e endurecer.",
      "Retire as peles e aumente o lume até a banha estar muito quente (quase a fumegar).",
      "Volte a colocar as peles. Elas vão 'pururucar' (inchar e estalar) instantaneamente.",
      "Retire, escorra e salgue imediatamente."
    ],
    tips: "O melhor substituto crocante para batatas fritas ou pipocas.",
    image: getRecipeImage("Pork Rinds Cracklings", "snack")
  },
  {
    id: id(),
    title: "Chips de Parmesão",
    category: Category.SNACKS,
    prepTime: "15 min",
    calories: 200,
    ingredients: ["Queijo Parmesão ralado"],
    instructions: [
      "Pré-aqueça o forno a 200°C.",
      "Num tabuleiro com papel vegetal, faça pequenos montinhos de queijo ralado (deixe espaço entre eles).",
      "Apalpe ligeiramente para achatar.",
      "Asse por 5-7 minutos até derreterem e ficarem dourados.",
      "Deixe arrefecer completamente no tabuleiro para ficarem crocantes."
    ],
    tips: "Cuidado para não queimar, o queijo amarga se ficar castanho escuro.",
    image: getRecipeImage("Parmesan Cheese Crisps", "snack")
  },
  {
    id: id(),
    title: "Ovos de Codorna Temperados",
    category: Category.SNACKS,
    prepTime: "15 min",
    calories: 150,
    ingredients: ["12 Ovos de codorna", "Sal marinho", "Azeite de qualidade"],
    instructions: [
      "Coloque os ovos em água a ferver e coza por 4 minutos.",
      "Passe imediatamente por água gelada.",
      "Descasque com cuidado.",
      "Coloque numa taça, regue com azeite e polvilhe com sal grosso."
    ],
    tips: "Snack de uma dentada, cheio de vitaminas.",
    image: getRecipeImage("Quail Eggs Seasoned", "snack")
  },
  {
    id: id(),
    title: "Beef Jerky Caseiro (Carne Seca)",
    category: Category.SNACKS,
    prepTime: "6h (forno)",
    calories: 300,
    ingredients: ["500g Carne de vaca magra", "Sal grosso"],
    instructions: [
      "Corte a carne em fatias muito finas (3mm) contra a fibra.",
      "Salgue as fatias uniformemente.",
      "Pendure as fatias na grelha do forno (ponha um tabuleiro por baixo para pingar).",
      "Ligue o forno na temperatura mínima (50-70°C).",
      "Deixe a porta do forno entreaberta com uma colher de pau para sair a humidade.",
      "Seque por 4 a 6 horas até a carne estar seca mas flexível."
    ],
    tips: "Proteína pura portátil, ideal para viagens.",
    image: getRecipeImage("Beef Jerky Dried Meat", "snack")
  },
  {
    id: id(),
    title: "Patê de Fígado Cremoso",
    category: Category.SNACKS,
    prepTime: "30 min",
    calories: 400,
    ingredients: ["300g Fígado de aves", "150g Manteiga", "50ml Natas", "Sal"],
    instructions: [
      "Salteie o fígado na manteiga até estar cozinhado.",
      "Coloque o fígado, a manteiga da frigideira e as natas num processador.",
      "Triture até obter uma pasta muito fina e suave.",
      "Prove e ajuste o sal.",
      "Coloque em frascos e cubra com uma camada de manteiga derretida para conservar."
    ],
    tips: "Sirva com chips de queijo ou torresmos.",
    image: getRecipeImage("Liver Pate Jar", "food")
  },
  {
    id: id(),
    title: "Queijo Coalho no Espeto",
    category: Category.SNACKS,
    prepTime: "15 min",
    calories: 250,
    ingredients: ["Queijo Coalho em bloco", "Orégãos (opc)"],
    instructions: [
      "Corte o queijo em retângulos grossos.",
      "Espete um pau de espetada em cada retângulo.",
      "Grelhe na brasa ou chapa quente, rodando para dourar os 4 lados.",
      "O queijo deve ficar com uma crosta castanha e macio por dentro sem derreter totalmente."
    ],
    tips: "Clássico brasileiro que se adapta perfeitamente à dieta.",
    image: getRecipeImage("Grilled Cheese Skewer", "snack")
  },
  {
    id: id(),
    title: "Rolls de Presunto e Queijo",
    category: Category.SNACKS,
    prepTime: "5 min",
    calories: 200,
    ingredients: ["Fatias de Presunto", "Queijo Creme (Philadelphia)"],
    instructions: [
      "Estenda uma fatia de presunto.",
      "Barre uma camada generosa de queijo creme.",
      "Enrole como um charuto.",
      "Coma frio."
    ],
    tips: "Lanche de emergência de 1 minuto.",
    image: getRecipeImage("Ham and Cheese Rolls", "snack")
  },
  {
    id: id(),
    title: "Ovos em Conserva (Pickled Eggs)",
    category: Category.SNACKS,
    prepTime: "20 min + 3 dias",
    calories: 150,
    ingredients: ["6 Ovos cozidos descascados", "1 chávena Vinagre", "1 chávena Água", "1 c.sopa Sal"],
    instructions: [
      "Ferva o vinagre com a água e o sal. Deixe arrefecer.",
      "Coloque os ovos num frasco de vidro limpo.",
      "Cubra com o líquido.",
      "Feche e guarde no frigorífico por pelo menos 3 dias antes de comer."
    ],
    tips: "Duram semanas no frigorífico.",
    image: getRecipeImage("Pickled Eggs Jar", "food")
  },
  {
    id: id(),
    title: "Bacon no Forno (Snack)",
    category: Category.SNACKS,
    prepTime: "25 min",
    calories: 400,
    ingredients: ["1 embalagem de Fatias de Bacon"],
    instructions: [
      "Pré-aqueça o forno a 200°C.",
      "Disponha as fatias de bacon num tabuleiro forrado com papel vegetal (não sobreponha).",
      "Asse por 15-20 minutos até estar dourado escuro.",
      "Retire e deixe arrefecer numa rede ou papel absorvente. Vai ficar rijo ao arrefecer."
    ],
    tips: "Guarde num saco ziplock para comer frio durante o dia.",
    image: getRecipeImage("Crispy Bacon Strips", "food")
  },
  {
    id: id(),
    title: "Maionese de Bacon (Baconnaise)",
    category: Category.EXTRAS,
    prepTime: "15 min",
    calories: 800,
    ingredients: ["200ml Gordura de bacon líquida (morna, não quente)", "1 Ovo inteiro (temperatura ambiente)", "1 c.sopa Vinagre", "1 c.chá Mostarda"],
    instructions: [
      "Numa copo alto, coloque o ovo, o vinagre e a mostarda.",
      "Coloque a varinha mágica no fundo do copo.",
      "Comece a bater e vá vertendo a gordura de bacon líquida muito lentamente em fio.",
      "Levante a varinha lentamente à medida que a mistura engrossa e emulsiona."
    ],
    tips: "Sabor fumado intenso. Use para acompanhar carnes ou ovos.",
    image: getRecipeImage("Bacon Mayonnaise Jar", "sauce")
  },
  {
    id: id(),
    title: "Manteiga Composta de Ervas",
    category: Category.EXTRAS,
    prepTime: "15 min",
    calories: 700,
    ingredients: ["200g Manteiga sem sal (temperatura ambiente)", "Salsa picada", "Alho em pó", "Sal marinho"],
    instructions: [
      "Numa tigela, amasse a manteiga com um garfo até ficar pomada.",
      "Misture as ervas e temperos.",
      "Coloque a mistura numa folha de película aderente.",
      "Enrole formando um cilindro (como um salame) e torça as pontas.",
      "Leve ao frigorífico para endurecer. Corte em rodelas para servir sobre bifes quentes."
    ],
    tips: "Transforma qualquer bife simples numa refeição de restaurante.",
    image: getRecipeImage("Herb Compound Butter", "food")
  },
  {
    id: id(),
    title: "Caldo de Ossos (Bone Broth)",
    category: Category.EXTRAS,
    prepTime: "24h",
    calories: 50,
    ingredients: ["1kg Ossos de vaca com tutano e articulações", "Água para cobrir", "2 c.sopa Vinagre de sidra", "Sal"],
    instructions: [
      "Asse os ossos no forno a 200°C por 30 minutos para dar sabor.",
      "Coloque os ossos numa panela grande, cubra com água e adicione o vinagre (ajuda a extrair minerais).",
      "Leve a ferver, baixe o lume para o mínimo possível.",
      "Deixe cozinhar tapado por 24 a 48 horas.",
      "Coe e tempere com sal. Guarde no frigorífico (deve ficar como gelatina quando frio)."
    ],
    tips: "Beba uma chávena quente por dia para saúde intestinal.",
    image: getRecipeImage("Bone Broth Cup", "drink")
  },
  {
    id: id(),
    title: "Molho Holandês",
    category: Category.EXTRAS,
    prepTime: "15 min",
    calories: 600,
    ingredients: ["3 Gemas", "150g Manteiga derretida quente", "1 c.sopa Sumo de Limão", "Sal"],
    instructions: [
      "Bata as gemas com o limão numa taça de vidro.",
      "Coloque a taça sobre uma panela com água a ferver (banho-maria), sem tocar na água.",
      "Bata vigorosamente enquanto adiciona a manteiga derretida em fio fino.",
      "Continue a bater até o molho engrossar e duplicar de volume.",
      "Tempere com sal e use imediatamente."
    ],
    tips: "Clássico para ovos e peixe.",
    image: getRecipeImage("Hollandaise Sauce Pouring", "sauce")
  },
  {
    id: id(),
    title: "Gordura de Pato Caseira",
    category: Category.EXTRAS,
    prepTime: "45 min",
    calories: 900,
    ingredients: ["Peles e gordura de pato crua (sobras)"],
    instructions: [
      "Corte as peles e gorduras em pedaços pequenos.",
      "Coloque numa panela em lume médio-baixo com um pingo de água.",
      "Deixe a gordura derreter lentamente (render) mexendo de vez em quando.",
      "Quando sobrar apenas torresmos secos a flutuar na gordura líquida dourada, está pronto.",
      "Coe para um frasco de vidro."
    ],
    tips: "A melhor gordura do mundo para cozinhar ovos ou bifes.",
    image: getRecipeImage("Duck Fat Jar", "food")
  },
  {
    id: id(),
    title: "Queijo Brie no Forno",
    category: Category.SNACKS,
    prepTime: "20 min",
    calories: 350,
    ingredients: ["1 Queijo Brie pequeno inteiro"],
    instructions: [
      "Pré-aqueça o forno a 180°C.",
      "Coloque o queijo num prato de forno.",
      "Faça um corte em cruz no topo da casca.",
      "Asse por 15 minutos até sentir que o interior está líquido ao toque.",
      "Sirva quente, usando torresmos ou chips de frango para mergulhar no queijo derretido."
    ],
    tips: "Indulgência pura de queijo.",
    image: getRecipeImage("Baked Brie Cheese", "food")
  },
  {
    id: id(),
    title: "Salsichas Secas (Fuet/Salami)",
    category: Category.SNACKS,
    prepTime: "0 min",
    calories: 400,
    ingredients: ["Salsicha seca curada de qualidade"],
    instructions: [
      "Remova a pele se for sintética.",
      "Corte em fatias finas na diagonal.",
      "Sirva à temperatura ambiente para a gordura amolecer e ter mais sabor."
    ],
    tips: "Verifique ingredientes: evite as que têm dextrose, trigo ou leite em pó.",
    image: getRecipeImage("Salami Slices Snack", "food")
  },
  {
    id: id(),
    title: "Molho de Queijo Azul",
    category: Category.EXTRAS,
    prepTime: "10 min",
    calories: 400,
    ingredients: ["100g Queijo Roquefort ou Gorgonzola", "100ml Natas", "1 c.sopa Manteiga"],
    instructions: [
      "Numa panela pequena, coloque o queijo esfarelado, as natas e a manteiga.",
      "Aqueça em lume baixo, mexendo sempre até o queijo derreter e o molho ficar homogéneo.",
      "Se ficar muito espesso, junte um pouco mais de natas."
    ],
    tips: "Molho forte perfeito para acompanhar bifes de vaca.",
    image: getRecipeImage("Blue Cheese Sauce", "sauce")
  },
  {
    id: id(),
    title: "Manteiga Clarificada (Ghee)",
    category: Category.EXTRAS,
    prepTime: "30 min",
    calories: 900,
    ingredients: ["500g Manteiga sem sal de qualidade"],
    instructions: [
      "Coloque a manteiga numa panela em lume baixo e deixe derreter.",
      "Vai formar-se uma espuma branca no topo. Não mexa.",
      "Deixe cozinhar suavemente até os sólidos do leite irem para o fundo e começarem a dourar levemente.",
      "Retire a espuma do topo com uma colher.",
      "Coe o líquido dourado através de um pano fino ou filtro de café para um frasco, deixando os resíduos sólidos no fundo da panela."
    ],
    tips: "A Ghee aguenta temperaturas muito mais altas sem queimar do que a manteiga normal.",
    image: getRecipeImage("Ghee Clarified Butter Jar", "food")
  },

  // --- SOBREMESAS (5 Receitas) ---
  {
    id: id(),
    title: "Panna Cotta Carnívora",
    category: Category.DESSERT,
    prepTime: "20 min + 4h frio",
    calories: 300,
    ingredients: ["300ml Natas frescas", "3 folhas de Gelatina incolor", "Vagem de baunilha (sementes)"],
    instructions: [
      "Hidrate as folhas de gelatina em água fria por 5 minutos.",
      "Numa panela, aqueça as natas com a baunilha até quase ferver.",
      "Retire do lume. Esprema a água da gelatina e junte às natas quentes, mexendo até dissolver.",
      "Verta em tacinhas individuais.",
      "Leve ao frigorífico por pelo menos 4 horas até solidificar."
    ],
    tips: "Sobremesa cremosa e 100% animal.",
    image: getRecipeImage("Panna Cotta Dessert Creamy", "dessert")
  },
  {
    id: id(),
    title: "Mousse de Manteiga e Gema",
    category: Category.DESSERT,
    prepTime: "15 min",
    calories: 400,
    ingredients: ["100g Manteiga sem sal amolecida", "2 Gemas de ovo", "Adoçante (opcional, gotas)"],
    instructions: [
      "A manteiga deve estar muito macia.",
      "Bata a manteiga com a batedeira até ficar esbranquiçada e fofa.",
      "Adicione as gemas uma a uma, batendo sempre.",
      "Junte o adoçante se usar.",
      "Coma à colherada. É muito rico, uma pequena porção satisfaz."
    ],
    tips: "Conhecida como 'Butter Mousse', é uma bomba de gordura saciante.",
    image: getRecipeImage("Butter Mousse Dessert", "dessert")
  },
  {
    id: id(),
    title: "Gelado de Natas Puro",
    category: Category.DESSERT,
    prepTime: "10 min + congelação",
    calories: 350,
    ingredients: ["400ml Natas para bater", "3 Gemas", "Extrato de Baunilha"],
    instructions: [
      "Bata as natas até ficarem em chantilly firme.",
      "Noutra taça, bata as gemas com a baunilha.",
      "Envolva suavemente as gemas no chantilly para não perder o ar.",
      "Coloque num recipiente e leve ao congelador.",
      "Para evitar cristais de gelo, mexa a mistura de 45 em 45 minutos nas primeiras 3 horas."
    ],
    tips: "Sem fruta, apenas gordura cremosa.",
    image: getRecipeImage("Vanilla Ice Cream Scoop", "dessert")
  },
  {
    id: id(),
    title: "Custard de Ovos",
    category: Category.DESSERT,
    prepTime: "40 min",
    calories: 250,
    ingredients: ["4 Ovos", "250ml Natas", "Canela em pó (opc)", "Noz moscada"],
    instructions: [
      "Pré-aqueça o forno a 160°C.",
      "Aqueça as natas sem deixar ferver.",
      "Bata os ovos numa tigela e verta as natas quentes lentamente, mexendo sempre para não cozinhar os ovos.",
      "Coe a mistura para uma assadeira.",
      "Polvilhe com noz moscada.",
      "Asse em banho-maria (coloque a assadeira dentro de outra maior com água quente) por 30 minutos até firmar."
    ],
    tips: "Textura semelhante a pudim flan ou leite creme.",
    image: getRecipeImage("Egg Custard Dessert", "dessert")
  },
  {
    id: id(),
    title: "Queijo Mascarpone Batido",
    category: Category.DESSERT,
    prepTime: "5 min",
    calories: 400,
    ingredients: ["200g Queijo Mascarpone", "Cacau em pó 100% (opcional)", "Adoçante (opc)"],
    instructions: [
      "Coloque o mascarpone frio numa taça.",
      "Com a batedeira, bata por 2 minutos até ficar mais leve e aerado.",
      "Polvilhe com cacau em pó.",
      "Sirva em taças."
    ],
    tips: "O Mascarpone é naturalmente doce e muito gordo.",
    image: getRecipeImage("Whipped Mascarpone Cheese", "dessert")
  },

  // --- CRIANÇAS (5 Receitas) ---
  {
    id: id(),
    title: "Chupa-Chupa de Queijo",
    category: Category.KIDS,
    prepTime: "10 min",
    calories: 100,
    ingredients: ["Queijinhos redondos (tipo Babybel)", "Pauzinhos de chupa-chupa"],
    instructions: [
      "Retire a cera vermelha do queijo.",
      "Espete o pauzinho na lateral do queijo.",
      "Opcional: Passe levemente numa frigideira quente só para amolecer um pouco sem derreter.",
      "Sirva morno."
    ],
    tips: "Forma divertida de comer queijo que as crianças adoram.",
    image: getRecipeImage("Cheese Lollipop Snack", "food")
  },
  {
    id: id(),
    title: "Salsichas 'Polvo'",
    category: Category.KIDS,
    prepTime: "15 min",
    calories: 300,
    ingredients: ["Salsichas tipo Frankfurt (verificar qualidade)", "Óleo ou manteiga para fritar"],
    instructions: [
      "Corte as salsichas ao meio.",
      "Na parte cortada (plana), faça cortes longitudinais até meio da salsicha, dividindo em 4 ou 8 'pernas'. Mantenha a cabeça intacta.",
      "Frite em gordura quente.",
      "À medida que cozinham, as 'pernas' vão enrolar para fora, parecendo um polvo."
    ],
    tips: "Visual engraçado que garante sucesso com os pequenos.",
    image: getRecipeImage("Octopus Shaped Sausages", "food")
  },
  {
    id: id(),
    title: "Mini Almôndegas",
    category: Category.KIDS,
    prepTime: "25 min",
    calories: 250,
    ingredients: ["Carne picada", "Sal", "Manteiga"],
    instructions: [
      "Tempere a carne apenas com sal.",
      "Faça bolinhas muito pequenas (tamanho de berlindes).",
      "Frite na manteiga rolando-as na frigideira para ficarem redondinhas.",
      "Sirva num prato com palitos."
    ],
    tips: "O tamanho pequeno e o uso de palitos torna a refeição divertida (Finger food).",
    image: getRecipeImage("Mini Meatballs", "food")
  },
  {
    id: id(),
    title: "Rolinhos de Queijo e Presunto",
    category: Category.KIDS,
    prepTime: "10 min",
    calories: 150,
    ingredients: ["Fatias quadradas de Queijo", "Fatias quadradas de Presunto ou Fiambre de qualidade"],
    instructions: [
      "Coloque uma fatia de queijo sobre uma de presunto.",
      "Enrole bem apertado.",
      "Corte em rodelas de 2cm como se fosse sushi.",
      "Pode prender com um palito se desenrolar."
    ],
    tips: "Ótimo para lancheiras escolares.",
    image: getRecipeImage("Ham and Cheese Rolls Snack", "food")
  },
  {
    id: id(),
    title: "Perninhas de Frango à Mão",
    category: Category.KIDS,
    prepTime: "40 min",
    calories: 200,
    ingredients: ["Pernas de frango pequenas", "Sal"],
    instructions: [
      "Tempere as pernas com sal.",
      "Asse no forno a 200°C até estarem douradas e cozinhadas.",
      "Deixe arrefecer um pouco.",
      "Enrole um pedaço de folha de alumínio na ponta do osso para a criança poder segurar sem sujar as mãos."
    ],
    tips: "Comer com as mãos é sensorial e estimula o apetite das crianças.",
    image: getRecipeImage("Small Chicken Drumsticks", "food")
  }
];

export const guideSections: GuideSection[] = [
  {
    id: 'intro',
    title: 'Módulo 1: Fundamentos da Dieta',
    content: `A Dieta Carnívora é, na sua essência, a forma de alimentação mais simples e eliminatória que existe. Consiste em consumir apenas produtos de origem animal: carne, peixe, ovos e, em alguns casos, laticínios de baixo teor de lactose.\n\nAo removeres os hidratos de carbono e as fibras, colocas o teu corpo num estado de cetose nutricional, otimizando a queima de gordura.`
  },
  {
    id: 'benefits',
    title: 'Módulo 2: Benefícios Comprovados',
    content: `• Energia Estável: Sem flutuações de açúcar.\n• Saciedade Duradoura: Redução de desejos.\n• Gestão de Peso: Queima de gordura natural.\n• Foco Mental Aprimorado: Clareza cognitiva.\n• Redução da Inflamação: Alívio de dores articulares e digestivas.`
  },
  {
    id: 'foods',
    title: 'Módulo 3: O Que Comer',
    content: `• Carne Vermelha: Vaca, Cordeiro, Cabra (A base da dieta).\n• Aves: Frango, Pato, Peru (Com pele).\n• Peixe e Marisco: Salmão, Sardinha, Ostras.\n• Ovos: A melhor multivitamina da natureza.\n• Laticínios: Manteiga, Queijos duros, Natas (com moderação).\n• Gorduras Animais: Banha, Sebo, Ghee.`
  },
  {
    id: 'keto-vs-carnivore',
    title: 'Módulo 4: Keto vs. Carnívoro',
    content: `• Keto: Foca em baixo carbo (low-carb), mas inclui vegetais, nozes e sementes.\n• Carnívora Pura: Eliminação total de plantas e antinutrientes.\n• Keto Carnívora: O equilíbrio deste guia. Base animal com flexibilidade para laticínios e temperos mínimos, maximizando a aderência.`
  },
  {
    id: 'transition',
    title: 'Módulo 5: Protocolo de Adaptação (30 Dias)',
    content: `• Semana 1: Eliminação Gradual de açúcares e grãos.\n• Semana 2: Estabilização. O corpo começa a produzir cetonas. Pode sentir fadiga passageira.\n• Semana 3: Otimização. Experimente jejum natural (comer só quando tem fome).\n• Semana 4: Consolidação. Energia plena e desinflamação visível.`
  },
  {
    id: 'faq',
    title: 'Módulo 6: Perguntas Frequentes',
    content: `P: Vou ter deficiências de vitaminas?\nR: Não. A carne e órgãos são os alimentos mais densos em nutrientes biodisponíveis do planeta.\n\nP: E a fibra?\nR: A fibra não é essencial para a vida humana. A maioria das pessoas relata melhoria na digestão sem ela.\n\nP: É seguro a longo prazo?\nR: Sim. Populações inteiras viveram assim durante milénios com saúde robusta.`
  }
];
