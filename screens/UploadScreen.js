import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import { Video } from "react-native-video";

export default function UploadScreen() {

  const [video, setVideo] = useState(null);

  const pickVideo = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1
    });

    if (!result.canceled) {
      setVideo(result.assets[0].uri);
      Alert.alert(
        "AI Vision X",
        "Video Uploaded Successfully!"
      );
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Upload Your Video
      </Text>

      <TouchableOpacity
        style={styles.uploadButton}
        onPress={pickVideo}
      >
        <Text style={styles.uploadText}>
          Select Video
        </Text>
      </TouchableOpacity>

      {video && (
        <Video
          source={{ uri: video }}
          style={styles.video}
          controls
          resizeMode="cover"
        />
      )}

      <TouchableOpacity style={styles.aiButton}>
        <Text style={styles.aiButtonText}>
          Start AI Editing
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#020617",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30
  },

  uploadButton: {
    width: "100%",
    height: 60,
    backgroundColor: "#7c3aed",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25
  },

  uploadText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },

  video: {
    width: "100%",
    height: 250,
    borderRadius: 20,
    marginBottom: 25
  },

  aiButton: {
    width: "100%",
    height: 60,
    backgroundColor: "#0ea5e9",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center"
  },

  aiButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }

});
