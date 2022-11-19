export default function GetPublicBooksStub() {
  return {
    success: true,
    result: [
      {
        bookId: 991,
        name: "Moby Dick",
        ownerId: null,
        author: "Herman Melville"
      },
      {
        bookId: 1001,
        name: "Sun Tzu",
        ownerId: null,
        author: "The Art of War"
      },
      {
        bookId: 1231,
        name: "Wind in the willows",
        ownerId: "pete@logicroom.co",
        author: "Kenneth Graeme"
      },
      {
        bookId: 1241,
        name: "I, Robot",
        ownerId: "pete@logicroom.co",
        author: "Isaac Asimov"
      },
      {
        bookId: 1251,
        name: "The Hobbit",
        ownerId: "pete@logicroom.co",
        author: "Jrr Tolkein"
      }
    ]
  };
}
