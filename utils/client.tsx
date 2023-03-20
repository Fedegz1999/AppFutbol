import axios from "axios";

export default function arregladora(equipo:string) {
if(equipo === "Man City")equipo="M. City"
if(equipo === "Nottm Forest")equipo="Nott'm Forest"
if(equipo === "Aston Villa")equipo="A Villa"
if(equipo === "Wolverhampton")equipo="Wolves"
if(equipo === "Man Utd")equipo="M. United"
if(equipo === "Real Madrid")equipo="R. Madrid"
if(equipo === "Atletico Madrid")equipo="Atlético"
if(equipo === "Real Betis")equipo="Betis"
if(equipo === "Rayo Vallecano")equipo="Rayo"
if(equipo === "Athletic Bilbao")equipo="Athletic"
if(equipo === "Celta Vigo")equipo="Celta"
if(equipo === "Mainz")equipo="Mainz 05"
if(equipo === "Eintracht Frankfurt")equipo="Eintracht"
if(equipo === "Cologne")equipo="Colonia"
if(equipo === "Wolfsburg")equipo="Wolfsburgo"
if(equipo === "Augsburg")equipo="Augsburgo"
if(equipo === "Bochum")equipo="VfL Bochum 1848"
if(equipo === "Schalke")equipo="Schalke 04"
if(equipo === "Bayern Munich")equipo="Bayern Múnich"
if(equipo === "Lyon")equipo="O. Lyon"
if(equipo === "AC Ajaccio")equipo="Ajaccio"
if(equipo === "Clermont Foot")equipo="Clermont"
if(equipo === "Nice")equipo="Niza"
if(equipo === "Marseille")equipo="O. Marsella"
if(equipo === "PSG")equipo="Paris Saint-Germain"
if(equipo === "Gimnasia LP")equipo="Gimnasia"
if(equipo === "Racing Club")equipo="Racing"
if(equipo === "Central Cordoba")equipo="Central Córdoba de Santiago del Estero"
if(equipo === "Argentinos Jrs")equipo="Argentinos"
if(equipo === "Union Santa Fe")equipo="Unión"
if(equipo === "Estudiantes LP")equipo="Estudiantes"
if(equipo === "Rosario Central")equipo="Central"
if(equipo === "Colon")equipo="Colón"
if(equipo === "Lanus")equipo="Lanús"
if(equipo === "River Plate")equipo="River"
if(equipo === "Atlético Tucumán")equipo="Atl. Tucumán"
if(equipo === "CA Independiente")equipo="Independiente"
if(equipo === "Instituto AC Cordoba")equipo="Instituto"
if(equipo === "Huracan")equipo="Huracán"
if(equipo === "CA Talleres de Córdoba")equipo="Talleres"
if(equipo === "Velez Sarsfield")equipo="Vélez"
if(equipo === "CA Tigre")equipo="Tigre"
if(equipo === "Arsenal de Sarandi")equipo="Arsenal"
if(equipo === "Defensa y Justicia")equipo="Defensa"
if(equipo === "Boca Juniors")equipo="Boca"
if(equipo === "Cremonese")equipo="U.S. Cremonese"
if(equipo === "Bologna")equipo="Bolonia"
if(equipo === "AC Milan")equipo="Milan"
if(equipo === "Verona")equipo="Hellas Verona"
if(equipo === "Lecce")equipo="US Lecce"
if(equipo === "Napoli")equipo="Nápoles"
if(equipo === "Inter Milan")equipo="Inter Milán"
if(equipo === "")equipo=""
if(equipo === "")equipo=""
if(equipo === "")equipo=""
if(equipo === "")equipo=""

return equipo
}


export function Partidosmañana(){
    var fecha = new Date();
    let pr = fecha.getMonth()+1
    let p2 = fecha.getDate()+1
    let a = fecha.getFullYear()
    return(`${a}${pr > 9 ? "" : "0"}${pr}${p2 > 9 ? "" : "0"}${p2}`);
    // 2023 03 07
  }

  export const fecha = (unixTimestamp:number) => {
    var date = new Date(unixTimestamp*1000);
    return(date.getHours()+":"+date.getMinutes());
    }


