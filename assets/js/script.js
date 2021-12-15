// marvel const
var marvelName = document.querySelector('#marvelName');
var marvCard = document.querySelector('#marvCardId');
var marvCharTitle = document.querySelector('#marvCharTitle');
var marvStats = document.querySelector('#marvStats');
var movieChoice = document.querySelector('#marvArray');
var teamMarvel = document.querySelector('#mTeamNames');

// dc const
var dcName = document.querySelector('#dcName');
var dcCard = document.querySelector('#dcCardId');
var dcCharTitle = document.querySelector('#dcCharTitle');
var dcStats = document.querySelector('#dcStats');
var dcmovieChoice = document.querySelector('#dcArray');
var teamDC = document.querySelector('#dcTeamNames');

var parsed = "";
const superAPIKey = '10215957904298742';
const imdbAPIKey = 'k_rl11t9z7';
$(marvelName).change(function() {
    let position = this.value;
    let idURL = 'https://www.superheroapi.com/api.php/10215957904298742/' + position;

        if (this.value == 149) {
            // clearMarvMovie();
            let select = document.getElementById('marvArray');
            select.innerHTML = '';
            let elmts = ["Captain America: The First Avenger", "Captain America: The Winter Soldier", "Captain America: Civil War"];
            for (var i = 0; i < elmts.length; i++) {
            let optn = elmts[i];
            let el = document.createElement('option');
            el.textContent = optn;
            el.value = optn;
            select.appendChild(el);
            
        }
            //replaces globally
            let result = elmts[0].replace(/ /g, "%20");
            console.log(result);
            getMRatingAPI(result);

        } else if (this.value == 346) {
            // clearMarvMovie();
            let select = document.getElementById('marvArray');
            select.innerHTML = '';
            let elmts = ["Iron Man", "Iron Man 2", "Iron Man Three"];
            for (var i = 0; i < elmts.length; i++) {
            let optn = elmts[i];
            let el = document.createElement('option');
            el.textContent = optn;
            el.value = optn;
            select.appendChild(el);
            console.log(el.value);
        }
            let result = elmts[0].replace(/ /g, "%20");
            console.log(result);
            getMRatingAPI(result);
        
        } else if (this.value == 620) {
            let select = document.getElementById('marvArray');
            select.innerHTML = '';
            let elmts = ["Spider-Man", "Spider-Man 2", "Spider-Man Three", "The Amazing Spider-Man", "The Amazing Spider-Man 2", "Spider-Man Homecoming", "Spider-Man Far From Home"];
            for (var i = 0; i < elmts.length; i++) {
            let optn = elmts[i];
            let el = document.createElement('option');
            el.textContent = optn;
            el.value = optn;
            select.appendChild(el);
            console.log(el.value);
        }
            let result = elmts[0].replace(/ /g, "%20");
            console.log(result);
            getMRatingAPI(result);

        } else if (this.value == 226) {
            let select = document.getElementById('marvArray');
            select.innerHTML = '';
            let elmts = ["Doctor Strange"];
            for (var i = 0; i < elmts.length; i++) {
            let optn = elmts[i];
            let el = document.createElement('option');
            el.textContent = optn;
            el.value = optn;
            select.appendChild(el);
            console.log(el.value);
        }
            let result = elmts[0].replace(/ /g, "%20");
            console.log(result);
            getMRatingAPI(result);

        } else if (this.value == 30) {
            let select = document.getElementById('marvArray');
            select.innerHTML = '';
            let elmts = ["Ant-Man", "Ant-Man and the Wasp"];
            for (var i = 0; i < elmts.length; i++) {
            let optn = elmts[i];
            let el = document.createElement('option');
            el.textContent = optn;
            el.value = optn;
            select.appendChild(el);
            console.log(el.value);
        }
            let result = elmts[0].replace(/ /g, "%20");
            console.log(result);
            getMRatingAPI(result);

        } else if (this.value == 106) {
            let select = document.getElementById('marvArray');
            select.innerHTML = '';
            let elmts = ["Black Panther"];
            for (var i = 0; i < elmts.length; i++) {
            let optn = elmts[i];
            let el = document.createElement('option');
            el.textContent = optn;
            el.value = optn;
            select.appendChild(el);
            console.log(el.value);
        }
            let result = elmts[0].replace(/ /g, "%20");
            console.log(result);
            getMRatingAPI(result);

        } else if (this.value == 659) {
            let select = document.getElementById('marvArray');
            select.innerHTML = '';
            let elmts = ["Thor", "Thor: The Dark World", "Thor: Ragnarok"];
            for (var i = 0; i < elmts.length; i++) {
            let optn = elmts[i];
            let el = document.createElement('option');
            el.textContent = optn;
            el.value = optn;
            select.appendChild(el);
            console.log(el.value);
        }

            let result = elmts[0].replace(/ /g, "%20");
            console.log(result);
            getMRatingAPI(result);

        } else if (this.value == 332) {
            let select = document.getElementById('marvArray');
            select.innerHTML = '';
            let elmts = ["Hulk", "The Incredible Hulk"];
            for (var i = 0; i < elmts.length; i++) {
            let optn = elmts[i];
            let el = document.createElement('option');
            el.textContent = optn;
            el.value = optn;
            select.appendChild(el);
            console.log(el.value);
        }
            let result = elmts[0].replace(/ /g, "%20");
            console.log(result);
            getMRatingAPI(result);

        } else if (this.value == 687) {
            let select = document.getElementById('marvArray');
            select.innerHTML = '';
            let elmts = ["Venom", "Venom: Let there be Carnage"];
            for (var i = 0; i < elmts.length; i++) {
            let optn = elmts[i];
            let el = document.createElement('option');
            el.textContent = optn;
            el.value = optn;
            select.appendChild(el);
            console.log(el.value);
        }
            let result = elmts[0].replace(/ /g, "%20");
            console.log(result);
            getMRatingAPI(result);

        } else if (this.value == 213) {
            let select = document.getElementById('marvArray');
            select.innerHTML = '';
            let elmts = ["Deadpool", "Deadpool 2"];
            for (var i = 0; i < elmts.length; i++) {
            let optn = elmts[i];
            let el = document.createElement('option');
            el.textContent = optn;
            el.value = optn;
            select.appendChild(el);
            console.log(el.value);
        }
            let result = elmts[0].replace(/ /g, "%20");
            console.log(result);
            getMRatingAPI(result);
        };
        getMarvelAPI(idURL);
});
$(movieChoice).change(function() {
    console.log(this.value);
    let result = this.value.replace(/ /g, "%20");
            console.log(result);
            getMRatingAPI(result);
})

$(dcName).change(function() {
    let position = this.value;
    let idURL = 'https://www.superheroapi.com/api.php/10215957904298742/' + position;

    if (this.value == 69) {
        // clearMarvMovie();
        let select = document.getElementById('dcArray');
        select.innerHTML = '';
        let elmts = ["Batman(1989)", "Batman Returns", "Batman & Robin", "Batman Forever", "Batman V Superman: Dawn of Justice", "Batman Begins", "The Dark Knight", "The Dark Knight Rises", "Justice League"];
        for (var i = 0; i < elmts.length; i++) {
        let optn = elmts[i];
        let el = document.createElement('option');
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
        console.log(el.value);
    }
        let dcresult = elmts[0].replace(/ /g, "%20");
        console.log(dcresult);
        getDCRatingAPI(dcresult);

    } else if (this.value == 644) {
        // clearMarvMovie();
        let select = document.getElementById('dcArray');
        select.innerHTML = '';
        let elmts = ["Superman The Movie (1978)", "Superman II(1980)", "Superman III(1983)", "Superman IV: The Quest for Peace", "Superman Returns", "Man of Steel", "Batman V Superman: Dawn of Justice", "Justice League"];
        for (var i = 0; i < elmts.length; i++) {
        let optn = elmts[i];
        let el = document.createElement('option');
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
        console.log(el.value);
    }
        let dcresult = elmts[0].replace(/ /g, "%20");
        console.log(dcresult);
        getDCRatingAPI(dcresult);

    } else if (this.value == 306) {
        // clearMarvMovie();
        let select = document.getElementById('dcArray');
        select.innerHTML = '';
        let elmts = ["Green Lantern"];
        for (var i = 0; i < elmts.length; i++) {
        let optn = elmts[i];
        let el = document.createElement('option');
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
        console.log(el.value);
    }
        let dcresult = elmts[0].replace(/ /g, "%20");
        console.log(dcresult);
        getDCRatingAPI(dcresult);

    } else if (this.value == 720) {
        // clearMarvMovie();
        let select = document.getElementById('dcArray');
        select.innerHTML = '';
        let elmts = ["Wonder Woman (2017)", "Wonder Woman 1984", "Justice League"];
        for (var i = 0; i < elmts.length; i++) {
        let optn = elmts[i];
        let el = document.createElement('option');
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
        console.log(el.value);
    }
        let dcresult = elmts[0].replace(/ /g, "%20");
        console.log(dcresult);
        getDCRatingAPI(dcresult);

    } else if (this.value == 194) {
        // clearMarvMovie();
        let select = document.getElementById('dcArray');
        select.innerHTML = '';
        let elmts = ["Justice League"];
        for (var i = 0; i < elmts.length; i++) {
        let optn = elmts[i];
        let el = document.createElement('option');
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
        console.log(el.value);
    }
        let dcresult = elmts[0].replace(/ /g, "%20");
        console.log(dcresult);
        getDCRatingAPI(dcresult);

    } else if (this.value == 370) {
        // clearMarvMovie();
        let select = document.getElementById('dcArray');
        select.innerHTML = '';
        let elmts = ["Joker (2019)", "Suicide Squad (2016)", "Batman (1989)"];
        for (var i = 0; i < elmts.length; i++) {
        let optn = elmts[i];
        let el = document.createElement('option');
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
        console.log(el.value);
    }
        let dcresult = elmts[0].replace(/ /g, "%20");
        console.log(dcresult);
        getDCRatingAPI(dcresult);

    } else if (this.value == 309) {
        // clearMarvMovie();
        let select = document.getElementById('dcArray');
        select.innerHTML = '';
        let elmts = ["Birds of Prey", "Suicide Squad (2016)", "The Suicide Squad"];
        for (var i = 0; i < elmts.length; i++) {
        let optn = elmts[i];
        let el = document.createElement('option');
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
        console.log(el.value);
    }
        let dcresult = elmts[0].replace(/ /g, "%20");
        console.log(dcresult);
        getDCRatingAPI(dcresult);

    } else if (this.value == 367) {
        // clearMarvMovie();
        let select = document.getElementById('dcArray');
        select.innerHTML = '';
        let elmts = ["Constantine (2005)"];
        for (var i = 0; i < elmts.length; i++) {
        let optn = elmts[i];
        let el = document.createElement('option');
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
        console.log(el.value);
    }
        let dcresult = elmts[0].replace(/ /g, "%20");
        console.log(dcresult);
        getDCRatingAPI(dcresult);

    } else if (this.value == 165) {
        // clearMarvMovie();
        let select = document.getElementById('dcArray');
        select.innerHTML = '';
        let elmts = ["CatWoman (2004)", "The Dark Knight Rises"];
        for (var i = 0; i < elmts.length; i++) {
        let optn = elmts[i];
        let el = document.createElement('option');
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
        console.log(el.value);
    }
        let dcresult = elmts[0].replace(/ /g, "%20");
        console.log(dcresult);
        getDCRatingAPI(dcresult);

    } else if (this.value == 38) {
        // clearMarvMovie();
        let select = document.getElementById('dcArray');
        select.innerHTML = '';
        let elmts = ["Aquaman", "Justice League"];
        for (var i = 0; i < elmts.length; i++) {
        let optn = elmts[i];
        let el = document.createElement('option');
        el.textContent = optn;
        el.value = optn;
        select.appendChild(el);
        console.log(el.value);
    }
        let dcresult = elmts[0].replace(/ /g, "%20");
        console.log(dcresult);
        getDCRatingAPI(dcresult);
    };

    getDCAPI(idURL);
});
$(dcmovieChoice).change(function() {
    console.log(this.value);
    let dcresult = this.value.replace(/ /g, "%20");
            console.log(dcresult);
            getDCRatingAPI(dcresult);
})

function getMarvelAPI(link) {
    fetch(link)
        .then(res => res.json())
        .then(data => {
        console.log(data)
        console.log(data.powerstats)

        // append marvel character name
        var mdivEl = document.createElement("div")
        var marvTitle = document.createElement("h2")
        var marvImg = document.createElement("img")
        var mStats = document.createElement("h4")
        var mIntell = document.createElement("p")
        var mStrength = document.createElement("p")
        var mDur = document.createElement("p")
        var mPower = document.createElement("p")
        var mCombat = document.createElement("p")

        marvTitle.textContent = data.name
        marvImg.setAttribute("src", data.image.url);
        marvImg.height = 160;
        marvImg.width = 120;
        mStats.textContent = "Stats: ";
        mIntell.textContent = 'Intelligence: ' + data.powerstats.intelligence;
        mStrength.textContent = 'Strength: ' + data.powerstats.strength;
        mDur.textContent = 'Durability: ' + data.powerstats.durability;
        mPower.textContent = 'Power: ' + data.powerstats.power;
        mCombat.textContent = 'Combat: ' + data.powerstats.combat;

       marvCharTitle.appendChild(marvTitle);
       mdivEl.appendChild(marvImg);
       mdivEl.appendChild(mStats);
       mdivEl.appendChild(mIntell);
       mdivEl.appendChild(mStrength);
       mdivEl.appendChild(mDur);
       mdivEl.appendChild(mPower);
       mdivEl.appendChild(mCombat);
       marvStats.appendChild(mdivEl);
       
       var mstatTot = Object.values(data.powerstats)
       var sum = 0;
       for( var i = 0; i < mstatTot.length; i++ ){
           sum += parseInt( mstatTot[i], 10 );
       }
       var avg = sum/mstatTot.length;
       console.log( "The sum of all the elements is: " + sum + " The average is: " + avg );


       var allSelectedChars = [];
       if (localStorage.getItem('marvSelectedChars')){
        allSelectedChars = JSON.parse(localStorage.getItem('marvSelectedChars'))
       }  
       if (allSelectedChars.length === 3) {
           allSelectedChars.shift();
       }
       allSelectedChars.push(marvTitle.textContent)
       localStorage.setItem("marvSelectedChars", JSON.stringify(allSelectedChars));
       var allSelectedStats = [];
       if (localStorage.getItem('marvSelectedStats')) {
           allSelectedStats = JSON.parse(localStorage.getItem('marvSelectedStats'))
       }
       if (allSelectedStats.length === 3) {
           allSelectedStats.shift();
       }
       allSelectedStats.push(avg);
       localStorage.setItem('marvSelectedStats', JSON.stringify(allSelectedStats));
       for (var x = 0; x < allSelectedChars.length; x++) {
           var nameDisplay = allSelectedChars[x];
           var mStored = document.createElement('p');
           mStored.textContent = nameDisplay;
           mStored.setAttribute('style', 'color:red')
           teamMarvel.append(mStored);
       }
    })
    marvCharTitle.innerHTML = "";
    marvStats.innerHTML = "";
    teamMarvel.innerHTML = "";

    
}
function getDCAPI(link) {
    fetch(link)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        console.log(data.powerstats)
 
        // append dc character name
        var dcDivEl = document.createElement("div")
        var dcTitle = document.createElement("h2")
        var dcImg = document.createElement("img")
        var dStats = document.createElement("h4")
        var dcIntell = document.createElement("p")
        var dcStrength = document.createElement("p")
        var dcDur = document.createElement("p")
        var dcPower = document.createElement("p")
        var dcCombat = document.createElement("p")

        dcTitle.textContent = data.name
        dcImg.setAttribute("src", data.image.url);
        dcImg.height = 160;
        dcImg.width = 120;
        dStats.textContent = "Stats: ";
        dcIntell.textContent = 'Intelligence: ' + data.powerstats.intelligence;
        dcStrength.textContent = 'Strength: ' + data.powerstats.strength;
        dcDur.textContent = 'Durability: ' + data.powerstats.durability;
        dcPower.textContent = 'Power: ' + data.powerstats.power;
        dcCombat.textContent = 'Combat: ' + data.powerstats.combat;
        
        dcCharTitle.appendChild(dcTitle);
        dcDivEl.appendChild(dcImg);
        dcDivEl.appendChild(dStats);
        dcDivEl.appendChild(dcIntell);
        dcDivEl.appendChild(dcStrength);
        dcDivEl.appendChild(dcDur);
        dcDivEl.appendChild(dcPower);
        dcDivEl.appendChild(dcCombat);
        dcStats.appendChild(dcDivEl);

        var dstatTot = Object.values(data.powerstats)
        var sum = 0;
        for( var i = 0; i < dstatTot.length; i++ ){
            sum += parseInt( dstatTot[i], 10 );
        }
    
        var avg = sum/dstatTot.length;
        console.log( "The sum of all the elements is: " + sum + " The average is: " + avg );

        var allSelectedChars = [];
       if (localStorage.getItem('dcSelectedChars')){
        allSelectedChars = JSON.parse(localStorage.getItem('dcSelectedChars'))
       }  
       if (allSelectedChars.length === 3) {
           allSelectedChars.shift();
       }
       allSelectedChars.push(dcTitle.textContent)
       localStorage.setItem("dcSelectedChars", JSON.stringify(allSelectedChars));
       var allSelectedStats = [];
       if (localStorage.getItem('dcSelectedStats')) {
           allSelectedStats = JSON.parse(localStorage.getItem('dcSelectedStats'))
       }
       if (allSelectedStats.length === 3) {
           allSelectedStats.shift();
       }
       allSelectedStats.push(avg);
       localStorage.setItem('dcSelectedStats', JSON.stringify(allSelectedStats));
       for (var x = 0; x < allSelectedChars.length; x++) {
           var nameDisplay = allSelectedChars[x];
           var dcStored = document.createElement('p');
           dcStored.textContent = nameDisplay;
           dcStored.setAttribute('style', 'color:black')
           teamDC.append(dcStored);
       } 

    })

    dcCharTitle.innerHTML = "";
    dcStats.innerHTML = "";
    teamDC.innerHTML = "";
}

//Getting movie ratings
function getMRatingAPI(marvMovie) {
    fetch('https://imdb-api.com/en/API/SearchMovie/k_8h1t7ggm/' + marvMovie)
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                var pull1 = data.results[0];
                var idName = pull1.id;
                console.log(idName);
                
                fetch('https://imdb-api.com/en/API/Ratings/k_8h1t7ggm/' + idName)
                .then(function (response) {
                    console.log(response)
                    if (response.ok) {
                        response.json().then(function (data) {
                            var pull2 = data.rottenTomatoes;
                            console.log(pull2);
                        })
                    }
                })
            })
        }
    })
}

function getDCRatingAPI(dcMovie) {
    fetch('https://imdb-api.com/en/API/SearchMovie/k_8h1t7ggm/' + dcMovie)
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                var dcpull1 = data.results[0];
                var dcidName = dcpull1.id;
                console.log(dcidName);
                
                fetch('https://imdb-api.com/en/API/Ratings/k_8h1t7ggm/' + dcidName)
                .then(function (response) {
                    console.log(response)
                    if (response.ok) {
                        response.json().then(function (data) {
                            var dcpull2 = data.rottenTomatoes;
                            console.log(dcpull2);
                        })
                    }
                })
            })
        }
    })
}


