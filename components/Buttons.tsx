// import React, { useState, useEffect } from 'react';
// import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
// import COLORS from '../constants/colors';

// interface ButtonProps {
//     title: string;
//     onPress?: () => void;
//     style?: object;
//     isSubmitting?: boolean;
// }

// const Button: React.FC<ButtonProps> = ({ title, onPress, style, isSubmitting = false }) => {
//     const [clicked, setClicked] = useState<boolean>(false);
//     const [submitting, setSubmitting] = useState<boolean>(false);

//     useEffect(() => {
//         setSubmitting(isSubmitting);
//     }, [isSubmitting]);

//     const handlePress = (): void => {
//         setClicked(true);
//         if (onPress) {
//             onPress();
//         }
//     };

//     const bgColor: string = submitting ? COLORS.primary :  COLORS.grey;
//     const textColor: string = COLORS.white;

//     return (
//         <View style={styles.centered}>
//             <TouchableOpacity
//                 style={{
//                     ...styles.button,
//                     backgroundColor: bgColor,
//                     ...style
//                 }}
//                 onPress={handlePress}
//             >
//                 <Text style={{ fontSize: 18, fontWeight: 'bold', color: textColor }}>{title}</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     button: {
//         paddingVertical: 13,
//         paddingHorizontal: 86,
//         borderColor: COLORS.primary,
//         borderWidth: 0,
//         borderRadius: 8,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     centered: {
//         alignItems: 'center',
//         marginTop: 15,
//     }
// });

// export default Button;


import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import COLORS from '../constants/colors';

interface ButtonProps {
    title: string;
    onPress?: () => void;
    style?: object;
    isSubmitting?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style, isSubmitting = false }) => {
    const [clicked, setClicked] = useState<boolean>(false);
    const [submitting, setSubmitting] = useState<boolean>(false);

    useEffect(() => {
        setSubmitting(isSubmitting);
    }, [isSubmitting]);

    const handlePress = (): void => {
        setClicked(true);
        if (onPress) {
            onPress();
        }
    };

    const bgColor: string = submitting ? COLORS.primary : COLORS.grey;
    const textColor: string = COLORS.white;

    return (
        <View style={styles.centered}>
            <TouchableOpacity
                style={{
                    ...styles.button,
                    backgroundColor: bgColor,
                    ...style
                }}
                onPress={handlePress}
                disabled={submitting} // Disable button while submitting
            >
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: textColor }}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 13,
        paddingHorizontal: 86,
        borderColor: COLORS.primary,
        borderWidth: 0,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    centered: {
        alignItems: 'center',
        marginTop: 15,
    }
});

export default Button;
