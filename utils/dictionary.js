import fs from 'fs'
const file = fs.readFileSync("./utils/en.txt")
const wordString = file.toString('utf-8')
export const words = wordString.split('\n')
// const wordLength = words.length
// console.log("Word Length : ",wordLength)
export default function genPassPhrase() {
    let min = 0
    let max  = words.length
    let passphrase = ""
    for(let i= 0; i<16; i++){
        let index = Math.floor(Math.random() * (max-min)) + min;
        let word = words[index]
        if(i==0){
            passphrase = word
        }
        else{
            passphrase = passphrase.concat(" ",word)

        }
    }
    return passphrase
}

console.log("Passphrase:", genPassPhrase())





// console.log(wordString.split('\n'))
// const arrParseString = wordString.replace(/\n/g, ",")
// console.log(Array.from(arrParseString))
// console.log(arrParseString)


// zoomagnetisms
// zoomancies
// zoomancy
// zoomania
// zoomanias
// zoomantic
// zoomed
// zoometric