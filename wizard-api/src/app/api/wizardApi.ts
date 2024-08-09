/**
 * TODO: Next step...
 * 
 * Read about "fetch" in JS: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * 
 * Implement fetch to retrieve the "Beginner Elixirs" from the free wizard API listed in the readme
 * 
 */


const enum elixirDifficulty {
    'Unknown'
    , 'Advanced'
    , 'Moderate'
    , 'Beginner'
    , 'OrdinaryWizardingLevel'
    , 'OneOfAKind'
}

interface ElixirApiData {
    name?: string;
    difficulty?: elixirDifficulty;
    ingredient?: string;
    inventorFullName?: string;
    manufacturer?: string;
}

export const fetchElixirList = async (difficulty?: elixirDifficulty) => {
    if (typeof difficulty === 'undefined') {
        difficulty = elixirDifficulty.Beginner;
    }

    const body = encodeURI(`difficulty=${difficulty}`);

    return await fetch(
        `https://wizard-world-api.herokuapp.com/Elixirs?${body}`
    );

    // return [];
}