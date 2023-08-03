// App.js
import ListGroup from './components/ListGroup';

function App() {
  let items = [
    "New York",
    'Lisbon',
    'Brussels',
    'Barcelona',
    'Rio de Janeiro',
];

const handleSelectedItem = (item: string) => {
  console.log(item);
}

  return (
    <div>
      <ListGroup items ={item} heading="cities" onSelectedItem={}/>
    </div>
  );
}

export default App;
