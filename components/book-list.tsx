"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Trash2, User, FileText } from "lucide-react";
import type { Book } from "@/lib/types";

interface BookListProps {
  books: Book[];
  onRemoveBook: (id: string) => void;
}

export function BookList({ books, onRemoveBook }: BookListProps) {
  if (books.length === 0) {
    return (
      <Card className="flex flex-col items-center justify-center py-16">
        <CardContent className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
            <BookOpen className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            Sua biblioteca esta vazia
          </h3>
          <p className="text-sm text-muted-foreground">
            Adicione seu primeiro livro usando o formulario ao lado
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      {books.map((book) => (
        <Card
          key={book.id}
          className="group transition-all hover:shadow-md"
        >
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-foreground truncate">
                  {book.title}
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5" />
                    {book.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <FileText className="h-3.5 w-3.5" />
                    {book.pages} paginas
                  </span>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-muted-foreground opacity-0 transition-opacity hover:text-destructive group-hover:opacity-100"
              onClick={() => onRemoveBook(book.id)}
              aria-label={`Remover ${book.title}`}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
