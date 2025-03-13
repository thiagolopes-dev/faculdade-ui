import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaculdadeCadastroComponent } from "./faculdade-cadastro/faculdade-cadastro.component";
import { FaculdadeListaComponent } from "./faculdade-lista/faculdade-lista.component";

const routes: Routes = [
    {
        path: '',
        component: FaculdadeListaComponent
    },
    {
        path: 'novo',
        component: FaculdadeCadastroComponent
    },
    {
        path: ':id',
        component: FaculdadeCadastroComponent
    },
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule],
   
})

export class FaculdadeRoutingModule {}