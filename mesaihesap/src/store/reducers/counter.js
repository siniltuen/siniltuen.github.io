import { GIRIS_CIKIS_CIKART, GIRIS_CIKIS_EKLE } from '../types.js'
import GirisCikis from '../../Components/GirisCikis'
const default_state = 5;

const initialState = {
    girisCikisSayisi: [0, 0, 0, 0, 0, 0, 0],
    girisCikislar: [
        {
            gunAdi: 'Pazartesi',
            id: 0,
            count: 0,
            girisCikisListesi: []
        },
        {
            gunAdi: 'Salı',
            id: 1,
            count: 0,
            girisCikisListesi: []
        },
        {
            gunAdi: 'Çarşamba',
            id: 2,
            count: 0,
            girisCikisListesi: []
        },
        {
            gunAdi: 'Perşembe',
            id: 3,
            count: 0,
            girisCikisListesi: []
        },
        {
            gunAdi: 'Cuma',
            id: 4,
            count: 0,
            girisCikisListesi: []
        },
        {
            gunAdi: 'Cumartesi',
            id: 5,
            count: 0,
            girisCikisListesi: []
        },
        {
            gunAdi: 'Pazar',
            id: 6,
            count: 0,
            girisCikisListesi: []
        }

    ]
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case GIRIS_CIKIS_EKLE:
            // const newArray = [...state.girisCikisSayisi];
            // newArray[action.payload] = newArray[action.payload] + 1;
            // return {
            //     ...state,
            //     girisCikisSayisi: newArray,
            // }
            const newArray = [...state.girisCikislar];
            newArray[action.payload].count = newArray[action.payload].count + 1;
            newArray[action.payload].girisCikisListesi.push(<GirisCikis key={newArray[action.payload].count} number={newArray[action.payload].count} girisCikisSayisi={newArray[action.payload].count} id={newArray[action.payload].id
            } />)

            return {
                ...state,
                girisCikislar: newArray,
            }

        case GIRIS_CIKIS_CIKART:
            const newArrayRemove = [...state.girisCikislar];
            console.log(action.payload);
            for (var i = 0; i < newArrayRemove[action.payload.id].girisCikisListesi.length; i++) {
                console.log("girisCikis" + i);
                console.log(newArrayRemove[action.payload.id].girisCikisListesi[i]);
            }
            const filteredGirisCikis = newArrayRemove[action.payload.id].girisCikisListesi.filter(item => item.props.girisCikisSayisi !== action.payload.number);
            // newArrayRemove[action.payload.id].girisCikisListesi.splice(action.payload.number - 1, 1);
            newArrayRemove[action.payload.id].girisCikisListesi = filteredGirisCikis;
            if (newArrayRemove[action.payload.id].count > 0) {
                newArrayRemove[action.payload.id].count = newArrayRemove[action.payload.id].count - 1;
            }

            console.log("new array remove after deletion:");
            console.log(filteredGirisCikis);
            return {
                ...state,
                girisCikislar: newArrayRemove,
            }

        default:
            return state;
    }


};

export default reducer;