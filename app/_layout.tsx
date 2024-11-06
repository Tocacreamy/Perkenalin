import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
    screenOptions={{
      headerStyle:{
        backgroundColor:'#f4551e'
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
        fontWeight:'bold',
      },
    }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="details"/>
      {/* <Stack.Screen name="(home)"/> */}
    </Stack>
  );
}
