import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#820AD1', dark: '#820AD1' }}
      headerImage={
        <Image
                 source={require('@/assets/images/nubank-logo-2.png')}
                 style={styles.reactLogo}
               />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">meu perfil</ThemedText>
      </ThemedView>
      <ThemedText></ThemedText>
      <Collapsible title="Dados Bancarios">
        <ThemedText type="defaultSemiBold">
          numero da conta:{' '}
         <ThemedText type="defaultSemiBold">465890765<br></br>
        </ThemedText>
        <ThemedText type="defaultSemiBold">agencia:0002<br></br>   
        </ThemedText>{' '}
        <ThemedText type="defaultSemiBold">banco:nubank
         </ThemedText>
        </ThemedText>
        <ThemedText>
         <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          
        </ThemedText>
        
      </Collapsible>
      <Collapsible title="privacidade e segurança">
        <ThemedText>
          central de privacidade<br></br>
          biometria<br></br>
          alteraçao de senha{' '}
          
        </ThemedText>
      </Collapsible>
      <Collapsible title="central de ajuda">
        <ThemedText>
          conversar com o chat<br></br>
          outros canais de atendimento <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> 
        
        </ThemedText>
      </Collapsible>
      <Collapsible title="sair do app">
        <ThemedText>
           <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
           
          </ThemedText>
        </ThemedText>
      </Collapsible>
      <Collapsible title="">
        <ThemedText>
          {' '}
          
         
        </ThemedText>
       
      </Collapsible>
      <Collapsible title="">
        <ThemedText>
        {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> 
           <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          .
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
               <ThemedText type="defaultSemiBold"></ThemedText>{' '}
            
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
