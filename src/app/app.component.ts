import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = new UntypedFormControl('');
  oasis = new UntypedFormControl('');
  coca = new UntypedFormControl('');
  diaboloGrenadine = new UntypedFormControl('');
  biereBlonde = new UntypedFormControl('');
  biereAmbree = new UntypedFormControl('');
  biereTriple = new UntypedFormControl('');
  vinRouge = new UntypedFormControl('');
  vinBlanc = new UntypedFormControl('');
  cocktails = new UntypedFormControl('');
  boissonsLibre = new UntypedFormControl('');
  chips = new UntypedFormControl('');
  cacahuete = new UntypedFormControl('');
  curly = new UntypedFormControl('');
  saucisson = new UntypedFormControl('');
  houmousCrudites = new UntypedFormControl('');
  wrapsSaumon = new UntypedFormControl('');
  blinisSaumon = new UntypedFormControl('');
  aperosLibre = new UntypedFormControl('');
  tarteFraises = new UntypedFormControl('');
  brownie = new UntypedFormControl('');
  tiramisu = new UntypedFormControl('');
  porridgeBanane = new UntypedFormControl('');
  tartePommes = new UntypedFormControl('');
  glaceVanille = new UntypedFormControl('');
  dessertsLibre = new UntypedFormControl('');
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
