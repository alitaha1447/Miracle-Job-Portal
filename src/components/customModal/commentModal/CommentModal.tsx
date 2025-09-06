


import React, { useMemo, useState } from "react";
import { FiX, FiSend } from "react-icons/fi";
import { Modal } from "../../ui/modal";

type Reply = {
    id: string;
    author: string;
    text: string;
    createdAt: string; // ISO or formatted
};

type Comment = {
    id: string;
    author: string;
    text: string;
    createdAt: string;
    replies?: Reply[];
};

type CommentModalProps = {
    isOpen: boolean;
    onClose: () => void;

    // data
    comments: Comment[];

    // actions
    onSendComment: (text: string) => void;
    onSendReply: (commentId: string, text: string) => void;

    // optional title
    title?: string;
};

const CommentModal: React.FC<CommentModalProps> = ({
    isOpen,
    onClose,
    comments,
    onSendComment,
    onSendReply,
    title = "Comments",
}) => {
    const [input, setInput] = useState("");
    const [replyingTo, setReplyingTo] = useState<string | null>(null);
    const [replyInput, setReplyInput] = useState("");
    // const inputRef = useRef<HTMLInputElement | null>(null);

    const orderedComments = useMemo(
        () =>
            [...comments].sort(
                (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            ),
        [comments]
    );

    const handleSend = () => {
        const value = input.trim();
        if (!value) return;
        onSendComment(value);
        setInput("");
        // inputRef.current?.focus();
    };

    const handleReply = (commentId: string) => {
        const value = replyInput.trim();
        if (!value) return;
        onSendReply(commentId, value);
        setReplyInput("");
        setReplyingTo(null);
    };

    // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, cb: () => void) => {
    //     if (e.key === "Enter") cb();
    // };

    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-2xl">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white/90">
                    {title}
                </h3>
                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800"
                >
                    <FiX className="h-5 w-5" />
                </button>
            </div>

            {/* Body */}
            <div className="px-6 py-4">
                {/* New comment input */}
                <div className="flex items-stretch gap-2">
                    <input
                        // ref={inputRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        // onKeyDown={(e) => handleKeyDown(e, handleSend)}
                        placeholder="Write a comment…"
                        className="flex-1 h-11 rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-800 outline-none focus:border-gray-400 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"
                    />
                    <button
                        type="button"
                        onClick={handleSend}
                        className="inline-flex items-center gap-2 h-11 rounded-md bg-gray-900 px-4 text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                        <FiSend />
                        <span className="hidden sm:inline">Send</span>
                    </button>
                </div>

                {/* Comments list */}
                <div className="mt-5 space-y-4 max-h-[50vh] overflow-y-auto custom-scrollbar">
                    {orderedComments.length === 0 && (
                        <p className="text-sm text-gray-500">No comments yet. Be the first!</p>
                    )}

                    {orderedComments.map((c) => (
                        <div key={c.id} className="rounded-lg border border-gray-200 dark:border-gray-800 p-3">
                            {/* Comment header */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-semibold text-gray-800 dark:text-white/90">
                                        {c.author}
                                    </span>
                                    <span className="text-xs text-gray-500">{c.createdAt}</span>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setReplyingTo((prev) => (prev === c.id ? null : c.id));
                                        setReplyInput("");
                                    }}
                                    className="text-xs font-medium rounded-md border border-gray-300 px-2 py-1 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-neutral-800"
                                >
                                    {replyingTo === c.id ? "Cancel" : "Reply"}
                                </button>
                            </div>

                            {/* Comment body */}
                            <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">{c.text}</p>

                            {/* Replies */}
                            {c.replies && c.replies.length > 0 && (
                                <div className="mt-3 space-y-3 pl-4 border-l-2 border-gray-100 dark:border-gray-800">
                                    {c.replies.map((r) => (
                                        <div key={r.id} className="text-sm">
                                            <div className="flex items-center gap-2">
                                                <span className="font-medium text-gray-800 dark:text-white/90">
                                                    {r.author}
                                                </span>
                                                <span className="text-xs text-gray-500">{r.createdAt}</span>
                                            </div>
                                            <p className="text-gray-700 dark:text-gray-300 mt-0.5">{r.text}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Reply input */}
                            {replyingTo === c.id && (
                                <div className="mt-3 flex items-stretch gap-2 pl-4">
                                    <input
                                        value={replyInput}
                                        onChange={(e) => setReplyInput(e.target.value)}
                                        // onKeyDown={(e) => handleKeyDown(e, () => handleReply(c.id))}
                                        placeholder="Write a reply…"
                                        className="flex-1 h-10 rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-800 outline-none focus:border-gray-400 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleReply(c.id)}
                                        className="inline-flex items-center gap-2 h-10 rounded-md bg-gray-900 px-3 text-sm font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-300"
                                    >
                                        <FiSend />
                                        <span className="hidden sm:inline">Reply</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
    );
};

export default CommentModal;
