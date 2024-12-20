import {ActivityIndicator} from 'react-native';
import {isIOS, progressColor} from '../../constants';
import {styles} from './styles';
import {LoaderProps} from '../../types';

const RenderProgressView = (props: LoaderProps) => {
  const size = isIOS ? 'large' : 70;
  return props.isLoading ? (
    <ActivityIndicator
      style={styles.loading}
      color={progressColor}
      size={size}
    />
  ) : null;
};

export default RenderProgressView;
