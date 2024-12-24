'use client'

import ProjectBoard from '../components/ProjectBoard'

export default function Beta() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow p-4">
        <ProjectBoard />
      </main>
    </div>
  )
}

