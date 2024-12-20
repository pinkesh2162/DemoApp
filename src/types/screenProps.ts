import { NavigationProp, ParamListBase } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export interface ScreenProps {
  /**
    * navigation - is managed navigation and derived all 
    * the navigation properties.
    */
  navigation: StackNavigationProp<ParamListBase>
}