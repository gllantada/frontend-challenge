import { Message } from "./components/Message";
import { FocusableInput } from "./components/FocusableInput";
import { ImageGallery } from "./components/ImageGallery";
import { PlayerStatus } from "./components/PlayerStatus";
import { TeamsList } from "./components/TeamsList";

import "./App.css";
import { Grocery } from "./components/Grocery";
import { ListItemsForNavigation } from "./components/ListItemsForNavigation";
import { Rating } from "./components/Rating";
const products = [
  { name: "Banana", votes: 0 },
  { name: "Apple", votes: 0 },
  { name: "Onion", votes: 0 },
];
export default function App() {
  const imageLinks = [
    "https://fakeimg.pl/350x200/?text=First%20image",
    "https://fakeimg.pl/350x200/?text=Second%20image",
    "https://fakeimg.pl/350x200/?text=Third%20image",
  ];
  const itemsList = Array(10).fill("item", 0, 10);
  return (
    <div className="App">
      {/* Render here each component from the "components" directory */}
      <h3>'Message' test</h3>
      <Message />
      <br />
      <h3>'FocusableInput' test</h3>
      <FocusableInput />
      <br />
      <h3>'ImageGallery' test</h3>
      <ImageGallery links={imageLinks} />
      <br />
      <h3>'PlayerStatus' test</h3>
      <PlayerStatus />
      <br />
      <h3>'TeamsList' test</h3>
      <TeamsList />
      <h3>'Grocery' test</h3>
      <Grocery products={products}></Grocery>
      <h3>'ListItemsForNavigation' test</h3>
      <ListItemsForNavigation listItems={itemsList}></ListItemsForNavigation>
      <h3>'Rating' test</h3>
      <Rating />
    </div>
  );
}
