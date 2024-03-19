import "./Chatbot.scss";

const Chatbot = () => { 
    return(<>
            <div className="sticky">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn rounded-full" onClick={()=>document.getElementById('my_modal_2').showModal()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                </button>
            
                <dialog id="my_modal_2" className="modal">
                        <form method="dialog" className="modal-backdrop absolute w-full h-full">
                            <button>close</button>
                        </form>
                        <iframe
                        src="https://www.chatbase.co/chatbot-iframe/JGqxdhRmyF5m5_78fBOLy"
                        title="Smart Restaurant"
                        width="100%"
                        height="60%"
                        // style="height: 100%; min-height: 700px"
                        frameborder="0"
                        ></iframe>
                </dialog>
            </div>
    </>);
}

export default Chatbot;