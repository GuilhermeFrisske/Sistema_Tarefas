"use client";

import { useState, useCallback } from "react";
import type { Book } from "@/lib/types";

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);

  const addBook = useCallback(
    (bookData: Omit<Book, "id" | "createdAt">) => {
      const newBook: Book = {
        ...bookData,
        id: crypto.randomUUID(),
        createdAt: new Date(),
      };
      setBooks((prev) => [...prev, newBook]);
    },
    []
  );

  const removeBook = useCallback((id: string) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  }, []);

  const totalBooks = books.length;
  const totalPages = books.reduce((acc, book) => acc + book.pages, 0);

  return {
    books,
    addBook,
    removeBook,
    totalBooks,
    totalPages,
  };
}
