import { Component } from '@angular/core';

@Component({
  selector: 'app-apartamentos',
  standalone: true,
  imports: [],
  templateUrl: './apartamentos.component.html',
  styleUrl: './apartamentos.component.css'
})
export class ApartamentosComponent {
  public ApartamentsArray = [
    {
      arrayOne:[
        {
          src: 'assets/apartamentos/comfort.webp',
          alt: 'apartamento1',
          title:'Comfort Flat Pinheiros em Hotel',
          star: '8,2',
          nota: 'Muito Bom',
          local: 'São paulo, Brasil',
          price: '552'
        },
        {
          src: 'assets/apartamentos/charlie.webp',
          alt: 'apartamento1',
          title:'Charlie Jockey Pinheiros',
          star: '8,8',
          nota: 'Fabuloso',
          local: 'São paulo, Brasil',
          price: '419'
        },
        {
          src: 'assets/apartamentos/vem.webp',
          alt: 'apartamento1',
          title:'Vem pro Copan',
          star: '8,5',
          nota: 'Muito Bom',
          local: 'São paulo, Brasil',
          price: '247'
        },
        {
          src: 'assets/apartamentos/rosemari.webp',
          alt: 'apartamento1',
          title:'Rosemari Apartments Sao Joao',
          star: '9,3',
          nota: 'Fantástico',
          local: 'São paulo, Brasil',
          price: '509'
        },
      ],
      arrayTwo:[
        {
          src: 'assets/apartamentos/snowhotel.webp',
          alt: 'apartamento1',
          title:'Snowhotel Kirkenes',
          star: '9,0',
          nota: 'Fantástico',
          local: 'Kirkenes, Noruega',
          price: '1.889'
        },
        {
          src: 'assets/apartamentos/ranua.webp',
          alt: 'apartamento1',
          title:'Ranua Resort Arctic Igloos',
          star: '8,7',
          nota: 'Fabuloso',
          local: 'Ranua, Finlândia',
          price: '1.364'
        },
        {
          src: 'assets/apartamentos/icehotel.webp',
          alt: 'apartamento1',
          title:'Icehotel',
          star: '8,6',
          nota: 'Fabuloso',
          local: 'Jukkasjärvi, Suécia',
          price: '1.032'
        },
        {
          src: 'assets/apartamentos/kakaslau.webp',
          alt: 'apartamento1',
          title:'Kakslauttanen Arctic Resort - Igloos and Chalets',
          star: '7,8',
          nota: 'Bom',
          local: 'Saariselka, Finlândia',
          price: '53.475'
        },
      ],
      arrayThree:[
        {
          src: 'assets/apartamentos/casa.webp',
          alt: 'apartamento1',
          title:'Casa Anhembi/Center Norte',
          star: '9,4',
          nota: 'Fantástico',
          local: 'São Paulo, Brasil',
          price: '399'
        },
        {
          src: 'assets/apartamentos/xbase.webp',
          alt: 'apartamento1',
          title:'XBase Studio Parque Augusta-Higienópolis Mackenzie',
          star: '9,1',
          nota: 'Fantástico',
          local: 'São Paulo, Brasil',
          price: '210'
        },
        {
          src: 'assets/apartamentos/ape.webp',
          alt: 'apartamento1',
          title:'Apê Brooklin -Berrini',
          star: '8,6',
          nota: 'Fabuloso',
          local: 'São Paulo, Brasil',
          price: '195'
        },
        {
          src: 'assets/apartamentos/mercure.webp',
          alt: 'apartamento1',
          title:'Mercure Sao Paulo Moema Times Square - Flat DIAMOND',
          star: '9,8',
          nota: 'Excepcional',
          local: 'São Paulo, Brasil',
          price: '672'
        },
      ]
    }
  ]
}
