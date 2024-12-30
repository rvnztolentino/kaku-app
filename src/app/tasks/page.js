'use client'

import ProjectBoard from '../components/ProjectBoard'

export default function Tasks() {
  return (
    <div className="fade-in-1 min-h-screen flex flex-col mt-4">
      <main className="flex-grow p-4">
        <ProjectBoard />
      </main>
    </div>
  )
}

