import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

const Drawer = createDrawerNavigator();

export default function MainDrawer() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="Page1"
        component={Page1}
        options={{ title: "Big Events" }}
      />
      <Drawer.Screen name="Page2" component={Page2} />
      <Drawer.Screen name="Page3" component={Page3} />
    </Drawer.Navigator>
  );
}
