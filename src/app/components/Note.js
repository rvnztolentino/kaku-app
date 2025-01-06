'use client';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import EditNoteDialog from './EditNoteDialog';

export default function Note({ note, onDeleteNote, onUpdateNote }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({
    id: note.id
  });

  const [isEditing, setIsEditing] = useState(false);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className={`
          bg-gray-50 rounded-lg p-4 w-[300px] flex-shrink-0
          border border-gray-200 shadow-sm cursor-pointer
          ${isDragging ? 'opacity-50' : ''}
        `}
        onClick={() => setIsEditing(true)}
      >
        <div className="flex justify-between items-start mb-2">
          <h2 className="font-medium text-dark-gray">{note.title}</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation(); 
              onDeleteNote(note.id);
            }}
            className="h-8 w-8 text-gray-600 hover:text-red-600"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-sm text-gray-700">{note.content}</p>
      </div>

      <EditNoteDialog
        open={isEditing}
        onOpenChange={setIsEditing}
        note={note}
        onSubmit={onUpdateNote}
      />
    </>
  );
}
