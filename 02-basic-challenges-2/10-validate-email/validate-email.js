function validateEmail(email) {
    // Brad Solution #1 - used ChatGPT
    // // "give me a regex for an email address for my javascript code"
    // const emailRegex = '';

    // return emailRegex.test(email);
    // // tests whatever we pass in against regex and returns true or false

    // Brad Solution #2
    if (email.indexOf('@') === -1 ){
        // if the @ doesn't exist in the email string, meaning -1, return false
        return false;
    }

    // returning gives us an array of the first element and the second with the 'gmail.com,' for example
    const [localPart, domain] = email.split('@');

    if (localPart.length === 0 || domain.length < 3) {
        return false;
    }

    const domainExtension = domain.split('.'); // means '.com,' '.net,' '.io,' etc.

    if (domainExtension.length < 2 || domainExtension[1] < 2) {
        return false;
    }

    return true; // means everything passed the tests
    
}

module.exports = validateEmail;
