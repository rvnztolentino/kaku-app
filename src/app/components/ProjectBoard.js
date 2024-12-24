'use client'

import { useState, useCallback } from 'react'
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { arrayMove, SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import { Button } from "@/components/ui/button"
import { PencilLine, Share2, Plus } from 'lucide-react'
import Column from './Column'
import AddTaskDialog from './AddTaskDialog'

export default function ProjectBoard() {
  const [columns, setColumns] = useState([
    { 
      id: 'todo', 
      title: 'To Do', 
      tasks: [
        { 
          id: 'task1', 
          title: 'Task 1', 
          subtasks: [
            { id: 'subtask1', title: 'Subtask 1', completed: false },
            { id: 'subtask2', title: 'Subtask 2', completed: false }
          ]
        }
      ]
    },
    { id: 'inProgress', title: 'In Progress', tasks: [] },
    { id: 'done', title: 'Done', tasks: [] }
  ])

  const [isAddingTask, setIsAddingTask] = useState(false)
  const [activeColumn, setActiveColumn] = useState(null)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  )

  const handleDragEnd = useCallback((event) => {
    const { active, over } = event
    if (!over) return

    if (active.id.startsWith('column-')) {
      const activeColumnIndex = columns.findIndex(col => col.id === active.id)
      const overColumnIndex = columns.findIndex(col => col.id === over.id)
      setColumns(arrayMove(columns, activeColumnIndex, overColumnIndex))
    } else {
      const activeColumn = columns.find(col => col.tasks.some(task => task.id === active.id))
      const overColumn = columns.find(col => col.id === over.id)
      
      if (activeColumn && overColumn) {
        setColumns(prev => {
          const updatedColumns = prev.map(col => {
            if (col.id === activeColumn.id) {
              return {
                ...col,
                tasks: col.tasks.filter(task => task.id !== active.id)
              }
            }
            if (col.id === overColumn.id) {
              return {
                ...col,
                tasks: [...col.tasks, activeColumn.tasks.find(task => task.id === active.id)]
              }
            }
            return col
          })
          return updatedColumns
        })
      }
    }
  }, [columns])

  const addColumn = useCallback(() => {
    setColumns(prev => [
      ...prev,
      {
        id: `column-${Date.now()}`,
        title: 'New Column',
        tasks: []
      }
    ])
  }, [])

  const deleteColumn = useCallback((columnId) => {
    setColumns(prev => prev.filter(col => col.id !== columnId))
  }, [])

  const addTask = useCallback((columnId, taskData) => {
    setColumns(prev => prev.map(col => {
      if (col.id === columnId) {
        return {
          ...col,
          tasks: [
            ...col.tasks,
            {
              id: `task-${Date.now()}`,
              title: taskData.title,
              subtasks: taskData.subtasks.map((st, i) => ({
                id: `subtask-${Date.now()}-${i}`,
                title: st,
                completed: false
              }))
            }
          ]
        }
      }
      return col
    }))
    setIsAddingTask(false)
  }, [])

  const toggleSubtask = useCallback((columnId, taskId, subtaskId) => {
    setColumns(prev => prev.map(col => {
      if (col.id === columnId) {
        return {
          ...col,
          tasks: col.tasks.map(task => {
            if (task.id === taskId) {
              return {
                ...task,
                subtasks: task.subtasks.map(st => 
                  st.id === subtaskId ? { ...st, completed: !st.completed } : st
                )
              }
            }
            return task
          })
        }
      }
      return col
    }))
  }, [])

  const addSubtask = useCallback((columnId, taskId, subtaskTitle) => {
    setColumns(prev => prev.map(col => {
      if (col.id === columnId) {
        return {
          ...col,
          tasks: col.tasks.map(task => {
            if (task.id === taskId) {
              return {
                ...task,
                subtasks: [
                  ...task.subtasks,
                  { id: `subtask-${Date.now()}`, title: subtaskTitle, completed: false }
                ]
              }
            }
            return task
          })
        }
      }
      return col
    }))
  }, [])

  const deleteSubtask = useCallback((columnId, taskId, subtaskId) => {
    setColumns(prev => prev.map(col => {
      if (col.id === columnId) {
        return {
          ...col,
          tasks: col.tasks.map(task => {
            if (task.id === taskId) {
              return {
                ...task,
                subtasks: task.subtasks.filter(st => st.id !== subtaskId)
              }
            }
            return task
          })
        }
      }
      return col
    }))
  }, [])

  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <div className="flex justify-between items-center mb-6 px-4">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-playfair-display text-dark-gray">Project 1</h1>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
            <PencilLine className="w-4 h-4 text-gray-600" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-2 text-dark-gray hover:text-gray-700"
          >
            <Share2 className="w-4 h-4" /> Share
          </Button>
          <Button
            onClick={addColumn}
            size="sm"
            className="gap-2 bg-black hover:bg-gray transition-all duration-300 ease-in-out text-white"
          >
            <Plus className="w-4 h-4" /> Add Column
          </Button>
        </div>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-4 p-4 overflow-x-auto min-h-[calc(100vh-200px)]">
          <SortableContext 
            items={columns.map(col => col.id)}
            strategy={horizontalListSortingStrategy}
          >
            {columns.map(column => (
              <Column
                key={column.id}
                column={column}
                onAddTask={() => {
                  setActiveColumn(column.id)
                  setIsAddingTask(true)
                }}
                onDeleteColumn={() => deleteColumn(column.id)}
                onToggleSubtask={(taskId, subtaskId) => 
                  toggleSubtask(column.id, taskId, subtaskId)
                }
                onAddSubtask={(taskId, subtaskTitle) =>
                  addSubtask(column.id, taskId, subtaskTitle)
                }
                onDeleteSubtask={(taskId, subtaskId) =>
                  deleteSubtask(column.id, taskId, subtaskId)
                }
              />
            ))}
          </SortableContext>
        </div>
      </DndContext>

      <AddTaskDialog
        open={isAddingTask}
        onOpenChange={setIsAddingTask}
        onSubmit={(task) => addTask(activeColumn, task)}
      />
    </div>
  )
}

