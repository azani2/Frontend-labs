/* МАСИВИ
let arr = ['Ani', 'Vodenicharova', 17, true, 'Varna', ['sadasd']];
console.log(arr);
console.log(arr[5][0]);
*/

let wantsToPlay, words, sentence;
wantsToPlay=confirm("Играе ли ти се?");
words = [];

if (wantsToPlay) {
    // let i = 0;
    
    do {
        i++;
        let newWord=prompt("Въведете дума");
        words.push(newWord);
    } while (i < 3)

    sentence = words.join(" ") + ".";
    document.write(sentence);
} else {
    alert("Жалко, следващият път ще поиграем :(");
}
