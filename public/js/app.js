  "use strict";

  class App{
    constructor(){
      this.book = [
        {
          "id": 1,
          "name": "Hunger Games",
          "description": "The Hunger Games is a 2012 American science fiction action film directed by Gary Ross and based on the novel of the same name by Suzanne Collins. It is the first installment in The Hunger Games film series and was produced by Nina Jacobson and Jon Kilik, with a screenplay by Ross, Collins, and Billy Ray. The film stars Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth, Woody Harrelson, Elizabeth Banks, Lenny Kravitz, Stanley Tucci, and Donald Sutherland.[5] The story takes place in a dystopian post-apocalyptic future in the nation of Panem, where boys and girls between the ages of 12 and 18 must take part in the Hunger Games, a televised annual event in which the tributes are required to fight to the death until there is only one survivor. Katniss Everdeen (Lawrence) volunteers to take her younger sister's place. Joined by her district's male tribute, Peeta Mellark (Hutcherson), Katniss travels to the Capitol to train for the Hunger Games under the guidance of former victor Haymitch Abernathy (Harrelson).",
          "image": "img/sample1.jpg",
          "author": "yuson",

        
        },
        {
          "id": 2,
          "name": "Es6 & Beyond",
          "description": "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the You Don’t Know JS series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.",
          "image": "img/es6.jpg",
         
        },
        {
          "id": 3,
          "name": "Internet of Things",
          "description": "Internet of Things (IoT) refers to physical and virtual objects that have unique identities and are connected to the internet to facilitate intelligent applications that make energy, logistics, industrial control, retail, agriculture and many other domains smarter. Internet of Things is a new revolution of the Internet that is rapidly gathering momentum driven by the advancements in sensor networks, mobile devices, wireless communications, networking and cloud technologies. Experts forecast that by the year 2020 there will be a total of 50 billion devices/things connected to the internet. ",
          "image": "img/internet.jpg",
        },
        {
          "id": 4,
          "name": " First",
          "description": "In First, readers come alongside Rich as he trains for and competes in back-to-back-to-back CrossFit World Championships. Along the way, Rich shares invaluable training tips, motivational techniques, and spiritual insights that, in keeping with the CrossFit philosophy, will prepare you to respond to any real-life physical, mental and spiritual challenge.",
          "image": "img/rich.jpg",
         
        },
        {
          "id": 5,
          "name": "Dear John",
          "description": "Dear John is a 2010 American romantic drama-war film starring Amanda Seyfried and Channing Tatum. It was made by Screen Gems and was released theatrically in North America on February 5, 2010. The film was directed by Lasse Hallström, and it is an adaptation of Nicholas Sparks' 2006 novel of the same name. It follows the life of a soldier (Channing Tatum) after he falls in love with a young woman (Amanda Seyfried). They decide to exchange letters to each other after he is deployed to the war",
          "image": "img/john.jpg",
        },
        {

          "id": 6,
          "name": "HTML & CSS",
          "description": "Every day, more and more people want to learn some HTML and CSS. Joining the professional web designers and programmers are new audiences who need to know a little bit of code at work (update a content management system or e-commerce store) and those who want to make their personal blogs more attractive. Many books teaching HTML and CSS are dry and only written for those who want to become programmers, which is why this book takes an entirely new approach.",
          "image": "img/html.jpg",
        },
        {

          "id": 7,
          "name": "European History for Dummies",
          "description": "The history of Europe is rich, complex, vibrant, and at times violent; it has influenced many countries throughout the world and has itself been influenced by many countries. In the light-hearted European History For Dummies, historian Sean Lang explores the countries, conflicts, people, institutions, disasters, and triumphs that have helped shape modern-day Europe, packing in tons of facts alongside the fun. Chapters range from Celts without Kilts and What a Way to Run a Republic! to I Capture Quite a Few Castles, Reformation Ruckus, and The War to End All Wars.",
          "image": "img/sample3.jpg",
        },
         {

          "id": 8,
          "name": " MAC ARTHUR",
          "description": "Macarthur or the Red Book is a 2007 novel by Filipino author Bob Ong. It is the sixth published work from Ong. As with all Bob Ong's published novels, it is notable for its use of contemporary street Filipino words. It is also notable for its departure from the usual Bob Ong formula of using humor to comment on the various ironies of Filipino culture. Instead, it offers a gritty, realistic look at life in a Philippine slum community.",
          "image": "img/mac.jpg",
        },
         {

          "id": 9,
          "name": "Moby Dick",
          "description": "Moby-Dick; or, The Whale is a novel by American writer Herman Melville, published in 1851 during the period of the American Renaissance. Sailor Ishmael tells the story of the obsessive quest of Ahab, captain of the whaler the Pequod, for revenge on Moby Dick, the white whale that on the previous whaling voyage bit off Ahab's leg at the knee.",
          "image": "img/mob.jpg",
          "Author": "yuson",
        },
         
         
      ];
        


    
    }



    render(html, component){

      component.innerHTML += html;
    }

    reRender(html, component){

      component.innerHTML = html;
    }


 
    bookDesign(){
      let id = document.getElementById('kill');
      let name = document.getElementById('kill2');
      let description = document.getElementById('kill3');
      let image = document.getElementById('kill4');
    

      let book = {      
        "id": id.value,
        "name": name.value,
        "description": description.value,
        "image": image.value,
       
      };


      this.book.push(book);

      
      id.value = name.value = description.value = image.value = ''; 
    } 

    bookDelete(key){
      let r = this.book;
      for(let i=0;i<r.length;i++){
        if(r[i].id == key){
          this.book.splice(i,1);
          break;
        }
      }   
      this.bookList();
    }
    
    updateBookApp(id){

      id = id+1;
      let bookDummy = {
        "id" :  id,

        "name" : $('#bookname').val(),
        "description" : $('#bookdes').val(),
        "image" : $('#bookimg').val()
      }

      let r = this.book;
      for(let i=0;i<r.length;i++){
        if(r[i].id == id){
          r[i] = bookDummy;
          break;
        }
      }

      this.bookList();
    }
    

    SearchBookById(id){
      let r = this.book;
      for(let i=0;i<r.length;i++){
        if(id==r[i].id){
          return r[i];
        }
      }
    } 

    SearchBook(name){
      let objects = [];
      let r = this.book;
      for(let i=0;i<r.length;i++){
        let expr = (r[i].name.toUpperCase().indexOf(name.toUpperCase()) > -1);
        if(expr){
          objects.push(r[i]);
        }
      }
      return objects;
    }

  
  }   


class Component extends App{
    constructor(){
      
      super();
    }


        bookDesignLayout(){
          let html = `
           
      
                <nav>
                <div class="nav-wrapper  grey darken-4">
                <img class="" src="img/owl.png" style="margin-top:6px;" />
                  <a href="#" onclick="component.bookList()" class="brand-logo">  Nealskie Library App </a>
                  <ul id="nav-mobile" class="right hide-on-med-and-down">
                  <li>
                  <li><a href="#" onclick="component.Homepage()">HomePage</a></li>
                <li><a href="#" onclick="component.bookList()">List of Books</a></li>  
              <li><a href="#" onclick="component.latestBook()">Create Books</a></li>
              
                  </ul>

                 
                </div>
                </nav>

                  


             

                

              
                  


            </div>
            		<div id="updateBook"></div>
                    <div id="Homepage"></div>
                    <div id="Homepage"></div>
                    <div id="bookRecent"></div>
                    <div id="viewBook"></div>
                    <div id="bookList"></div>
                    <div id="latestBook"></div>
                    
                    
                              <footer class="page-footer  grey darken-4">
                      <div class="container">
                        <div class="row">
               
                            
                                     

                          </div>
                          
                          <div class="col l4 offset-l2 s12 ">
                          <center>
                            <h5 class="white-text ">Nealskie Library  App</h5>
                           
                            <ul>
                              <li><a href="#" onclick="component.Homepage()">HomePage</a></li>
                              <li><a href="#" onclick="component.bookList()">List of Books</a></li>  
                              <li><a href="#" onclick="component.latestBook()">Create Books</a></li>
                             
                          </center>
                            
                                
                            </ul>
                            </div>
                           
                       
                        
                        </div>
                      </div>
                <center>
               <div clas
                         <ul>@Nealskie Library App</ul>
                         
                        </center>  
                        </div>
                      </div>
                      
                    </footer>

          `;

          this.reRender(`
            ${html}

            `,document.getElementById("app"));
          this.bookRecent();    
        }

       

        viewBook(id){
          let r = this.SearchBookById(id);

          let html = `


       



            <h5 class="center-align">${r.name}</h5>
            <div class="row">       
              <div class="col s12 m12">
                <div class="card horizontal small">
                  <div class="card-image">
                    <img src="${r.image}">
                  </div>
                  <div class="card-stacked">
                    <div class="card-content">
                      <p>${r.description}</p>
                    </div>
                  <div class="card-action small"> 
                  	<div class="rating-container">
    <img class="star" src="img/star.png">
    <img class="star" src="img/star.png">
    <img class="star" src="img/star.png">
    <img class="star" src="img/star.png">
    <img class="star" src="img/star.png">
    
</div>
           
                    <button onclick="component.updateBook(${r.id})" class="btn waves-effect waves-light">Update</button>
                     <button onclick="component.bookDelete(${r.id})" class="btn waves-effect waves-light">Delete</button>
     				 <button onclick="component.bookList()" class="btn waves-effect waves-light">Back to List</button>

                    </div>

                  </div>     
                </div>   
                
              </div>      
            </div>
          `;

          this.reRender(`   
            ${html}     
            `,document.getElementById("viewBook"));
          $('#viewBook').show();
          $('#bookRecent').hide();
          $('#bookList').hide();
          $('#latestBook').hide();
          $('#updateBook').hide();

            $('#Homepage').hide();
        }

        bookList(){
          let html = `




            <br/>
              <nav>
                <div class="nav-wrapper white">
                <form>
                  <div class="input-field">       
                    <input onkeyup="component.bookItems(this.value)" id="search" type="search" placeholder="Search" required>
                    <label for="search"><i class="material-icons">search</i></label>
                    <i class="material-icons">close</i>
                  </div>
                </form>
              </div>
            </nav>
            <br/>

          `;

          html += `
            <div class="row" id="bookItems">
          `;
          let r = this.book;
          for(let i=0;i<r.length;i++){
            html+= `
              <div class="col s12 m4">
                <div class="card small hoverable">
                  <div class="card-image">
                    <img src="${r[i].image}">
                    <span class="card-title">${r[i].name}</span>
                  </div>
                  <div class="card-content">
                    <p>${r[i].description}</p>
                  </div>
                  <div class="card-action">
                    <a href="#" onclick="component.viewBook(${r[i].id})">More Details</a>
                  </div>

                </div>
              </div>
            `;
          }

          html += `</div>`;

          this.reRender(`
            ${html}
            `,document.getElementById("bookList"));
          $('#bookList').show();
          $('#viewBook').hide();
          $('#bookRecent').hide();
          $('#latestBook').hide();
          $('#updateBook').hide();    
               $('#Homepage').hide();
        }

       

        bookItems(name){
          let html = ``;
          let r = this.SearchBook(name);
          for(let i=0;i<r.length;i++){
            html+= `
              <div class="col s12 m4">
                <div class="card small hoverable">
                  <div class="card-image">
                    <img src="${r[i].image}">
                    <span class="card-title">${r[i].name}</span>
                  </div>
                  <div class="card-content">
                    <p>${r[i].description}</p>
                  </div>
                  <div class="card-action">
                    <a href="#" onclick="component.viewBook(${r[i].id})">More</a>
                  </div>
                </div>
              </div>
            `;
          }   
          this.reRender(`
            ${html}
            `,document.getElementById("bookItems"));
          $('#bookList').show();
          $('#viewBook').hide();
          $('#bookRecent').hide();  
          $('#latestBook').hide();
              $('#Homepage').hide();    
        }



        bookRecent(){
          
          let html = `

           <div class="slider">
              <ul class="slides">
                <li>
                  <img src="img/collections.png"> <!-- random image -->
                  <div class="caption center-align">
                    <h3>Welcome to Nealskie Library App</h3>
                    <h5 class="light grey-text text-lighten-3">version (1.0)</h5>
                   
                  </div>
                </li>
                <li>
                  <img src="img/cover.jpg"> <!-- random image -->
                  <div class="caption center-align">
                    <h3>Welcome to Nealskie Library App</h3>
                    <h5 class="light grey-text text-lighten-3">version (1.0)</h5>
                    
                  </div>
                </li>
                <li>
                  <img src="img/books.jpg"> <!-- random image -->
                  <div class="caption center-align">
                    <h3>Welcome to Nealskie Library App</h3>
                    <h5 class="light grey-text text-lighten-3">version (1.0)</h5>
                    
                  </div>
                </li>
                <li>
                  <img src="img/data.jpg"> <!-- random image -->
                  <div class="caption center-align">
                    <h3>Welcome to Nealskie Library App</h3>
                    <h5 class="light grey-text text-lighten-3">version (1.0)</h5>
                    
                  </div>
                </li>
              </ul>
            </div>
          
            
        
             
           

              

               

           

          
                   <div class="row">
          `;

          let r = this.book;
          let count = 0;
          for(let i=(r.length-1);i>=0;i--){
            if(count++ === 6)break;
            html+= `
              <div class="col s12 m4">
                <div class="card small hoverable">
                  <div class="card-image">
                    <img src="${r[i].image}">
                    <span class="card-title">${r[i].name}</span>
                  </div>
                  <div class="card-content">
                    <p>${r[i].description}</p>
                  </div>
                  <div class="card-action">
                    <a href="#" onclick="component.viewBook(${r[i].id})">More Details</a>
                  </div>
                </div>
              </div>
            `;
          }

          html += `</div>`;

          this.render(`   
            ${html}
            `,document.getElementById("bookRecent"));
        }

        latestBook(){
          let html = `

         
           
                
             <div class="row">
                  <div class="input-field col s6 ">
                    <input disabled value="${this.book.length+1}" id="kill" type="text"class=" vintage" >
                  </div>
                    <div class="row">
                <div class="input-field col s6 ">
                    <input id="kill2" type="text" class=" vintage">
                    <label for="kill2">Enter Book Name</label>
                  </div>
                </div>
                
                <div class="row">
                  <div class="input-field col s6 ">
                    <input id="kill3" type="text" class="deep-white lighten-1">
                   <label for="kill3">Enter Book Details</label>
                  </div>

                <div class="row">
                  <div class="input-field col s6 ">
                    <input id="kill4" type="text" class="deep-white lighten-1">
                    <label for="kill4"> Enter Link Address Pictures</label>
                  </div>
              <div align="center">
             <button onclick="component.bookList()" class="btn waves-effect waves-light">Back</button>
            
                   <button onclick="component.bookDesign()" class="btn waves-effect waves-light">Save</button>
               </div>
           
               
              
            

          `;

          this.reRender(`
            ${html}
            `,document.getElementById("latestBook"));
          $('#latestBook').show();
          $('#bookList').hide();
          $('#viewBook').hide();
          $('#bookRecent').hide(); 
          $('#Homepage').hide();    
        }


       updateBook(id){

      id = id - 1;
      let html = `

      <div class="row">
      <div class="input-field col s6">
      <h5><B>Update to Latest Book:</B></h5>
      <tr>
      <input id="bookname" type="text" class="validate" value="${this.book[id].name}"></div>
      <input id="bookimg" type="text" class="validate" value="${this.book[id].image}"></div>
      <div class="input-field col s6">
      <h5><B>Update Description</B></h5>


      <input id="bookdes" type="text" class="validate" value="${this.book[id].description}"></div>
      </div>
      <a onclick="component.updateBookApp(${id})" class="waves-effect blue waves-light btn">Update</a>

      `;  
      this.reRender(`

        ${html}

        `,document.getElementById("updateBook"));   

      $('#bookList').hide();
      $('#viewBook').hide();
      $('#updateBook').show();
      $('#bookRecent').hide();  
      $('#latestBook').hide();
      $('#Homepage').hide();    

    }


                 


                  
                  Homepage(){
                    let html=`



                    `;
                     this.reRender(`
                        ${html}
                        `,document.getElementById("latestBook"));
                      $('#latestBook').hide();
                      $('#bookList').hide();
                      $('#viewCar').hide();
                      $('#bookRecent').show();  
                      $('#Homepage').hide();  

                  }

} 
  let component = new Component();
  component.bookDesignLayout();
