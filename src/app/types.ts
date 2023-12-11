/**
 * Type of the application.
 */
export enum ApplicationType {
    'senatoAccademico' = 'senatoAccademico',
    'consiglioAmministrazione' = 'consiglioAmministrazione',
    'nucleoValutazione' = 'nucleoValutazione',
    'comitatoSport' = 'comitatoSport',
    'consiglioAmministrazioneErsu' = 'consiglioAmministrazioneErsu',
    'consiglioDipartimento' = 'consiglioDipartimento',
    'consiglioCdl' = 'consiglioCdl',
    'scuolaMedicina' = 'scuolaMedicina',
}

/**
 * Color reference for the application type.
 * Used for labeling the application type in the card.
 */
export enum ApplicationTypeLabel {
    'senatoAccademico' = 'Senato Accademico (scheda gialla)',
    'consiglioAmministrazione' = 'Consiglio di Amministrazione (scheda bianca)',
    'nucleoValutazione' = 'Nucleo di Valutazione (scheda rosa)',
    'comitatoSport' = 'Comitato per lo Sport Universitario (scheda verde)',
    'consiglioAmministrazioneErsu' = 'Consiglio di Amministrazione ERSU (scheda arancione)',
    'consiglioDipartimento' = 'Consiglio di Dipartimento (scheda azzurra)',
    'consiglioCdl' = 'Consiglio di Corso di Laurea (scheda obbliqua)',
    'scuolaMedicina' = 'Scuola di Medicina (scheda obbliqua bianca)',
}

/**
 * Interface for the application card.
 * 
 * @param {ApplicationType} type - Type of the application.
 * @param {string} logo - Logo of the application.
 * @param {ApplicationTypeColorReference} colorLabelReference - Color reference for the application type.
 * @param {any} options - Use for custom settings, such as less then 500 students for the cdl card or the square logo for the medicine school.
 * @param {boolean} isActive - If the application is active or not.
 * 
 * @see ApplicationType
 * @see ApplicationTypeColorReference
 */
export interface ApplicationCard {
    key: ApplicationType;
    label: ApplicationTypeLabel;
    logo: string;
    options: any; // use for custom settings, such as less then 500 students for the cdl card or the square logo for the medicine school
    isActive: boolean;
}

// TODO: Automate object creation from images in assets/img
export const Logos = [
    { name: 'acteaarcadia', label: 'Actea - Arcadia', path: 'assets/img/ACTEA  ‐  ARCADIA.jpg'},
    { name: 'acteacrediamoci', label: 'Actea - Crediamoci', path: 'assets/img/ACTEA - CREDIAMOCI.jpg'},
    { name: 'acteaea', label: 'Actea - E.A.', path: 'assets/img/ACTEA ‐ E.A..jpg'},
    { name: 'actearagusa', label: 'Actea Ragusa', path: 'assets/img/ACTEA RAGUSA.jpg'},
    { name: 'actea', label: 'Actea', path: 'assets/img/ACTEA.jpg'},
    { name: 'agora', label: 'Agorà', path: 'assets/img/AGORÀ.jpg'},
    { name: 'agraria20', label: 'Agraria 2.0', path: 'assets/img/AGRARIA 2.0.jpg'},
    { name: 'agroinformazione', label: 'Agroinformazione', path: 'assets/img/AGROINFORMAZIONE.jpg'},
    { name: 'algoritmo', label: 'Algoritmo', path: 'assets/img/ALGORITMO.jpg'},
    { name: 'alimentazione', label: 'Alimentazione', path: 'assets/img/ALIMENTAZIONE.jpg'},
    { name: 'alleanzacontrocampus', label: 'Alleanza - Controcampus', path: 'assets/img/ALLEANZA  ‐  CONTROCAMPUS.jpg'},
    { name: 'alleanzaazioneuniversitariacontrocampus', label: 'Alleanza - Azione Universitaria- Controcampus', path: 'assets/img/ALLEANZA - AZIONE UNIVERSITARIA - CONTROCAMPUS.jpg'},    
];