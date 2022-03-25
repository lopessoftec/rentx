import React, { useEffect } from 'react';

import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';

import Animated, { 
    useSharedValue, 
    useAnimatedStyle,
    withTiming, //deixa mais suave
    Easing,
    interpolate,
    Extrapolate
} from 'react-native-reanimated';

import {
  Container
} from './styles';

export function Splash() {
    const splashAnimation = useSharedValue(0); //0 -> 50

    const brandStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value, [0, 50], [1, 0]),
            transform: [
                {
                    translateX: interpolate(splashAnimation.value,
                        [0, 50],
                        [0, -50],
                        Extrapolate.CLAMP // Para ele nunca passar do limite
                    )                    
                }
            ]
        }
    });

    const logoStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value, [0, 25, 50], [0, .3, 1]),
            transform: [
                {
                    translateX: interpolate(splashAnimation.value,
                        [0, 50],
                        [-50, 0],
                        Extrapolate.CLAMP // Para ele nunca passar do limite
                    ) 
                }
            ]
        }
    });

    useEffect(() => {
        splashAnimation.value = withTiming(
            50, 
            { duration: 1000 }
        )
    }, []); 
    
    return (
        <Container>
            <Animated.View style={[brandStyle, {position: 'absolute'}]}>
                <BrandSvg width={80} height={50} />
            </Animated.View>

            <Animated.View style={[logoStyle, {position: 'absolute'}]}>
                <LogoSvg width={100} height={20} />
            </Animated.View>
        </Container>
    );
}