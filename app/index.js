import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Link, Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          title: "",
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />,
          headerRight: () => <ScreenHeaderBtn iconUrl={icons.profile} dimension="100%" />,
        }}
      />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{flex:1,padding: SIZES.medium}}>
          <Welcome/>
          <Nearbyjobs/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
