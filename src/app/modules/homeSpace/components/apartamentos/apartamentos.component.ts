import { Component, signal } from '@angular/core';

//interfaces
import { SecaoApartamentosInterface } from '../../interface/apartamentos.interface';

//directives
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { SpotlightDirective } from '../../../../shared/directives/spotlight.directive';

@Component({
  selector: 'app-apartamentos',
  standalone: true,
  imports: [RevealDirective, SpotlightDirective],
  templateUrl: './apartamentos.component.html',
  styleUrl: './apartamentos.component.css'
})
export class ApartamentosComponent {
  public ApartamentsArray = signal<SecaoApartamentosInterface[]>([
    {
      title: 'Casas/apartamentos que todos amam',
      subtitle: 'Os favoritos de quem já se hospedou',
      itens: [
        {
          src: 'assets/apartamentos/comfort.webp',
          alt: 'Comfort Flat Pinheiros em Hotel',
          title: 'Comfort Flat Pinheiros em Hotel',
          star: '8,2',
          nota: 'Muito Bom',
          local: 'São paulo, Brasil',
          price: '552'
        },
        {
          src: 'assets/apartamentos/charlie.webp',
          alt: 'Charlie Jockey Pinheiros',
          title: 'Charlie Jockey Pinheiros',
          star: '8,8',
          nota: 'Fabuloso',
          local: 'São paulo, Brasil',
          price: '419'
        },
        {
          src: 'assets/apartamentos/vem.webp',
          alt: 'Vem pro Copan',
          title: 'Vem pro Copan',
          star: '8,5',
          nota: 'Muito Bom',
          local: 'São paulo, Brasil',
          price: '247'
        },
        {
          src: 'assets/apartamentos/rosemari.webp',
          alt: 'Rosemari Apartments Sao Joao',
          title: 'Rosemari Apartments Sao Joao',
          star: '9,3',
          nota: 'Fantástico',
          local: 'São paulo, Brasil',
          price: '509'
        }
      ]
    },
    {
      title: 'Estadias únicas',
      subtitle: 'Casas e apartamentos que valem a pena',
      itens: [
        {
          src: 'assets/apartamentos/snowhotel.webp',
          alt: 'Snowhotel Kirkenes',
          title: 'Snowhotel Kirkenes',
          star: '9,0',
          nota: 'Fantástico',
          local: 'Kirkenes, Noruega',
          price: '1.889'
        },
        {
          src: 'assets/apartamentos/ranua.webp',
          alt: 'Ranua Resort Arctic Igloos',
          title: 'Ranua Resort Arctic Igloos',
          star: '8,7',
          nota: 'Fabuloso',
          local: 'Ranua, Finlândia',
          price: '1.364'
        },
        {
          src: 'assets/apartamentos/icehotel.webp',
          alt: 'Icehotel',
          title: 'Icehotel',
          star: '8,6',
          nota: 'Fabuloso',
          local: 'Jukkasjärvi, Suécia',
          price: '1.032'
        },
        {
          src: 'assets/apartamentos/kakaslau.webp',
          alt: 'Kakslauttanen Arctic Resort',
          title: 'Kakslauttanen Arctic Resort - Igloos and Chalets',
          star: '7,8',
          nota: 'Bom',
          local: 'Saariselka, Finlândia',
          price: '53.475'
        }
      ]
    },
    {
      title: 'Lugares que acomodam a família toda',
      subtitle: 'Cozinha, sala e camas para todo mundo',
      itens: [
        {
          src: 'assets/apartamentos/casa.webp',
          alt: 'Casa Anhembi/Center Norte',
          title: 'Casa Anhembi/Center Norte',
          star: '9,4',
          nota: 'Fantástico',
          local: 'São Paulo, Brasil',
          price: '399'
        },
        {
          src: 'assets/apartamentos/xbase.webp',
          alt: 'XBase Studio Parque Augusta',
          title: 'XBase Studio Parque Augusta-Higienópolis Mackenzie',
          star: '9,1',
          nota: 'Fantástico',
          local: 'São Paulo, Brasil',
          price: '210'
        },
        {
          src: 'assets/apartamentos/ape.webp',
          alt: 'Apê Brooklin - Berrini',
          title: 'Apê Brooklin -Berrini',
          star: '8,6',
          nota: 'Fabuloso',
          local: 'São Paulo, Brasil',
          price: '195'
        },
        {
          src: 'assets/apartamentos/mercure.webp',
          alt: 'Mercure Sao Paulo Moema Times Square',
          title: 'Mercure Sao Paulo Moema Times Square - Flat DIAMOND',
          star: '9,8',
          nota: 'Excepcional',
          local: 'São Paulo, Brasil',
          price: '672'
        }
      ]
    }
  ]);
}
