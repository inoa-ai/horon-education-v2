import { defineConfig } from 'vite'

export default defineConfig({
  base: '/horon-education-v2/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html',
        contact: './contact.html',
        corporate: './corporate.html',
        finance: './finance.html',
        instructors: './instructors.html',
        'it-support': './it-support.html',
        'public-courses': './public-courses.html',
        university: './university.html'
      }
    }
  }
})
