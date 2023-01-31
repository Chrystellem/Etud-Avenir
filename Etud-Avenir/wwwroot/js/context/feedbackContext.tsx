import { createContext } from "react"

export interface IFeedbackContext {
    content: string,
    isSuccessFull: boolean
}

const FeedbackContext = createContext({
    state: {
        content: "",
        isSuccessFull: false,
        show: false
    },
    setFeedbackContent: (state: IFeedbackContext) => { },
});

export default FeedbackContext