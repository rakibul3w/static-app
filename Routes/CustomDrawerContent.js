import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} style={{ color: "#fff" }}>
            <DrawerItemList {...props}
            />
        </DrawerContentScrollView>
    );
}

export default CustomDrawerContent;