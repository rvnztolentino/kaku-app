'use client'
import { useState, useCallback, useEffect } from 'react'
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { arrayMove, SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import { Button } from "@/components/ui/button"
import { Plus, PencilLine } from 'lucide-react'
import Note from './Note'
import AddNoteDialog from './AddNoteDialog'
import EditNoteDialog from './EditNoteDialog'

export default function ProjectNotes() {
  const [notes, setNotes] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedNotes = localStorage.getItem('notes');
      return savedNotes
        ? JSON.parse(savedNotes)
        : [{ id: `note-01`, title: 'Sample Note', content: 'This is a sample note.' }];
    }
    return [{ id: `note-01`, title: 'Sample Note', content: 'This is a sample note.' }];
  });

  const [isAddingNote, setIsAddingNote] = useState(false);
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  }, [notes]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragEnd = useCallback(
    (event) => {
      const { active, over } = event;
      if (!over) return;

      const activeIndex = notes.findIndex((note) => note.id === active.id);
      const overIndex = notes.findIndex((note) => note.id === over.id);

      if (activeIndex !== overIndex) {
        setNotes(arrayMove(notes, activeIndex, overIndex));
      }
    },
    [notes]
  );

  const addNote = useCallback(({ title, content }) => {
    setNotes((prev) => [
      ...prev,
      { id: `note-${Date.now()}`, title, content },
    ]);
    setIsAddingNote(false);
  }, []);

  const editNote = useCallback(({ id, title, content }) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === id ? { ...note, title, content } : note))
    );
    setIsEditingNote(false);
    setSelectedNote(null);
  }, []);

  const deleteNote = useCallback((noteId) => {
    setNotes(prev => prev.filter(note => note.id !== noteId));
  }, []);

  const openEditDialog = (note) => {
    setSelectedNote(note);
    setIsEditingNote(true);
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto flex flex-col h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6 px-4">
        <div className="flex items-center gap-2">
          <PencilLine className="w-6 h-6 text-dark-gray" />
          <h1 className="text-xl font-playfair-display text-dark-gray">My Notes</h1>
        </div>
        <Button
          onClick={() => setIsAddingNote(true)}
          size="sm"
          className="gap-2 bg-black hover:bg-gray transition-all duration-300 ease-in-out text-white"
        >
          <Plus className="w-4 h-4" /> Add Note
        </Button>
      </div>

      {/* Notes Section */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div
          className="grid gap-4 p-4 xs:ml-2 xs:h-5/6 lg:h-2/3 sm:grid-cols-2 lg:grid-cols-4 flex overflow-x-auto"
        >
          <SortableContext
            items={notes.map((note) => note.id)}
            strategy={horizontalListSortingStrategy}
          >
            {notes.map((note) => (
              <Note
                key={note.id}
                note={note}
                onDelete={() => deleteNote(note.id)}
                onEdit={() => openEditDialog(note)}
              />
            ))}
          </SortableContext>
        </div>
      </DndContext>

      {/* Modals */}
      <AddNoteDialog
        open={isAddingNote}
        onOpenChange={setIsAddingNote}
        onSubmit={addNote}
      />

      {selectedNote && (
        <EditNoteDialog
          open={isEditingNote}
          onOpenChange={setIsEditingNote}
          note={selectedNote}
          onSubmit={editNote}
        />
      )}
    </div>

  );
}
