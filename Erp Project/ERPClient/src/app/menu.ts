import { UrlCodec } from "@angular/common/upgrade";

export class MenuModel{
         
    name: string = "";
    icon: string = "";
    url: string = "";
    isTitle: boolean = false;
    subMenus: MenuModel[] = [];

}

export const Menus: MenuModel[] = [

   {
     name: "Ana Sayfa",
     icon: "far fa fa-home",
     url:"/",
     isTitle:false,
     subMenus:[]

    },

    {
       name: "Ana Group",
       icon: "far fa-regular fa-compass",
       url:"",
       isTitle:false,
       subMenus:[
               
         {
              name:"Müşteriler",
              icon:"far fa fa-users",
              url:"/customers",
              isTitle:false,
              subMenus:[]
         },
         {
              name: "Depolar",
              icon: "far fa fa-warehouse",
              url: "/depots",
              isTitle: false,
              subMenus:[]
         },
         {
              name: "Ürünler",
              icon: "far fa fa-boxes",
              url: "/products",
              isTitle: false,
              subMenus:[]
         },
         {
              name: "Reçeteler",
              icon: "fas fa-clipboard-list",
              url: "/recipes",
              isTitle: false,
              subMenus:[]
         }
           
       ]

    },

    { 
         name: "Siparişler",
         icon: "fa fa-shopping-basket",
         url: "/orders",
         isTitle: false,
         subMenus: []
    },
    {
        name: "Faturalar",
         icon: "fas fa-file-invoice",
         url: "/",
         isTitle: false,
         subMenus: [
          {

           name: "Alış Faturaları",
           icon: "fas fa-file-invoice",
           url: "/invoices/purchase",
           isTitle: false,
           subMenus: []

          },

          {

           name: "Satış Faturaları",
           icon: "fas fa-file-invoice",
           url: "/invoices/selling",
           isTitle: false,
           subMenus: []

          }

         ]
    },
    {
         name: "Üretim",
         icon: "fas fa-tools",
         url: "/productions",
         isTitle: false,
         subMenus: []

    }
]