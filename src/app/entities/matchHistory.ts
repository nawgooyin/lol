export interface MatchHistory {
    matches: Matches[];
}

export interface Matches {
    platformId: number,
    gameId: number,
    champion: number,
    queue: number,
    season: number,
    timestamp: string,
    role: string,
    lane: string,
    championPictureUrl: string,
    win: boolean
}