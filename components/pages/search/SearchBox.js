import {TextInput} from 'react-native'
import React, { useState } from 'react';
import searchBoxStyles from '../../../styles/searchbox';
import { Searchbar } from 'react-native-paper';

export default function SearchBox() {
    // const [text, setText] = useState('');
    // return (
    //         // <TextInput
    //         // style={searchBoxStyles.container}
    //         // placeholder="Film name"
    //         // onChangeText={newText => setText(newText)}
    //         //  />
            
    // );
    const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};