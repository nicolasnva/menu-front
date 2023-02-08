import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = new FormControl('');
  oasis = new FormControl('');
  coca = new FormControl('');
  diaboloGrenadine = new FormControl('');
  biereBlonde = new FormControl('');
  biereAmbree = new FormControl('');
  biereTriple = new FormControl('');
  vinRouge = new FormControl('');
  vinBlanc = new FormControl('');
  cocktails = new FormControl('');
  boissonsLibre = new FormControl('');
  chips = new FormControl('');
  cacahuete = new FormControl('');
  curly = new FormControl('');
  saucisson = new FormControl('');
  houmousCrudites = new FormControl('');
  wrapsSaumon = new FormControl('');
  blinisSaumon = new FormControl('');
  aperosLibre = new FormControl('');
  tarteFraises = new FormControl('');
  brownie = new FormControl('');
  tiramisu = new FormControl('');
  porridgeBanane = new FormControl('');
  tartePommes = new FormControl('');
  glaceVanille = new FormControl('');
  dessertsLibre = new FormControl('');
  alreadySend = false;

  constructor(private http: HttpClient) { }

  sendForm() {
    if (!this.alreadySend) {
      this.http
        .post('http://localhost:9001/create', {
          name: this.name.value,
          oasis: this.oasis.value,
          coca: this.coca.value,
          diaboloGrenadine: this.diaboloGrenadine.value,
          biereBlonde: this.biereBlonde.value,
          biereAmbree: this.biereAmbree.value,
          biereTriple: this.biereTriple.value,
          vinRouge: this.vinRouge.value,
          vinBlanc: this.vinBlanc.value,
          cocktails: this.cocktails.value,
          boissonsLibre: this.boissonsLibre.value,
          chips: this.chips.value,
          cacahuete: this.cacahuete.value,
          curly: this.curly.value,
          saucisson: this.saucisson.value,
          houmousCrudites: this.houmousCrudites.value,
          wrapsSaumon: this.wrapsSaumon.value,
          blinisSaumon: this.blinisSaumon.value,
          aperosLibre: this.aperosLibre.value,
          tarteFraises: this.tarteFraises.value,
          brownie: this.brownie.value,
          tiramisu: this.tiramisu.value,
          porridgeBanane: this.porridgeBanane.value,
          tartePommes: this.tartePommes.value,
          glaceVanille: this.glaceVanille.value,
          dessertsLibre: this.dessertsLibre.value,
        })
        .subscribe();
      this.alreadySend = true;
    }
  }
}
