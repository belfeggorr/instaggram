import { IAuth } from "./IAuth";

export interface IPost {
  _id: string; // ID поста
  description: string; // Описание поста
  likes: string[]; // Массив ID пользователей, поставивших лайки
  comments: unknown[]; // Массив комментариев (может быть уточнён, если структура известна)
  image?: string; // URL
  user: IAuth; // Информация о пользователе, создавшем пост
  created_at: string; // Дата создания поста
}
export type postState = {
  posts: IPost[];
  isLoading: boolean;
  error: string;
};
export type ICreatePost = {
  title: string;
  body: string;
};
