console.log("welcome to notes app");
shownotes();

// If your add A note Add it to local Storage
 let addBtn  =document.getElementById('addBtn');

 addBtn.addEventListener('click',func1);
  function func1(e) {
      let addTxt=document.getElementById("addTxt");
      let notes=localStorage.getItem("notes");
      let value =addTxt.value;
    //   console.log(value);
    if(notes == null){
      notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
      notesObj.push(value);
      localStorage.setItem("notes",JSON.stringify(notesObj));
      addTxt.value="";
      console.log(notesObj);
    shownotes();
  }

  // function to show elements from local storage
  function shownotes() {
    let notes=localStorage.getItem("notes");
    if(notes == null){
        notesObj=[];
      }
      else{
          notesObj=JSON.parse(notes);
      }
      let html="";
      notesObj.forEach(function (element,index) {
          html=html+` <div class="noteCard mx-2 my-2 card" style="width: 18rem;">

          <div class="card-body">
              <h5 class="card-title">Note ${index+1}</h5>
              <p class="card-text">${element}</p>
              <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete Note</button >
          </div>
      </div>`;
      
  
      });      let noteselm=document.getElementById("notes");
      if(notesObj!=0){
          noteselm.innerHTML=html;
      }
      else{
        noteselm.innerHTML=` <b>Nothing is in notes use add above section  to create notes</b>`
      }

  }
  //function to delete a note 
  function deletenote(index) {
    console.log("i am deleting",index);
    let notes=localStorage.getItem("notes");
    if(notes == null){
        notesObj=[];
      }
      else{
          notesObj=JSON.parse(notes);
      }
notesObj.splice(index,1);
localStorage.setItem("notes",JSON.stringify(notesObj));

shownotes();
    
  }

  search=document.getElementById('searchTxt');
  search.addEventListener("input",func4);
  function func4(e) {
      let inputVal=search.value;
     console.log("input event fired",inputVal);
     let noteCard=document.getElementsByClassName('noteCard');
     Array.from(noteCard).forEach(function (element) {
       let cardTxt=element.getElementsByTagName('p')[0].innerText;
       if(cardTxt.includes(inputVal)){
           element.style.display="block";
       }
  else{
    element.style.display="none";

  }




          //  console.log(cardTxt);
       
     })

    
  }
   // further feature
   //Add title
   // mark important 
   //seperate notes by user
   // sync with server and host to web server 
   //