 var YasModule = (function () {  // IIFE
    var yas = 18
    var yasarttır = function () {  //private
        return ++yas
    }
    var yasazalt = function () {  //private
        return --yas
    }
    return {
     yasarttır,yasazalt //public
    }
})();
console.log(YasModule);


console.log(YasModule.yasarttır());
console.log(YasModule.yasarttır());
console.log(YasModule.yasazalt());

yas=31;
console.log(yas);
console.log(YasModule.yasazalt());
console.log(YasModule.yasazalt());
console.log(YasModule.yas);




