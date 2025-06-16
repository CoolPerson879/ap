import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Practice";
import Page4Screen from "./pages/Page4";
import Help from "./pages/Help";
import AdditionalResources from "./pages/AdditionalResources";
import ExamInfo from "./pages/ExamInfo";
import AboutLegal from "./pages/AboutLegal";

import Tab1Stack from "./pages/stacks/Tab1Stack";
import Tab2Stack from "./pages/stacks/Tab2Stack";
import Tab3Stack from "./pages/stacks/Tab3Stack";
import Tab4Stack from "./pages/stacks/Tab4Stack";
import Tab5Stack from "./pages/stacks/Tab5Stack";
import Tab6Stack from "./pages/stacks/Tab6Stack";
import Tab7Stack from "./pages/stacks/Tab7Stack";
import Tab8Stack from "./pages/stacks/Tab8Stack";
import Tab9Stack from "./pages/stacks/Tab9Stack";
import SMBCPractice from "./pages/SMBCPractice";
import DBQSet1 from "./pages/FRQSets/DBQSet1";
import DBQSet2 from "./pages/FRQSets/DBQSet2";
import LEQSet1 from "./pages/FRQSets/LEQSet1";
import LEQSet2 from "./pages/FRQSets/LEQSet2";
import LEQSet3 from "./pages/FRQSets/LEQSet3";
import LEQSet4 from "./pages/FRQSets/LEQSet4";
import LEQSet5 from "./pages/FRQSets/LEQSet5";

const RootStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Big Events by Unit" component={Page1} />

      <Drawer.Screen
        name="Themes and Historical Thinking Skills"
        component={Page4Screen}
      />
      <Drawer.Screen name="Content Review" component={Page3} />
      <Drawer.Screen
        name="Stimulus Based Practice Questions"
        component={SMBCPractice}
      />
      <Drawer.Screen name="Free-Response Practice" component={Page2} />
      <Drawer.Screen
        name="Additional Resources"
        component={AdditionalResources}
      />
      <Drawer.Screen name="Exam Info" component={ExamInfo} />
      <Drawer.Screen name="Help" component={Help} />
      <Drawer.Screen name="About and Legal" component={AboutLegal} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Drawer" component={DrawerNavigator} />
        <RootStack.Screen name="DBQSet1" component={DBQSet1} />
        <RootStack.Screen name="DBQSet2" component={DBQSet2} />
        <RootStack.Screen name="LEQSet1" component={LEQSet1} />
        <RootStack.Screen name="LEQSet2" component={LEQSet2} />
        <RootStack.Screen name="LEQSet3" component={LEQSet3} />
        <RootStack.Screen name="LEQSet4" component={LEQSet4} />
        <RootStack.Screen name="LEQSet5" component={LEQSet5} />
        <RootStack.Screen name="Tab1Stack" component={Tab1Stack} />
        <RootStack.Screen name="Tab2Stack" component={Tab2Stack} />
        <RootStack.Screen name="Tab3Stack" component={Tab3Stack} />
        <RootStack.Screen name="Tab4Stack" component={Tab4Stack} />
        <RootStack.Screen name="Tab5Stack" component={Tab5Stack} />
        <RootStack.Screen name="Tab6Stack" component={Tab6Stack} />
        <RootStack.Screen name="Tab7Stack" component={Tab7Stack} />
        <RootStack.Screen name="Tab8Stack" component={Tab8Stack} />
        <RootStack.Screen name="Tab9Stack" component={Tab9Stack} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
