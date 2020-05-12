export const emailValidator = (email: string) => {
    const mailRegex = /\S+@\S+\.\S+/;

    if (!email || email.length <= 0) return 'Le mail ne peut pas être vide';
    if (!mailRegex.test(email)) return 'Ooops! Saisissez une adresse mail correcte svp';

    return '';
};

export const passwordValidator = (password: string) => {
    if (!password || password.length <= 0) return 'Le mot de passe est obligatoire ';

    return '';
};

export const nomValidator = (nom: string) => {
    if (!nom || nom.length <= 0) return 'Le nom est obligatoire';

    return '';
};
export const prenomValidator = (prenom: string) => {
    if (!prenom || prenom.length <= 0) return 'Le prénom est obligatoire';

    return '';
};