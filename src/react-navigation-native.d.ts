declare module '@react-navigation/native' {
    import { ComponentType } from 'react';
  
    export type RouteProp<ParamList, RouteName extends keyof ParamList> = {
      key: string;
      name: RouteName;
      params: ParamList[RouteName];
    };
  
    export function useNavigation<T = NavigationProp<ParamListBase>>(): T;
    export { NavigationContainer };
  }