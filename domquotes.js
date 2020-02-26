class QuoteGen {
    constructor(beg, mid, end) {
        this.beg = beg;
        this.mid = mid;
        this.end = end;
    }
    genRandom() {
        return (this.beg[Math.floor(Math.random() * this.beg.length)] +
            ' ' + this.mid[Math.floor(Math.random() * this.mid.length)] +
            ' ' + this.end[Math.floor(Math.random() * this.end.length)]);
    }
}

const firesideBanter = new QuoteGen(["Yer wan is", "Yer man is", "The craic is", "You're only", "Mammy said I'm", "John Joe is"],
    ["handy as", "better than", "daft as", "a rake of", "mad as", "rough as"],
    ["a small pot.", "a month of Sundays.", "a bag of spiders.", "a bag of hammers.", "taking the mick.", "acting the maggot."])

const literaryWisdom = new QuoteGen(["- Here's to your roof,", "- Here's to the maiden,", "- Here's to a temperance supper,", "- Here's to your eyes in your heads and none in your spuds,", "- Here's to he who has water and peat,", "- Here's to the housewife that's thrifty,"],
    ["may you die in bed at 95,", "never dance in a small boat,", "never scald your lips with another man's porridge,", "never plough a field by turning it over in your mind,", "never dread the winter till the snow is on the blanket,", "don't break your shin on a stool that's not in your way,"],
    ["it is better to be a coward.", "it is easy to halve a potato.", "where there is love.", "it is sweet to drink but bitter to pay for.", "tis only a stepmother would blame you.", "a goose never voted for an early Christmas."])


//defining variables
let banterButton = document.getElementById('banter');
let litButton = document.getElementById('lit');
let howManyQuotes = document.querySelectorAll('.form-check-input');
let goButton = document.querySelector('.go');
let body = document.querySelector('.enter');
let message = document.getElementsByClassName('container-fluid text-center padding welcome-message');
let clearBtn = document.createElement('button');
let removeButtons = document.getElementsByClassName('btn-group')[0];
let removeRadio = document.getElementsByClassName('number-of-quotes')[0];
let qpara = document.getElementById('qpara');
// let space = document.createElement('br');

clearBtn.textContent = 'New Quotes';
clearBtn.classList.add('btn-outline-light', 'btn');
document.querySelector('.print-out').appendChild(clearBtn);
// document.querySelector('.print-out').appendChild(space);
clearBtn.style.display = "none";

//event listeners
goButton.addEventListener('click', genQuotes);
clearBtn.addEventListener('click', clearQuotes);
//functions
function genQuotes(e) {
    e.preventDefault();
    let radioQuoteValue = noOfQuotes();
    let printSpace = document.querySelector('.print-out');
    if (banterButton.checked) {
        for (let i = 0; i < radioQuoteValue; i++) {
          let quotePrint = document.createElement('p');
          quotePrint.appendChild(document.createTextNode(firesideBanter.genRandom()));
          printSpace.appendChild(quotePrint);
          printSpace.style.display = "inline";
          clearBtn.style.display = "inline";
        }
    } else if (litButton.checked) {
        for (let i = 0; i < radioQuoteValue; i++) {
            let quotePrint = document.createElement('p');
            quotePrint.appendChild(document.createTextNode(literaryWisdom.genRandom()));
            printSpace.appendChild(quotePrint);
            printSpace.style.display = "inline";
            clearBtn.style.display = "inline";
        }    
    } else {
        alert('You must choose a type of quote to get at least one!')
    }
   removeButtons.style.display = "none";
   removeRadio.style.display = "none";
   qpara.style.display = "none";
   clearBtn.textContent = 'New Quotes';
   clearBtn.classList.add('btn-outline-light', 'btn');
   document.querySelector('.print-out').appendChild(clearBtn);


}

function noOfQuotes() {
    for (let i = 0; i < howManyQuotes.length; i++) {
        if (howManyQuotes[i].checked) {
            return (howManyQuotes[i].value);
        }

    }
    return 1;
}

function clearQuotes(e) {
    e.preventDefault();
    // location.reload();
    document.querySelector('.print-out').innerHTML = "";
    removeButtons.style.display = "block";
    removeRadio.style.display = "block";
    qpara.style.display = "block";
}