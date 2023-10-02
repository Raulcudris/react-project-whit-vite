import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem:(item: string) => void;
}

function ListGroup({items,heading, onSelectItem}: Props) {
 // hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //function
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={()=> {
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
