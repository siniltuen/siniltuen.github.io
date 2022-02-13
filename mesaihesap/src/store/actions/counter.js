import { GIRIS_CIKIS_CIKART, GIRIS_CIKIS_EKLE, SAAT_KAYDET } from '../types.js'


export const arttir = (id) => {
    return {
        type: GIRIS_CIKIS_EKLE,
        payload: id
    };
};

export const azalt = (gunAdi) => {
    return {
        type: GIRIS_CIKIS_CIKART,
        payload: gunAdi
    };
};


export const saatKaydet = (id) => {
    return {
        type: SAAT_KAYDET,
        payload: id
    };
};