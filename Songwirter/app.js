let keyResult = document.getElementById('key-result');
let noteResult = document.getElementById('note-result');
let calcButton = document.getElementById('calc-button');


const makeSong = function(){
//Gets chosen Key    
    let keyChoice = parseInt(document.getElementById('key').value);
    console.log('Selected Key: ' + keyChoice);
//Gets chosen scale
    let scaleChoice = parseInt(document.getElementById('scale').value);
    console.log(scaleChoice);

    switch(scaleChoice){
        case 1:
            scale = 1;
            break;
        case 2:
            scale = 2;
            break;
        case 3:
            scale = Math.ceil(Math.random() * 2);
            break;
    }
    console.log('Scale Num: ' + scale);

    let scaleName = '';
    
    switch(scale){
        case 1:
            scaleName = 'Major';
            break;
        case 2:
            scaleName = 'Minor';
    }

    console.log('Scale Name: ' + scaleName);
//Number of chords to generate
   let numOfChords = parseInt(document.getElementById('chordNum').value);

   console.log('Number of Notes: ' + numOfChords);


//Determines key of the song
    var key;
    if (keyChoice < 13) {
        key = keyChoice;
    } else {
        key = Math.ceil(Math.random() * 12);
    }

    console.log('Key Numver: ' + key);

    //Determines name of and notes in key
var keyName;
var keyNotes;
switch(scale) {
    case 1:
switch(key){
      case 1:
        keyName = 'A';
        keyNotes = ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'];
        break;
    case 2:
        keyName = 'A#';
        keyNotes = ['A#', 'C', 'D', 'D#', 'F', 'G', 'A'];
        break;
    case 3:
        keyName = 'B';
        keyNotes = ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'];
        break;
    case 4:
        keyName = 'C';
        keyNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
        break;
    case 5:
        keyName = 'C#';
        keyNotes = ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#'];
        break;
    case 6:
        keyName = 'D';
        keyNotes = ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'];
        break;
    case 7:
        keyName = 'D#';
        keyNotes = ['D#', 'F', 'G', 'G#', 'A#', 'C', 'D'];
        break;
    case 8:
        keyName = 'E';
        keyNotes = ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'];
        break;
    case 9:
        keyName = 'F';
        keyNotes = ['F', 'G', 'A', 'A#', 'C', 'D', 'E'];
        break;
    case 10:
        keyName = 'F#';
        keyNotes = ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'];
    case 11:
        keyName = 'G';
        keyNotes = ['G', 'A', 'B', 'C', 'D', 'E', 'F#'];   
    case 12:
        keyName = 'G#';
        keyNotes = ['G#', 'A#', 'C', 'C#', 'D#', 'F', 'G']; 
    };
    break;
     case 2:
        switch(key){
            case 1:
              keyName = 'A';
              keyNotes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
              break;
          case 2:
              keyName = 'A#';
              keyNotes = ['A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'G#'];
              break;
          case 3:
              keyName = 'B';
              keyNotes = ['B', 'C#', 'D', 'E', 'F#', 'G', 'A'];
              break;
          case 4:
              keyName = 'C';
              keyNotes = ['C', 'D', 'D#', 'F', 'G', 'G#', 'A#'];
              break;
          case 5:
              keyName = 'C#';
              keyNotes = ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B'];
              break;
          case 6:
              keyName = 'D';
              keyNotes = ['D', 'E', 'F', 'G', 'A', 'A#', 'C'];
              break;
          case 7:
              keyName = 'D#';
              keyNotes = ['D#', 'F', 'F#', 'G#', 'A#', 'B', 'C#'];
              break;
          case 8:
              keyName = 'E';
              keyNotes = ['E', 'F#', 'G', 'A', 'B', 'C', 'D'];
              break;
          case 9:
              keyName = 'F';
              keyNotes = ['F', 'G', 'G#', 'A#', 'C', 'C#', 'D#'];
              break;
          case 10:
              keyName = 'F#';
              keyNotes = ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E'];
          case 11:
              keyName = 'G';
              keyNotes = ['G', 'A', 'A#', 'C', 'D', 'D#', 'F'];   
          case 12:
              keyName = 'G#';
              keyNotes = ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'F#'];
    };
    break;
};
console.log('Key: ' + keyName);
console.log('Notes: ' + keyNotes);

//Picks the random notes
function notePicker() {
    var progression = "";
    var i = 0;
    var noteNum = 0;
    while (i < numOfChords) {
        noteNum = Math.floor(Math.random() * 7);
        progression += `${keyNotes[noteNum]} `;
        i++;
        console.log(noteNum);
    };
    console.log('Progression: ' +progression);
    return progression;
};


function showCalc(){
    keyResult.innerHTML = (keyName + ' ' + scaleName);
    noteResult.innerHTML = notePicker();
}

showCalc();

};

calcButton.onclick = makeSong;