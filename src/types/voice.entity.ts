export enum Voice {
    // Disney Voices
    GHOST_FACE = "en_us_ghostface",
    CHEWBACCA = "en_us_chewbacca",
    C3PO = "en_us_c3po",
    STITCH = "en_us_stitch",
    // Stormtrooper
    DEFAULT = "en_us_stormtrooper",
    ROCKET = "en_us_rocket",

    // English Voices
    METRO = "en_au_001",
    SMOOTH = "en_au_002",
    NARRATOR = "en_uk_001",
    UK_MALE = "en_uk_003",
    US_FEMALE = "en_us_001",
    JESSIE = "en_us_002",
    JOEY = "en_us_006",
    SCIENTIST = "en_us_009",

    // Europe Voices
    FR_MALE1 = "fr_001",
    DE_MALE1 = "de_001",
    DE_MALE2 = "de_002",
    ES_MALE = "es_002",

    // America Voices
    ES_MX_MALE = "es_mx_002",
    BR_FEMALE1 = "br_001",
    BR_MALE = "br_005",
    TOON_BEAT = "en_male_m03_sunshine_soon",

    // Asia Voices
    JP_FEMALE1 = "jp_001",
    JP_MALE = "jp_006",
    KR_MALE1 = "kr_002",
    KR_FEMALE = "kr_003",

    // Singing Voices
    COTTAGECORE = "en_female_f08_salut_damour",
    JINGLE = "en_male_m03_lobby",
    OPEN_MIC = "en_female_f08_warmy_breeze",

    // Other
    STORRY_TELLER = "en_male_narration",
    WACKY = "en_male_funny",
    PEACEFUL = "en_female_emotional",

    TRICKSTER = "en_male_grinch",
    MAGICIAN = "en_male_wizard",
    MADAME_LEOTA = "en_female_madam_leota",
    EMPATHETIC = "en_female_samc",
    SERIOUS = "en_male_cody",
}

const voiceDescriptions: { [key in Voice]: string } = {
    [Voice.GHOST_FACE]: "Ghost Face (Scream)",
    [Voice.CHEWBACCA]: "Chewbacca (Star Wars) [non-intelligible]",
    [Voice.C3PO]: "C3PO (Star Wars)",
    [Voice.STITCH]: "Stitch (Lilo & Stitch)",
    [Voice.DEFAULT]: "Stormtrooper (Star Wars)",
    [Voice.ROCKET]: "Rocket (Guardians of the Galaxy)",
    [Voice.METRO]: "Metro (English AU - Female)",
    [Voice.SMOOTH]: "Smooth (English AU - Male)",
    [Voice.NARRATOR]: "Narrator (English UK - Male 1)",
    [Voice.UK_MALE]: "English UK - Male",
    [Voice.US_FEMALE]: "English US - Female (Int. 1)",
    [Voice.JESSIE]: "Jessie (English US - Female Int. 2)",
    [Voice.JOEY]: "Joey (English US - Male 1)",
    [Voice.SCIENTIST]: "Scientist (English US - Male 3)",
    [Voice.FR_MALE1]: "French - Male 1",
    [Voice.DE_MALE1]: "German - Female",
    [Voice.DE_MALE2]: "German - Male",
    [Voice.ES_MALE]: "Spanish - Male",
    [Voice.ES_MX_MALE]: "Spanish MX - Male",
    [Voice.BR_FEMALE1]: "Portuguese BR - Female 1",
    [Voice.BR_MALE]: "Portuguese BR - Male",
    [Voice.TOON_BEAT]: "Toon Beat",
    [Voice.JP_FEMALE1]: "Japanese - Female 1",
    [Voice.JP_MALE]: "Japanese - Male",
    [Voice.KR_MALE1]: "Korean - Male 1",
    [Voice.KR_FEMALE]: "Korean - Female",
    [Voice.COTTAGECORE]: "Cottagecore",
    [Voice.JINGLE]: "Jingle",
    [Voice.OPEN_MIC]: "Open Mic",
    [Voice.STORRY_TELLER]: "Story Teller",
    [Voice.WACKY]: "Wacky",
    [Voice.PEACEFUL]: "Peaceful",
    [Voice.TRICKSTER]: "Trickster",
    [Voice.MAGICIAN]: "Magician",
    [Voice.MADAME_LEOTA]: "Madame Leota",
    [Voice.EMPATHETIC]: "Empathetic",
    [Voice.SERIOUS]: "Serious",
};

export function getVoiceDescription(voice: Voice): String {
    return voiceDescriptions[voice];
}

export const voices = Object.values(Voice);

export function fromVoiceCode(code: string): Voice {
    const voice = voices.find((voice) => voice === code);
    return voice || Voice.DEFAULT;
}
