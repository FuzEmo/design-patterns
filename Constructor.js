function Computer(anakart,ekrankartı,ram,kasa){
    this.anakart= anakart,
    this.ekrankartı= ekrankartı,
    this.ram=ram,
    this.kasa=kasa;
}

 let newComputer = new Computer("ROG Zenith II Extreme", "MSI GeForce RTX 2080", "64 GB", "COOLER MASTER COSMOS C700P");

 Object.defineProperty(newComputer,"işlemci",{
     value:"İntel i9-9900KF", 
     writable: true,
     enumerable: true,
     configurable: true
 });
 Object.defineProperties(newComputer,{
     ssd:{
         value:"Samsung 250GB 960 EVO ",
         writable: true,
         enumerable: true,
     },
     monitör:{
         value:"BenQ XL2411 ZOWIE 144Hz",
         writable: true,
         enumerable: true,
     }
});

Computer.prototype.toString = function() {
    return "Bilgisayarınızın anakartı "+this.anakart +", işlemcisi "+this.işlemci+", ekran kartı "+this.ekrankartı+", rami "+this.ram+", ssdsi "+this.ssd+", mönitörü "+this.monitör+", kasası "+this.kasa;
}
console.log(newComputer.toString());
console.log(newComputer);

