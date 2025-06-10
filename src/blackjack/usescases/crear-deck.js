import _ from 'underscore'

/**
 * @param {Array<string>} tiposDeCartas Ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck
 */
export const crearDeck = ( tiposDeCartas, tiposEspeciales ) => {
    if ( !tiposDeCartas || tiposDeCartas.length === 0 ) throw new Error('Tipos de cartas es obligatorio como un arreglo de string');
    
    let deck = [];
    
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}