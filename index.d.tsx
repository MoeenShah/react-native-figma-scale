declare module '@moeenshah/react-native-inviewport' {
  import * as React from 'react';
  import { ViewProps } from 'react-native';

  export interface InViewPortProps extends ViewProps {
    /**
     * Callback triggered when visibility changes
     * @param isVisible true if the component is visible
     */
    onChange: (isVisible: boolean) => void;

    /**
     * Disable visibility checking
     */
    disabled?: boolean;

    /**
     * Polling interval in milliseconds
     * @default 100
     */
    delay?: number;

    /**
     * Minimum distance from top before considered visible
     * @default 0
     */
    offsetTop?: number;
  }

  export default class InViewPort extends React.Component<InViewPortProps> {}
}
