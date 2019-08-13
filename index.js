// ### Problem 1:
// Create a GitHubRepository class with properties userName, fileName, descriptionOfRepository, and code.
//     Create a function that prints all properties. Create an object of the class and use the function.
//
// ### Problem 2:
// Create a Movie class with the following properties: movieName, rating, and yearReleased.
//     Create a method to change the rating and another one to change the yearReleased properties.
//     Create an object of the class and use the two methods you created.

//Problem 1
class GitHubrepository
{
    constructor(userName,fileName,descriptionOfRepo, code) 
    {
        this.userName=userName;
        this.fileName=fileName;
        this.descriptionOfRepo=descriptionOfRepo;
        this.code=code;
    }
    printProp() {
        console.log(this.userName);
        console.log(this.fileName);
        console.log(this.descriptionOfRepo);
        console.log(this.code);
    }
}
let gitHub= new GitHubrepository("Jordondoug2019", "classpractice_01", "practicing class and objects", "code");

gitHub.printProp();

// //Problem 2
class Movie 
{
    constructor(movieName,rating, yearReleased) 
    {
        this.movieName=movieName;
        this.rating=rating;
        this.yearReleased=yearReleased;
    }
    printRating()
    {
        console.log(this.rating)
    }
    printYear()
    {
       console.log(this.yearReleased)
    }
}
let myMovie= new Movie("Lion King", "5 Stars", "1993");
myMovie.rating= "3 stars";
myMovie.yearReleased="2019";

myMovie.printRating();
myMovie.printYear();






