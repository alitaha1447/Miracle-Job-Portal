// import React from 'react'

const StartInterview = () => {
    return (
        <>
            {/* <Modal isOpen={openInterview} onClose={toggleInterview} className="max-w-2xl ">
                <div className="relative w-full h-[85vh] bg-white rounded-3xl dark:bg-gray-900 flex flex-col">
                    <div className="px-6 py-5 border-b border-gray-100 dark:border-gray-800 shrink-0">
                        <h4 className="mb-1 text-2xl font-semibold text-gray-800 dark:text-white/90">
                            Interview
                        </h4>
                    </div>

                    <form className="flex-1 overflow-y-auto px-6 py-4 custom-scrollbar">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                            <div>
                                <Label>Name</Label>
                                <Input
                                    type="text"
                                    id="input"
                                    value="Taha"
                                    disabled
                                    className="bg-gray-100 cursor-not-allowed"
                                />
                            </div>
                            <div>
                                <Label>Role</Label>
                                <Select
                                    options={role}
                                    value={{ value: "0", label: "Frontend Developer" }} // fixed value
                                    isDisabled // disables dropdown interaction
                                    placeholder="Select an option"
                                />
                            </div>
                            <div>
                                <Label>Marks</Label>
                                <Input type="text" id="input" />
                            </div>
                            <div className='lg:col-span-2'>
                                <Label>Description</Label>
                                <TextArea
                                    rows={6}
                                />
                            </div>
                        </div>
                    </form>

                    <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 shrink-0">
                        <div className="flex items-center gap-3 lg:justify-end">
                            <Button size="sm" variant="outline" onClick={toggleInterview}>
                                Close
                            </Button>
                            <Button size="sm" onClick={toggleInterview}>Submit</Button>
                        </div>
                    </div>
                </div>
            </Modal> */}
        </>
    )
}

export default StartInterview