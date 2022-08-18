import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../utils/Colors';
import Barcode from 'react-native-barcode-builder';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from '../utils/Constants';
import Header from '../components/Header';

const ListItem = ({ item }) => {
    return (
        <View style={styles.listItem}>
            <View style={{ flex: 1 }}>
                <Text
                    style={{
                        fontWeight: 'bold',
                        textTransform: 'capitalize',
                        color: Colors.black,
                    }}>
                    {item?.title}
                </Text>
            </View>
            <Barcode height={25} width={0.9} value={item?.value} format="CODE128" />
        </View>
    );
};

const History = ({ navigation }) => {
    const [data, setData] = React.useState([]);

    const getData = async () => {
        try {
            const t = await AsyncStorage.getItem(Constants.barcodes);
            if (t != null) {
                setData(JSON.parse(t));
            }
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        getData();
    }, [navigation])

    return (
        <>
            <Header title={"History"} />
            {data.length > 0 && (<FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: 20 }}
                data={data}
                renderItem={({ item }) => <ListItem item={item} />}
            />)}
        </>
    )
}

export default History

const styles = StyleSheet.create({
    list: {
        padding: 20,
        paddingBottom: 100,
    },
    listItem: {
        display: 'flex',
        alignItems: "center",
        padding: 10,
        backgroundColor: Colors.white,
        flexDirection: 'row',
        elevation: 12,
        borderRadius: 7,
        marginVertical: 10,
    },
})