export type Video = {
    id: string;
    name: string;       // Add a name field to each video object
    videoURL: string;
    imageURL: string;
    category: string;  // Add a category field to each video object
    description: string;
}

const videos: Video[] = [
    {
        id: "1",
        name: "COMO PERDER UM HOMEM EM 10 DIAS",
        videoURL: "video/Como perder um homem em 10 dias.mp4",
        imageURL: "image/Como perder um homem em 10 dias.jpg",
        category: "Romance",
        description: "Um jogador aposta com colegas que pode fazer uma mulher se apaixonar por ele em 10 dias. Mas aposta na garota errada, uma escritora com um projeto próprio."
    },
    {
        id: "2",
        name: "AMOR COM DATA MARCADA",
        videoURL: "video/Amor com data marcada.mp4",
        imageURL: "image/Amor com data marcada.jpg",
        category: "Romance",
        description: "Cansados de estar sozinhos nos feriados, dois estranhos aceitam acompanhar um ao outro em todas as festas do ano. Tudo platônico, nada de sentimentos. Será que rola?"
    },
    {
        id: "3",
        name: "UMA PAREDE ENTRE NÓS",
        videoURL: "video/Uma parede entre nos.mp4",
        imageURL: "image/Uma parede entre nos.jpg",
        category: "Romance",
        description: "Valentina é uma pianista que acaba de se mudar para um novo apartamento depois do término com o ex-namorado, e precisa praticar o tempo todo para uma audição."
    },
    {
        id: "4",
        name: "MENINAS NÃO CHORAM",
        videoURL: "video/Meninas não choram.mp4",
        imageURL: "image/Meninas não choram.jpg",
        category: "Drama",
        description: "A adolescente Pipa é fã de futebol feminino e o destaque do time da escola. Popular e com um futuro promissor, ela vê os seus planos interrompidos com o diagnóstico de leucemia."
    },
    {
        id: "5",
        name: "MÃOS TALENTOSAS",
        videoURL: "video/Mãos talentosas.mp4",
        imageURL: "image/Mãos talentosas.jpg",
        category: "Drama",
        description: "A história de Ben Carson, menino pobre de Detroit, que tirava notas ruins na escola, e se tornou o diretor do centro de neurologia pediátrica do hospital Johns Hopkins."
    },
    {
        id: "6",
        name: "AMOR À PRIMEIRA VISTA",
        videoURL: "video/Amor a primeira vista.mp4",
        imageURL: "image/Amor a primeira vista.jpg",
        category: "Drama",
        description: "Em um voo para Londres, dois estranhos sentem uma conexão, mas logo se perdem no aeroporto. O reencontro parece impossível, só que o amor desafia todas as probabilidades."
    },
    {
        id: "7",
        name: "O POÇO  2",
        videoURL: "video/O poço 2.mp4",
        imageURL: "image/O poço 2.jpg",
        category: "Suspense",
        description: "Após um líder misterioso impor sua própria lei em um sistema brutal de celas verticais, uma mulher luta contra um método bizarro de distribuição de comida."
    },
    {
        id: "8",
        name: "FUJA",
        videoURL: "video/Fuja.mp4",
        imageURL: "image/Fuja.jpg",
        category: "Suspense",
        description: "Após anos vivendo isolada e sob cuidados médicos e desejando liberdade, Chloe começa a desconfiar que sua mãe esteja escondendo um segredo sinistro."
    },
    {
        id: "9",
        name: "NERVE UM JOGO SEM REGRAS",
        videoURL: "video/Nerve um jogo sem regras.mp4",
        imageURL: "image/Nerve um jogo sem regras.jpg",
        category: "Suspense",
        description: "Provocada pelos amigos, adolecentes se iincreve em um jogo virtual, mas com desafios reais e cada vez mais perigosos. Agora, sua unica saida é vencer."
    },
    {
        id: "10",
        name: "CABRAS DA PESTE",
        videoURL: "video/Cabras da peste.mp4",
        imageURL: "image/Cabras da peste.jpg",
        category: "Ação",
        description: "Dois polícias desastrados dão um passo maior que a perna ao oporem-se a criminosos perigosos enquanto procuram Celestina, uma adorada cabra mascote."
    },
    {
        id: "11",
        name: "TRUQUE DE MESTRE O SEGUNDO ATO",
        videoURL: "video/Truque de mestre o segundo ato.mp4",
        imageURL: "image/Truque de mestre o segundo ato.jpg",
        category: "Ação",
        description: "Após enganarem o FBI, os três cavaleiros, Daniel Atlas, Merritt McKinney e Jack Wilder, estão foragidos. Eles seguem as ordens de Dylan Rhodes, que segue trabalhando no FBI de forma a impedir os avanços na procura dos próprios cavaleiros."
    },
    {
        id: "12",
        name: "JOGOS VORAZES 1",
        videoURL: "video/Jogos vorazes 1.mp4",
        imageURL: "image/Jogos vorazes 1.jpg",
        category: "Ação",
        description: "Em uma futuro distópico, os adolecentes Katniss e Peeta são forçados a participar de um evento televisionado em que precisam lutar contra os concorrentes até a morte."
    }
]
export default videos;
