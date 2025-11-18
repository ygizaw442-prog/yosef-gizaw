
export interface ProductCategory {
  name: string;
  description: string;
  icon: string;
}

export interface UiUxStyle {
  title: string;
  description: string;
}

export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  description: string;
}

export interface OriTechConcept {
  brandStory: string;
  mission: string;
  vision: string;
  productCategories: ProductCategory[];
  targetAudience: string;
  valueProposition: string;
  marketingTone: string;
  uiUxStyle: UiUxStyle;
  colorPalette: ColorPalette;
  taglines: string[];
}
