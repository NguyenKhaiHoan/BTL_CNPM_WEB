const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

const options_lol = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer NMLuwpEwCMPiVQn95oPQVHJkB833N5at9FI6q1E_mAdmdcY6vIo'
  }
};

fetch('https://api.pandascore.co/lol/matches/past?filter[id]='+id, options_lol)
  .then(function(response){
      return response.json();
  })
  .then(function(posts){
      html = `<div class="text-center col-md-4">
      <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src="${posts[0].opponents[0].opponent.image_url}" class="img-fluid" style="margin-top: 3px;"/>
      </div>
      <p>Team 1</p>
    </div>
    
    <div class="col-md-4">
        <h4 style="margin-top: 60px;" class="text-center">vs</h4>
    </div>

    <div class="text-center col-md-4">
      <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img src="${posts[0].opponents[1].opponent.image_url}" class="img-fluid" style="margin-top: 3px;"/>
      </div>
      <p>Team 2</p>
    </div>`
    //   var html = htmls.join('');
      document.getElementById('img-matches').innerHTML = html; 
  })
  .then(response => console.log(response))
  .catch(err => console.error(err));
