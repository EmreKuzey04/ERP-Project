import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Layouts } from './components/layouts/layouts';
import { Home } from './components/home/home';
import { inject } from '@angular/core';
import { AuthService } from './services/auth';
import { Customers } from './components/customers/customers';
import { Depots } from './components/depots/depots';
import { Products } from './components/products/products';
import { Recipes } from './components/recipes/recipes';
import { RecipeDetails } from './components/recipe-details/recipe-details';
import { Orders } from './components/orders/orders';
import { RequirementsPlanning } from './components/requirements-planning/requirements-planning';
import { Invoices } from './components/invoices/invoices';
import { Productions } from './components/productions/productions';


export const routes: Routes = [
{
    path: "login",
    component: Login
},
{ 
    path: "requirements-planning/:orderId",
    component:RequirementsPlanning,
    canActivate: [()=> inject(AuthService).isAuthenticated()]
},

{
    path: "",
    component:Layouts,
    canActivateChild:[()=> inject(AuthService).isAuthenticated()],
    children:[

        {
          path:"",
          component:Home  
        },
        {
           
            path:"customers",
            component: Customers

        },
        {
           path: "depots",
           component:Depots

        },
        {
           path: "products",
           component:Products

        },
        {
           path: "recipes",
           component:Recipes

        },
        { 
           path: "recipe-details/:id",
           component:RecipeDetails

        },
        {
           path: "orders",
           component: Orders

        },
        {
           path: "invoices/:type",
           component: Invoices

        },
         {
           path: "productions",
           component: Productions

        }
    ]
}

];
