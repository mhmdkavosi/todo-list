class Ls {
    static get(key){
        return JSON.parse(localStorage.getItem(key));
    }
    static set(key,value){
        localStorage.setItem(key,JSON.stringify(value))
    }
    static has(key){
        return !(this.get(key)==null || this.get(key)=="null");
    }
    static push(key,value){
        let ls=Object(this.get(key));
        ls.push(value);
        this.set(key,ls);
    }
}