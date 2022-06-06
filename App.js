import * as React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



//All Screen Component
import Navbar from './components/Navbar'
import CustomDrawer from './components/CustomDrawer/CustomDrawer'
import AccountInfo from './components/screens/AccountInfo'
import Product from './components/screens/AgentProduct/Product'
import ListOfSubAgent from './components/screens/CreateAgent/ListOfSubAgent'
import ListOfSubAgentRequest from './components/screens/SignupRequest/ListOfSubAgentRequest'
import AgentSalesDetails from './components/screens/AgentSales/AgentSalesDetails'
import SubAgentSalesDetails from './components/screens/AgentSales/SubAgentSalesDetails'
import ACancelOrder from './components/screens/AgentPurchaseProduct/ACancelOrder'
import ASuccessOrder from './components/screens/AgentPurchaseProduct/ASuccessOrder'
import APendingProduct from './components/screens/AgentPurchaseProduct/APendingProduct'
import APurchaseProduct from './components/screens/AgentPurchaseProduct/APurchaseProduct'
import ARCancelOrder from './components/screens/AgentReturnProduct/ARCancelOrder'
import ARPendingOrder from './components/screens/AgentReturnProduct/ARPendingOrder'
import ARReturnProduct from './components/screens/AgentReturnProduct/ARReturnProduct'
import ARSuccessOrder from './components/screens/AgentReturnProduct/ARSuccessOrder'
import PackageStockQty from './components/screens/AgentProductStock/PackageStockQty'
import ProductStockQty from './components/screens/AgentProductStock/ProductStockQty'
import RemainderPackage from './components/screens/AgentProductStock/RemainderPackage'
import RemainderStockQty from './components/screens/AgentProductStock/RemainderStockQty'
import UserCancelOrder from './components/screens/OrderFromUser/UserCancelOrder'
import UserDailyOrder from './components/screens/OrderFromUser/UserDailyOrder'
import UserPendingOrder from './components/screens/OrderFromUser/UserPendingOrder'
import UserProcessOrder from './components/screens/OrderFromUser/UserProcessOrder'
import UserReternOrder from './components/screens/OrderFromUser/UserReternOrder'
import UserSuccessOrder from './components/screens/OrderFromUser/UserSuccessOrder'
import AgentCancelOrder from './components/screens/OrderFromAgent/AgentCancelOrder'
import AgentDailyOrder from './components/screens/OrderFromAgent/AgentDailyOrder'
import AgentPendingOrder from './components/screens/OrderFromAgent/AgentPendingOrder'
import AgentProcessOrder from './components/screens/OrderFromAgent/AgentProcessOrder'
import AgentReternOrder from './components/screens/OrderFromAgent/AgentReternOrder'
import AgentSuccessOrder from './components/screens/OrderFromAgent/AgentSuccessOrder'
import Settings from './components/screens/Settings'
import TermsandCondition from './components/screens/TermsandCondtion'
import Invoice from './components/screens/Invoice/Invoice';
import Details from './components/Table/Details';



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 32}}>
      <NavigationContainer>
        <Navbar/>
        <Drawer.Navigator  screenOptions={{headerShown : false, drawerStyle:{backgroundColor:"#fff"}}} drawerContent={props=><CustomDrawer {...props} />}>
          <Drawer.Screen name='AccountInfo' component={AccountInfo}/>
          
          <Drawer.Screen name='Product' component={Product}/>
          <Drawer.Screen name='ListOfSubAgent' component={ListOfSubAgent}/>
          <Drawer.Screen name='ListOfSubAgentRequest' component={ListOfSubAgentRequest}/>
          <Drawer.Screen name='AgentSalesDetails' component={AgentSalesDetails}/>
          <Drawer.Screen name='SubAgentSalesDetails' component={SubAgentSalesDetails}/>
          <Drawer.Screen name='ACancelOrder' component={ACancelOrder}/>
          <Drawer.Screen name='APendingProduct' component={APendingProduct}/>
          <Drawer.Screen name='APurchaseProduct' component={APurchaseProduct}/>
          <Drawer.Screen name='ASuccessOrder' component={ASuccessOrder}/>
          <Drawer.Screen name='ARCancelOrder' component={ARCancelOrder}/>
          <Drawer.Screen name='ARPendingOrder' component={ARPendingOrder}/>
          <Drawer.Screen name='ARReturnProduct' component={ARReturnProduct}/>
          <Drawer.Screen name='ARSuccessOrder' component={ARSuccessOrder}/>
          <Drawer.Screen name='PackageStockQty' component={PackageStockQty}/>
          <Drawer.Screen name='ProductStockQty' component={ProductStockQty}/>
          <Drawer.Screen name='RemainderPackage' component={RemainderPackage}/>
          <Drawer.Screen name='RemainderStockQty' component={RemainderStockQty}/>
          <Drawer.Screen name='UserCancelOrder' component={UserCancelOrder}/>
          <Drawer.Screen name='UserDailyOrder' component={UserDailyOrder}/>
          <Drawer.Screen name='UserSuccessOrder' component={UserSuccessOrder}/>
          <Drawer.Screen name='UserReternOrder' component={UserReternOrder}/>
          <Drawer.Screen name='UserProcessOrder' component={UserProcessOrder}/>
          <Drawer.Screen name='UserPendingOrder' component={UserPendingOrder}/>
          <Drawer.Screen name='AgentCancelOrder' component={AgentCancelOrder}/>
          <Drawer.Screen name='AgentDailyOrder' component={AgentDailyOrder}/>
          <Drawer.Screen name='AgentSuccessOrder' component={AgentSuccessOrder}/>
          <Drawer.Screen name='AgentReternOrder' component={AgentReternOrder}/>
          <Drawer.Screen name='AgentProcessOrder' component={AgentProcessOrder}/>
          <Drawer.Screen name='AgentPendingOrder' component={AgentPendingOrder}/>
          
          


          <Drawer.Screen name='Settings' component={Settings}/>
          <Drawer.Screen name='TermsandCondition' component={TermsandCondition}/>
          <Drawer.Screen name='Invoice' component={Invoice}/>
          <Drawer.Screen name='Details' component={Details}/>


        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}