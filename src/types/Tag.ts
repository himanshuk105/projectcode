export interface Tag {
  id?: string // optional, use from attributes if needed
  type?: string // "textnode", "image", "link", etc.
  tagName?: string // "span", "h1", etc.
  attributes?: { [key: string]: any } // style, id, src, href, alt, etc.
  classes?: string[] // array of CSS or Tailwind classes
  components?: Tag[] // nested children or text nodes
  content?: string // only for type: "textnode"
}
