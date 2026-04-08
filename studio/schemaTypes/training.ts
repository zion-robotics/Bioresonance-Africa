import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'training',
  title: 'Training Program',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'date', title: 'Date', type: 'datetime' }),
    defineField({ name: 'price', title: 'Price', type: 'string' }),
    defineField({ name: 'slots', title: 'Available Slots', type: 'number' }),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'isOpen', title: 'Open for Enrollment', type: 'boolean' }),
  ]
})