import { Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props) {
  return <Text style={styles.text}>{props.name}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "#3C4048",
    padding: 10,
    fontWeight: "bold",
  },
});

// Saludar.defaultProps = {
//   name: "Introduce un nombre",
// };

Saludar.propTypes = {
  name: PropTypes.string.isRequired,
};
