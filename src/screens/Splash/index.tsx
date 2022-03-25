import React from 'react';
import { Button, StyleSheet, Dimensions } from 'react-native';

import Animated, { 
    useSharedValue, 
    useAnimatedStyle,
    withTiming, //deixa mais suave
    Easing
} from 'react-native-reanimated';

const WIDTH = Dimensions.get('window').width;

import {
  Container
} from './styles';

export function Splash() {
    const animation = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { 
                    translateX: withTiming(animation.value, {
                        duration: 500,
                        easing: Easing.bezier(0,.94,1,-0.1)
                    }) 
                }
            ] //animation.value começa com zero
        }
    })

    function handleAnimationPosition(){
        animation.value = Math.random() * (WIDTH - 100); //gera numero aleatorio de 0 ate 1; WIDTH - 100 esse -100 é a largura width definida da caixa
    }

    return (
        <Container>
            <Animated.View style={[styles.box, animatedStyles]} />
            <Button title="Mover" onPress={handleAnimationPosition}/>
        </Container>
    );
}

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    }
})