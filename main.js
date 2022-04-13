var app = new Vue({

el: '#app',
data: {
    toDo:[
        {
            text:'Fare la spesa',
            done: true
        },
        {
            text: 'Fare i compiti',
            done: false
        },
        {
            text: 'Portare a spasso il cane',
            done: true
        },

    ],

    textInput:''
    
   
    
  
},

created(){

     


},


methods : {
    




    removeToDo: function(toDoIndex){
        this.toDo.splice(toDoIndex,1);
    },

    addText: function(){

        let obj={
            text: this.textInput,
            done:false
        }
        

        if(!this.textInput == ''){
            this.toDo.push(obj)
        }

        this.textInput=''

    },



    textLine: function(element){

        

        if(element.done==false){
            element.done = true;
        }else{
            element.done = false;
        }
        
    }

    


}

})

