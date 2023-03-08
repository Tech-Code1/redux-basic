import { Action } from "../ngx-fake/ngrx"

export function contadorReducer(state = 10, {type, payload}: Action) {

    switch (type) {
        case 'INCREMENTAR':
            return state += 1

        case 'DECREMENTAR':
            return state -= 1

        case 'MULTIPLICAR':
            return state * payload

        case 'DIVIDIR':
            return state / payload

        case 'RESET':
            return state = 0
    
        default:
            return state
    }
}
