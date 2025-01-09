'use client'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Plus, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Task from './Task'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

export default function Column({ column, onAddTask, onDeleteColumn, onToggleSubtask, onAddSubtask, onDeleteSubtask, onDeleteTask }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({
    id: column.id
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        bg-gray-50 rounded-lg p-4 w-[300px] flex-shrink-0
        border border-gray-200 shadow-sm
        ${isDragging ? 'opacity-50' : ''}
      `}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <h2 className="font-medium text-dark-gray">{column.title}</h2>
          <span className="text-sm text-gray-500">
            {column.tasks.length}
          </span>
        </div>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={onAddTask}
            className="h-8 w-8 text-gray-600 hover:text-gray-900"
          >
            <Plus className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onDeleteColumn}
            className="h-8 w-8 text-gray-600 hover:text-red-600"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <SortableContext items={column.tasks.map(task => task.id)} strategy={verticalListSortingStrategy}>
        <div className="space-y-2 min-h-[200px]">
          {column.tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              columnId={column.id}
              onToggleSubtask={(subtaskId) => onToggleSubtask(task.id, subtaskId)}
              onAddSubtask={(subtaskTitle) => onAddSubtask(task.id, subtaskTitle)}
              onDeleteSubtask={(subtaskId) => onDeleteSubtask(task.id, subtaskId)}
              onDeleteTask={() => onDeleteTask(task.id)}
            />
          ))}
        </div>
      </SortableContext>
    </div>
  )
}

