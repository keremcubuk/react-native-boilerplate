import { StyleSheet, Dimensions } from 'react-native';

const deviceWitdh = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  bgImage: {
    position: 'absolute',
    width: deviceWitdh,
    height: deviceHeight,
  },
  textWrapper: {
    marginTop: 50,
    marginHorizontal: 38,
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  infoTextWrapper: {
    marginVertical: 30,
    alignItems: 'center',
  },
  helpWrapper: {
    marginLeft: 30,
    alignItems: 'center',
  },
});
