// // import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// // import { Button } from "@/components/ui/button";
// // import { Card, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Dialog } from "@/components/ui/dialog";
// // import { Input } from "@/components/ui/input";
// // import { ScrollArea } from "@/components/ui/scroll-area";
// // import { fetchChatByProject, fetchChatMessages, sendMessage } from "@/Redux/Chat/Action";
// // import { store } from "@/Redux/Store";
// // import { PaperPlaneIcon } from "@radix-ui/react-icons";
// // import { useEffect, useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { useParams } from "react-router-dom";
// // import { handler } from "tailwindcss-animate";

// // const ChatBox = () => {
// // const [message,setMessage]=useState("");
// // const {auth,chat}=useSelector(store=>store)
// // const dispatch=useDispatch();



// // const {id}=useParams();

// // useEffect(()=>{
// //     dispatch(fetchChatByProject(id));
// // },[])

// // useEffect(()=>{

// //     dispatch(fetchChatMessages(chat.chat?.id))
// // },[])



// // const handleSendMessage=()=>{
// //     dispatch(sendMessage({

// //         senderId:auth.user?.id,
// //         projectId:id,
// //         content:message,
// //     }))

    
// //  setMessage("  "); 
// // }

// // const handlerMessageChange=(e)=>{
// // setMessage(e.target.value);
// // }
// //     return (
// //         <>
// //             <div className="sticky">
// //                 <div className="border rounded-lg">
// //                     <h1 className="border-b p-5">Chat Box</h1>

// //                     <ScrollArea className="h-[32rem] w-full p-5 flex gap-3 flex-col">
// //                         {chat.messages?.map((item, index) => (
// //                                     item?.sender?.id!==auth.user?.id ? (
// //                                 <div className="flex gap-2 mb-2 border justify-start" key={index}>
// //                                     <Avatar>
// //                                         <AvatarFallback>
// //                                         {item?.sender?.fullName[0]}
// //                                         </AvatarFallback>
// //                                     </Avatar>
// //                                     <div className="space-y-2 py-2 px-5 border rounded-se-2xl rounded-s-xl">
// //                                         <p>{item?.sender?.fullName}</p>
// //                                         <p className="text-gray-300">{item?.content}</p> 
// //                                     </div>
// //                                 </div>
// //                             ) : (
// //                                 <div className="flex gap-2 mb-2 border justify-end" key={index}>
                                    
// //                                     <div className="space-y-2 py-2 px-5 border rounded-ss-2xl rounded-e-xl">
// //                                     <p>{item?.sender?.fullName}</p>
// //                                         <p className="text-gray-300">{item?.content}</p> 
                        
// //                                     </div>
// //                                     <Avatar>
// //                                         <AvatarFallback>
// //                                         {item?.sender?.fullName[0]}
                                  
// //                                         </AvatarFallback>
// //                                     </Avatar>
// //                                 </div>
// //                             )
// //                         ))}
// //                     </ScrollArea>

// //                     <div className="relative p-0">

// //                         <Input 
// //                         placeHolder="type message..."
// //                         className="py-7 border-t outline-none focus:outline-none focus:ring-0 rounded-none border-none border-b-0 border-x-0"
// //                         value={message} onChange={handlerMessageChange}/>


// //                         <Button onClick={handleSendMessage} className="absolute right-2 top-3 rounded-full" size="icon" variant="ghost">
// // <PaperPlaneIcon/>
// //                         </Button>
// //                     </div>
// //                 </div>
// //             </div>
// //         </>
// //     );
// // }

// // export default ChatBox;




// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { fetchChatByProject, fetchChatMessages, sendMessage } from "@/Redux/Chat/Action";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { PaperPlaneIcon } from "@radix-ui/react-icons";
// import { Input } from "@/components/ui/input";

// const ChatBox = () => {
//     const [message, setMessage] = useState("");
//     const { auth, chat } = useSelector(store => store);
//     const dispatch = useDispatch();
//     const { id } = useParams();

//     useEffect(() => {
//         dispatch(fetchChatByProject(id));
//     }, []);

//     useEffect(() => {
//         if (chat.chat?.id) {
//             dispatch(fetchChatMessages(chat.chat.id));
//         }
//     }, [dispatch, chat.chat?.id]);

//     const handleSendMessage = async () => {
//         try {
//             await dispatch(sendMessage({
//                 senderId: auth.user?.id,
//                 projectId: id,
//                 content: message,
//             }));
//             setMessage(""); // Clear input after sending
//         } catch (error) {
//             console.error("Failed to send message:", error);
//             // Optionally show an error message to the user
//         }
//     };

//     const handleMessageChange = (e) => {
//         setMessage(e.target.value);
//     };

//     return (
//         <div className="sticky">
//             <div className="border rounded-lg">
//                 <h1 className="border-b p-5">Chat Box</h1>

//                 <ScrollArea className="h-[32rem] w-full p-5 flex gap-3 flex-col">
//                     {chat.messages?.map((item, index) => (
//                         item?.sender?.id !== auth.user?.id ? (
//                             <div className="flex gap-2 mb-2 border justify-start" key={index}>
//                                 <Avatar>
//                                     <AvatarFallback>
//                                         {item?.sender?.fullName[0]}
//                                     </AvatarFallback>
//                                 </Avatar>
//                                 <div className="space-y-2 py-2 px-5 border rounded-se-2xl rounded-s-xl">
//                                     <p>{item?.sender?.fullName}</p>
//                                     <p className="text-gray-300">{item?.content}</p>
//                                 </div>
//                             </div>
//                         ) : (
//                             <div className="flex gap-2 mb-2 border justify-end" key={index}>
//                                 <div className="space-y-2 py-2 px-5 border rounded-ss-2xl rounded-e-xl">
//                                     <p>{item?.sender?.fullName}</p>
//                                     <p className="text-gray-300">{item?.content}</p>
//                                 </div>
//                                 <Avatar>
//                                     <AvatarFallback>
//                                         {item?.sender?.fullName[0]}
//                                     </AvatarFallback>
//                                 </Avatar>
//                             </div>
//                         )
//                     ))}
//                 </ScrollArea>

//                 <div className="relative p-0">
//                     <Input
//                         placeholder="Type your message..."
//                         aria-label="Type your message"
//                         className="py-7 border-t outline-none focus:outline-none focus:ring-0 rounded-none border-none border-b-0 border-x-0"
//                         value={message}
//                         onChange={handleMessageChange}
//                     />
//                     <Button onClick={handleSendMessage} className="absolute right-2 top-3 rounded-full" size="icon" variant="ghost">
//                         <PaperPlaneIcon />
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ChatBox;



import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { fetchChatByProject, fetchChatMessages, sendMessage } from "@/Redux/Chat/Action";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";

const ChatBox = () => {
    const [message, setMessage] = useState("");
    const { auth, chat } = useSelector(store => store);
    const dispatch = useDispatch();
    const { id } = useParams();
    const endOfMessagesRef = useRef(null); // Create a ref for scrolling

    useEffect(() => {
        dispatch(fetchChatByProject(id));
    }, [dispatch, id]);

    // useEffect(() => {
    //     if (chat.chat?.id) {
    //         dispatch(fetchChatMessages(chat.chat.id));
    //     }
    // }, [dispatch, chat.chat?.id]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (chat.chat?.id) {
                dispatch(fetchChatMessages(chat.chat.id)); // Fetch new messages
            }
        }, 5000); // Fetch every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [dispatch, chat.chat?.id]);

    // Scroll to the bottom when messages change
    useEffect(() => {
        if (endOfMessagesRef.current) {
            endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [chat.messages]);

    const handleSendMessage = async () => {
        try {
            await dispatch(sendMessage({
                senderId: auth.user?.id,
                projectId: id,
                content: message,
            }));
            setMessage(""); // Clear input after sending
        } catch (error) {
            console.error("Failed to send message:", error);
            // Optionally show an error message to the user
        }
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <div className="sticky">
            <div className="border rounded-lg">
                <h1 className="border-b p-5">Chat Box</h1>

                <ScrollArea className="h-[32rem] w-full p-5 flex gap-3 flex-col">
                    {chat.messages?.map((item, index) => (
                        item?.sender?.id !== auth.user?.id ? (
                            <div className="flex gap-2 mb-2 border justify-start" key={index}>
                                <Avatar>
                                    <AvatarFallback>
                                        {item?.sender?.fullName[0]}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="space-y-2 py-2 px-5 border rounded-se-2xl rounded-s-xl">
                                    <p>{item?.sender?.fullName}</p>
                                    <p className="text-gray-300">{item?.content}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="flex gap-2 mb-2 border justify-end" key={index}>
                                <div className="space-y-2 py-2 px-5 border rounded-ss-2xl rounded-e-xl">
                                    <p>{item?.sender?.fullName}</p>
                                    <p className="text-gray-300">{item?.content}</p>
                                </div>
                                <Avatar>
                                    <AvatarFallback>
                                        {item?.sender?.fullName[0]}
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                        )
                    ))}
                    {/* Reference for auto-scrolling */}
                    <div ref={endOfMessagesRef} />
                </ScrollArea>

                <div className="relative p-0">
                    <Input
                        placeholder="Type your message..."
                        aria-label="Type your message"
                        className="py-7 border-t outline-none focus:outline-none focus:ring-0 rounded-none border-none border-b-0 border-x-0"
                        value={message}
                        onChange={handleMessageChange}
                    />
                    <Button onClick={handleSendMessage} className="absolute right-2 top-3 rounded-full" size="icon" variant="ghost">
                        <PaperPlaneIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;