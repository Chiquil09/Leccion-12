import { Component, OnInit } from '@angular/core';
import { HereoModel } from 'src/app/models/heroe.model';
import { NgForm } from '@angular/forms';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HereoModel();

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {

  }

  guardar(form: NgForm) {

    if (form.invalid) {
      console.log('formulario no valido');
      return;
    }

    if (this.heroe.id) {
      this.heroesService.actualizarHeroe(this.heroe)
        .subscribe(resp => {
          console.log(resp);
        });


    } else {
      this.heroesService.crearHeroe(this.heroe)
        .subscribe(resp => {
          console.log(resp);
          this.heroe = resp;
        });
    }


  }

}
