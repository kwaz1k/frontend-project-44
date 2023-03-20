import readLineSync from 'readline-sync'

export default function askName() {
    console.log("Welcome to the Brain Games!");
    const name = readLineSync.question('May i have your name? ');
    console.log(`Hello, ${name}!`);
    return name;
}