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
        name: "Como perder um homem em 10 dias",
        videoURL: "video/Como perder um homem em 10 dias.mp4",
        imageURL: "image/Como perder um homem em 10 dias.jpg",
        category: "Romance",
        description: "Um jogador aposta com colegas que pode fazer uma mulher se apaixonar por ele em 10 dias. Mas aposta na garota errada, uma escritora com um projeto próprio."
    },
    {
        id: "2",
        name: " Amor com data marcada",
        videoURL: "video/Amor com data marcada.mp4",
        imageURL: "image/Amor com data marcada.jpg",
        category: "Romance",
        description: "Vida animal"
    },
    {
        id: "3",
        name: "Uma parede entre nós",
        videoURL: "video/Uma parede entre nos.mp4",
        imageURL: "image/Uma parede entre nos.jpg",
        category: "Romance",
        description: "Vida animal"
    },
    {
        id: "4",
        name: "Meninas não choram",
        videoURL: "video/Meninas não choram.mp4",
        imageURL: "image/Meninas não choram.jpg",
        category: "Drama",
        description: "Vida animal"
    },
    {
        id: "5",
        name: "Mãos talentosas",
        videoURL: "video/Mãos talentosas.mp4",
        imageURL: "image/Mãos talentosas.jpg",
        category: "Drama",
        description: "Vida animal"
    },
    {
        id: "6",
        name: "Amor a primeira vista",
        videoURL: "video/Amor a primeira vista.mp4",
        imageURL: "image/Amor a primeira vista.jpg",
        category: "Drama",
        description: "Vida animal"
    },
    {
        id: "7",
        name: "O poço 2",
        videoURL: "video/O poço 2.mp4",
        imageURL: "image/O poço 2.jpg",
        category: "Suspense",
        description: "Vida animal"
    },
    {
        id: "8",
        name: "Fuja",
        videoURL: "video/Fuja.mp4",
        imageURL: "image/Fuja.jpg",
        category: "Suspense",
        description: "Vida animal"
    },
    {
        id: "9",
        name: "Nerve um jogo sem regras",
        videoURL: "video/Nerve um jogo sem regras.mp4",
        imageURL: "image/Nerve um jogo sem regras.jpg",
        category: "Suspense",
        description: "Vida animal"
    },
    {
        id: "10",
        name: "Cabras da peste",
        videoURL: "video/Cabras da peste.mp4",
        imageURL: "image/Cabras da peste.jpg",
        category: "Ação",
        description: "Vida animal"
    },
    {
        id: "11",
        name: "Truque de mestre o segundo ato",
        videoURL: "video/Truque de mestre o segundo ato.mp4",
        imageURL: "image/Truque de mestre o segundo ato.jpg",
        category: "Ação",
        description: "Vida animal"
    },
    {
        id: "12",
        name: "Jogos vorazes",
        videoURL: "video/Jogos vorazes 1.mp4",
        imageURL: "image/Jogos vorazes 1.jpg",
        category: "Ação",
        description: "Vida animal"
    }
]
export default videos;
