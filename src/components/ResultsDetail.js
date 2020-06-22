import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function ResultsDetail({ result }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.rating}>
        {result.rating} stars, {result.review_count} reviews{" "}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 10
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 15
  },
  name: {
    fontSize: 16,
    fontWeight: "bold"
  },
  rating: {
    color: "#333333"
  }
});

export default ResultsDetail;
