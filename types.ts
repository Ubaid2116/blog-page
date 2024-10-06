export type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
  };
  
  export interface Post extends Base {
    author: Author;
    body: Block[];
    categories: Category[];
    mainImage: Image;
    slug: Slug;
    title: string;
    description: string;
  }
  
  export interface Author extends Base {
    description: string;
    image: Image;
    name: string;
    slug: Slug;
  }
  
  export interface Image {
    _type: "image";
    asset: Reference;
  }
  
  export interface Reference {
    current: string;
    _type: "slug";
  }
  
  export interface Slug {
    _type: "slug";
    current: string;
  }
  
  export interface Block {
    _key: string;
    _type: string;
    children: Span[];
    markDefs: MarkDef[]; // Updated type
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  }

  export interface MarkDef {
    _key: string;
    _type: "link";
    href: string;
  }
  
  export interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
  }
  
  export interface Category extends Base {
    description: string;
    title: string;
  }
  