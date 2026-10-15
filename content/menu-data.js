/* Auberge de Savièse — contenu de la carte. Modifier les prix et textes ici uniquement. */
window.MENU_DATA = {
 "schema": "swissadvert.menu/0.2",
 "venue": {
  "name": "Auberge de Savièse",
  "brand": "Restaurant",
  "logo": "assets/img/logo-saviese-wide.png",
  "logoAlt": "Restaurant Auberge de Savièse",
  "hero": {
   "image": "images/hero-saviese.jpg",
   "imageSmall": "images/hero-saviese-800.jpg",
   "imageFocus": "50% 50%",
   "alt": "Salle de restaurant chaleureuse de style chalet, fondue sur la table"
  },
  "title": "Notre carte",
  "notice": "Ouvert 7/7 — cuisine non stop de 12h00 à 23h00",
  "currency": "CHF",
  "language": "fr",
  "reservation": {
   "label": "Réserver une table",
   "url": "https://www.aubergedesaviese.com/reserver-une-table/"
  },
  "notes": [
   "Tout repas commandé uniquement avec des carafes d'eau sera majoré de 2.– CHF p.p.",
   "Nous vous donnons volontiers les informations détaillées sur la présence possible d'allergènes dans les plats du menu. En cas d'allergie ou d'intolérance, veuillez vous adresser à notre personnel qui vous renseignera volontiers.",
   "Provenance de notre charcuterie : CH. Provenance de nos poissons/viandes : Truite CH – Perches EE – Viandes CH."
  ],
  "legend": {
   "aop": "Appellation d'Origine Protégée",
   "igp": "Indication Géographique Protégée",
   "ch": "Produit suisse",
   "bio": "Produit bio",
   "biosuisse": "Produit Bio Suisse",
   "vegan": "100 % végane",
   "af": "Sans alcool"
  },
  "source": "Carte imprimée (captures reçues le 13.10.2026) + https://www.aubergedesaviese.com/notre-carte/",
  "sourceChecked": "2026-10-13",
  "provider": "Swiss Advert Studio"
 },
 "groups": [
  {
   "id": "manger",
   "title": "À manger"
  },
  {
   "id": "boire",
   "title": "À boire"
  }
 ],
 "categories": [
  {
   "id": "fondues-fromage",
   "group": "manger",
   "title": "Fondues au fromage",
   "icon": "fondue",
   "image": "images/cat-fondues-fromage.jpg",
   "imageAlt": "Caquelon de fondue au fromage avec morceaux de pain",
   "note": "Minimum 2 personnes. Toutes nos fondues au fromage sont servies sans viande, avec du pain et contiennent du vin blanc.",
   "sections": [
    {
     "title": "Les traditionnelles",
     "items": [
      {
       "name": "Fondue maison",
       "desc": "100% Gruyère",
       "price": 26,
       "unit": "par personne",
       "tags": [
        "aop"
       ],
       "image": "images/p-fondue-maison.jpg",
       "id": "fondues-fromage--fondue-maison",
       "imageSmall": "images/p-fondue-maison-800.jpg",
       "imageFocus": "50% 60%"
      },
      {
       "name": "Fondue moitié-moitié",
       "desc": "Gruyère au lait cru et Vacherin Fribourgeois au lait thermisé",
       "price": 29,
       "unit": "par personne",
       "tags": [
        "aop"
       ],
       "image": null,
       "id": "fondues-fromage--fondue-moitie-moitie"
      }
     ]
    },
    {
     "title": "Les découvertes du Savièse",
     "items": [
      {
       "name": "Sans alcool - Fondue moitié-moitié",
       "price": 27,
       "unit": "par personne",
       "tags": [
        "af"
       ],
       "image": null,
       "id": "fondues-fromage--sans-alcool-fondue-moitie-moitie"
      },
      {
       "name": "Sans lactose - Fondue au fromage de chèvre",
       "desc": "servie avec pommes de terre, raisin et quartiers de pommes",
       "price": 33,
       "unit": "par personne",
       "image": null,
       "id": "fondues-fromage--sans-lactose-fondue-au-fromage-de-chevre"
      },
      {
       "name": "Fondue Royale",
       "desc": "moitié-moitié au champagne et morilles",
       "price": 44,
       "unit": "par personne",
       "image": "images/p-fondue-royale.jpg",
       "id": "fondues-fromage--fondue-royale",
       "imageSmall": "images/p-fondue-royale-800.jpg",
       "imageFocus": "50% 60%"
      },
      {
       "name": "Fondue maison aux bolets",
       "price": 32,
       "unit": "par personne",
       "image": null,
       "id": "fondues-fromage--fondue-maison-aux-bolets"
      },
      {
       "name": "Fondue maison aux morilles",
       "price": 38,
       "unit": "par personne",
       "image": null,
       "id": "fondues-fromage--fondue-maison-aux-morilles"
      },
      {
       "name": "Fondue maison au poivre vert et échalotes",
       "price": 28,
       "unit": "par personne",
       "image": null,
       "id": "fondues-fromage--fondue-maison-au-poivre-vert-et-echalotes"
      },
      {
       "name": "Fondue maison à la tomate",
       "desc": "servie avec pommes de terre",
       "price": 32,
       "unit": "par personne",
       "image": null,
       "id": "fondues-fromage--fondue-maison-a-la-tomate"
      },
      {
       "name": "Fondue moitié-moitié à la truffe noire",
       "price": 39,
       "unit": "par personne",
       "review": "La version anglaise de la carte précise « Bourgogne truffle (tuber uncinatum) », absent de la version française.",
       "image": null,
       "id": "fondues-fromage--fondue-moitie-moitie-a-la-truffe-noire"
      },
      {
       "name": "Fondue maison au Champagne",
       "price": 34,
       "unit": "par personne",
       "image": null,
       "id": "fondues-fromage--fondue-maison-au-champagne"
      },
      {
       "name": "Fondue au Vacherin",
       "desc": "100% Vacherin Fribourgeois servie avec pommes de terre",
       "price": 32,
       "unit": "par personne",
       "tags": [
        "aop"
       ],
       "image": null,
       "id": "fondues-fromage--fondue-au-vacherin"
      },
      {
       "name": "Fondue végane aux noix de cajou",
       "price": 36,
       "unit": "par personne",
       "tags": [
        "vegan"
       ],
       "note": "Selon disponibilité",
       "image": null,
       "id": "fondues-fromage--fondue-vegane-aux-noix-de-cajou"
      }
     ]
    },
    {
     "title": "En accompagnement avec nos fondues au fromage",
     "items": [
      {
       "name": "Panier de pommes de terre",
       "price": 5,
       "image": null,
       "id": "fondues-fromage--panier-de-pommes-de-terre"
      },
      {
       "name": "Shot de Kirsch",
       "desc": "eau-de-vie de cerise",
       "price": 5,
       "image": null,
       "id": "fondues-fromage--shot-de-kirsch"
      },
      {
       "name": "Assiette de fruits",
       "desc": "raisins et quartiers de pommes",
       "price": 5,
       "image": null,
       "id": "fondues-fromage--assiette-de-fruits"
      }
     ]
    }
   ],
   "imageSmall": "images/cat-fondues-fromage-800.jpg",
   "imageFocus": "50% 55%"
  },
  {
   "id": "fondues-viande",
   "group": "manger",
   "title": "Fondues à la viande",
   "icon": "fork",
   "image": "images/cat-fondues-viande.jpg",
   "imageAlt": "Fondue chinoise avec fines tranches de bœuf et sauces maison",
   "note": "Minimum 2 personnes. Toutes nos fondues à la viande ne comportent pas de fromage.",
   "sections": [
    {
     "title": "Fondues à la viande",
     "items": [
      {
       "name": "Fondue Bourguignonne",
       "desc": "210 g par personne (viande de bœuf), servie avec nos sauces maison et frites",
       "price": 44,
       "unit": "par personne",
       "image": null,
       "id": "fondues-viande--fondue-bourguignonne"
      },
      {
       "name": "Fondue Chinoise",
       "desc": "300 g par personne (viande de bœuf), servie avec nos sauces maison et frites",
       "price": 46,
       "unit": "par personne",
       "image": "images/p-fondue-chinoise.jpg",
       "id": "fondues-viande--fondue-chinoise",
       "imageSmall": "images/p-fondue-chinoise-800.jpg",
       "imageFocus": "50% 60%"
      },
      {
       "name": "Fondue Savièsarde",
       "desc": "260 g par personne (viande de bœuf aromatisée), style « glareyarde », servie avec nos sauces maison et frites",
       "price": 48,
       "unit": "par personne",
       "image": null,
       "id": "fondues-viande--fondue-saviesarde"
      }
     ]
    }
   ],
   "imageSmall": "images/cat-fondues-viande-800.jpg",
   "imageFocus": "50% 30%"
  },
  {
   "id": "raclette",
   "group": "manger",
   "title": "La Raclette",
   "icon": "cheese",
   "image": "images/cat-raclette.jpg",
   "imageAlt": "Fromage à raclette fondu raclé sur une assiette avec pommes de terre",
   "note": "Pour une personne. Servie sur assiette avec cornichons, petits oignons et pommes de terre en robe des champs.",
   "sections": [
    {
     "title": "La Raclette",
     "items": [
      {
       "name": "Le menu Raclette Tradition",
       "desc": "en 3 services avec une petite assiette Valaisanne",
       "price": 36,
       "unit": "par personne",
       "tags": [
        "aop",
        "igp"
       ],
       "image": "images/p-raclette-tradition.jpg",
       "id": "raclette--le-menu-raclette-tradition",
       "imageSmall": "images/p-raclette-tradition-800.jpg",
       "imageFocus": "50% 60%"
      },
      {
       "name": "Raclette",
       "desc": "en 3 services, avec uniquement cornichons, petits oignons et pommes de terre en robe des champs",
       "price": 24,
       "unit": "par personne",
       "tags": [
        "aop"
       ],
       "image": null,
       "id": "raclette--raclette"
      }
     ],
     "story": {
      "title": "Origines de la Raclette — Qui l'a inventée ?",
      "paragraphs": [
       "D'après la légende, c'est un vigneron valaisan prénommé «Léon» qui a découvert la Raclette.",
       "Par une rude soirée d'hiver, alors qu'il recevait des amis et avait jeté à cuire quelques pommes de terre dans les braises, il prit le fromage qu'il avait malencontreusement oublié près du foyer et qui avait fondu. Il le racla dans une assiette qui contenait quelques pommes de terre fraîchement tirées du feu.",
       "La Raclette valaisanne venait de naître.",
       "Elle s'est étendue depuis, bien au-delà de nos frontières. On reconnaît l'existence du fromage en Valais à partir du 4e siècle avant J.-C. Pendant l'ère romaine, le fromage d'alpage se crée une réputation d'excellence. Entre le 14e et le 19e siècle, le fromage se fait une belle place comme produit d'exportation. On l'utilisait fréquemment comme monnaie d'échange et servait même au versement des salaires.",
       "En 1574 le fromage fondu était déjà servi en Valais sous le nom de «Raclette» en dialecte local, mais ce n'est qu'en 1874 que celui-ci fut utilisé pour donner le nom à un fromage.",
       "Aujourd'hui, le fromage à Raclette du Valais AOP est toujours produit selon la recette ancestrale traditionnelle."
      ]
     }
    }
   ],
   "imageSmall": "images/cat-raclette-800.jpg",
   "imageFocus": "50% 55%"
  },
  {
   "id": "entrees",
   "group": "manger",
   "title": "Entrées & Malakoffs",
   "icon": "bowl",
   "image": "images/cat-entrees.jpg",
   "imageAlt": "Assiette valaisanne de viande séchée, jambon cru et lard sec",
   "sections": [
    {
     "title": "Les entrées",
     "items": [
      {
       "name": "Soupe de légumes du Savièse",
       "price": 13,
       "note": "En saison",
       "image": null,
       "id": "entrees--soupe-de-legumes-du-saviese"
      },
      {
       "name": "Velouté de potiron maison",
       "price": 13,
       "note": "En saison",
       "image": null,
       "id": "entrees--veloute-de-potiron-maison"
      },
      {
       "name": "Escargots",
       "variants": [
        {
         "label": "6 pièces",
         "price": 15
        },
        {
         "label": "12 pièces",
         "price": 30
        }
       ],
       "image": null,
       "id": "entrees--escargots"
      },
      {
       "name": "Carpaccio de bœuf au parmesan",
       "desc": "sauce au citron vert, basilic et frites",
       "variants": [
        {
         "label": "Petite portion",
         "price": 18.5
        },
        {
         "label": "Portion",
         "price": 26
        }
       ],
       "image": null,
       "id": "entrees--carpaccio-de-buf-au-parmesan"
      },
      {
       "name": "Assiette Valaisanne",
       "desc": "viande séchée de boeuf, jambon cru, lard sec, saucisson à l'ail",
       "variants": [
        {
         "label": "Petite portion",
         "price": 16.5
        },
        {
         "label": "Portion",
         "price": 25
        }
       ],
       "tags": [
        "igp"
       ],
       "image": "images/p-assiette-valaisanne.jpg",
       "id": "entrees--assiette-valaisanne",
       "imageSmall": "images/p-assiette-valaisanne-800.jpg",
       "imageFocus": "50% 60%"
      },
      {
       "name": "Assiette de viande séchée du Valais",
       "desc": "viande séchée de boeuf",
       "variants": [
        {
         "label": "Petite portion",
         "price": 17.5
        },
        {
         "label": "Portion",
         "price": 26
        }
       ],
       "tags": [
        "igp"
       ],
       "image": null,
       "id": "entrees--assiette-de-viande-sechee-du-valais"
      },
      {
       "name": "Assiette de truite fumée du Valais",
       "desc": "et ses toasts",
       "variants": [
        {
         "label": "Petite portion",
         "price": 19
        },
        {
         "label": "Portion",
         "price": 29
        }
       ],
       "image": null,
       "id": "entrees--assiette-de-truite-fumee-du-valais"
      }
     ],
     "review": "Colonnes à demi-assiette et assiette pleine interprétées comme « petite portion / portion ». À confirmer."
    },
    {
     "title": "Les Malakoffs",
     "items": [
      {
       "name": "Le menu Malakoff",
       "desc": "petite salade mêlée et 2 Malakoffs",
       "price": 21,
       "image": "images/p-malakoff.jpg",
       "id": "entrees--le-menu-malakoff",
       "imageSmall": "images/p-malakoff-800.jpg",
       "imageFocus": "50% 60%"
      },
      {
       "name": "Malakoff à la pièce",
       "price": 7,
       "image": null,
       "id": "entrees--malakoff-a-la-piece"
      }
     ],
     "note": "Servis avec cornichons et petits oignons.",
     "story": {
      "title": "Le saviez-vous ?",
      "paragraphs": [
       "Le Malakoff est une spécialité vaudoise, ramenée par les soldats suisses à leur retour de la guerre de Crimée. Son nom vient du fort Malakoff, qu'ils assiégèrent pendant 11 mois. C'est durant cette période que les soldats s'habituèrent à faire frire des tranches de fromage dans une poêle et qui sont à l'origine des succulents beignets au fromage frits que nous vous proposons aujourd'hui."
      ]
     }
    }
   ],
   "imageSmall": "images/cat-entrees-800.jpg",
   "imageFocus": "50% 55%"
  },
  {
   "id": "salades",
   "group": "manger",
   "title": "Salades",
   "icon": "leaf",
   "image": "images/cat-salades.jpg",
   "imageAlt": "Salade de chèvre chaud aux noix et au miel",
   "sections": [
    {
     "title": "Les salades",
     "items": [
      {
       "name": "Salade verte",
       "variants": [
        {
         "label": "Petite portion",
         "price": 6.5
        },
        {
         "label": "Portion",
         "price": 11
        }
       ],
       "image": null,
       "id": "salades--salade-verte"
      },
      {
       "name": "Salade mêlée",
       "variants": [
        {
         "label": "Petite portion",
         "price": 8.5
        },
        {
         "label": "Portion",
         "price": 15
        }
       ],
       "image": null,
       "id": "salades--salade-melee"
      },
      {
       "name": "Salade Mont-Blanc",
       "desc": "croûtons de Raclette au four, tomate, laitue, maïs, céleri, noix",
       "variants": [
        {
         "label": "Petite portion",
         "price": 17
        },
        {
         "label": "Portion",
         "price": 24
        }
       ],
       "image": null,
       "id": "salades--salade-mont-blanc"
      },
      {
       "name": "Salade de chèvre chaud",
       "desc": "fromage de chèvre chaud, tomate, laitue, noix, pomme, graines de sésame, miel",
       "variants": [
        {
         "label": "Petite portion",
         "price": 17
        },
        {
         "label": "Portion",
         "price": 24
        }
       ],
       "image": null,
       "id": "salades--salade-de-chevre-chaud"
      }
     ],
     "review": "Colonnes à demi-assiette et assiette pleine interprétées comme « petite portion / portion ». À confirmer."
    }
   ],
   "imageSmall": "images/cat-salades-800.jpg",
   "imageFocus": "50% 55%"
  },
  {
   "id": "pates",
   "group": "manger",
   "title": "Pâtes",
   "icon": "pasta",
   "image": "images/cat-pates.jpg",
   "imageAlt": "Plat gratiné de pâtes, pommes de terre et fromage",
   "sections": [
    {
     "title": "Les pâtes",
     "items": [
      {
       "name": "Le Rustique du Savièse",
       "desc": "pâtes, pommes de terre, Gruyère, lard sec du Valais et sauce à la crème, servi avec une petite salade verte",
       "price": 28,
       "tags": [
        "aop",
        "igp"
       ],
       "image": null,
       "id": "pates--le-rustique-du-saviese"
      },
      {
       "name": "Spaghetti sauce bolognaise",
       "desc": "(bœuf)",
       "price": 24,
       "image": null,
       "id": "pates--spaghetti-sauce-bolognaise"
      },
      {
       "name": "Spaghetti sauce tomate et basilic",
       "price": 19,
       "image": null,
       "id": "pates--spaghetti-sauce-tomate-et-basilic"
      }
     ]
    }
   ],
   "imageSmall": "images/cat-pates-800.jpg",
   "imageFocus": "50% 55%"
  },
  {
   "id": "viandes",
   "group": "manger",
   "title": "Viandes",
   "icon": "steak",
   "image": "images/cat-viandes.jpg",
   "imageAlt": "Émincé de veau à la zurichoise avec rösti",
   "sections": [
    {
     "title": "Les viandes",
     "items": [
      {
       "name": "Steak de boeuf (210 g) et son beurre maison",
       "desc": "servi avec frites, légumes et une petite salade verte",
       "price": 36,
       "image": null,
       "id": "viandes--steak-de-boeuf-210-g-et-son-beurre-maison"
      },
      {
       "name": "Emincé de veau à la Zurichoise",
       "desc": "servi avec rösti maison et une petite salade verte",
       "price": 39,
       "image": "images/p-emince-zurichoise.jpg",
       "id": "viandes--emince-de-veau-a-la-zurichoise",
       "imageSmall": "images/p-emince-zurichoise-800.jpg",
       "imageFocus": "50% 60%"
      },
      {
       "name": "Saucisse de veau grillée",
       "desc": "servie avec frites et légumes",
       "price": 26,
       "tags": [
        "igp"
       ],
       "image": null,
       "id": "viandes--saucisse-de-veau-grillee"
      },
      {
       "name": "Longeole aux lentilles vertes de Genève",
       "desc": "servie avec une petite salade verte",
       "price": 28,
       "tags": [
        "igp"
       ],
       "image": null,
       "id": "viandes--longeole-aux-lentilles-vertes-de-geneve"
      }
     ]
    }
   ],
   "imageSmall": "images/cat-viandes-800.jpg",
   "imageFocus": "50% 55%"
  },
  {
   "id": "suggestions",
   "group": "manger",
   "title": "Suggestions",
   "icon": "star",
   "image": "images/cat-suggestions.jpg",
   "imageAlt": "Rösti doré garni de jambon, fromage et œuf au plat",
   "sections": [
    {
     "title": "Poisson",
     "items": [
      {
       "name": "Filets de perche meunière",
       "desc": "sauce tartare, frites et petite salade verte",
       "price": 34,
       "image": "images/p-filets-perche.jpg",
       "id": "suggestions--filets-de-perche-meuniere",
       "imageSmall": "images/p-filets-perche-800.jpg",
       "imageFocus": "50% 60%"
      }
     ]
    },
    {
     "title": "Les croûtes",
     "items": [
      {
       "name": "Croûte au fromage",
       "desc": "Raclette",
       "price": 19,
       "tags": [
        "aop"
       ],
       "image": null,
       "id": "suggestions--croute-au-fromage"
      },
      {
       "name": "Croûte Royale",
       "desc": "Raclette, jambon et œuf",
       "price": 24,
       "tags": [
        "aop",
        "biosuisse"
       ],
       "image": "images/p-croute-royale.jpg",
       "id": "suggestions--croute-royale",
       "imageSmall": "images/p-croute-royale-800.jpg",
       "imageFocus": "50% 60%"
      }
     ]
    },
    {
     "title": "Omelette baveuse",
     "items": [
      {
       "name": "Omelette baveuse",
       "desc": "servie avec une petite salade verte",
       "price": 18,
       "tags": [
        "biosuisse"
       ],
       "note": "Œufs Bio Suisse",
       "image": null,
       "id": "suggestions--omelette-baveuse"
      },
      {
       "name": "Omelette au lard sec du Valais",
       "price": 21,
       "tags": [
        "igp",
        "biosuisse"
       ],
       "image": null,
       "id": "suggestions--omelette-au-lard-sec-du-valais"
      },
      {
       "name": "Omelette au jambon et Gruyère",
       "price": 21,
       "tags": [
        "aop",
        "biosuisse"
       ],
       "image": null,
       "id": "suggestions--omelette-au-jambon-et-gruyere"
      }
     ]
    },
    {
     "title": "Nos Röstis maison",
     "items": [
      {
       "name": "Röstis Nature",
       "price": 19,
       "tags": [
        "vegan"
       ],
       "image": null,
       "id": "suggestions--rostis-nature"
      },
      {
       "name": "Röstis Royal",
       "desc": "Gruyère, jambon et œuf",
       "price": 28,
       "tags": [
        "aop",
        "biosuisse"
       ],
       "image": "images/p-rosti-royal.jpg",
       "id": "suggestions--rostis-royal",
       "imageSmall": "images/p-rosti-royal-800.jpg",
       "imageFocus": "50% 60%"
      }
     ]
    },
    {
     "title": "Légumes",
     "items": [
      {
       "name": "Poêlée de légumes",
       "price": 17,
       "tags": [
        "vegan"
       ],
       "image": null,
       "id": "suggestions--poelee-de-legumes"
      }
     ]
    },
    {
     "title": "Plats Enfant (jusqu'à 12 ans)",
     "items": [
      {
       "name": "Beignets de poulet",
       "desc": "frites et légumes",
       "price": 16,
       "image": null,
       "id": "suggestions--beignets-de-poulet"
      },
      {
       "name": "Saucisse de veau",
       "desc": "frites et légumes",
       "price": 16,
       "image": null,
       "id": "suggestions--saucisse-de-veau"
      },
      {
       "name": "Spaghetti bolognaise",
       "desc": "(bœuf)",
       "price": 16,
       "image": null,
       "id": "suggestions--spaghetti-bolognaise"
      }
     ],
     "note": "16.– le plat, au choix."
    },
    {
     "title": "Accompagnement",
     "items": [
      {
       "name": "Portion de frites",
       "price": 7.5,
       "image": null,
       "id": "suggestions--portion-de-frites"
      }
     ]
    }
   ],
   "imageSmall": "images/cat-suggestions-800.jpg",
   "imageFocus": "50% 55%"
  },
  {
   "id": "aperitifs",
   "group": "boire",
   "title": "Apéritifs & Champagne",
   "icon": "cocktail",
   "image": "images/cat-aperitifs.jpg",
   "imageAlt": "Apéritifs et coupe de champagne sur une table de chalet",
   "sections": [
    {
     "title": "Apéritifs",
     "items": [
      {
       "name": "Alpine Sour",
       "desc": "kirsch, avec lactose",
       "price": 14,
       "image": null,
       "id": "aperitifs--alpine-sour"
      },
      {
       "name": "Aperol Spritz",
       "price": 14,
       "image": null,
       "id": "aperitifs--aperol-spritz"
      },
      {
       "name": "Virgin Spritz",
       "price": 9,
       "tags": [
        "af"
       ],
       "image": null,
       "id": "aperitifs--virgin-spritz"
      },
      {
       "name": "Kir Cassis",
       "desc": "crème de cassis",
       "price": 6,
       "cont": "1 dl",
       "image": null,
       "id": "aperitifs--kir-cassis-1-dl"
      },
      {
       "name": "Martini Rouge / Blanc",
       "price": 5.5,
       "cont": "4 cl",
       "image": null,
       "id": "aperitifs--martini-rouge-blanc-4-cl"
      },
      {
       "name": "Campari",
       "price": 7,
       "cont": "4 cl",
       "image": null,
       "id": "aperitifs--campari-4-cl"
      },
      {
       "name": "Appenzeller",
       "price": 5.9,
       "cont": "4 cl",
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "aperitifs--appenzeller-4-cl"
      },
      {
       "name": "Pastis 51 / Ricard",
       "price": 4.2,
       "cont": "2 cl",
       "image": null,
       "id": "aperitifs--pastis-51-ricard-2-cl"
      },
      {
       "name": "Vin Chaud Maison",
       "price": 5.9,
       "note": "En saison",
       "image": null,
       "id": "aperitifs--vin-chaud-maison"
      },
      {
       "name": "Sangria Maison",
       "price": 5.9,
       "note": "En saison",
       "image": null,
       "id": "aperitifs--sangria-maison"
      }
     ],
     "note": "De 15 à 45 % vol."
    },
    {
     "title": "Champagne",
     "items": [
      {
       "name": "Coupe de Prosecco",
       "price": 7,
       "cont": "1 dl",
       "image": null,
       "id": "aperitifs--coupe-de-prosecco-1-dl"
      },
      {
       "name": "Coupe de Champagne",
       "price": 12,
       "cont": "1 dl",
       "image": null,
       "id": "aperitifs--coupe-de-champagne-1-dl"
      },
      {
       "name": "Kir Royal",
       "price": 14,
       "cont": "1 dl",
       "image": null,
       "id": "aperitifs--kir-royal-1-dl"
      }
     ]
    }
   ],
   "imageSmall": "images/cat-aperitifs-800.jpg",
   "imageFocus": "50% 28%"
  },
  {
   "id": "vins",
   "group": "boire",
   "title": "Vins au verre",
   "icon": "wine",
   "image": "images/cat-vins.jpg",
   "imageAlt": "Verres de vin blanc et rouge du Valais",
   "note": "Demandez notre carte des vins.",
   "sections": [
    {
     "title": "Vins blancs",
     "items": [
      {
       "name": "Chasselas",
       "price": 4.9,
       "cont": "1 dl",
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "vins--chasselas-1-dl"
      },
      {
       "name": "Fendant",
       "price": 5.2,
       "cont": "1 dl",
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "vins--fendant-1-dl"
      },
      {
       "name": "Johannisberg",
       "price": 5.4,
       "cont": "1 dl",
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "vins--johannisberg-1-dl"
      },
      {
       "name": "Pinot Blanc",
       "price": 5.8,
       "cont": "1 dl",
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "vins--pinot-blanc-1-dl"
      },
      {
       "name": "Chardonnay",
       "price": 5.9,
       "cont": "1 dl",
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "vins--chardonnay-1-dl"
      }
     ]
    },
    {
     "title": "Vins rouges",
     "items": [
      {
       "name": "Gamay",
       "price": 4.9,
       "cont": "1 dl",
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "vins--gamay-1-dl"
      },
      {
       "name": "Dôle",
       "price": 5.4,
       "cont": "1 dl",
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "vins--dole-1-dl"
      },
      {
       "name": "Gamaret",
       "price": 5.8,
       "cont": "1 dl",
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "vins--gamaret-1-dl"
      },
      {
       "name": "Pinot Noir",
       "price": 5.9,
       "cont": "1 dl",
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "vins--pinot-noir-1-dl"
      }
     ]
    },
    {
     "title": "Vins rosés",
     "items": [
      {
       "name": "Dôle Blanche",
       "price": 5.2,
       "cont": "1 dl",
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "vins--dole-blanche-1-dl"
      },
      {
       "name": "Côtes de Provence",
       "price": 4.9,
       "cont": "1 dl",
       "image": null,
       "id": "vins--cotes-de-provence-1-dl"
      }
     ]
    }
   ],
   "imageSmall": "images/cat-vins-800.jpg",
   "imageFocus": "50% 62%"
  },
  {
   "id": "bieres",
   "group": "boire",
   "title": "Bières",
   "icon": "beer",
   "image": "images/cat-bieres.jpg",
   "imageAlt": "Bières pression suisses servies dans des verres de 3 et 5 dl",
   "sections": [
    {
     "title": "Bière suisse — pression",
     "items": [
      {
       "name": "Helvetic",
       "desc": "(blonde)",
       "variants": [
        {
         "label": "3 dl",
         "price": 4.9
        },
        {
         "label": "5 dl",
         "price": 7.9
        }
       ],
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "bieres--helvetic"
      },
      {
       "name": "Feldschlösschen Blanche",
       "variants": [
        {
         "label": "3 dl",
         "price": 5.2
        },
        {
         "label": "5 dl",
         "price": 8.7
        }
       ],
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "bieres--feldschlosschen-blanche"
      },
      {
       "name": "Feldschlösschen Ambrée",
       "variants": [
        {
         "label": "3 dl",
         "price": 5.2
        },
        {
         "label": "5 dl",
         "price": 8.7
        }
       ],
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "bieres--feldschlosschen-ambree"
      },
      {
       "name": "Valaisanne",
       "desc": "(blonde)",
       "variants": [
        {
         "label": "3 dl",
         "price": 5.4
        },
        {
         "label": "5 dl",
         "price": 8.9
        }
       ],
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "bieres--valaisanne"
      }
     ]
    },
    {
     "title": "Bière suisse — bouteille",
     "items": [
      {
       "name": "Cardinal 0,0% Alcool",
       "price": 5.9,
       "cont": "3,3 dl",
       "tags": [
        "ch",
        "af"
       ],
       "image": null,
       "id": "bieres--cardinal-0-0-alcool-3-3-dl"
      },
      {
       "name": "Bière du Savièse",
       "desc": "bière blonde avec moût de chasselas",
       "price": 6.2,
       "cont": "3,3 dl",
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "bieres--biere-du-saviese-3-3-dl"
      }
     ]
    }
   ],
   "imageSmall": "images/cat-bieres-800.jpg",
   "imageFocus": "50% 6%"
  },
  {
   "id": "spiritueux",
   "group": "boire",
   "title": "Spiritueux",
   "icon": "shot",
   "image": "images/cat-spiritueux.jpg",
   "imageAlt": "Petits verres d'eau-de-vie valaisanne",
   "sections": [
    {
     "title": "Spiritueux",
     "items": [
      {
       "name": "Williamine Morand",
       "price": 9,
       "cont": "4 cl",
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "spiritueux--williamine-morand-4-cl"
      },
      {
       "name": "Abricotine Morand",
       "price": 9,
       "cont": "4 cl",
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "spiritueux--abricotine-morand-4-cl"
      },
      {
       "name": "\"Moitié-Moitié\" Morand",
       "price": 9,
       "cont": "4 cl",
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "spiritueux--moitie-moitie-morand-4-cl"
      },
      {
       "name": "Kirsch",
       "price": 9,
       "cont": "4 cl",
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "spiritueux--kirsch-4-cl"
      },
      {
       "name": "Genepi",
       "price": 9,
       "cont": "4 cl",
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "spiritueux--genepi-4-cl"
      },
      {
       "name": "Vieille Prune",
       "price": 9,
       "cont": "4 cl",
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "spiritueux--vieille-prune-4-cl"
      },
      {
       "name": "Chartreuse",
       "price": 16,
       "cont": "4 cl",
       "image": null,
       "id": "spiritueux--chartreuse-4-cl"
      },
      {
       "name": "Limoncello / Amaretto",
       "price": 7,
       "cont": "4 cl",
       "image": null,
       "id": "spiritueux--limoncello-amaretto-4-cl"
      },
      {
       "name": "Grappa / Baileys",
       "price": 9,
       "cont": "4 cl",
       "image": null,
       "id": "spiritueux--grappa-baileys-4-cl"
      },
      {
       "name": "Calvados",
       "price": 9,
       "cont": "4 cl",
       "image": null,
       "id": "spiritueux--calvados-4-cl"
      },
      {
       "name": "Cognac Rémy Martin",
       "price": 15,
       "cont": "4 cl",
       "image": null,
       "id": "spiritueux--cognac-remy-martin-4-cl"
      },
      {
       "name": "Armagnac",
       "price": 12,
       "cont": "4 cl",
       "image": null,
       "id": "spiritueux--armagnac-4-cl"
      },
      {
       "name": "Vodka Absolut",
       "price": 11,
       "cont": "4 cl",
       "image": null,
       "id": "spiritueux--vodka-absolut-4-cl"
      },
      {
       "name": "Gin Bombay Sapphire",
       "price": 12,
       "cont": "4 cl",
       "image": null,
       "id": "spiritueux--gin-bombay-sapphire-4-cl"
      },
      {
       "name": "Whisky Ballantines",
       "price": 12,
       "cont": "4 cl",
       "image": null,
       "id": "spiritueux--whisky-ballantines-4-cl"
      },
      {
       "name": "Whisky Chivas Regal",
       "price": 14,
       "cont": "4 cl",
       "image": null,
       "id": "spiritueux--whisky-chivas-regal-4-cl"
      },
      {
       "name": "Whisky Lagavulin 16 ans",
       "price": 16,
       "cont": "4 cl",
       "image": null,
       "id": "spiritueux--whisky-lagavulin-16-ans-4-cl"
      },
      {
       "name": "Rhum Don Papa",
       "price": 15,
       "cont": "4 cl",
       "image": null,
       "id": "spiritueux--rhum-don-papa-4-cl"
      }
     ],
     "note": "De 18 à 43 % vol."
    }
   ],
   "imageSmall": "images/cat-spiritueux-800.jpg",
   "imageFocus": "50% 82%"
  },
  {
   "id": "sans-alcool",
   "group": "boire",
   "title": "Sans alcool",
   "icon": "glass",
   "image": "images/cat-sans-alcool.jpg",
   "imageAlt": "Eau minérale, jus de pomme et limonade suisses",
   "sections": [
    {
     "title": "Minérales",
     "items": [
      {
       "name": "Eau minérale Naturelle / Pétillante",
       "price": 9,
       "cont": "8 dl",
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "sans-alcool--eau-minerale-naturelle-petillante-8-dl"
      },
      {
       "name": "Eau minérale Naturelle / Pétillante",
       "price": 5,
       "cont": "4 dl",
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "sans-alcool--eau-minerale-naturelle-petillante-4-dl"
      },
      {
       "name": "Sinalco Orangeade",
       "price": 5.2,
       "cont": "3 dl",
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "sans-alcool--sinalco-orangeade-3-dl"
      },
      {
       "name": "Rivella Rouge",
       "desc": "avec lactose",
       "price": 5.2,
       "cont": "3,3 dl",
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "sans-alcool--rivella-rouge-3-3-dl"
      },
      {
       "name": "Coca-Cola",
       "price": 5.2,
       "cont": "3,3 dl",
       "image": null,
       "id": "sans-alcool--coca-cola-3-3-dl"
      },
      {
       "name": "Coca-Cola Zéro",
       "price": 5.2,
       "cont": "3,3 dl",
       "image": null,
       "id": "sans-alcool--coca-cola-zero-3-3-dl"
      },
      {
       "name": "Tonic",
       "price": 4.9,
       "cont": "2 dl",
       "image": null,
       "id": "sans-alcool--tonic-2-dl"
      },
      {
       "name": "Bitter Rouge San Pellegrino",
       "price": 4.7,
       "cont": "1 dl",
       "image": null,
       "id": "sans-alcool--bitter-rouge-san-pellegrino-1-dl"
      },
      {
       "name": "FuseTea Citron / Pêche",
       "price": 5.2,
       "cont": "3,3 dl",
       "image": null,
       "id": "sans-alcool--fusetea-citron-peche-3-3-dl"
      }
     ]
    },
    {
     "title": "Jus de fruits / nectars",
     "items": [
      {
       "name": "Granini Tomate / Ananas",
       "price": 4.9,
       "cont": "2 dl",
       "image": null,
       "id": "sans-alcool--granini-tomate-ananas-2-dl"
      },
      {
       "name": "Granini Abricots du Valais",
       "price": 4.9,
       "cont": "2 dl",
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "sans-alcool--granini-abricots-du-valais-2-dl"
      },
      {
       "name": "Granini Poire Williams",
       "price": 4.9,
       "cont": "2 dl",
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "sans-alcool--granini-poire-williams-2-dl"
      },
      {
       "name": "Ramseier Jus de Pomme",
       "desc": "pétillant",
       "price": 5.2,
       "cont": "3,3 dl",
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "sans-alcool--ramseier-jus-de-pomme-3-3-dl"
      }
     ]
    },
    {
     "title": "Boissons à prix modérés",
     "items": [
      {
       "name": "Verre de Limonade",
       "price": 3.5,
       "cont": "3 dl",
       "image": null,
       "id": "sans-alcool--verre-de-limonade-3-dl"
      },
      {
       "name": "Verre de Jus d'Orange",
       "price": 3.5,
       "cont": "3 dl",
       "image": null,
       "id": "sans-alcool--verre-de-jus-d-orange-3-dl"
      },
      {
       "name": "Verre de Sirop",
       "desc": "Citron, Grenadine, Menthe, Abricot",
       "price": 3.5,
       "cont": "3 dl",
       "image": null,
       "id": "sans-alcool--verre-de-sirop-3-dl"
      }
     ]
    }
   ],
   "note": "Voir aussi : Virgin Spritz (Apéritifs) et Cardinal 0,0% (Bières).",
   "imageSmall": "images/cat-sans-alcool-800.jpg",
   "imageFocus": "50% 58%"
  },
  {
   "id": "boissons-chaudes",
   "group": "boire",
   "title": "Boissons chaudes",
   "icon": "cup",
   "image": "images/cat-boissons-chaudes.jpg",
   "imageAlt": "Cappuccino servi dans une tasse blanche sur une table en bois",
   "sections": [
    {
     "title": "Boissons chaudes",
     "items": [
      {
       "name": "Café, Espresso, Ristretto",
       "price": 4.1,
       "image": null,
       "id": "boissons-chaudes--cafe-espresso-ristretto"
      },
      {
       "name": "Café, Espresso, Ristretto (décaféiné)",
       "price": 4.1,
       "image": null,
       "id": "boissons-chaudes--cafe-espresso-ristretto-decafeine"
      },
      {
       "name": "Café Renversé",
       "price": 5.1,
       "image": null,
       "id": "boissons-chaudes--cafe-renverse"
      },
      {
       "name": "Cappuccino",
       "price": 5.1,
       "image": null,
       "id": "boissons-chaudes--cappuccino"
      },
      {
       "name": "Chocolat Chaud / Froid",
       "price": 4.9,
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "boissons-chaudes--chocolat-chaud-froid"
      },
      {
       "name": "Thé Noir Ceylon / Thé Vert",
       "price": 4.9,
       "tags": [
        "bio"
       ],
       "image": null,
       "id": "boissons-chaudes--the-noir-ceylon-the-vert"
      },
      {
       "name": "Thé Blanc à la Fleur d'Edelweiss",
       "price": 5.2,
       "tags": [
        "ch"
       ],
       "image": null,
       "id": "boissons-chaudes--the-blanc-a-la-fleur-d-edelweiss"
      },
      {
       "name": "Infusions de plantes des Alpes Suisses Cultivées Artisanalement",
       "desc": "Brise Alpine, Feu des Alpes",
       "price": 4.9,
       "tags": [
        "biosuisse"
       ],
       "image": null,
       "id": "boissons-chaudes--infusions-de-plantes-des-alpes-suisses-culti"
      },
      {
       "name": "Infusions / Thés",
       "desc": "Camomille, Menthe des Sommets, Verveine, Earl Grey",
       "price": 4.9,
       "tags": [
        "biosuisse"
       ],
       "image": null,
       "id": "boissons-chaudes--infusions-thes"
      }
     ]
    }
   ],
   "imageSmall": "images/cat-boissons-chaudes-800.jpg",
   "imageFocus": "50% 66%"
  }
 ]
};
