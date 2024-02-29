import { View, Text, ScrollView } from "react-native"

export default function App() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={{backgroundColor: '#101010', flex: 1, alignItems: 'center', paddingHorizontal:50, paddingVertical:45}}>

      <View style={{flexDirection: 'row', gap: 15, width: '80%', justifyContent: 'center', marginHorizontal: 70}}>

        <View 
          style={{backgroundColor: '#1e1e1e', width: 80, height: 80, borderRadius: 60, borderWidth:3, borderColor: '#f1f1f1'}}></View>
        <View 
          style={{backgroundColor: '#1e1e1e', width: 80, height: 80, borderRadius: 60, borderWidth:3, borderColor: '#f1f1f1'}}></View>
        <View 
          style={{backgroundColor: '#1e1e1e', width: 80, height: 80, borderRadius: 60, borderWidth:3, borderColor: '#f1f1f1'}}></View>
        <View 
          style={{backgroundColor: '#1e1e1e', width: 80, height: 80, borderRadius: 60, borderWidth:3, borderColor: '#f1f1f1'}}></View>

      </View>

      <View style={{width: 350, height: 1, backgroundColor: '#333', marginTop: 20}}></View>

      <View style={{marginVertical: 20, width: 400}}>

        <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
          
          <View 
          style={{backgroundColor: '#1e1e1e', width: 60, height:60, borderRadius: 30, borderWidth: 3, borderColor: '#f1f1f1', marginLeft: 25}}></View>
          <Text style={{color: '#f1f1f1', fontSize: 26, fontWeight: 'bold'}}>Usuario1</Text>

        </View>

        <View
        style={{justifyContent: 'center', backgroundColor: '#1e1e1e', width: 300, height: 300, alignItems: 'center', marginVertical: 40, marginHorizontal: 50}}>
          <Text style={{color: '#f1f1f1', fontSize: 10}}>IMG</Text>
        </View>

        <View
        style={{marginVertical: 1, marginHorizontal: 35}}><Text style={{color: '#f1f1f1'}}>Descrição da imagem aqui</Text>
        </View>

      </View>
      
      <View style={{width: 350, height: 1, backgroundColor: '#333', marginTop: 20}}></View>
      
      <View style={{marginVertical: 20, width: 400}}>

        <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
          
          <View 
          style={{backgroundColor: '#1e1e1e', width: 60, height:60, borderRadius: 30, borderWidth: 3, borderColor: '#f1f1f1', marginLeft: 25}}></View>
          <Text style={{color: '#f1f1f1', fontSize: 26, fontWeight: 'bold'}}>Usuario2</Text>

        </View>

        <View
        style={{justifyContent: 'center', backgroundColor: '#1e1e1e', width: 300, height: 300, alignItems: 'center', marginVertical: 40, marginHorizontal: 50}}>
          <Text style={{color: '#f1f1f1', fontSize: 10}}>IMG2</Text>
        </View>

        <View
        style={{marginVertical: 1, marginHorizontal: 35}}><Text style={{color: '#f1f1f1'}}>Descrição da imagem aqui</Text>
        </View>
        
      </View>
      
      <View style={{width: 350, height: 1, backgroundColor: '#333', marginTop: 20}}></View>

    </View>
    </ScrollView>
  )
}