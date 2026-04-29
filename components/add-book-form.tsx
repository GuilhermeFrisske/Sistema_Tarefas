"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

interface AddBookFormProps {
  onAddBook: (book: { title: string; author: string; pages: number }) => void;
}

export function AddBookForm({ onAddBook }: AddBookFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !author.trim() || !pages) {
      return;
    }

    onAddBook({
      title: title.trim(),
      author: author.trim(),
      pages: parseInt(pages, 10),
    });

    setTitle("");
    setAuthor("");
    setPages("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Plus className="h-5 w-5" />
          Adicionar Livro
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Titulo</Label>
            <Input
              id="title"
              placeholder="Digite o titulo do livro"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="author">Autor</Label>
            <Input
              id="author"
              placeholder="Digite o nome do autor"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pages">Numero de Paginas</Label>
            <Input
              id="pages"
              type="number"
              placeholder="Digite o numero de paginas"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
              min="1"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Adicionar Livro
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
