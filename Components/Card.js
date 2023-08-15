import { Text, View, Image, StyleSheet } from 'react-native';

const Card = ({person}) => {
return(
<View style={styles.container}>
  <View>
   <Text>{person.character}</Text>
  </View>
  {/* <View>
   <Text>Citação: {person.quote}</Text>
  </View> */}
  <Image source={{uri: person.image}} style={{width: 50, height:80}}/>
</View>
)
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    width:100,
    padding: 5,
    alignItems: 'center',
    margin:2,
    borderRadius: 10,
    // textAlign: 'center',
  },
});

export default Card;