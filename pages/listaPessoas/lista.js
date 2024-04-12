 //Lista de pessoas cadastradas
 let showList = document.getElementById('listPersons')
 const personCadList = JSON.parse(localStorage.getItem('personCad'))

 if(personCadList.length == 0){
   showList.innerHTML += 
   `
   <h3> Nenhuma pessoa cadastrada ainda </h3>
   `
 }else{

 for (let i = 0; i < personCadList.length; i++) {
    
    showList.innerHTML += `
    
      <div class="card__person">
         <h3>${personCadList[i]['name']}</h3>
         <h5>${personCadList[i]['lastName']}</h5>
         <h5>${personCadList[i]['email']}</h5>
         <h5 class="strong">${personCadList[i]['ocupation']}</h5>
         
         <hr>
         <div class="out__btn">
            <button class="btn btn-primary centre" onclick="deletePerson('${i}')">Apagar ${personCadList[i]['name']} </button>
         </div>
      </div>
    
    `
 } 
}
 function deletePerson(indice){

   const listDelete = JSON.parse(localStorage.getItem('personCad'))   

   auxDelete = []
for (let j = 0; j < listDelete.length; j++) {
 
if(j == indice){
   console.log(listDelete[j]['name'])

   auxDelete = listDelete

   console.log('auxiliar',auxDelete)

   auxDelete.splice(indice,1)

   localStorage.setItem('personCad',JSON.stringify(auxDelete))
}

   
}

location.href = "lista.html"

 }

 
 

