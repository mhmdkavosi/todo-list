class Dom {
    constructor(queryString){
        this.element=document.querySelector(queryString);
        return this;
    }
    getVal(){
        return this.element.value;
    }
    changeVal(value){
        return this.element.value=value;
    }
    html(elements){
        this.element.innerHTML=elements;
    }
    append(element){
        this.element.innerHTML+=element;
    }

}