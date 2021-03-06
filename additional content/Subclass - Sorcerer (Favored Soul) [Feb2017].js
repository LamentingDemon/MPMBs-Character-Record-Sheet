SourceList["UA:S"] = {
	
	name : "Unearthed Arcana: Sorcerer",
	
	abbreviation : "UA:S",
	
	group : "Unearthed Arcana",
	
	url : "http://media.wizards.com/2017/dnd/downloads/26_UASorcererUA020617s.pdf",
};

ClassSubList["favoredsoul"] = {

	regExpSearch : /^(?=.*favored)(?=.*soul).*$/i,
	
	subname : "Favored Soul",
	
	source : ["UA:S", 1], 
	
	fullname : "Favored Soul",
	spellcastingList : { class : ["sorcerer", "cleric"] },
  spellcastingFactor : 1,
  spellcastingKnown : {
  cantrips : [4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
  spells : [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15, 15],
},
  
	features : {
	
		"subclassfeature1" : {
			name : "Divine Magic",
			source : ["UA:S", 1],
			minlevel : 1,
			description : "\n   " + "When my Spellcasting feature lets me learn a sorcerer cantrip or a sorcerer spell of 1st level or higher, I can choose the new spell from the cleric spell list, in addition to the sorcerer spell list." + "\n   " + "I must otherwise obey all the restrictions for selecting the spell, and it becomes a sorcerer spell for me.",
		},
		"subclassfeature1.1" : {
			name : "Supernatural Resilience",
			source : ["UA:S", 1],
			minlevel : 1,
			description : "\n   " + "My hit point maximum increases by 1, and it increases by 1 again whenever I gain a level in this class.",
			calcChanges : {
					hp : "if (classes.known.favoredsoul) {extrahp += classes.known.favouredsoul.level; extrastring += \"\\n + \" + classes.known.favouredsoul.level + \" from Supernatural Resilience (Favored Soul)\";};"
      },
		},
		"subclassfeature1.2" : {
			name : "Favored By the Gods",
			source : ["UA:S", 1],
			minlevel : 1,
			description : "\n   " + "If I fail a saving throw or miss with an attack roll, I can roll 2d4 and add it to the total.",
      recovery : "short rest",
		},
		"subclassfeature6" : {
			name : "Blessed Countenance",
			source : ["UA:S", 1],
			minlevel : 6,
			description : "\n   " + "Choose an otherworldly quality using the \"ChooseFeature\" button above" + "\n   " + "If my proficiency bonus applies to a Charisma check, I double that bonus.",
      choices : ["Beautiful", "Youthful", "Kind", "Imposing"],
      "beautiful" : {
            name : "Beautiful",
            source : ["UA:S", 1],
            description : "My appearance takes on an otherworldly quality of beauty" + "\n   " + "If my proficiency bonus applies to a Charisma check, I double that bonus."
      },
      "youthful" : {
            name : "Youthful",
            source : ["UA:S", 1],
            description : "My appearance takes on an otherworldly quality of youthfulness" + "\n   " + "If my proficiency bonus applies to a Charisma check, I double that bonus."
      },
      "kind" : {
            name : "Kind",
            source : ["UA:S", 1],
            description : "My appearance takes on an otherworldly quality of kindness" + "\n   " + "If my proficiency bonus applies to a Charisma check, I double that bonus."
      },
      "imposing" : {
            name : "Imposing",
            source : ["UA:S", 1],
            description : "My appearance takes on an otherworldly quality of imposingness" + "\n   " + "If my proficiency bonus applies to a Charisma check, I double that bonus."
      }, 
		},
    "subclassfeature14" : {
      name : "Divine Purity",
      source: ["UA:S", 1],
      minlevel : 14,
      description: "\n   " + "I am immune to disease, poison damage, and the poisoned condition.",
      save : "Immune to disease, poison damage, and the poisoned condition",
    },
    "subclassfeature18" : {
      name: "Unearthly Recovery",
      source : ["UA:S", 1],
      minlevel : 18,
      description : "\n   " + "I gain the ability to overcome grievous injuries." + "\n   " + "As a bonus action when I have less than half my hit points left, I can regain hit points equal to half my hit point maximum." + "\n   " + "Once I use this feature, I can't use it again until after a long rest.",
      recovery : "long rest",
      action : ["bonus action", ""]
    }    
	}
};

ClassList["sorcerer"].subclasses[1].push("favoredsoul");
