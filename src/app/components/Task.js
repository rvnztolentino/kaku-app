'use client'

import { useState } from 'react'
import { MoreVertical, ChevronDown, ChevronUp, Plus, Trash2 } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

export default function Task({ task, columnId, onToggleSubtask, onAddSubtask, onDeleteSubtask }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [newSubtaskTitle, setNewSubtaskTitle] = useState('')
  const completedSubtasks = task.subtasks.filter(st => st.completed).length

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({
    id: task.id
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1
  }

  const handleAddSubtask = () => {
    if (newSubtaskTitle.trim()) {
      onAddSubtask(newSubtaskTitle.trim())
      setNewSubtaskTitle('')
    }
  }

  const handleDeleteTask = () => {
    alert('This feature is not implemented yet. Try again later.')
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-move"
    >
      <div className="flex justify-between items-start gap-2">
        <div className="flex-1">
          <h3 className="font-medium text-dark-gray">{task.title}</h3>
          <p className="text-sm text-gray-500 mt-1">
            {completedSubtasks} of {task.subtasks.length} subtasks
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setIsExpanded(true)}>
                <Plus className="w-4 h-4 mr-2" /> Add Subtask
              </DropdownMenuItem>
              <DropdownMenuItem onClick= {handleDeleteTask} className="text-red-600">
                <Trash2 className="w-4 h-4 mr-2" /> Delete Task
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      {isExpanded && (
        <div className="mt-3 space-y-2 pt-3 border-t">
          {task.subtasks.map(subtask => (
            <div key={subtask.id} className="flex items-center gap-2">
              <Checkbox
                id={subtask.id}
                checked={subtask.completed}
                onCheckedChange={() => onToggleSubtask(subtask.id)}
              />
              <label
                htmlFor={subtask.id}
                className={`text-sm flex-1 ${
                  subtask.completed ? 'line-through text-gray-400' : 'text-gray-700'
                }`}
              >
                {subtask.title}
              </label>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDeleteSubtask(subtask.id)}
                className="h-6 w-6 text-gray-400 hover:text-red-600"
              >
                <Trash2 className="w-3 h-3" />
              </Button>
            </div>
          ))}
          <div className="flex gap-2 mt-2">
            <Input
              value={newSubtaskTitle}
              onChange={(e) => setNewSubtaskTitle(e.target.value)}
              placeholder="New subtask"
              className="flex-1"
            />
            <Button onClick={handleAddSubtask} size="sm">
              Add
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

