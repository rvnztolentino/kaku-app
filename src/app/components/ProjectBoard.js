'use client'

import { useState, useCallback, useEffect } from 'react'
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { arrayMove, SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import { Button } from "@/components/ui/button"
import { PencilLine, Share2, Plus } from 'lucide-react'
import Column from './Column'
import Task from './Task';
import AddTaskDialog from './AddTaskDialog'
import AddColumnDialog from './AddColumnDialog'

export default function ProjectBoard() {
  const [columns, setColumns] = 

  useState(() => {
    const savedColumns = localStorage.getItem('columns');
    return savedColumns ? JSON.parse(savedColumns) : [
      { 
        id: `column-01`, 
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
      { id: `column-02`, title: 'In Progress', tasks: [] },
      { id: `column-03`, title: 'Done', tasks: [] }
    ];
  });

  useEffect(() => {
    localStorage.setItem('columns', JSON.stringify(columns));
  }, [columns]);

  const [isAddingTask, setIsAddingTask] = useState(false)
  const [isAddingColumn, setIsAddingColumn] = useState(false)
  const [activeColumn, setActiveColumn] = useState(null)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  )

  const handleDragEnd = useCallback((event) => {
    const { active, over } = event;
    if (!over) return;
  
    const activeIndex = active.id.split('-');
    const overIndex = over.id.split('-');
  
    if (activeIndex[0] === 'column') {
      const activeColumnIndex = columns.findIndex(col => col.id === active.id);
      const overColumnIndex = columns.findIndex(col => col.id === over.id);
      setColumns(arrayMove(columns, activeColumnIndex, overColumnIndex));
    } else if (activeIndex[0] === 'task') {
      const activeColumn = columns.find(col => col.tasks.some(task => task.id === active.id));
      const overColumn = columns.find(col => col.tasks.some(task => task.id === over.id));
  
      if (activeColumn && overColumn) {
        const activeTaskIndex = activeColumn.tasks.findIndex(task => task.id === active.id);
        const overTaskIndex = overColumn.tasks.findIndex(task => task.id === over.id);
  
        if (activeColumn.id === overColumn.id) {
          const updatedTasks = arrayMove(activeColumn.tasks, activeTaskIndex, overTaskIndex);
          setColumns(prev => prev.map(col => col.id === activeColumn.id ? { ...col, tasks: updatedTasks } : col));
        } else {
          const activeTask = activeColumn.tasks[activeTaskIndex];
          const updatedActiveTasks = [...activeColumn.tasks];
          const updatedOverTasks = [...overColumn.tasks];
          updatedActiveTasks.splice(activeTaskIndex, 1);
          updatedOverTasks.splice(overTaskIndex, 0, activeTask);
  
          setColumns(prev => prev.map(col => {
            if (col.id === activeColumn.id) return { ...col, tasks: updatedActiveTasks };
            if (col.id === overColumn.id) return { ...col, tasks: updatedOverTasks };
            return col;
          }));
        }
      }
    } else if (activeIndex[0] === 'subtask') {
      const activeColumn = columns.find(col => col.tasks.some(task => task.subtasks.some(sub => sub.id === active.id)));
      const overColumn = columns.find(col => col.tasks.some(task => task.subtasks.some(sub => sub.id === over.id)));
  
      if (activeColumn && overColumn) {
        const activeTask = activeColumn.tasks.find(task => task.subtasks.some(sub => sub.id === active.id));
        const overTask = overColumn.tasks.find(task => task.subtasks.some(sub => sub.id === over.id));
  
        if (activeTask && overTask) {
          const activeSubtaskIndex = activeTask.subtasks.findIndex(sub => sub.id === active.id);
          const overSubtaskIndex = overTask.subtasks.findIndex(sub => sub.id === over.id);
  
          if (activeTask.id === overTask.id) {
            const updatedSubtasks = arrayMove(activeTask.subtasks, activeSubtaskIndex, overSubtaskIndex);
            setColumns(prev => prev.map(col => col.id === activeColumn.id ? {
              ...col, tasks: col.tasks.map(task => task.id === activeTask.id ? { ...task, subtasks: updatedSubtasks } : task)
            } : col));
          } else {
            const activeSubtask = activeTask.subtasks[activeSubtaskIndex];
            const updatedActiveSubtasks = [...activeTask.subtasks];
            const updatedOverSubtasks = [...overTask.subtasks];
            updatedActiveSubtasks.splice(activeSubtaskIndex, 1);
            updatedOverSubtasks.splice(overSubtaskIndex, 0, activeSubtask);
  
            setColumns(prev => prev.map(col => {
              if (col.id === activeColumn.id) {
                return {
                  ...col, tasks: col.tasks.map(task => task.id === activeTask.id ? { ...task, subtasks: updatedActiveSubtasks } : task)
                };
              }
              if (col.id === overColumn.id) {
                return {
                  ...col, tasks: col.tasks.map(task => task.id === overTask.id ? { ...task, subtasks: updatedOverSubtasks } : task)
                };
              }
              return col;
            }));
          }
        }
      }
    }
  }, [columns]);  

  const addColumn = useCallback(({ title }) => {
    setColumns(prev => [
      ...prev,
      {
        id: `column-${Date.now()}`,
        title,
        tasks: []
      }
    ])
    setIsAddingColumn(false)
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

  const deleteTask = useCallback((columnId, taskId) => {
    setColumns(prev => prev.map(col => {
      if (col.id === columnId) {
        return {
          ...col,
          tasks: col.tasks.filter(task => task.id !== taskId)
        }
      }
      return col
    }))
  }, [])  

  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <div className="flex justify-between items-center mb-6 px-4">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-playfair-display text-dark-gray">My Tasks</h1>
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
            onClick={() => setIsAddingColumn(true)}
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
                onDeleteTask={(taskId) =>
                  deleteTask(column.id, taskId)}
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
      <AddColumnDialog
        open={isAddingColumn}
        onOpenChange={setIsAddingColumn}
        onSubmit={addColumn}
      />
    </div>
  )
}

