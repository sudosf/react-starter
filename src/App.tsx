import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["item 1 propped", "item 2", "item 3", "item 4"];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="Headed"
          onSelectItem={handleSelectedItem}
        />
      </div>

      <br />

      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>Alerting</Alert>
        )}

        <Button color="warning" onClick={() => setAlertVisibility(true)}>
          Button Run
        </Button>
      </div>
    </>
  );
}

export default App;
