declare module '@react-navigation/stack' {
    import { ComponentType } from 'react';
    import { NavigationProp } from '@react-navigation/native';
  
    export type StackNavigationProp<ParamList, RouteName extends keyof ParamList = string> = NavigationProp<ParamList, RouteName>;
  
    export function createStackNavigator(): {
      Navigator: ComponentType<any>;
      Screen: ComponentType<any>;
    };
  }