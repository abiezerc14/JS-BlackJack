import _ from 'underscore'

/**
 * @param {string} carta
 * @returns {Number} retorna un valor de la carta recibida
 */
export const valorCarta = ( carta ) => {

if ( !carta ) throw new Error('Carta es obligatorio');

    const valor = carta.substring(0, carta.length - 1);

    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}