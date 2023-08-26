import { logo_manada, logo_tropa, logo_caminantes, logo_clan } from "../assets";
import { Manada } from "../pages/Manada";
import { Tropa } from "../pages/Tropa";
import { Comunidad } from "../pages/Comunidad";
import { Clan } from "../pages/Clan";


export const secciones = [
    {
        title: "manada",
        logo: logo_manada,
        page: Manada,
    },
    {
        title: "tropa",
        logo: logo_tropa,
        page: Tropa,
    },
    {
        title: "comunidad",
        logo: logo_caminantes,
        page: Comunidad,
    },
    {
        title: "clan",
        logo: logo_clan,
        page: Clan,
    }
];
