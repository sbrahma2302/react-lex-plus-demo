import LexChat from "react-lex-plus";
export const Chatbot = () => {


    return <LexChat
        alias="Oriental_englishBotAlias"
        botName="Oriental_englishBot"
        IdentityPoolId="us-east-1:5e406517-f2fa-4ea3-a014-38f4f113140b"
        userId="mediumBot"
        placeholder="Placeholder text"
        backgroundColor="#FFFFFF"
        height="430px"
        region="us-east-1"
        requestAttributes={{chatbot_ktc:'sdasd'}}
        sessionAttributes ={{chatbot_ktc:'sdasd'}}
        headerText="Chatbot Lex POC"
        headerStyle={{ backgroundColor: "#ABD5D9", fontSize: "30px" }}
        greeting={
            "Hello, how can I help? You can say things like 'help' to get more info"
        }
    />
}