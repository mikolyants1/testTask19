export interface ICity {
    name:{
      common:string,
      official:string
    },
    flags:{
      png:string,
      svg:string,
      alt:string
    },
    capital:[string],
    region:string,
   subregion:string,
   languages:Record<string,string>,
   population:string
}