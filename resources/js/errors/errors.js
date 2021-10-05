export default class Errors{
    constructor(){
        this.errors = {}
    }

    get(field){
        if(this.errors[field]){
            return this.errors[field][0];
        }
    }

    record(errors){
        this.errors = errors;
        console.log(errors)
    }

    clear(field){
        delete this.errors[field];
    }
}