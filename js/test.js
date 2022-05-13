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
            return `<div class="card row mb-1">
            <p class="card-title" style="font-weight: lighter;" >12:00 - 1:00pm<p>
            <div class="row">
              <div class="text-center col-md-4">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img src="${post.opponents[0].opponent.image_url}" class="img-fluid" style="max-width: 70px; max-height: 70px;"/>
                </div>
                <p>Team 1</p>
              </div>
              
              <div class="col-md-4 d-flex align-items-center">
                  <h4 style="margin-left: auto; margin-right:auto;">
                    <div class="badge bg-primary text-wrap" style="width: 6rem;">
                      0:0
                    </div>
                  </h4>
              </div>

              <div class="text-center col-md-4">
                <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                  <img src="${post.opponents[0].opponent.image_url}" class="img-fluid" style="max-width: 70px; max-height: 70px;"/>
                </div>
                <p>Team 2</p>
              </div>
            </div>
          </div>`
          
        });
  
        var html = htmls.join('');
        document.getElementById('1').innerHTML = html; 
    })
    .then(response => console.log(response))
    .catch(err => console.error(err));
  