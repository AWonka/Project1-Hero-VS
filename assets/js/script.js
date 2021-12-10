function initPage() {
    // marvel const
    const marvSelectEl = document.getElementById('marvel-name');
    const marvCardEl = document.getElementById('marvCardId');
    const marvTitleEl = document.getElementById('marvCharTitle');
    const marvStatsEl = document.getElementById('marvStats');
    // dc const
    const dcSelectEl = document.getElementById('dc-name');
    const dcCardEl = document.getElementById('dcCardId');
    const dcTitleEl = document.getElementById('dcCharTitle');
    const dcStatsEl = document.getElementById('dcStats');


    const superAPIKey = '10215957904298742';
    const imdbAPIKey = 'k_rl11t9z7';

    

    $('#marvel-name').change(function() {
        let position = this.value;
        let idURL = 'https://www.superheroapi.com/api.php/10215957904298742/' + position;
        
        getSuperAPI(idURL);
    });    

    function getSuperAPI(link) {
        fetch(link)
            .then(res => res.json())
            .then(data => {
            console.log(data)
            console.log(data.name)
            console.log(data.powerstats)
    
            // const jsonToString = JSON.stringify(data.name);
            // const jsonPower = JSON.stringify(data.powerstats)
            // console.log('jsonToString', jsonToString);
            // console.log('jsonPower', jsonPower);
  });
    }
    
}

initPage();