import _ from 'underscore'

/**
 * @param {Array<string>} deck Arreglo de cartas
 * @returns {Array<String>} retorna una carta
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) throw new Error('Deck es obligatorio como un arreglo de string');

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    
    return carta;
}