import { ScrollView, Text, View } from "react-native";

export default function WelcomeScreen()
{
    return(
        <ScrollView
            indicatorStyle={'white'}
            style={{ flex:1 }}
        >
            <Text
                style={{
                    fontSize: 50,
                    color: "#ffffff",
                    textAlign: "center",
                    padding: 50,
                }}
            >
                Welcome to Little Lemon
            </Text>

            <Text
                style={{
                    fontSize: 50,
                    color: "#ffffff",
                    textAlign: "center",
                    padding: 15,
                    marginVertical: 8,
                }}
            >
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
        </ScrollView>
    )
}