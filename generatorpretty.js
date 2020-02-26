class QuoteGen {
    constructor(beg, mid, end) {
        this.beg = beg;
        this.mid = mid;
        this.end = end;
    }
    //create random concatenation from strings of each array
    genRandom() {
        return (this.beg[Math.floor(Math.random() * this.beg.length)] +
            ' ' + this.mid[Math.floor(Math.random() * this.mid.length)] +
            ' ' + this.end[Math.floor(Math.random() * this.end.length)]);
    }
}
//first type of quotes stored in three arrays
const firesideBanter = new QuoteGen(["Yer wan is", "Yer man is", "The craic is", "You're only", "Mammy said I'm", "John Joe is"],
    ["handy as", "better than", "daft as", "a rake of", "mad as", "rough as"],
    ["a small pot.", "a month of Sundays.", "a bag of spiders.", "a bag of hammers.", "taking the mick.", "acting the maggot."])

//second type of quotes stored in three arrays
const literaryWisdom = new QuoteGen(["- Here's to your roof,", "- Here's to the maiden,", "- Here's to a temperance supper,", "- Here's to your eyes in your heads and none in your spuds,", "- Here's to he who has water and peat,", "- Here's to the housewife that's thrifty,"],
    ["may you die in bed at 95,", "never dance in a small boat,", "never scald your lips with another man's porridge,", "never plough a field by turning it over in your mind,", "never dread the winter till the snow is on the blanket,", "don't break your shin on a stool that's not in your way,"],
    ["it is better to be a coward.", "it is easy to halve a potato.", "where there is love.", "it is sweet to drink but bitter to pay for.", "tis only a stepmother would blame you.", "a goose never voted for an early Christmas."])


//accessing HTML elements
let banterButton = document.getElementById('banter');
let litButton = document.getElementById('lit');
let howManyQuotes = document.querySelectorAll('.form-check-input');
let goModalButton = document.querySelector('.go-modal');
let modal = document.getElementById('quotes-modal');
let finished = document.getElementById('close');

goModalButton.addEventListener('click', genQuotes);
finished.addEventListener('click', closeModal);




function genQuotes(e) {
    e.preventDefault();
    let radioQuoteValue = noOfQuotes();
    let exit = closeModal();
    let printQuotes = document.getElementById('quotes-here');
    if (banterButton.checked) {
        for (let i = 0; i < radioQuoteValue; i++) {
            //printQuotes += firesideBanter.genRandom() + '\n';
            printQuotes.textContent = firesideBanter.genRandom() + '\n';

        }
    } else if (litButton.checked) {
        for (let i = 0; i < radioQuoteValue; i++) {
            printQuotes += literaryWisdom.genRandom() + '\n';
        }
    } else {
        printQuotes = 'You must select a type of quote and a quantity!';
    }
   
    //alert(printQuotes);
    modal.style.display = "block";    
}

function closeModal(e) {
    modal.style.display = "none";
}

function noOfQuotes() {
    for (let i = 0; i < howManyQuotes.length; i++) {
        if (howManyQuotes[i].checked) {
            return (howManyQuotes[i].value);
        }

    }
    return 1;
}