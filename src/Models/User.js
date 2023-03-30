class User {
    constructor(fisrtName, lastName, club, country, strongHand, birthDate, avater, matches = []) {
        this.fisrtName = fisrtName
        this.lastName = lastName
        this.club = club
        this.birthDate = birthDate
        this.strongHand = strongHand
        this.country = country
        this.avater = avater
        this.matches = matches
    }
}
export default User;