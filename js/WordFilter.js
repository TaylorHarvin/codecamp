var bannedWords = ["test", "homework", "work"];


// Filter banned word
function FilterWords_Complex(msg){
	var wordList = "";
	var filteredMsg = "";
	var msgBox = $("#txtCom");
	var bannedWordFlag = false;
	
	msg = msg.split('\n'); // Split the current message by line
	
	// Go through all lines in the message
	for(msgLineIndex in msg){
		wordList = msg[msgLineIndex].split(' '); // Split current line by spaces
		// Go through all words in the current line in the loop
		for(msgWordIndex in wordList){
			bannedWordFlag = false;
			// Compare current word with 
			for(bannedWordIndex in bannedWords){
				// If the current word is in the list of banned words
				// Set the flag and stop checking
				if(wordList[msgWordIndex] == bannedWords[bannedWordIndex]){
					bannedWordFlag = true;
					break;
				}
			}
			if(!bannedWordFlag)
					filteredMsg += wordList[msgWordIndex];
		}
	}
	//console.log(filteredMsg);
	msgBox.val(filteredMsg); // Place the filtered message back in the msg box
}


// Use replace with a loop over banned words -- Pretty Good Method
function FilterWords_BasicLoop(msg){
	var filteredMsg = "";
	var msgBox = $("#txtBasicLoop");
	
	for(bannedWordsIndex in bannedWords){
		// Remove current banned word
		filteredMsg = msg.replace(bannedWords[bannedWordsIndex], '');
		msg = filteredMsg;
	}
	
	// Store filered msg back to the text area
	msgBox.val(filteredMsg);
}


// Use reqular expression -- BEST method
function FilterWords_Simple(msg){
	var filteredMsg = "";
	var msgBox = $("#txtRegEx");
	var regularExpression = new RegExp( bannedWords.join( '|' ), 'g' );
	console.log(bannedWords.join( '|' ), 'g');
	// Use regular expression to replace all banned words
	filteredMsg = msg.replace(regularExpression,'');
	// Store filered msg back to the text area
	msgBox.val(filteredMsg);
}