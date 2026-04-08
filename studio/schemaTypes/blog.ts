import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'author', title: 'Author', type: 'string' }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
    defineField({ name: 'mainImage', title: 'Main Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text' }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] }),
  ]
})