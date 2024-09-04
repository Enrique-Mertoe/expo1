import {Text, View} from "react-native";
import styles from "../src/theme/AppTheme";

const VFrame = ({
                    children,
                    gap,
                    style,
                    align,
                    ...props
                }) => {
    let gpa = typeof gap === "number" ? {gap: gap} : gap;
    return (
        <View style={[styles.vStack, gpa, style]}
              {...props}
        >
            {children}
        </View>
    )
}

const HFrame = ({children, gap, style, ...props}) => {
    let gpa = typeof gap === "number" ? {gap: gap} : gap;
    return (
        <View style={[styles.hStack, gpa, style]}
              {...props}
        >
            {children}
        </View>
    )
}

export {VFrame, HFrame}