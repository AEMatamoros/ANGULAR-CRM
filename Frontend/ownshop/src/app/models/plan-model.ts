export class PlanModel {
    constructor(
        public name:string,
        public description:string,
        public saveData:number,
        public host:boolean,
        public templatesNumber:number,
        public pagesNumber:number,
        public price:number,
        public storesNumber:number

    ){}
}

/*
import {Category} from './category'

export class Product {
    constructor(
    public id:number,
    public name:string,
    public description:string,
    public price:number,
    public user:User,
    public category:Category[],
    public date_created:string,
    public date_updated:string){

    }

}*/
