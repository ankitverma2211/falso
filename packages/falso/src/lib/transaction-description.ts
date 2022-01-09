import { rand } from './core';

export function transactionDescription() {
  return rand([
    'payment transaction at Hackett - Marvin using card ending with ***9518 for KES 659.34 in account ***77569583',
    'invoice transaction at Reinger LLC using card ending with ***6128 for TZS 578.74 in account ***09046470',
    'withdrawal transaction at Graham, Hintz and Kautzer using card ending with ***6993 for XFU 364.97 in account ***42109024',
    'withdrawal transaction at Beier, Lowe and Cole using card ending with ***2725 for FKP 355.56 in account ***38739908',
    'withdrawal transaction at Weber, Becker and Dooley using card ending with ***9644 for UYU 522.55 in account ***22952454',
    'withdrawal transaction at Rosenbaum Group using card ending with ***5238 for GTQ 550.41 in account ***53779785',
    'withdrawal transaction at Pacocha and Sons using card ending with ***7762 for KZT 291.88 in account ***28662976',
    'invoice transaction at Ritchie, Swaniawski and Tillman using card ending with ***3326 for PEN 320.16 in account ***81572503',
    'payment transaction at Sporer, Russel and Johns using card ending with ***8561 for BSD 49.46 in account ***40753949',
    'invoice transaction at Pollich - Feest using card ending with ***0151 for BGN 995.74 in account ***45124994',
    'payment transaction at Mitchell, Witting and Jenkins using card ending with ***6455 for BRL 414.81 in account ***60297052',
    'payment transaction at Douglas - Kshlerin using card ending with ***1221 for FJD 697.69 in account ***64255193',
    'withdrawal transaction at Lockman, Price and Carroll using card ending with ***3503 for GMD 541.50 in account ***70717815',
    'invoice transaction at Hoppe, Wintheiser and Batz using card ending with ***2246 for SEK 649.10 in account ***94960232',
    'invoice transaction at Grady LLC using card ending with ***1275 for ERN 687.24 in account ***74444840',
    'payment transaction at Swift, Weimann and Walker using card ending with ***8594 for GTQ 45.48 in account ***60086721',
    'invoice transaction at Schultz Inc using card ending with ***9482 for BMD 400.43 in account ***96041505',
    'withdrawal transaction at Goldner - Witting using card ending with ***7825 for GYD 421.41 in account ***90768047',
    'withdrawal transaction at Schulist, Hilll and Bartell using card ending with ***6573 for NZD 872.52 in account ***54121203',
    'deposit transaction at Zieme, Lehner and Gleichner using card ending with ***0827 for VEF 156.20 in account ***26149100',
    'deposit transaction at Koch - Walker using card ending with ***2306 for TZS 512.73 in account ***05872207',
    'invoice transaction at Torphy Inc using card ending with ***6469 for AMD 366.86 in account ***37786908',
    'deposit transaction at Swaniawski, Jacobs and Von using card ending with ***4536 for XOF 697.44 in account ***27001894',
    'deposit transaction at Zboncak Inc using card ending with ***3862 for UZS 320.44 in account ***60099034',
    'withdrawal transaction at Dietrich - Murazik using card ending with ***1002 for ZAR 105.18 in account ***50294326',
    'withdrawal transaction at Maggio - Halvorson using card ending with ***1379 for KHR 179.24 in account ***61746749',
    'invoice transaction at Boehm - Grimes using card ending with ***2777 for TND 381.62 in account ***83591742',
    'deposit transaction at Auer, Skiles and Keebler using card ending with ***0016 for JPY 608.36 in account ***84440199',
    'withdrawal transaction at Little - Wolff using card ending with ***2924 for THB 230.53 in account ***43816341',
    'withdrawal transaction at Medhurst - White using card ending with ***4614 for EGP 159.04 in account ***89114488',
    'invoice transaction at Stokes LLC using card ending with ***6557 for CNY 321.64 in account ***83288100',
    'invoice transaction at Wiegand - Romaguera using card ending with ***3175 for INR 836.94 in account ***06949915',
    'withdrawal transaction at Crooks Group using card ending with ***7654 for XFU 382.39 in account ***81754035',
    'invoice transaction at Nitzsche, Mohr and Conn using card ending with ***5490 for WST 584.41 in account ***65878389',
    'invoice transaction at Feeney, Schuster and Stark using card ending with ***9861 for SDG 704.54 in account ***36540267',
    'payment transaction at Lakin, Schmidt and Ankunding using card ending with ***2054 for PAB 209.20 in account ***16306136',
    'invoice transaction at Conn - Stroman using card ending with ***2326 for SHP 353.99 in account ***88973354',
    'payment transaction at Carroll - Sipes using card ending with ***1680 for IQD 997.64 in account ***30189790',
    "withdrawal transaction at O'Hara Inc using card ending with ***1559 for DOP 911.68 in account ***30291575",
    'withdrawal transaction at Schuppe - Funk using card ending with ***8122 for XDR 650.99 in account ***07023647',
    'payment transaction at Hegmann, Lueilwitz and Stark using card ending with ***3185 for XBB 699.74 in account ***03848762',
    'payment transaction at Bergstrom - Luettgen using card ending with ***2762 for FKP 275.19 in account ***34946388',
    'withdrawal transaction at Tromp Group using card ending with ***0355 for QAR 841.80 in account ***39395813',
    "invoice transaction at Runolfsson, Gislason and O'Keefe using card ending with ***9601 for DOP 658.13 in account ***89178354",
    'payment transaction at Koch - Kozey using card ending with ***8441 for EEK 852.98 in account ***15974496',
    'invoice transaction at Pacocha - Hand using card ending with ***4617 for TND 735.21 in account ***01593462',
    'withdrawal transaction at Koss - Nienow using card ending with ***6260 for SDG 331.62 in account ***63916794',
    'withdrawal transaction at Labadie, Wuckert and Mueller using card ending with ***7298 for GMD 994.31 in account ***41598275',
    'payment transaction at Ward, Maggio and Nienow using card ending with ***2288 for UYU 487.36 in account ***23821611',
    'deposit transaction at Bergstrom, Gerhold and Greenholt using card ending with ***9402 for RUB 857.28 in account ***59436223',
    'withdrawal transaction at Hayes and Sons using card ending with ***6176 for CAD 731.34 in account ***20128416',
    'deposit transaction at Emard, Kassulke and Ullrich using card ending with ***4186 for COP 431.47 in account ***74173865',
    'invoice transaction at Beahan LLC using card ending with ***4633 for GIP 655.69 in account ***29676214',
    'deposit transaction at Roberts, Cummings and Gleichner using card ending with ***0436 for GNF 248.72 in account ***72306089',
    'payment transaction at Lockman and Sons using card ending with ***3196 for XDR 997.75 in account ***65903997',
    'invoice transaction at Witting Group using card ending with ***0524 for GMD 669.66 in account ***16608800',
    'payment transaction at Morissette Inc using card ending with ***8223 for SOS 953.37 in account ***78177631',
    'payment transaction at Braun - Ward using card ending with ***7613 for NOK 361.42 in account ***25574293',
    'deposit transaction at Grimes, Towne and Cummings using card ending with ***7727 for YER 707.56 in account ***79342481',
    'invoice transaction at Beatty - Windler using card ending with ***8318 for CUC 239.93 in account ***23826215',
    'deposit transaction at Brakus - Abbott using card ending with ***7476 for AMD 875.55 in account ***84966949',
    'payment transaction at Hayes - Kunde using card ending with ***8955 for MWK 981.66 in account ***39830015',
    'payment transaction at Schoen - Bernhard using card ending with ***5605 for ETB 889.74 in account ***43754816',
    'invoice transaction at Weber - Kub using card ending with ***4042 for UYU 550.01 in account ***23613155',
    'payment transaction at Kohler - Stokes using card ending with ***9497 for IDR 653.59 in account ***13197945',
    'invoice transaction at Collier, Lockman and Hauck using card ending with ***3528 for SAR 239.09 in account ***23507882',
    'deposit transaction at Hettinger - Kling using card ending with ***2021 for LAK 96.38 in account ***56230930',
    'payment transaction at Gorczany, Connelly and Daniel using card ending with ***8031 for PHP 128.07 in account ***26515513',
    'payment transaction at Grimes, Mitchell and Thiel using card ending with ***0484 for HNL 212.92 in account ***04153333',
    'withdrawal transaction at Dach - Nicolas using card ending with ***0721 for HKD 251.44 in account ***31371732',
    'invoice transaction at Kling - Marks using card ending with ***1393 for ISK 698.45 in account ***68881460',
    'payment transaction at Wilkinson - Nicolas using card ending with ***1619 for CHF 869.70 in account ***20249615',
    'deposit transaction at Leffler - Bednar using card ending with ***9010 for IRR 550.15 in account ***06669768',
    'payment transaction at Grimes - Zboncak using card ending with ***9951 for SRD 388.63 in account ***61661789',
    'payment transaction at Dibbert - Hammes using card ending with ***9145 for GMD 23.52 in account ***85243431',
    'payment transaction at Hudson Inc using card ending with ***6097 for XDR 131.61 in account ***00391414',
    'withdrawal transaction at Altenwerth, Boyle and Emard using card ending with ***5134 for JPY 306.84 in account ***18834656',
    'deposit transaction at Runte - Lesch using card ending with ***7685 for ERN 399.75 in account ***28106326',
    'withdrawal transaction at Trantow - Gleichner using card ending with ***2076 for MUR 416.11 in account ***97568592',
    'withdrawal transaction at Wolff, Hahn and Connelly using card ending with ***6047 for XAF 421.28 in account ***72806505',
    'withdrawal transaction at Olson - Dicki using card ending with ***4914 for KPW 103.65 in account ***12847945',
    'payment transaction at Doyle, Littel and Wunsch using card ending with ***3743 for IDR 815.05 in account ***92496970',
    'deposit transaction at Tillman Group using card ending with ***2294 for XAF 360.22 in account ***29238763',
    'payment transaction at Davis LLC using card ending with ***7678 for CDF 574.28 in account ***45726373',
    'deposit transaction at Hoeger - Okuneva using card ending with ***8863 for XCD 154.64 in account ***89044915',
    'invoice transaction at Beer - Fadel using card ending with ***4699 for PLN 774.57 in account ***50255110',
    'deposit transaction at King - Hayes using card ending with ***4627 for INR 570.06 in account ***02974489',
    'payment transaction at Champlin, Gulgowski and Hauck using card ending with ***0267 for BGN 546.33 in account ***30046810',
    'payment transaction at Jast, Conroy and Wyman using card ending with ***5355 for KGS 443.52 in account ***64077572',
    'deposit transaction at Leannon, Gerlach and Lowe using card ending with ***9544 for XBD 606.44 in account ***66421907',
    'payment transaction at Wyman LLC using card ending with ***3807 for XBB 996.25 in account ***32329299',
    'invoice transaction at Hodkiewicz LLC using card ending with ***3594 for VEF 525.05 in account ***31078027',
    'invoice transaction at Lockman - Parker using card ending with ***2328 for GNF 614.90 in account ***67467958',
    'invoice transaction at Leffler Group using card ending with ***1894 for HKD 146.93 in account ***66214705',
    'withdrawal transaction at Harvey, Bogisich and Hettinger using card ending with ***9039 for NPR 68.75 in account ***69068206',
    'withdrawal transaction at Maggio - Steuber using card ending with ***9497 for XDR 910.77 in account ***08778013',
    'deposit transaction at Keeling, Gerlach and Stroman using card ending with ***5364 for KZT 747.08 in account ***65072168',
    "withdrawal transaction at O'Keefe - Dibbert using card ending with ***3408 for AUD 953.05 in account ***03447025",
    'payment transaction at Bernhard, Labadie and Rippin using card ending with ***2112 for IQD 596.68 in account ***22338219',
    'invoice transaction at Anderson - Luettgen using card ending with ***9931 for IDR 243.21 in account ***96732272',
  ]);
}