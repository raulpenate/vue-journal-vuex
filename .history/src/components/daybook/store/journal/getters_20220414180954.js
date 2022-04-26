// export const myGetter = ( state ) => {
// return state
// }

export const getEntriesByTerm = ( state ) => ( term = '' ) => {

    if ( term.length === 0 ) return state.entries;

    return state.entries;
}

export const getEntriesById = ( /*state*/ ) => {

}