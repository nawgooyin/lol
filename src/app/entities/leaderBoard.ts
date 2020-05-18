export interface LeaderBoard {
    tier: string,
    leagueId: string
    queue: string,
    name: string,
    entries: LeaderBoardList[]
}


export interface LeaderBoardList {
    summonerName: string,
    leaguePoints: number,
    rank: string,
    wins: number,
    losses: number,
    veteran: boolean,
    inactive: boolean,
    freshBlood: boolean,
    hotStreak: boolean
}