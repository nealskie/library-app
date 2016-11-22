"use strict";

class App{
  constructor(){
  
  }

  render(html, component){

    component.innerHTML += html;
  }

  reRender(html, component){

    component.innerHTML = html;
  }

}

class Component extends App{

constructor(){
  super();
}

recipeLayout(){
  this.render(`  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Nealskie Library</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li>
      <a href="collapsible.html">CreateBooks</a>
      </li>
        <li>
        <a href="sass.html">BookDetails</a>
        </li>
        <li><a href="badges.html"></a>
        </li>
       
      </ul>
    </div>
  </nav>
  <br>

  <div class="carousel carousel-slider">
    <a class="carousel-item" href="#one!"><img src="http://lorempixel.com/800/400/food/1"></a>
    <a class="carousel-item" href="#two!"><img src="http://lorempixel.com/800/400/food/2"></a>
    <a class="carousel-item" href="#three!"><img src="http://lorempixel.com/800/400/food/3"></a>
    <a class="carousel-item" href="#four!"><img src="http://lorempixel.com/800/400/food/4"></a>
  </div>

  <a class="waves-effect waves-light btn-large">Get Started</a>

   <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">welcome to our library</h5>
               
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links:</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">CreateBooks</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">BookDetails</a></li>
              
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2016 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More links</a>
            </div>
          </div>
        </footer>
            

    
            


    `,document.getElementById("app"));

}
}



let component = new Component();
component.recipeLayout();


// "use strict";

// class App{
//  constructor(){
//    this.movies = [
//      {
//        "Title":"Winter Is Coming",
//        "Year":"2011",
//        "Director":"Timothy Van Patten",
//        "Poster":"img/winteriscoming.jpg",
//        "Actors":"Sean Bean, Mark Addy, Nikolaj Coster-Waldau, Michelle Fairley"
//      },
//      {
//        "Title":"The North Remembers",
//        "Year":"2012",
//        "Director":"Alan Taylor",
//        "Poster":"http://ia.media-imdb.com/images/M/MV5BNzc4NDQ5MzA1N15BMl5BanBnXkFtZTcwMDQwNTgzNw@@._V1_SX300.jpg",
//        "Actors":"Peter Dinklage, Lena Headey, Nikolaj Coster-Waldau, Michelle Fairley"
//      },
//      {
//        "Title":"Valar Dohaeris",
//        "Year":"2013",
//        "Director":"Daniel Minahan",
//        "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4NjcwMzAzN15BMl5BanBnXkFtZTcwNzgxNTcyOQ@@._V1_SX300.jpg",
//        "Actors":"Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington"
//      },
//      {
//        "Title":"Two Swords",
//        "Year":"2014",
//        "Director":"D.B. Weiss",
//        "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyNDYxMDA1M15BMl5BanBnXkFtZTgwNDYyNTI1MTE@._V1_SX300.jpg",
//        "Actors":"Peter Dinklage, Nikolaj Coster-Waldau, Lena Headey, Emilia Clarke"
//      },
//      {
//        "Title":"The Wars to Come",
//        "Year":"2015",
//        "Director":"Michael Slovis",
//        "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4ODQ0ODQyMl5BMl5BanBnXkFtZTgwMDczODYyNDE@._V1_SX300.jpg",
//        "Actors":"Peter Dinklage, Nikolaj Coster-Waldau, Lena Headey, Emilia Clarke"
//      },
//      {
//        "Title":"The Red Woman",
//        "Year":"2016",
//        "Director":"Jeremy Podeswa",
//        "Poster":"img/redwoman.jpg",
//        "Actors":"Peter Dinklage, Nikolaj Coster-Waldau, Lena Headey, Emilia Clarke"
//      }
//    ];
//  }

//  render(html, component){

//    component.innerHTML += html;
//  }

//  reRender(html, component){

//    component.innerHTML = html;
//  }

//  createMovie(){
//    let t = document.getElementById('newTitle');
//    let y = document.getElementById('newYear');
//    let d = document.getElementById('newDirector');
//    let p = document.getElementById('newPoster');
//    let a = document.getElementById('newActors');

//    let movie = {"Title":t.value,"Year":y.value,"Director":d.value,"Poster":p.value,"Actors":a.value};
//    this.movies.push(movie);

//    t.value = y.value = d.value = p.value = a.value = ''; //Clear Fields
//    this.movieListInfo();
//  }

//  deleteMovie(key){   
//    let table = document.getElementById('movieListInfo');
//    table.deleteRow(key);
//    this.movies.splice(key,1);

//    // let m = this.movies;
//    // let dummy = [];
//    // for(let i=0;i<m;i++){
//    //  if(key!=i){
//    //    dummy.push(m[i]);
//    //  }
//    // }
//    // this.movies = dummy;
//    let details = document.getElementById('movieDetails');
//    details.innerHTML = "";
//    this.movieListInfo();   
//  }

//  updateMovie(key){
//    let y = document.getElementById('updateYear');
//    let d = document.getElementById('updateDirector');
//    let a = document.getElementById('updateActors');

//    let m = this.movies[key];
//    let movie = {"Title":m.Title,"Year":y.value,"Director":d.value,"Poster":m.Poster,"Actors":a.value};

//    this.movies[key] = movie;
//    let details = document.getElementById('movieDetails');
//    details.innerHTML = "";
//    this.movieListInfo();     
//  }
// }

// class Component extends App{
//  constructor(){
//    super();
//  }

//  movieList(){
//    this.render(
//      `
//  <nav class="navbar navbar-default" role="navigation">
//  <div class="navbar-header">
//  <button type="button" class="navbar-toggle" data-toggle="collapse"
//  data-target="#example-navbar-collapse">
//  <span class="sr-only">Toggle navigation</span>
//  <span class="icon-bar"></span>
//  <span class="icon-bar"></span>
//  <span class="icon-bar"></span>
//   </button>
//   <a class="navbar-brand" href="#">Movie App</a>
//   </div>
//   <div class="collapse navbar-collapse" id="example-navbar-collapse">
//   <ul class="nav navbar-nav">
//   <li class="active"><a href="#">New Movie</a></li>
//   <li><a href="#">Movie List</a></li>   
//   </ul>
//   </div>
//  </nav>
//        <div class="row">
//          <div class="col col-sm-6">
//            <div id="movieCreate"></div>            
//          </div>
//          <div class="col col-sm-6">
//            <h1>Movie List</h1>
//            <table id="movieList" class="table">
//              <thead>
//                <tr>
//                  <th>Title</th>
//                  <th>Year</th>
//                  <th>Action</th>
//                </tr>
//              </thead>
//              <tbody id="movieListInfo"></tbody>
//            </table>
//          </div>
//        </div>
//        <div id="movieDetails"></div>
//      `
//      ,document.getElementById('app'));
//    this.movieListInfo();
//  }

//  movieListInfo(){
//    let html = "";
//    let m = this.movies;
//    for(let i=0;i<m.length;i++){
//      html += `
//        <tr>
//          <td>${m[i].Title}</td>
//          <td>${m[i].Year}</td>
//          <td><button class="btn btn-primary"  onclick="component.movieDetails(${i})">Show Details</button></td>
//        </tr>
//      `;
//    }
//    this.reRender(html,document.getElementById('movieListInfo'));
//  }

//  movieDetails(key){
//    this.reRender(
//      `
//        <h1>Movie Details</h1>
//        <div class="media">
//            <div class="media-left">
//                <a href="#">
//                    <img class="media-object img-thumbnail" src="${this.movies[key].Poster}" width="220" />
//                </a>
//            </div>
//            <div class="media-body" id="movieDetailsInfo">
//                <h4 class="media-heading">${this.movies[key].Title}</h4>
//                Year: ${this.movies[key].Year}<br/>
//            Director: ${this.movies[key].Director}<br/>
//            Actors: ${this.movies[key].Actors}<br/>
//            <button class="btn btn-success" onclick="component.movieUpdate(${key})">Update</button>
//            <button class="btn btn-danger" onclick="component.deleteMovie(${key})">Delete</button>
//          </div>  
//        </div>      
//      `,document.getElementById('movieDetails'));
//  }

//  movieCreate(){
//    this.render(
//      `
//        <h1>New Movie</h1>
//        Title: <input class="form-control" id="newTitle" type="" placeholder="Enter Title" /><br/>
//        Year: <input class="form-control" id="newYear" type="" placeholder="Enter Title" /><br/>
//        Director: <input class="form-control" id="newDirector" type="" placeholder="Enter Director" /><br/>
//        Poster: <input class="form-control" id="newPoster" type="" placeholder="Enter Poster" /><br/>
//        Actors: <input class="form-control" id="newActors" type="" placeholder="Separate using comma" /><br/>
//        <button class="btn btn-primary" onclick="component.createMovie()">Create</button>
//      `,document.getElementById('movieCreate'));
//  }

//  movieUpdate(key){
//    this.reRender(
//      `
//          <h4 class="media-heading">${this.movies[key].Title}</h4>
//              Year: <input id="updateYear" type="text" value="${this.movies[key].Year}" /><br/>
//          Director: <input id="updateDirector" type="text" value="${this.movies[key].Director}" /><br/>
//          Actors: <input id="updateActors" type="text" value="${this.movies[key].Actors}" /><br/>
//          <button class="btn btn-success" onclick="component.updateMovie(${key})">Save</button>
//      `,document.getElementById('movieDetailsInfo'));
//  }
// }

// let component = new Component();
// component.movieList();
// component.movieCreate();