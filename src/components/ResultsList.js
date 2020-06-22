import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";
import ResultsDetail from "./ResultsDetail";
import { withNavigation } from "react-navigation";

function ResultsList({ title, results, navigation }) {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>

      <FlatList
        horizontal
        data={results}
        showsHorizontalScrollIndicator={false}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("DetailsShow")}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15
  }
});

export default withNavigation(ResultsList);
