import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';

export default function HomeScreen() {
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
        <ThemedText type="title">conta</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">1.356.00</ThemedText>
        <ThemedView style={styles.botoes}> 
          <Button
          onPress={() => {
            console.log('You tapped the button!');
          }}
          title="TRANSFERIR" color="#6A00B8"
        />
          <Button
            onPress={() => {
              console.log('You tapped the button!');
            }}
            title="area pix" color="#6A00B8"
          />
         
          <Button
            onPress={() => {
              console.log('You tapped the button!');
            }}
            title="PAGAR" color="#6A00B8"

          />
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Button
          onPress={() => {
            console.log('You tapped the button!');
          }}
          title="MEUS CARTÕES" color="#6A00B8"
        
        />

          
      </ThemedView>
      <ThemedView style={styles.cartao}>
        <ThemedText type="subtitle">cartão de crédito</ThemedText>
        <ThemedText>
        fatura atual
        </ThemedText>
        1.098.00
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    width: 100,
     alignItems: 'center',
      

  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  botoes:{
    display:"flex",
    gap:"10px",
    width: 100,
    flexDirection: 'row',

  },
  cartao:{}
});
  

  
