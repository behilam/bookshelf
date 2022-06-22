import { createSignal, Show } from 'solid-js';
import { BookList } from './BookList';
import { AddBook } from './AddBook';

export type Book = {
  title: string;
  author: string;
};

const initialBooks: Book[] = [
  { title: "Code Complete", author: "Steve McConnell" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "Living a Feminist Life", author: "Sarah Ahmed" },
];

interface IBookshelfProps {
  name: string;
}

const Bookshelf = (props: IBookshelfProps) => {
  const [books, setBooks] = createSignal(initialBooks);
  const [showForm, setShowForm] = createSignal(false);
  
  const toggleForm = () => setShowForm(!showForm());

  return (
    <div>
      <h1>{props.name}'s Bookshelf</h1>
      <BookList books={books()} />
      <Show
        when={showForm()}
        fallback={<button onClick={toggleForm}>Add a book</button>}
      >
        <AddBook setBooks={setBooks} />
        <button onClick={toggleForm}>Finished adding books</button>
      </Show>
    </div>
  );
};

export default Bookshelf;
