declare module 'react-native-tooltip' {
    import { Component } from 'react';
    import { StyleProp, ViewStyle } from 'react-native';
  
    interface TooltipProps {
      isVisible?: boolean;
      content?: React.ReactNode;
      onClose?: () => void;
      containerStyle?: StyleProp<ViewStyle>;
      pointerColor?: string;
      backgroundColor?: string;
      contentStyle?: StyleProp<ViewStyle>;
      children?: React.ReactNode;
    }
  
    export default class Tooltip extends Component<TooltipProps> {}
  }
  