import { useState } from "react";

// immutable
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // Hook (State)
  // mutable
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0] // variable (selectedIndex)
  // arr[1] // update function

  // Event handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>No Items found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
