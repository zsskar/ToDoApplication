let add = document.getElementById("add");
let oList = document.getElementsByClassName("todo")[0];
let list = [];
add.addEventListener("click", function() {
    let text = document.getElementById("searchText").value;
    if(text){
        list.push(text);
        oList.innerHTML += `<li id=${list.length - 1}>${text}
        <div class="buttons">
          <button>Edit</button>
          <button onclick='deleteItem(${list.length - 1})'>Delete</button>
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

function deleteItem(id){
  if(confirm('Are you sure want to delete the item !'))
          document.getElementById(id).remove();

}
