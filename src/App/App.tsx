import { useState } from "react";
import { AppStyled, FormHolder, FormInput, FormLabel, FormSelect } from "./App.styled";
import ToastContainer from "../ui/ToastContainer";
import UseToasts from "../hooks/useToasts";

type CardType = "NORMAL" | "WARNING" | "ERROR";

function App() {
  const [message, setMessage] = useState<string>("");
  const [time, setTime] = useState<number>(5000);
  const [cardType, setCardType] = useState<CardType>("NORMAL");
  const { addNewToast } = UseToasts();

  return (
    <AppStyled>
      <ToastContainer />
      <h1>Toasts!</h1>
      <FormHolder>
        <FormLabel>
          Message:
          <FormInput value={message} onChange={({ target }) => setMessage(target.value)} />
        </FormLabel>
        <FormLabel>
          Time:
          <FormInput type="number" value={time} onChange={({ target }) => setTime(Number(target.value))} />
        </FormLabel>
        <FormLabel>
          Type:
          <FormSelect size={1} value={cardType} onChange={({ target }) => setCardType(target.value as CardType)}>
            <option value={"NORMAL"}>Normal</option>
            <option value={"WARNING"}>Warning</option>
            <option value={"ERROR"}>Error</option>
          </FormSelect>
        </FormLabel>
        <button onClick={() => addNewToast({ id: Date.now(), duration: time, text: message, type: cardType })}>
          Submit
        </button>
      </FormHolder>
    </AppStyled>
  );
}

export default App;
