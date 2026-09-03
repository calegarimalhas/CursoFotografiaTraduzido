/**
 * Dicionário Interativo de Termos Fotográficos em Inglês ⇄ Português
 * Photography Masterclass Workbook - Edição Interativa
 */

const DICTIONARY_DATA = {
  "ccd": {
    "term": "CCD (Charge-Coupled Device)",
    "phonetic": "/siː-siː-diː/",
    "translation": "Sensor CCD (Dispositivo de Carga Acoplada)",
    "category": "Sensores e Câmeras",
    "definition": "Tecnologia de sensor de imagem utilizada na Nikon D60, famosa pela reprodução orgânica e vibrante de cores, tons de pele naturais e baixo ruído em ISO base (100).",
    "example": "The CCD sensor of the Nikon D60 produces stunning, film-like colors in daylight."
},

  "af-s": {
    "term": "AF-S (Silent Wave Motor)",
    "phonetic": "/eɪ-ɛf-ɛs/",
    "translation": "Lente com Motor de Foco Ultrassônico Embutido",
    "category": "Lentes e Óptica",
    "definition": "Padrão de lentes Nikkor indispensável para o foco automático funcionar na Nikon D60, pois a câmera não possui motor de foco mecânico no corpo.",
    "example": "You must use AF-S or AF-I lenses on the Nikon D60 for autofocus to work."
},

  "af-c": {
    "term": "AF-C (Continuous-Servo AF)",
    "phonetic": "/eɪ-ɛf-siː/",
    "translation": "Foco Automático Contínuo",
    "category": "Foco e Nitidez",
    "definition": "Modo de autofoco onde a câmera ajusta a nitidez continuamente enquanto o botão disparador estiver pressionado até a metade, ideal para rastrear esportes e vida selvagem.",
    "example": "Set your camera to AF-C when photographing running children or birds in flight."
},

  "af-a": {
    "term": "AF-A (Auto-Servo AF)",
    "phonetic": "/eɪ-ɛf-eɪ/",
    "translation": "Foco Automático Inteligente",
    "category": "Foco e Nitidez",
    "definition": "Modo padrão recomendado na Nikon D60, que alterna de forma inteligente entre AF-S (se o assunto estiver parado) e AF-C (se o assunto começar a se movimentar).",
    "example": "AF-A is the smartest default autofocus mode for general photography."
},

  "vr": {
    "term": "VR (Vibration Reduction)",
    "phonetic": "/viː-ɑːr/",
    "translation": "Redução de Vibração / Estabilizador Óptico",
    "category": "Lentes e Equipamento",
    "definition": "Sistema óptico nos elementos internos da lente Nikkor que compensa os tremores das mãos do fotógrafo, permitindo disparar com velocidades até 3 stops mais lentas sem borrar.",
    "example": "The 18-55mm VR kit lens allows you to take sharp photos handheld in lower light."
},

  "i-ttl": {
    "term": "i-TTL (Intelligent Through-The-Lens)",
    "phonetic": "/aɪ-tiː-tiː-ɛl/",
    "translation": "Medição de Flash Inteligente da Nikon",
    "category": "Iluminação e Flash",
    "definition": "Tecnologia de controle de flash da Nikon que emite micro pré-lampejos para medir com precisão a refletividade da cena antes da exposição principal.",
    "example": "Nikon's i-TTL system ensures balanced fill-flash without blowing out skin highlights."
},

  "active d-lighting": {
    "term": "Active D-Lighting",
    "phonetic": "/ˈæktɪv diː-ˈlaɪtɪŋ/",
    "translation": "Otimização Ativa de Faixa Dinâmica",
    "category": "Processamento e Exposição",
    "definition": "Recurso exclusivo da Nikon que protege as altas luzes e recupera sombras em cenas de alto contraste no próprio momento do disparo.",
    "example": "Turn on Active D-Lighting to preserve blue skies and dark shadows in midday portraits."
},

  "nef": {
    "term": "NEF (Nikon Electronic Format)",
    "phonetic": "/nɛf/",
    "translation": "Formato RAW Proprietário da Nikon",
    "category": "Arquivos e Formatos",
    "definition": "Arquivo de imagem bruta de 12 bits gravado pelo sensor da Nikon D60, contendo todas as informações de cor e alcance dinâmico sem compressão com perdas.",
    "example": "Shooting in NEF format gives you maximum control when editing exposure and white balance."
},

  "airflow control": {
    "term": "Airflow Control System",
    "phonetic": "/ˈɛərfloʊ kənˈtroʊl/",
    "translation": "Sistema Aerodinâmico de Controle de Poeira",
    "category": "Corpo e Manutenção",
    "definition": "Design da câmara de espelho da Nikon D60 com dutos que direcionam o fluxo de ar para longe do sensor óptico a cada disparo, evitando acúmulo de poeira.",
    "example": "The Airflow Control System keeps the D60 CCD sensor clean during continuous shooting."
},

  // === EXPOSIÇÃO E SENSOR ===
  "aperture": {
    term: "Aperture",
    phonetic: "/ˈæp.ə.tʃər/",
    translation: "Abertura do Diafragma",
    category: "Exposição & Óptica",
    definition: "O orifício ajustável dentro da lente que controla a quantidade de luz que atinge o sensor da câmera. Medida em f-stops (como f/1.4, f/2.8, f/8, f/16). Também é o principal controlador da Profundidade de Campo (Depth of Field).",
    example: "Using a wide aperture like f/1.8 creates a smooth background blur."
  },
  "f-stop": {
    term: "F-stop / F-number",
    phonetic: "/ɛf stɒp/",
    translation: "Número F / Ponto F",
    category: "Exposição & Óptica",
    definition: "A razão entre a distância focal da lente e o diâmetro da abertura da pupila de entrada. Números menores (f/1.4, f/2) representam aberturas maiores (mais luz); números maiores (f/16, f/22) representam aberturas menores (menos luz).",
    example: "Stop down to f/8 for maximum sharpness across the entire landscape."
  },
  "shutter speed": {
    term: "Shutter Speed",
    phonetic: "/ˈʃʌt.ər spiːd/",
    translation: "Velocidade do Obturador / Tempo de Exposição",
    category: "Exposição",
    definition: "O intervalo de tempo em que a cortina do obturador permanece aberta permitindo que a luz alcance o sensor digital. Medida em frações de segundo (ex: 1/1000s, 1/125s) ou segundos inteiros (ex: 2s, 30s). Velocidades rápidas congelam o movimento; velocidades lentas capturam o rastro do movimento (motion blur).",
    example: "Increase your shutter speed to 1/1000s to freeze a fast-running athlete."
  },
  "iso": {
    term: "ISO",
    phonetic: "/ˈaɪ.soʊ/",
    translation: "Sensibilidade ISO",
    category: "Exposição & Sensor",
    definition: "A medida da sensibilidade do sensor da câmera à luz disponível. Valores baixos (ISO 100) produzem imagens mais limpas e nítidas; valores altos (ISO 3200, 6400) amplificam o sinal elétrico do sensor em baixa luminosidade, mas introduzem ruído digital (ruído/grão).",
    example: "Keep your ISO at 100 in bright daylight to minimize digital noise."
  },
  "exposure": {
    term: "Exposure",
    phonetic: "/ɪkˈspoʊ.ʒər/",
    translation: "Exposição Fotográfica",
    category: "Exposição",
    definition: "A quantidade total de luz captada pelo sensor ou filme durante o disparo, determinada pelo equilíbrio entre Abertura, Velocidade do Obturador e ISO (o Triângulo de Exposição).",
    example: "Check your histogram to ensure you have an accurate exposure without clipping."
  },
  "exposure triangle": {
    term: "Exposure Triangle",
    phonetic: "/ɪkˈspoʊ.ʒər ˈtraɪ.æŋ.ɡəl/",
    translation: "Triângulo de Exposição",
    category: "Exposição",
    definition: "A relação interdependente entre os três pilares fundamentais da exposição: Abertura (profundidade de campo), Velocidade do Obturador (movimento) e ISO (ruído). Mudar um exige a compensação em outro para manter a mesma luminosidade.",
    example: "Mastering the exposure triangle allows you to shoot in full manual mode."
  },
  "underexposed": {
    term: "Underexposed",
    phonetic: "/ˌʌn.dɚ.ɪkˈspoʊzd/",
    translation: "Subexposto / Foto Escura",
    category: "Exposição",
    definition: "Uma imagem que recebeu pouca luz, resultando em detalhes escurecidos ou sombras empastadas (crushed shadows).",
    example: "The subject's face was underexposed because the background was too bright."
  },
  "overexposed": {
    term: "Overexposed",
    phonetic: "/ˌoʊ.vɚ.ɪkˈspoʊzd/",
    translation: "Superexposto / Foto Estourada",
    category: "Exposição",
    definition: "Uma imagem que recebeu excesso de luz, resultando em brancos queimados ou sem textura (blown highlights) irrecuperáveis.",
    example: "The sky is overexposed and completely white with no cloud detail."
  },
  "dynamic range": {
    term: "Dynamic Range",
    phonetic: "/daɪˈnæm.ɪk reɪndʒ/",
    translation: "Faixa Dinâmica / Alcance Dinâmico",
    category: "Sensor & Imagem",
    definition: "A capacidade do sensor da câmera de registrar simultaneamente detalhes nas áreas mais escuras (sombras) e mais claras (altas luzes) de uma cena.",
    example: "Modern full-frame sensors have a wide dynamic range capable of capturing 14 stops."
  },
  "stop": {
    term: "Stop (of light)",
    phonetic: "/stɒp/",
    translation: "Ponto de Luz (Stop)",
    category: "Exposição",
    definition: "Unidade de medida relativa que representa a duplicação ou o corte pela metade da quantidade de luz captada pela câmera.",
    example: "Opening up by one stop doubles the light entering the sensor."
  },
  "exposure compensation": {
    term: "Exposure Compensation (+/-)",
    phonetic: "/ɪkˈspoʊ.ʒər ˌkɒm.pənˈseɪ.ʃən/",
    translation: "Compensação de Exposição",
    category: "Exposição",
    definition: "Recurso que permite forçar a câmera a clarear (+) ou escurecer (-) a imagem nos modos semiautomáticos (como Prioridade de Abertura ou de Obturador).",
    example: "Use +1 EV of exposure compensation when shooting on bright snow to avoid gray whites."
  },
  "bracketing": {
    term: "Bracketing (AEB)",
    phonetic: "/ˈbræk.ɪ.tɪŋ/",
    translation: "Bracketing / Escalonamento de Exposição",
    category: "Técnica Fotográfica",
    definition: "Técnica de capturar uma sequência rápida de fotos da mesma cena com exposições diferentes (uma normal, uma subexposta e uma superexposta), muito usada para HDR.",
    example: "Use auto exposure bracketing (AEB) when photographing high-contrast sunsets."
  },
  "light meter": {
    term: "Light Meter",
    phonetic: "/laɪt ˈmiː.tər/",
    translation: "Fotômetro",
    category: "Exposição",
    definition: "Dispositivo integrado ou externo que mede a intensidade da luz na cena para calcular a exposição correta.",
    example: "Check the internal light meter in the viewfinder to center the needle at zero."
  },
  "metering mode": {
    term: "Metering Mode",
    phonetic: "/ˈmiː.tər.ɪŋ moʊd/",
    translation: "Modo de Medição (Fotometria)",
    category: "Exposição",
    definition: "O método que a câmera utiliza para ler a luz na cena: Matricial/Avaliadora (mede a cena inteira), Ponderada no Centro (foco no meio) ou Pontual/Spot (mede um ponto minúsculo de 1-3%).",
    example: "Switch to spot metering to measure exposure directly from the bride's white dress."
  },
  "histogram": {
    term: "Histogram",
    phonetic: "/ˈhɪs.tə.ɡræm/",
    translation: "Histograma",
    category: "Exposição & Análise",
    definition: "Gráfico que mostra a distribuição tonal da imagem, das sombras mais profundas (lado esquerdo) aos brancos absolutos (lado direito).",
    example: "Look at the histogram to ensure you are not clipping the highlights."
  },
  "clipping": {
    term: "Clipping",
    phonetic: "/ˈklɪp.ɪŋ/",
    translation: "Estouro / Clipping (Perda de Informação)",
    category: "Exposição & Análise",
    definition: "Perda irrecuperável de detalhes por atingir o limite do sensor: brancos estourados (highlight clipping) ou pretos empastados (shadow clipping).",
    example: "Enable highlight clipping warnings (zebras) to prevent blown-out skies."
  },

  // === ÓPTICA, FOCO E LENTES ===
  "depth of field": {
    term: "Depth of Field (DoF)",
    phonetic: "/dɛpθ əv fiːld/",
    translation: "Profundidade de Campo",
    category: "Óptica & Foco",
    definition: "A zona de nitidez aceitável na foto que se estende à frente e atrás do ponto exato onde a lente foi focada. Uma profundidade rasa (shallow) isola o objeto; uma profundidade grande (deep) mantém toda a paisagem nítida.",
    example: "Portraits benefit from a shallow depth of field to separate the subject from distracting backgrounds."
  },
  "bokeh": {
    term: "Bokeh",
    phonetic: "/ˈboʊ.keɪ/",
    translation: "Bokeh (Desfoque Estético)",
    category: "Óptica & Estética",
    definition: "A qualidade estética e visual das áreas desfocadas na imagem produzidas pela lente, especialmente os círculos de luz suave ao fundo. Palavra de origem japonesa (boke-aji).",
    example: "This 85mm f/1.4 lens creates creamy, circular bokeh highlights in evening portraits."
  },
  "focal length": {
    term: "Focal Length",
    phonetic: "/ˈfoʊ.kəl lɛŋkθ/",
    translation: "Distância Focal",
    category: "Óptica & Lentes",
    definition: "A distância entre o centro óptico da lente e o sensor da câmera quando focada no infinito, expressa em milímetros (ex: 24mm, 50mm, 200mm). Determina o ângulo de visão e a ampliação da cena.",
    example: "A 24mm focal length gives an expansive wide-angle view of the mountains."
  },
  "prime lens": {
    term: "Prime Lens",
    phonetic: "/praɪm lɛnz/",
    translation: "Lente Fixa (Prime)",
    category: "Lentes",
    definition: "Uma lente fotográfica com distância focal única e inalterável (ex: 50mm, 85mm). Geralmente oferece ótica mais nítida, peso menor e aberturas máximas maiores (f/1.4 ou f/1.8).",
    example: "The 50mm prime lens is famous for being versatile, sharp, and affordable."
  },
  "zoom lens": {
    term: "Zoom Lens",
    phonetic: "/zuːm lɛnz/",
    translation: "Lente Zoom",
    category: "Lentes",
    definition: "Lente que possui uma faixa contínua de distâncias focais variáveis (ex: 24-70mm ou 70-200mm), permitindo enquadrar de perto ou de longe sem trocar de objetiva.",
    example: "A 24-70mm f/2.8 zoom is the workhorse lens for wedding photographers."
  },
  "wide-angle": {
    term: "Wide-Angle Lens",
    phonetic: "/waɪd ˈæŋ.ɡəl/",
    translation: "Lente Grande-Angular",
    category: "Lentes",
    definition: "Lente com distância focal curta (geralmente abaixo de 35mm em Full Frame), proporcionando um ângulo de visão amplo, ideal para paisagens, interiores e arquitetura.",
    example: "A 16mm wide-angle lens captures the towering architecture in tight city streets."
  },
  "telephoto": {
    term: "Telephoto Lens",
    phonetic: "/ˌtel.əˈfoʊ.toʊ/",
    translation: "Lente Teleobjetiva",
    category: "Lentes",
    definition: "Lente de longa distância focal (geralmente 70mm a 600mm ou mais), usada para fotografar objetos distantes como animais selvagens, esportes ou detalhes distantes, comprimindo os planos de perspectiva.",
    example: "A 400mm telephoto lens lets you photograph birds without scaring them away."
  },
  "macro": {
    term: "Macro Lens",
    phonetic: "/ˈmæk.roʊ/",
    translation: "Lente Macro",
    category: "Lentes",
    definition: "Lente dedicada projetada para focar extremamente próximo, capaz de reproduzir o objeto no sensor em escala real 1:1 (ou superior).",
    example: "Macro lenses reveal exquisite details in insect wings and flower stamens."
  },
  "autofocus": {
    term: "Autofocus (AF)",
    phonetic: "/ˌɑː.toʊˈfoʊ.kəs/",
    translation: "Foco Automático (AF)",
    category: "Câmera & Foco",
    definition: "Sistema da câmera e lente que ajusta automaticamente a nitidez sobre o objeto selecionado. Principais modos: AF-S / Single (para objetos parados) e AF-C / Continuous (para acompanhar movimento).",
    example: "Use continuous autofocus (AF-C) to track birds in flight."
  },
  "manual focus": {
    term: "Manual Focus (MF)",
    phonetic: "/ˈmæn.ju.əl ˈfoʊ.kəs/",
    translation: "Foco Manual (MF)",
    category: "Câmera & Foco",
    definition: "Ajuste manual da nitidez girando o anel de foco da lente com as mãos, essencial em astrofotografia, macrofotografia e situações de baixíssimo contraste.",
    example: "Switch to manual focus when shooting stars at night."
  },
  "focus peaking": {
    term: "Focus Peaking",
    phonetic: "/ˈfoʊ.kəs ˈpiː.kɪŋ/",
    translation: "Focus Peaking (Destaque de Foco)",
    category: "Câmera & Foco",
    definition: "Recurso eletrônico em câmeras mirrorless que destaca com linhas coloridas brilhantes (vermelho, amarelo ou branco) as bordas que estão perfeitamente em foco na tela ou no visor.",
    example: "Focus peaking is invaluable when using vintage manual lenses on modern mirrorless bodies."
  },
  "hyperfocal distance": {
    term: "Hyperfocal Distance",
    phonetic: "/ˌhaɪ.pɚˈfoʊ.kəl ˈdɪs.təns/",
    translation: "Distância Hiperfocal",
    category: "Técnica Óptica",
    definition: "A distância de foco que garante a máxima profundidade de campo possível, deixando nítido tudo desde a metade dessa distância até o infinito.",
    example: "Landscape photographers calculate hyperfocal distance to keep both foreground rocks and distant peaks sharp."
  },

  // === COMPOSIÇÃO E ESTÉTICA ===
  "composition": {
    term: "Composition",
    phonetic: "/ˌkɒm.pəˈzɪʃ.ən/",
    translation: "Composição Fotográfica",
    category: "Composição",
    definition: "A organização visual intencional dos elementos dentro do quadro da fotografia para guiar o olhar do observador e contar uma história visual impactante.",
    example: "Strong composition transforms an ordinary street scene into a work of art."
  },
  "rule of thirds": {
    term: "Rule of Thirds",
    phonetic: "/ruːl əv θɜːdz/",
    translation: "Regra dos Terços",
    category: "Composição",
    definition: "Princípio de composição onde a imagem é dividida em uma grade imaginária de 3x3 (nove retângulos iguais). Posicionar o assunto ou horizonte sobre essas linhas e seus quatro pontos de interseção cria uma imagem mais equilibrada e dinâmica.",
    example: "Placing the subject's eye on the upper-right intersection of the rule of thirds grid draws immediate attention."
  },
  "leading lines": {
    term: "Leading Lines",
    phonetic: "/ˈliː.dɪŋ laɪnz/",
    translation: "Linhas Guia / Linhas Condutoras",
    category: "Composição",
    definition: "Linhas naturais ou arquitetônicas (estradas, rios, cercas, trilhos, sombras) que conduzem o olhar de quem vê a foto em direção ao ponto de interesse principal.",
    example: "The curved wooden fence creates strong leading lines heading towards the barn."
  },
  "framing": {
    term: "Framing (Frame within a Frame)",
    phonetic: "/ˈfreɪ.mɪŋ/",
    translation: "Moldura Natural / Enquadramento",
    category: "Composição",
    definition: "Técnica de usar elementos do ambiente (janelas, arcos, galhos de árvores, portas) para criar uma 'moldura' interna ao redor do assunto principal, dando profundidade e contexto.",
    example: "The stone archway provided natural framing for the distant castle."
  },
  "golden hour": {
    term: "Golden Hour",
    phonetic: "/ˈɡoʊl.dən aʊ.ɚ/",
    translation: "Hora de Ouro / Hora Dourada",
    category: "Iluminação & Estilo",
    definition: "O período logo após o nascer do sol e pouco antes do pôr do sol, caracterizado por luz suave, difusa, sombras longas e tons dourados e avermelhados quentes.",
    example: "Plan portrait sessions during golden hour to take advantage of soft, flattering light."
  },
  "blue hour": {
    term: "Blue Hour",
    phonetic: "/bluː aʊ.ɚ/",
    translation: "Hora Azul",
    category: "Iluminação & Estilo",
    definition: "O breve intervalo de crepúsculo logo antes do nascer ou após o pôr do sol, quando o céu assume um azul profundo e frio, contrastando lindamente com luzes artificiais de cidades.",
    example: "Cityscapes look magical during blue hour when street lamps turn golden against deep blue skies."
  },

  // === ILUMINAÇÃO ===
  "key light": {
    term: "Key Light",
    phonetic: "/kiː laɪt/",
    translation: "Luz Principal",
    category: "Iluminação",
    definition: "A fonte de luz primária e mais intensa que ilumina o assunto em uma cena ou estúdio, definindo a direção básica das sombras.",
    example: "Position the key light at a 45-degree angle to create pleasing facial dimension."
  },
  "fill light": {
    term: "Fill Light",
    phonetic: "/fɪl laɪt/",
    translation: "Luz de Preenchimento",
    category: "Iluminação",
    definition: "Fonte de luz secundária usada para suavizar e preencher as sombras profundas criadas pela luz principal, sem criar novas sombras evidentes.",
    example: "A white reflector was used as a fill light to soften dark under-eye shadows."
  },
  "rim light": {
    term: "Rim Light / Backlight",
    phonetic: "/rɪm laɪt/",
    translation: "Luz de Recorte / Contra-Luz",
    category: "Iluminação",
    definition: "Luz posicionada atrás ou na lateral do assunto que cria uma borda brilhante e bem delineada em seu contorno, separando-o do fundo escuro.",
    example: "The rim light beautifully separated the dark-haired model from the black background."
  },
  "softbox": {
    term: "Softbox",
    phonetic: "/ˈsɒft.bɒks/",
    translation: "Softbox (Modificador Difusor)",
    category: "Equipamento & Iluminação",
    definition: "Gabinete com tecido difusor translúcido colocado na frente de uma luz ou flash para transformar uma fonte pontual dura em uma luz ampla, suave e envolvente.",
    example: "A large octagonal softbox creates flattering soft highlights on skin."
  },
  "reflector": {
    term: "Reflector",
    phonetic: "/rɪˈflɛk.tər/",
    translation: "Rebatedor de Luz",
    category: "Equipamento & Iluminação",
    definition: "Painel portátil com superfícies refletivas (prateada, dourada, branca ou preta) usado para redirecionar luz existente para preencher sombras.",
    example: "Hold a silver reflector low to bounce sunlight back into the model's eyes."
  },
  "diffuser": {
    term: "Diffuser",
    phonetic: "/dɪˈfjuː.zər/",
    translation: "Difusor de Luz",
    category: "Iluminação",
    definition: "Material translúcido que espalha a luz direta e dura, tornando as sombras muito mais suaves e reduzindo o contraste excessivo.",
    example: "On a bright sunny day, hold a translucent diffuser over your subject to eliminate harsh shadows."
  },
  "hot shoe": {
    term: "Hot Shoe",
    phonetic: "/hɒt ʃuː/",
    translation: "Sapata de Flash (Hot Shoe)",
    category: "Câmera & Acessórios",
    definition: "Encaixe metálico com contatos elétricos no topo da câmera para acoplar flashes externos (speedlights), transmissores sem fio ou microfones.",
    example: "Mount the radio trigger directly onto the camera's hot shoe."
  },
  "high-speed sync": {
    term: "High-Speed Sync (HSS)",
    phonetic: "/haɪ spiːd sɪŋk/",
    translation: "Sincronização em Alta Velocidade (HSS)",
    category: "Flash & Iluminação",
    definition: "Tecnologia de flash que permite disparar com velocidades de obturador muito acima da velocidade de sincronização nativa da câmera (geralmente acima de 1/200s ou 1/250s, chegando até 1/8000s).",
    example: "High-speed sync lets you use f/1.4 in bright midday sun with a flash."
  },

  // === CÂMERAS E SENSORES ===
  "dslr": {
    term: "DSLR (Digital Single-Lens Reflex)",
    phonetic: "/ˌdiː.ɛs.ɛlˈɑːr/",
    translation: "Câmera DSLR (com Espelho)",
    category: "Câmeras",
    definition: "Câmera digital com sistema óptico de espelho e pentaprisma que direciona a luz da lente diretamente para um visor óptico real.",
    example: "Traditional DSLR cameras feature long battery life and an optical viewfinder."
  },
  "mirrorless": {
    term: "Mirrorless",
    phonetic: "/ˈmɪr.ɚ.ləs/",
    translation: "Câmera Mirrorless (Sem Espelho)",
    category: "Câmeras",
    definition: "Câmera moderna que elimina o mecanismo mecânico de espelho e prisma, projetando a imagem captada diretamente do sensor para um visor eletrônico (EVF) ou tela LCD.",
    example: "Mirrorless cameras allow real-time exposure preview directly in the electronic viewfinder."
  },
  "full frame": {
    term: "Full Frame",
    phonetic: "/fʊl freɪm/",
    translation: "Sensor Full Frame (Quadro Completo 35mm)",
    category: "Sensores",
    definition: "Sensor de imagem com as mesmas dimensões do filme 35mm clássico (aproximadamente 36x24mm). Oferece melhor desempenho em ISO alto, maior faixa dinâmica e nenhuma multiplicação de corte focal.",
    example: "Full frame sensors provide superior low-light performance and shallower depth of field."
  },
  "crop factor": {
    term: "Crop Factor (APS-C / Micro 4/3)",
    phonetic: "/krɒp ˈfæk.tər/",
    translation: "Fator de Corte (Crop Factor)",
    category: "Sensores",
    definition: "Multiplicador que expressa o quanto um sensor menor corta a imagem em comparação ao Full Frame (ex: 1.5x na Sony/Nikon APS-C, 1.6x na Canon). Uma lente 50mm em sensor 1.5x equivale ao campo de visão de uma 75mm.",
    example: "A 200mm lens on an APS-C camera with a 1.5x crop factor yields the field of view of a 300mm lens."
  },
  "viewfinder": {
    term: "Viewfinder (OVF / EVF)",
    phonetic: "/ˈvjuːˌfaɪn.dər/",
    translation: "Visor Ocular (Visor da Câmera)",
    category: "Câmeras",
    definition: "A janela ocular por onde o fotógrafo olha para enquadrar a foto. Pode ser óptico (OVF em DSLRs) ou eletrônico (EVF com tela digital OLED em câmeras mirrorless).",
    example: "An electronic viewfinder shows you the exact brightness before taking the photo."
  },

  // === ARQUIVOS, COR E PÓS-PRODUÇÃO ===
  "raw": {
    term: "RAW",
    phonetic: "/rɔː/",
    translation: "Formato RAW (Arquivo Bruto)",
    category: "Formatos & Arquivos",
    definition: "Formato de arquivo digital que grava todos os dados brutos capturados pelo sensor sem compressão com perdas ou processamento destrutivo. Permite ampla recuperação de sombras, altas luzes e balanço de branco na edição.",
    example: "Always shoot in RAW when possible to preserve maximum editing flexibility."
  },
  "jpeg": {
    term: "JPEG / JPG",
    phonetic: "/ˈdʒeɪ.pɛɡ/",
    translation: "Formato JPEG",
    category: "Formatos & Arquivos",
    definition: "Formato de imagem comprimido de 8 bits processado diretamente dentro da câmera com saturação, contraste e nitidez embutidos, pronto para compartilhamento rápido.",
    example: "JPEG files are smaller and faster to share immediately on social media."
  },
  "white balance": {
    term: "White Balance (WB)",
    phonetic: "/waɪt ˈbæl.əns/",
    translation: "Balanço de Branco (WB)",
    category: "Cor & Sensor",
    definition: "Ajuste na câmera que neutraliza as dominantes de cor causadas por diferentes fontes de luz (sol, tungstênio, fluorescente, sombra), garantindo que o branco seja reproduzido como branco puro.",
    example: "Set custom white balance using a gray card under mixed lighting conditions."
  },
  "kelvin": {
    term: "Kelvin (Color Temperature)",
    phonetic: "/ˈkɛl.vɪn/",
    translation: "Escala Kelvin (Temperatura de Cor)",
    category: "Cor",
    definition: "Unidade de medida da temperatura da luz em fotografia. Valores baixos (2700K-3200K) representam luzes quentes/alaranjadas de velas e lâmpadas; valores altos (6500K-8000K) representam luzes frias/azuladas de dias nublados e sombras.",
    example: "Daylight is standardized around 5500K on the Kelvin scale."
  },
  "noise": {
    term: "Digital Noise / Grain",
    phonetic: "/nɔɪz/",
    translation: "Ruído Digital / Granulação",
    category: "Qualidade de Imagem",
    definition: "Artefatos visuais granulosos e manchas coloridas indesejadas que surgem na foto ao fotografar com ISO muito elevado ou em sensores com pouca luz.",
    example: "Luminance noise resembles film grain, whereas chroma noise causes unpleasant colored blotches."
  },
  "camera shake": {
    term: "Camera Shake",
    phonetic: "/ˈkæm.rə ʃeɪk/",
    translation: "Trepidação da Câmera (Tremido)",
    category: "Técnica",
    definition: "Borrão involuntário em toda a foto resultante do movimento das mãos do fotógrafo ao disparar em velocidades de obturador lentas demais sem tripé.",
    example: "To avoid camera shake, keep your shutter speed faster than 1 divided by your focal length."
  },
  "tripod": {
    term: "Tripod",
    phonetic: "/ˈtraɪ.pɒd/",
    translation: "Tripé",
    category: "Acessórios",
    definition: "Suporte de três pernas ajustáveis que estabiliza completamente a câmera, indispensável para longa exposição, paisagens nítidas e fotos noturnas.",
    example: "Using a sturdy carbon-fiber tripod ensures ultra-sharp long exposures."
  },
  "nd filter": {
    term: "ND Filter (Neutral Density)",
    phonetic: "/ɛn diː ˈfɪl.tər/",
    translation: "Filtro de Densidade Neutra (ND)",
    category: "Filtros & Acessórios",
    definition: "Filtro de vidro escurecido colocado na frente da lente que reduz a quantidade de luz sem alterar as cores, permitindo exposições longas mesmo em plena luz do dia.",
    example: "Attach a 10-stop ND filter to create a silky, smooth water effect on ocean waves."
  },
  "polarizer": {
    term: "CPL Filter (Circular Polarizer)",
    phonetic: "/ˈpoʊ.lə.raɪ.zər/",
    translation: "Filtro Polarizador Circular (CPL)",
    category: "Filtros & Acessórios",
    definition: "Filtro giratório que remove reflexos indesejados em superfícies não metálicas (como água e vidro), intensifica o azul do céu e aumenta a saturação das folhas.",
    example: "Rotate the CPL filter until the glare on the lake water disappears."
  },
  "long exposure": {
    term: "Long Exposure",
    phonetic: "/lɒŋ ɪkˈspoʊ.ʒər/",
    translation: "Longa Exposição",
    category: "Gêneros Fotográficos",
    definition: "Técnica fotográfica onde o obturador fica aberto por vários segundos ou minutos para suavizar elementos em movimento (nuvens, cachoeiras, tráfego com rastros de luz).",
    example: "Night cityscapes come alive with light trails through long exposure photography."
  },
  "stock photography": {
    term: "Stock Photography",
    phonetic: "/stɒk fəˈtɒɡ.rə.fi/",
    translation: "Fotografia de Banco de Imagens (Stock)",
    category: "Negócios",
    definition: "Fotografias disponibilizadas para licenciamento comercial ou editorial em plataformas como Adobe Stock, Shutterstock e Getty Images, gerando royalties para o fotógrafo.",
    example: "Selling stock photography can generate passive income from your existing photo catalog."
  },
  "model release": {
    term: "Model Release",
    phonetic: "/ˈmɒd.əl rɪˈliːs/",
    translation: "Termo de Autorização de Uso de Imagem (Model Release)",
    category: "Negócios & Jurídico",
    definition: "Documento legal assinado pela pessoa fotografada que autoriza formalmente o fotógrafo a comercializar ou licenciar fotos onde seu rosto ou identidade seja reconhecível.",
    example: "Stock agencies require a signed model release for any photo containing recognizable people."
  },
  "assignment": {
    term: "Assignment / Photo Activity",
    phonetic: "/əˈsaɪn.mənt/",
    translation: "Atividade Prática / Exercício de Campo",
    category: "Didática",
    definition: "Desafio ou tarefa prática proposta no workbook para que o estudante pegue sua câmera e aplique o conceito ensinado no mundo real.",
    example: "Complete the manual exposure assignment before advancing to the next module."
  },
  "gear": {
    term: "Camera Gear",
    phonetic: "/ɡɪər/",
    translation: "Equipamento Fotográfico (Gear)",
    category: "Equipamento",
    definition: "Termo informal que abrange o conjunto de câmeras, lentes, tripés, flashes, filtros, baterias e bolsas de um fotógrafo.",
    example: "Invest in high-quality glass rather than upgrading your camera body every year."
  },
  "blur": {
    term: "Blur / Motion Blur",
    phonetic: "/blɜːr/",
    translation: "Borrão / Desfoque de Movimento",
    category: "Conceito Visual",
    definition: "Suavização ou arrasto visual provocado pela movimentação do assunto ou da câmera durante o tempo de exposição.",
    example: "Waterfalls look painterly when motion blur softens the rushing water."
  },
  "sharpness": {
    term: "Sharpness",
    phonetic: "/ˈʃɑːrp.nəs/",
    translation: "Nitidez / Definição",
    category: "Qualidade de Imagem",
    definition: "A clareza, resolução e contraste com que detalhes finos e bordas são reproduzidos na fotografia.",
    example: "Shooting at f/8 typically yields the sweet spot of maximum optical sharpness."
  },
  "burst mode": {
    term: "Burst Mode (Continuous Drive)",
    phonetic: "/bɜːrst moʊd/",
    translation: "Modo Contínuo / Disparo em Rajada",
    category: "Câmera",
    definition: "Configuração que faz a câmera disparar múltiplos quadros consecutivos por segundo enquanto o botão do disparador for mantido pressionado.",
    example: "Burst mode at 10 frames per second ensures you capture the exact moment the bird takes flight."
  },
  "bulb mode": {
    term: "Bulb Mode (B)",
    phonetic: "/bʌlb moʊd/",
    translation: "Modo Bulb (Exposição Manual Contínua)",
    category: "Exposição",
    definition: "Modo em que o obturador permanece aberto pelo tempo exato em que o botão do disparador (ou controle remoto) for mantido pressionado, permitindo exposições de minutos ou horas.",
    example: "Use bulb mode with a remote shutter release to photograph lightning strikes."
  }
};

/**
 * Utilitários do Dicionário e Detecção de Seleção
 */
class PhotographyDictionary {
  constructor() {
    this.data = DICTIONARY_DATA;
    this.popoverEl = null;
    this.initPopover();
    this.bindEvents();
  }

  initPopover() {
    this.popoverEl = document.createElement("div");
    this.popoverEl.className = "dict-popover";
    this.popoverEl.id = "dict-popover";
    this.popoverEl.innerHTML = `
      <div class="dict-popover-arrow"></div>
      <div class="dict-popover-inner">
        <div class="dict-popover-header">
          <div class="dict-popover-title-box">
            <span class="dict-popover-term" id="dict-term">Term</span>
            <span class="dict-popover-phonetic" id="dict-phonetic">/phonetic/</span>
          </div>
          <button class="dict-popover-close" id="dict-close" title="Fechar">&times;</button>
        </div>
        <div class="dict-popover-category" id="dict-category">Categoria</div>
        <div class="dict-popover-trans" id="dict-trans">Tradução em Português</div>
        <div class="dict-popover-def" id="dict-def">Definição contextual em fotografia...</div>
        <div class="dict-popover-example" id="dict-example">Exemplo...</div>
      </div>
    `;
    document.body.appendChild(this.popoverEl);

    document.getElementById("dict-close").addEventListener("click", (e) => {
      e.stopPropagation();
      this.hide();
    });
  }

  bindEvents() {
    document.addEventListener("mouseup", (e) => {
      if (this.popoverEl.contains(e.target)) return;
      this.handleSelection(e);
    });

    document.addEventListener("touchend", (e) => {
      if (this.popoverEl.contains(e.target)) return;
      setTimeout(() => this.handleSelection(e), 100);
    });

    window.addEventListener("scroll", () => this.hide(), { passive: true });
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.hide();
    });
  }

  normalize(str) {
    if (!str) return "";
    return str
      .toLowerCase()
      .trim()
      .replace(/^[“"'\(\[\{\s\.,:;]+|[”"'\)\]\}\s\.,:;]+$/g, "")
      .replace(/\s+/g, " ");
  }

  lookup(word) {
    const norm = this.normalize(word);
    if (!norm || norm.length < 2) return null;

    if (this.data[norm]) return this.data[norm];

    if (norm.endsWith("s") && this.data[norm.slice(0, -1)]) {
      return this.data[norm.slice(0, -1)];
    }
    if (norm.endsWith("es") && this.data[norm.slice(0, -2)]) {
      return this.data[norm.slice(0, -2)];
    }

    for (const key of Object.keys(this.data)) {
      if (key === norm || key.split(" ").includes(norm)) {
        return this.data[key];
      }
    }

    for (const [key, val] of Object.entries(this.data)) {
      if (key.includes(norm) || norm.includes(key)) {
        return val;
      }
    }

    return null;
  }

  handleSelection(e) {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      this.hide();
      return;
    }

    const selectedText = selection.toString().trim();
    if (!selectedText || selectedText.length < 2 || selectedText.length > 50) {
      this.hide();
      return;
    }

    const entry = this.lookup(selectedText);
    if (entry) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      this.showAt(rect, entry);
    } else {
      if (selectedText.split(" ").length <= 4) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        this.showQuickFallback(rect, selectedText);
      } else {
        this.hide();
      }
    }
  }

  showAt(rect, entry) {
    document.getElementById("dict-term").textContent = entry.term;
    document.getElementById("dict-phonetic").textContent = entry.phonetic || "";
    document.getElementById("dict-category").textContent = entry.category || "Termo Fotográfico";
    document.getElementById("dict-trans").textContent = entry.translation;
    document.getElementById("dict-def").textContent = entry.definition;
    
    const exEl = document.getElementById("dict-example");
    if (entry.example) {
      exEl.style.display = "block";
      exEl.innerHTML = `<strong>Exemplo:</strong> <em>"${entry.example}"</em>`;
    } else {
      exEl.style.display = "none";
    }

    this.positionPopover(rect);
  }

  showQuickFallback(rect, text) {
    document.getElementById("dict-term").textContent = text;
    document.getElementById("dict-phonetic").textContent = "Termo em Inglês";
    document.getElementById("dict-category").textContent = "Vocabulário do Curso";
    document.getElementById("dict-trans").textContent = "Palavra selecionada no texto";
    document.getElementById("dict-def").textContent = "Dica: consulte nosso Dicionário Fotográfico Geral no botão 'Dicionário' no topo para ver termos técnicos e definições detalhadas de fotografia.";
    document.getElementById("dict-example").style.display = "none";

    this.positionPopover(rect);
  }

  positionPopover(rect) {
    this.popoverEl.classList.add("visible");

    const popWidth = this.popoverEl.offsetWidth || 340;
    const popHeight = this.popoverEl.offsetHeight || 220;

    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    let left = rect.left + scrollX + (rect.width / 2) - (popWidth / 2);
    left = Math.max(16, Math.min(left, window.innerWidth - popWidth - 16));

    let top = rect.top + scrollY - popHeight - 12;

    if (rect.top - popHeight - 20 < 0) {
      top = rect.bottom + scrollY + 12;
    }

    this.popoverEl.style.left = `${left}px`;
    this.popoverEl.style.top = `${top}px`;
  }

  hide() {
    if (this.popoverEl) {
      this.popoverEl.classList.remove("visible");
    }
  }

  openTerm(termKey) {
    const entry = this.lookup(termKey);
    if (!entry) return;
    const modal = document.getElementById("dictionary-modal");
    if (modal) {
      modal.classList.add("active");
      const searchInput = document.getElementById("dict-modal-search");
      if (searchInput) {
        searchInput.value = entry.term;
        if (typeof window.renderDictionaryList === "function") {
          window.renderDictionaryList(entry.term);
        }
      }
    }
  }
}

let dictionaryInstance = null;
window.addEventListener("DOMContentLoaded", () => {
  dictionaryInstance = new PhotographyDictionary();
  window.appDictionary = dictionaryInstance;
});
