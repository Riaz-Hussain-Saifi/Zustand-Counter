import { type SchemaTypeDefinition } from 'sanity'
import { loginSchema } from './login'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [loginSchema],
}

