import React, { useState } from "react";
import { FiSend, FiX } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { Modal } from "../../ui/modal"; // Make sure Modal is available

type Reply = {
    id: string;
    author: string;
    text: string;
    createdAt: string;
    replies?: Reply[];
};

type Comment = Reply;

type CommentModalProps = {
    isOpen: boolean;
    onClose: () => void;
    commentLists?: Comment[];
    onSendComment: (text: string) => void;
    onSendReply: (parentId: string, text: string) => void;
    onDeleteCommentById?: (commentId: string) => void;
    title?: string;
};

const CommentModal: React.FC<CommentModalProps> = ({
    isOpen,
    onClose,
    commentLists = [],
    onSendComment,
    onSendReply,
    onDeleteCommentById,
    title = "Comments"
}) => {
    const [text, setText] = useState('');
    const [replyTo, setReplyTo] = useState<string | null>(null);
    const [replyInput, setReplyInput] = useState('');

    // Recursive rendering for nested comments/replies
    const MAX_NEST_LEVEL = 50; // Reasonable max depth

    const renderReplies = (items: Reply[], level = 0) => items.map(item => (
        <div key={item.id} style={{ marginLeft: level ? level * 10 : 0, marginBottom: 10, }}>
            <div className="bg-[cyan] ">
                <div className="rounded border p-2 mb-2 flex items-center justify-between">

                    <div>
                        <span className="font-semibold text-gray-800 mr-2">{item.author}</span>
                        <span className="text-xs text-gray-500">{item.createdAt}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* {onDeleteCommentById && (
                        <MdDeleteForever
                            className="text-red-500 cursor-pointer"
                            title="Delete"
                            onClick={() => onDeleteCommentById(item.id)}
                        />
                    )} */}

                        {level < MAX_NEST_LEVEL && (
                            <button
                                className="text-xs px-2 py-1 border rounded text-blue-700"
                                onClick={() => setReplyTo(replyTo === item.id ? null : item.id)}
                            >
                                {replyTo === item.id ? "Cancel" : "Reply"}
                            </button>
                        )}
                    </div>
                </div>
                <div className="ml-1 text-sm text-gray-800 mb-2" style={{ whiteSpace: 'pre-wrap' }}>
                    {item.text}
                </div>

            </div>

            {/* Reply input only if less than max level */}
            {level < MAX_NEST_LEVEL && replyTo === item.id && (
                <div className="flex gap-2 my-2">
                    <input
                        value={replyInput}
                        onChange={e => setReplyInput(e.target.value)}
                        placeholder="Write a reply…"
                        className="flex-1 h-9 border rounded px-2"
                    />
                    <button
                        className="bg-gray-900 text-white px-3 rounded"
                        type="button"
                        onClick={() => {
                            if (replyInput.trim()) {
                                onSendReply(item.id, replyInput.trim());
                                setReplyInput('');
                                setReplyTo(null);
                            }
                        }}
                    >
                        <span className="ml-1">Reply</span>
                    </button>
                </div>
            )}

            {/* Render nested replies recursively or show limit message */}
            {item.replies && item.replies.length > 0 && (
                <div className="mt-2 border-l pl-3 border-gray-300">
                    {level + 1 < MAX_NEST_LEVEL
                        ? renderReplies(item.replies, level + 1)
                        : <div className="text-xs text-gray-500 py-2">Maximum reply depth reached.</div>
                    }
                </div>
            )}
        </div>
    ));


    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-2xl">
            <div className="px-6 py-4 border-b flex items-center justify-between">
                <h3 className="text-lg font-semibold">{title}</h3>
                <button onClick={onClose} className="p-2 rounded-md hover:bg-gray-100">
                    <FiX />
                </button>
            </div>
            <div className="px-6 py-4">
                {/* New comment input */}
                <div className="flex gap-2 mb-4">
                    <input
                        className="flex-1 h-11 border rounded px-3"
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder="Write a comment…"
                    />
                    <button
                        className="bg-gray-900 text-white px-4 rounded"
                        onClick={() => {
                            if (text.trim()) {
                                onSendComment(text.trim());
                                setText('');
                            }
                        }}
                    >
                        {/* <FiSend /> */}
                        <span className="ml-1">Send</span>
                    </button>
                </div>
                {/* Comments + nested replies */}
                <div
                    style={{
                        maxHeight: "60vh",
                        overflowY: "auto",
                        padding: "6px",
                    }}
                    className="custom-scrollbar"
                >
                    {commentLists.length === 0 ? (
                        <p className="text-sm text-gray-500">No comments!!!</p>
                    ) : (
                        renderReplies(commentLists, 0)
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default CommentModal;
