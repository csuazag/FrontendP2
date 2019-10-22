import { Component, OnInit } from '@angular/core';
import * as decodePolyline from 'decode-google-map-polyline';

@Component({
  selector: 'app-newyork',
  templateUrl: './newyork.component.html',
  styleUrls: ['./newyork.component.css']
})
export class NewyorkComponent implements OnInit {

  table1 = [
    { zona: 'brooklyn', subZona: 'Fort Hamilton', nVehiculos: 12, velocidadProm: 41.8875, tiempoProm: 50.75, date: '03-01-2017 05', link_name: 'VNB E-GOWANUS N BROOKLYN GANTRY LOWER LEVEL - 92ND STREET', encoded_poly_line: 'ahzvFjx{bM_Kyc@cBaI{BgHcBgC{F_EyDaDkMiJ', humedad: 98, presion: 1032, temperatura: 279.150666667, descripcionClima: 'light rain', windDirection: 80, windSpeed: 1, accidentes: 1, heridos: 0, muertos: 0 },
    { zona: 'queens', subZona: 'Queens Village', nVehiculos: 12, velocidadProm: 61.82, tiempoProm: 177.25, date: '11-12-2016 05', link_name: 'CIP N Hempstead Tpk - LIE', encoded_poly_line: '}nnwFla_aM{GhBiBRwFNuDe@aEsAyB{AmJ_IsDqBaCy@yIsBwCe@mt@sJyHu@kCIwDP{CZwB`@gJrCaDnBgGfG}ClFsD~HyGnQeHlNmC~DyDxE{HvIwBxCmCvEqDjHmBtCyCdDsC`CgRpNyIrHwD~DcB`C', humedad: 81, presion: 1018, temperatura: 294.77, descripcionClima: 'few clouds', windDirection: 92, windSpeed: 3, accidentes: 1, heridos: 0, muertos: 0 },
    { zona: 'manhattan', subZona: 'Sutton Place', nVehiculos: 12, velocidadProm: 41.4725, tiempoProm: 165, date: '10-02-2016 20', link_name: 'FDR S 63rd - 25th St', encoded_poly_line: 'iaxwF|tkbMhBnCtChChGpEjGxE~CvBxEnGlGhFrA|AfAp@hEdEbGtEpF~DzE|DvGhFlGhG~CxB|EjC~BfA`Dv@zMfBxAd@bChApBrA~DfC', humedad: 22, presion: 997, temperatura: 293.93, descripcionClima: 'scattered clouds', windDirection: 212, windSpeed: 3, accidentes: 1, heridos: 0, muertos: 0 },
    { zona: 'queens', subZona: 'Astoria', nVehiculos: 12, velocidadProm: 22.6233333333333, tiempoProm: 444.333333333333, date: '09-03-2016 04', link_name: 'TBB N QUEENS ANCHORAGE - BE N', encoded_poly_line: 'ajzwFtmdbMmHhLyBbCkEhDiQrLsOjKcOjKcCx@_DJmC[{Am@}A_AsFyEsJkIgPkM{BiBuDiDkFiF{DsCuDaCqC_BqEuDeUwOcAkA', humedad: 87, presion: 1016, temperatura: 286.46, descripcionClima: 'overcast clouds', windDirection: 105, windSpeed: 5, accidentes: 1, heridos: 0, muertos: 0 },
    { zona: 'staten "island', subZona: 'Bloomfield', nVehiculos: 12, velocidadProm: 59.0783333333333, tiempoProm: 117.75, date: '02-10-2017 02', link_name: 'SIE W - WSE S SOUTH AVENUE - SOUTH AVENUE', encoded_poly_line: 'ibyvFzyxcMeQsQmJwGiQcIid@qU{GmBsKgC{HyHuCsGcA{E_@mH\eCjCoLaCxK', humedad: 78, presion: 1015, temperatura: 300.66, descripcionClima: 'light rain', windDirection: 40, windSpeed: 7, accidentes: 1, heridos: 0, muertos: 0 },
    { zona: 'manhattan', subZona: 'West Village', nVehiculos: 12, velocidadProm: 22.1041666666667, tiempoProm: 148.5, date: '03-06-2017 10', link_name: '11th ave s ganservoort - west st @ spring st', encoded_poly_line: 'y{swFvavbMjANlGSvQn@fa@fBhQdA', humedad: 76, presion: 1017, temperatura: 283.52, descripcionClima: 'light rain', windDirection: 0, windSpeed: 0, accidentes: 1, heridos: 0, muertos: 0 },
    { zona: 'brooklyn', subZona: 'Bay Ridge', nVehiculos: 12, velocidadProm: 8.17333333333333, tiempoProm: 486, date: '08-06-2016 09', link_name: 'GOW N 9TH STREET - ATLANTIC AVENUE', encoded_poly_line: 'omgwFfhtbMeDnAaDbB_F|CqDzC_ARwAQqBy@qDuAmVoJkK}DsK_EcBc@yBAuBb@yBt@', humedad: 93, presion: 1014, temperatura: 278.7, descripcionClima: 'overcast clouds', windDirection: 100, windSpeed: 1, accidentes: 1, heridos: 0, muertos: 0 },
    { zona: 'bronx', subZona: 'University Heights', nVehiculos: 12, velocidadProm: 15.0116666666667, tiempoProm: 306.583333333333, date: '11-01-2016 19', link_name: 'MDE S HARLEM RIVER PARK - GWB W AMSTERDAM AVENUE LOWER LEVEL', encoded_poly_line: 'qojxFpfdbMrN|LlO`NtTtQ~FtClClAv@Ar@k@XkAQsBsAqDgB}@aBx@k@bCZnC', humedad: 54, presion: 1014, temperatura: 300.69, descripcionClima: 'overcast clouds', windDirection: 170, windSpeed: 10, accidentes: 1, heridos: 0, muertos: 0 },
    { zona: 'bronx', subZona: 'Castle Hill', nVehiculos: 6, velocidadProm: 48.15, tiempoProm: 96.1666666666667, date: '05-05-2017 20', link_name: 'BWB S Toll Plaza - Queens Anchorage', encoded_poly_line: 'gsbxFfftaMrFQ`BQvBWxBs@rCcBpe@wVnb@iU', humedad: 52, presion: 1016, temperatura: 291.91, descripcionClima: 'broken clouds', windDirection: 160, windSpeed: 4, accidentes: 1, heridos: 0, muertos: 0 },
    { zona: 'queens', subZona: 'Bay Terrace', nVehiculos: 12, velocidadProm: 58.6641666666667, tiempoProm: 281.333333333333, date: '11-02-2015 13', link_name: 'CVE NB GCP - WILLETS PT BLVD', encoded_poly_line: 'uk}wFtckaMfH}Kr@cAbAoAzAyAvCeCt@e@|EwBxBg@jR_CzTo@pMYfEi@jCk@de@}RbReIrLyEve@sJxMmDb[iL|CwApFkCfAuAPaDcBkKc@uD', humedad: 52, presion: 1016, temperatura: 291.91, descripcionClima: 'broken clouds', windDirection: 160, windSpeed: 4, accidentes: 1, heridos: 0, muertos: 0 },
    { zona: 'manhattan', subZona: 'Financial District', nVehiculos: 12, velocidadProm: 17.6, tiempoProm: 403.25, date: '08-09-2017 11', link_name: 'BBT E Manhattan Portal - Toll Plaza', encoded_poly_line: 'mmmwFx`wbMxDt@rAb@rFv@jCNbJOfEaAre@yMft@y_@`K}EjHcC`EkCnGgF', humedad: 86, presion: 1012, temperatura: 292.38, descripcionClima: 'sky is clear', windDirection: 82, windSpeed: 0, accidentes: 1, heridos: 0, muertos: 0 }
  ];

  table2 = [
    { name: "Wakefield", borough: 'Bronx', latitude: 40.89470517661, longitude: -73.8472005205491},
    { name: "Co-op City", borough: 'Bronx', latitude: 40.8742941930302, longitude: -73.8299391081241},
    { name: "Eastchester", borough: 'Bronx', latitude: 40.8875556773508, longitude: -73.8278064471642},
    { name: "Fieldsto", borough: 'Bronx', latitude: 40.8954374269039, longitude: -73.9056425959169},
    { name: "Riverdal", borough: 'Bronx', latitude: 40.8908344938913, longitude: -73.9125854610858},
    { name: "Kingsbridg", borough: 'Bronx', latitude: 40.8816873712053, longitude: -73.9028179872461},
    { name: "Marble Hil", borough: 'Manhattan', latitude: 40.8765507787997, longitude: -73.9106596586299},
    { name: "Woodlaw", borough: 'Bronx', latitude: 40.8982726121381, longitude: -73.8673149681418},
    { name: "Norwoo", borough: 'Bronx', latitude: 40.8772241559945, longitude: -73.8793907395682},
    { name: "Williamsbridg", borough: 'Bronx', latitude: 40.8810388781921, longitude: -73.8574464297421},
    { name: "Baychester", borough: 'Bronx', latitude: 40.8668581072527, longitude: -73.8357975980812}
  ];

  
  constructor() {
    //console.log(decodePolyline(this.polyline));

  }

  ngOnInit() {

  }

  getValue() {

  }

}
