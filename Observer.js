function Mac(){
    this.observers=[];
}

Mac.prototype = {
 subscribe: function(taraftar){
     this.observers.push(taraftar)
    },
 unsubscribe: function(taraftardegil){
    this.observers = this.observers.filter(taraftar=> {
        if(taraftardegil!=taraftar) {
            return taraftar;
    }
  })
 },

bildirim: function() {
    this.observers.forEach( taraftar =>{
        taraftar.call();
  })
 }  
}

const mac = new Mac();

function Taraftar1 (){
    console.log("Bugün Fenerbahçe'nin Maçı var");
}
function Taraftar2 (){
    console.log("Bugün Fenerbahçe'nin Maçı var");
}
function Taraftar3 (){
    console.log("Bugün Fenerbahçe'nin Maçı var");
}
function Taraftar4 (){
    console.log("Bugün Fenerbahçe'nin Maçı var");
}

mac.subscribe(Taraftar1);
mac.subscribe(Taraftar2);
mac.subscribe(Taraftar3);
mac.unsubscribe(Taraftar4);

mac.bildirim();