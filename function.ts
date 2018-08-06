

var matchesAnyLetter = function(letter: string, mystring: string): boolean{
	for (var z = 0; z < mystring.length; z++){
		var currentPosition = mystring[z];
		if (letter === currentPosition){
			return true;
		} 
	}
	return false;

}

var isVowel = function(letter: string): boolean{
	if ("aAiouEuIoeOiUa".indexOf(letter) !== -1){
		return true;
	} else {
		return false;
	}
}

var makePigLatinWord = function(word: string): string{
	var finalResult = "";
	var cubbyOne = "";
	var cubbyTwo = "";
	var ending = "ay";
	var cubbyFour = "";

	if (word[0] === word[0].toUpperCase()){
		var wasCapitalized = true;
	} else {
		wasCapitalized = false; 
	}
	for (var y = 0; y < word.length; y++){
		var currentLetter = word[y];
		var previousLetter = word[y-1];

		if (currentLetter === "'"){
			cubbyFour = currentLetter;
		} else if (previousLetter === "'"){
			cubbyFour = cubbyFour + currentLetter;
		} else if (cubbyTwo !== ""){
			finalResult = finalResult + currentLetter;
		} else if (isVowel(currentLetter)){
			cubbyTwo = cubbyTwo + currentLetter; 
		} else {
			cubbyOne = cubbyOne + currentLetter; 
		}
	}

	if (cubbyOne === ""){
		ending = "y" + ending;
	}

	var pigLatinWord = cubbyTwo + finalResult + cubbyOne + ending + cubbyFour;

	if (wasCapitalized === true){
	pigLatinWord = pigLatinWord.toLowerCase();

	pigLatinWord = pigLatinWord[0].toUpperCase() + pigLatinWord.substring(1, pigLatinWord.length);
	}
	return pigLatinWord;

}

var makePigLatinSentence = function(sentence: string): string{
	var currentWord = "";
	var finalSentence = "";
	var cubbyThree = "";

	for (var z = 0; z < sentence.length; z++){
		var currentPosition = sentence[z];


		if (currentPosition === "," || currentPosition === "." || currentPosition === ";"){
			cubbyThree = currentPosition;
		} else if (currentPosition !== " "){
			currentWord = currentWord + currentPosition; 
		} 

		if (currentPosition === " " || z === (sentence.length - 1)){

			var pigLatinWord = makePigLatinWord(currentWord);
			finalSentence = finalSentence + pigLatinWord + cubbyThree + " ";
			cubbyThree = "";
			currentWord = "";

			

		} 

		
	}
	return finalSentence;
}

var name1 = "When in the Course of human events, it becomes necessary forone people to dissolve the political bands which have connectedthem with another, and to assume, among the Powers of the earth,the separate and equal station to which the Laws of Nature andof Nature's God entitle them, a decent respect to the opinionsof mankind requires that they should declare the causes whichimpel them to the separation.We hold these truths to be self-evident, that all men are created equal,that they are endowed by their Creator with certain unalienable Rights,that among these are Life, Liberty, and the pursuit of Happiness.That to secure these rights, Governments are instituted among Men,deriving their just powers from the consent of the governed,That whenever any Form of Government becomes destructive of these ends,it is the Right of the People to alter or to abolish it, and to institutenew Government, laying its foundation on such principles and organizingits powers in such form, as to them shall seem most likely to effecttheir Safety and Happiness. Prudence, indeed, will dictate that Governmentslong established should not be changed for light and transient causes;and accordingly all experience hath shown, that mankind are more disposedto suffer, while evils are sufferable, than to right themselves by abolishingthe forms to which they are accustomed. But when a long train of abuses andusurpations, pursuing invariably the same Object evinces a design to reducethem under absolute Despotism, it is their right, it is their duty, to throwoff such Government, and to provide new Guards for their future security. Such has been the patient sufferance of these Colonies; and such is nowthe necessity which constrains them to alter their former Systems of Government.The history of the present King of Great Britain is a history of repeatedinjuries and usurpations, all having in direct object the establishmentof an absolute Tyranny over these States. To prove this, let Factsbe submitted to a candid world.He has refused his Assent to Laws, the most wholesome and necessaryfor the public good.He has forbidden his Governors to pass Laws of immediateand pressing importance, unless suspended in their operationtill his Assent should be obtained; and when so suspended,he has utterly neglected to attend to them.He has refused to pass other Laws for the accommodation oflarge districts of people, unless those people would relinquishthe right of Representation in the Legislature, a rightinestimable to them and formidable to tyrants only.He has called together legislative bodies at places unusual,uncomfortable, and distant from the depository of theirPublic Records, for the sole purpose of fatiguing theminto compliance with his measures.He has dissolved Representative Houses repeatedly, for opposingwith manly firmness his invasions on the rights of the people.He has refused for a long time, after such dissolutions,to cause others to be elected; whereby the Legislative Powers,incapable of Annihilation, have returned to the People at largefor their exercise; the State remaining in the mean time exposedto all the dangers of invasion from without, and convulsions within.He has endeavoured to prevent the population of these States;for that purpose obstructing the Laws of Naturalization of Foreigners;refusing to pass others to encourage their migration hither,and raising the conditions of new Appropriations of Lands.He has obstructed the Administration of Justice, by refusing his Assentto Laws for establishing Judiciary Powers.He has made judges dependent on his Will alone, for the tenureof their offices, and the amount and payment of their salaries.He has erected a multitude of New Offices, and sent hither swarms ofOfficers to harass our People, and eat out their substance.He has kept among us, in times of peace, Standing Armieswithout the Consent of our legislatures.He has affected to render the Military independent ofand superior to the Civil Power.He has combined with others to subject us to a jurisdictionforeign to our constitution, and unacknowledged by our laws;giving his Assent to their Acts of pretended legislation:For quartering large bodies of armed troops among us:For protecting them, by a mock Trial, from Punishment for any Murderswhich they should commit on the Inhabitants of these States:For cutting off our Trade with all parts of the world:For imposing taxes on us without our Consent:For depriving us, in many cases, of the benefits of Trial by Jury:For transporting us beyond Seas to be tried for pretended offences:For abolishing the free System of English Laws in a neighbouringProvince, establishing therein an Arbitrary government,and enlarging its Boundaries so as to render it at oncean example and fit instrument for introducing the sameabsolute rule into these Colonies:For taking away our Charters, abolishing our most valuable Laws,and altering fundamentally the Forms of our Governments:For suspending our own Legislatures, and declaring themselvesinvested with Power to legislate for us in all cases whatsoever.He has abdicated Government here, by declaring us out of his Protectionand waging War against us.He has plundered our seas, ravaged our Coasts, burnt our towns,and destroyed the lives of our people.He is at this time transporting large armies of foreign mercenariesto compleat the works of death, desolation and tyranny, already begunwith circumstances of Cruelty & perfidy scarcely paralleled in themost barbarous ages, and totally unworthy of the Head of a civilized nation.He has constrained our fellow Citizens taken Captive on the high Seasto bear Arms against their Country, to become the executioners oftheir friends and Brethren, or to fall themselves by their Hands.He has excited domestic insurrections amongst us, and hasendeavoured to bring on the inhabitants of our frontiers,the merciless Indian Savages, whose known rule of warfare,is an undistinguished destruction of all ages, sexes and conditions.In every stage of these Oppressions We have Petitioned for Redressin the most humble terms: Our repeated Petitions have been answeredonly by repeated injury. A Prince, whose character is thus markedby every act which may define a Tyrant, is unfit to be the rulerof a free People.Nor have We been wanting in attention to our Brittish brethren.We have warned them from time to time of attempts by theirlegislature to extend an unwarrantable jurisdiction over us.We have reminded them of the circumstances of our emigration andsettlement here. We have appealed to their native justiceand magnanimity, and we have conjured them by the ties of ourcommon kindred to disavow these usurpations, which would inevitablyinterrupt our connections and correspondence. They too have beendeaf to the voice of justice and of consanguinity. We must, therefore,acquiesce in the necessity, which denounces our Separation, and hold them,as we hold the rest of mankind, Enemies in War, in Peace Friends.We, therefore, the Representatives of the United States of America,in General Congress, Assembled, appealing to the Supreme Judge ofthe world for the rectitude of our intentions, do, in the Name,and by the Authority of the good People of these Colonies,solemnly publish and declare, That these United Colonies are,and of Right ought to be Free and Independent States;that they are Absolved from all Allegiance to the British Crown,and that all political connection between them and the Stateof Great Britain, is and ought to be totally dissolved;and that as Free and Independent States, they have full Power tolevy War, conclude Peace, contract Alliances, establish Commerce,and to do all other Acts and Things which Independent States mayof right do. And for the support of this Declaration, with a firmreliance on the Protection of Divine Providence, we mutually pledgeto each other our Lives, our Fortunes and our sacred Honor.";
var result = makePigLatinSentence(name1);

console.log(result);