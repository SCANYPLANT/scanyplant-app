export const nomValidator = (nom: string) => {
    if (!nom || nom.length <= 0) return 'Veuillez saisir un nom';

    return '';
};

export const prenomValidator = (prenom: string) => {
    if (!prenom || prenom.length <= 0) return 'Veuillez saisir un prénom';

    return '';
};