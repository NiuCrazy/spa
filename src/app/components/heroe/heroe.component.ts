import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',

})
export class HeroeComponent  {

  heroe: any = {};

  constructor( private activateRouter: ActivatedRoute, private heroesService: HeroesService) {

    this.activateRouter.params.subscribe( params => {
      //  console.log(params['id']);
       this.heroe = this.heroesService.getHeroe(params ['id']);
       console.log(this.heroe);
       });
    
   }

}
