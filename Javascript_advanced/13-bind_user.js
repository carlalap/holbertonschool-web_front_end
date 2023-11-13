/* task 13. Binding + Closure 
@user - an object with different attributes 
@logWelcomeUser - function takes 2 args with a message: 
<welcomeString>, <firstName>. Your occupation is: <occupation> 
@bindLogWelcomeUser - variables it binds the logWelcomeUser 
function to the user object */

let user = {
    hobby: "Calligraphy",
    favoriteSport: "Hockey",
    astrologicalSign: "Aries",
    firstName: "Buillaume",
    lastName: "Ialva",
    location: "Telaviv",
    occupation: "Engineer",
};

function logWelcomeUser(welcomeString) {
    console.log(`${welcomeString}, ${this.firstName} your occupation is: ${this.occupation}`);
}

let bindLogWelcomeUser = logWelcomeUser.bind(user);
bindLogWelcomeUser('Welcome');
bindLogWelcomeUser('Hello');