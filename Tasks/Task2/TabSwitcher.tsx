import React  from 'react'
import { Button, StyleSheet,  View } from 'react-native'

export type TabType = "CURRENT" | "COMPLETED";

interface ITabSwitcher { 
    activeTab: TabType;
    setTab: (val: TabType) => void;
}


const TabSwitcher: React.FC<ITabSwitcher> = ({activeTab, setTab}) => {

    const isCurrentActive = activeTab === 'CURRENT';
    const isCompletedActive = activeTab === 'COMPLETED';

    const chooseCurrentTab = () => setTab("CURRENT");
    const chooseCompletedTab = () => setTab("COMPLETED");
    
    return (
        <View style={styles.buttonGroup}>
            <Button title="Current" onPress={chooseCurrentTab} color={isCurrentActive ? 'blue' : 'grey'}/>
            <Button title="Completed" onPress={chooseCompletedTab} color={isCompletedActive ? 'blue' : 'grey'}/>
        </View>
    )
}

export default TabSwitcher

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 16 
    },
    buttonGroup: { 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        marginBottom: 16 
    },
})