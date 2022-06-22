import { BookList } from './BookList';
import { AddBook } from './AddBook';

interface IBookshelfProps {
  name: string;
}

const Bookshelf = (props: IBookshelfProps) => {
  return (
    <div>
      <h1>{props.name}'s Bookshelf</h1>
      <BookList />
      <AddBook />
    </div>
  );
};

export default Bookshelf;
