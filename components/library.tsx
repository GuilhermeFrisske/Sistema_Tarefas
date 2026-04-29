"use client";

import { useBooks } from "@/hooks/use-books";
import { StatsCard } from "@/components/stats-card";
import { AddBookForm } from "@/components/add-book-form";
import { BookList } from "@/components/book-list";
import { BookOpen, FileText } from "lucide-react";

export function Library() {
  const { books, addBook, removeBook, totalBooks, totalPages } = useBooks();

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Biblioteca
          </h1>
          <p className="mt-2 text-muted-foreground">Gerenciador de Livros</p>
        </header>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <StatsCard
            value={totalBooks}
            label="livros"
            icon={<BookOpen className="h-6 w-6" />}
          />
          <StatsCard
            value={totalPages}
            label="paginas"
            icon={<FileText className="h-6 w-6" />}
          />
        </div>

        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          {/* Book List */}
          <div className="order-2 lg:order-1">
            <h2 className="mb-4 text-lg font-semibold text-foreground">
              Meus Livros
            </h2>
            <BookList books={books} onRemoveBook={removeBook} />
          </div>

          {/* Add Book Form */}
          <div className="order-1 lg:order-2">
            <AddBookForm onAddBook={addBook} />
          </div>
        </div>
      </div>
    </div>
  );
}
