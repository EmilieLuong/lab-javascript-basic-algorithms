// Iteration 1: Names and Input
const hacker1 = "Emilie"
const hacker2 = "Kratos"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

const driverChar = hacker1.length
const navigatorChar = hacker2.length

if (driverChar > navigatorChar) {
    console.log(`The driver has the longest name, it has ${driverChar} characters.`)
}
else if (navigatorChar > driverChar) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorChar} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${driverChar} characters!`)
}

// Iteration 3: Loops

//3.1 exercice
let hacker1InCapital = ""

for (let i = 0; i < hacker1.length; i++) {
    if (hacker1[i + 1] === undefined) {
        hacker1InCapital += `${hacker1[i].toUpperCase()}`
    }
    else {
        hacker1InCapital += `${hacker1[i].toUpperCase()} `
    }
}
console.log(hacker1InCapital)

//3.2 exercice
let reverseHacker2 = ""

for (let y = hacker2.length - 1; y >= 0; y--) {
    reverseHacker2 += hacker2[y];
}
console.log(reverseHacker2)

//3.3 exercice

const whoIsFirst = hacker1.localeCompare(hacker2)

if (whoIsFirst < 0) {
    console.log(`The driver's name goes first.`)
}
else if (whoIsFirst > 0) {
    console.log(`Yo, the navigator goes first, definitely.`)
}
else {
    console.log(`What?! You both have the same name?`)
}

// BONUS 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet purus a neque placerat, nec vestibulum tortor tempus. Vestibulum metus enim, auctor vel risus nec, pulvinar iaculis mauris. Aenean cursus nisl a dui lacinia, ut viverra lorem consectetur. Nam lacinia fringilla dolor. Praesent dui neque, accumsan eu molestie at, eleifend id urna. Morbi sed justo laoreet, malesuada leo vitae, tincidunt massa. Maecenas erat arcu, lacinia at rhoncus in, finibus vel sapien. Vestibulum sed blandit ante. Suspendisse pulvinar tristique lorem, a iaculis tortor tempus ut. Donec laoreet purus libero. Pellentesque tempor fermentum tempus. Etiam porta nisi elit, a fringilla odio accumsan ut. Suspendisse a elit eu mi facilisis scelerisque. Phasellus convallis nisl quis vestibulum ullamcorper. Vestibulum dictum ex ac pretium condimentum. Donec vulputate laoreet urna laoreet ornare.

Proin ac ex sapien.Curabitur laoreet, quam at vestibulum laoreet, elit nibh blandit turpis, nec dictum dolor sem quis lorem.Nullam non efficitur leo.Phasellus eget risus condimentum, ornare mi eu, luctus magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque maximus lacus sed tellus posuere posuere.Aliquam nisl turpis, efficitur et diam scelerisque, vehicula gravida nisl.Cras arcu lorem, pretium non convallis quis, pharetra nec dui.In non ex sit amet nulla scelerisque mollis.Sed mattis tellus a justo condimentum, id sagittis augue ornare.Donec congue, est eu condimentum porta, mi lectus congue neque, placerat porttitor tortor neque a lectus.Sed in massa egestas, congue eros in, finibus justo.Morbi at magna quis velit molestie scelerisque et tincidunt odio.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Sed dictum, purus sit amet auctor accumsan, dolor tortor facilisis enim, id congue augue ex et dui.Nullam ac eleifend nunc.Aenean vel nulla eget felis malesuada tempor vel nec massa.Praesent quis purus sit amet nunc finibus laoreet.Aliquam maximus magna nisl, ac dictum ligula ultrices accumsan.Duis nec sagittis lacus.Donec placerat, ex vitae tempor condimentum, lectus ligula malesuada ante, nec aliquam velit leo ut nisi.Sed ac facilisis erat.Suspendisse dignissim blandit condimentum.Nulla molestie tortor sed rhoncus pulvinar.`

let arrayOfTextWords = longText.match(/\b\w+\b/g)
let wordCounter = arrayOfTextWords.length

console.log(`The text contains ${wordCounter} words.`)

let arrayOfEtWords = longText.match(/et/gi)
let etCounter = arrayOfEtWords.length

console.log(`The text contains ${etCounter} times "et".`)