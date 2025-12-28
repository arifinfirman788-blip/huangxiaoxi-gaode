
export enum ScreenType {
  SEARCH = 'SEARCH',
  MAP = 'MAP',
  ASSISTANT = 'ASSISTANT',
  CULTURE = 'CULTURE',
  CITY_GUIYANG = 'CITY_GUIYANG',
  CITY_LIUPANSHUI = 'CITY_LIUPANSHUI'
}

export interface FeatureItem {
  title: string;
  description: string;
  image?: string;
  badge?: string;
}
