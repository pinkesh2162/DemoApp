import NetInfo from '@react-native-community/netinfo';

/**
 * Create a function which check internet connectivity
 *
 * @function isInternetAvailable
 */
export async function isInternetAvailable(): Promise<boolean> {
  return NetInfo.fetch().then(state => {
    if (state.isConnected) {
      return true;
    } else {
      return false;
    }
  });
}

export const refreshNetState = async () => {
  await NetInfo.refresh();
};

export const getNetState = async () => {
  const state = await NetInfo.fetch();
  return state;
};
