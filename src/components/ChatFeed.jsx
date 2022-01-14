import MessageForm from "./MessageForm"
import MyMessage from "./MyMessage"
import TheirMessage from "./TheirMessage"

const ChatFeed = (props) => {

    //props já presentes no componente do chat engine (renderChatFeed)
    const { chats, activeChat, userName, messages } = props;
    
    //se houver algum chat ativo, a constante chat representará este
    const chat = chats && chats[activeChat];

    const renderMessages = () => {
        
        //const keys vai funcionar como um id de cada mensagem
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            // localizando uma mensagem específica utilizando a key
            const message = messages[key]

            // verificando se esta é a última mensagem
            const lastMessageKey = index === 0 ? null : keys[index - 1]

            // verificando se a mensagem é do próprio usuário logado ou de um terceiro
            const isMyMessage = username === message.sender.username;

            return (
                <div key={`msg_${index}`} style={{width: '100'}}>
                    <div className="message-block">
                        {
                            isMyMessage ? <MyMessage message={message} /> : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
                        }
                    </div>
                    <div className="read-receipts" style={{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>
                        read-receipts
                    </div>
                </div>
            )
        })

    }

    if(!chat) return 'Loading...'

    return (


        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">
                    {chat.title}
                </div>
                <div className="chat-subtitle">
                    {chat.people.map((person) => ` ${person.person.username}`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{height: '100px'}} />
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat} />
            </div>
        </div>
    )
}

export default ChatFeed