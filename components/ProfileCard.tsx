import { TouchableOpacity, Text, Image, View } from "react-native";
import { s } from "./ProfileCard.style";
import { FontAwesome } from '@expo/vector-icons'; 

export function ProfileCard() {
    return ( 
        <View style={s.container}>
            <View style={s.header}>
                <View>
                <Image style={s.avatar} source={{ uri: "https://i.pravatar.cc/300"}}/>
                </View>
                <View style={s.texts}>
                <Text style={s.name}>Sangay</Text>
                <Text>Hello, I am learning React Native, So lets go.</Text>
                </View>
            </View>
            <View style={s.social}>
                <TouchableOpacity>
                <FontAwesome name="twitter" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                <FontAwesome name="linkedin" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                <FontAwesome name="github" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}