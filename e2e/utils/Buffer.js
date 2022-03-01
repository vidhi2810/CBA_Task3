let  keypairs={};

 const buffer= {

    setBuffer(key,val){
        keypairs[key]=val;
    },
    getBuffer(key){
        return keypairs[key];
    }
}
module.exports=buffer;