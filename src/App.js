import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import music_data from './music-data';
import MusicCard from './components/MusicCard/MusicCard';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [list, setList] = useState(music_data);

  const renderMusic = ({item}) => <MusicCard music={item} />;
  const renderSeparate = () => <View style={styles.seperator} />;
  const handleSearch = text => {
    const filteredList = music_data.filter(music => {
      const searchedText = text.toLowerCase();
      const currentTitle = music.title.toLowerCase();
      const currentArtist = music.artist.toLowerCase();
      return (
        currentTitle.indexOf(searchedText) > -1 ||
        currentArtist.indexOf(searchedText) > -1
      );
    });
    setList(filteredList);
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderMusic}
        ItemSeparatorComponent={renderSeparate}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
