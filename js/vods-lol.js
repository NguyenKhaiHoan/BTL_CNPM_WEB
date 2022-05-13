const options_lol = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer NMLuwpEwCMPiVQn95oPQVHJkB833N5at9FI6q1E_mAdmdcY6vIo'
  }
};

fetch('https://api.pandascore.co/lol/matches/past?page[size]=10', options_lol)
  .then(function(response){
      return response.json();
  })
  .then(function(posts){
      var htmls = posts.map(function(post){
        
          return `<div class="card text-center" style="padding: 10px 10px 10px 10px;">
          <div class="row">
            <div class="col-md-3">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="${post.opponents[0].opponent.image_url}" class="img-fluid" style="margin-top: 3px; max-width: 40px; max-height: 40px"/>
              </div>
            </div>
            
            <div class="col-md-3">
                <h5 style="margin-top: 5px;" class="text-center">vs</h5>
            </div>

            <div class="col-md-3">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="${post.opponents[1].opponent.image_url}" class="img-fluid" style="margin-top: 3px; max-width: 40px; max-height: 40px"/>
              </div>
            </div>

            <div class="col-md-3">
              <a href="schedule.html?id=${post.id}"><h5 style="margin-top: 7px;" class="text-center"><i class="fas fa-caret-right"></i></h5></a>
            </div>
          </div>
        </div>`
        
      });

      var html = htmls.join('');
      document.getElementById('vods-lol').innerHTML = html; 
  })
  .then(response => console.log(response))
  .catch(err => console.error(err));
