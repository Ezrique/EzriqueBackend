export enum MusicSearchMode {
    YOUTUBE,
    SPOTIFY,
    SOUNDCLOUD,
}

export function getBitsForSearchModes(...modes: MusicSearchMode[]): number {
    return modes.reduce((bits, mode) => bits | (1 << mode), 0);
}

export function getSearchModesFromBits(bits: number): MusicSearchMode[] {
    return Object.values(MusicSearchMode)
        .filter((value): value is MusicSearchMode => typeof value === "number")
        .filter((mode) => (bits & (1 << mode)) !== 0);
}
