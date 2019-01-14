// Declares an outlet type structure

export interface NewsOutlet {
  title: string;
  lang: 'en' | 'hu';
  slug: string;
  logo: string;
  dailyReach: number;
  isIndependent: boolean;
  properties: KeyValuePair[];
  contact: {
    name: string;
    fields: KeyValuePair[];
  };
  sources: TextLinkPair[];
}

export interface KeyValuePair {
  key: string;
  value: string;
}

export interface TextLinkPair {
  text: string;
  link: string;
}
