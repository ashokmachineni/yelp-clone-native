import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import yelp from "../api/yelp";
import { FontAwesome } from "@expo/vector-icons";

const DetailsScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");
  console.log(id);
  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    console.log(response.data);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return <Text>oops</Text>;
  }
  return (
    <View>
      <Text>{result.name}</Text>
      <View style={styles.phone}>
        <FontAwesome name="phone-square" size={24} color="black" />
        <Text>{result.phone}</Text>
      </View>

      <Text>Address</Text>
      <Text>{result.location.address1}</Text>
      <Text></Text>

      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.image} />;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 180,
    margin: 5
  },
  phone: {
    margin: 6,
    flexDirection: "row"
  }
});

export default DetailsScreen;
