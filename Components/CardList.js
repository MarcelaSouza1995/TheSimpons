import { Text, View, StyleSheet} from 'react-native';
import { useEffect, useState } from 'react';
import Card from './Card';

const CardList = () => {

  const [data, setData] = useState([])


  async function getApi(number) {
    //const url = `https://rickandmortyapi.com/api/character/?page=${number}`;
    const url = `https://thesimpsonsquoteapi.glitch.me/quotes?count=${number}`
    const result = await fetch(url);
    const resultJson = result.json()
    return resultJson;
  }
  
  useEffect(() => {
    async function funcGet() {
      const dados = await getApi(200);
      setData(dados);
    }
    funcGet();
  }, []);

  //console.log(data)

return(
<View style={styles.container}>
  {/* <Text style={styles.title}>Os Simpsons</Text> */}
  <View>{data ? data.map((e) => <Card person={e}></Card>) : 'Carregando ...'}</View>
</View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding:10,

  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  }
});
export default CardList;