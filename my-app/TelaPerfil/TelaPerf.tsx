// TelaPerfil/TelaPerf.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

export default function TelaPerf() {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState<string>('All'); // Estado para controle dos botões de aba
  const description = "Esta é uma descrição estática."; // Descrição estática
  const userName = "Seu Nome"; // Nome do usuário
  const followersCount = 123; // Exemplo estático
  const followingCount = 456; // Exemplo estático

  const pickImage = async (setImage: React.Dispatch<React.SetStateAction<string | null>>): Promise<void> => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="mail" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => pickImage(setCoverImage)}>
        <Image source={coverImage ? { uri: coverImage } : require('../assets/icon.png')} style={styles.coverImage} />
      </TouchableOpacity>

      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={() => pickImage(setProfileImage)}>
          <Image source={profileImage ? { uri: profileImage } : require('../assets/icon.png')} style={styles.profileImage} />
        </TouchableOpacity>
        <Text style={styles.userName}>{userName}</Text>
        <View style={styles.followContainer}>
          <View style={styles.followCountContainer}>
            <Text style={styles.followCount}>{followersCount}</Text>
            <Text style={styles.followLabel}>Seguidores</Text>
          </View>
          <View style={styles.followCountContainer}>
            <Text style={styles.followCount}>{followingCount}</Text>
            <Text style={styles.followLabel}>Seguindo</Text>
          </View>
        </View>
        <Text style={styles.descriptionText}>{description}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.buttonText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageButton}>
            <Text style={styles.buttonText}>Message</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tabContainer}>
          {['All', 'Photos', 'Videos'].map((tab) => (
            <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)}>
              <Text style={[styles.tabText, selectedTab === tab && styles.selectedTabText]}>
                {tab}
              </Text>
              {selectedTab === tab && <View style={styles.underline} />}
            </TouchableOpacity>
          ))}
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.imageContainer}>
            {/* Adicione quantas imagens desejar aqui */}
            <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
            <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
            <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
            <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.image} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  iconButton: {
    padding: 10,
  },
  coverImage: {
    width: '100%',
    height: 200,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -50, // Move profile image up to overlap with cover image
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  followContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center', // Alinhar verticalmente
    width: '60%',
    marginTop: 20, // Margin ajustada para espaço para seguidores
  },
  followCountContainer: {
    alignItems: 'center', // Alinhar verticalmente
  },
  followCount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  followLabel: {
    fontSize: 14,
    color: 'gray',
  },
  descriptionText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20, // Margin ajustada para espaço para descrição
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 20,
  },
  followButton: {
    backgroundColor: '#1DA1F2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  messageButton: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
  tabText: {
    fontSize: 16,
    paddingBottom: 5,
  },
  selectedTabText: {
    color: 'purple',
    fontWeight: 'bold',
  },
  underline: {
    height: 2,
    backgroundColor: 'purple',
    marginTop: 2,
  },
  contentContainer: {
    marginTop: 20,
    alignItems: 'center',
    paddingBottom: 20, // Ajustar para espaço adequado para as imagens
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'white',
  },
});
