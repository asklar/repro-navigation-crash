import React, {useCallback} from 'react';
import {SafeAreaView, Text, View, Pressable} from 'react-native';
import {Button} from 'react-native-xaml';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Add: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<{navigation: HomeScreenNavigationProp}> = ({
  navigation,
}) => {
  return (
    <View style={{marginTop: 96}}>
      <Pressable
        onPress={() => {
          navigation.navigate('Add');
        }}>
        <Text>Add</Text>
      </Pressable>
    </View>
  );
};

type AddScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Add'>;

const AddScreen: React.FC<{navigation: AddScreenNavigationProp}> = ({
  navigation,
}) => {
  const goBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Pressable onPress={goBack}>
          <View style={{paddingVertical: 8, paddingHorizontal: 32}}>
            <Text>Go back (Pressable)</Text>
          </View>
        </Pressable>
        <Button content="Go back (XAML Button)" onClick={goBack} />
      </View>
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {...DefaultTheme.colors, background: 'transparent'},
      }}>
      <Stack.Navigator headerMode="none" detachInactiveScreens={true}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Add" component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;