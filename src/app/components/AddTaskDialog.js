'use client'

import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function AddTaskDialog({ open, onOpenChange, onSubmit }) {
  const [title, setTitle] = useState('')
  const [subtasks, setSubtasks] = useState([''])

  const handleSubmit = (e) => {
    e.preventDefault()
    const filteredSubtasks = subtasks.filter(st => st.trim() !== '')
    if (title.trim() === '') return

    onSubmit({
      title,
      subtasks: filteredSubtasks.length > 0 ? filteredSubtasks : ['New Subtask']
    })
    
    setTitle('')
    setSubtasks([''])
  }

  const addSubtask = () => {
    setSubtasks([...subtasks, ''])
  }

  const removeSubtask = (index) => {
    setSubtasks(subtasks.filter((_, i) => i !== index))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl text-black font-playfair-display">Add New Task</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Task Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
              className="w-full"
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Subtasks</Label>
            <div className="space-y-2">
              {subtasks.map((subtask, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    value={subtask}
                    onChange={(e) => {
                      const newSubtasks = [...subtasks]
                      newSubtasks[index] = e.target.value
                      setSubtasks(newSubtasks)
                    }}
                    placeholder={`Subtask ${index + 1}`}
                    className="flex-1"
                  />
                  {subtasks.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeSubtask(index)}
                      className="hover:text-red-600"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addSubtask}
              className="w-full mt-2"
            >
              <Plus className="w-4 h-4 mr-2" /> Add Subtask
            </Button>
          </div>
          <Button type="submit" className="w-full bg-black hover:bg-dark-gray transition-all duration-300 ease-in-out">
            Create Task
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
