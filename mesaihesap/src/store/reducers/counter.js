import { GIRIS_CIKIS_CIKART, GIRIS_CIKIS_EKLE } from '../types.js'

const default_state = 5;

const initialState = {
    girisCikisSayisi: [0, 0, 0, 0, 0, 0, 0],
    girisCikislar: [
        {
            gunAdi: 'Pazartesi',
            id: 0,
            count: 0
        },
        {
            gunAdi: 'Salı',
            id: 1,
            count: 0
        },
        {
            gunAdi: 'Çarşamba',
            id: 2,
            count: 0
        },
        {
            gunAdi: 'Perşembe',
            id: 3,
            count: 0
        },
        {
            gunAdi: 'Cuma',
            id: 4,
            count: 0
        },
        {
            gunAdi: 'Cumartesi',
            id: 5,
            count: 0
        },
        {
            gunAdi: 'Pazar',
            id: 6,
            count: 0
        }

    ]
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case GIRIS_CIKIS_EKLE:
            const newArray = [...state.girisCikisSayisi];
            newArray[action.payload] = newArray[action.payload] + 1;
            return {
                ...state,
                girisCikisSayisi: newArray,
            }

        case GIRIS_CIKIS_CIKART:
            const newArrayRemove = [...state.girisCikisSayisi];
            newArrayRemove[action.payload] = newArrayRemove[action.payload] - 1;
            return {
                ...state,
                girisCikisSayisi: newArrayRemove,
            }

        default:
            return state;
    }


};

export default reducer;