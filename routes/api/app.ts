export const getUserName = (username:String) => {
    const socket = new WebSocket(
        `ws://localhost:8080/start_web_socket?username=${username}`,
    );

    console.log(socket)
}