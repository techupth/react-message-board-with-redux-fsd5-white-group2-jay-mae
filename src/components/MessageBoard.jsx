import { useSelector, useDispatch } from "react-redux";
import {
  textInput,
  addMessage,
  deleteMessage,
} from "../slices/messageBoardSlice";

function MessageBoard() {
  const text = useSelector((state) => state.textInput.inputText);
  const showMessage = useSelector((state) => state.textInput.showMessage);

  const dispatch = useDispatch();
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(event) => dispatch(textInput(event.target.value))}
            value={text}
          />
        </label>
        <button
          className="submit-message-button"
          onClick={() => dispatch(addMessage())}
        >
          Submit
        </button>
      </div>
      <div className="board">
        {showMessage.map((item, index) => {
          return (
            <div key={index} className="message">
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => dispatch(deleteMessage(index))}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
