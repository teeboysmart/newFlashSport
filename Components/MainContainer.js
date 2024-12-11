import { StyleSheet, SafeAreaView } from "react-native";
import { colors } from "../screens/config/theme";
import { StatusBar } from "react-native";

const MainContainer = ({ children, style, ...props }) => {
  let activeColors = colors;

  return (
    <SafeAreaView
      style={[
        Styles.container,
        { backgroundColor: activeColors.primary },
        style,
      ]}
      {...props}
    >
      <StatusBar style="auto" />

      {children}
    </SafeAreaView>
  );
};
export default MainContainer;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
