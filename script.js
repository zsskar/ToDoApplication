let add = document.getElementById("add");
let oList = document.getElementsByClassName("todo")[0];
let list = [];
add.addEventListener("click", function() {
    let text = document.getElementById("searchText").value;
    if(text){
        list.push(text);
        oList.innerHTML += `  <li>${text}
        <div class="buttons">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </li>`;
        // let listItem = document.createElement('li');
        // listItem.innerText = text; 
        // oList.appendChild(listItem);
        // let remove = document.createElement('button');
        // remove.textContent = 'remove';
        // listItem.appendChild(remove)
        // remove.addEventListener('click',function(){
        //     let parent  = remove.parentElement;
        //     let index = list.indexOf(parent.innerHTML);
        //     if (index > -1) { 
        //         array.splice(index, 1);
        //       }
        //       oList.removeChild(parent);

        // })
    }
    else{
        alert("Enter the text !");
    }
});
