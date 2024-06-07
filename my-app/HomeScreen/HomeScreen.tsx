// HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const stories = [
  { id: '1', name: 'John', image: require('../assets/icon.png') },
  { id: '2', name: 'Jane', image: require('../assets/icon.png') },
  { id: '3', name: 'Mike', image: require('../assets/icon.png') },
  // Adicione mais stories conforme necessário
];

const posts = [
  { id: '1', user: 'John', image: require('../assets/icon.png') },
  { id: '2', user: 'Jane', image: require('../assets/icon.png') },
  { id: '3', user: 'Mike', image: require('../assets/icon.png') },
  { id: '4', user: 'Alice', image: require('../assets/icon.png') },
  // Adicione mais posts conforme necessário
];

const { height } = Dimensions.get('window');

export default function HomeScreen() {
  const renderItem = ({ item }: {item:{id: string, user: string, image: any}}) => (
    <View style={styles.post}>
      <Text style={styles.postUser}>{item.user}</Text>
      <Image source={item.image} style={styles.postImage} />
      <View style={styles.postActions}>
        <TouchableOpacity style={styles.postActionButton}>
          <Ionicons name="chatbubble-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.postActionButton}>
          <Ionicons name="bookmark-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.postActionButton}>
          <Ionicons name="share-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="camera" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Explorer</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="notifications" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.storiesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {stories.map((story) => (
            <View key={story.id} style={styles.story}>
              <Image source={story.image} style={styles.storyImage} />
              <Text style={styles.storyName}>{story.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.feedContainer}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.bottomBar}>
        <View style={styles.leftSection}>
          <TouchableOpacity style={styles.bottomBarButton}>
            <Ionicons name="home" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBarButton}>
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.centerSection}>
          <TouchableOpacity style={styles.centralButton}>
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.rightSection}>
          <TouchableOpacity style={styles.bottomBarButton}>
            <Ionicons name="heart" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBarButton}>
            <Ionicons name="person" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  iconButton: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  storiesContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  story: {
    alignItems: 'center',
    marginRight: 15,
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'purple',
  },
  storyName: {
    marginTop: 5,
    fontSize: 12,
    color: 'black',
  },
  feedContainer: {
    paddingHorizontal: 10,
    paddingBottom: height * 0.1, // Para evitar que a última publicação seja coberta pela barra inferior
  },
  post: {
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  postUser: {
    padding: 10,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 200,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  postActionButton: {
    padding: 5,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
  },
  leftSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  centerSection: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  rightSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  bottomBarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  centralButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
