import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#050816", "#0f172a", "#1e293b"]}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <Text style={styles.logo}>AI Vision X</Text>
        <Text style={styles.subtitle}>
          Premium AI Video Editing & AI Video Generator
        </Text>

        <TouchableOpacity style={styles.mainButton}>
          <Icon name="videocam" size={24} color="#fff" />
          <Text style={styles.buttonText}>Upload Video</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Icon name="sparkles" size={24} color="#fff" />
          <Text style={styles.buttonText}>Generate AI Video</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>AI Editing Styles</Text>

        <View style={styles.stylesGrid}>
          {[
            "Anime",
            "Cinematic",
            "TikTok",
            "Gaming",
            "Vlog",
            "Cyberpunk",
            "Luxury",
            "AMV",
            "Realistic",
            "Glow",
            "Retro",
            "Movie"
          ].map((item, index) => (
            <View key={index} style={styles.styleCard}>
              <Text style={styles.styleText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.featureBox}>
          <Text style={styles.featureTitle}>AI Features</Text>

          <Text style={styles.featureItem}>
            • Auto Video Editing
          </Text>

          <Text style={styles.featureItem}>
            • AI Subtitle Generator
          </Text>

          <Text style={styles.featureItem}>
            • AI Voice Over
          </Text>

          <Text style={styles.featureItem}>
            • Anime & Realistic Video Generator
          </Text>

          <Text style={styles.featureItem}>
            • Download Edited Videos
          </Text>

          <Text style={styles.featureItem}>
            • 4K Export Support
          </Text>
        </View>

      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20
  },

  logo: {
    color: "#fff",
    fontSize: 38,
    fontWeight: "bold",
    marginBottom: 10
  },

  subtitle: {
    color: "#94a3b8",
    fontSize: 16,
    marginBottom: 30
  },

  mainButton: {
    backgroundColor: "#7c3aed",
    height: 60,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 18
  },

  secondaryButton: {
    backgroundColor: "#0ea5e9",
    height: 60,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 30
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },

  stylesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },

  styleCard: {
    width: "48%",
    backgroundColor: "#111827",
    padding: 20,
    borderRadius: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#334155"
  },

  styleText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600"
  },

  featureBox: {
    backgroundColor: "#111827",
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    marginBottom: 40
  },

  featureTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15
  },

  featureItem: {
    color: "#cbd5e1",
    fontSize: 16,
    marginBottom: 10
  }
});
