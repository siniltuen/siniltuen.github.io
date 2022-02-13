import { GIRIS_CIKIS_CIKART, GIRIS_CIKIS_EKLE, SAAT_KAYDET } from '../types.js'
import GirisCikis from '../../Components/GirisCikis'
import Saat from '../../Components/Saat'
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
            {
                const newArray = [...state.girisCikislar];
                newArray[action.payload].count = newArray[action.payload].count + 1;
                const id = newArray[action.payload].count;
                newArray[action.payload].girisCikisListesi.push(<GirisCikis /*girisSaati={<Saat alanAdi={"Giriş Saati -" + id} gunId={id} girisCikisId={id} />}
                    cikisSaati={<Saat alanAdi={"Çıkış Saati -" + id} gunId={id} girisCikisId={id} />} */ key={newArray[action.payload].count} number={newArray[action.payload].count} girisCikisSayisi={newArray[action.payload].count} id={newArray[action.payload].id
                    } />)

                return {
                    ...state,
                    girisCikislar: newArray,
                }
            }

        case GIRIS_CIKIS_CIKART:
            {
                const newArrayRemove = [...state.girisCikislar];
                console.log(action.payload);

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
            }
        case SAAT_KAYDET:
            {
                const newArray = [...state.girisCikislar];
                var selectedGirisCikis = newArray[action.payload.gunId].girisCikisListesi.filter(item => item.props.girisCikisSayisi === action.payload.girisCikisId);

                console.log("Selected Giris Çıkış:");
                console.log(selectedGirisCikis[0]);




                return {
                    ...state,
                    girisCikislar: newArray,
                }
            }

        default:
            return state;


    }


};

export default reducer;