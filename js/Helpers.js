class Helpers {
    static isEmpty(value) {
        let state = false;
        if (value == undefined || value == null)
            state = true;
        else if (typeof value == "undefined" || typeof value == "null")
            state=true;
        else if(value.length == "undefined")
            state = true;
        return state;
    }
    static isNotEmpty(value) {
        return !this.isEmpty(value);
    }
    static size(object){
        let len=0;
        if (this.isNotEmpty(object))
            len=object.length;
        return len;
    }
}