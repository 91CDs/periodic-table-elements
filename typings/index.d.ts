interface Periodic {
  elements: ChemicalElement[];
}

interface ChemicalElement {
  name: string;
  appearance?: string | null;
  atomic_mass: number;
  boil?: number | null;
  category: string;
  density?: number | null;
  discovered_by?: string | null;
  melt?: number | null;
  molar_heat?: number | null;
  named_by?: string | null;
  number: number;
  period: number;
  group: number;
  phase: string;
  source: string;
  bohr_model_image?: string | null;
  bohr_model_3d?: string | null;
  spectral_img?: string | null;
  summary: string;
  symbol: string;
  xpos: number;
  ypos: number;
  wxpos: number;
  wypos: number;
  /** Array index shows the shells order starting from the innermost electron shell */
  shells?: (number)[] | null;
  electron_configuration: string;
  /** Shortened electron configuration */
  electron_configuration_semantic: string;
  electron_affinity?: number | null;
  electronegativity_pauling?: number | null;
  ionization_energies?: (number | null)[] | null;
  "cpk-hex": string;
  image: Image;
  block: string;
}


interface Image {
  title: string;
  url: string;
  attribution: string;
}

/** The corresponding block of an element in the Periodic Table */
type ElementBlock = "s" | "p" | "d" | "f";
/** The 3 phases of Matter */
type MatterPhase = "solid" | "liquid" | "gas";
/** Type of Chemical Bond that is typical of the element */
type BondingType = "mettalic" | "covalent system" | "diatomic" | "polyatomic";
/** The corresponding type of an element in the Periodic Table */
type ElementType = 
  "alkali metal" | 
  "alkaline earth metal" | 
  "actinide" | 
  "lanthanide" | 
  "transition metal" | 
  "post-transition metal" |
  "metalloid" |
  "nonmetal" |
  "halogen" |
  "noble gas" |
  "unknown"; 