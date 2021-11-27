export class Game {
    id: number | null;
    title: string;
    description: string;
    images: string[];
    ageRating:  string;
}

export class PlayedGame {
    id: number;
    playtime: number;
    deleted: boolean;
}

export class User {
    id: number | null;
    username: string;
    playedGames: PlayedGame[];
}

export let games: Game[] = [
    {
        id: 0,
        title: "Mirror's Edge",
        description: "In a city where information is heavily monitored, couriers called Runners transport sensitive data. In this seemingly utopian paradise, a crime has been committed, & you are being hunted. You are a Runner called Faith and this innovative first-person action-adventure is your story.",
        ageRating: "T",
        images: ['image_0', 'image_1'],
    },
    {
        id: 1,
        title: "Deus Ex: Game of the Year Edition",
        description: "The year is 2052 and the world is a dangerous and chaotic place. Terrorists operate openly - killing thousands; drugs, disease and pollution kill even more. The world's economies are close to collapse and the gap between the insanely wealthy and the desperately poor grows ever wider.",
        images: ['image_0'],
        ageRating: "M"
    },
    {
        id: 2,
        title: "Titanfall 2",
        description: "Respawn Entertainment gives you the most advanced titan technology in its new, single player campaign & multiplayer experience. Combine & conquer with new titans & pilots, deadlier weapons, & customization and progression systems that help you and your titan flow as one unstoppable killing force.",
        images: ['image_0', 'image_1', 'image_3'],
        ageRating: "M"
    },
    {
        id: 3,
        title: "FINAL FANTASY XIV Online",
        description: "Take part in an epic and ever-changing FINAL FANTASY as you adventure and explore with friends from around the world.",
        images: ['image_0', 'image_1', 'image_3', 'image_4'],
        ageRating: "T"
    },
];

export let users: User[] = [
    {
        id: 0,
        username: "xXx_sephiroth1997_xXx",
        playedGames: [
            {
                id: 3,
                playtime: 24000,
                deleted: false,
            },
            {
                id: 0,
                playtime: 1200,
                deleted: false,
            },
            {
                id: 2,
                playtime: 600,
                deleted: false,
            },
        ]
    },
    {
        id: 1,
        username: "Gregor",
        playedGames: [
            {
                id: 2,
                playtime: 10500,
                deleted: false,
            },
            {
                id: 1,
                playtime: 13800,
                deleted: false,
            }
        ]
    }
];