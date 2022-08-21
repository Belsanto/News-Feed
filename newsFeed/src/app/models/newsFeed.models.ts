import { Article } from "./article.models";

export interface User_input{
  q:string;
  lang:string;
  from?:string;
  sort_by?:string;
  page:number;
  size?:string;
}

export interface NewsFeed{
  status:string;
  total_hits:string;
  page:number;
  total_pages:number;
  page_size:string;
  articles: Article[];
  user_input: User_input;
}
