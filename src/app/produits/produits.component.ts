import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {

  produits?: Produit[]; //un tableau de produits

  constructor(private produitService: ProduitService,
    private router :Router) {
    //this.produits=[];
  }

  ngOnInit(): void {
    this.produitService.listeProduit().subscribe(prods => {
    console.log(prods);
    this.produits = prods;
    });
    }
    supprimerProduit(p: Produit)
    {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.produitService.supprimerProduit(p.idProduit)
    .subscribe(() => {
    console.log("produit supprimé");
    });
    this.router.navigate(['produits']).then(() => {
    window.location.reload();
    });
    }

}
