import { ScrollView } from "react-native"

export default ({children}) => {
    return(
        <ScrollView style={{height: 'auto', alignSelf: 'stretch'}}>
            {children}
        </ScrollView>
    )
}