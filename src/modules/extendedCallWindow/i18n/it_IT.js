module.exports = {
    arrCounter: {
        resetTexts: {
            counter: 'Contatore AAR',
            highlight: 'Schema AAR',
            selection: 'Selezione veicoli',
            counter_highlight: 'Contatore / schema AAR',
            counter_selection: 'Contatore AAR e selezione del veicolo',
            highlight_selection: 'Schema AAR e selezione del veicolo',
            counter_highlight_selection:
                'Contatore AAR / bordo e selezione del veicolo',
        },
        reset: '{text} reset',
    },
    arrHover: {
        reset: 'La selezione del veicolo viene ripristinata prima!',
        headers: {
            set: 'Set',
            attribute: 'Name',
            free: 'Free',
            max: 'Max',
        },
        titles: {
            set:
                "Spesso questa combinazione viene selezionata quando si preme l'AAR",
            attribute: 'La combinazione descritta in questa riga',
            free: 'Così spesso questa combinazione è disponibile',
            max:
                'Puoi selezionare questo AAR fino a quando questa combinazione non sarà più disponibile',
        },
        arrSpecs: {
            fire: 'Autopompe',
            elw: 'Funzionario',
            elw2: 'UCL',
            dlk: 'Autoscala',
            rtw: 'Ambulanza BLSD',
            ktw: 'Ambulanza ordinaria o BLSD',
            ktw_or_rtw: 'Ambulanza ordinaria o BLSD',
            nef: 'Automedica (VLV)',
            nef_only: 'Automedica (VLV)',
            naw: 'Ambulanza MSA',
            naw_or_rtw_and_nef: 'MSA o VLV',
            naw_or_rtw_and_nef_or_rth: 'MSA o VLV o Elisoccorso',
            rw: 'Polisoccorso',
            rw_only: 'CA / POLI',
            fly_car: 'Automedica',
            rescueboat: 'Grande barca di salvataggio',
            fireboat: 'Grande Fireboat',
            gwa: 'Carro Aria',
            gwl2wasser: 'Autobotte',
            gwgefahrgut: 'N.B.C.R',
            gw_wasserrettung: 'Ritenzione delle acque',
            gw_taucher: 'Camion Tecnico NSSA',
            crew_carrier: 'AF/BUS',
            arff: 'ARFF',
            hems: 'Elisoccorso',
            rth_only: 'Elisoccorso',
            kdow_orgl: 'DTS',
            grtw: 'Unità vittime di massa',
            fustw: 'Auto di pattuglia',
            police_motorcycle: 'Moto della Polizia',
            fustw_or_police_motorcycle: 'Volante oppure Moto della Polizia',
            polizeihubschrauber: 'Elicottero della polizia',
            swat: 'Unità speciali',
            swat_armored_vehicle: 'Veicolo Antisommossa',
            swat_suv: 'UOPI Suv',
            k9: 'Unità cinofila antidroga',
            commerce_police: 'Volante Finanza',
            gkw: 'Utility Truck',
            boot: 'Barca',
            fwk: 'AG',
            fbi_bomb_tech: 'Furgone artificieri',
        },
    },
    generationDate: {
        inputFormat: 'DD. MMMM, HH:mm',
    },
    enhancedMissingVehicles: {
        vehicle: 'Tipo di veicolo',
        missing: 'Manca sulla missione',
        driving: 'In avvicinamento',
        total: 'Ancora necessario',
        tip: {
            dragging: 'trascinare la finestra',
            textMode: 'modalità testo on/off',
            minified: 'crollo',
            overlay: 'Sovrapposizione',
            reload: 'Ricaricare',
        },
        selected: 'Selezionato',
        vehiclesByRequirement: {
            [/^APS\/ABP$/]: [0, 9],
            [/^Autogrù$/]: [12],
            [/^Autoscala?$/]: [1],
            [/^Funzionari(o)?$/]: [2, 11],
            [/^Polisoccorso?$/]: [3, 9, 12],
            [/^Carro aria$/]: [10],
            [/^Kilolitric(a|he)?$/]: [5],
            [/^UCL?$/]: [11],
            [/^N\.B\.C\.R\.$/]: [6],
            [/^Ambulance(s)?$/]: [4, 20],
            [/^Volanti?$/]: [7, 16],
            [/^Furgoni artificieri$/]: [22],
            [/^Elicottero della polizia?$/]: [13],
            [/^Unità antisommossa$/]: [14],
            [/^Unit(à)? cinofila antidroga$/]: [15],
            [/^UOPI SUV$/]: [17],
            [/^Volante Finanza?$/]: [21],
            [/^Camion Tecnico NSSA?$/]: [23],
            [/^Pickup SAF?$/]: [24],
            [/^Barche?$/]: [25],
        },
    },
    tailoredTabs: {
        allTab: 'Tutti',
        occupiedTab: 'Continua missioni',
    },
    hideVehicleList: {
        show: 'Mostra lista veicoli',
        hide: 'Nascondi lista veicoli',
    },
};
