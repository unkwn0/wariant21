export interface GaleriaItem {
  id: string;
  full: string;
  thumb: string;
  kategoria: string;
  opis: string;
}

export const galeriaData: GaleriaItem[] = [
  { id: "g001", full: "/galeria/przyklad1.jpg", thumb: "/galeria/przyklad1small.jpg", kategoria: "Nagrobki", opis: "Nagrobek granitowy – realizacja GRANBET" },
  { id: "g002", full: "/galeria/przyklad2.jpg", thumb: "/galeria/przyklad2small.jpg", kategoria: "Nagrobki", opis: "Nagrobek podwójny z granitu szwedzkiego" },
  { id: "g003", full: "/galeria/przyklad3.jpg", thumb: "/galeria/przyklad3small.jpg", kategoria: "Nagrobki", opis: "Nagrobek pojedynczy – ciemny granit" },
  { id: "g004", full: "/galeria/przyklad4.jpg", thumb: "/galeria/przyklad4small.jpg", kategoria: "Płyty", opis: "Płyta nagrobna z wyrytym krzyżem" },
  { id: "g005", full: "/galeria/przyklad5.jpg", thumb: "/galeria/przyklad5small.jpg", kategoria: "Płyty", opis: "Płyta granitowa polerowana – realizacja GRANBET" },
  { id: "g006", full: "/galeria/przyklad6.jpg", thumb: "/galeria/przyklad6small.jpg", kategoria: "Detale", opis: "Fotoceramika na kamieniu – detal" },
  { id: "g007", full: "/galeria/przyklad7.jpg", thumb: "/galeria/przyklad7small.jpg", kategoria: "Detale", opis: "Rzeźbiony ornament w granicie" },
  { id: "g008", full: "/galeria/przyklad8.jpg", thumb: "/galeria/przyklad8small.jpg", kategoria: "Schody i parapety", opis: "Schody granitowe – montaż GRANBET" },
  { id: "g009", full: "/galeria/przyklad9.jpg", thumb: "/galeria/przyklad9small.jpg", kategoria: "Schody i parapety", opis: "Parapet granitowy – realizacja GRANBET" },
];
