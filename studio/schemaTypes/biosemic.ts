import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'biosemic',
  title: 'BioSEMC',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'year', title: 'Year', type: 'string' }),
    defineField({ name: 'startDate', title: 'Start Date', type: 'datetime' }),
    defineField({ name: 'endDate', title: 'End Date', type: 'datetime' }),
    defineField({ name: 'price', title: 'Price', type: 'string' }),
    defineField({ name: 'eligibility', title: 'Eligibility', type: 'text' }),
    defineField({ name: 'specialNotes', title: 'Special Notes', type: 'text' }),
    defineField({ name: 'isOpen', title: 'Open for Registration', type: 'boolean' }),
  ]
})