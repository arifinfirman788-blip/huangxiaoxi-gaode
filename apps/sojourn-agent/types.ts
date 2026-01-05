export interface Message {
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export interface TravelTip {
  id: number;
  title: string;
  subtitle: string;
}

export type ViewState = 
  | 'HOME' 
  | 'SOJOURN_CHAT'
  | 'SOJOURN_ROUTES' 
  | 'SOJOURN_ROUTE_DETAIL'
  | 'SOJOURN_BASES' 
  | 'SOJOURN_BASE_DETAIL'
  | 'SOJOURN_GUIDES' 
  | 'SOJOURN_COMFORT';