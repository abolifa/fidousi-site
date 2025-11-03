type Geniric = {
  id: number;
  created_at?: string;
  updated_at?: string;
};

export interface Slider extends Geniric {
  image: string;
  type: string;
  post_id?: number;
  product_id?: number;
  section_id?: number;
  title?: string;
  sub_title?: string;
  actions?: Action[];
}

type Action = {
  url?: string;
  color?: string;
  label?: string;
};

export interface Post extends Geniric {
  title: string;
  slug: string;
  body?: string;
  tags?: string[];
  images?: string[];
}

export interface Product extends Geniric {
  name: string;
  slug: string;
  description?: string;
  tags?: string[];
  main_image?: string;
  images?: string[];
}

export interface Section extends Geniric {
  title: string;
  body?: string;
  images?: string[];
}

export type HomeData = {
  sliders: Slider[];
  posts: Post[];
  products: Product[];
  sections: Section[];
};
